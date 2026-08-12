// Navbar Component - Top Header Navigation & Account Switcher
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

  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  const navItems = [
    { id: "account-center", label: "Account Center", icon: "layout-grid" },
    { id: "add-content", label: "Add Content", icon: "plus-circle" },
    { id: "content-table", label: "Content Table", icon: "table" },
    { id: "timeframe-analytics", label: "Timeframe Analytics", icon: "line-chart" },
    { id: "hashtag-analytics", label: "Hashtag Studio", icon: "hash" },
    { id: "subject-analytics", label: "Subject Analytics", icon: "users" },
    { id: "collaborators", label: "Collaborators", icon: "share-2" }
  ];

  // Accessible accounts dropdown
  const accessibleAccounts = accounts.filter(acc => 
    user && (acc.ownerEmail === user.email || acc.collaborators.some(c => c.email === user.email))
  );

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Brand & Account Selector */}
        <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
          <div className="navbar-brand" onClick={() => { setActiveAccountId(null); setActivePage("account-vault"); }}>
            <i data-lucide="layers" style={{ color: "var(--accent-primary)" }}></i>
            <span>SocialVault</span>
          </div>

          {activeAccount && (
            <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
              <span style={{ color: "var(--text-subtle)", fontSize: "0.9rem" }}>/</span>
              <select 
                className="form-select"
                style={{ padding: "0.4rem 0.75rem", fontSize: "0.85rem", width: "auto", background: "rgba(31, 41, 55, 0.8)", fontWeight: 600 }}
                value={activeAccountId || ""}
                onChange={(e) => {
                  if (e.target.value === "VAULT_HUB") {
                    setActiveAccountId(null);
                  } else {
                    setActiveAccountId(e.target.value);
                  }
                }}
              >
                <option value="VAULT_HUB">← Account Vault Hub</option>
                {accessibleAccounts.map(acc => (
                  <option key={acc.id} value={acc.id}>
                    {acc.name} ({getUserRole(acc)})
                  </option>
                ))}
              </select>

              <span className={`badge ${activeUserRole === 'owner' ? 'badge-uploaded' : activeUserRole === 'editor' ? 'badge-scheduled' : 'badge-privated'}`}>
                {activeUserRole}
              </span>
            </div>
          )}
        </div>

        {/* User Profile & Logout */}
        <div className="user-menu">
          {user && (
            <div style={{ display: "flex", alignItems: "center", gap: "0.6rem" }}>
              <img 
                src={user.photoURL} 
                alt={user.displayName}
                style={{ width: "32px", height: "32px", borderRadius: "50%", border: "1px solid var(--border-color)" }}
              />
              <span style={{ fontSize: "0.85rem", fontWeight: 500, display: "none" }}>{user.displayName}</span>
              <button 
                onClick={logout} 
                className="btn btn-secondary btn-icon"
                title={`Signed in as ${user.email}. Click to Logout`}
              >
                <i data-lucide="log-out" style={{ width: "16px", height: "16px" }}></i>
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Navigation Pages Bar (Only visible when inside an account) */}
      {activeAccount && (
        <div className="navbar-container" style={{ marginTop: "0.75rem", borderTop: "1px solid var(--border-color)", paddingTop: "0.5rem" }}>
          <div className="navbar-nav">
            {navItems.map(item => (
              <div 
                key={item.id}
                className={`nav-link ${activePage === item.id ? 'active' : ''}`}
                onClick={() => setActivePage(item.id)}
              >
                <i data-lucide={item.icon} style={{ width: "16px", height: "16px" }}></i>
                {item.label}
              </div>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};
