// TikTokHelpModal Component — Comprehensive Interactive Guide & Tutorial for TikTok Account & Video Auto-Sync
window.TikTokHelpModal = function({ isOpen, onClose }) {
  const [activeTab, setActiveTab] = React.useState("accountsync");
  const [copiedUrl, setCopiedUrl] = React.useState("");

  if (!isOpen) return null;

  const sampleUrls = [
    { label: "Account Profile Link", url: "https://www.tiktok.com/@tiktok" },
    { label: "Account Username Handle", url: "@charlidamelio" },
    { label: "Standard Video Link", url: "https://www.tiktok.com/@tiktok/video/7106594312292453678" },
    { label: "Mobile App Share Link", url: "https://vt.tiktok.com/ZS8NV2mY8/" }
  ];

  const handleCopy = (text) => {
    navigator.clipboard.writeText(text);
    setCopiedUrl(text);
    setTimeout(() => setCopiedUrl(""), 2500);
  };

  return (
    <div className="modal-overlay" onClick={onClose} style={{ zIndex: 10000 }}>
      <div 
        className="modal-content" 
        style={{ maxWidth: "780px", width: "92%", maxHeight: "90vh", overflowY: "auto", padding: "1.75rem" }} 
        onClick={e => e.stopPropagation()}
      >
        {/* Header */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "1.25rem" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
            <div style={{
              width: "42px",
              height: "42px",
              borderRadius: "12px",
              background: "linear-gradient(135deg, #25F4EE, #FE2C55)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "1.3rem",
              boxShadow: "0 4px 15px rgba(37,244,238,0.3)"
            }}>
              🎵
            </div>
            <div>
              <h2 style={{ fontSize: "1.35rem", fontWeight: 800, margin: 0, color: "#fff" }}>
                TikTok API & Real-Time Sync Guide
              </h2>
              <p style={{ margin: 0, fontSize: "0.82rem", color: "var(--text-muted)", marginTop: "2px" }}>
                Auto-read entire account feeds, profile followers & single video metrics with zero manual entry
              </p>
            </div>
          </div>

          <button 
            type="button" 
            onClick={onClose} 
            className="btn btn-secondary btn-icon"
            style={{ width: "32px", height: "32px", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center" }}
            title="Close Guide"
          >
            ✕
          </button>
        </div>

        {/* Tab Navigation */}
        <div style={{ display: "flex", gap: "0.5rem", borderBottom: "1px solid var(--border-color)", paddingBottom: "0.75rem", marginBottom: "1.25rem", overflowX: "auto" }}>
          <button
            onClick={() => setActiveTab("accountsync")}
            className="btn btn-sm"
            style={{
              background: activeTab === "accountsync" ? "linear-gradient(135deg, rgba(37,244,238,0.2), rgba(254,44,85,0.2))" : "transparent",
              borderColor: activeTab === "accountsync" ? "#25F4EE" : "var(--border-color)",
              color: activeTab === "accountsync" ? "#fff" : "var(--text-muted)",
              fontWeight: 700
            }}
          >
            🌐 Entire Account Auto-Sync
          </button>
          <button
            onClick={() => setActiveTab("quickstart")}
            className="btn btn-sm"
            style={{
              background: activeTab === "quickstart" ? "linear-gradient(135deg, rgba(37,244,238,0.2), rgba(254,44,85,0.2))" : "transparent",
              borderColor: activeTab === "quickstart" ? "#25F4EE" : "var(--border-color)",
              color: activeTab === "quickstart" ? "#fff" : "var(--text-muted)",
              fontWeight: 700
            }}
          >
            ⚡ Single Video Extraction
          </button>
          <button
            onClick={() => setActiveTab("realtimesync")}
            className="btn btn-sm"
            style={{
              background: activeTab === "realtimesync" ? "linear-gradient(135deg, rgba(16,185,129,0.2), rgba(6,182,212,0.2))" : "transparent",
              borderColor: activeTab === "realtimesync" ? "#10B981" : "var(--border-color)",
              color: activeTab === "realtimesync" ? "#fff" : "var(--text-muted)",
              fontWeight: 700
            }}
          >
            🔄 Live Real-Time Updating
          </button>
          <button
            onClick={() => setActiveTab("faq")}
            className="btn btn-sm"
            style={{
              background: activeTab === "faq" ? "rgba(139, 92, 246, 0.2)" : "transparent",
              borderColor: activeTab === "faq" ? "var(--accent-primary)" : "var(--border-color)",
              color: activeTab === "faq" ? "#fff" : "var(--text-muted)",
              fontWeight: 700
            }}
          >
            💡 FAQ & Tips
          </button>
        </div>

        {/* TAB 1: Entire Account Auto-Sync */}
        {activeTab === "accountsync" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
            <div style={{ padding: "1.1rem", borderRadius: "12px", background: "linear-gradient(135deg, rgba(37,244,238,0.08), rgba(254,44,85,0.08))", border: "1px solid rgba(37,244,238,0.25)" }}>
              <h3 style={{ fontSize: "1.05rem", fontWeight: 700, margin: "0 0 0.5rem", color: "#fff" }}>
                🚀 1-Click Zero-Manual Entry: Auto-Sync Your Whole Account
              </h3>
              <p style={{ fontSize: "0.85rem", color: "var(--text-secondary)", lineHeight: 1.6, margin: 0 }}>
                You don't need to manually type post metrics or copy individual links one by one. Simply provide your TikTok account link (e.g. <code>https://www.tiktok.com/@yourbrand</code> or <code>@yourbrand</code>) and SociaVault will:
              </p>
              <ul style={{ fontSize: "0.82rem", color: "var(--text-secondary)", marginTop: "0.6rem", marginLeft: "1.25rem", lineHeight: 1.7 }}>
                <li>Auto-read your live <strong>Follower count, Display name & HD Avatar</strong>.</li>
                <li>Fetch and import <strong>all recent video posts</strong> directly into your Content Table.</li>
                <li>Extract live <strong>Views, Likes, Comments, Shares, Saves, Captions & Hashtags</strong> for each video in real time.</li>
              </ul>
            </div>

            <h4 style={{ fontSize: "0.95rem", fontWeight: 700, color: "#fff", margin: 0 }}>
              📋 Copy & Test with Sample Profile Links:
            </h4>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
              {sampleUrls.slice(0, 2).map((item, idx) => (
                <div 
                  key={idx} 
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    padding: "0.65rem 0.85rem",
                    borderRadius: "8px",
                    background: "rgba(255,255,255,0.03)",
                    border: "1px solid var(--border-color)",
                    fontSize: "0.82rem"
                  }}
                >
                  <div>
                    <span style={{ fontWeight: 600, color: "#fff", marginRight: "0.5rem" }}>{item.label}:</span>
                    <code style={{ color: "var(--accent-cyan-light)" }}>{item.url}</code>
                  </div>
                  <button
                    type="button"
                    onClick={() => handleCopy(item.url)}
                    className="btn btn-sm btn-ghost"
                    style={{ padding: "0.2rem 0.6rem", fontSize: "0.75rem", color: copiedUrl === item.url ? "var(--accent-emerald)" : "var(--accent-primary-light)" }}
                  >
                    {copiedUrl === item.url ? "✅ Copied!" : "📋 Copy"}
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB 2: Single Video Quick Start */}
        {activeTab === "quickstart" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "0.85rem" }}>
              <div className="glass-card" style={{ padding: "1rem", borderRadius: "10px" }}>
                <div style={{ fontSize: "1.4rem", marginBottom: "0.35rem" }}>1️⃣</div>
                <div style={{ fontWeight: 700, fontSize: "0.9rem", color: "#fff", marginBottom: "0.2rem" }}>Copy Video Link</div>
                <div style={{ fontSize: "0.78rem", color: "var(--text-muted)" }}>Copy any public TikTok link from the app or browser.</div>
              </div>
              <div className="glass-card" style={{ padding: "1rem", borderRadius: "10px" }}>
                <div style={{ fontSize: "1.4rem", marginBottom: "0.35rem" }}>2️⃣</div>
                <div style={{ fontWeight: 700, fontSize: "0.9rem", color: "#fff", marginBottom: "0.2rem" }}>Paste & Auto-Fill</div>
                <div style={{ fontSize: "0.78rem", color: "var(--text-muted)" }}>Paste into Add Content or Table and click ⚡ Auto-Fill.</div>
              </div>
              <div className="glass-card" style={{ padding: "1rem", borderRadius: "10px" }}>
                <div style={{ fontSize: "1.4rem", marginBottom: "0.35rem" }}>3️⃣</div>
                <div style={{ fontWeight: 700, fontSize: "0.9rem", color: "#fff", marginBottom: "0.2rem" }}>Save & Sync Live</div>
                <div style={{ fontSize: "0.78rem", color: "var(--text-muted)" }}>All numbers auto-populate. Keep updated anytime with Live Sync!</div>
              </div>
            </div>
          </div>
        )}

        {/* TAB 3: Real-Time Live Sync */}
        {activeTab === "realtimesync" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem", fontSize: "0.85rem", color: "var(--text-secondary)", lineHeight: 1.6 }}>
            <div style={{ padding: "1rem", borderRadius: "10px", background: "rgba(16,185,129,0.1)", border: "1px solid rgba(16,185,129,0.3)" }}>
              <h4 style={{ margin: "0 0 0.4rem", color: "#10B981", fontSize: "0.95rem" }}>🔄 How Real-Time Live Sync Keeps Data Fresh</h4>
              <p style={{ margin: 0, fontSize: "0.82rem" }}>
                Social media posts gain views and comments continuously after uploading. SociaVault provides two real-time sync mechanisms:
              </p>
              <ul style={{ marginTop: "0.5rem", marginLeft: "1.2rem", fontSize: "0.8rem", lineHeight: 1.6 }}>
                <li><strong>Bulk Channel Live Sync (🔄 Sync Live TikTok):</strong> Located on the Overview and Table page. In 1 click, queries TikTok API and updates metrics for all posts simultaneously.</li>
                <li><strong>Per-Row Instant Refresh (🔄):</strong> Located next to each TikTok post in the table actions column to refresh just that specific video.</li>
              </ul>
            </div>
          </div>
        )}

        {/* TAB 4: FAQ */}
        {activeTab === "faq" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "0.85rem" }}>
            <div className="glass-card" style={{ padding: "0.85rem 1rem", borderRadius: "10px" }}>
              <div style={{ fontWeight: 700, color: "#fff", fontSize: "0.85rem", marginBottom: "0.2rem" }}>Does this require logging in with my TikTok password?</div>
              <div style={{ fontSize: "0.78rem", color: "var(--text-muted)" }}>No! SociaVault uses public creator API endpoints, so you only need to provide your public @username or profile URL without sharing passwords or login credentials.</div>
            </div>
            <div className="glass-card" style={{ padding: "0.85rem 1rem", borderRadius: "10px" }}>
              <div style={{ fontWeight: 700, color: "#fff", fontSize: "0.85rem", marginBottom: "0.2rem" }}>Can I undo an auto-sync?</div>
              <div style={{ fontSize: "0.78rem", color: "var(--text-muted)" }}>Yes! Every sync is recorded in the Undo history. You can click <strong>↩️ Undo</strong> or press <kbd>Ctrl+Z</kbd> anytime to rollback changes.</div>
            </div>
          </div>
        )}

        {/* Footer */}
        <div style={{ display: "flex", justifyContent: "flex-end", marginTop: "1.5rem" }}>
          <button type="button" onClick={onClose} className="btn btn-primary btn-sm">
            Got It! Close Guide
          </button>
        </div>
      </div>
    </div>
  );
};
