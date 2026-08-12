// ContentTablePage Component - Formatted Interactive Table with Edit & Delete
window.ContentTablePage = function() {
  const { activeAccount, contents, updateContent, deleteContent, canEdit, setActivePage } = React.useContext(window.VaultContext);

  const [searchTerm, setSearchTerm] = React.useState("");
  const [platformFilter, setPlatformFilter] = React.useState("ALL");
  const [statusFilter, setStatusFilter] = React.useState("ALL");
  const [sortBy, setSortBy] = React.useState("uploadDate");
  const [sortOrder, setSortOrder] = React.useState("desc");

  // Edit Modal State
  const [editingContent, setEditingContent] = React.useState(null);

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

  const handleEditSave = (e) => {
    e.preventDefault();
    if (!editingContent) return;
    updateContent(editingContent.id, editingContent);
    setEditingContent(null);
  };

  return (
    <div className="page-container">
      <div className="page-header">
        <div>
          <h1 className="page-title">{activeAccount.name} - Content Table</h1>
          <p className="page-subtitle">Granular table tracking upload date, subjects, metrics, hashtags, and status</p>
        </div>
        {canEdit && (
          <button onClick={() => setActivePage("add-content")} className="btn btn-primary">
            <i data-lucide="plus" style={{ width: "18px", height: "18px" }}></i>
            Add Content Entry
          </button>
        )}
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
                          onClick={() => setEditingContent({ ...item })} 
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

      {/* Edit Content Modal */}
      {editingContent && (
        <div className="modal-overlay" onClick={() => setEditingContent(null)}>
          <div className="modal-content" onClick={e => e.stopPropagation()}>
            <div className="modal-header">
              <h2 className="modal-title">Edit Content Entry</h2>
              <button onClick={() => setEditingContent(null)} className="btn btn-secondary btn-icon">
                <i data-lucide="x" style={{ width: "18px", height: "18px" }}></i>
              </button>
            </div>

            <form onSubmit={handleEditSave}>
              <div className="form-group">
                <label className="form-label">Caption</label>
                <textarea 
                  className="form-textarea" 
                  rows="3"
                  value={editingContent.caption}
                  onChange={e => setEditingContent({ ...editingContent, caption: e.target.value })}
                ></textarea>
              </div>

              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
                <div className="form-group">
                  <label className="form-label">Impressions (Views)</label>
                  <input 
                    type="number" 
                    className="form-input"
                    value={editingContent.impressions}
                    onChange={e => setEditingContent({ ...editingContent, impressions: Number(e.target.value) })}
                  />
                </div>
                <div className="form-group">
                  <label className="form-label">Reach (Unique Viewers)</label>
                  <input 
                    type="number" 
                    className="form-input"
                    value={editingContent.reach}
                    onChange={e => setEditingContent({ ...editingContent, reach: Number(e.target.value) })}
                  />
                </div>
                <div className="form-group">
                  <label className="form-label">Likes</label>
                  <input 
                    type="number" 
                    className="form-input"
                    value={editingContent.likes}
                    onChange={e => setEditingContent({ ...editingContent, likes: Number(e.target.value) })}
                  />
                </div>
                <div className="form-group">
                  <label className="form-label">Comments</label>
                  <input 
                    type="number" 
                    className="form-input"
                    value={editingContent.comments}
                    onChange={e => setEditingContent({ ...editingContent, comments: Number(e.target.value) })}
                  />
                </div>
              </div>

              <div className="form-group">
                <label className="form-label">Status</label>
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
