// Navbar Component — Premium Top Navigation, Account Switcher & Global Undo Controller
window.Navbar = function() {
  const { user, logout } = React.useContext(window.AuthContext);
  const {
    accounts,
    activeAccountId,
    setActiveAccountId,
    activeAccount,
    activePage,
    setActivePage,
    activeUserRole,
    getUserRole,
    canUndo,
    undo,
    historyStack,
    lastActionDescription,
    undoToast,
    isSyncingTikTok
  } = React.useContext(window.VaultContext);

  const navItems = [
    { id: "account-center",      label: "Overview",         icon: "layout-grid"   },
    { id: "add-content",         label: "Add Content",      icon: "plus-circle"   },
    { id: "content-table",       label: "Content Table",    icon: "table-2"       },
    { id: "timeframe-analytics", label: "Timeframe",        icon: "line-chart"    },
    { id: "hashtag-analytics",   label: "Hashtag Studio",   icon: "hash"          },
    { id: "subject-analytics",   label: "Subjects",         icon: "users"         },
    { id: "report-summary",      label: "Report",           icon: "file-bar-chart"},
    { id: "collaborators",       label: "Collaborators",    icon: "share-2"       },
    { id: "follower-tracks",     label: "Follower Tracks",  icon: "trending-up"   }
  ];

  const accessibleAccounts = accounts.filter(acc =>
    user && (
      acc.ownerEmail === user.email ||
      acc.collaborators.some(c => c.email === user.email)
    )
  );

  const roleBadgeClass =
    activeUserRole === 'owner'  ? 'badge-uploaded' :
    activeUserRole === 'editor' ? 'badge-scheduled' :
                                  'badge-privated';

  return (
    <>
      <nav className="navbar">
        {/* ── Primary Row ── */}
        <div className="navbar-container">

          {/* Left: Brand + Account Switcher */}
          <div style={{ display: "flex", alignItems: "center", gap: "0.9rem", minWidth: 0 }}>

            {/* Brand Logo */}
            <div
              className="navbar-brand"
              onClick={() => { setActiveAccountId(null); setActivePage("account-vault"); }}
              title="Return to Account Vault"
            >
              <div className="brand-icon">
                <i data-lucide="layers" style={{ width: "16px", height: "16px", color: "#fff" }}></i>
              </div>
              <span>SocioVault</span>
            </div>

            {/* Account Switcher */}
            {activeAccount && (
              <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", minWidth: 0 }}>
                <span style={{ color: "var(--border-hover)", fontSize: "1rem", opacity: 0.5 }}>/</span>

                <select
                  className="form-select"
                  style={{
                    padding:    "0.35rem 2rem 0.35rem 0.7rem",
                    fontSize:   "0.82rem",
                    fontWeight: 600,
                    width:      "auto",
                    minHeight:  "unset",
                    background: "rgba(22, 30, 46, 0.9)",
                    border:     "1px solid var(--border-color)",
                    maxWidth:   "200px"
                  }}
                  value={activeAccountId || ""}
                  onChange={e => {
                    if (e.target.value === "VAULT_HUB") setActiveAccountId(null);
                    else setActiveAccountId(e.target.value);
                  }}
                >
                  <option value="VAULT_HUB">← Vault Hub</option>
                  {accessibleAccounts.map(acc => (
                    <option key={acc.id} value={acc.id}>
                      {acc.name} ({getUserRole(acc)})
                    </option>
                  ))}
                </select>

                <span className={`badge ${roleBadgeClass}`}
                  style={{ fontSize: "0.65rem" }}>
                  {activeUserRole}
                </span>
              </div>
            )}
          </div>

          {/* Right: Actions & User Menu */}
          <div className="user-menu" style={{ display: "flex", alignItems: "center", gap: "0.6rem" }}>
            
            {/* 24/7 Cloud Live Tracking Indicator */}
            {activeAccount && (
              <div style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.35rem",
                padding: "0.3rem 0.65rem",
                borderRadius: "8px",
                fontSize: "0.74rem",
                fontWeight: 600,
                background: "rgba(16,185,129,0.1)",
                border: "1px solid rgba(16,185,129,0.25)",
                color: "#10B981"
              }} title="Followers & content metrics automatically update 24/7 in the cloud without needing the website open">
                <span style={{ fontSize: "0.65rem" }}>☁️</span>
                <span>24/7 Cloud Track: Active</span>
              </div>
            )}

            {/* Live TikTok Syncing Indicator */}
            {isSyncingTikTok && (
              <div style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.4rem",
                padding: "0.35rem 0.7rem",
                borderRadius: "8px",
                fontSize: "0.78rem",
                fontWeight: 700,
                background: "rgba(37,244,238,0.15)",
                border: "1px solid rgba(37,244,238,0.4)",
                color: "#25F4EE"
              }}>
                <span style={{ animation: "spin 1s linear infinite", display: "inline-block" }}>🔄</span>
                <span>Live Syncing TikTok...</span>
              </div>
            )}

            {/* ── Global Undo Action Button (Always Clickable) ── */}
            <button
              type="button"
              onClick={undo}
              className={`btn btn-sm ${canUndo ? 'btn-secondary' : ''}`}
              title={canUndo ? `Undo: ${lastActionDescription} (Ctrl+Z)` : "Click to view undo status (Ctrl+Z)"}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.45rem",
                padding: "0.4rem 0.75rem",
                borderRadius: "8px",
                fontSize: "0.8rem",
                fontWeight: 700,
                cursor: "pointer",
                background: canUndo ? "linear-gradient(135deg, rgba(139,92,246,0.25), rgba(6,182,212,0.25))" : "rgba(255,255,255,0.05)",
                border: `1px solid ${canUndo ? "var(--accent-primary)" : "rgba(255,255,255,0.12)"}`,
                color: canUndo ? "#fff" : "var(--text-muted)",
                boxShadow: canUndo ? "0 0 12px rgba(139,92,246,0.3)" : "none",
                transition: "all 0.2s ease"
              }}
            >
              <span style={{ fontSize: "0.95rem" }}>↩️</span>
              <span>Undo</span>
              <span style={{
                padding: "0.1rem 0.4rem",
                borderRadius: "10px",
                fontSize: "0.68rem",
                background: canUndo ? "var(--accent-primary)" : "rgba(255,255,255,0.1)",
                color: canUndo ? "#fff" : "var(--text-muted)",
                fontWeight: 800
              }}>
                {historyStack ? historyStack.length : 0}
              </span>
            </button>

            {user && (
              <>
                <img
                  src={user.photoURL}
                  alt={user.displayName}
                  title={`${user.displayName} · ${user.email}`}
                  style={{
                    width:        "34px",
                    height:       "34px",
                    borderRadius: "50%",
                    border:       "2px solid var(--border-color)",
                    objectFit:    "cover",
                    transition:   "border-color 0.2s"
                  }}
                  onMouseOver={e => e.target.style.borderColor = "var(--accent-primary)"}
                  onMouseOut={e  => e.target.style.borderColor = "var(--border-color)"}
                />
                <button
                  onClick={logout}
                  className="btn btn-secondary btn-icon"
                  title={`Sign out (${user.email})`}
                  style={{ minHeight: "36px", minWidth: "36px", padding: "0.4rem" }}
                >
                  <i data-lucide="log-out" style={{ width: "15px", height: "15px" }}></i>
                </button>
              </>
            )}
          </div>
        </div>

        {/* ── Navigation Row (only inside an account) ── */}
        {activeAccount && (
          <div className="navbar-nav-row">
            <div className="navbar-container">
              <div className="navbar-nav">
                {navItems.map(item => (
                  <div
                    key={item.id}
                    className={`nav-link ${activePage === item.id ? 'active' : ''}`}
                    onClick={() => setActivePage(item.id)}
                  >
                    <i data-lucide={item.icon} style={{ width: "13px", height: "13px" }}></i>
                    {item.label}
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* ── Floating Undo Toast Notification ── */}
      {undoToast && (
        <div style={{
          position: "fixed",
          bottom: "1.5rem",
          right: "1.5rem",
          zIndex: 9999,
          padding: "0.85rem 1.25rem",
          borderRadius: "10px",
          background: undoToast.type === "warning" ? "rgba(244, 63, 94, 0.95)" : (undoToast.type === "info" ? "rgba(30, 41, 59, 0.95)" : "rgba(15, 23, 42, 0.95)"),
          border: `1px solid ${undoToast.type === "warning" ? "#F43F5E" : (undoToast.type === "info" ? "var(--accent-primary)" : "var(--accent-emerald)")}`,
          boxShadow: "0 10px 25px rgba(0,0,0,0.5)",
          color: "#fff",
          display: "flex",
          alignItems: "center",
          gap: "0.75rem",
          fontSize: "0.88rem",
          fontWeight: 600,
          animation: "fadeIn 0.2s ease"
        }}>
          <span>{undoToast.type === "warning" ? "⚠️" : (undoToast.type === "info" ? "ℹ️" : "✨")}</span>
          <span>{undoToast.message}</span>
          {canUndo && (
            <button
              onClick={undo}
              style={{
                marginLeft: "0.5rem",
                padding: "0.25rem 0.6rem",
                borderRadius: "6px",
                background: "#fff",
                color: "#000",
                fontWeight: 700,
                fontSize: "0.78rem",
                border: "none",
                cursor: "pointer"
              }}
            >
              Undo Now
            </button>
          )}
        </div>
      )}
    </>
  );
};
