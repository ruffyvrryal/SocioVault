// HashtagAnalyticsPage Component - Performance Studio for Hashtags
window.HashtagAnalyticsPage = function() {
  const { activeAccount, contents } = React.useContext(window.VaultContext);
  const [searchHashtag, setSearchHashtag] = React.useState("");

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

  return (
    <div className="page-container">
      <div className="page-header">
        <div>
          <h1 className="page-title">{activeAccount.name} - Hashtag Studio</h1>
          <p className="page-subtitle">Track performance, total viewers, content count, and engagement rate per hashtag</p>
        </div>
      </div>

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
            {filteredHashtags.map(h => (
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
            ))}

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
