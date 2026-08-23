// ContentTablePage Component - Formatted Interactive Table & Weekly Schedule Grid
window.ContentTablePage = function() {
  const { activeAccount, contents, updateContent, deleteContent, canEdit, setActivePage } = React.useContext(window.VaultContext);

  const [viewMode, setViewMode] = React.useState("weekly");
  const [searchTerm, setSearchTerm] = React.useState("");
  const [platformFilter, setPlatformFilter] = React.useState("ALL");
  const [statusFilter, setStatusFilter] = React.useState("ALL");
  const [sortBy, setSortBy] = React.useState("uploadDate");
  const [sortOrder, setSortOrder] = React.useState("desc");

  // Edit Modal State
  const [editingContent, setEditingContent] = React.useState(null);

  const daysOfWeek = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

  const getDayOfWeek = (dateStr) => {
    if (!dateStr) return "Mon";
    const parts = dateStr.split("-").map(Number);
    if (parts.length < 3) return "Mon";
    const date = new Date(parts[0], parts[1] - 1, parts[2]);
    const dayIndex = date.getDay();
    return dayIndex === 0 ? "Sun" : daysOfWeek[dayIndex - 1];
  };

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
        item.caption.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.hashtags.some(h => h.toLowerCase().includes(searchTerm.toLowerCase())) ||
        item.subjects.some(s => s.toLowerCase().includes(searchTerm.toLowerCase()));

      const matchPlatform = platformFilter === "ALL" || item.platform === platformFilter;
      const matchStatus = statusFilter === "ALL" || item.status === statusFilter;

      return matchSearch && matchPlatform && matchStatus;
    }).sort((a, b) => {
      let valA = a[sortBy];
      let valB = b[sortBy];

      if (sortBy === "er") {
        valA = ((a.likes + a.comments + a.shares + a.saves) / (a.reach || 1)) * 100;
        valB = ((b.likes + b.comments + b.shares + b.saves) / (b.reach || 1)) * 100;
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
      caption: editingContent.caption,
      hashtags: hashtagsArray,
      subjects: editingContent.subjectsList,
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

  const handleAddForDay = (dayName) => {
    setActivePage("add-content");
  };

  return (
    <div className="page-container">
      <div className="page-header">
        <div>
          <h1 className="page-title">{activeAccount.name} - Content Table Hub</h1>
          <p className="page-subtitle">Weekly schedule table grid & detailed metrics tracking</p>
        </div>
        <div style={{ display: "flex", gap: "0.75rem", alignItems: "center" }}>
          {/* View Mode Switcher */}
          <div style={{ display: "flex", gap: "0.25rem", background: "rgba(15, 23, 42, 0.7)", padding: "3px", borderRadius: "var(--radius-sm)", border: "1px solid var(--border-color)" }}>
            <button 
              onClick={() => setViewMode("weekly")} 
              className={`btn ${viewMode === "weekly" ? "btn-primary" : "btn-secondary"}`}
              style={{ padding: "0.4rem 0.85rem", fontSize: "0.85rem", minHeight: "36px" }}
            >
              <i data-lucide="calendar" style={{ width: "15px", height: "15px" }}></i> Weekly Grid
            </button>
            <button 
              onClick={() => setViewMode("detailed")} 
              className={`btn ${viewMode === "detailed" ? "btn-primary" : "btn-secondary"}`}
              style={{ padding: "0.4rem 0.85rem", fontSize: "0.85rem", minHeight: "36px" }}
            >
              <i data-lucide="table" style={{ width: "15px", height: "15px" }}></i> Detailed Table
            </button>
          </div>

          {canEdit && (
            <button onClick={() => setActivePage("add-content")} className="btn btn-primary">
              <i data-lucide="plus" style={{ width: "18px", height: "18px" }}></i>
              Add Content Entry
            </button>
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
              <option value="Instagram">Instagram</option>
              <option value="YouTube">YouTube</option>
              <option value="TikTok">TikTok</option>
              <option value="X (Twitter)">X (Twitter)</option>
            </select>

            <select className="form-select" style={{ width: "auto" }} value={statusFilter} onChange={e => setStatusFilter(e.target.value)}>
              <option value="ALL">All Statuses</option>
              <option value="Uploaded">Uploaded</option>
              <option value="Scheduled">Scheduled</option>
              <option value="Privated">Privated</option>
              <option value="Deleted">Deleted</option>
            </select>

            <select className="form-select" style={{ width: "auto" }} value={sortBy} onChange={e => setSortBy(e.target.value)}>
              <option value="uploadDate">Sort by Date</option>
              <option value="impressions">Sort by Impressions (Views)</option>
              <option value="reach">Sort by Reach</option>
              <option value="er">Sort by Engagement Rate %</option>
            </select>
          </div>
        </div>
      </div>

      {/* WEEKLY SCHEDULE TABLE GRID VIEW */}
      {viewMode === "weekly" ? (
        <div className="weekly-schedule-card">
          {/* Header Row: Mon, Tue, Wed, Thu, Fri, Sat, Sun */}
          <div className="weekly-table-header">
            {daysOfWeek.map(day => (
              <div key={day} className="weekly-header-col">
                {day}
              </div>
            ))}
          </div>

          {/* Grid Columns */}
          <div className="weekly-table-grid">
            {daysOfWeek.map(day => {
              const dayContents = filteredContents.filter(c => getDayOfWeek(c.uploadDate) === day);
              const TOTAL_SLOTS = 8;
              const emptySlotsCount = Math.max(0, TOTAL_SLOTS - dayContents.length);

              return (
                <div key={day} className="weekly-day-column">
                  {dayContents.map(item => (
                    <div 
                      key={item.id} 
                      className="weekly-pill-item"
                      onClick={() => handleOpenEdit(item)}
                      title={`${item.platform}: ${item.caption} (${item.status})`}
                    >
                      <span style={{ 
                        width: "6px", 
                        height: "6px", 
                        borderRadius: "50%", 
                        flexShrink: 0,
                        background: item.status === "Uploaded" ? "var(--accent-emerald)" : item.status === "Scheduled" ? "var(--accent-cyan)" : item.status === "Privated" ? "var(--accent-amber)" : "var(--accent-rose)" 
                      }}></span>
                      <span className="pill-text">{item.caption.length > 14 ? item.caption.substring(0, 14) + "…" : item.caption}</span>
                    </div>
                  ))}

                  {Array.from({ length: emptySlotsCount }).map((_, idx) => (
                    <div 
                      key={`empty-${day}-${idx}`} 
                      className="weekly-pill-item pill-empty"
                      onClick={() => handleAddForDay(day)}
                      title="Click to add new content entry"
                    >
                      <span className="pill-text">Dropdown</span>
                    </div>
                  ))}
                </div>
              );
            })}
              );
            })}
          </div>

          {/* Bottom Action Footer Row with Plus Button for each day */}
          <div className="weekly-add-footer">
            {daysOfWeek.map(day => (
              <div key={day} className="weekly-add-col">
                <button 
                  className="weekly-add-btn"
                  title={`Add new content entry for ${day}`}
                  onClick={() => handleAddForDay(day)}
                >
                  +
                </button>
              </div>
            ))}
          </div>
        </div>
      ) : (
        /* Formatted Content Data Table */
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

                return (
                  <tr key={item.id}>
                    <td style={{ whiteSpace: "nowrap", fontWeight: 500 }}>{item.uploadDate}</td>
                    <td>
                      <span className="chip" style={{ background: "rgba(255,255,255,0.06)", color: "#fff" }}>
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
                        {item.hashtags.map(h => (
                          <span key={h} className="chip" style={{ fontSize: "0.75rem" }}>{h}</span>
                        ))}
                      </div>
                    </td>
                    <td>
                      <div style={{ display: "flex", flexWrap: "wrap", gap: "0.25rem" }}>
                        {item.subjects.map(s => (
                          <span key={s} className="chip chip-subject" style={{ fontSize: "0.75rem" }}>👤 {s}</span>
                        ))}
                      </div>
                    </td>
                    <td style={{ fontWeight: 600, color: "var(--accent-cyan)" }}>
                      {item.impressions.toLocaleString()}
                    </td>
                    <td>{item.reach.toLocaleString()}</td>
                    <td>{item.likes.toLocaleString()}</td>
                    <td>{item.comments.toLocaleString()}</td>
                    <td>{item.shares.toLocaleString()}</td>
                    <td>{item.saves.toLocaleString()}</td>
                    <td style={{ fontWeight: 700, color: "var(--accent-emerald)" }}>{er}%</td>
                    <td>
                      <span className={`badge badge-${item.status.toLowerCase()}`}>
                        {item.status}
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
                            <i data-lucide="edit-2" style={{ width: "14px", height: "14px" }}></i>
                          </button>
                          <button 
                            onClick={() => {
                              if (confirm("Delete this content entry?")) deleteContent(item.id);
                            }} 
                            className="btn btn-danger btn-icon"
                            title="Delete Content Entry"
                          >
                            <i data-lucide="trash-2" style={{ width: "14px", height: "14px" }}></i>
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
      )}

      {/* Edit Content Modal */}
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
                    {activeAccount.platforms && activeAccount.platforms.length > 0 ? (
                      activeAccount.platforms.map(p => (
                        <option key={p.id} value={p.name}>{p.name}</option>
                      ))
                    ) : (
                      <>
                        <option value="Instagram">Instagram</option>
                        <option value="YouTube">YouTube</option>
                        <option value="TikTok">TikTok</option>
                        <option value="X (Twitter)">X (Twitter)</option>
                        <option value="Facebook">Facebook</option>
                        <option value="Threads">Threads</option>
                      </>
                    )}
                  </select>
                </div>
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
                  placeholder="e.g. #tech #gadgets" 
                  value={editingContent.hashtagsInput} 
                  onChange={e => setEditingContent({ ...editingContent, hashtagsInput: e.target.value })} 
                />
              </div>

              <div className="form-group" style={{ marginBottom: "1rem" }}>
                <label className="form-label">Subjects Featured (Multiple People)</label>
                <div style={{ display: "flex", gap: "0.5rem", marginBottom: "0.5rem" }}>
                  <input 
                    type="text" 
                    className="form-input" 
                    placeholder="Type person's name..." 
                    value={editingContent.subjectInput} 
                    onChange={e => setEditingContent({ ...editingContent, subjectInput: e.target.value })} 
                    onKeyDown={e => {
                      if (e.key === "Enter") {
                        e.preventDefault();
                        handleAddEditSubject();
                      }
                    }}
                  />
                  <button type="button" onClick={handleAddEditSubject} className="btn btn-secondary">Add Person</button>
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
