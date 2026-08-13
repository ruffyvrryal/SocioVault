// AccountCenterPage Component - Landing Page when an Account is opened
window.AccountCenterPage = function() {
  const { 
    activeAccount, 
    addPlatform, 
    removePlatform, 
    contents, 
    canEdit, 
    setActivePage 
  } = React.useContext(window.VaultContext);

  const [showAddModal, setShowAddModal] = React.useState(false);
  const [platformName, setPlatformName] = React.useState("Instagram");
  const [handle, setHandle] = React.useState("");
  const [followers, setFollowers] = React.useState("");
  const [url, setUrl] = React.useState("");

  if (!activeAccount) {
    return <div className="page-container"><p>No active account selected.</p></div>;
  }

  const accountContents = contents.filter(c => c.accountId === activeAccount.id);
  const totalViews = accountContents.reduce((sum, c) => sum + (c.impressions || 0), 0);
  const totalFollowers = activeAccount.platforms.reduce((sum, p) => sum + (Number(p.followers) || 0), 0);

  // Calculate monthly impression trend for health status
  const getHealthStatus = React.useMemo(() => {
    const now = new Date();
    const currentMonth = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}`;
    
    // Get impressions from current month
    const currentMonthImpressions = accountContents
      .filter(c => c.uploadDate && c.uploadDate.startsWith(currentMonth))
      .reduce((sum, c) => sum + (c.impressions || 0), 0);

    // Get average impressions from last 3 months for trend analysis
    const monthlyImpressions = [];
    for (let i = 0; i < 3; i++) {
      const d = new Date(now.getFullYear(), now.getMonth() - i, 1);
      const monthStr = `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}`;
      const monthImp = accountContents
        .filter(c => c.uploadDate && c.uploadDate.startsWith(monthStr))
        .reduce((sum, c) => sum + (c.impressions || 0), 0);
      monthlyImpressions.push(monthImp);
    }

    // Determine status based on current month impressions
    if (currentMonthImpressions === 0) {
      return { status: "red", label: "No Activity", color: "#F43F5E" };
    } else if (currentMonthImpressions > 100) {
      return { status: "green", label: "Healthy", color: "#10B981" };
    } else {
      return { status: "yellow", label: "Low Activity", color: "#F59E0B" };
    }
  }, [accountContents]);

  const handleAddPlatform = (e) => {
    e.preventDefault();
    if (!handle.trim()) return;
    addPlatform(activeAccount.id, {
      name: platformName,
      handle: handle.startsWith("@") ? handle : "@" + handle,
      followers: Number(followers) || 0,
      url: url || "#"
    });
    setHandle("");
    setFollowers("");
    setUrl("");
    setShowAddModal(false);
  };

  const getPlatformIcon = (name) => {
    switch (name.toLowerCase()) {
      case "instagram": return "instagram";
      case "youtube": return "youtube";
      case "tiktok": return "video";
      case "x (twitter)":
      case "x":
      case "twitter": return "twitter";
      case "facebook": return "facebook";
      default: return "globe";
    }
  };

  return (
    <div className="page-container">
      {/* Header & Quick Action */}
      <div className="page-header">
        <div>
          <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
            <h1 className="page-title">{activeAccount.name} - Account Center</h1>
            <div
              style={{
                width: "16px",
                height: "16px",
                borderRadius: "50%",
                backgroundColor: getHealthStatus.color,
                boxShadow: `0 0 12px ${getHealthStatus.color}`,
                border: `2px solid ${getHealthStatus.color}`,
                display: "flex",
                alignItems: "center",
                justifyContent: "center"
              }}
              title={`Health Status: ${getHealthStatus.label}`}
            />
          </div>
          <p className="page-subtitle">{activeAccount.description} • Managed platforms & channel credentials</p>
        </div>
        <div style={{ display: "flex", gap: "0.75rem" }}>
          {canEdit && (
            <button onClick={() => setShowAddModal(true)} className="btn btn-primary">
              <i data-lucide="plus-circle" style={{ width: "18px", height: "18px" }}></i>
              Add Platform Channel
            </button>
          )}
          <button onClick={() => setActivePage("add-content")} className="btn btn-secondary">
            <i data-lucide="file-plus" style={{ width: "18px", height: "18px" }}></i>
            Create Content Entry
          </button>
        </div>
      </div>

      {/* Account High-Level KPI Summary */}
      <div className="stats-grid">
        <div className="glass-card stat-card">
          <span className="stat-label">Total Channel Audience</span>
          <span className="stat-value" style={{ color: "var(--accent-cyan)" }}>
            {totalFollowers > 1000 ? (totalFollowers / 1000).toFixed(1) + "k" : totalFollowers}
          </span>
          <span className="stat-change positive">Across {activeAccount.platforms.length} connected platforms</span>
        </div>

        <div className="glass-card stat-card">
          <span className="stat-label">Logged Content Items</span>
          <span className="stat-value">{accountContents.length}</span>
          <span className="stat-change positive">Total uploaded & scheduled</span>
        </div>

        <div className="glass-card stat-card">
          <span className="stat-label">Total Impressions (Views)</span>
          <span className="stat-value" style={{ color: "var(--accent-emerald)" }}>
            {(totalViews / 1000).toFixed(1)}k
          </span>
          <span className="stat-change positive">Cumulative views recorded</span>
        </div>
      </div>

      {/* Connected Social Platforms Grid */}
      <h2 style={{ fontSize: "1.35rem", fontWeight: 700, margin: "2rem 0 1rem" }}>
        Connected Platforms ({activeAccount.platforms.length})
      </h2>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: "1.25rem" }}>
        {activeAccount.platforms.map(p => (
          <div key={p.id} className="glass-card" style={{ display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
            <div>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "1rem" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
                  <div style={{
                    width: "40px",
                    height: "40px",
                    borderRadius: "10px",
                    background: "rgba(255, 255, 255, 0.05)",
                    display: "flex",
                    alignItems: "center",
                    justify-content: "center"
                  }}>
                    <i data-lucide={getPlatformIcon(p.name)} className={`platform-${p.name.toLowerCase().split(" ")[0]}`}></i>
                  </div>
                  <div>
                    <h3 style={{ fontSize: "1.1rem", fontWeight: 700 }}>{p.name}</h3>
                    <p style={{ fontSize: "0.85rem", color: "var(--text-muted)" }}>{p.handle}</p>
                  </div>
                </div>

                {canEdit && (
                  <button 
                    onClick={() => {
                      if (confirm(`Remove ${p.name} channel from this account?`)) {
                        removePlatform(activeAccount.id, p.id);
                      }
                    }}
                    className="btn btn-danger btn-icon"
                    title="Remove Platform"
                  >
                    <i data-lucide="trash" style={{ width: "14px", height: "14px" }}></i>
                  </button>
                )}
              </div>
            </div>

            <div style={{
              display: "flex",
              alignItems: "center",
              justify-content: "space-between",
              paddingTop: "0.85rem",
              borderTop: "1px solid var(--border-color)",
              fontSize: "0.85rem"
            }}>
              <div>
                <span style={{ color: "var(--text-muted)" }}>Followers: </span>
                <strong style={{ color: "#fff" }}>
                  {p.followers > 1000 ? (p.followers / 1000).toFixed(1) + "k" : p.followers}
                </strong>
              </div>
              <a href={p.url} target="_blank" rel="noopener noreferrer" style={{ fontSize: "0.8rem", display: "flex", alignItems: "center", gap: "0.25rem" }}>
                View Channel <i data-lucide="external-link" style={{ width: "12px", height: "12px" }}></i>
              </a>
            </div>
          </div>
        ))}

        {activeAccount.platforms.length === 0 && (
          <div className="glass-card" style={{ gridColumn: "1 / -1", textAlign: "center", padding: "2rem" }}>
            <p style={{ color: "var(--text-muted)" }}>No platforms linked to this account yet.</p>
            {canEdit && <button onClick={() => setShowAddModal(true)} className="btn btn-primary" style={{ marginTop: "1rem" }}>Link First Platform</button>}
          </div>
        )}
      </div>

      {/* Add Platform Modal */}
      {showAddModal && (
        <div className="modal-overlay" onClick={() => setShowAddModal(false)}>
          <div className="modal-content" onClick={e => e.stopPropagation()}>
            <div className="modal-header">
              <h2 className="modal-title">Link Platform to {activeAccount.name}</h2>
              <button type="button" onClick={() => setShowAddModal(false)} className="btn btn-secondary btn-icon" style={{ cursor: "pointer", width: "32px", height: "32px", display: "flex", alignItems: "center", justifyContent: "center" }} title="Close">
                <span style={{ fontSize: "1.2rem", lineHeight: 1, fontWeight: "bold" }}>✕</span>
              </button>
            </div>

            <form onSubmit={handleAddPlatform}>
              <div className="form-group">
                <label className="form-label">Platform Type</label>
                <select className="form-select" value={platformName} onChange={e => setPlatformName(e.target.value)}>
                  <option value="TikTok">TikTok</option>
                  <option value="Instagram">Instagram</option>
                  <option value="Facebook">Facebook</option>
                  <option value="X (Twitter)">X (Twitter)</option>
                  <option value="YouTube">YouTube</option>
                  <option value="Threads">Threads</option>
                </select>
              </div>

              <div className="form-group">
                <label className="form-label">Profile Handle / Username</label>
                <input 
                  type="text" 
                  className="form-input"
                  placeholder="e.g. @alex_creator"
                  required
                  value={handle}
                  onChange={e => setHandle(e.target.value)}
                />
              </div>

              <div className="form-group">
                <label className="form-label">Follower / Subscriber Count</label>
                <input 
                  type="number" 
                  className="form-input"
                  placeholder="e.g. 125000"
                  value={followers}
                  onChange={e => setFollowers(e.target.value)}
                />
              </div>

              <div className="form-group">
                <label className="form-label">Channel URL (Optional)</label>
                <input 
                  type="url" 
                  className="form-input"
                  placeholder="https://instagram.com/alex_creator"
                  value={url}
                  onChange={e => setUrl(e.target.value)}
                />
              </div>

              <div style={{ display: "flex", justifyContent: "flex-end", gap: "0.75rem", marginTop: "1.5rem" }}>
                <button type="button" onClick={() => setShowAddModal(false)} className="btn btn-secondary">Cancel</button>
                <button type="submit" className="btn btn-primary">Link Platform</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};
