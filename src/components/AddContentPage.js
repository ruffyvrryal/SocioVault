// AddContentPage Component - Modern 2-Column Layout with Single Video & Entire TikTok Account Auto-Import
window.AddContentPage = function() {
  const { activeAccount, contents, addContent, canEdit, setActivePage, fetchTikTokData, syncTikTokAccount } = React.useContext(window.VaultContext);

  const [mode, setMode] = React.useState("single"); // "single" | "account"
  const [uploadDate, setUploadDate] = React.useState(() => new Date().toISOString().split("T")[0]);
  const [uploadTime, setUploadTime] = React.useState(() => {
    const now = new Date();
    return `${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')}`;
  });
  const [platform, setPlatform] = React.useState(() => activeAccount?.platforms?.[0]?.name || "TikTok");
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
  const [contentType, setContentType] = React.useState("Video");

  // ── 1. Video / Content Type Recommendations (from past added data) ──
  const pastContentTypes = React.useMemo(() => {
    const counts = {};
    (contents || []).forEach(c => {
      const t = (c.contentType || "").trim();
      if (t) counts[t] = (counts[t] || 0) + 1;
    });
    ["Video", "Reel", "Shorts", "Carousel", "Photo", "Tutorial", "Vlog", "Story"].forEach(d => {
      if (!counts[d]) counts[d] = 0;
    });
    return Object.keys(counts).sort((a, b) => counts[b] - counts[a]);
  }, [contents]);

  const recommendedContentTypes = React.useMemo(() => {
    const q = (contentType || "").trim().toLowerCase();
    if (!q) return pastContentTypes.slice(0, 6);
    return pastContentTypes.filter(t => t.toLowerCase().includes(q) && t.toLowerCase() !== q).slice(0, 6);
  }, [pastContentTypes, contentType]);

  // ── 2. Hashtag Recommendations (from past added data) ──
  const pastHashtags = React.useMemo(() => {
    const counts = {};
    (contents || []).forEach(c => {
      (c.hashtags || []).forEach(h => {
        let tag = (h || "").trim();
        if (!tag.startsWith("#")) tag = "#" + tag;
        if (tag.length > 1) counts[tag] = (counts[tag] || 0) + 1;
      });
    });
    return Object.keys(counts).sort((a, b) => counts[b] - counts[a]);
  }, [contents]);

  const currentTypedTag = React.useMemo(() => {
    const parts = (hashtagsInput || "").split(/[\s,]+/);
    const last = parts[parts.length - 1] || "";
    return last.trim().toLowerCase();
  }, [hashtagsInput]);

  const currentTagsSet = React.useMemo(() => {
    return new Set(
      (hashtagsInput || "")
        .split(/[\s,]+/)
        .map(t => t.trim().toLowerCase())
        .filter(Boolean)
        .map(t => t.startsWith("#") ? t : "#" + t)
    );
  }, [hashtagsInput]);

  const recommendedHashtags = React.useMemo(() => {
    const q = currentTypedTag.replace(/^#/, '');
    return pastHashtags.filter(h => {
      const cleanH = h.toLowerCase().replace(/^#/, '');
      const notAlreadyAdded = !currentTagsSet.has(h.toLowerCase());
      if (!q) return notAlreadyAdded;
      return notAlreadyAdded && cleanH.includes(q);
    }).slice(0, 8);
  }, [pastHashtags, currentTypedTag, currentTagsSet]);

  const handleSelectHashtag = (tagToAdd) => {
    const parts = (hashtagsInput || "").split(/[\s,]+/).filter(Boolean);
    const last = parts[parts.length - 1] || "";
    const cleanLast = last.replace(/^#/, '').toLowerCase();
    const cleanTag = tagToAdd.replace(/^#/, '').toLowerCase();

    let newParts;
    if (cleanLast && cleanTag.startsWith(cleanLast) && parts.length > 0) {
      newParts = [...parts.slice(0, -1), tagToAdd];
    } else if (!parts.map(p => p.startsWith('#') ? p : '#' + p).includes(tagToAdd)) {
      newParts = [...parts, tagToAdd];
    } else {
      newParts = parts;
    }
    setHashtagsInput(newParts.join(" ") + " ");
  };

  // ── 3. Featured Subject Recommendations (from past added data) ──
  const pastSubjects = React.useMemo(() => {
    const counts = {};
    (contents || []).forEach(c => {
      (c.subjects || []).forEach(s => {
        const name = (s || "").trim();
        if (name) counts[name] = (counts[name] || 0) + 1;
      });
    });
    if (activeAccount?.subjectPhotos) {
      Object.keys(activeAccount.subjectPhotos).forEach(name => {
        if (!counts[name]) counts[name] = 1;
      });
    }
    if (activeAccount?.name && !counts[activeAccount.name]) {
      counts[activeAccount.name] = 0;
    }
    return Object.keys(counts).sort((a, b) => counts[b] - counts[a]);
  }, [contents, activeAccount]);

  const recommendedSubjects = React.useMemo(() => {
    const q = (subjectInput || "").trim().toLowerCase();
    return pastSubjects.filter(name => {
      const notAdded = !subjectsList.includes(name);
      if (!q) return notAdded;
      return notAdded && name.toLowerCase().includes(q);
    }).slice(0, 8);
  }, [pastSubjects, subjectInput, subjectsList]);

  const handleSelectSubject = (name) => {
    if (!subjectsList.includes(name)) {
      setSubjectsList(prev => [...prev, name]);
    }
    setSubjectInput("");
  };

  // TikTok API State
  const [tiktokInput, setTiktokInput] = React.useState("");
  const [tiktokAccountInput, setTiktokAccountInput] = React.useState("");
  const [tiktokLoading, setTiktokLoading] = React.useState(false);
  const [tiktokError, setTiktokError] = React.useState("");
  const [tiktokSuccess, setTiktokSuccess] = React.useState(null);
  const [accountSuccess, setAccountSuccess] = React.useState(null);
  const [helpModalOpen, setHelpModalOpen] = React.useState(false);

  if (!activeAccount) {
    return <div className="page-container"><p>No active account selected.</p></div>;
  }

  // Handle Single TikTok Video Fetch
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

  // Instant Auto-Fetch on URL paste (zero clicks required)
  React.useEffect(() => {
    if (!tiktokInput || (!tiktokInput.includes("tiktok.com") && !tiktokInput.startsWith("vt.") && !tiktokInput.startsWith("vm."))) return;
    if (tiktokSuccess && tiktokSuccess.originalUrl === tiktokInput) return;

    const timer = setTimeout(() => {
      handleFetchTikTok();
    }, 450);

    return () => clearTimeout(timer);
  }, [tiktokInput]);

  // Handle Entire Account Auto-Sync
  const handleSyncEntireAccount = async (e) => {
    if (e) e.preventDefault();
    if (!tiktokAccountInput.trim()) {
      setTiktokError("Please enter a TikTok account profile link or @handle");
      return;
    }

    setTiktokLoading(true);
    setTiktokError("");
    setAccountSuccess(null);

    try {
      const res = await syncTikTokAccount(activeAccount.id, tiktokAccountInput, {
        importPosts: true,
        updateFollowers: true
      });
      setAccountSuccess(res);
      setTimeout(() => {
        setActivePage("content-table");
      }, 1500);
    } catch(err) {
      setTiktokError(err.message || "Failed to sync TikTok account data");
    } finally {
      setTiktokLoading(false);
    }
  };

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
      {/* ── Header ── */}
      <div className="page-header" style={{ marginBottom: "1.25rem" }}>
        <div>
          <h1 className="page-title" style={{ fontSize: "1.4rem", fontWeight: 800 }}>
            Add Content Entry
          </h1>
          <p className="page-subtitle" style={{ fontSize: "0.82rem" }}>
            Auto-read single videos or auto-sync your entire TikTok account in real time
          </p>
        </div>

        <div style={{ display: "flex", gap: "0.5rem" }}>
          <button
            type="button"
            onClick={() => setHelpModalOpen(true)}
            className="btn btn-sm btn-secondary"
            style={{ borderColor: "rgba(37,244,238,0.4)", color: "#25F4EE", fontWeight: 700 }}
          >
            <span>❓ API Guide</span>
          </button>
          <button onClick={() => setActivePage("content-table")} className="btn btn-sm btn-secondary">
            <span>← Table</span>
          </button>
        </div>
      </div>

      {/* ── 2-Column Responsive Layout ── */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(360px, 1fr))", gap: "1.25rem", alignItems: "start" }}>
        
        {/* LEFT COLUMN: TikTok API Auto-Input Panel & Live Preview */}
        <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
          <div className="glass-card" style={{
            background: "linear-gradient(135deg, rgba(37,244,238,0.08), rgba(254,44,85,0.08))",
            border: "1px solid rgba(37,244,238,0.25)",
            borderRadius: "14px",
            padding: "1.25rem"
          }}>
            <div style={{ display: "flex", alignItems: "center", gap: "0.6rem", marginBottom: "0.85rem" }}>
              <div style={{ width: "32px", height: "32px", borderRadius: "8px", background: "linear-gradient(135deg, #25F4EE, #FE2C55)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1rem" }}>
                🎵
              </div>
              <div>
                <h3 style={{ margin: 0, fontSize: "0.98rem", fontWeight: 700, color: "#fff" }}>
                  TikTok API Auto-Reader
                </h3>
                <div style={{ fontSize: "0.74rem", color: "var(--text-muted)" }}>
                  Extract single posts or auto-sync all account posts in real time
                </div>
              </div>
            </div>

            {/* Mode Switcher Tabs */}
            <div style={{ display: "flex", gap: "0.35rem", marginBottom: "0.85rem", background: "rgba(0,0,0,0.3)", padding: "0.25rem", borderRadius: "8px" }}>
              <button
                type="button"
                onClick={() => setMode("single")}
                style={{
                  flex: 1,
                  padding: "0.35rem",
                  borderRadius: "6px",
                  border: "none",
                  background: mode === "single" ? "rgba(37,244,238,0.2)" : "transparent",
                  color: mode === "single" ? "#25F4EE" : "var(--text-muted)",
                  fontWeight: mode === "single" ? 700 : 500,
                  fontSize: "0.76rem",
                  cursor: "pointer"
                }}
              >
                🔗 Single Video
              </button>
              <button
                type="button"
                onClick={() => setMode("account")}
                style={{
                  flex: 1,
                  padding: "0.35rem",
                  borderRadius: "6px",
                  border: "none",
                  background: mode === "account" ? "linear-gradient(135deg, rgba(37,244,238,0.25), rgba(254,44,85,0.25))" : "transparent",
                  color: mode === "account" ? "#fff" : "var(--text-muted)",
                  fontWeight: mode === "account" ? 700 : 500,
                  fontSize: "0.76rem",
                  cursor: "pointer"
                }}
              >
                🌐 Entire TikTok Account
              </button>
            </div>

            {/* Form for Single Video */}
            {mode === "single" ? (
              <form onSubmit={handleFetchTikTok} style={{ display: "flex", flexDirection: "column", gap: "0.6rem" }}>
                <input
                  type="text"
                  className="form-input"
                  style={{ background: "rgba(15, 23, 42, 0.7)", fontSize: "0.84rem", minHeight: "38px" }}
                  placeholder="https://www.tiktok.com/@user/video/... or https://vt.tiktok.com/..."
                  value={tiktokInput}
                  onChange={e => setTiktokInput(e.target.value)}
                  disabled={tiktokLoading}
                />
                <button
                  type="submit"
                  className="btn btn-primary btn-sm"
                  disabled={tiktokLoading || !tiktokInput.trim()}
                  style={{
                    background: "linear-gradient(135deg, #25F4EE, #FE2C55)",
                    color: "#000",
                    fontWeight: 800,
                    border: "none",
                    width: "100%",
                    minHeight: "36px"
                  }}
                >
                  {tiktokLoading ? "⏳ Extracting Post Data..." : "⚡ Auto-Fill Post Details"}
                </button>
              </form>
            ) : (
              /* Form for Entire Account Auto-Sync */
              <form onSubmit={handleSyncEntireAccount} style={{ display: "flex", flexDirection: "column", gap: "0.6rem" }}>
                <input
                  type="text"
                  className="form-input"
                  style={{ background: "rgba(15, 23, 42, 0.7)", fontSize: "0.84rem", minHeight: "38px" }}
                  placeholder="https://www.tiktok.com/@yourbrand or @yourbrand"
                  value={tiktokAccountInput}
                  onChange={e => setTiktokAccountInput(e.target.value)}
                  disabled={tiktokLoading}
                />
                <button
                  type="submit"
                  className="btn btn-primary btn-sm"
                  disabled={tiktokLoading || !tiktokAccountInput.trim()}
                  style={{
                    background: "linear-gradient(135deg, #25F4EE, #FE2C55)",
                    color: "#000",
                    fontWeight: 800,
                    border: "none",
                    width: "100%",
                    minHeight: "36px"
                  }}
                >
                  {tiktokLoading ? "🔄 Reading Profile & All Videos..." : "⚡ Auto-Import All Account Videos in Real-Time"}
                </button>
              </form>
            )}

            {tiktokError && (
              <div style={{ marginTop: "0.65rem", padding: "0.5rem 0.75rem", borderRadius: "6px", background: "rgba(244,63,94,0.15)", border: "1px solid rgba(244,63,94,0.3)", color: "#F43F5E", fontSize: "0.78rem" }}>
                ⚠️ {tiktokError}
              </div>
            )}

            {accountSuccess && (
              <div style={{ marginTop: "0.65rem", padding: "0.65rem 0.85rem", borderRadius: "8px", background: "rgba(16,185,129,0.15)", border: "1px solid rgba(16,185,129,0.3)", color: "#10B981", fontSize: "0.8rem" }}>
                ✅ Successfully imported <strong>{accountSuccess.videos.length} videos</strong> from @{accountSuccess.profile.username}! Redirecting to table...
              </div>
            )}
          </div>

          {/* Live Extracted Card Preview for Single Post */}
          {tiktokSuccess && mode === "single" && (
            <div className="glass-card" style={{
              padding: "1.1rem",
              borderRadius: "12px",
              border: "1px solid rgba(16,185,129,0.35)",
              background: "linear-gradient(145deg, rgba(16,185,129,0.06), rgba(13,17,23,0.9))"
            }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "0.5rem" }}>
                <span style={{ fontSize: "0.72rem", fontWeight: 700, textTransform: "uppercase", color: "var(--accent-emerald)" }}>
                  ✅ Extracted Video Details
                </span>
                <span className="badge badge-uploaded" style={{ fontSize: "0.65rem" }}>Live Synced</span>
              </div>
              <div style={{ fontWeight: 700, fontSize: "0.88rem", color: "#fff", marginBottom: "0.4rem" }}>
                {tiktokSuccess.caption}
              </div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "0.25rem", marginBottom: "0.65rem" }}>
                {(tiktokSuccess.hashtags || []).map((h, i) => (
                  <span key={i} className="chip chip-hashtag" style={{ fontSize: "0.7rem", padding: "0.1rem 0.35rem" }}>{h}</span>
                ))}
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "0.4rem", background: "rgba(0,0,0,0.3)", padding: "0.5rem", borderRadius: "8px", fontSize: "0.76rem" }}>
                <div>👀 <strong>{tiktokSuccess.impressions?.toLocaleString()}</strong> views</div>
                <div>❤️ <strong>{tiktokSuccess.likes?.toLocaleString()}</strong> likes</div>
                <div>💬 <strong>{tiktokSuccess.comments?.toLocaleString()}</strong> comments</div>
              </div>
            </div>
          )}

          {/* Quick Pro-Tip Box */}
          <div style={{ padding: "0.85rem 1rem", borderRadius: "10px", background: "rgba(255,255,255,0.02)", border: "1px solid var(--border-color)", fontSize: "0.78rem", color: "var(--text-muted)", lineHeight: 1.5 }}>
            💡 <strong>Zero Manual Input:</strong> Paste your TikTok account profile link once under <em>"Entire TikTok Account"</em> to import all your videos with live views, likes, comments, and captions automatically!
          </div>
        </div>

        {/* RIGHT COLUMN: Form Details & Metrics Grid */}
        <div className="glass-card" style={{ padding: "1.35rem", borderRadius: "14px" }}>
          <form onSubmit={handleSubmit}>
            
            {/* Row 1: Platform & Status */}
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0.85rem", marginBottom: "0.85rem" }}>
              <div className="form-group" style={{ margin: 0 }}>
                <label className="form-label" style={{ fontSize: "0.74rem" }}>Platform</label>
                <select className="form-select" style={{ minHeight: "36px", fontSize: "0.84rem" }} value={platform} onChange={e => setPlatform(e.target.value)}>
                  <option value="TikTok">TikTok</option>
                  <option value="Instagram">Instagram</option>
                  <option value="YouTube">YouTube</option>
                  <option value="X (Twitter)">X (Twitter)</option>
                  <option value="Facebook">Facebook</option>
                  <option value="Threads">Threads</option>
                </select>
              </div>

              <div className="form-group" style={{ margin: 0 }}>
                <label className="form-label" style={{ fontSize: "0.74rem" }}>Post Status</label>
                <select className="form-select" style={{ minHeight: "36px", fontSize: "0.84rem" }} value={status} onChange={e => setStatus(e.target.value)}>
                  <option value="Uploaded">Uploaded (Live Post)</option>
                  <option value="Scheduled">Scheduled</option>
                  <option value="Privated">Privated</option>
                  <option value="Deleted">Deleted</option>
                </select>
              </div>
            </div>

            {/* Row 2: Date & Time & Content Type */}
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "0.75rem", marginBottom: "0.85rem" }}>
              <div className="form-group" style={{ margin: 0 }}>
                <label className="form-label" style={{ fontSize: "0.74rem" }}>Date</label>
                <input type="date" className="form-input" style={{ minHeight: "36px", fontSize: "0.82rem" }} required value={uploadDate} onChange={e => setUploadDate(e.target.value)} />
              </div>

              <div className="form-group" style={{ margin: 0 }}>
                <label className="form-label" style={{ fontSize: "0.74rem" }}>Time</label>
                <input type="time" className="form-input" style={{ minHeight: "36px", fontSize: "0.82rem" }} value={uploadTime} onChange={e => setUploadTime(e.target.value)} />
              </div>

              <div className="form-group" style={{ margin: 0 }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <label className="form-label" style={{ fontSize: "0.74rem", margin: 0 }}>Type</label>
                  {contentType && (
                    <span style={{ fontSize: "0.64rem", color: "var(--accent-cyan-light)" }}>
                      {contentType}
                    </span>
                  )}
                </div>
                <input
                  type="text"
                  className="form-input"
                  style={{ minHeight: "36px", fontSize: "0.82rem" }}
                  placeholder="Video, Reel, Carousel..."
                  value={contentType}
                  onChange={e => setContentType(e.target.value)}
                />
                {recommendedContentTypes.length > 0 && (
                  <div style={{ display: "flex", flexWrap: "wrap", gap: "0.25rem", marginTop: "0.3rem" }}>
                    {recommendedContentTypes.map((t) => (
                      <button
                        key={t}
                        type="button"
                        onClick={() => setContentType(t)}
                        className="chip"
                        style={{
                          fontSize: "0.66rem",
                          padding: "0.08rem 0.4rem",
                          cursor: "pointer",
                          border: contentType.toLowerCase() === t.toLowerCase() ? "1px solid var(--accent-cyan)" : "1px solid rgba(255,255,255,0.12)",
                          background: contentType.toLowerCase() === t.toLowerCase() ? "rgba(6,182,212,0.2)" : "rgba(255,255,255,0.05)",
                          color: contentType.toLowerCase() === t.toLowerCase() ? "#22D3EE" : "var(--text-secondary)"
                        }}
                        title={`Use "${t}" type`}
                      >
                        {t}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* Caption */}
            <div className="form-group" style={{ marginBottom: "0.85rem" }}>
              <label className="form-label" style={{ fontSize: "0.74rem" }}>Caption / Description</label>
              <textarea className="form-textarea" rows="2" style={{ fontSize: "0.85rem" }} placeholder="Post caption..." required value={caption} onChange={e => setCaption(e.target.value)}></textarea>
            </div>

            {/* Hashtags with Dynamic Historical Recommendations */}
            <div className="form-group" style={{ marginBottom: "0.85rem" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "0.25rem" }}>
                <label className="form-label" style={{ fontSize: "0.74rem", margin: 0 }}>Hashtags</label>
                <span style={{ fontSize: "0.68rem", color: "var(--accent-primary-light)" }}>
                  {pastHashtags.length > 0 ? `${pastHashtags.length} from previous posts` : 'Type tags with #'}
                </span>
              </div>
              <input
                type="text"
                className="form-input"
                style={{ minHeight: "36px", fontSize: "0.84rem" }}
                placeholder="#viral #trending #business"
                value={hashtagsInput}
                onChange={e => setHashtagsInput(e.target.value)}
              />
              {recommendedHashtags.length > 0 && (
                <div style={{ display: "flex", flexWrap: "wrap", gap: "0.25rem", marginTop: "0.35rem", alignItems: "center" }}>
                  <span style={{ fontSize: "0.68rem", color: "var(--text-subtle)", display: "flex", alignItems: "center", gap: "2px" }}>
                    ✨ Recommended:
                  </span>
                  {recommendedHashtags.map((tag) => (
                    <button
                      key={tag}
                      type="button"
                      onClick={() => handleSelectHashtag(tag)}
                      className="chip chip-hashtag"
                      style={{
                        fontSize: "0.7rem",
                        padding: "0.12rem 0.45rem",
                        cursor: "pointer",
                        background: "rgba(139,92,246,0.15)",
                        border: "1px solid rgba(139,92,246,0.35)",
                        color: "#C4B5FD",
                        transition: "all 0.15s ease"
                      }}
                      title={`Click to add ${tag}`}
                    >
                      + {tag}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Featured Subjects with Dynamic Historical Recommendations */}
            <div className="form-group" style={{ marginBottom: "1rem" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "0.25rem" }}>
                <label className="form-label" style={{ fontSize: "0.74rem", margin: 0 }}>Featured Subjects / People</label>
                <span style={{ fontSize: "0.68rem", color: "var(--accent-cyan-light)" }}>
                  {pastSubjects.length > 0 ? `${pastSubjects.length} saved subjects` : 'Tag creators'}
                </span>
              </div>
              <div style={{ display: "flex", gap: "0.4rem", marginBottom: "0.4rem" }}>
                <input
                  type="text"
                  className="form-input"
                  style={{ minHeight: "34px", fontSize: "0.82rem" }}
                  placeholder="Type subject or pick below..."
                  value={subjectInput}
                  onChange={e => setSubjectInput(e.target.value)}
                  onKeyDown={e => { if (e.key === "Enter") { e.preventDefault(); handleAddSubject(); } }}
                />
                <button type="button" onClick={handleAddSubject} className="btn btn-sm btn-secondary" style={{ padding: "0.2rem 0.6rem", fontSize: "0.75rem" }}>
                  + Add
                </button>
              </div>

              {/* Active Added Subjects */}
              {subjectsList.length > 0 && (
                <div style={{ display: "flex", flexWrap: "wrap", gap: "0.3rem", marginBottom: "0.45rem" }}>
                  {subjectsList.map(name => (
                    <span key={name} className="chip chip-subject" style={{ fontSize: "0.72rem", padding: "0.1rem 0.4rem" }}>
                      👤 {name}
                      <button type="button" onClick={() => handleRemoveSubject(name)} style={{ background: "none", border: "none", color: "inherit", cursor: "pointer", padding: "0 2px", fontWeight: "bold" }}>✕</button>
                    </span>
                  ))}
                </div>
              )}

              {/* Recommended Subjects from Previous Posts */}
              {recommendedSubjects.length > 0 && (
                <div style={{ display: "flex", flexWrap: "wrap", gap: "0.25rem", alignItems: "center" }}>
                  <span style={{ fontSize: "0.68rem", color: "var(--text-subtle)", display: "flex", alignItems: "center", gap: "2px" }}>
                    👥 Past Subjects:
                  </span>
                  {recommendedSubjects.map((sub) => (
                    <button
                      key={sub}
                      type="button"
                      onClick={() => handleSelectSubject(sub)}
                      className="chip chip-subject"
                      style={{
                        fontSize: "0.7rem",
                        padding: "0.12rem 0.45rem",
                        cursor: "pointer",
                        background: "rgba(6,182,212,0.12)",
                        border: "1px solid rgba(6,182,212,0.3)",
                        color: "#67E8F9",
                        transition: "all 0.15s ease"
                      }}
                      title={`Click to add ${sub}`}
                    >
                      + 👤 {sub}
                    </button>
                  ))}
                </div>
              )}
            </div>

            <div style={{ borderTop: "1px solid var(--border-color)", paddingTop: "0.85rem", marginBottom: "0.85rem" }}>
              <div style={{ fontSize: "0.82rem", fontWeight: 700, color: "#fff", marginBottom: "0.6rem" }}>
                📊 Performance Metrics
              </div>

              <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "0.6rem" }}>
                <div>
                  <label className="form-label" style={{ fontSize: "0.68rem" }}>Impressions</label>
                  <input type="number" className="form-input" style={{ minHeight: "34px", fontSize: "0.82rem" }} min="0" placeholder="0" value={impressions} onChange={e => setImpressions(e.target.value)} />
                </div>
                <div>
                  <label className="form-label" style={{ fontSize: "0.68rem" }}>Reach</label>
                  <input type="number" className="form-input" style={{ minHeight: "34px", fontSize: "0.82rem" }} min="0" placeholder="0" value={reach} onChange={e => setReach(e.target.value)} />
                </div>
                <div>
                  <label className="form-label" style={{ fontSize: "0.68rem" }}>Likes</label>
                  <input type="number" className="form-input" style={{ minHeight: "34px", fontSize: "0.82rem" }} min="0" placeholder="0" value={likes} onChange={e => setLikes(e.target.value)} />
                </div>
                <div>
                  <label className="form-label" style={{ fontSize: "0.68rem" }}>Comments</label>
                  <input type="number" className="form-input" style={{ minHeight: "34px", fontSize: "0.82rem" }} min="0" placeholder="0" value={comments} onChange={e => setComments(e.target.value)} />
                </div>
                <div>
                  <label className="form-label" style={{ fontSize: "0.68rem" }}>Shares</label>
                  <input type="number" className="form-input" style={{ minHeight: "34px", fontSize: "0.82rem" }} min="0" placeholder="0" value={shares} onChange={e => setShares(e.target.value)} />
                </div>
                <div>
                  <label className="form-label" style={{ fontSize: "0.68rem" }}>Saves</label>
                  <input type="number" className="form-input" style={{ minHeight: "34px", fontSize: "0.82rem" }} min="0" placeholder="0" value={saves} onChange={e => setSaves(e.target.value)} />
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div style={{ display: "flex", justifyContent: "flex-end", gap: "0.6rem", marginTop: "1rem" }}>
              <button type="button" onClick={() => setActivePage("content-table")} className="btn btn-sm btn-secondary">
                Cancel
              </button>
              <button type="submit" className="btn btn-sm btn-primary" style={{ fontWeight: 800, padding: "0.4rem 1.25rem" }}>
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
