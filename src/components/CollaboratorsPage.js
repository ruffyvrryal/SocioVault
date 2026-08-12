// CollaboratorsPage Component - Share Link & Permission Manager
window.CollaboratorsPage = function() {
  const { user } = React.useContext(window.AuthContext);
  const { 
    activeAccount, 
    addCollaborator, 
    updateCollaboratorRole, 
    removeCollaborator, 
    isOwner 
  } = React.useContext(window.VaultContext);

  const [inviteEmail, setInviteEmail] = React.useState("");
  const [inviteRole, setInviteRole] = React.useState("editor");
  const [copied, setCopied] = React.useState(false);

  if (!activeAccount) {
    return <div className="page-container"><p>No active account selected.</p></div>;
  }

  const shareLink = `${window.location.origin}${window.location.pathname}?vaultToken=${activeAccount.shareToken}`;

  const handleCopyLink = () => {
    navigator.clipboard.writeText(shareLink);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleAddCollab = (e) => {
    e.preventDefault();
    if (!inviteEmail.trim()) return;
    addCollaborator(activeAccount.id, inviteEmail.trim().toLowerCase(), inviteRole);
    setInviteEmail("");
  };

  return (
    <div className="page-container">
      <div className="page-header">
        <div>
          <h1 className="page-title">{activeAccount.name} - Vault Sharing & Collaborators</h1>
          <p className="page-subtitle">Share access with friends, assign Editor or Viewer permissions, and manage collaborator access</p>
        </div>
      </div>

      {!isOwner && (
        <div className="glass-card" style={{ borderLeft: "4px solid var(--accent-cyan)", marginBottom: "1.5rem" }}>
          <p style={{ color: "var(--accent-cyan)", fontWeight: 600 }}>
            🤝 Shared Vault: You are currently accessing this vault as a collaborator. Only the Vault Owner ({activeAccount.ownerEmail}) can add or delete collaborators.
          </p>
        </div>
      )}

      {/* Share Link Generator Box */}
      <div className="glass-card" style={{ marginBottom: "2rem" }}>
        <h3 style={{ fontSize: "1.15rem", fontWeight: 700, marginBottom: "0.5rem" }}>
          🔗 Shareable Vault Link
        </h3>
        <p style={{ color: "var(--text-muted)", fontSize: "0.9rem", marginBottom: "1rem" }}>
          Send this unique link to friends so they can open this vault directly.
        </p>

        <div style={{ display: "flex", gap: "0.75rem" }}>
          <input 
            type="text" 
            className="form-input" 
            readOnly 
            value={shareLink}
            style={{ color: "var(--accent-cyan)", fontWeight: 500 }}
          />
          <button onClick={handleCopyLink} className="btn btn-primary" style={{ whiteSpace: "nowrap" }}>
            <i data-lucide={copied ? "check" : "copy"} style={{ width: "16px", height: "16px" }}></i>
            {copied ? "Link Copied!" : "Copy Link"}
          </button>
        </div>
      </div>

      {/* Invite Collaborator by Email Form */}
      {isOwner && (
        <div className="glass-card" style={{ marginBottom: "2rem" }}>
          <h3 style={{ fontSize: "1.15rem", fontWeight: 700, marginBottom: "1rem" }}>
            ✉️ Invite Friend or Collaborator by Email
          </h3>

          <form onSubmit={handleAddCollab} style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
            <div style={{ flex: 2, minWidth: "240px" }}>
              <input 
                type="email" 
                className="form-input"
                placeholder="friend@gmail.com"
                required
                value={inviteEmail}
                onChange={e => setInviteEmail(e.target.value)}
              />
            </div>

            <div style={{ flex: 1, minWidth: "150px" }}>
              <select className="form-select" value={inviteRole} onChange={e => setInviteRole(e.target.value)}>
                <option value="editor">Editor (Can add, edit & delete content)</option>
                <option value="viewer">Viewer (Read-only access)</option>
              </select>
            </div>

            <button type="submit" className="btn btn-primary">
              Grant Access
            </button>
          </form>
        </div>
      )}

      {/* Current Collaborators Table */}
      <h3 style={{ fontSize: "1.25rem", fontWeight: 700, marginBottom: "1rem" }}>
        Active Vault Members & Rules ({activeAccount.collaborators.length + 1})
      </h3>

      <div className="table-container">
        <table className="custom-table">
          <thead>
            <tr>
              <th>Collaborator Email</th>
              <th>Role / Permission</th>
              <th>Joined Date</th>
              {isOwner && <th>Manage Rules</th>}
            </tr>
          </thead>
          <tbody>
            {/* Owner Row */}
            <tr>
              <td>
                <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", fontWeight: 600 }}>
                  👑 {activeAccount.ownerEmail}
                  <span style={{ fontSize: "0.75rem", color: "var(--accent-emerald)" }}>(Vault Owner)</span>
                </div>
              </td>
              <td>
                <span className="badge badge-uploaded">Owner (Full Control)</span>
              </td>
              <td style={{ color: "var(--text-muted)" }}>Primary Owner</td>
              {isOwner && <td>-</td>}
            </tr>

            {/* Collaborators Rows */}
            {activeAccount.collaborators.map(collab => (
              <tr key={collab.email}>
                <td style={{ fontWeight: 500 }}>
                  👤 {collab.email}
                </td>
                <td>
                  {isOwner ? (
                    <select 
                      className="form-select"
                      style={{ padding: "0.3rem 0.6rem", fontSize: "0.82rem", width: "auto" }}
                      value={collab.role}
                      onChange={e => updateCollaboratorRole(activeAccount.id, collab.email, e.target.value)}
                    >
                      <option value="editor">Editor (Full Edit)</option>
                      <option value="viewer">Viewer (Read-Only)</option>
                    </select>
                  ) : (
                    <span className={`badge ${collab.role === 'editor' ? 'badge-scheduled' : 'badge-privated'}`}>
                      {collab.role}
                    </span>
                  )}
                </td>
                <td style={{ color: "var(--text-muted)" }}>{collab.joinedAt || "Recent"}</td>
                {isOwner && (
                  <td>
                    <button 
                      onClick={() => {
                        if (confirm(`Remove collaborator ${collab.email} from this vault?`)) {
                          removeCollaborator(activeAccount.id, collab.email);
                        }
                      }}
                      className="btn btn-danger btn-icon"
                      title="Remove Collaborator"
                    >
                      <i data-lucide="user-x" style={{ width: "16px", height: "16px" }}></i>
                    </button>
                  </td>
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
