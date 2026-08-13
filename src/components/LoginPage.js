// LoginPage Component — Premium Sign-In with Demo Switcher
window.LoginPage = function() {
  const { loginWithGoogle } = React.useContext(window.AuthContext);
  const [emailInput, setEmailInput] = React.useState("");
  const [nameInput,  setNameInput]  = React.useState("");

  const handleCustomLogin = (e) => {
    e.preventDefault();
    if (!emailInput.trim()) return;
    loginWithGoogle(emailInput.trim(), nameInput.trim() || emailInput.split("@")[0]);
  };

  return (
    <div className="login-wrapper">
      <div className="login-card glass-card" style={{ padding: "2.5rem 2rem" }}>

        {/* Brand Icon */}
        <div className="login-brand-icon">
          <i data-lucide="layers" style={{ width: "28px", height: "28px", color: "#fff" }}></i>
        </div>

        {/* Title */}
        <h1 className="login-title">
          Socio<span style={{
            background: "var(--gradient-primary)",
            WebkitBackgroundClip: "text",
            backgroundClip: "text",
            WebkitTextFillColor: "transparent"
          }}>Vault</span>
        </h1>
        <p className="login-subtitle">
          Your premium multi-account social media command centre —<br />
          content vault, analytics, hashtag studio &amp; reports.
        </p>

        {/* Google Sign In */}
        <button
          className="btn btn-google"
          style={{ display: "flex", alignItems: "center", justifyContent: "center" }}
          onClick={() => loginWithGoogle("alex.creator@gmail.com", "Alex Rivera")}
        >
          <svg width="18" height="18" viewBox="0 0 24 24" style={{ flexShrink: 0 }}>
            <path fill="#4285F4" d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.82-2.4 3.68v3.05h3.88c2.27-2.09 3.665-5.17 3.665-9.17z"/>
            <path fill="#34A853" d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.11-6.72-4.96H1.24v3.15C3.26 21.3 7.37 24 12 24z"/>
            <path fill="#FBBC05" d="M5.28 14.24c-.25-.72-.38-1.49-.38-2.24s.13-1.52.38-2.24V6.61H1.24C.45 8.18 0 10.03 0 12s.45 3.82 1.24 5.39l4.04-3.15z"/>
            <path fill="#EA4335" d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.37 0 3.26 2.7 1.24 6.61l4.04 3.15c.95-2.85 3.6-4.96 6.72-4.96z"/>
          </svg>
          Continue with Google
        </button>

        {/* Divider */}
        <div className="login-divider">or sign in with email</div>

        {/* Email Form */}
        <form onSubmit={handleCustomLogin}>
          <div className="form-group" style={{ marginBottom: "1rem" }}>
            <label className="form-label">Full Name</label>
            <input
              type="text"
              className="form-input"
              placeholder="Alex Rivera"
              value={nameInput}
              onChange={e => setNameInput(e.target.value)}
            />
          </div>
          <div className="form-group" style={{ marginBottom: "1.25rem" }}>
            <label className="form-label">Email Address</label>
            <input
              type="email"
              className="form-input"
              placeholder="alex@example.com"
              required
              value={emailInput}
              onChange={e => setEmailInput(e.target.value)}
            />
          </div>
          <button type="submit" className="btn btn-primary" style={{ width: "100%", minHeight: "46px" }}>
            <i data-lucide="log-in" style={{ width: "16px", height: "16px" }}></i>
            Sign In / Register
          </button>
        </form>

        {/* Demo Quick-Login */}
        <div className="demo-section">
          <p className="demo-section-label">⚡ Demo Quick Sign-In</p>
          <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>

            <button
              onClick={() => loginWithGoogle("alex.creator@gmail.com", "Alex Rivera")}
              className="btn btn-secondary"
              style={{ justifyContent: "flex-start", gap: "0.65rem", fontSize: "0.84rem" }}
            >
              <span style={{
                width: "24px", height: "24px", borderRadius: "6px",
                background: "linear-gradient(135deg, #10B981, #06B6D4)",
                display: "inline-flex", alignItems: "center", justifyContent: "center",
                fontSize: "0.72rem", fontWeight: 800, color: "#fff", flexShrink: 0
              }}>O</span>
              <span><strong>Alex Rivera</strong> — Vault Owner</span>
            </button>

            <button
              onClick={() => loginWithGoogle("sarah.editor@gmail.com", "Sarah Jenkins")}
              className="btn btn-secondary"
              style={{ justifyContent: "flex-start", gap: "0.65rem", fontSize: "0.84rem" }}
            >
              <span style={{
                width: "24px", height: "24px", borderRadius: "6px",
                background: "linear-gradient(135deg, #06B6D4, #6366F1)",
                display: "inline-flex", alignItems: "center", justifyContent: "center",
                fontSize: "0.72rem", fontWeight: 800, color: "#fff", flexShrink: 0
              }}>E</span>
              <span><strong>Sarah Jenkins</strong> — Collaborator Editor</span>
            </button>

            <button
              onClick={() => loginWithGoogle("sponsor.client@gmail.com", "Sponsor Client")}
              className="btn btn-secondary"
              style={{ justifyContent: "flex-start", gap: "0.65rem", fontSize: "0.84rem" }}
            >
              <span style={{
                width: "24px", height: "24px", borderRadius: "6px",
                background: "linear-gradient(135deg, #F59E0B, #F97316)",
                display: "inline-flex", alignItems: "center", justifyContent: "center",
                fontSize: "0.72rem", fontWeight: 800, color: "#fff", flexShrink: 0
              }}>V</span>
              <span><strong>Sponsor Client</strong> — Read-Only Viewer</span>
            </button>

          </div>
        </div>

      </div>
    </div>
  );
};
