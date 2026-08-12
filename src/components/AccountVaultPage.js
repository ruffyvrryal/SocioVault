// AccountVaultPage Component - Manage & Switch Accounts/Vaults
window.AccountVaultPage = function() {
  const { user } = React.useContext(window.AuthContext);
  const { 
    accounts, 
    setActiveAccountId, 
    setActivePage, 
    addAccount, 
    removeAccount, 
    contents,
    getUserRole 
  } = React.useContext(window.VaultContext);

  const [showAddModal, setShowAddModal] = React.useState(false);
  const [accountName, setAccountName] = React.useState("");
  const [accountDesc, setAccountDesc] = React.useState("");

  // Accounts accessible by current user
  const accessibleAccounts = React.useMemo(() => {
    if (!user) return [];
    return accounts.filter(acc => 
      acc.ownerEmail === user.email || 
      acc.collaborators.some(c => c.email === user.email)
    );
  }, [accounts, user]);

  const handleCreate = (e) => {
    e.preventDefault();
    if (!accountName.trim()) return;
    addAccount(accountName, accountDesc);
    setAccountName("");
    setAccountDesc("");
    setShowAddModal(false);
  };

  const selectAccount = (accId) => {
    setActiveAccountId(accId);
    setActivePage("account-center");
  };

  return (
    <div className="page-container">
      {/* Header */}
      <div className="page-header">
        <div>
          <h1 className="page-title">Account Vault Hub</h1>
          <p className="page-subtitle">Select an account workspace to view platforms, content tables, and analytics.</p>
        </div>
        <button onClick={() => setShowAddModal(true)} className="btn btn-primary">
          <i data-lucide="plus" style={{ width: "18px", height: "18px" }}></i>
          Add New Account
        </button>
      </div>

      {/* Account Cards Grid */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))", gap: "1.5rem" }}>
        {accessibleAccounts.map(acc => {
          const role = getUserRole(acc);
          const accContents = contents.filter(c => c.accountId === acc.id);
          const totalViews = accContents.reduce((sum, c) => sum + (c.impressions || 0), 0);

          return (
            <div 
              key={acc.id}
              className="glass-card glass-card-interactive"
              style={{ cursor: "pointer", display: "flex", flexDirection: "column", justifyContent: "space-between" }}
              onClick={() => selectAccount(acc.id)}
            >
              <div>
                <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", marginBottom: "1rem" }}>
                  <div style={{
                    width: "44px",
                    height: "44px",
                    borderRadius: "12px",
                    background: "rgba(139, 92, 246, 0.15)",
                    border: "1px solid rgba(139, 92, 246, 0.3)",
                    display: "flex",
                    alignItems: "center",
                    justify-content: "center",
                    color: "var(--accent-primary)",
                    fontSize: "1.2rem",
                    fontWeight: 700
                  }}>
                    {acc.name.charAt(0)}
                  </div>
                  
                  <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                    <span className={`badge ${role === 'owner' ? 'badge-uploaded' : role === 'editor' ? 'badge-scheduled' : 'badge-privated'}`}>
                      {role}
                    </span>
                    {role === 'owner' && (
                      <button 
                        onClick={(e) => {
                          e.stopPropagation();
                          if (confirm(`Are you sure you want to delete account "${acc.name}"?`)) {
                            removeAccount(acc.id);
                          }
                        }}
                        className="btn btn-danger btn-icon"
                        title="Remove Account"
                      >
                        <i data-lucide="trash-2" style={{ width: "16px", height: "16px" }}></i>
                      </button>
                    )}
                  </div>
                </div>

                <h3 style={{ fontSize: "1.25rem", fontWeight: 700, marginBottom: "0.4rem" }}>{acc.name}</h3>
                <p style={{ fontSize: "0.85rem", color: "var(--text-muted)", marginBottom: "1.25rem" }}>{acc.description}</p>
                
                {/* Platform Badges */}
                <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem", marginBottom: "1.25rem" }}>
                  {acc.platforms.map(p => (
                    <span key={p.id} className="chip" style={{ fontSize: "0.75rem" }}>
                      {p.name}: {p.handle}
                    </span>
                  ))}
                </div>
              </div>

              <div style={{
                display: "flex",
                alignItems: "center",
                justify-content: "space-between",
                paddingTop: "1rem",
                borderTop: "1px solid var(--border-color)",
                fontSize: "0.85rem",
                color: "var(--text-muted)"
              }}>
                <div>
                  <strong style={{ color: "#fff" }}>{accContents.length}</strong> Content Items
                </div>
                <div>
                  <strong style={{ color: "var(--accent-cyan)" }}>{(totalViews / 1000).toFixed(1)}k</strong> Views
                </div>
              </div>
            </div>
          );
        })}

        {accessibleAccounts.length === 0 && (
          <div className="glass-card" style={{ gridColumn: "1 / -1", textAlign: "center", padding: "3rem 1.5rem" }}>
            <i data-lucide="folder-plus" style={{ width: "48px", height: "48px", color: "var(--text-subtle)", marginBottom: "1rem" }}></i>
            <h3 style={{ fontSize: "1.2rem", fontWeight: 700 }}>No Accounts Found</h3>
            <p style={{ color: "var(--text-muted)", margin: "0.5rem 0 1.5rem" }}>You haven't created any social media accounts yet.</p>
            <button onClick={() => setShowAddModal(true)} className="btn btn-primary">Create Your First Account</button>
          </div>
        )}
      </div>

      {/* Add Account Modal */}
      {showAddModal && (
        <div className="modal-overlay" onClick={() => setShowAddModal(false)}>
          <div className="modal-content" onClick={e => e.stopPropagation()}>
            <div className="modal-header">
              <h2 className="modal-title">Add New Social Account Vault</h2>
              <button onClick={() => setShowAddModal(false)} className="btn btn-secondary btn-icon">
                <i data-lucide="x" style={{ width: "18px", height: "18px" }}></i>
              </button>
            </div>
            
            <form onSubmit={handleCreate}>
              <div className="form-group">
                <label className="form-label">Account / Brand Name</label>
                <input 
                  type="text" 
                  className="form-input"
                  placeholder="e.g. Creator Gaming Hub"
                  required
                  value={accountName}
                  onChange={e => setAccountName(e.target.value)}
                />
              </div>

              <div className="form-group">
                <label className="form-label">Description / Niche</label>
                <textarea 
                  className="form-textarea"
                  placeholder="e.g. Gaming news, live highlights, short-form clips"
                  rows="3"
                  value={accountDesc}
                  onChange={e => setAccountDesc(e.target.value)}
                ></textarea>
              </div>

              <div style={{ display: "flex", justifyContent: "flex-end", gap: "0.75rem", marginTop: "1.5rem" }}>
                <button type="button" onClick={() => setShowAddModal(false)} className="btn btn-secondary">Cancel</button>
                <button type="submit" className="btn btn-primary">Create Account</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};
