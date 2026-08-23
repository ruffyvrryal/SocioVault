// HashtagAnalyticsPage Component - Performance Studio for Hashtags
window.HashtagAnalyticsPage = function() {
  const { activeAccount, contents } = React.useContext(window.VaultContext);
  const [searchHashtag, setSearchHashtag] = React.useState("");
  const [hashtagSortBy, setHashtagSortBy] = React.useState("impressions");

  if (!activeAccount) {
    return <div className="page-container"><p>No active account selected.</p></div>;
  }

  const accountContents = React.useMemo(() => {
    return contents.filter(c => c.accountId === activeAccount.id);
  }, [contents, activeAccount.id]);

  // Aggregate stats per Hashtag
  const hashtagStats = React.useMemo(() => {
    const map = {};

    accountContents.forEach(item => {
      if (!item.hashtags || !Array.isArray(item.hashtags)) return;

      const engagement = (item.likes || 0) + (item.comments || 0) + (item.shares || 0) + (item.saves || 0);

      item.hashtags.forEach(tag => {
        const cleanTag = tag.trim().toLowerCase();
        if (!cleanTag) return;

        if (!map[cleanTag]) {
          map[cleanTag] = {
            tag: cleanTag.startsWith("#") ? cleanTag : "#" + cleanTag,
            contentCount: 0,
            impressions: 0,
            reach: 0,
            engagement: 0,
            erSum: 0
          };
        }

        map[cleanTag].contentCount += 1;
        map[cleanTag].impressions += item.impressions || 0;
        map[cleanTag].reach += item.reach || 0;
        map[cleanTag].engagement += engagement;
      });
    });

    return Object.values(map).map(h => ({
      ...h,
      avgEr: h.reach > 0 ? ((h.engagement / h.reach) * 100).toFixed(2) : "0.00"
    })).sort((a, b) => b.impressions - a.impressions);
  }, [accountContents]);

  const filteredHashtags = React.useMemo(() => {
    return hashtagStats.filter(h => h.tag.toLowerCase().includes(searchHashtag.toLowerCase()));
  }, [hashtagStats, searchHashtag]);

  // Calculate top 3 hashtags by avg impressions per content
  const top3Hashtags = React.useMemo(() => {
    const withAvg = hashtagStats.map(h => ({
      ...h,
      avgImpressionsPerContent: h.contentCount > 0 ? (h.impressions / h.contentCount) : 0
    }));
    return withAvg.sort((a, b) => b.avgImpressionsPerContent - a.avgImpressionsPerContent).slice(0, 3);
  }, [hashtagStats]);

  return (
    <div className="page-container">
      <div className="page-header">
        <div>
          <h1 className="page-title">{activeAccount.name} - Hashtag Studio</h1>
          <p className="page-subtitle">Track performance, total viewers, content count, and engagement rate per hashtag</p>
        </div>
      </div>

      {/* Top 3 Hashtags Premium Cards */}
      {top3Hashtags.length > 0 && (
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "1.5rem", marginBottom: "2.5rem" }}>
          {top3Hashtags.map((hashtag, index) => (
            <div key={hashtag.tag} style={{
              background: index === 0 
                ? "linear-gradient(135deg, rgba(34, 197, 94, 0.15), rgba(59, 130, 246, 0.15))" 
                : index === 1 
                ? "linear-gradient(135deg, rgba(168, 85, 247, 0.15), rgba(59, 130, 246, 0.15))"
                : "linear-gradient(135deg, rgba(244, 63, 94, 0.15), rgba(249, 115, 22, 0.15))",
              borderRadius: "var(--radius-md)",
              border: index === 0 ? "2px solid rgba(34, 197, 94, 0.4)" : index === 1 ? "2px solid rgba(168, 85, 247, 0.4)" : "2px solid rgba(244, 63, 94, 0.4)",
              padding: "1.75rem",
              position: "relative",
              overflow: "hidden",
              backdropFilter: "blur(10px)"
            }}>
              {/* Badge */}
              <div style={{
                position: "absolute",
                top: "-8px",
                left: "15px",
                background: index === 0 ? "linear-gradient(135deg, #22C55E, #3B82F6)" : index === 1 ? "linear-gradient(135deg, #A855F7, #3B82F6)" : "linear-gradient(135deg, #F43F5E, #F97316)",
                color: "#fff",
                padding: "0.35rem 0.75rem",
                borderRadius: "var(--radius-sm)",
                fontSize: "0.75rem",
                fontWeight: 700,
                letterSpacing: "0.05em",
                textTransform: "uppercase"
              }}>
                #{index + 1} Top Hashtag
              </div>

              {/* Icon/Medal */}
              <div style={{
                width: "56px",
                height: "56px",
                borderRadius: "12px",
                background: index === 0 ? "linear-gradient(135deg, #22C55E, #16A34A)" : index === 1 ? "linear-gradient(135deg, #A855F7, #7C3AED)" : "linear-gradient(135deg, #F43F5E, #DC2626)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontWeight: 800,
                color: "#fff",
                fontSize: "1.8rem",
                marginBottom: "1rem"
              }}>
                {index === 0 ? "🥇" : index === 1 ? "🥈" : "🥉"}
              </div>

              {/* Hashtag Name */}
              <h3 style={{ fontSize: "1.25rem", fontWeight: 700, marginBottom: "0.5rem", color: "#fff", wordBreak: "break-word" }}>
                {hashtag.tag}
              </h3>

              {/* Main Metric - Avg Views Per Content */}
              <div style={{ marginBottom: "1.25rem" }}>
                <div style={{ fontSize: "0.85rem", color: "rgba(255, 255, 255, 0.7)", marginBottom: "0.35rem", textTransform: "uppercase", letterSpacing: "0.05em", fontWeight: 600 }}>
                  Avg Views per Post
                </div>
                <div style={{ fontSize: "2rem", fontWeight: 800, background: index === 0 ? "linear-gradient(135deg, #22C55E, #3B82F6)" : index === 1 ? "linear-gradient(135deg, #A855F7, #3B82F6)" : "linear-gradient(135deg, #F43F5E, #F97316)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
                  {hashtag.avgImpressionsPerContent.toLocaleString('en-US', { maximumFractionDigits: 0 })}
                </div>
              </div>

              {/* Stats Row */}
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem", paddingTop: "1rem", borderTop: "1px solid rgba(255, 255, 255, 0.1)" }}>
                <div>
                  <div style={{ fontSize: "0.75rem", color: "rgba(255, 255, 255, 0.6)", marginBottom: "0.25rem", textTransform: "uppercase" }}>
                    Total Views
                  </div>
                  <div style={{ fontSize: "1.1rem", fontWeight: 700 }}>
                    {(hashtag.impressions / 1000).toFixed(1)}K
                  </div>
                </div>
                <div>
                  <div style={{ fontSize: "0.75rem", color: "rgba(255, 255, 255, 0.6)", marginBottom: "0.25rem", textTransform: "uppercase" }}>
                    Featured In
                  </div>
                  <div style={{ fontSize: "1.1rem", fontWeight: 700 }}>
                    {hashtag.contentCount} posts
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Search Input */}
      <div className="glass-card" style={{ marginBottom: "1.5rem", padding: "1rem" }}>
        <input 
          type="text" 
          className="form-input"
          placeholder="Search hashtag (e.g. #tech, #ai)..."
          value={searchHashtag}
          onChange={e => setSearchHashtag(e.target.value)}
        />
      </div>

      {/* Hashtags Performance Data Table */}
      <div className="table-container">
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "1.5rem", gap: "1.5rem", flexWrap: "wrap" }}>
          <h2 style={{ fontSize: "1.2rem", fontWeight: 700, margin: 0, minWidth: "200px" }}>Hashtag Performance Table</h2>
          
          {/* Sort Dropdown */}
          <div style={{ display: "flex", gap: "0.75rem", alignItems: "center", minWidth: "auto" }}>
            <label style={{ fontSize: "0.9rem", fontWeight: 600, color: "var(--text-muted)", whiteSpace: "nowrap" }}>Sort by:</label>
            <select 
              className="form-select"
              value={hashtagSortBy}
              onChange={(e) => setHashtagSortBy(e.target.value)}
              style={{ 
                padding: "0.65rem 1rem", 
                fontSize: "0.9rem",
                fontWeight: 500,
                background: "linear-gradient(135deg, var(--bg-tertiary) 0%, rgba(59, 130, 246, 0.05) 100%)",
                border: "1.5px solid var(--accent-cyan)",
                borderRadius: "10px",
                color: "var(--text-primary)",
                cursor: "pointer",
                boxShadow: "0 4px 12px rgba(6, 182, 212, 0.1)",
                transition: "all 0.2s ease",
                appearance: "none",
                backgroundImage: "url(\"data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='rgb(6, 182, 212)' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3e%3cpolyline points='6 9 12 15 18 9'%3e%3c/polyline%3e%3c/svg%3e\")",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "right 0.75rem center",
                backgroundSize: "1.2em 1.2em",
                paddingRight: "2.5rem"
              }}
            >
              <option value="impressions">Total Impressions</option>
              <option value="reach">Total Reach</option>
              <option value="engagement">Total Engagement</option>
              <option value="contentCount">Content Count</option>
              <option value="avgEr">Avg Engagement Rate %</option>
              <option value="avgImpressions">Avg Impressions per Post</option>
              <option value="alphabetical">Alphabetical (A-Z)</option>
            </select>
          </div>
        </div>

        <table className="custom-table">
          <thead>
            <tr>
              <th>Hashtag Tag</th>
              <th>Contents Used</th>
              <th>Total Viewers (Impressions)</th>
              <th>Total Reach</th>
              <th>Total Engagement</th>
              <th>Avg Engagement Rate %</th>
            </tr>
          </thead>
          <tbody>
            {(() => {
              // Sort the hashtags based on selected criteria
              const sortedHashtags = [...filteredHashtags].sort((a, b) => {
                switch(hashtagSortBy) {
                  case "impressions":
                    return b.impressions - a.impressions;
                  case "reach":
                    return b.reach - a.reach;
                  case "engagement":
                    return b.engagement - a.engagement;
                  case "contentCount":
                    return b.contentCount - a.contentCount;
                  case "avgEr":
                    return parseFloat(b.avgEr) - parseFloat(a.avgEr);
                  case "avgImpressions":
                    return (b.contentCount > 0 ? b.impressions / b.contentCount : 0) - (a.contentCount > 0 ? a.impressions / a.contentCount : 0);
                  case "alphabetical":
                    return a.tag.localeCompare(b.tag);
                  default:
                    return b.impressions - a.impressions;
                }
              });

              return sortedHashtags.map(h => (
                <tr key={h.tag}>
                  <td>
                    <span className="chip" style={{ fontSize: "0.85rem", padding: "0.3rem 0.75rem" }}>
                      {h.tag}
                    </span>
                  </td>
                  <td style={{ fontWeight: 600 }}>{h.contentCount} posts</td>
                  <td style={{ fontWeight: 700, color: "var(--accent-cyan)" }}>
                    {h.impressions.toLocaleString()}
                  </td>
                  <td>{h.reach.toLocaleString()}</td>
                  <td style={{ color: "var(--accent-emerald)", fontWeight: 600 }}>
                    {h.engagement.toLocaleString()}
                  </td>
                  <td style={{ fontWeight: 700, color: "var(--accent-primary)" }}>
                    {h.avgEr}%
                  </td>
                </tr>
              ));
            })()}

            {filteredHashtags.length === 0 && (
              <tr>
                <td colSpan="6" style={{ textAlign: "center", padding: "2.5rem", color: "var(--text-muted)" }}>
                  No hashtag metrics found in your content table.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};
