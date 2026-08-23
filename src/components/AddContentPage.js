// AddContentPage Component - Dedicated page for logging content entries
window.AddContentPage = function() {
  const { activeAccount, addContent, canEdit, setActivePage } = React.useContext(window.VaultContext);

  const [uploadDate, setUploadDate] = React.useState(() => new Date().toISOString().split("T")[0]);
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

  if (!activeAccount) {
    return <div className="page-container"><p>No active account selected.</p></div>;
  }

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
          <p className="page-subtitle">Input content performance metrics, subjects featured, and hashtags for {activeAccount.name}</p>
        </div>
      </div>

      {!canEdit && (
        <div className="glass-card" style={{ borderLeft: "4px solid var(--accent-amber)", marginBottom: "1.5rem" }}>
          <p style={{ color: "var(--accent-amber)", fontWeight: 600 }}>
            🔒 Viewing Mode: You are a Viewer in this shared vault. Only Owners and Editors can log new content.
          </p>
        </div>
      )}

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
                {activeAccount.platforms.map(p => (
                  <option key={p.id} value={p.name}>{p.name} ({p.handle})</option>
                ))}
                <option value="TikTok">TikTok</option>
                <option value="Instagram">Instagram</option>
                <option value="Facebook">Facebook</option>
                <option value="X (Twitter)">X (Twitter)</option>
                <option value="YouTube">YouTube</option>
                <option value="Threads">Threads</option>
              </select>
            </div>

            <div className="form-group">
              <label className="form-label">Content Type</label>
              <input
                type="text"
                className="form-input"
                placeholder="e.g. Reels, Carousel, Vlog..."
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
              placeholder="e.g. #tech #gadgets #review #vlog"
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
