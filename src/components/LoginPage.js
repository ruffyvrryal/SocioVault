// LoginPage Component - Google Sign-In & Demo Switcher
window.LoginPage = function() {
  const { loginWithGoogle } = React.useContext(window.AuthContext);
  const [emailInput, setEmailInput] = React.useState("");
  const [nameInput, setNameInput] = React.useState("");

  const handleCustomLogin = (e) => {
    e.preventDefault();
    if (!emailInput) return;
    loginWithGoogle(emailInput, nameInput || emailInput.split("@")[0]);
  };

  return (
    <div style={{
      minHeight: "100vh",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      padding: "2rem 1rem"
    }}>
      <div className="glass-card" style={{ maxWidth: "460px", width: "100%", textAlign: "center", padding: "2.5rem 2rem" }}>
        
        {/* Brand Logo & Hero Header */}
        <div style={{
          width: "56px",
          height: "56px",
          borderRadius: "16px",
          background: "linear-gradient(135deg, var(--accent-primary), var(--accent-cyan))",
          display: "flex",
          alignItems: "center",
          justify-content: "center",
          margin: "0 auto 1.25rem",
          boxShadow: "0 10px 25px rgba(139, 92, 246, 0.3)"
        }}>
          <i data-lucide="shield-check" style={{ width: "28px", height: "28px", color: "#fff" }}></i>
        </div>

        <h1 style={{ fontSize: "2rem", fontWeight: 800, marginBottom: "0.5rem" }}>
          Social Vault <span style={{ background: "linear-gradient(135deg, var(--accent-primary), var(--accent-cyan))", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>Pro</span>
        </h1>
        <p style={{ color: "var(--text-muted)", fontSize: "0.95rem", marginBottom: "2rem" }}>
          Secure Multi-Account Vault, Content Tables, Hashtags & Subject Analytics
        </p>

        {/* Google Sign In Button */}
        <button 
          onClick={() => loginWithGoogle("alex.creator@gmail.com", "Alex Rivera")}
          className="btn" 
          style={{
            width: "100%",
            padding: "0.85rem",
            background: "#ffffff",
            color: "#1f2937",
            fontWeight: 600,
            fontSize: "0.95rem",
            borderRadius: "var(--radius-sm)",
            display: "flex",
            alignItems: "center",
            justify-content: "center",
            gap: "0.75rem",
            boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
            cursor: "pointer",
            marginBottom: "1.5rem"
          }}
        >
          <svg width="20" height="20" viewBox="0 0 24 24">
            <path fill="#4285F4" d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.82-2.4 3.68v3.05h3.88c2.27-2.09 3.665-5.17 3.665-9.17z"/>
            <path fill="#34A853" d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.11-6.72-4.96H1.24v3.15C3.26 21.3 7.37 24 12 24z"/>
            <path fill="#FBBC05" d="M5.28 14.24c-.25-.72-.38-1.49-.38-2.24s.13-1.52.38-2.24V6.61H1.24C.45 8.18 0 10.03 0 12s.45 3.82 1.24 5.39l4.04-3.15z"/>
            <path fill="#EA4335" d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.37 0 3.26 2.7 1.24 6.61l4.04 3.15c.95-2.85 3.6-4.96 6.72-4.96z"/>
          </svg>
          Sign in with Google Account
        </button>

        <div style={{ display: "flex", alignItems: "center", margin: "1.5rem 0", color: "var(--text-subtle)", fontSize: "0.85rem" }}>
          <div style={{ flex: 1, height: "1px", background: "var(--border-color)" }}></div>
          <span style={{ padding: "0 0.75rem" }}>OR SIGN IN WITH EMAIL</span>
          <div style={{ flex: 1, height: "1px", background: "var(--border-color)" }}></div>
        </div>

        <form onSubmit={handleCustomLogin}>
          <div className="form-group" style={{ textAlign: "left" }}>
            <label className="form-label">Full Name</label>
            <input 
              type="text" 
              className="form-input" 
              placeholder="e.g. Alex Rivera" 
              value={nameInput}
              onChange={(e) => setNameInput(e.target.value)}
            />
          </div>
          <div className="form-group" style={{ textAlign: "left" }}>
            <label className="form-label">Email Address</label>
            <input 
              type="email" 
              className="form-input" 
              placeholder="alex@example.com" 
              required
              value={emailInput}
              onChange={(e) => setEmailInput(e.target.value)}
            />
          </div>
          <button type="submit" className="btn btn-primary" style={{ width: "100%", padding: "0.75rem", marginTop: "0.5rem" }}>
            Sign In / Register
          </button>
        </form>

        {/* Multi-Role Quick Switcher */}
        <div style={{ marginTop: "2rem", paddingTop: "1.5rem", borderTop: "1px solid var(--border-color)", textAlign: "left" }}>
          <p style={{ fontSize: "0.8rem", color: "var(--text-muted)", fontWeight: 600, marginBottom: "0.75rem", textTransform: "uppercase", letterSpacing: "0.05em" }}>
            ⚡ Fast Demo Sign-In Options:
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
            <button 
              onClick={() => loginWithGoogle("alex.creator@gmail.com", "Alex Rivera (Owner)")}
              className="btn btn-secondary" 
              style={{ justifyContent: "flex-start", fontSize: "0.85rem" }}
            >
              👑 Sign in as <strong>Alex Creator (Vault Owner)</strong>
            </button>
            <button 
              onClick={() => loginWithGoogle("sarah.editor@gmail.com", "Sarah Jenkins (Editor)")}
              className="btn btn-secondary" 
              style={{ justifyContent: "flex-start", fontSize: "0.85rem" }}
            >
              ✏️ Sign in as <strong>Sarah Jenkins (Collaborator Editor)</strong>
            </button>
            <button 
              onClick={() => loginWithGoogle("sponsor.client@gmail.com", "Client Sponsor (Viewer)")}
              className="btn btn-secondary" 
              style={{ justifyContent: "flex-start", fontSize: "0.85rem" }}
            >
              👁️ Sign in as <strong>Sponsor Client (Read-Only Viewer)</strong>
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
