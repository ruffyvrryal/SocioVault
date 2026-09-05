// AccountVaultPage Component - Modern, Compact Account Vault Hub & Weekly Schedule
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
  const [vaultSearch, setVaultSearch] = React.useState("");

  // Edit modal state
  const [editingAcc, setEditingAcc] = React.useState(null);
  const [editName, setEditName] = React.useState("");
  const [editDesc, setEditDesc] = React.useState("");
  const [editPhoto, setEditPhoto] = React.useState("");
  const [editPhotoMode, setEditPhotoMode] = React.useState("url"); // "url" | "upload"
  const [editPhotoPreview, setEditPhotoPreview] = React.useState("");

  const daysOfWeek = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

  // Accounts accessible by current user, sorted alphabetically
  const accessibleAccounts = React.useMemo(() => {
    if (!user) return [];
    return accounts
      .filter(acc =>
        acc.ownerEmail === user.email ||
        (acc.collaborators && acc.collaborators.some(c => c.email === user.email))
      )
      .filter(acc => {
        if (!vaultSearch.trim()) return true;
        const q = vaultSearch.toLowerCase();
        return (acc.name || "").toLowerCase().includes(q) || (acc.description || "").toLowerCase().includes(q);
      })
      .sort((a, b) => (a.name || "").localeCompare((b.name || "")));
  }, [accounts, user, vaultSearch]);

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

  // ── Weekly Schedule State: { Mon: ["accId1", ""], ... } ──────────────────
  const DAYS_KEY = "smh_weekly_day_schedule";

  const [scheduleByDay, setScheduleByDay] = React.useState(() => {
    try {
      const saved = localStorage.getItem(DAYS_KEY);
      if (saved) return JSON.parse(saved);
    } catch(e) {}
    return { Mon: [""], Tue: [""], Wed: [""], Thu: [""], Fri: [""], Sat: [""], Sun: [""] };
  });

  React.useEffect(() => {
    try { localStorage.setItem(DAYS_KEY, JSON.stringify(scheduleByDay)); } catch(e) {}
  }, [scheduleByDay]);

  const addSlotForDay = (day) => {
    setScheduleByDay(prev => ({ ...prev, [day]: [...(prev[day] || []), ""] }));
  };

  const removeSlotForDay = (day, idx) => {
    setScheduleByDay(prev => {
      const slots = (prev[day] || []).filter((_, i) => i !== idx);
      return { ...prev, [day]: slots.length > 0 ? slots : [""] };
    });
  };

  const updateSlotForDay = (day, idx, accId) => {
    setScheduleByDay(prev => {
      const slots = [...(prev[day] || [])];
      slots[idx] = accId;
      return { ...prev, [day]: slots };
    });
  };

  return (
    <div className="page-container">
      {/* ── Header Bar ── */}
      <div className="page-header" style={{ marginBottom: "1.25rem" }}>
        <div>
          <h1 className="page-title" style={{ fontSize: "1.45rem", fontWeight: 800 }}>Account Vault Hub</h1>
          <p className="page-subtitle" style={{ fontSize: "0.82rem" }}>
            Select a brand workspace or assign weekly posting schedules
          </p>
        </div>

        <div style={{ display: "flex", gap: "0.6rem", alignItems: "center", flexWrap: "wrap" }}>
          <input
            type="text"
            className="form-input"
            placeholder="Search vaults..."
            value={vaultSearch}
            onChange={e => setVaultSearch(e.target.value)}
            style={{ width: "180px", minHeight: "34px", padding: "0.35rem 0.75rem", fontSize: "0.8rem" }}
          />
          <button onClick={() => setShowAddModal(true)} className="btn btn-sm btn-primary" style={{ fontWeight: 700 }}>
            <span>➕ New Account Vault</span>
          </button>
        </div>
      </div>

      {/* ── Account Cards Grid ── */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(290px, 1fr))", gap: "1rem", marginBottom: "2rem" }}>
        {accessibleAccounts.map(acc => {
          const role = getUserRole(acc);
          const accContents = contents.filter(c => c.accountId === acc.id);
          const totalViews = accContents.reduce((sum, c) => sum + (c.impressions || 0), 0);
          const totalFollowers = (acc.platforms || []).reduce((sum, p) => sum + (Number(p.followers) || 0), 0);

          return (
            <div
              key={acc.id}
              className="glass-card glass-card-interactive"
              style={{
                cursor: "pointer",
                padding: "1.1rem",
                borderRadius: "14px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                border: "1px solid rgba(255,255,255,0.08)",
                background: "linear-gradient(145deg, rgba(22,30,46,0.9), rgba(13,17,23,0.95))"
              }}
              onClick={() => selectAccount(acc.id)}
            >
              <div>
                {/* Card Top Row: Avatar + Role Badge + Actions */}
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "0.85rem" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
                    {acc.photoURL ? (
                      <img
                        src={acc.photoURL}
                        alt={acc.name}
                        style={{ width: "42px", height: "42px", borderRadius: "10px", objectFit: "cover", border: "2px solid rgba(139, 92, 246, 0.4)" }}
                        onError={e => { e.target.style.display = "none"; }}
                      />
                    ) : (
                      <div style={{
                        width: "42px",
                        height: "42px",
                        borderRadius: "10px",
                        background: "linear-gradient(135deg, rgba(139,92,246,0.3), rgba(6,182,212,0.25))",
                        border: "1px solid rgba(139,92,246,0.4)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        color: "#fff",
                        fontSize: "1.15rem",
                        fontWeight: 800
                      }}>
                        {acc.name ? acc.name.charAt(0).toUpperCase() : "V"}
                      </div>
                    )}

                    <div>
                      <h3 style={{ fontSize: "1.05rem", fontWeight: 700, margin: 0, color: "#fff" }}>{acc.name}</h3>
                      <span className={`badge ${role === 'owner' ? 'badge-uploaded' : (role === 'editor' ? 'badge-scheduled' : 'badge-privated')}`} style={{ fontSize: "0.62rem", marginTop: "2px" }}>
                        {role}
                      </span>
                    </div>
                  </div>

                  {role === 'owner' && (
                    <div style={{ display: "flex", gap: "0.3rem" }}>
                      <button
                        onClick={(e) => openEditModal(e, acc)}
                        className="btn btn-secondary btn-icon"
                        title="Edit Account"
                        style={{ width: "26px", height: "26px", minWidth: "26px", minHeight: "26px", padding: 0, fontSize: "0.75rem" }}
                      >
                        ✏️
                      </button>
                      <button
                        onClick={(e) => { e.stopPropagation(); if (confirm(`Delete account "${acc.name}"?`)) removeAccount(acc.id); }}
                        className="btn btn-danger btn-icon"
                        title="Delete Account"
                        style={{ width: "26px", height: "26px", minWidth: "26px", minHeight: "26px", padding: 0, fontSize: "0.75rem" }}
                      >
                        🗑️
                      </button>
                    </div>
                  )}
                </div>

                <p style={{ fontSize: "0.8rem", color: "var(--text-muted)", marginBottom: "0.85rem", lineHeight: 1.4, minHeight: "2.2em" }}>
                  {acc.description || "Social media workspace"}
                </p>

                {/* Connected Platforms Pill Chips */}
                <div style={{ display: "flex", flexWrap: "wrap", gap: "0.3rem", marginBottom: "0.85rem" }}>
                  {(acc.platforms || []).map(p => (
                    <span key={p.id || p.name} className="chip" style={{ fontSize: "0.7rem", padding: "0.15rem 0.45rem" }}>
                      {p.name}: {p.handle}
                    </span>
                  ))}
                  {(acc.platforms || []).length === 0 && (
                    <span style={{ fontSize: "0.72rem", color: "var(--text-subtle)" }}>No channels linked</span>
                  )}
                </div>
              </div>

              {/* Card Footer Metrics */}
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", paddingTop: "0.75rem", borderTop: "1px solid var(--border-color)", fontSize: "0.78rem", color: "var(--text-muted)" }}>
                <div>👥 <strong>{totalFollowers.toLocaleString()}</strong> aud</div>
                <div>📋 <strong>{accContents.length}</strong> posts</div>
                <div>👀 <strong style={{ color: "var(--accent-cyan-light)" }}>{(totalViews / 1000).toFixed(1)}k</strong> views</div>
              </div>
            </div>
          );
        })}

        {accessibleAccounts.length === 0 && (
          <div className="glass-card" style={{ gridColumn: "1 / -1", textAlign: "center", padding: "2.5rem 1.5rem" }}>
            <h3 style={{ fontSize: "1.1rem", fontWeight: 700 }}>No Accounts Match Your Search</h3>
            <p style={{ color: "var(--text-muted)", fontSize: "0.85rem", margin: "0.4rem 0 1rem" }}>Create a new brand account or clear your filter</p>
            <button onClick={() => setShowAddModal(true)} className="btn btn-primary btn-sm">Create New Vault</button>
          </div>
        )}
      </div>

      {/* ── Global Weekly Schedule Hub ── */}
      <div className="glass-card" style={{ padding: "1.25rem", borderRadius: "14px" }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "1rem", flexWrap: "wrap", gap: "0.5rem" }}>
          <div>
            <h2 style={{ fontSize: "1.15rem", fontWeight: 700, color: "#fff", margin: 0 }}>
              📅 Global Weekly Schedule Board
            </h2>
            <p style={{ fontSize: "0.78rem", color: "var(--text-muted)", margin: "2px 0 0" }}>
              Assign designated accounts & workspaces for each posting day
            </p>
          </div>
        </div>

        {/* 7-Day Columns Grid */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(7, minmax(130px, 1fr))", gap: "0.6rem", overflowX: "auto", paddingBottom: "0.5rem" }}>
          {daysOfWeek.map(day => {
            const slots = scheduleByDay[day] || [""];
            return (
              <div key={day} style={{ background: "rgba(255,255,255,0.02)", border: "1px solid var(--border-color)", borderRadius: "10px", padding: "0.6rem", display: "flex", flexDirection: "column", gap: "0.45rem" }}>
                <div style={{ textAlign: "center", fontWeight: 800, fontSize: "0.8rem", color: "var(--accent-primary-light)", paddingBottom: "0.35rem", borderBottom: "1px solid var(--border-subtle)" }}>
                  {day}
                </div>

                {slots.map((accId, idx) => {
                  const selectedAcc = accounts.find(a => a.id === accId);
                  return (
                    <div key={idx} style={{ display: "flex", alignItems: "center", gap: "0.25rem", background: accId ? "rgba(139,92,246,0.15)" : "rgba(255,255,255,0.03)", border: `1px solid ${accId ? "rgba(139,92,246,0.35)" : "var(--border-color)"}`, borderRadius: "6px", padding: "0.2rem 0.35rem" }}>
                      <select
                        value={accId}
                        onChange={e => updateSlotForDay(day, idx, e.target.value)}
                        style={{ width: "100%", background: "transparent", border: "none", color: accId ? "#fff" : "var(--text-muted)", fontSize: "0.74rem", fontWeight: accId ? 700 : 400, outline: "none", cursor: "pointer" }}
                      >
                        <option value="" style={{ background: "#0F172A", color: "var(--text-muted)" }}>+ Assign...</option>
                        {accounts.map(acc => (
                          <option key={acc.id} value={acc.id} style={{ background: "#0F172A", color: "#fff" }}>
                            {acc.name}
                          </option>
                        ))}
                      </select>
                      {accId && (
                        <button
                          onClick={() => removeSlotForDay(day, idx)}
                          style={{ background: "none", border: "none", color: "var(--text-subtle)", cursor: "pointer", fontSize: "0.75rem", padding: "0 2px" }}
                          title="Clear slot"
                        >
                          ✕
                        </button>
                      )}
                    </div>
                  );
                })}

                <button
                  type="button"
                  onClick={() => addSlotForDay(day)}
                  style={{ width: "100%", padding: "0.2rem", borderRadius: "4px", background: "transparent", border: "1px dashed var(--border-color)", color: "var(--text-subtle)", fontSize: "0.68rem", cursor: "pointer" }}
                >
                  + slot
                </button>
              </div>
            );
          })}
        </div>
      </div>

      {/* ── CREATE ACCOUNT MODAL ── */}
      {showAddModal && (
        <div className="modal-overlay" onClick={() => setShowAddModal(false)}>
          <div className="modal-content" style={{ maxWidth: "440px", width: "90%" }} onClick={e => e.stopPropagation()}>
            <div className="modal-header" style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "1rem" }}>
              <h2 style={{ fontSize: "1.2rem", fontWeight: 700, margin: 0 }}>Create Account Vault</h2>
              <button onClick={() => setShowAddModal(false)} className="btn btn-secondary btn-icon" style={{ width: "28px", height: "28px" }}>✕</button>
            </div>

            <form onSubmit={handleCreate}>
              <div className="form-group" style={{ marginBottom: "0.85rem" }}>
                <label className="form-label">Brand / Account Name</label>
                <input type="text" className="form-input" placeholder="e.g. Nike Football, Tech Daily" required value={accountName} onChange={e => setAccountName(e.target.value)} />
              </div>

              <div className="form-group" style={{ marginBottom: "1.25rem" }}>
                <label className="form-label">Description / Purpose</label>
                <textarea className="form-textarea" rows="2" placeholder="Briefly describe this workspace..." value={accountDesc} onChange={e => setAccountDesc(e.target.value)}></textarea>
              </div>

              <div style={{ display: "flex", justifyContent: "flex-end", gap: "0.6rem" }}>
                <button type="button" onClick={() => setShowAddModal(false)} className="btn btn-secondary">Cancel</button>
                <button type="submit" className="btn btn-primary">Create Vault</button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* ── EDIT ACCOUNT MODAL ── */}
      {editingAcc && (
        <div className="modal-overlay" onClick={() => setEditingAcc(null)}>
          <div className="modal-content" style={{ maxWidth: "480px", width: "90%" }} onClick={e => e.stopPropagation()}>
            <div className="modal-header" style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "1rem" }}>
              <h2 style={{ fontSize: "1.2rem", fontWeight: 700, margin: 0 }}>Edit Account Settings</h2>
              <button onClick={() => setEditingAcc(null)} className="btn btn-secondary btn-icon" style={{ width: "28px", height: "28px" }}>✕</button>
            </div>

            <form onSubmit={handleEditSave}>
              <div className="form-group" style={{ marginBottom: "0.85rem" }}>
                <label className="form-label">Account Name</label>
                <input type="text" className="form-input" required value={editName} onChange={e => setEditName(e.target.value)} />
              </div>

              <div className="form-group" style={{ marginBottom: "0.85rem" }}>
                <label className="form-label">Description</label>
                <textarea className="form-textarea" rows="2" value={editDesc} onChange={e => setEditDesc(e.target.value)}></textarea>
              </div>

              <div className="form-group" style={{ marginBottom: "1.25rem" }}>
                <label className="form-label">Photo / Logo URL</label>
                <input type="text" className="form-input" placeholder="https://..." value={editPhoto} onChange={e => handleEditPhotoUrlChange(e.target.value)} />
              </div>

              <div style={{ display: "flex", justifyContent: "flex-end", gap: "0.6rem" }}>
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
