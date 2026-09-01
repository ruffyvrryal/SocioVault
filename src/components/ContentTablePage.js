// ContentTablePage Component - Formatted Interactive Content Table with TikTok API Real-Time Sync & Undo Support
window.ContentTablePage = function() {
  const {
    activeAccount,
    contents,
    addContent,
    updateContent,
    deleteContent,
    removeAllContents,
    canEdit,
    setActivePage,
    fetchTikTokData,
    syncTikTokPost,
    syncAllTikTokPosts,
    isSyncingTikTok
  } = React.useContext(window.VaultContext);

  const [searchTerm, setSearchTerm] = React.useState("");
  const [platformFilter, setPlatformFilter] = React.useState("ALL");
  const [statusFilter, setStatusFilter] = React.useState("ALL");
  const [sortBy, setSortBy] = React.useState("uploadDate");
  const [sortOrder, setSortOrder] = React.useState("desc");

  // Edit Modal State
  const [editingContent, setEditingContent] = React.useState(null);

  // TikTok Quick Import Modal State
  const [tiktokModalOpen, setTiktokModalOpen] = React.useState(false);
  const [tiktokUrlInput, setTiktokUrlInput] = React.useState("");
  const [tiktokFetching, setTiktokFetching] = React.useState(false);
  const [tiktokFetchError, setTiktokFetchError] = React.useState("");
  const [tiktokPreview, setTiktokPreview] = React.useState(null);

  // TikTok Tutorial / Guide Modal State
  const [helpModalOpen, setHelpModalOpen] = React.useState(false);

  // Remove All Confirmation Modal State
  const [removeAllModalOpen, setRemoveAllModalOpen] = React.useState(false);

  // Single post syncing loading tracker
  const [syncingItemId, setSyncingItemId] = React.useState(null);

  if (!activeAccount) {
    return <div className="page-container"><p>No active account selected.</p></div>;
  }

  // Filter content items for active account
  const accountContents = React.useMemo(() => {
    return contents.filter(c => c.accountId === activeAccount.id);
  }, [contents, activeAccount.id]);

  // Count TikTok posts
  const tikTokCount = React.useMemo(() => {
    return accountContents.filter(c => c.platform === "TikTok" || c.originalUrl).length;
  }, [accountContents]);

  // Search & Filter
  const filteredContents = React.useMemo(() => {
    return accountContents.filter(item => {
      const matchSearch = 
        (item.caption || "").toLowerCase().includes(searchTerm.toLowerCase()) ||
        (item.hashtags || []).some(h => h.toLowerCase().includes(searchTerm.toLowerCase())) ||
        (item.subjects || []).some(s => s.toLowerCase().includes(searchTerm.toLowerCase()));

      const matchPlatform = platformFilter === "ALL" || item.platform === platformFilter;
      const matchStatus = statusFilter === "ALL" || (item.status || "Uploaded") === statusFilter;

      return matchSearch && matchPlatform && matchStatus;
    }).sort((a, b) => {
      let valA = a[sortBy];
      let valB = b[sortBy];

      if (sortBy === "er") {
        const engA = (a.likes || 0) + (a.comments || 0) + (a.shares || 0) + (a.saves || 0);
        const engB = (b.likes || 0) + (b.comments || 0) + (b.shares || 0) + (b.saves || 0);
        valA = a.impressions ? (engA / a.impressions) : 0;
        valB = b.impressions ? (engB / b.impressions) : 0;
      }

      if (typeof valA === "string") {
        return sortOrder === "asc" ? valA.localeCompare(valB) : valB.localeCompare(valA);
      }
      return sortOrder === "asc" ? (valA || 0) - (valB || 0) : (valB || 0) - (valA || 0);
    });
  }, [accountContents, searchTerm, platformFilter, statusFilter, sortBy, sortOrder]);

  const handleSort = (field) => {
    if (sortBy === field) {
      setSortOrder(prev => prev === "asc" ? "desc" : "asc");
    } else {
      setSortBy(field);
      setSortOrder("desc");
    }
  };

  // ── Edit Handlers ──
  const handleOpenEdit = (item) => {
    setEditingContent({
      ...item,
      hashtagsInput: (item.hashtags || []).join(" "),
      subjectsList: [...(item.subjects || [])],
      subjectInput: ""
    });
  };

  const handleAddEditSubject = () => {
    if (!editingContent || !editingContent.subjectInput.trim()) return;
    const clean = editingContent.subjectInput.trim();
    if (!editingContent.subjectsList.includes(clean)) {
      setEditingContent({
        ...editingContent,
        subjectsList: [...editingContent.subjectsList, clean],
        subjectInput: ""
      });
    }
  };

  const handleRemoveEditSubject = (name) => {
    if (!editingContent) return;
    setEditingContent({
      ...editingContent,
      subjectsList: editingContent.subjectsList.filter(s => s !== name)
    });
  };

  const handleEditSave = (e) => {
    e.preventDefault();
    if (!editingContent) return;

    const hashtagsArray = (editingContent.hashtagsInput || "")
      .split(/[\s,]+/)
      .map(tag => tag.trim())
      .filter(Boolean)
      .map(tag => tag.startsWith("#") ? tag : "#" + tag);

    updateContent(editingContent.id, {
      uploadDate: editingContent.uploadDate,
      platform: editingContent.platform,
      contentType: editingContent.contentType,
      caption: editingContent.caption,
      hashtags: hashtagsArray.length > 0 ? hashtagsArray : ["#social"],
      subjects: editingContent.subjectsList.length > 0 ? editingContent.subjectsList : ["Self"],
      impressions: Number(editingContent.impressions) || 0,
      reach: Number(editingContent.reach) || 0,
      likes: Number(editingContent.likes) || 0,
      comments: Number(editingContent.comments) || 0,
      shares: Number(editingContent.shares) || 0,
      saves: Number(editingContent.saves) || 0,
      status: editingContent.status
    });

    setEditingContent(null);
  };

  // ── TikTok Quick Fetch Handler ──
  const handleFetchTikTokModal = async () => {
    if (!tiktokUrlInput.trim()) {
      setTiktokFetchError("Please enter a TikTok URL or Video ID");
      return;
    }

    setTiktokFetching(true);
    setTiktokFetchError("");
    setTiktokPreview(null);

    try {
      const data = await fetchTikTokData(tiktokUrlInput);
      setTiktokPreview(data);
    } catch (err) {
      setTiktokFetchError(err.message || "Failed to fetch from TikTok API");
    } finally {
      setTiktokFetching(false);
    }
  };

  const handleSaveTikTokPreview = () => {
    if (!tiktokPreview) return;
    addContent(tiktokPreview);
    setTiktokModalOpen(false);
    setTiktokUrlInput("");
    setTiktokPreview(null);
  };

  // ── Single Post TikTok Live Sync ──
  const handleSyncSinglePost = async (itemId) => {
    if (!syncTikTokPost) return;
    setSyncingItemId(itemId);
    try {
      await syncTikTokPost(itemId);
    } finally {
      setSyncingItemId(null);
    }
  };

  // ── Remove All Confirmation Handler ──
  const handleConfirmRemoveAll = () => {
    removeAllContents(activeAccount.id);
    setRemoveAllModalOpen(false);
  };

  return (
    <div className="page-container">
      {/* Header with Title & Top Action Bar */}
      <div className="page-header">
        <div>
          <h1 className="page-title">{activeAccount.name} — Content Logs</h1>
          <p className="page-subtitle">Interactive database of published, scheduled, privated, and deleted posts</p>
        </div>

        <div style={{ display: "flex", gap: "0.6rem", flexWrap: "wrap", alignItems: "center" }}>
          {/* Tutorial / Help Button */}
          <button
            type="button"
            onClick={() => setHelpModalOpen(true)}
            className="btn btn-secondary"
            style={{
              borderColor: "rgba(37,244,238,0.4)",
              color: "#25F4EE",
              background: "rgba(37,244,238,0.1)",
              fontWeight: 700
            }}
            title="TikTok API & Real-Time Sync Tutorial"
          >
            <span>❓ API Guide</span>
          </button>

          {canEdit && (
            <>
              {/* Real-Time Bulk Sync TikTok Button */}
              {tikTokCount > 0 && (
                <button
                  type="button"
                  onClick={() => syncAllTikTokPosts(activeAccount.id)}
                  disabled={isSyncingTikTok}
                  className="btn btn-secondary"
                  style={{
                    background: "linear-gradient(135deg, rgba(16,185,129,0.18), rgba(6,182,212,0.18))",
                    border: "1px solid rgba(16,185,129,0.4)",
                    color: "#10B981",
                    fontWeight: 700
                  }}
                  title="Update impressions, views, likes & metrics for all TikTok posts in real-time"
                >
                  <span style={{ animation: isSyncingTikTok ? "spin 1s linear infinite" : "none", display: "inline-block" }}>🔄</span>
                  <span>{isSyncingTikTok ? "Syncing..." : `Sync Live TikTok (${tikTokCount})`}</span>
                </button>
              )}

              {/* TikTok Quick Import Button */}
              <button
                onClick={() => setTiktokModalOpen(true)}
                className="btn btn-secondary"
                style={{
                  background: "linear-gradient(135deg, rgba(37,244,238,0.15), rgba(254,44,85,0.15))",
                  border: "1px solid rgba(37,244,238,0.35)",
                  color: "#25F4EE",
                  fontWeight: 700
                }}
                title="Import TikTok video automatically using TikTok API"
              >
                <span>🎵 Import TikTok</span>
              </button>

              {/* Add Content Button */}
              <button onClick={() => setActivePage("add-content")} className="btn btn-primary">
                <span>➕ Add Content</span>
              </button>

              {/* Remove All Content Button */}
              {accountContents.length > 0 && (
                <button
                  onClick={() => setRemoveAllModalOpen(true)}
                  className="btn btn-secondary"
                  style={{
                    background: "rgba(244, 63, 94, 0.12)",
                    border: "1px solid rgba(244, 63, 94, 0.35)",
                    color: "#F43F5E",
                    fontWeight: 700
                  }}
                  title="Remove all content records for this account (Undoable)"
                >
                  <span>🗑️ Remove All</span>
                </button>
              )}
            </>
          )}
        </div>
      </div>

      {/* Filter Controls Bar */}
      <div className="glass-card" style={{ marginBottom: "1.5rem", padding: "1rem" }}>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem", alignItems: "center", justifyContent: "space-between" }}>
          
          <div style={{ display: "flex", gap: "0.75rem", flex: 1, minWidth: "260px" }}>
            <input 
              type="text" 
              className="form-input" 
              placeholder="Search caption, hashtag (#tech), or subject (Alex)..." 
              value={searchTerm} 
              onChange={e => setSearchTerm(e.target.value)} 
            />
          </div>

          <div style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap" }}>
            <select className="form-select" style={{ width: "auto" }} value={platformFilter} onChange={e => setPlatformFilter(e.target.value)}>
              <option value="ALL">All Platforms</option>
              <option value="TikTok">TikTok</option>
              <option value="Instagram">Instagram</option>
              <option value="YouTube">YouTube</option>
              <option value="X (Twitter)">X (Twitter)</option>
              <option value="Facebook">Facebook</option>
              <option value="Threads">Threads</option>
            </select>

            <select className="form-select" style={{ width: "auto" }} value={statusFilter} onChange={e => setStatusFilter(e.target.value)}>
              <option value="ALL">All Statuses</option>
              <option value="Uploaded">Uploaded</option>
              <option value="Scheduled">Scheduled</option>
              <option value="Privated">Privated</option>
              <option value="Deleted">Deleted</option>
            </select>
          </div>
        </div>
      </div>

      {/* Table Card Container */}
      <div className="glass-card table-container">
        <table className="content-table">
          <thead>
            <tr>
              <th onClick={() => handleSort("uploadDate")} style={{ cursor: "pointer" }}>
                Date {sortBy === "uploadDate" && (sortOrder === "asc" ? "▲" : "▼")}
              </th>
              <th>Platform</th>
              <th>Status</th>
              <th>Caption & Hashtags</th>
              <th>Subjects</th>
              <th onClick={() => handleSort("impressions")} style={{ cursor: "pointer" }}>
                Views / Imp {sortBy === "impressions" && (sortOrder === "asc" ? "▲" : "▼")}
              </th>
              <th onClick={() => handleSort("reach")} style={{ cursor: "pointer" }}>
                Reach {sortBy === "reach" && (sortOrder === "asc" ? "▲" : "▼")}
              </th>
              <th onClick={() => handleSort("likes")} style={{ cursor: "pointer" }}>
                Likes {sortBy === "likes" && (sortOrder === "asc" ? "▲" : "▼")}
              </th>
              <th onClick={() => handleSort("comments")} style={{ cursor: "pointer" }}>
                Comments {sortBy === "comments" && (sortOrder === "asc" ? "▲" : "▼")}
              </th>
              <th onClick={() => handleSort("shares")} style={{ cursor: "pointer" }}>
                Shares {sortBy === "shares" && (sortOrder === "asc" ? "▲" : "▼")}
              </th>
              <th onClick={() => handleSort("saves")} style={{ cursor: "pointer" }}>
                Saves {sortBy === "saves" && (sortOrder === "asc" ? "▲" : "▼")}
              </th>
              <th onClick={() => handleSort("er")} style={{ cursor: "pointer" }}>
                ER% {sortBy === "er" && (sortOrder === "asc" ? "▲" : "▼")}
              </th>
              {canEdit && <th style={{ textAlign: "right" }}>Actions</th>}
            </tr>
          </thead>
          <tbody>
            {filteredContents.map(item => {
              const eng = (item.likes || 0) + (item.comments || 0) + (item.shares || 0) + (item.saves || 0);
              const er = item.impressions ? ((eng / item.impressions) * 100).toFixed(2) : "0.00";
              const isTikTok = item.platform === "TikTok" || !!item.originalUrl;
              const isItemSyncing = syncingItemId === item.id;

              const statusBadge = 
                item.status === 'Uploaded' ? 'badge-uploaded' :
                item.status === 'Scheduled' ? 'badge-scheduled' :
                item.status === 'Privated' ? 'badge-privated' : 'badge-deleted';

              return (
                <tr key={item.id}>
                  <td style={{ whiteSpace: "nowrap", fontSize: "0.85rem" }}>
                    <div>{item.uploadDate || "-"}</div>
                    {item.uploadTime && <div style={{ fontSize: "0.72rem", color: "var(--text-subtle)" }}>{item.uploadTime}</div>}
                  </td>
                  <td>
                    <span className="badge" style={{
                      background: item.platform === "TikTok" ? "rgba(37,244,238,0.15)" : (item.platform === "Instagram" ? "rgba(225,48,108,0.15)" : "rgba(255,255,255,0.08)"),
                      color: item.platform === "TikTok" ? "#25F4EE" : (item.platform === "Instagram" ? "#E1306C" : "#fff"),
                      border: `1px solid ${item.platform === "TikTok" ? "rgba(37,244,238,0.3)" : "var(--border-color)"}`
                    }}>
                      {item.platform}
                    </span>
                  </td>
                  <td>
                    <span className={`badge ${statusBadge}`}>
                      {item.status || "Uploaded"}
                    </span>
                  </td>
                  <td style={{ maxWidth: "260px" }}>
                    <div style={{ fontWeight: 600, fontSize: "0.88rem", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }} title={item.caption}>
                      {item.caption || "(No caption)"}
                    </div>
                    {item.hashtags && item.hashtags.length > 0 && (
                      <div style={{ display: "flex", flexWrap: "wrap", gap: "0.25rem", marginTop: "0.3rem" }}>
                        {item.hashtags.slice(0, 3).map((h, i) => (
                          <span key={i} className="chip chip-hashtag" style={{ fontSize: "0.7rem", padding: "0.1rem 0.35rem" }}>
                            {h}
                          </span>
                        ))}
                        {item.hashtags.length > 3 && (
                          <span style={{ fontSize: "0.7rem", color: "var(--text-subtle)" }}>+{item.hashtags.length - 3}</span>
                        )}
                      </div>
                    )}
                  </td>
                  <td>
                    <div style={{ display: "flex", flexWrap: "wrap", gap: "0.25rem" }}>
                      {(item.subjects || []).map((s, i) => (
                        <span key={i} className="chip chip-subject" style={{ fontSize: "0.72rem", padding: "0.1rem 0.4rem" }}>
                          👤 {s}
                        </span>
                      ))}
                    </div>
                  </td>
                  <td style={{ fontWeight: 700 }}>{(item.impressions || 0).toLocaleString()}</td>
                  <td>{(item.reach || 0).toLocaleString()}</td>
                  <td>{(item.likes || 0).toLocaleString()}</td>
                  <td>{(item.comments || 0).toLocaleString()}</td>
                  <td>{(item.shares || 0).toLocaleString()}</td>
                  <td>{(item.saves || 0).toLocaleString()}</td>
                  <td style={{ fontWeight: 700, color: Number(er) > 5 ? "var(--accent-emerald)" : "var(--text-normal)" }}>
                    {er}%
                  </td>
                  {canEdit && (
                    <td style={{ textAlign: "right", whiteSpace: "nowrap" }}>
                      <div style={{ display: "inline-flex", gap: "0.4rem" }}>
                        {/* Real-time single post live sync for TikTok */}
                        {isTikTok && (
                          <button
                            type="button"
                            onClick={() => handleSyncSinglePost(item.id)}
                            disabled={isItemSyncing}
                            className="btn btn-sm btn-secondary"
                            style={{
                              padding: "0.25rem 0.45rem",
                              fontSize: "0.75rem",
                              borderColor: "rgba(37,244,238,0.4)",
                              color: "#25F4EE"
                            }}
                            title="Live sync latest metrics from TikTok API"
                          >
                            <span style={{ animation: isItemSyncing ? "spin 0.8s linear infinite" : "none", display: "inline-block" }}>🔄</span>
                          </button>
                        )}
                        <button
                          type="button"
                          onClick={() => handleOpenEdit(item)}
                          className="btn btn-sm btn-secondary"
                          style={{ padding: "0.25rem 0.55rem", fontSize: "0.75rem" }}
                          title="Edit post"
                        >
                          ✏️ Edit
                        </button>
                        <button
                          type="button"
                          onClick={() => deleteContent(item.id)}
                          className="btn btn-sm btn-secondary"
                          style={{ padding: "0.25rem 0.45rem", fontSize: "0.75rem", color: "#F43F5E" }}
                          title="Delete post (Undoable)"
                        >
                          🗑️
                        </button>
                      </div>
                    </td>
                  )}
                </tr>
              );
            })}
            {filteredContents.length === 0 && (
              <tr>
                <td colSpan={canEdit ? 13 : 12} style={{ textAlign: "center", padding: "3rem", color: "var(--text-muted)" }}>
                  No content records found matching your filters.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* ══ TIKTOK QUICK IMPORT MODAL ══ */}
      {tiktokModalOpen && (
        <div className="modal-overlay" onClick={() => setTiktokModalOpen(false)}>
          <div className="modal-content" style={{ maxWidth: "580px", width: "90%" }} onClick={e => e.stopPropagation()}>
            <div className="modal-header" style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "1.25rem" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "0.6rem" }}>
                <span style={{ fontSize: "1.3rem" }}>🎵</span>
                <h2 className="modal-title" style={{ margin: 0, fontSize: "1.25rem", fontWeight: 700 }}>
                  Import from TikTok API
                </h2>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                <button
                  type="button"
                  onClick={() => setHelpModalOpen(true)}
                  className="btn btn-sm btn-secondary"
                  style={{ fontSize: "0.75rem", borderColor: "rgba(37,244,238,0.4)", color: "#25F4EE" }}
                >
                  ❓ Guide
                </button>
                <button 
                  type="button" 
                  onClick={() => setTiktokModalOpen(false)} 
                  className="btn btn-secondary btn-icon"
                  style={{ width: "30px", height: "30px", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center" }}
                  title="Close"
                >
                  ✕
                </button>
              </div>
            </div>

            <div style={{ marginBottom: "1.25rem" }}>
              <label className="form-label">TikTok Video URL or Video ID</label>
              <div style={{ display: "flex", gap: "0.6rem" }}>
                <input
                  type="text"
                  className="form-input"
                  placeholder="https://www.tiktok.com/@creator/video/123456... or https://vt.tiktok.com/..."
                  value={tiktokUrlInput}
                  onChange={e => setTiktokUrlInput(e.target.value)}
                  disabled={tiktokFetching}
                />
                <button
                  type="button"
                  onClick={handleFetchTikTokModal}
                  disabled={tiktokFetching || !tiktokUrlInput.trim()}
                  className="btn btn-primary"
                  style={{
                    background: "linear-gradient(135deg, #25F4EE, #FE2C55)",
                    color: "#000",
                    fontWeight: 800,
                    border: "none",
                    minWidth: "110px"
                  }}
                >
                  {tiktokFetching ? "⏳ Fetching" : "⚡ Fetch"}
                </button>
              </div>
              {tiktokFetchError && (
                <div style={{ marginTop: "0.5rem", color: "#F43F5E", fontSize: "0.8rem" }}>
                  ⚠️ {tiktokFetchError}
                </div>
              )}
            </div>

            {/* Preview of Extracted Data */}
            {tiktokPreview && (
              <div style={{
                padding: "1rem",
                borderRadius: "10px",
                background: "rgba(255,255,255,0.04)",
                border: "1px solid var(--border-color)",
                marginBottom: "1.25rem"
              }}>
                <div style={{ fontSize: "0.75rem", textTransform: "uppercase", color: "var(--text-muted)", fontWeight: 700, marginBottom: "0.5rem" }}>
                  Preview of Extracted Post:
                </div>
                <div style={{ fontWeight: 600, fontSize: "0.92rem", marginBottom: "0.4rem" }}>
                  {tiktokPreview.caption}
                </div>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "0.3rem", marginBottom: "0.75rem" }}>
                  {tiktokPreview.hashtags.map((h, i) => (
                    <span key={i} className="chip chip-hashtag" style={{ fontSize: "0.75rem" }}>{h}</span>
                  ))}
                </div>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "0.5rem", fontSize: "0.8rem", background: "rgba(0,0,0,0.2)", padding: "0.6rem", borderRadius: "8px" }}>
                  <div>👀 Views: <strong>{tiktokPreview.impressions.toLocaleString()}</strong></div>
                  <div>❤️ Likes: <strong>{tiktokPreview.likes.toLocaleString()}</strong></div>
                  <div>💬 Comments: <strong>{tiktokPreview.comments.toLocaleString()}</strong></div>
                </div>
              </div>
            )}

            <div style={{ display: "flex", justifyContent: "flex-end", gap: "0.75rem" }}>
              <button type="button" onClick={() => setTiktokModalOpen(false)} className="btn btn-secondary">
                Cancel
              </button>
              <button
                type="button"
                onClick={handleSaveTikTokPreview}
                disabled={!tiktokPreview}
                className="btn btn-primary"
              >
                💾 Save to Content Table
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ══ REMOVE ALL CONTENT CONFIRMATION MODAL ══ */}
      {removeAllModalOpen && (
        <div className="modal-overlay" onClick={() => setRemoveAllModalOpen(false)}>
          <div className="modal-content" style={{ maxWidth: "480px", width: "90%", textAlign: "center", padding: "2rem" }} onClick={e => e.stopPropagation()}>
            <div style={{ width: "56px", height: "56px", borderRadius: "50%", background: "rgba(244, 63, 94, 0.15)", color: "#F43F5E", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.8rem", margin: "0 auto 1.25rem" }}>
              🗑️
            </div>
            <h2 style={{ fontSize: "1.35rem", fontWeight: 800, marginBottom: "0.6rem" }}>
              Remove All Content?
            </h2>
            <p style={{ color: "var(--text-muted)", fontSize: "0.9rem", lineHeight: 1.5, marginBottom: "1.25rem" }}>
              This will remove all <strong>{accountContents.length}</strong> content records for <strong>{activeAccount.name}</strong>.
            </p>

            <div style={{ padding: "0.75rem 1rem", borderRadius: "8px", background: "rgba(139,92,246,0.1)", border: "1px solid rgba(139,92,246,0.25)", fontSize: "0.82rem", color: "var(--accent-primary-light)", marginBottom: "1.5rem" }}>
              💡 <strong>Don't worry:</strong> You can immediately restore everything anytime by clicking the <strong>Undo</strong> button or pressing <strong>Ctrl+Z</strong>.
            </div>

            <div style={{ display: "flex", justifyContent: "flex-end", gap: "0.75rem" }}>
              <button type="button" onClick={() => setRemoveAllModalOpen(false)} className="btn btn-secondary">
                Cancel
              </button>
              <button
                type="button"
                onClick={handleConfirmRemoveAll}
                className="btn btn-danger"
                style={{ fontWeight: 700 }}
              >
                Yes, Remove All Records
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ══ EDIT CONTENT MODAL ══ */}
      {editingContent && (
        <div className="modal-overlay" onClick={() => setEditingContent(null)}>
          <div className="modal-content" style={{ maxWidth: "800px", width: "90%", maxHeight: "90vh", overflowY: "auto" }} onClick={e => e.stopPropagation()}>
            <div className="modal-header" style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "1.25rem" }}>
              <h2 className="modal-title" style={{ margin: 0, fontSize: "1.35rem", fontWeight: 700 }}>Edit Content Entry</h2>
              <button 
                type="button" 
                onClick={() => setEditingContent(null)} 
                className="btn btn-secondary btn-icon"
                style={{ cursor: "pointer", width: "32px", height: "32px", display: "flex", alignItems: "center", justifyContent: "center" }}
                title="Close"
              >
                <span style={{ fontSize: "1.2rem", lineHeight: 1, fontWeight: "bold" }}>✕</span>
              </button>
            </div>

            <form onSubmit={handleEditSave}>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.25rem", marginBottom: "1rem" }}>
                <div className="form-group">
                  <label className="form-label">Upload / Scheduled Date</label>
                  <input 
                    type="date" 
                    className="form-input" 
                    required 
                    value={editingContent.uploadDate} 
                    onChange={e => setEditingContent({ ...editingContent, uploadDate: e.target.value })} 
                  />
                </div>
                <div className="form-group">
                  <label className="form-label">Platform</label>
                  <select 
                    className="form-select" 
                    value={editingContent.platform} 
                    onChange={e => setEditingContent({ ...editingContent, platform: e.target.value })}
                  >
                    <option value="TikTok">TikTok</option>
                    <option value="Instagram">Instagram</option>
                    <option value="YouTube">YouTube</option>
                    <option value="X (Twitter)">X (Twitter)</option>
                    <option value="Facebook">Facebook</option>
                    <option value="Threads">Threads</option>
                  </select>
                </div>
              </div>

              <div className="form-group" style={{ marginBottom: "1rem" }}>
                <label className="form-label">Content Type</label>
                <input 
                  type="text" 
                  className="form-input" 
                  placeholder="e.g. Video, Reels, Carousel..." 
                  value={editingContent.contentType} 
                  onChange={e => setEditingContent({ ...editingContent, contentType: e.target.value })} 
                />
              </div>

              <div className="form-group" style={{ marginBottom: "1rem" }}>
                <label className="form-label">Caption / Post Text</label>
                <textarea 
                  className="form-textarea" 
                  rows="3" 
                  required 
                  value={editingContent.caption} 
                  onChange={e => setEditingContent({ ...editingContent, caption: e.target.value })}
                ></textarea>
              </div>

              <div className="form-group" style={{ marginBottom: "1rem" }}>
                <label className="form-label">Hashtags (space or comma separated)</label>
                <input 
                  type="text" 
                  className="form-input" 
                  value={editingContent.hashtagsInput} 
                  onChange={e => setEditingContent({ ...editingContent, hashtagsInput: e.target.value })} 
                />
              </div>

              {/* Multi-Subject Editor */}
              <div className="form-group" style={{ marginBottom: "1.25rem" }}>
                <label className="form-label">Subject / People Featured</label>
                <div style={{ display: "flex", gap: "0.5rem", marginBottom: "0.5rem" }}>
                  <input 
                    type="text" 
                    className="form-input" 
                    placeholder="Type person's name (e.g. Sarah, Jordan)..." 
                    value={editingContent.subjectInput} 
                    onChange={e => setEditingContent({ ...editingContent, subjectInput: e.target.value })}
                    onKeyDown={e => {
                      if (e.key === "Enter") {
                        e.preventDefault();
                        handleAddEditSubject();
                      }
                    }} 
                  />
                  <button type="button" onClick={handleAddEditSubject} className="btn btn-secondary">
                    Add
                  </button>
                </div>

                <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem" }}>
                  {editingContent.subjectsList.map(name => (
                    <span key={name} className="chip chip-subject" style={{ display: "inline-flex", alignItems: "center", gap: "0.3rem" }}>
                      👤 {name}
                      <button 
                        type="button" 
                        onClick={() => handleRemoveEditSubject(name)} 
                        style={{ background: "none", border: "none", color: "inherit", cursor: "pointer", padding: "0 2px", fontWeight: "bold", fontSize: "0.85rem", lineHeight: 1 }} 
                        title="Remove subject"
                      >
                        ✕
                      </button>
                    </span>
                  ))}
                </div>
              </div>

              <hr style={{ borderColor: "var(--border-color)", margin: "1.25rem 0" }} />

              <h3 style={{ fontSize: "1.05rem", fontWeight: 700, marginBottom: "1rem" }}>Content Performance Metrics</h3>

              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(130px, 1fr))", gap: "0.85rem", marginBottom: "1rem" }}>
                <div className="form-group"><label className="form-label">Impressions</label><input type="number" className="form-input" min="0" value={editingContent.impressions} onChange={e => setEditingContent({ ...editingContent, impressions: e.target.value })} /></div>
                <div className="form-group"><label className="form-label">Reach</label><input type="number" className="form-input" min="0" value={editingContent.reach} onChange={e => setEditingContent({ ...editingContent, reach: e.target.value })} /></div>
                <div className="form-group"><label className="form-label">Likes</label><input type="number" className="form-input" min="0" value={editingContent.likes} onChange={e => setEditingContent({ ...editingContent, likes: e.target.value })} /></div>
                <div className="form-group"><label className="form-label">Comments</label><input type="number" className="form-input" min="0" value={editingContent.comments} onChange={e => setEditingContent({ ...editingContent, comments: e.target.value })} /></div>
                <div className="form-group"><label className="form-label">Shares</label><input type="number" className="form-input" min="0" value={editingContent.shares} onChange={e => setEditingContent({ ...editingContent, shares: e.target.value })} /></div>
                <div className="form-group"><label className="form-label">Saves</label><input type="number" className="form-input" min="0" value={editingContent.saves} onChange={e => setEditingContent({ ...editingContent, saves: e.target.value })} /></div>
              </div>

              <div className="form-group" style={{ marginBottom: "1rem" }}>
                <label className="form-label">Post Status</label>
                <select 
                  className="form-select" 
                  value={editingContent.status} 
                  onChange={e => setEditingContent({ ...editingContent, status: e.target.value })}
                >
                  <option value="Uploaded">Uploaded</option>
                  <option value="Scheduled">Scheduled</option>
                  <option value="Privated">Privated</option>
                  <option value="Deleted">Deleted</option>
                </select>
              </div>

              <div style={{ display: "flex", justifyContent: "flex-end", gap: "0.75rem", marginTop: "1.5rem" }}>
                <button type="button" onClick={() => setEditingContent(null)} className="btn btn-secondary">Cancel</button>
                <button type="submit" className="btn btn-primary">Save Changes</button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* ── Interactive TikTok Help Guide Modal ── */}
      {window.TikTokHelpModal && (
        <window.TikTokHelpModal isOpen={helpModalOpen} onClose={() => setHelpModalOpen(false)} />
      )}
    </div>
  );
};
