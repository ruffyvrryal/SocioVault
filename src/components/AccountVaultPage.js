// AccountVaultPage Component - Manage & Switch Accounts/Vaults
window.AccountVaultPage = function() {
  const { user } = React.useContext(window.AuthContext);
  const {
    accounts,
    setActiveAccountId,
    setActivePage,
    addAccount,
    removeAccount,
    editAccount,
    contents,
    getUserRole
  } = React.useContext(window.VaultContext);

  // Add modal state
  const [showAddModal, setShowAddModal] = React.useState(false);
  const [accountName, setAccountName] = React.useState("");
  const [accountDesc, setAccountDesc] = React.useState("");

  // Edit modal state
  const [editingAcc, setEditingAcc] = React.useState(null);
  const [editName, setEditName] = React.useState("");
  const [editDesc, setEditDesc] = React.useState("");
  const [editPhoto, setEditPhoto] = React.useState("");
  const [editPhotoMode, setEditPhotoMode] = React.useState("url"); // "url" | "upload"
  const [editPhotoPreview, setEditPhotoPreview] = React.useState("");

  // Accounts accessible by current user, sorted alphabetically
  const accessibleAccounts = React.useMemo(() => {
    if (!user) return [];
    return accounts
      .filter(acc =>
        acc.ownerEmail === user.email ||
        acc.collaborators.some(c => c.email === user.email)
      )
      .sort((a, b) => (a.name || "").localeCompare((b.name || "")));
  }, [accounts, user]);

  const handleCreate = (e) => {
    e.preventDefault();
    if (!accountName.trim()) return;
    addAccount(accountName, accountDesc);
    setAccountName(""); setAccountDesc(""); setShowAddModal(false);
  };

  const openEditModal = (e, acc) => {
    e.stopPropagation();
    setEditingAcc(acc);
    setEditName(acc.name || "");
    setEditDesc(acc.description || "");
    setEditPhoto(acc.photoURL || "");
    setEditPhotoPreview(acc.photoURL || "");
    setEditPhotoMode("url");
  };

  const handleEditPhotoUrlChange = (val) => {
    setEditPhoto(val);
    setEditPhotoPreview(val);
  };

  const handleEditPhotoUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (ev) => {
      setEditPhoto(ev.target.result);
      setEditPhotoPreview(ev.target.result);
    };
    reader.readAsDataURL(file);
  };

  const handleEditSave = (e) => {
    e.preventDefault();
    if (!editName.trim()) return;
    editAccount(editingAcc.id, {
      name: editName.trim(),
      description: editDesc.trim(),
      photoURL: editPhoto.trim()
    });
    setEditingAcc(null);
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
                {/* Card Top Row: Avatar + Badges + Actions */}
                <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", marginBottom: "1rem" }}>
                  {/* Profile Photo or Initial */}
                  {acc.photoURL ? (
                    <img
                      src={acc.photoURL}
                      alt={acc.name}
                      style={{ width: "48px", height: "48px", borderRadius: "12px", objectFit: "cover", border: "2px solid rgba(139, 92, 246, 0.4)" }}
                      onError={e => { e.target.style.display = "none"; }}
                    />
                  ) : (
                    <div style={{ width: "48px", height: "48px", borderRadius: "12px", background: "linear-gradient(135deg, rgba(139,92,246,0.25), rgba(6,182,212,0.2))", border: "1px solid rgba(139,92,246,0.35)", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--accent-primary)", fontSize: "1.35rem", fontWeight: 800 }}>
                      {acc.name.charAt(0).toUpperCase()}
                    </div>
                  )}

                  {/* Badges + Action Buttons */}
                  <div style={{ display: "flex", alignItems: "center", gap: "0.45rem" }}>
                    <span className={`badge ${role === 'owner' ? 'badge-uploaded' : role === 'editor' ? 'badge-scheduled' : 'badge-privated'}`}>
                      {role}
                    </span>
                    {role === 'owner' && (
                      <>
                        {/* Edit Button */}
                        <button
                          onClick={(e) => openEditModal(e, acc)}
                          className="btn btn-secondary btn-icon"
                          title="Edit Account"
                          style={{ width: "30px", height: "30px", padding: 0, display: "flex", alignItems: "center", justifyContent: "center" }}
                        >
                          <i data-lucide="pencil" style={{ width: "14px", height: "14px" }}></i>
                        </button>
                        {/* Delete Button */}
                        <button
                          onClick={(e) => { e.stopPropagation(); if (confirm(`Delete account "${acc.name}"?`)) removeAccount(acc.id); }}
                          className="btn btn-danger btn-icon"
                          title="Delete Account"
                          style={{ width: "30px", height: "30px", padding: 0, display: "flex", alignItems: "center", justifyContent: "center" }}
                        >
                          <i data-lucide="trash-2" style={{ width: "14px", height: "14px" }}></i>
                        </button>
                      </>
                    )}
                  </div>
                </div>

                <h3 style={{ fontSize: "1.2rem", fontWeight: 700, marginBottom: "0.35rem" }}>{acc.name}</h3>
                <p style={{ fontSize: "0.85rem", color: "var(--text-muted)", marginBottom: "1.1rem", lineHeight: 1.5 }}>{acc.description}</p>

                {/* Platform Chips */}
                <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem", marginBottom: "1.1rem" }}>
                  {acc.platforms.map(p => (
                    <span key={p.id} className="chip" style={{ fontSize: "0.75rem" }}>
                      {p.name}: {p.handle}
                    </span>
                  ))}
                </div>
              </div>

              {/* Card Footer */}
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", paddingTop: "0.85rem", borderTop: "1px solid var(--border-color)", fontSize: "0.85rem", color: "var(--text-muted)" }}>
                <div><strong style={{ color: "#fff" }}>{accContents.length}</strong> Content Items</div>
                <div><strong style={{ color: "var(--accent-cyan)" }}>{(totalViews / 1000).toFixed(1)}k</strong> Views</div>
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

      {/* ── Add Account Modal ── */}
      {showAddModal && (
        <div className="modal-overlay" onClick={() => setShowAddModal(false)}>
          <div className="modal-content" onClick={e => e.stopPropagation()}>
            <div className="modal-header">
              <h2 className="modal-title">Add New Social Account Vault</h2>
              <button type="button" onClick={() => setShowAddModal(false)} className="btn btn-secondary btn-icon" style={{ width: "32px", height: "32px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <span style={{ fontSize: "1.2rem", fontWeight: "bold" }}>✕</span>
              </button>
            </div>
            <form onSubmit={handleCreate}>
              <div className="form-group">
                <label className="form-label">Account / Brand Name</label>
                <input type="text" className="form-input" placeholder="e.g. Creator Gaming Hub" required value={accountName} onChange={e => setAccountName(e.target.value)} />
              </div>
              <div className="form-group">
                <label className="form-label">Description / Niche</label>
                <textarea className="form-textarea" placeholder="e.g. Gaming news, live highlights, short-form clips" rows="3" value={accountDesc} onChange={e => setAccountDesc(e.target.value)}></textarea>
              </div>
              <div style={{ display: "flex", justifyContent: "flex-end", gap: "0.75rem", marginTop: "1.5rem" }}>
                <button type="button" onClick={() => setShowAddModal(false)} className="btn btn-secondary">Cancel</button>
                <button type="submit" className="btn btn-primary">Create Account</button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* ── Edit Account Modal ── */}
      {editingAcc && (
        <div className="modal-overlay" onClick={() => setEditingAcc(null)}>
          <div className="modal-content" onClick={e => e.stopPropagation()} style={{ maxWidth: "520px" }}>
            <div className="modal-header">
              <h2 className="modal-title">Edit Account</h2>
              <button type="button" onClick={() => setEditingAcc(null)} className="btn btn-secondary btn-icon" style={{ width: "32px", height: "32px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <span style={{ fontSize: "1.2rem", fontWeight: "bold" }}>✕</span>
              </button>
            </div>

            <form onSubmit={handleEditSave}>
              {/* Photo Preview */}
              <div style={{ display: "flex", justifyContent: "center", marginBottom: "1.5rem" }}>
                {editPhotoPreview ? (
                  <img
                    src={editPhotoPreview}
                    alt="Preview"
                    style={{ width: "80px", height: "80px", borderRadius: "16px", objectFit: "cover", border: "2px solid rgba(139,92,246,0.4)" }}
                    onError={e => { e.target.style.display = "none"; }}
                  />
                ) : (
                  <div style={{ width: "80px", height: "80px", borderRadius: "16px", background: "linear-gradient(135deg, rgba(139,92,246,0.25), rgba(6,182,212,0.2))", border: "2px dashed rgba(139,92,246,0.4)", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--accent-primary)", fontSize: "2rem", fontWeight: 800 }}>
                    {editName.charAt(0).toUpperCase() || "?"}
                  </div>
                )}
              </div>

              {/* Account Name */}
              <div className="form-group">
                <label className="form-label">Account / Brand Name</label>
                <input type="text" className="form-input" required value={editName} onChange={e => setEditName(e.target.value)} placeholder="e.g. Creator Gaming Hub" />
              </div>

              {/* Description */}
              <div className="form-group">
                <label className="form-label">Description / Niche</label>
                <textarea className="form-textarea" rows="3" value={editDesc} onChange={e => setEditDesc(e.target.value)} placeholder="e.g. Gaming, tech reviews, lifestyle..."></textarea>
              </div>

              {/* Profile Photo */}
              <div className="form-group">
                <label className="form-label">Profile Photo</label>

                {/* Mode Toggle */}
                <div style={{ display: "flex", gap: "0.5rem", marginBottom: "0.75rem" }}>
                  <button
                    type="button"
                    onClick={() => setEditPhotoMode("url")}
                    className={`btn ${editPhotoMode === "url" ? "btn-primary" : "btn-secondary"}`}
                    style={{ fontSize: "0.82rem", padding: "0.35rem 0.9rem" }}
                  >
                    🔗 Image URL
                  </button>
                  <button
                    type="button"
                    onClick={() => setEditPhotoMode("upload")}
                    className={`btn ${editPhotoMode === "upload" ? "btn-primary" : "btn-secondary"}`}
                    style={{ fontSize: "0.82rem", padding: "0.35rem 0.9rem" }}
                  >
                    📁 Local Upload
                  </button>
                </div>

                {editPhotoMode === "url" ? (
                  <input
                    type="url"
                    className="form-input"
                    placeholder="https://example.com/photo.jpg"
                    value={editPhoto}
                    onChange={e => handleEditPhotoUrlChange(e.target.value)}
                  />
                ) : (
                  <input
                    type="file"
                    accept="image/*"
                    className="form-input"
                    style={{ padding: "0.45rem" }}
                    onChange={handleEditPhotoUpload}
                  />
                )}

                {editPhotoPreview && (
                  <button
                    type="button"
                    onClick={() => { setEditPhoto(""); setEditPhotoPreview(""); }}
                    style={{ marginTop: "0.5rem", background: "none", border: "none", color: "#F43F5E", fontSize: "0.82rem", cursor: "pointer", padding: 0 }}
                  >
                    ✕ Remove photo
                  </button>
                )}
              </div>

              <div style={{ display: "flex", justifyContent: "flex-end", gap: "0.75rem", marginTop: "1.5rem" }}>
                <button type="button" onClick={() => setEditingAcc(null)} className="btn btn-secondary">Cancel</button>
                <button type="submit" className="btn btn-primary">Save Changes</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};
