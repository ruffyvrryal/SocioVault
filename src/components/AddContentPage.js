// AddContentPage Component - Dedicated page for logging content entries with TikTok API Auto-Input & Real-Time Sync
window.AddContentPage = function() {
  const { activeAccount, addContent, canEdit, setActivePage, fetchTikTokData } = React.useContext(window.VaultContext);

  const [uploadDate, setUploadDate] = React.useState(() => new Date().toISOString().split("T")[0]);
  const [uploadTime, setUploadTime] = React.useState(() => {
    const now = new Date();
    return `${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')}`;
  });
  const [platform, setPlatform] = React.useState(() => activeAccount?.platforms?.[0]?.name || "Instagram");
  const [caption, setCaption] = React.useState("");
  const [hashtagsInput, setHashtagsInput] = React.useState("");
  const [subjectInput, setSubjectInput] = React.useState("");
  const [subjectsList, setSubjectsList] = React.useState([]);
  const [impressions, setImpressions] = React.useState("");
  const [reach, setReach] = React.useState("");
  const [likes, setLikes] = React.useState("");
  const [comments, setComments] = React.useState("");
  const [shares, setShares] = React.useState("");
  const [saves, setSaves] = React.useState("");
  const [status, setStatus] = React.useState("Uploaded");
  const [contentType, setContentType] = React.useState("");

  // TikTok API Auto-Fetch State
  const [tiktokInput, setTiktokInput] = React.useState("");
  const [tiktokLoading, setTiktokLoading] = React.useState(false);
  const [tiktokError, setTiktokError] = React.useState("");
  const [tiktokSuccess, setTiktokSuccess] = React.useState(null);
  const [helpModalOpen, setHelpModalOpen] = React.useState(false);

  if (!activeAccount) {
    return <div className="page-container"><p>No active account selected.</p></div>;
  }

  // Handle TikTok API Fetch
  const handleFetchTikTok = async (e) => {
    if (e) e.preventDefault();
    if (!tiktokInput.trim()) {
      setTiktokError("Please enter a TikTok video URL or ID");
      return;
    }

    setTiktokLoading(true);
    setTiktokError("");
    setTiktokSuccess(null);

    try {
      const data = await fetchTikTokData(tiktokInput);
      
      // Auto-populate all form fields
      setPlatform("TikTok");
      setContentType(data.contentType || "Video");
      setCaption(data.caption || "");
      setHashtagsInput((data.hashtags || []).join(" "));
      setSubjectsList(data.subjects || ["Alex"]);
      setImpressions(String(data.impressions || 0));
      setReach(String(data.reach || 0));
      setLikes(String(data.likes || 0));
      setComments(String(data.comments || 0));
      setShares(String(data.shares || 0));
      setSaves(String(data.saves || 0));
      setStatus(data.status || "Uploaded");
      if (data.uploadDate) setUploadDate(data.uploadDate);
      if (data.uploadTime) setUploadTime(data.uploadTime);

      setTiktokSuccess(data);
    } catch (err) {
      setTiktokError(err.message || "Failed to fetch TikTok post data");
    } finally {
      setTiktokLoading(false);
    }
  };

  // Handle multi-subject addition
  const handleAddSubject = () => {
    if (!subjectInput.trim()) return;
    const clean = subjectInput.trim();
    if (!subjectsList.includes(clean)) {
      setSubjectsList([...subjectsList, clean]);
    }
    setSubjectInput("");
  };

  const handleRemoveSubject = (name) => {
    setSubjectsList(subjectsList.filter(s => s !== name));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!canEdit) {
      alert("You are in read-only mode for this shared vault.");
      return;
    }

    // Parse hashtags
    const hashtagsArray = hashtagsInput
      .split(/[\s,]+/)
      .map(tag => tag.trim())
      .filter(Boolean)
      .map(tag => tag.startsWith("#") ? tag : "#" + tag);

    addContent({
      uploadDate,
      uploadTime,
      platform,
      contentType,
      caption,
      hashtags: hashtagsArray.length > 0 ? hashtagsArray : ["#social"],
      subjects: subjectsList.length > 0 ? subjectsList : ["Self"],
      impressions: Number(impressions) || 0,
      reach: Number(reach) || 0,
      likes: Number(likes) || 0,
      comments: Number(comments) || 0,
      shares: Number(shares) || 0,
      saves: Number(saves) || 0,
      status,
      originalUrl: tiktokSuccess?.originalUrl || (platform === "TikTok" ? tiktokInput : undefined),
      videoId: tiktokSuccess?.videoId || undefined,
      thumbnailUrl: tiktokSuccess?.thumbnailUrl || undefined,
      lastSyncedAt: new Date().toISOString()
    });

    setActivePage("content-table");
  };

  return (
    <div className="page-container">
      {/* Header with Title */}
      <div className="page-header">
        <div>
          <h1 className="page-title">Add Content Entry</h1>
          <p className="page-subtitle">Log new content details manually or auto-import in seconds via TikTok API</p>
        </div>
      </div>

      <div style={{ maxWidth: "850px", margin: "0 auto", display: "flex", flexDirection: "column", gap: "1.5rem" }}>
        
        {/* ── TIKTOK API AUTO-INPUT PANEL ── */}
        <div className="glass-card" style={{
          background: "linear-gradient(135deg, rgba(37,244,238,0.08), rgba(254,44,85,0.08))",
          border: "1px solid rgba(37,244,238,0.25)",
          borderRadius: "16px",
          padding: "1.5rem"
        }}>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "0.85rem", flexWrap: "wrap", gap: "0.5rem" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
              <div style={{
                width: "36px",
                height: "36px",
                borderRadius: "10px",
                background: "linear-gradient(135deg, #25F4EE, #FE2C55)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "1.1rem"
              }}>
                🎵
              </div>
              <div>
                <h3 style={{ margin: 0, fontSize: "1.05rem", fontWeight: 700, color: "#fff" }}>
                  TikTok API Auto-Input & Real-Time Sync
                </h3>
                <span style={{ fontSize: "0.78rem", color: "var(--text-muted)" }}>
                  Paste any TikTok link to auto-fill caption, hashtags, views, likes & metrics
                </span>
              </div>
            </div>

            {/* Tutorial / Help Button */}
            <button
              type="button"
              onClick={() => setHelpModalOpen(true)}
              className="btn btn-sm btn-secondary"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.4rem",
                fontSize: "0.78rem",
                fontWeight: 700,
                borderColor: "rgba(37,244,238,0.4)",
                color: "#25F4EE",
                background: "rgba(37,244,238,0.1)"
              }}
              title="How to use TikTok API & Real-Time Sync"
            >
              <span>❓</span>
              <span>API Guide & Tutorial</span>
            </button>
          </div>

          <form onSubmit={handleFetchTikTok} style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap" }}>
            <input
              type="text"
              className="form-input"
              style={{ flex: 1, minWidth: "260px", background: "rgba(15, 23, 42, 0.6)" }}
              placeholder="Paste TikTok URL (e.g. https://www.tiktok.com/@user/video/... or https://vt.tiktok.com/...)"
              value={tiktokInput}
              onChange={e => setTiktokInput(e.target.value)}
              disabled={tiktokLoading}
            />
            <button
              type="submit"
              className="btn btn-primary"
              disabled={tiktokLoading || !tiktokInput.trim()}
              style={{
                background: "linear-gradient(135deg, #25F4EE, #FE2C55)",
                color: "#000",
                fontWeight: 800,
                border: "none",
                minWidth: "160px"
              }}
            >
              {tiktokLoading ? "⏳ Fetching..." : "⚡ Auto-Fill Post"}
            </button>
          </form>

          {/* Feedback Messages */}
          {tiktokError && (
            <div style={{ marginTop: "0.85rem", padding: "0.6rem 0.85rem", borderRadius: "8px", background: "rgba(244, 63, 94, 0.15)", border: "1px solid rgba(244, 63, 94, 0.3)", color: "#F43F5E", fontSize: "0.82rem" }}>
              ⚠️ {tiktokError}
            </div>
          )}

          {tiktokSuccess && (
            <div style={{ marginTop: "0.85rem", padding: "0.75rem 1rem", borderRadius: "8px", background: "rgba(16, 185, 129, 0.15)", border: "1px solid rgba(16, 185, 129, 0.3)", color: "#10B981", fontSize: "0.82rem", display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: "0.5rem" }}>
              <div>
                ✨ <strong>Success!</strong> Auto-filled video: <em>"{tiktokSuccess.caption?.substring(0, 35)}..."</em> ({tiktokSuccess.impressions?.toLocaleString()} views, {tiktokSuccess.likes?.toLocaleString()} likes).
              </div>
              <span className="badge badge-uploaded" style={{ fontSize: "0.7rem" }}>Real-Time Live Ready</span>
            </div>
          )}
        </div>

        {/* ── MANUAL / DETAILED LOGGING FORM ── */}
        <div className="glass-card" style={{ padding: "2rem" }}>
          <form onSubmit={handleSubmit}>
            
            {/* Row 1: Date, Time & Platform */}
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "1.25rem", marginBottom: "1.25rem" }}>
              <div className="form-group">
                <label className="form-label">Upload Date</label>
                <input 
                  type="date" 
                  className="form-input" 
                  required 
                  value={uploadDate} 
                  onChange={e => setUploadDate(e.target.value)} 
                />
              </div>

              <div className="form-group">
                <label className="form-label">Upload Time</label>
                <input 
                  type="time" 
                  className="form-input" 
                  value={uploadTime} 
                  onChange={e => setUploadTime(e.target.value)} 
                />
              </div>

              <div className="form-group">
                <label className="form-label">Platform</label>
                <select 
                  className="form-select" 
                  value={platform} 
                  onChange={e => setPlatform(e.target.value)}
                >
                  <option value="TikTok">TikTok</option>
                  <option value="Instagram">Instagram</option>
                  <option value="YouTube">YouTube</option>
                  <option value="X (Twitter)">X (Twitter)</option>
                  <option value="Facebook">Facebook</option>
                  <option value="Threads">Threads</option>
                </select>
              </div>
            </div>

            {/* Row 2: Content Type & Status */}
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.25rem", marginBottom: "1.25rem" }}>
              <div className="form-group">
                <label className="form-label">Content Type</label>
                <input 
                  type="text" 
                  className="form-input" 
                  placeholder="e.g. Video, Reels, Carousel, Short..." 
                  value={contentType} 
                  onChange={e => setContentType(e.target.value)} 
                />
              </div>

              <div className="form-group">
                <label className="form-label">Post Status</label>
                <select 
                  className="form-select" 
                  value={status} 
                  onChange={e => setStatus(e.target.value)}
                >
                  <option value="Uploaded">Uploaded (Live Post)</option>
                  <option value="Scheduled">Scheduled</option>
                  <option value="Privated">Privated</option>
                  <option value="Deleted">Deleted</option>
                </select>
              </div>
            </div>

            {/* Row 3: Caption Textarea */}
            <div className="form-group" style={{ marginBottom: "1.25rem" }}>
              <label className="form-label">Caption / Post Description</label>
              <textarea 
                className="form-textarea" 
                rows="3" 
                placeholder="Enter post caption or story text..." 
                required 
                value={caption} 
                onChange={e => setCaption(e.target.value)}
              ></textarea>
            </div>

            {/* Row 4: Hashtags */}
            <div className="form-group" style={{ marginBottom: "1.25rem" }}>
              <label className="form-label">Hashtags (separated by spaces or commas)</label>
              <input 
                type="text" 
                className="form-input" 
                placeholder="#tiktok #trending #social" 
                value={hashtagsInput} 
                onChange={e => setHashtagsInput(e.target.value)} 
              />
            </div>

            {/* Row 5: Multi-Subject Selector */}
            <div className="form-group" style={{ marginBottom: "1.5rem" }}>
              <label className="form-label">Subjects / People Featured</label>
              <div style={{ display: "flex", gap: "0.5rem", marginBottom: "0.5rem" }}>
                <input 
                  type="text" 
                  className="form-input" 
                  placeholder="Type person's name (e.g. Sarah, Jordan, Alex)..." 
                  value={subjectInput} 
                  onChange={e => setSubjectInput(e.target.value)}
                  onKeyDown={e => {
                    if (e.key === "Enter") {
                      e.preventDefault();
                      handleAddSubject();
                    }
                  }} 
                />
                <button type="button" onClick={handleAddSubject} className="btn btn-secondary">
                  Add Subject
                </button>
              </div>

              {/* Subject Chips */}
              <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem" }}>
                {subjectsList.map(name => (
                  <span key={name} className="chip chip-subject" style={{ display: "inline-flex", alignItems: "center", gap: "0.3rem" }}>
                    👤 {name}
                    <button 
                      type="button" 
                      onClick={() => handleRemoveSubject(name)} 
                      style={{ background: "none", border: "none", color: "inherit", cursor: "pointer", padding: "0 2px", fontWeight: "bold", fontSize: "0.85rem", lineHeight: 1 }} 
                      title="Remove subject"
                    >
                      ✕
                    </button>
                  </span>
                ))}
              </div>
            </div>

            <hr style={{ borderColor: "var(--border-color)", margin: "1.5rem 0" }} />

            {/* Performance Metrics Grid */}
            <h3 style={{ fontSize: "1.1rem", fontWeight: 700, marginBottom: "1rem" }}>
              Performance Metrics
            </h3>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(130px, 1fr))", gap: "0.85rem", marginBottom: "1.75rem" }}>
              <div className="form-group">
                <label className="form-label">Impressions</label>
                <input type="number" className="form-input" min="0" placeholder="0" value={impressions} onChange={e => setImpressions(e.target.value)} />
              </div>
              <div className="form-group">
                <label className="form-label">Reach</label>
                <input type="number" className="form-input" min="0" placeholder="0" value={reach} onChange={e => setReach(e.target.value)} />
              </div>
              <div className="form-group">
                <label className="form-label">Likes</label>
                <input type="number" className="form-input" min="0" placeholder="0" value={likes} onChange={e => setLikes(e.target.value)} />
              </div>
              <div className="form-group">
                <label className="form-label">Comments</label>
                <input type="number" className="form-input" min="0" placeholder="0" value={comments} onChange={e => setComments(e.target.value)} />
              </div>
              <div className="form-group">
                <label className="form-label">Shares</label>
                <input type="number" className="form-input" min="0" placeholder="0" value={shares} onChange={e => setShares(e.target.value)} />
              </div>
              <div className="form-group">
                <label className="form-label">Saves</label>
                <input type="number" className="form-input" min="0" placeholder="0" value={saves} onChange={e => setSaves(e.target.value)} />
              </div>
            </div>

            {/* Action Buttons */}
            <div style={{ display: "flex", justifyContent: "flex-end", gap: "0.75rem" }}>
              <button 
                type="button" 
                onClick={() => setActivePage("content-table")} 
                className="btn btn-secondary"
              >
                Cancel
              </button>
              <button type="submit" className="btn btn-primary" style={{ minWidth: "140px" }}>
                💾 Save Entry
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* ── Interactive TikTok Help Guide Modal ── */}
      {window.TikTokHelpModal && (
        <window.TikTokHelpModal isOpen={helpModalOpen} onClose={() => setHelpModalOpen(false)} />
      )}
    </div>
  );
};
