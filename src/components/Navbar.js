// Navbar Component — Premium Top Navigation & Account Switcher
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
    getUserRole
  } = React.useContext(window.VaultContext);

  const navItems = [
    { id: "account-center",      label: "Overview",         icon: "layout-grid"  },
    { id: "add-content",         label: "Add Content",      icon: "plus-circle"  },
    { id: "content-table",       label: "Content Table",    icon: "table-2"      },
    { id: "timeframe-analytics", label: "Timeframe",        icon: "line-chart"   },
    { id: "hashtag-analytics",   label: "Hashtag Studio",   icon: "hash"         },
    { id: "subject-analytics",   label: "Subjects",         icon: "users"        },
    { id: "report-summary",      label: "Report",           icon: "file-bar-chart"},
    { id: "collaborators",       label: "Collaborators",    icon: "share-2"      }
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

        {/* Right: User Menu */}
        <div className="user-menu">
          {user && (
            <>
              <div style={{ textAlign: "right", display: "none" }}>
                <div style={{ fontSize: "0.82rem", fontWeight: 600, color: "var(--text-main)" }}>
                  {user.displayName}
                </div>
                <div style={{ fontSize: "0.72rem", color: "var(--text-muted)" }}>
                  {user.email}
                </div>
              </div>
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
  );
};
