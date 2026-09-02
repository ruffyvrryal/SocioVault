// ContentTablePage Component - Modern, Compact Interactive Content Logs with TikTok Account & Single Video Auto-Sync
window.ContentTablePage = function() {
  const { 
    activeAccount, 
    contents, 
    addContent, 
    updateContent, 
    deleteContent, 
    canEdit, 
    setActivePage, 
    fetchTikTokData,
    syncTikTokAccount,
    syncTikTokPost, 
    syncAllTikTokPosts, 
    isSyncingTikTok,
    removeAllContents 
  } = React.useContext(window.VaultContext);

  const [searchTerm, setSearchTerm] = React.useState("");
  const [platformFilter, setPlatformFilter] = React.useState("ALL");
  const [statusFilter, setStatusFilter] = React.useState("ALL");
  const [sortBy, setSortBy] = React.useState("uploadDate");
  const [sortOrder, setSortOrder] = React.useState("desc");

  // Quick TikTok Modal State (supports single video & entire account sync)
  const [tiktokModalOpen, setTiktokModalOpen] = React.useState(false);
  const [tiktokModalMode, setTiktokModalMode] = React.useState("account"); // "account" | "single"
  const [tiktokUrlInput, setTiktokUrlInput] = React.useState("");
  const [tiktokFetching, setTiktokFetching] = React.useState(false);
  const [tiktokFetchError, setTiktokFetchError] = React.useState("");
  const [tiktokPreview, setTiktokPreview] = React.useState(null);
  const [tiktokAccountResult, setTiktokAccountResult] = React.useState(null);

  // Edit Modal State
  const [editingContent, setEditingContent] = React.useState(null);

  // Remove All Modal State
  const [removeAllModalOpen, setRemoveAllModalOpen] = React.useState(false);

  // Guide Tutorial Modal State
  const [helpModalOpen, setHelpModalOpen] = React.useState(false);

  // Single Item Syncing State Indicator
  const [syncingItemId, setSyncingItemId] = React.useState(null);

  if (!activeAccount) {
    return <div className="page-container"><p>No active account selected.</p></div>;
  }

  const accountContents = contents.filter(c => c.accountId === activeAccount.id);
  const tikTokItems = accountContents.filter(c => c.platform === "TikTok" || c.originalUrl);
  const tikTokCount = tikTokItems.length;

  const tikTokPlatform = (activeAccount.platforms || []).find(p => p.name === "TikTok");

  // Filtering & Sorting
  const filteredAndSortedContents = React.useMemo(() => {
    return accountContents.filter(item => {
      const q = searchTerm.toLowerCase();
      const matchesSearch = !searchTerm ||
        (item.caption || "").toLowerCase().includes(q) ||
        (item.contentType || "").toLowerCase().includes(q) ||
        (item.hashtags || []).some(h => h.toLowerCase().includes(q)) ||
        (item.subjects || []).some(s => s.toLowerCase().includes(q));

      const matchesPlatform = platformFilter === "ALL" || item.platform === platformFilter;
      const matchesStatus = statusFilter === "ALL" || (item.status || "Uploaded") === statusFilter;

      return matchesSearch && matchesPlatform && matchesStatus;
    }).sort((a, b) => {
      let valA = a[sortBy];
      let valB = b[sortBy];

      if (sortBy === "er") {
        valA = a.reach > 0 ? ((a.likes + a.comments + a.shares + a.saves) / a.reach) * 100 : 0;
        valB = b.reach > 0 ? ((b.likes + b.comments + b.shares + b.saves) / b.reach) * 100 : 0;
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
      setTiktokFetchError("Please enter a TikTok URL, Video ID, or @account");
      return;
    }

    setTiktokFetching(true);
    setTiktokFetchError("");
    setTiktokPreview(null);
    setTiktokAccountResult(null);

    try {
      if (tiktokModalMode === "account") {
        const res = await syncTikTokAccount(activeAccount.id, tiktokUrlInput, {
          importPosts: true,
          updateFollowers: true
        });
        setTiktokAccountResult(res);
      } else {
        const data = await fetchTikTokData(tiktokUrlInput);
        setTiktokPreview(data);
      }
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

        <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap", alignItems: "center" }}>
          {/* Tutorial / Help Button */}
          <button
            type="button"
            onClick={() => setHelpModalOpen(true)}
            className="btn btn-sm btn-secondary"
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
              {/* Auto-Sync TikTok Account Button */}
              <button
                onClick={() => {
                  setTiktokModalMode("account");
                  setTiktokUrlInput(tikTokPlatform?.handle || "");
                  setTiktokModalOpen(true);
                }}
                className="btn btn-sm btn-primary"
                style={{
                  background: "linear-gradient(135deg, #25F4EE, #FE2C55)",
                  color: "#000",
                  fontWeight: 800
                }}
                title="Add TikTok account link to auto-read all posts in real-time"
              >
                <span>🎵 Auto-Sync Account</span>
              </button>

              {/* Real-Time Bulk Refresh Button */}
              {tikTokCount > 0 && (
                <button
                  type="button"
                  onClick={() => syncAllTikTokPosts(activeAccount.id)}
                  disabled={isSyncingTikTok}
                  className="btn btn-sm btn-secondary"
                  style={{
                    background: "linear-gradient(135deg, rgba(16,185,129,0.18), rgba(6,182,212,0.18))",
                    border: "1px solid rgba(16,185,129,0.4)",
                    color: "#10B981",
                    fontWeight: 700
                  }}
                  title="Update impressions, views, likes & metrics for all TikTok posts in real-time"
                >
                  <span style={{ animation: isSyncingTikTok ? "spin 1s linear infinite" : "none", display: "inline-block" }}>🔄</span>
                  <span>{isSyncingTikTok ? "Syncing..." : `Live Sync (${tikTokCount})`}</span>
                </button>
              )}

              {/* Manual Add Content Button */}
              <button onClick={() => setActivePage("add-content")} className="btn btn-sm btn-secondary" style={{ fontWeight: 700 }}>
                <span>➕ Add Post</span>
              </button>

              {/* Remove All Content Button */}
              {accountContents.length > 0 && (
                <button
                  onClick={() => setRemoveAllModalOpen(true)}
                  className="btn btn-sm btn-danger"
                  style={{ fontWeight: 700 }}
                  title="Delete all content logs for this account (undoable with Ctrl+Z)"
                >
                  <span>🗑️ Remove All</span>
                </button>
              )}
            </>
          )}
        </div>
      </div>

      {/* Filter and Search Bar */}
      <div className="glass-card" style={{ padding: "0.85rem 1.15rem", borderRadius: "12px", display: "flex", gap: "0.75rem", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between" }}>
        <div style={{ display: "flex", gap: "0.6rem", flexWrap: "wrap", flex: 1, alignItems: "center" }}>
          <input
            type="text"
            className="form-input"
            style={{ maxWidth: "260px", minHeight: "34px", fontSize: "0.82rem", padding: "0.35rem 0.75rem" }}
            placeholder="Search caption, tags, subject..."
            value={searchTerm}
            onChange={e => setSearchTerm(e.target.value)}
          />

          <select
            className="form-select"
            style={{ width: "auto", minHeight: "34px", fontSize: "0.82rem", padding: "0.35rem 1.8rem 0.35rem 0.75rem" }}
            value={platformFilter}
            onChange={e => setPlatformFilter(e.target.value)}
          >
            <option value="ALL">All Platforms</option>
            <option value="TikTok">TikTok</option>
            <option value="Instagram">Instagram</option>
            <option value="YouTube">YouTube</option>
            <option value="X (Twitter)">X (Twitter)</option>
            <option value="Facebook">Facebook</option>
            <option value="Threads">Threads</option>
          </select>

          <select
            className="form-select"
            style={{ width: "auto", minHeight: "34px", fontSize: "0.82rem", padding: "0.35rem 1.8rem 0.35rem 0.75rem" }}
            value={statusFilter}
            onChange={e => setStatusFilter(e.target.value)}
          >
            <option value="ALL">All Statuses</option>
            <option value="Uploaded">Uploaded (Live)</option>
            <option value="Scheduled">Scheduled</option>
            <option value="Privated">Privated</option>
            <option value="Deleted">Deleted</option>
          </select>
        </div>

        <div style={{ fontSize: "0.78rem", color: "var(--text-muted)", fontWeight: 600 }}>
          Showing <strong style={{ color: "#fff" }}>{filteredAndSortedContents.length}</strong> of {accountContents.length} posts
        </div>
      </div>

      {/* Main Data Table */}
      <div className="table-container">
        <table className="content-table">
          <thead>
            <tr>
              <th onClick={() => handleSort("uploadDate")} style={{ cursor: "pointer" }}>
                Date {sortBy === "uploadDate" && (sortOrder === "asc" ? "▲" : "▼")}
              </th>
              <th>Platform</th>
              <th>Caption & Hashtags</th>
              <th>Subjects</th>
              <th onClick={() => handleSort("impressions")} style={{ cursor: "pointer", textAlign: "right" }}>
                Views {sortBy === "impressions" && (sortOrder === "asc" ? "▲" : "▼")}
              </th>
              <th onClick={() => handleSort("likes")} style={{ cursor: "pointer", textAlign: "right" }}>
                Likes {sortBy === "likes" && (sortOrder === "asc" ? "▲" : "▼")}
              </th>
              <th onClick={() => handleSort("comments")} style={{ cursor: "pointer", textAlign: "right" }}>
                Comments {sortBy === "comments" && (sortOrder === "asc" ? "▲" : "▼")}
              </th>
              <th onClick={() => handleSort("er")} style={{ cursor: "pointer", textAlign: "right" }}>
                ER% {sortBy === "er" && (sortOrder === "asc" ? "▲" : "▼")}
              </th>
              <th>Status</th>
              {canEdit && <th style={{ textAlign: "center" }}>Actions</th>}
            </tr>
          </thead>
          <tbody>
            {filteredAndSortedContents.map(item => {
              const eng = (item.likes || 0) + (item.comments || 0) + (item.shares || 0) + (item.saves || 0);
              const er = item.reach > 0 ? ((eng / item.reach) * 100).toFixed(2) : (item.impressions > 0 ? ((eng / item.impressions) * 100).toFixed(2) : "0.00");
              const isTikTok = item.platform === "TikTok" || item.originalUrl;
              const isItemSyncing = syncingItemId === item.id;

              return (
                <tr key={item.id}>
                  <td style={{ whiteSpace: "nowrap", fontSize: "0.78rem" }}>
                    <div style={{ fontWeight: 600, color: "#fff" }}>{item.uploadDate}</div>
                    <div style={{ fontSize: "0.7rem", color: "var(--text-subtle)" }}>{item.uploadTime || "12:00"}</div>
                  </td>

                  <td>
                    <span className="badge" style={{
                      background: item.platform === "TikTok" ? "rgba(37,244,238,0.15)" : (item.platform === "Instagram" ? "rgba(225,48,108,0.15)" : "rgba(255,255,255,0.06)"),
                      color: item.platform === "TikTok" ? "#25F4EE" : (item.platform === "Instagram" ? "#E1306C" : "var(--text-secondary)"),
                      border: `1px solid ${item.platform === 'TikTok' ? 'rgba(37,244,238,0.3)' : 'rgba(255,255,255,0.1)'}`,
                      fontSize: "0.68rem"
                    }}>
                      {item.platform}
                    </span>
                  </td>

                  <td style={{ maxWidth: "280px" }}>
                    <div style={{ fontWeight: 600, color: "#fff", marginBottom: "0.2rem", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }} title={item.caption}>
                      {item.caption || "(No caption)"}
                    </div>
                    <div style={{ display: "flex", flexWrap: "wrap", gap: "0.2rem" }}>
                      {(item.hashtags || []).slice(0, 3).map((h, i) => (
                        <span key={i} className="chip" style={{ fontSize: "0.66rem", padding: "0.05rem 0.35rem" }}>{h}</span>
                      ))}
                      {(item.hashtags || []).length > 3 && (
                        <span style={{ fontSize: "0.65rem", color: "var(--text-subtle)" }}>+{(item.hashtags.length - 3)}</span>
                      )}
                    </div>
                  </td>

                  <td>
                    <div style={{ display: "flex", flexWrap: "wrap", gap: "0.2rem" }}>
                      {(item.subjects || []).map((s, i) => (
                        <span key={i} className="chip chip-subject" style={{ fontSize: "0.66rem", padding: "0.05rem 0.35rem" }}>
                          👤 {s}
                        </span>
                      ))}
                    </div>
                  </td>

                  <td style={{ textAlign: "right", fontWeight: 700, color: "var(--accent-cyan-light)", fontSize: "0.84rem" }}>
                    {(item.impressions || 0).toLocaleString()}
                  </td>

                  <td style={{ textAlign: "right", fontSize: "0.82rem" }}>
                    {(item.likes || 0).toLocaleString()}
                  </td>

                  <td style={{ textAlign: "right", fontSize: "0.82rem" }}>
                    {(item.comments || 0).toLocaleString()}
                  </td>

                  <td style={{ textAlign: "right", fontWeight: 700, color: parseFloat(er) >= 5 ? "var(--accent-emerald)" : (parseFloat(er) >= 2 ? "var(--accent-cyan)" : "var(--text-muted)"), fontSize: "0.82rem" }}>
                    {er}%
                  </td>

                  <td>
                    <span className={`badge ${item.status === 'Uploaded' ? 'badge-uploaded' : (item.status === 'Scheduled' ? 'badge-scheduled' : (item.status === 'Privated' ? 'badge-privated' : 'badge-deleted'))}`} style={{ fontSize: "0.64rem" }}>
                      {item.status || "Uploaded"}
                    </span>
                  </td>

                  {canEdit && (
                    <td style={{ textAlign: "center", whiteSpace: "nowrap" }}>
                      <div style={{ display: "flex", gap: "0.25rem", justifyContent: "center" }}>
                        {isTikTok && (
                          <button
                            type="button"
                            onClick={() => handleSyncSinglePost(item.id)}
                            disabled={isItemSyncing}
                            className="btn btn-ghost"
                            style={{ padding: "0.2rem 0.4rem", minHeight: "26px", fontSize: "0.75rem", color: "#25F4EE" }}
                            title="Refresh live TikTok views & engagement"
                          >
                            <span style={{ animation: isItemSyncing ? "spin 1s linear infinite" : "none", display: "inline-block" }}>🔄</span>
                          </button>
                        )}
                        <button
                          onClick={() => handleOpenEdit(item)}
                          className="btn btn-ghost"
                          style={{ padding: "0.2rem 0.4rem", minHeight: "26px", fontSize: "0.75rem", color: "var(--text-secondary)" }}
                          title="Edit post details"
                        >
                          ✏️
                        </button>
                        <button
                          onClick={() => deleteContent(item.id)}
                          className="btn btn-ghost"
                          style={{ padding: "0.2rem 0.4rem", minHeight: "26px", fontSize: "0.75rem", color: "var(--accent-rose)" }}
                          title="Delete post"
                        >
                          🗑️
                        </button>
                      </div>
                    </td>
                  )}
                </tr>
              );
            })}
            {filteredAndSortedContents.length === 0 && (
              <tr>
                <td colSpan={canEdit ? 10 : 9} style={{ textAlign: "center", padding: "2.5rem 1rem", color: "var(--text-muted)" }}>
                  No content matching your search/filters. Use <strong>🎵 Auto-Sync Account</strong> or <strong>➕ Add Post</strong>!
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* ── TIKTOK IMPORT / AUTO-SYNC MODAL ── */}
      {tiktokModalOpen && (
        <div className="modal-overlay" onClick={() => setTiktokModalOpen(false)}>
          <div className="modal-content" style={{ maxWidth: "520px", width: "95%" }} onClick={e => e.stopPropagation()}>
            <div className="modal-header" style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "1rem" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "0.6rem" }}>
                <div style={{ width: "32px", height: "32px", borderRadius: "8px", background: "linear-gradient(135deg, #25F4EE, #FE2C55)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  🎵
                </div>
                <div>
                  <h2 style={{ fontSize: "1.15rem", fontWeight: 700, margin: 0 }}>TikTok API Auto-Sync</h2>
                  <p style={{ fontSize: "0.76rem", color: "var(--text-muted)", margin: 0 }}>Auto-read post metrics or entire account video logs in real-time</p>
                </div>
              </div>
              <button onClick={() => setTiktokModalOpen(false)} className="btn btn-secondary btn-icon" style={{ width: "28px", height: "28px" }}>✕</button>
            </div>

            {/* Mode Switcher */}
            <div style={{ display: "flex", gap: "0.35rem", marginBottom: "1rem", background: "rgba(0,0,0,0.3)", padding: "0.25rem", borderRadius: "8px" }}>
              <button
                type="button"
                onClick={() => { setTiktokModalMode("account"); setTiktokPreview(null); setTiktokAccountResult(null); }}
                style={{
                  flex: 1,
                  padding: "0.4rem",
                  borderRadius: "6px",
                  border: "none",
                  background: tiktokModalMode === "account" ? "linear-gradient(135deg, rgba(37,244,238,0.25), rgba(254,44,85,0.25))" : "transparent",
                  color: tiktokModalMode === "account" ? "#fff" : "var(--text-muted)",
                  fontWeight: tiktokModalMode === "account" ? 700 : 500,
                  fontSize: "0.78rem",
                  cursor: "pointer"
                }}
              >
                🌐 Entire TikTok Account
              </button>
              <button
                type="button"
                onClick={() => { setTiktokModalMode("single"); setTiktokPreview(null); setTiktokAccountResult(null); }}
                style={{
                  flex: 1,
                  padding: "0.4rem",
                  borderRadius: "6px",
                  border: "none",
                  background: tiktokModalMode === "single" ? "rgba(37,244,238,0.2)" : "transparent",
                  color: tiktokModalMode === "single" ? "#25F4EE" : "var(--text-muted)",
                  fontWeight: tiktokModalMode === "single" ? 700 : 500,
                  fontSize: "0.78rem",
                  cursor: "pointer"
                }}
              >
                🔗 Single Video
              </button>
            </div>

            <div className="form-group" style={{ marginBottom: "0.85rem" }}>
              <label className="form-label" style={{ fontSize: "0.76rem" }}>
                {tiktokModalMode === "account" ? "TikTok Account Profile Link or Handle" : "TikTok Video URL or Video ID"}
              </label>
              <input
                type="text"
                className="form-input"
                placeholder={tiktokModalMode === "account" ? "https://www.tiktok.com/@youraccount or @youraccount" : "https://www.tiktok.com/@creator/video/1234567890"}
                value={tiktokUrlInput}
                onChange={e => setTiktokUrlInput(e.target.value)}
                disabled={tiktokFetching}
              />
            </div>

            {tiktokFetching && (
              <div style={{ padding: "0.85rem", borderRadius: "8px", background: "rgba(37,244,238,0.1)", border: "1px solid rgba(37,244,238,0.3)", textAlign: "center", marginBottom: "0.85rem" }}>
                <span style={{ animation: "spin 1s linear infinite", display: "inline-block", marginRight: "0.5rem" }}>🔄</span>
                <span style={{ fontWeight: 700, color: "#25F4EE", fontSize: "0.82rem" }}>
                  {tiktokModalMode === "account" ? "Connecting to TikTok API & pulling video feed..." : "Extracting video metrics..."}
                </span>
              </div>
            )}

            {tiktokFetchError && (
              <div style={{ padding: "0.6rem 0.85rem", borderRadius: "6px", background: "rgba(244,63,94,0.15)", border: "1px solid rgba(244,63,94,0.3)", color: "#F43F5E", fontSize: "0.78rem", marginBottom: "0.85rem" }}>
                ⚠️ {tiktokFetchError}
              </div>
            )}

            {/* Single Video Preview Card (Editable) */}
            {tiktokPreview && (
              <div className="glass-card" style={{ padding: "0.85rem", borderRadius: "10px", border: "1px solid rgba(37,244,238,0.35)", background: "rgba(37,244,238,0.05)", marginBottom: "0.85rem" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "0.5rem" }}>
                  <span style={{ fontSize: "0.74rem", fontWeight: 800, color: "#25F4EE", textTransform: "uppercase", letterSpacing: "0.5px" }}>
                    ✨ Extracted Video Metadata (Review & Edit)
                  </span>
                  <span style={{ fontSize: "0.7rem", color: "var(--text-muted)" }}>
                    Author: <strong>@{tiktokPreview.author || "Creator"}</strong>
                  </span>
                </div>

                <div className="form-group" style={{ marginBottom: "0.5rem" }}>
                  <label className="form-label" style={{ fontSize: "0.68rem" }}>Caption</label>
                  <input
                    type="text"
                    className="form-input"
                    style={{ fontSize: "0.8rem", padding: "0.35rem 0.55rem" }}
                    value={tiktokPreview.caption || ""}
                    onChange={e => setTiktokPreview({ ...tiktokPreview, caption: e.target.value })}
                  />
                </div>

                <div className="form-group" style={{ marginBottom: "0.5rem" }}>
                  <label className="form-label" style={{ fontSize: "0.68rem" }}>Hashtags</label>
                  <input
                    type="text"
                    className="form-input"
                    style={{ fontSize: "0.8rem", padding: "0.35rem 0.55rem" }}
                    value={(tiktokPreview.hashtags || []).join(" ")}
                    onChange={e => {
                      const tags = e.target.value.split(/[\s,]+/).filter(Boolean).map(t => t.startsWith("#") ? t : "#" + t);
                      setTiktokPreview({ ...tiktokPreview, hashtags: tags });
                    }}
                  />
                </div>

                <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "0.4rem", fontSize: "0.72rem" }}>
                  <div>
                    <label className="form-label" style={{ fontSize: "0.64rem" }}>👀 Views</label>
                    <input
                      type="number"
                      className="form-input"
                      style={{ fontSize: "0.78rem", padding: "0.3rem" }}
                      value={tiktokPreview.impressions || 0}
                      onChange={e => setTiktokPreview({ ...tiktokPreview, impressions: Number(e.target.value) || 0, reach: Math.round((Number(e.target.value) || 0) * 0.86) })}
                    />
                  </div>
                  <div>
                    <label className="form-label" style={{ fontSize: "0.64rem" }}>❤️ Likes</label>
                    <input
                      type="number"
                      className="form-input"
                      style={{ fontSize: "0.78rem", padding: "0.3rem" }}
                      value={tiktokPreview.likes || 0}
                      onChange={e => setTiktokPreview({ ...tiktokPreview, likes: Number(e.target.value) || 0 })}
                    />
                  </div>
                  <div>
                    <label className="form-label" style={{ fontSize: "0.64rem" }}>💬 Comments</label>
                    <input
                      type="number"
                      className="form-input"
                      style={{ fontSize: "0.78rem", padding: "0.3rem" }}
                      value={tiktokPreview.comments || 0}
                      onChange={e => setTiktokPreview({ ...tiktokPreview, comments: Number(e.target.value) || 0 })}
                    />
                  </div>
                </div>
              </div>
            )}

            {/* Entire Account Success Feedback */}
            {tiktokAccountResult && (
              <div style={{ padding: "0.75rem 1rem", borderRadius: "8px", background: "rgba(16,185,129,0.12)", border: "1px solid rgba(16,185,129,0.3)", color: "#10B981", fontSize: "0.82rem", marginBottom: "0.85rem" }}>
                ✅ <strong>@{tiktokAccountResult.profile.username}</strong> synced! ({tiktokAccountResult.profile.followers?.toLocaleString()} followers) • {tiktokAccountResult.videos.length} videos live tracked.
              </div>
            )}

            <div style={{ display: "flex", justifyContent: "flex-end", gap: "0.6rem" }}>
              <button type="button" onClick={() => setTiktokModalOpen(false)} className="btn btn-secondary btn-sm">
                Close
              </button>
              {tiktokPreview ? (
                <button type="button" onClick={handleSaveTikTokPreview} className="btn btn-primary btn-sm" style={{ fontWeight: 800 }}>
                  💾 Save to Table
                </button>
              ) : (
                <button
                  type="button"
                  onClick={handleFetchTikTokModal}
                  disabled={tiktokFetching || !tiktokUrlInput.trim()}
                  className="btn btn-primary btn-sm"
                  style={{ background: "linear-gradient(135deg, #25F4EE, #FE2C55)", color: "#000", fontWeight: 800 }}
                >
                  {tiktokFetching ? "Connecting..." : (tiktokModalMode === "account" ? "⚡ Auto-Sync Account Videos" : "⚡ Extract Video")}
                </button>
              )}
            </div>
          </div>
        </div>
      )}

      {/* ── REMOVE ALL CONFIRMATION MODAL ── */}
      {removeAllModalOpen && (
        <div className="modal-overlay" onClick={() => setRemoveAllModalOpen(false)}>
          <div className="modal-content" style={{ maxWidth: "420px", width: "90%" }} onClick={e => e.stopPropagation()}>
            <div className="modal-header" style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "1rem" }}>
              <h2 style={{ fontSize: "1.15rem", fontWeight: 700, margin: 0, color: "var(--accent-rose)" }}>
                🗑️ Remove All Content?
              </h2>
              <button onClick={() => setRemoveAllModalOpen(false)} className="btn btn-secondary btn-icon" style={{ width: "28px", height: "28px" }}>✕</button>
            </div>

            <p style={{ fontSize: "0.84rem", color: "var(--text-muted)", marginBottom: "1rem", lineHeight: 1.5 }}>
              Are you sure you want to remove all <strong>{accountContents.length}</strong> content records for <strong>{activeAccount.name}</strong>?
            </p>

            <div style={{ padding: "0.65rem 0.85rem", borderRadius: "8px", background: "rgba(139,92,246,0.1)", border: "1px solid rgba(139,92,246,0.25)", fontSize: "0.78rem", color: "var(--accent-primary-light)", marginBottom: "1.25rem" }}>
              💡 <strong>Instant Undo Protection:</strong> You can always undo this action by clicking the <strong>↩️ Undo</strong> button in the top navbar or pressing <kbd>Ctrl+Z</kbd>.
            </div>

            <div style={{ display: "flex", justifyContent: "flex-end", gap: "0.6rem" }}>
              <button type="button" onClick={() => setRemoveAllModalOpen(false)} className="btn btn-secondary btn-sm">Cancel</button>
              <button type="button" onClick={handleConfirmRemoveAll} className="btn btn-danger btn-sm" style={{ fontWeight: 800 }}>
                Yes, Remove All Content
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ── EDIT CONTENT MODAL ── */}
      {editingContent && (
        <div className="modal-overlay" onClick={() => setEditingContent(null)}>
          <div className="modal-content" style={{ maxWidth: "560px", width: "95%" }} onClick={e => e.stopPropagation()}>
            <div className="modal-header" style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "1rem" }}>
              <h2 style={{ fontSize: "1.2rem", fontWeight: 700, margin: 0 }}>Edit Content Entry</h2>
              <button onClick={() => setEditingContent(null)} className="btn btn-secondary btn-icon" style={{ width: "28px", height: "28px" }}>✕</button>
            </div>

            <form onSubmit={handleEditSave}>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0.85rem", marginBottom: "0.85rem" }}>
                <div className="form-group" style={{ margin: 0 }}>
                  <label className="form-label" style={{ fontSize: "0.74rem" }}>Date</label>
                  <input type="date" className="form-input" required value={editingContent.uploadDate} onChange={e => setEditingContent({ ...editingContent, uploadDate: e.target.value })} />
                </div>
                <div className="form-group" style={{ margin: 0 }}>
                  <label className="form-label" style={{ fontSize: "0.74rem" }}>Platform</label>
                  <select className="form-select" value={editingContent.platform} onChange={e => setEditingContent({ ...editingContent, platform: e.target.value })}>
                    <option value="TikTok">TikTok</option>
                    <option value="Instagram">Instagram</option>
                    <option value="YouTube">YouTube</option>
                    <option value="X (Twitter)">X (Twitter)</option>
                    <option value="Facebook">Facebook</option>
                    <option value="Threads">Threads</option>
                  </select>
                </div>
              </div>

              <div className="form-group" style={{ marginBottom: "0.85rem" }}>
                <label className="form-label" style={{ fontSize: "0.74rem" }}>Caption</label>
                <textarea className="form-textarea" rows="2" required value={editingContent.caption} onChange={e => setEditingContent({ ...editingContent, caption: e.target.value })}></textarea>
              </div>

              <div className="form-group" style={{ marginBottom: "0.85rem" }}>
                <label className="form-label" style={{ fontSize: "0.74rem" }}>Hashtags</label>
                <input type="text" className="form-input" value={editingContent.hashtagsInput} onChange={e => setEditingContent({ ...editingContent, hashtagsInput: e.target.value })} />
              </div>

              <div className="form-group" style={{ marginBottom: "0.85rem" }}>
                <label className="form-label" style={{ fontSize: "0.74rem" }}>Featured Subjects</label>
                <div style={{ display: "flex", gap: "0.4rem", marginBottom: "0.35rem" }}>
                  <input
                    type="text"
                    className="form-input"
                    placeholder="Subject name..."
                    value={editingContent.subjectInput}
                    onChange={e => setEditingContent({ ...editingContent, subjectInput: e.target.value })}
                    onKeyDown={e => { if (e.key === "Enter") { e.preventDefault(); handleAddEditSubject(); } }}
                  />
                  <button type="button" onClick={handleAddEditSubject} className="btn btn-sm btn-secondary">+ Add</button>
                </div>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "0.3rem" }}>
                  {editingContent.subjectsList.map(name => (
                    <span key={name} className="chip chip-subject" style={{ fontSize: "0.7rem", padding: "0.1rem 0.35rem" }}>
                      👤 {name}
                      <button type="button" onClick={() => handleRemoveEditSubject(name)} style={{ background: "none", border: "none", color: "inherit", cursor: "pointer", padding: "0 2px" }}>✕</button>
                    </span>
                  ))}
                </div>
              </div>

              <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "0.6rem", marginBottom: "0.85rem" }}>
                <div><label className="form-label" style={{ fontSize: "0.68rem" }}>Impressions</label><input type="number" className="form-input" min="0" value={editingContent.impressions} onChange={e => setEditingContent({ ...editingContent, impressions: e.target.value })} /></div>
                <div><label className="form-label" style={{ fontSize: "0.68rem" }}>Reach</label><input type="number" className="form-input" min="0" value={editingContent.reach} onChange={e => setEditingContent({ ...editingContent, reach: e.target.value })} /></div>
                <div><label className="form-label" style={{ fontSize: "0.68rem" }}>Likes</label><input type="number" className="form-input" min="0" value={editingContent.likes} onChange={e => setEditingContent({ ...editingContent, likes: e.target.value })} /></div>
                <div><label className="form-label" style={{ fontSize: "0.68rem" }}>Comments</label><input type="number" className="form-input" min="0" value={editingContent.comments} onChange={e => setEditingContent({ ...editingContent, comments: e.target.value })} /></div>
                <div><label className="form-label" style={{ fontSize: "0.68rem" }}>Shares</label><input type="number" className="form-input" min="0" value={editingContent.shares} onChange={e => setEditingContent({ ...editingContent, shares: e.target.value })} /></div>
                <div><label className="form-label" style={{ fontSize: "0.68rem" }}>Saves</label><input type="number" className="form-input" min="0" value={editingContent.saves} onChange={e => setEditingContent({ ...editingContent, saves: e.target.value })} /></div>
              </div>

              <div className="form-group" style={{ marginBottom: "1.25rem" }}>
                <label className="form-label" style={{ fontSize: "0.74rem" }}>Post Status</label>
                <select className="form-select" value={editingContent.status} onChange={e => setEditingContent({ ...editingContent, status: e.target.value })}>
                  <option value="Uploaded">Uploaded</option>
                  <option value="Scheduled">Scheduled</option>
                  <option value="Privated">Privated</option>
                  <option value="Deleted">Deleted</option>
                </select>
              </div>

              <div style={{ display: "flex", justifyContent: "flex-end", gap: "0.6rem" }}>
                <button type="button" onClick={() => setEditingContent(null)} className="btn btn-secondary btn-sm">Cancel</button>
                <button type="submit" className="btn btn-primary btn-sm">Save Changes</button>
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
