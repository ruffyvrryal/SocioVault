// AddContentPage Component - Dedicated page for logging content entries with TikTok API Auto-Input
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
      status
    });

    setActivePage("content-table");
  };

  return (
    <div className="page-container">
      <div className="page-header">
        <div>
          <h1 className="page-title">Add Content Log</h1>
          <p className="page-subtitle">Auto-fetch post data via TikTok API or manually log performance metrics for {activeAccount.name}</p>
        </div>
      </div>

      {!canEdit && (
        <div className="glass-card" style={{ borderLeft: "4px solid var(--accent-amber)", marginBottom: "1.5rem" }}>
          <p style={{ color: "var(--accent-amber)", fontWeight: 600 }}>
            🔒 Viewing Mode: You are a Viewer in this shared vault. Only Owners and Editors can log new content.
          </p>
        </div>
      )}

      {/* ══ TIKTOK API AUTO-INPUT PANEL ══ */}
      {canEdit && (
        <div className="glass-card" style={{
          maxWidth: "800px",
          margin: "0 auto 1.5rem auto",
          background: "linear-gradient(135deg, rgba(37, 244, 238, 0.08), rgba(254, 44, 85, 0.08))",
          border: "1px solid rgba(37, 244, 238, 0.3)"
        }}>
          <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "0.75rem" }}>
            <div style={{
              width: "36px",
              height: "36px",
              borderRadius: "8px",
              background: "linear-gradient(135deg, #00F2FE, #FE2C55)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "1.2rem"
            }}>
              🎵
            </div>
            <div>
              <h3 style={{ fontSize: "1.05rem", fontWeight: 700, margin: 0, color: "var(--text-main)" }}>
                Auto-Input with TikTok API
              </h3>
              <p style={{ fontSize: "0.8rem", color: "var(--text-muted)", margin: 0 }}>
                Paste any TikTok video URL or Video ID to fetch title, hashtags, author, and metrics automatically
              </p>
            </div>
          </div>

          <div style={{ display: "flex", gap: "0.6rem", flexWrap: "wrap", marginTop: "1rem" }}>
            <input
              type="text"
              className="form-input"
              style={{ flex: 1, minWidth: "260px" }}
              placeholder="e.g. https://www.tiktok.com/@alex_tok/video/7234567890123456789"
              value={tiktokInput}
              onChange={e => setTiktokInput(e.target.value)}
              onKeyDown={e => {
                if (e.key === "Enter") {
                  e.preventDefault();
                  handleFetchTikTok();
                }
              }}
            />
            <button
              type="button"
              onClick={handleFetchTikTok}
              disabled={tiktokLoading}
              className="btn btn-primary"
              style={{
                background: "linear-gradient(135deg, #25F4EE, #FE2C55)",
                color: "#fff",
                border: "none",
                fontWeight: 700,
                display: "inline-flex",
                alignItems: "center",
                gap: "0.4rem"
              }}
            >
              {tiktokLoading ? "⏳ Fetching..." : "⚡ Auto-Fill Data"}
            </button>
          </div>

          {/* Quick Sample Links */}
          <div style={{ display: "flex", gap: "0.5rem", alignItems: "center", marginTop: "0.6rem", flexWrap: "wrap" }}>
            <span style={{ fontSize: "0.72rem", color: "var(--text-muted)" }}>Try sample:</span>
            <button
              type="button"
              onClick={() => { setTiktokInput("https://www.tiktok.com/@alex_tok/video/7281928491029384719"); }}
              style={{ fontSize: "0.72rem", color: "var(--accent-cyan)", background: "none", border: "none", textDecoration: "underline", cursor: "pointer" }}
            >
              @alex_tok/video/7281928491...
            </button>
            <button
              type="button"
              onClick={() => { setTiktokInput("https://www.tiktok.com/@techtrends/video/7391029384710293841"); }}
              style={{ fontSize: "0.72rem", color: "var(--accent-cyan)", background: "none", border: "none", textDecoration: "underline", cursor: "pointer" }}
            >
              @techtrends/video/739102...
            </button>
          </div>

          {tiktokError && (
            <div style={{ marginTop: "0.75rem", padding: "0.6rem 0.85rem", borderRadius: "6px", background: "rgba(244, 63, 94, 0.15)", border: "1px solid rgba(244, 63, 94, 0.3)", color: "#F43F5E", fontSize: "0.82rem" }}>
              ⚠️ {tiktokError}
            </div>
          )}

          {tiktokSuccess && (
            <div style={{ marginTop: "0.75rem", padding: "0.75rem 1rem", borderRadius: "8px", background: "rgba(16, 185, 129, 0.12)", border: "1px solid rgba(16, 185, 129, 0.3)", display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: "0.5rem" }}>
              <div>
                <span style={{ color: "#10B981", fontWeight: 700, fontSize: "0.85rem" }}>
                  ✅ Successfully imported from TikTok!
                </span>
                <p style={{ margin: "0.2rem 0 0 0", fontSize: "0.78rem", color: "var(--text-secondary)" }}>
                  Captured: {tiktokSuccess.caption.substring(0, 60)}... ({tiktokSuccess.impressions.toLocaleString()} views, {tiktokSuccess.likes.toLocaleString()} likes)
                </p>
              </div>
              <span style={{ fontSize: "0.72rem", padding: "0.2rem 0.5rem", borderRadius: "4px", background: "#10B981", color: "#fff", fontWeight: 700 }}>
                All fields filled ↓
              </span>
            </div>
          )}
        </div>
      )}

      {/* ══ CONTENT LOG FORM ══ */}
      <div className="glass-card" style={{ maxWidth: "800px", margin: "0 auto" }}>
        <form onSubmit={handleSubmit}>
          
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "1.25rem" }}>
            <div className="form-group">
              <label className="form-label">Upload / Scheduled Date</label>
              <input 
                type="date" 
                className="form-input" 
                required 
                value={uploadDate} 
                disabled={!canEdit} 
                onChange={e => setUploadDate(e.target.value)} 
              />
            </div>

            <div className="form-group">
              <label className="form-label">Upload Time</label>
              <input 
                type="time" 
                className="form-input" 
                disabled={!canEdit} 
                value={uploadTime}
                onChange={e => setUploadTime(e.target.value)}
              />
            </div>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "1.25rem" }}>
            <div className="form-group">
              <label className="form-label">Platform</label>
              <select 
                className="form-select" 
                value={platform} 
                disabled={!canEdit} 
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

            <div className="form-group">
              <label className="form-label">Content Type</label>
              <input 
                type="text" 
                className="form-input" 
                placeholder="e.g. Video, Reels, Vlog, Carousel..." 
                disabled={!canEdit} 
                value={contentType} 
                onChange={e => setContentType(e.target.value)} 
              />
            </div>
          </div>

          <div className="form-group">
            <label className="form-label">Caption / Post Text</label>
            <textarea 
              className="form-textarea" 
              rows="3" 
              placeholder="Enter post caption or video title..." 
              required 
              disabled={!canEdit} 
              value={caption} 
              onChange={e => setCaption(e.target.value)}
            ></textarea>
          </div>

          <div className="form-group">
            <label className="form-label">Hashtags (space or comma separated)</label>
            <input 
              type="text" 
              className="form-input" 
              placeholder="e.g. #tiktok #tech #gadgets #viral" 
              disabled={!canEdit} 
              value={hashtagsInput} 
              onChange={e => setHashtagsInput(e.target.value)} 
            />
          </div>

          {/* Multi-Subject Featured Input */}
          <div className="form-group">
            <label className="form-label">Subject / People Featured (Input multiple people inside this content)</label>
            <div style={{ display: "flex", gap: "0.5rem", marginBottom: "0.5rem" }}>
              <input 
                type="text" 
                className="form-input" 
                placeholder="Type person's name (e.g. Sarah, Alex, Jordan)..." 
                disabled={!canEdit} 
                value={subjectInput} 
                onChange={e => setSubjectInput(e.target.value)} 
                onKeyDown={e => {
                  if (e.key === "Enter") {
                    e.preventDefault();
                    handleAddSubject();
                  }
                }} 
              />
              <button 
                type="button" 
                onClick={handleAddSubject} 
                className="btn btn-secondary" 
                disabled={!canEdit}
              >
                Add Person
              </button>
            </div>

            <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem" }}>
              {subjectsList.map(name => (
                <span key={name} className="chip chip-subject" style={{ display: "inline-flex", alignItems: "center", gap: "0.3rem" }}>
                  👤 {name}
                  {canEdit && (
                    <button 
                      type="button" 
                      onClick={() => handleRemoveSubject(name)} 
                      style={{ background: "none", border: "none", color: "inherit", cursor: "pointer", padding: "0 2px", fontWeight: "bold", fontSize: "0.85rem", lineHeight: 1 }} 
                      title="Remove subject"
                    >
                      ✕
                    </button>
                  )}
                </span>
              ))}
            </div>
          </div>

          <hr style={{ borderColor: "var(--border-color)", margin: "1.5rem 0" }} />

          {/* Granular Metrics Input */}
          <h3 style={{ fontSize: "1.05rem", fontWeight: 700, marginBottom: "1rem" }}>Content Performance Metrics</h3>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))", gap: "1rem" }}>
            <div className="form-group">
              <label className="form-label">Impressions (Views)</label>
              <input 
                type="number" 
                className="form-input" 
                min="0" 
                disabled={!canEdit} 
                value={impressions} 
                onChange={e => setImpressions(e.target.value)} 
              />
            </div>

            <div className="form-group">
              <label className="form-label">Reach (Unique Viewers)</label>
              <input 
                type="number" 
                className="form-input" 
                min="0" 
                disabled={!canEdit} 
                value={reach} 
                onChange={e => setReach(e.target.value)} 
              />
            </div>

            <div className="form-group">
              <label className="form-label">Likes</label>
              <input 
                type="number" 
                className="form-input" 
                min="0" 
                disabled={!canEdit} 
                value={likes} 
                onChange={e => setLikes(e.target.value)} 
              />
            </div>

            <div className="form-group">
              <label className="form-label">Comments</label>
              <input 
                type="number" 
                className="form-input" 
                min="0" 
                disabled={!canEdit} 
                value={comments} 
                onChange={e => setComments(e.target.value)} 
              />
            </div>

            <div className="form-group">
              <label className="form-label">Shares</label>
              <input 
                type="number" 
                className="form-input" 
                min="0" 
                disabled={!canEdit} 
                value={shares} 
                onChange={e => setShares(e.target.value)} 
              />
            </div>

            <div className="form-group">
              <label className="form-label">Saves</label>
              <input 
                type="number" 
                className="form-input" 
                min="0" 
                disabled={!canEdit} 
                value={saves} 
                onChange={e => setSaves(e.target.value)} 
              />
            </div>
          </div>

          <div className="form-group" style={{ marginTop: "1rem" }}>
            <label className="form-label">Post Status</label>
            <select 
              className="form-select" 
              disabled={!canEdit} 
              value={status} 
              onChange={e => setStatus(e.target.value)}
            >
              <option value="Uploaded">Uploaded</option>
              <option value="Scheduled">Scheduled</option>
              <option value="Privated">Privated</option>
              <option value="Deleted">Deleted</option>
            </select>
          </div>

          <div style={{ display: "flex", justifyContent: "flex-end", gap: "0.75rem", marginTop: "2rem" }}>
            <button type="button" onClick={() => setActivePage("content-table")} className="btn btn-secondary">Cancel</button>
            {canEdit && <button type="submit" className="btn btn-primary">Save Content Log</button>}
          </div>

        </form>
      </div>
    </div>
  );
};
