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

  const daysOfWeek = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

  const getDayOfWeek = (dateStr) => {
    if (!dateStr) return "Mon";
    const parts = dateStr.split("-").map(Number);
    if (parts.length < 3) return "Mon";
    const date = new Date(parts[0], parts[1] - 1, parts[2]);
    const dayIndex = date.getDay();
    return dayIndex === 0 ? "Sun" : daysOfWeek[dayIndex - 1];
  };

  // Accounts accessible by current user
  const accessibleAccounts = React.useMemo(() => {
    if (!user) return [];
    return accounts.filter(acc => 
      acc.ownerEmail === user.email || 
      (acc.collaborators && acc.collaborators.some(c => c.email === user.email))
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

  const handleDayAdd = (day) => {
    if (accessibleAccounts.length > 0) {
      setActiveAccountId(accessibleAccounts[0].id);
      setActivePage("add-content");
    } else {
      setShowAddModal(true);
    }
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
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))", gap: "1.5rem", marginBottom: "2.5rem" }}>
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
                  <div style={{ width: "44px", height: "44px", borderRadius: "12px", background: "rgba(139, 92, 246, 0.15)", border: "1px solid rgba(139, 92, 246, 0.3)", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--accent-primary)", fontSize: "1.2rem", fontWeight: 700 }}>
                    {acc.name ? acc.name.charAt(0) : "V"}
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
                  {(acc.platforms || []).map(p => (
                    <span key={p.id || p.name} className="chip" style={{ fontSize: "0.75rem" }}>
                      {p.name}: {p.handle}
                    </span>
                  ))}
                </div>
              </div>

              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", paddingTop: "1rem", borderTop: "1px solid var(--border-color)", fontSize: "0.85rem", color: "var(--text-muted)" }}>
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

      {/* WEEKLY SCHEDULE TABLE HUB (SCREENSHOT MATCHED DESIGN) */}
      <div style={{ marginBottom: "1rem" }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "1rem" }}>
          <div>
            <h2 style={{ fontSize: "1.35rem", fontWeight: 700, color: "#FFFFFF" }}>Global Weekly Schedule Hub</h2>
            <p style={{ fontSize: "0.85rem", color: "var(--text-muted)", margin: "0.2rem 0 0" }}>Interactive weekly posting calendar & schedule table across all account vaults</p>
          </div>
        </div>

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
              const dayContents = contents.filter(c => getDayOfWeek(c.uploadDate) === day);
              const TOTAL_SLOTS = 8;
              const emptySlotsCount = Math.max(0, TOTAL_SLOTS - dayContents.length);

              return (
                <div key={day} className="weekly-day-column">
                  {dayContents.map(item => (
                    <div 
                      key={item.id} 
                      className="weekly-pill-item"
                      onClick={() => {
                        setActiveAccountId(item.accountId);
                        setActivePage("content-table");
                      }}
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
                      onClick={() => handleDayAdd(day)}
                      title="Click to schedule content"
                    >
                      <span className="pill-text">Dropdown</span>
                    </div>
                  ))}
                </div>
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
                  onClick={() => handleDayAdd(day)}
                >
                  +
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Add Account Modal */}
      {showAddModal && (
        <div className="modal-overlay" onClick={() => setShowAddModal(false)}>
          <div className="modal-content" onClick={e => e.stopPropagation()}>
            <div className="modal-header">
              <h2 className="modal-title">Add New Social Account Vault</h2>
              <button type="button" onClick={() => setShowAddModal(false)} className="btn btn-secondary btn-icon" style={{ cursor: "pointer", width: "32px", height: "32px", display: "flex", alignItems: "center", justifyContent: "center" }} title="Close">
                <span style={{ fontSize: "1.2rem", lineHeight: 1, fontWeight: "bold" }}>✕</span>
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
