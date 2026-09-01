// AccountCenterPage Component - Modern, Compact, High-Impact Account Overview
window.AccountCenterPage = function() {
  const { 
    activeAccount, 
    addPlatform, 
    removePlatform, 
    contents, 
    canEdit, 
    setActivePage,
    syncAllTikTokPosts,
    isSyncingTikTok
  } = React.useContext(window.VaultContext);

  const [showAddModal, setShowAddModal] = React.useState(false);
  const [platformName, setPlatformName] = React.useState("Instagram");
  const [handle, setHandle] = React.useState("");
  const [followers, setFollowers] = React.useState("");
  const [url, setUrl] = React.useState("");

  if (!activeAccount) {
    return (
      <div className="page-container" style={{ textAlign: "center", padding: "4rem 1rem" }}>
        <p style={{ color: "var(--text-muted)" }}>No active account selected.</p>
        <button onClick={() => setActivePage("account-vault")} className="btn btn-primary" style={{ marginTop: "1rem" }}>
          ← Return to Vault Hub
        </button>
      </div>
    );
  }

  const accountContents = contents.filter(c => c.accountId === activeAccount.id);
  const totalViews = accountContents.reduce((sum, c) => sum + (c.impressions || 0), 0);
  const totalReach = accountContents.reduce((sum, c) => sum + (c.reach || 0), 0);
  const totalLikes = accountContents.reduce((sum, c) => sum + (c.likes || 0), 0);
  const totalComments = accountContents.reduce((sum, c) => sum + (c.comments || 0), 0);
  const totalShares = accountContents.reduce((sum, c) => sum + (c.shares || 0), 0);
  const totalSaves = accountContents.reduce((sum, c) => sum + (c.saves || 0), 0);
  const totalEngagement = totalLikes + totalComments + totalShares + totalSaves;
  const overallER = totalViews > 0 ? ((totalEngagement / totalViews) * 100).toFixed(2) : "0.00";
  const totalFollowers = activeAccount.platforms.reduce((sum, p) => sum + (Number(p.followers) || 0), 0);

  // Status breakdown
  const statusCounts = { Uploaded: 0, Scheduled: 0, Privated: 0, Deleted: 0 };
  accountContents.forEach(c => {
    const s = c.status || "Uploaded";
    if (statusCounts[s] !== undefined) statusCounts[s]++;
    else statusCounts["Uploaded"]++;
  });

  // Recent 5 TikTok posts for health status
  const recentTikToks = accountContents
    .filter(c => (c.platform === "TikTok" || c.originalUrl) && c.uploadDate)
    .sort((a, b) => new Date(b.uploadDate) - new Date(a.uploadDate))
    .slice(0, 5);

  const avgTikTokViews = recentTikToks.length > 0 
    ? Math.round(recentTikToks.reduce((sum, c) => sum + (c.impressions || 0), 0) / recentTikToks.length)
    : 0;

  const healthStatus = React.useMemo(() => {
    if (recentTikToks.length === 0) {
      return { label: "No TikTok Activity", color: "#F43F5E", bg: "rgba(244,63,94,0.12)", icon: "⚠️", desc: "No recent TikTok posts logged" };
    } else if (avgTikTokViews >= 500) {
      return { label: "High Performing", color: "#10B981", bg: "rgba(16,185,129,0.12)", icon: "🔥", desc: `Avg ${avgTikTokViews.toLocaleString()} views on recent ${recentTikToks.length} posts` };
    } else if (avgTikTokViews >= 100) {
      return { label: "Healthy Trend", color: "#06B6D4", bg: "rgba(6,182,212,0.12)", icon: "✨", desc: `Avg ${avgTikTokViews.toLocaleString()} views on recent ${recentTikToks.length} posts` };
    } else {
      return { label: "Low Activity", color: "#F59E0B", bg: "rgba(245,158,11,0.12)", icon: "⚡", desc: `Avg ${avgTikTokViews.toLocaleString()} views on recent posts` };
    }
  }, [recentTikToks, avgTikTokViews]);

  // Recent 5 content items across all platforms
  const recentPosts = accountContents
    .sort((a, b) => new Date(b.uploadDate || 0) - new Date(a.uploadDate || 0))
    .slice(0, 5);

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
      case "instagram": return "📸";
      case "youtube": return "▶️";
      case "tiktok": return "🎵";
      case "x (twitter)":
      case "x":
      case "twitter": return "𝕏";
      case "facebook": return "📘";
      case "threads": return "🧵";
      default: return "🌐";
    }
  };

  return (
    <div className="page-container">
      {/* ── Header Bar ── */}
      <div className="page-header" style={{ marginBottom: "1.25rem" }}>
        <div>
          <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", flexWrap: "wrap" }}>
            <h1 className="page-title" style={{ fontSize: "1.45rem", fontWeight: 800 }}>
              {activeAccount.name}
            </h1>
            <div style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.4rem",
              padding: "0.2rem 0.65rem",
              borderRadius: "20px",
              background: healthStatus.bg,
              border: `1px solid ${healthStatus.color}`,
              color: healthStatus.color,
              fontSize: "0.74rem",
              fontWeight: 700
            }}>
              <span>{healthStatus.icon}</span>
              <span>{healthStatus.label}</span>
            </div>
          </div>
          <p className="page-subtitle" style={{ fontSize: "0.82rem", marginTop: "2px" }}>
            {activeAccount.description || "Active social media workspace"} • {activeAccount.platforms.length} connected platforms
          </p>
        </div>

        <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
          {canEdit && (
            <button onClick={() => setShowAddModal(true)} className="btn btn-sm btn-secondary" style={{ fontWeight: 700 }}>
              <span>➕ Add Channel</span>
            </button>
          )}
          <button onClick={() => setActivePage("add-content")} className="btn btn-sm btn-primary" style={{ fontWeight: 700 }}>
            <span>⚡ Log Content</span>
          </button>
        </div>
      </div>

      {/* ── 4-KPI Compact Metrics Row ── */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(210px, 1fr))", gap: "0.85rem", marginBottom: "1.25rem" }}>
        
        {/* KPI 1: Total Audience */}
        <div className="glass-card" style={{ padding: "0.9rem 1.15rem", borderRadius: "12px", border: "1px solid rgba(139,92,246,0.25)", background: "linear-gradient(135deg, rgba(139,92,246,0.08), rgba(13,17,23,0.8))" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "0.35rem" }}>
            <span style={{ fontSize: "0.74rem", fontWeight: 700, color: "var(--text-muted)", textTransform: "uppercase", letterSpacing: "0.05em" }}>
              Total Audience
            </span>
            <span style={{ fontSize: "1.1rem" }}>👥</span>
          </div>
          <div style={{ fontSize: "1.65rem", fontWeight: 800, color: "#fff", lineHeight: 1.1 }}>
            {totalFollowers >= 1000 ? (totalFollowers / 1000).toFixed(1) + "k" : totalFollowers.toLocaleString()}
          </div>
          <div style={{ fontSize: "0.74rem", color: "var(--accent-primary-light)", marginTop: "0.35rem", display: "flex", gap: "0.3rem" }}>
            {activeAccount.platforms.map(p => (
              <span key={p.id} title={`${p.name}: ${(Number(p.followers) || 0).toLocaleString()}`}>{getPlatformIcon(p.name)}</span>
            ))}
          </div>
        </div>

        {/* KPI 2: Total Impressions */}
        <div className="glass-card" style={{ padding: "0.9rem 1.15rem", borderRadius: "12px", border: "1px solid rgba(6,182,212,0.25)", background: "linear-gradient(135deg, rgba(6,182,212,0.08), rgba(13,17,23,0.8))" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "0.35rem" }}>
            <span style={{ fontSize: "0.74rem", fontWeight: 700, color: "var(--text-muted)", textTransform: "uppercase", letterSpacing: "0.05em" }}>
              Total Impressions
            </span>
            <span style={{ fontSize: "1.1rem" }}>👀</span>
          </div>
          <div style={{ fontSize: "1.65rem", fontWeight: 800, color: "#22D3EE", lineHeight: 1.1 }}>
            {totalViews >= 1000000 ? (totalViews / 1000000).toFixed(2) + "M" : (totalViews >= 1000 ? (totalViews / 1000).toFixed(1) + "k" : totalViews.toLocaleString())}
          </div>
          <div style={{ fontSize: "0.74rem", color: "var(--text-muted)", marginTop: "0.35rem" }}>
            Reach: <strong>{(totalReach / 1000).toFixed(1)}k</strong> (85% est.)
          </div>
        </div>

        {/* KPI 3: Engagement & ER% */}
        <div className="glass-card" style={{ padding: "0.9rem 1.15rem", borderRadius: "12px", border: "1px solid rgba(16,185,129,0.25)", background: "linear-gradient(135deg, rgba(16,185,129,0.08), rgba(13,17,23,0.8))" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "0.35rem" }}>
            <span style={{ fontSize: "0.74rem", fontWeight: 700, color: "var(--text-muted)", textTransform: "uppercase", letterSpacing: "0.05em" }}>
              Avg Engagement Rate
            </span>
            <span style={{ fontSize: "1.1rem" }}>🎯</span>
          </div>
          <div style={{ fontSize: "1.65rem", fontWeight: 800, color: "#34D399", lineHeight: 1.1 }}>
            {overallER}%
          </div>
          <div style={{ fontSize: "0.74rem", color: "var(--text-muted)", marginTop: "0.35rem" }}>
            ❤️ {totalLikes.toLocaleString()} likes • 💬 {totalComments.toLocaleString()} comments
          </div>
        </div>

        {/* KPI 4: Logged Content */}
        <div className="glass-card" style={{ padding: "0.9rem 1.15rem", borderRadius: "12px", border: "1px solid rgba(244,63,94,0.25)", background: "linear-gradient(135deg, rgba(244,63,94,0.08), rgba(13,17,23,0.8))" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "0.35rem" }}>
            <span style={{ fontSize: "0.74rem", fontWeight: 700, color: "var(--text-muted)", textTransform: "uppercase", letterSpacing: "0.05em" }}>
              Total Posts Logged
            </span>
            <span style={{ fontSize: "1.1rem" }}>📋</span>
          </div>
          <div style={{ fontSize: "1.65rem", fontWeight: 800, color: "#fff", lineHeight: 1.1 }}>
            {accountContents.length}
          </div>
          <div style={{ fontSize: "0.72rem", color: "var(--text-muted)", marginTop: "0.35rem", display: "flex", gap: "0.4rem" }}>
            <span style={{ color: "var(--accent-emerald)" }}>{statusCounts.Uploaded} live</span>
            <span>•</span>
            <span style={{ color: "var(--accent-cyan)" }}>{statusCounts.Scheduled} plan</span>
            <span>•</span>
            <span style={{ color: "var(--accent-amber)" }}>{statusCounts.Privated} priv</span>
          </div>
        </div>
      </div>

      {/* ── TikTok Live Status & Quick Action Banner ── */}
      <div className="glass-card" style={{
        padding: "1rem 1.25rem",
        borderRadius: "12px",
        marginBottom: "1.25rem",
        background: "linear-gradient(135deg, rgba(37,244,238,0.08), rgba(254,44,85,0.08))",
        border: "1px solid rgba(37,244,238,0.25)",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        flexWrap: "wrap",
        gap: "0.75rem"
      }}>
        <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
          <div style={{ width: "36px", height: "36px", borderRadius: "10px", background: "linear-gradient(135deg, #25F4EE, #FE2C55)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.1rem" }}>
            🎵
          </div>
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
              <span style={{ fontWeight: 800, fontSize: "0.95rem", color: "#fff" }}>TikTok Performance Pulse:</span>
              <span style={{ fontWeight: 700, fontSize: "0.85rem", color: healthStatus.color }}>{healthStatus.label}</span>
            </div>
            <div style={{ fontSize: "0.78rem", color: "var(--text-muted)", marginTop: "1px" }}>
              {healthStatus.desc} • {recentTikToks.length} posts tracked
            </div>
          </div>
        </div>

        <div style={{ display: "flex", gap: "0.5rem", alignItems: "center" }}>
          {recentTikToks.length > 0 && (
            <button
              type="button"
              onClick={() => syncAllTikTokPosts(activeAccount.id)}
              disabled={isSyncingTikTok}
              className="btn btn-sm btn-secondary"
              style={{
                borderColor: "rgba(37,244,238,0.4)",
                color: "#25F4EE",
                background: "rgba(37,244,238,0.1)",
                fontWeight: 700,
                fontSize: "0.78rem"
              }}
              title="Refresh views and engagement for all TikTok posts"
            >
              <span style={{ animation: isSyncingTikTok ? "spin 1s linear infinite" : "none", display: "inline-block" }}>🔄</span>
              <span>{isSyncingTikTok ? "Syncing..." : "Sync Live TikTok"}</span>
            </button>
          )}
          <button
            onClick={() => setActivePage("timeframe-analytics")}
            className="btn btn-sm btn-secondary"
            style={{ fontSize: "0.78rem" }}
          >
            📊 View Analytics →
          </button>
        </div>
      </div>

      {/* ── 2-Column Split: Connected Channels & Recent Posts ── */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "1.25rem" }}>
        
        {/* Left Column: Connected Platform Channels */}
        <div className="glass-card" style={{ padding: "1.25rem", borderRadius: "14px" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "1rem" }}>
            <h3 style={{ fontSize: "1rem", fontWeight: 700, margin: 0 }}>
              Connected Channels ({activeAccount.platforms.length})
            </h3>
            {canEdit && (
              <button onClick={() => setShowAddModal(true)} className="btn btn-sm btn-ghost" style={{ padding: "0.2rem 0.5rem", fontSize: "0.75rem" }}>
                + Add Platform
              </button>
            )}
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: "0.6rem" }}>
            {activeAccount.platforms.map(p => (
              <div 
                key={p.id} 
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  padding: "0.65rem 0.85rem",
                  borderRadius: "10px",
                  background: "rgba(255,255,255,0.03)",
                  border: "1px solid var(--border-color)",
                  transition: "all 0.2s ease"
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: "0.65rem" }}>
                  <span style={{ fontSize: "1.2rem" }}>{getPlatformIcon(p.name)}</span>
                  <div>
                    <div style={{ fontWeight: 700, fontSize: "0.85rem", color: "#fff" }}>{p.name}</div>
                    <div style={{ fontSize: "0.74rem", color: "var(--text-muted)" }}>{p.handle}</div>
                  </div>
                </div>

                <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
                  <div style={{ textAlign: "right" }}>
                    <div style={{ fontWeight: 800, fontSize: "0.88rem", color: "var(--accent-cyan-light)" }}>
                      {(Number(p.followers) || 0).toLocaleString()}
                    </div>
                    <div style={{ fontSize: "0.68rem", color: "var(--text-subtle)", textTransform: "uppercase" }}>followers</div>
                  </div>
                  {canEdit && (
                    <button
                      onClick={() => removePlatform(activeAccount.id, p.id)}
                      className="btn btn-ghost"
                      style={{ padding: "0.2rem 0.4rem", minHeight: "26px", color: "var(--text-subtle)" }}
                      title="Remove platform"
                    >
                      ✕
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column: Recent Activity Feed */}
        <div className="glass-card" style={{ padding: "1.25rem", borderRadius: "14px" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "1rem" }}>
            <h3 style={{ fontSize: "1rem", fontWeight: 700, margin: 0 }}>
              Recent Content ({recentPosts.length})
            </h3>
            <button onClick={() => setActivePage("content-table")} className="btn btn-sm btn-ghost" style={{ padding: "0.2rem 0.5rem", fontSize: "0.75rem" }}>
              View All Table →
            </button>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: "0.55rem" }}>
            {recentPosts.map(post => (
              <div 
                key={post.id}
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  padding: "0.6rem 0.75rem",
                  borderRadius: "8px",
                  background: "rgba(255,255,255,0.02)",
                  border: "1px solid var(--border-color)",
                  fontSize: "0.82rem"
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: "0.6rem", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap", flex: 1, marginRight: "0.75rem" }}>
                  <span>{getPlatformIcon(post.platform)}</span>
                  <span style={{ fontWeight: 600, color: "#fff", overflow: "hidden", textOverflow: "ellipsis" }}>
                    {post.caption || "(No caption)"}
                  </span>
                </div>

                <div style={{ display: "flex", alignItems: "center", gap: "0.6rem", flexShrink: 0 }}>
                  <span style={{ fontWeight: 700, fontSize: "0.8rem", color: "var(--accent-emerald)" }}>
                    {(post.impressions || 0).toLocaleString()} views
                  </span>
                  <span className={`badge ${post.status === 'Uploaded' ? 'badge-uploaded' : (post.status === 'Scheduled' ? 'badge-scheduled' : 'badge-privated')}`} style={{ fontSize: "0.65rem" }}>
                    {post.status}
                  </span>
                </div>
              </div>
            ))}
            {recentPosts.length === 0 && (
              <div style={{ textAlign: "center", padding: "1.5rem", color: "var(--text-muted)", fontSize: "0.82rem" }}>
                No content logged yet. Click <strong>⚡ Log Content</strong> to add your first post!
              </div>
            )}
          </div>
        </div>
      </div>

      {/* ── ADD PLATFORM CHANNEL MODAL ── */}
      {showAddModal && (
        <div className="modal-overlay" onClick={() => setShowAddModal(false)}>
          <div className="modal-content" style={{ maxWidth: "440px", width: "90%" }} onClick={e => e.stopPropagation()}>
            <div className="modal-header" style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "1rem" }}>
              <h2 style={{ fontSize: "1.2rem", fontWeight: 700, margin: 0 }}>Add Channel Account</h2>
              <button onClick={() => setShowAddModal(false)} className="btn btn-secondary btn-icon" style={{ width: "28px", height: "28px" }}>✕</button>
            </div>

            <form onSubmit={handleAddPlatform}>
              <div className="form-group" style={{ marginBottom: "0.85rem" }}>
                <label className="form-label">Platform</label>
                <select className="form-select" value={platformName} onChange={e => setPlatformName(e.target.value)}>
                  <option value="Instagram">Instagram</option>
                  <option value="TikTok">TikTok</option>
                  <option value="YouTube">YouTube</option>
                  <option value="X (Twitter)">X (Twitter)</option>
                  <option value="Facebook">Facebook</option>
                  <option value="Threads">Threads</option>
                </select>
              </div>

              <div className="form-group" style={{ marginBottom: "0.85rem" }}>
                <label className="form-label">Account Handle / Username</label>
                <input type="text" className="form-input" placeholder="@yourbrand" required value={handle} onChange={e => setHandle(e.target.value)} />
              </div>

              <div className="form-group" style={{ marginBottom: "0.85rem" }}>
                <label className="form-label">Followers Count</label>
                <input type="number" className="form-input" placeholder="0" min="0" value={followers} onChange={e => setFollowers(e.target.value)} />
              </div>

              <div className="form-group" style={{ marginBottom: "1.25rem" }}>
                <label className="form-label">Profile URL (Optional)</label>
                <input type="text" className="form-input" placeholder="https://instagram.com/..." value={url} onChange={e => setUrl(e.target.value)} />
              </div>

              <div style={{ display: "flex", justifyContent: "flex-end", gap: "0.6rem" }}>
                <button type="button" onClick={() => setShowAddModal(false)} className="btn btn-secondary">Cancel</button>
                <button type="submit" className="btn btn-primary">Add Channel</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};
