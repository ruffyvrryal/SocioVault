// ContentTablePage Component - Formatted Interactive Content Table with TikTok API Auto-Import & Remove All
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
    fetchTikTokData
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

  // Remove All Confirmation Modal State
  const [removeAllModalOpen, setRemoveAllModalOpen] = React.useState(false);

  if (!activeAccount) {
    return <div className="page-container"><p>No active account selected.</p></div>;
  }

  // Filter content items for active account
  const accountContents = React.useMemo(() => {
    return contents.filter(c => c.accountId === activeAccount.id);
  }, [contents, activeAccount.id]);

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
        valA = ((engA) / (a.reach || 1)) * 100;
        valB = ((engB) / (b.reach || 1)) * 100;
      }

      if (valA < valB) return sortOrder === "asc" ? -1 : 1;
      if (valA > valB) return sortOrder === "asc" ? 1 : -1;
      return 0;
    });
  }, [accountContents, searchTerm, platformFilter, statusFilter, sortBy, sortOrder]);

  const handleOpenEdit = (item) => {
    setEditingContent({
      id: item.id,
      uploadDate: item.uploadDate || new Date().toISOString().split("T")[0],
      platform: item.platform || "Instagram",
      contentType: item.contentType || "Video",
      caption: item.caption || "",
      hashtagsInput: (item.hashtags || []).join(" "),
      subjectInput: "",
      subjectsList: [...(item.subjects || [])],
      impressions: item.impressions !== undefined ? String(item.impressions) : "",
      reach: item.reach !== undefined ? String(item.reach) : "",
      likes: item.likes !== undefined ? String(item.likes) : "",
      comments: item.comments !== undefined ? String(item.comments) : "",
      shares: item.shares !== undefined ? String(item.shares) : "",
      saves: item.saves !== undefined ? String(item.saves) : "",
      status: item.status || "Uploaded"
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
    } else {
      setEditingContent({ ...editingContent, subjectInput: "" });
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

    const hashtagsArray = editingContent.hashtagsInput
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
          {canEdit && (
            <>
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
                <span>🎵 Import from TikTok</span>
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
                  <span>🗑️ Remove All Content</span>
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
              <option value="Uploaded">🟢 Uploaded</option>
              <option value="Scheduled">⏱️ Scheduled</option>
              <option value="Privated">🔒 Privated</option>
              <option value="Deleted">🗑️ Deleted</option>
            </select>

            <select className="form-select" style={{ width: "auto" }} value={sortBy} onChange={e => setSortBy(e.target.value)}>
              <option value="uploadDate">Sort by Date</option>
              <option value="impressions">Sort by Impressions (Views)</option>
              <option value="reach">Sort by Reach</option>
              <option value="likes">Sort by Likes</option>
              <option value="er">Sort by Engagement Rate %</option>
            </select>
          </div>
        </div>
      </div>

      {/* Formatted Content Data Table */}
      <div className="table-container">
        <table className="custom-table">
          <thead>
            <tr>
              <th>Upload Date</th>
              <th>Platform</th>
              <th>Caption / Text</th>
              <th>Hashtags</th>
              <th>Subject(s) Featured</th>
              <th>Impressions</th>
              <th>Reach</th>
              <th>Likes</th>
              <th>Comments</th>
              <th>Shares</th>
              <th>Saves</th>
              <th>ER %</th>
              <th>Status</th>
              {canEdit && <th>Actions</th>}
            </tr>
          </thead>
          <tbody>
            {filteredContents.map(item => {
              const engagement = (item.likes || 0) + (item.comments || 0) + (item.shares || 0) + (item.saves || 0);
              const er = item.reach > 0 ? ((engagement / item.reach) * 100).toFixed(2) : "0.00";
              const itemStatus = item.status || "Uploaded";

              return (
                <tr key={item.id}>
                  <td style={{ whiteSpace: "nowrap", fontWeight: 500 }}>{item.uploadDate || "—"}</td>
                  <td>
                    <span className="chip" style={{
                      background: item.platform === "TikTok" ? "rgba(37,244,238,0.15)" : "rgba(255,255,255,0.06)",
                      color: item.platform === "TikTok" ? "#25F4EE" : "#fff",
                      border: item.platform === "TikTok" ? "1px solid rgba(37,244,238,0.3)" : "none"
                    }}>
                      {item.platform}
                    </span>
                  </td>
                  <td style={{ maxWidth: "260px", minWidth: "180px" }}>
                    <div style={{ fontWeight: 500, fontSize: "0.88rem", lineHeight: "1.3", color: "var(--text-main)" }}>
                      {item.caption}
                    </div>
                  </td>
                  <td>
                    <div style={{ display: "flex", flexWrap: "wrap", gap: "0.25rem" }}>
                      {(item.hashtags || []).map(h => (
                        <span key={h} className="chip" style={{ fontSize: "0.75rem" }}>{h}</span>
                      ))}
                    </div>
                  </td>
                  <td>
                    <div style={{ display: "flex", flexWrap: "wrap", gap: "0.25rem" }}>
                      {(item.subjects || []).map(s => (
                        <span key={s} className="chip chip-subject" style={{ fontSize: "0.75rem" }}>👤 {s}</span>
                      ))}
                    </div>
                  </td>
                  <td style={{ fontWeight: 600, color: "var(--accent-cyan)" }}>
                    {(item.impressions || 0).toLocaleString()}
                  </td>
                  <td>{(item.reach || 0).toLocaleString()}</td>
                  <td>{(item.likes || 0).toLocaleString()}</td>
                  <td>{(item.comments || 0).toLocaleString()}</td>
                  <td>{(item.shares || 0).toLocaleString()}</td>
                  <td>{(item.saves || 0).toLocaleString()}</td>
                  <td style={{ fontWeight: 700, color: "var(--accent-emerald)" }}>{er}%</td>
                  <td>
                    <span className={`badge badge-${itemStatus.toLowerCase()}`}>
                      {itemStatus}
                    </span>
                  </td>
                  {canEdit && (
                    <td>
                      <div style={{ display: "flex", gap: "0.35rem" }}>
                        <button 
                          onClick={() => handleOpenEdit(item)} 
                          className="btn btn-secondary btn-icon"
                          title="Edit Content Entry"
                        >
                          <span>✏️</span>
                        </button>
                        <button 
                          onClick={() => {
                            if (confirm("Delete this content entry? You can undo with Ctrl+Z.")) deleteContent(item.id);
                          }} 
                          className="btn btn-danger btn-icon"
                          title="Delete Content Entry"
                        >
                          <span>🗑️</span>
                        </button>
                      </div>
                    </td>
                  )}
                </tr>
              );
            })}

            {filteredContents.length === 0 && (
              <tr>
                <td colSpan="14" style={{ textAlign: "center", padding: "2.5rem", color: "var(--text-muted)" }}>
                  No content records match your filter criteria.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* ══ TIKTOK QUICK IMPORT MODAL ══ */}
      {tiktokModalOpen && (
        <div className="modal-overlay" onClick={() => setTiktokModalOpen(false)}>
          <div className="modal-content" style={{ maxWidth: "600px", width: "90%" }} onClick={e => e.stopPropagation()}>
            <div className="modal-header" style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "1.25rem" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                <span style={{ fontSize: "1.5rem" }}>🎵</span>
                <h2 className="modal-title" style={{ margin: 0, fontSize: "1.3rem", fontWeight: 700 }}>Import from TikTok API</h2>
              </div>
              <button 
                type="button" 
                onClick={() => setTiktokModalOpen(false)} 
                className="btn btn-secondary btn-icon"
                style={{ width: "32px", height: "32px" }}
              >
                ✕
              </button>
            </div>

            <p style={{ color: "var(--text-muted)", fontSize: "0.85rem", marginBottom: "1rem" }}>
              Paste a TikTok video link to automatically retrieve caption, hashtags, author, and metrics.
            </p>

            <div style={{ display: "flex", gap: "0.5rem", marginBottom: "1rem" }}>
              <input
                type="text"
                className="form-input"
                placeholder="https://www.tiktok.com/@creator/video/7281928..."
                value={tiktokUrlInput}
                onChange={e => setTiktokUrlInput(e.target.value)}
                onKeyDown={e => { if (e.key === "Enter") handleFetchTikTokModal(); }}
              />
              <button
                type="button"
                onClick={handleFetchTikTokModal}
                disabled={tiktokFetching}
                className="btn btn-primary"
                style={{ background: "linear-gradient(13deg, #25F4EE, #FE2C55)", color: "#fff", border: "none", whiteSpace: "nowrap", fontWeight: 700 }}
              >
                {tiktokFetching ? "Fetching..." : "Fetch Post"}
              </button>
            </div>

            {tiktokFetchError && (
              <div style={{ padding: "0.6rem 0.85rem", borderRadius: "6px", background: "rgba(244,63,94,0.15)", color: "#F43F5E", fontSize: "0.82rem", marginBottom: "1rem" }}>
                ⚠️ {tiktokFetchError}
              </div>
            )}

            {tiktokPreview && (
              <div style={{ padding: "1rem", borderRadius: "10px", background: "rgba(37,244,238,0.06)", border: "1px solid rgba(37,244,238,0.3)", marginBottom: "1.25rem" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "0.5rem" }}>
                  <span style={{ fontSize: "0.8rem", fontWeight: 700, color: "#25F4EE" }}>TikTok Video Preview</span>
                  <span style={{ fontSize: "0.75rem", color: "var(--text-muted)" }}>{tiktokPreview.uploadDate}</span>
                </div>
                <div style={{ fontSize: "0.9rem", fontWeight: 600, color: "var(--text-main)", marginBottom: "0.5rem" }}>
                  {tiktokPreview.caption}
                </div>
                <div style={{ display: "flex", gap: "0.35rem", flexWrap: "wrap", marginBottom: "0.75rem" }}>
                  {tiktokPreview.hashtags.map(t => <span key={t} className="chip" style={{ fontSize: "0.7rem" }}>{t}</span>)}
                </div>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr 1fr", gap: "0.5rem", fontSize: "0.75rem", textAlign: "center" }}>
                  <div style={{ padding: "0.4rem", background: "rgba(255,255,255,0.03)", borderRadius: "6px" }}>
                    <div style={{ color: "var(--text-muted)" }}>Views</div>
                    <div style={{ fontWeight: 800, color: "var(--accent-cyan)", marginTop: "0.15rem" }}>{tiktokPreview.impressions.toLocaleString()}</div>
                  </div>
                  <div style={{ padding: "0.4rem", background: "rgba(255,255,255,0.03)", borderRadius: "6px" }}>
                    <div style={{ color: "var(--text-muted)" }}>Likes</div>
                    <div style={{ fontWeight: 800, color: "#FB7185", marginTop: "0.15rem" }}>{tiktokPreview.likes.toLocaleString()}</div>
                  </div>
                  <div style={{ padding: "0.4rem", background: "rgba(255,255,255,0.03)", borderRadius: "6px" }}>
                    <div style={{ color: "var(--text-muted)" }}>Comments</div>
                    <div style={{ fontWeight: 800, marginTop: "0.15rem" }}>{tiktokPreview.comments.toLocaleString()}</div>
                  </div>
                  <div style={{ padding: "0.4rem", background: "rgba(255,255,255,0.03)", borderRadius: "6px" }}>
                    <div style={{ color: "var(--text-muted)" }}>Shares</div>
                    <div style={{ fontWeight: 800, color: "var(--accent-emerald)", marginTop: "0.15rem" }}>{tiktokPreview.shares.toLocaleString()}</div>
                  </div>
                </div>
              </div>
            )}

            <div style={{ display: "flex", justifyContent: "flex-end", gap: "0.6rem" }}>
              <button type="button" onClick={() => setTiktokModalOpen(false)} className="btn btn-secondary">
                Cancel
              </button>
              {tiktokPreview && (
                <button
                  type="button"
                  onClick={handleSaveTikTokPreview}
                  className="btn btn-primary"
                  style={{ background: "linear-gradient(135deg, #10B981, #06B6D4)", color: "#fff", border: "none" }}
                >
                  ➕ Add to Content Table
                </button>
              )}
            </div>
          </div>
        </div>
      )}

      {/* ══ REMOVE ALL CONTENT CONFIRMATION MODAL ══ */}
      {removeAllModalOpen && (
        <div className="modal-overlay" onClick={() => setRemoveAllModalOpen(false)}>
          <div className="modal-content" style={{ maxWidth: "480px", width: "90%" }} onClick={e => e.stopPropagation()}>
            <div style={{ textAlign: "center", marginBottom: "1.25rem" }}>
              <div style={{ width: "54px", height: "54px", borderRadius: "50%", background: "rgba(244,63,94,0.15)", color: "#F43F5E", fontSize: "1.8rem", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 1rem auto" }}>
                🗑️
              </div>
              <h2 style={{ fontSize: "1.3rem", fontWeight: 800, color: "var(--text-main)", margin: "0 0 0.5rem 0" }}>
                Remove All Content?
              </h2>
              <p style={{ fontSize: "0.88rem", color: "var(--text-muted)", lineHeight: 1.5, margin: 0 }}>
                Are you sure you want to remove all <strong style={{ color: "#F43F5E" }}>{accountContents.length}</strong> content records from <strong>{activeAccount.name}</strong>?
              </p>
            </div>

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
    </div>
  );
};
