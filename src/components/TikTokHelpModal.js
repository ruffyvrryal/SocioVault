// TikTokHelpModal Component — Comprehensive Interactive Guide & Tutorial for TikTok API & Real-Time Sync
window.TikTokHelpModal = function({ isOpen, onClose }) {
  const [activeTab, setActiveTab] = React.useState("quickstart");
  const [copiedUrl, setCopiedUrl] = React.useState("");

  if (!isOpen) return null;

  const sampleUrls = [
    { label: "Standard Video Link", url: "https://www.tiktok.com/@tiktok/video/7106594312292453678" },
    { label: "Mobile App Share Link", url: "https://vt.tiktok.com/ZS8NV2mY8/" },
    { label: "Direct Video ID", url: "7106594312292453678" }
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
                Master automated post imports, metrics extraction, and real-time live performance tracking
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
        <div style={{ display: "flex", gap: "0.5rem", borderBottom: "1px solid var(--border-color)", paddingBottom: "0.75rem", marginBottom: "1.25rem" }}>
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
            ⚡ Quick Start (3 Steps)
          </button>
          <button
            onClick={() => setActiveTab("realtimesync")}
            className="btn btn-sm"
            style={{
              background: activeTab === "realtimesync" ? "linear-gradient(135deg, rgba(16,185,129,0.2), rgba(6,182,212,0.2))" : "transparent",
              borderColor: activeTab === "realtimesync" ? "var(--accent-emerald)" : "var(--border-color)",
              color: activeTab === "realtimesync" ? "#fff" : "var(--text-muted)",
              fontWeight: 700
            }}
          >
            🔄 Real-Time Live Sync
          </button>
          <button
            onClick={() => setActiveTab("fields")}
            className="btn btn-sm"
            style={{
              background: activeTab === "fields" ? "linear-gradient(135deg, rgba(139,92,246,0.2), rgba(217,70,239,0.2))" : "transparent",
              borderColor: activeTab === "fields" ? "var(--accent-primary)" : "var(--border-color)",
              color: activeTab === "fields" ? "#fff" : "var(--text-muted)",
              fontWeight: 700
            }}
          >
            📊 Data Extracted
          </button>
          <button
            onClick={() => setActiveTab("faq")}
            className="btn btn-sm"
            style={{
              background: activeTab === "faq" ? "rgba(255,255,255,0.1)" : "transparent",
              borderColor: activeTab === "faq" ? "var(--border-hover)" : "var(--border-color)",
              color: activeTab === "faq" ? "#fff" : "var(--text-muted)",
              fontWeight: 700
            }}
          >
            💡 Pro Tips & FAQ
          </button>
        </div>

        {/* TAB 1: QUICK START */}
        {activeTab === "quickstart" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "1rem" }}>
              {/* Step 1 */}
              <div className="glass-card" style={{ padding: "1.1rem", background: "rgba(255,255,255,0.03)", borderRadius: "12px", border: "1px solid var(--border-color)" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "0.6rem" }}>
                  <span style={{ width: "24px", height: "24px", borderRadius: "50%", background: "#25F4EE", color: "#000", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 800, fontSize: "0.8rem" }}>1</span>
                  <h4 style={{ margin: 0, fontSize: "0.95rem", fontWeight: 700 }}>Copy TikTok Link</h4>
                </div>
                <p style={{ fontSize: "0.82rem", color: "var(--text-muted)", lineHeight: 1.5, margin: 0 }}>
                  Open TikTok on mobile or desktop, click <strong>Share</strong>, and select <strong>Copy Link</strong>.
                </p>
              </div>

              {/* Step 2 */}
              <div className="glass-card" style={{ padding: "1.1rem", background: "rgba(255,255,255,0.03)", borderRadius: "12px", border: "1px solid var(--border-color)" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "0.6rem" }}>
                  <span style={{ width: "24px", height: "24px", borderRadius: "50%", background: "#FE2C55", color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 800, fontSize: "0.8rem" }}>2</span>
                  <h4 style={{ margin: 0, fontSize: "0.95rem", fontWeight: 700 }}>Paste & Auto-Fill</h4>
                </div>
                <p style={{ fontSize: "0.82rem", color: "var(--text-muted)", lineHeight: 1.5, margin: 0 }}>
                  Paste the URL in the <strong>TikTok API Panel</strong> on <em>Add Content</em> or <em>Content Table</em> and click <strong>Auto-Fill</strong>.
                </p>
              </div>

              {/* Step 3 */}
              <div className="glass-card" style={{ padding: "1.1rem", background: "rgba(255,255,255,0.03)", borderRadius: "12px", border: "1px solid var(--border-color)" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "0.6rem" }}>
                  <span style={{ width: "24px", height: "24px", borderRadius: "50%", background: "var(--accent-emerald)", color: "#000", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 800, fontSize: "0.8rem" }}>3</span>
                  <h4 style={{ margin: 0, fontSize: "0.95rem", fontWeight: 700 }}>Save & Live Track</h4>
                </div>
                <p style={{ fontSize: "0.82rem", color: "var(--text-muted)", lineHeight: 1.5, margin: 0 }}>
                  Review the auto-filled fields and click <strong>Save</strong>. You can now track and live-sync stats anytime!
                </p>
              </div>
            </div>

            {/* Test Copy Links */}
            <div style={{ marginTop: "0.5rem", padding: "1rem", borderRadius: "10px", background: "rgba(37,244,238,0.06)", border: "1px solid rgba(37,244,238,0.2)" }}>
              <div style={{ fontSize: "0.85rem", fontWeight: 700, color: "#25F4EE", marginBottom: "0.6rem" }}>
                🧪 Try with Example TikTok Links (Click to copy & test):
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                {sampleUrls.map((item, idx) => (
                  <div key={idx} style={{ display: "flex", alignItems: "center", justifyContent: "space-between", background: "rgba(0,0,0,0.3)", padding: "0.5rem 0.75rem", borderRadius: "6px", fontSize: "0.8rem" }}>
                    <div style={{ overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap", marginRight: "1rem" }}>
                      <span style={{ color: "var(--text-muted)", marginRight: "0.5rem" }}>[{item.label}]</span>
                      <code style={{ color: "#fff" }}>{item.url}</code>
                    </div>
                    <button
                      type="button"
                      onClick={() => handleCopy(item.url)}
                      className="btn btn-sm"
                      style={{ padding: "0.2rem 0.6rem", fontSize: "0.75rem", minWidth: "75px" }}
                    >
                      {copiedUrl === item.url ? "✅ Copied!" : "📋 Copy"}
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* TAB 2: REAL-TIME LIVE SYNC */}
        {activeTab === "realtimesync" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            <div style={{ padding: "1.2rem", borderRadius: "12px", background: "linear-gradient(135deg, rgba(16,185,129,0.1), rgba(6,182,212,0.1))", border: "1px solid rgba(16,185,129,0.3)" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "0.6rem", marginBottom: "0.5rem" }}>
                <span style={{ fontSize: "1.2rem" }}>⚡</span>
                <h4 style={{ margin: 0, fontSize: "1.05rem", fontWeight: 800, color: "#10B981" }}>
                  How Real-Time Live Sync Works
                </h4>
              </div>
              <p style={{ fontSize: "0.86rem", color: "var(--text-normal)", lineHeight: 1.6, margin: 0 }}>
                When you add TikTok posts via the TikTok API, SociaVault stores the original video reference. This unlocks <strong>1-click live metrics refreshing</strong> directly from TikTok’s public data network without having to re-type impressions, views, likes, or comments!
              </p>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
              <div className="glass-card" style={{ padding: "1rem", borderRadius: "10px" }}>
                <div style={{ fontWeight: 700, fontSize: "0.92rem", marginBottom: "0.4rem", color: "#25F4EE" }}>
                  🔄 Bulk Sync All TikTok Posts
                </div>
                <p style={{ fontSize: "0.82rem", color: "var(--text-muted)", lineHeight: 1.5, margin: 0 }}>
                  On the <strong>Content Table</strong> page, click the <strong>"🔄 Sync Live TikTok"</strong> button in the top toolbar to automatically query and refresh all TikTok posts in your active account in one go.
                </p>
              </div>

              <div className="glass-card" style={{ padding: "1rem", borderRadius: "10px" }}>
                <div style={{ fontWeight: 700, fontSize: "0.92rem", marginBottom: "0.4rem", color: "#F43F5E" }}>
                  🎯 Single-Post Instant Refresh
                </div>
                <p style={{ fontSize: "0.82rem", color: "var(--text-muted)", lineHeight: 1.5, margin: 0 }}>
                  In the Content Table, any row that came from TikTok has a quick <strong>🔄 Sync</strong> button next to Edit/Delete. Click it anytime to update just that video’s latest stats.
                </p>
              </div>
            </div>

            <div style={{ padding: "0.85rem 1rem", borderRadius: "8px", background: "rgba(245,158,11,0.1)", border: "1px solid rgba(245,158,11,0.3)", fontSize: "0.82rem", color: "#F59E0B" }}>
              💡 <strong>Instant Reversibility:</strong> All live sync actions are recorded in the Global Undo history! If you ever want to revert back to your previous metrics, press <strong>Ctrl+Z</strong> or click <strong>Undo</strong> in the top navbar.
            </div>
          </div>
        )}

        {/* TAB 3: DATA EXTRACTED */}
        {activeTab === "fields" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "0.85rem" }}>
            <p style={{ fontSize: "0.85rem", color: "var(--text-muted)", margin: 0 }}>
              The TikTok API extracts and maps the following data points automatically into SociaVault:
            </p>

            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0.75rem" }}>
              <div style={{ display: "flex", alignItems: "flex-start", gap: "0.6rem", padding: "0.75rem", background: "rgba(255,255,255,0.03)", borderRadius: "8px", border: "1px solid var(--border-color)" }}>
                <span style={{ fontSize: "1.1rem" }}>🎬</span>
                <div>
                  <div style={{ fontWeight: 700, fontSize: "0.85rem" }}>Caption & Text</div>
                  <div style={{ fontSize: "0.78rem", color: "var(--text-muted)" }}>Cleans hashtags and extracts full post text description</div>
                </div>
              </div>

              <div style={{ display: "flex", alignItems: "flex-start", gap: "0.6rem", padding: "0.75rem", background: "rgba(255,255,255,0.03)", borderRadius: "8px", border: "1px solid var(--border-color)" }}>
                <span style={{ fontSize: "1.1rem" }}>🏷️</span>
                <div>
                  <div style={{ fontWeight: 700, fontSize: "0.85rem" }}>Hashtags List</div>
                  <div style={{ fontSize: "0.78rem", color: "var(--text-muted)" }}>Parses all #tags into individual interactive hashtag tags</div>
                </div>
              </div>

              <div style={{ display: "flex", alignItems: "flex-start", gap: "0.6rem", padding: "0.75rem", background: "rgba(255,255,255,0.03)", borderRadius: "8px", border: "1px solid var(--border-color)" }}>
                <span style={{ fontSize: "1.1rem" }}>👤</span>
                <div>
                  <div style={{ fontWeight: 700, fontSize: "0.85rem" }}>Creator / Subject</div>
                  <div style={{ fontSize: "0.78rem", color: "var(--text-muted)" }}>Maps the video author handle into the Subjects module</div>
                </div>
              </div>

              <div style={{ display: "flex", alignItems: "flex-start", gap: "0.6rem", padding: "0.75rem", background: "rgba(255,255,255,0.03)", borderRadius: "8px", border: "1px solid var(--border-color)" }}>
                <span style={{ fontSize: "1.1rem" }}>📈</span>
                <div>
                  <div style={{ fontWeight: 700, fontSize: "0.85rem" }}>Live Views & Reach</div>
                  <div style={{ fontSize: "0.78rem", color: "var(--text-muted)" }}>Extracts current view impressions and estimated audience reach</div>
                </div>
              </div>

              <div style={{ display: "flex", alignItems: "flex-start", gap: "0.6rem", padding: "0.75rem", background: "rgba(255,255,255,0.03)", borderRadius: "8px", border: "1px solid var(--border-color)" }}>
                <span style={{ fontSize: "1.1rem" }}>❤️</span>
                <div>
                  <div style={{ fontWeight: 700, fontSize: "0.85rem" }}>Engagement (Likes, Comments, Shares, Saves)</div>
                  <div style={{ fontSize: "0.78rem", color: "var(--text-muted)" }}>Full 4-tier engagement metrics for precise ER calculation</div>
                </div>
              </div>

              <div style={{ display: "flex", alignItems: "flex-start", gap: "0.6rem", padding: "0.75rem", background: "rgba(255,255,255,0.03)", borderRadius: "8px", border: "1px solid var(--border-color)" }}>
                <span style={{ fontSize: "1.1rem" }}>🖼️</span>
                <div>
                  <div style={{ fontWeight: 700, fontSize: "0.85rem" }}>HD Video Thumbnail</div>
                  <div style={{ fontSize: "0.78rem", color: "var(--text-muted)" }}>High-res cover art thumbnail for visual logs & reports</div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* TAB 4: FAQ & PRO TIPS */}
        {activeTab === "faq" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "0.85rem" }}>
            <div className="glass-card" style={{ padding: "0.9rem 1.1rem", borderRadius: "10px" }}>
              <div style={{ fontWeight: 700, fontSize: "0.88rem", marginBottom: "0.3rem", color: "#fff" }}>
                Q: Can I edit the numbers after auto-importing?
              </div>
              <p style={{ fontSize: "0.8rem", color: "var(--text-muted)", margin: 0, lineHeight: 1.5 }}>
                <strong>Yes!</strong> All imported values (caption, hashtags, impressions, status, dates) are fully editable before submitting and anytime via the Edit modal in the Content Table.
              </p>
            </div>

            <div className="glass-card" style={{ padding: "0.9rem 1.1rem", borderRadius: "10px" }}>
              <div style={{ fontWeight: 700, fontSize: "0.88rem", marginBottom: "0.3rem", color: "#fff" }}>
                Q: Does it work with Private TikTok accounts or videos?
              </div>
              <p style={{ fontSize: "0.8rem", color: "var(--text-muted)", margin: 0, lineHeight: 1.5 }}>
                No, TikTok’s public API requires videos to be public. Private videos or friends-only videos cannot be fetched automatically.
              </p>
            </div>

            <div className="glass-card" style={{ padding: "0.9rem 1.1rem", borderRadius: "10px" }}>
              <div style={{ fontWeight: 700, fontSize: "0.88rem", marginBottom: "0.3rem", color: "#fff" }}>
                Q: How does the Global Undo button work?
              </div>
              <p style={{ fontSize: "0.8rem", color: "var(--text-muted)", margin: 0, lineHeight: 1.5 }}>
                The <strong>↩️ Undo</strong> button in the top navbar remembers up to 30 recent actions (adding, updating, deleting, bulk clearing, and live syncing). You can click it anytime or press <strong>Ctrl+Z</strong> on your keyboard to instantly roll back!
              </p>
            </div>
          </div>
        )}

        {/* Modal Footer */}
        <div style={{ display: "flex", justifyContent: "flex-end", marginTop: "1.5rem", paddingTop: "1rem", borderTop: "1px solid var(--border-color)" }}>
          <button type="button" onClick={onClose} className="btn btn-primary" style={{ minWidth: "120px" }}>
            Got It! Close Guide
          </button>
        </div>
      </div>
    </div>
  );
};
