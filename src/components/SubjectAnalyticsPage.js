// SubjectAnalyticsPage Component - Performance Metrics per Featured Subject / Person
window.SubjectAnalyticsPage = function() {
  const { activeAccount, contents } = React.useContext(window.VaultContext);
  const [searchSubject, setSearchSubject] = React.useState("");

  if (!activeAccount) {
    return <div className="page-container"><p>No active account selected.</p></div>;
  }

  const accountContents = React.useMemo(() => {
    return contents.filter(c => c.accountId === activeAccount.id);
  }, [contents, activeAccount.id]);

  // Aggregate stats per Subject
  const subjectStats = React.useMemo(() => {
    const map = {};

    accountContents.forEach(item => {
      if (!item.subjects || !Array.isArray(item.subjects)) return;

      const engagement = (item.likes || 0) + (item.comments || 0) + (item.shares || 0) + (item.saves || 0);

      item.subjects.forEach(sub => {
        const name = sub.trim();
        if (!name) return;

        if (!map[name]) {
          map[name] = {
            name,
            contentCount: 0,
            impressions: 0,
            reach: 0,
            engagement: 0,
            topPost: null
          };
        }

        map[name].contentCount += 1;
        map[name].impressions += item.impressions || 0;
        map[name].reach += item.reach || 0;
        map[name].engagement += engagement;

        if (!map[name].topPost || (item.impressions || 0) > (map[name].topPost.impressions || 0)) {
          map[name].topPost = item;
        }
      });
    });

    return Object.values(map).map(s => ({
      ...s,
      avgEr: s.reach > 0 ? ((s.engagement / s.reach) * 100).toFixed(2) : "0.00"
    })).sort((a, b) => b.impressions - a.impressions);
  }, [accountContents]);

  const filteredSubjects = React.useMemo(() => {
    return subjectStats.filter(s => s.name.toLowerCase().includes(searchSubject.toLowerCase()));
  }, [subjectStats, searchSubject]);

  return (
    <div className="page-container">
      <div className="page-header">
        <div>
          <h1 className="page-title">{activeAccount.name} - Subject Performance Studio</h1>
          <p className="page-subtitle">Analyze how many subjects/people were featured in your content and their audience impact</p>
        </div>
      </div>

      {/* Search Input */}
      <div className="glass-card" style={{ marginBottom: "1.5rem", padding: "1rem" }}>
        <input 
          type="text" 
          className="form-input"
          placeholder="Search person/subject name (e.g. Alex, Sarah)..."
          value={searchSubject}
          onChange={e => setSearchSubject(e.target.value)}
        />
      </div>

      {/* Subject Cards Overview */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: "1.25rem", marginBottom: "2rem" }}>
        {filteredSubjects.map(s => (
          <div key={s.name} className="glass-card" style={{ borderLeft: "4px solid var(--accent-cyan)" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "1rem" }}>
              <div style={{
                width: "42px",
                height: "42px",
                borderRadius: "50%",
                background: "linear-gradient(135deg, var(--accent-cyan), var(--accent-emerald))",
                display: "flex",
                alignItems: "center",
                justify-content: "center",
                fontWeight: 700,
                color: "#fff",
                fontSize: "1.1rem"
              }}>
                {s.name.charAt(0)}
              </div>
              <div>
                <h3 style={{ fontSize: "1.15rem", fontWeight: 700 }}>{s.name}</h3>
                <span className="chip chip-subject" style={{ fontSize: "0.75rem" }}>
                  Featured in {s.contentCount} posts
                </span>
              </div>
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem", fontSize: "0.88rem" }}>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <span style={{ color: "var(--text-muted)" }}>Total Views:</span>
                <strong style={{ color: "var(--accent-cyan)" }}>{s.impressions.toLocaleString()}</strong>
              </div>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <span style={{ color: "var(--text-muted)" }}>Total Reach:</span>
                <strong>{s.reach.toLocaleString()}</strong>
              </div>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <span style={{ color: "var(--text-muted)" }}>Avg Engagement Rate:</span>
                <strong style={{ color: "var(--accent-emerald)" }}>{s.avgEr}%</strong>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Formatted Subject Data Table */}
      <div className="table-container">
        <table className="custom-table">
          <thead>
            <tr>
              <th>Featured Person / Subject</th>
              <th>Contents Featured</th>
              <th>Total Views (Impressions)</th>
              <th>Total Reach</th>
              <th>Total Engagement</th>
              <th>Avg Engagement Rate %</th>
              <th>Top Performing Post Caption</th>
            </tr>
          </thead>
          <tbody>
            {filteredSubjects.map(s => (
              <tr key={s.name}>
                <td>
                  <span className="chip chip-subject" style={{ fontSize: "0.85rem", padding: "0.3rem 0.75rem" }}>
                    👤 {s.name}
                  </span>
                </td>
                <td style={{ fontWeight: 600 }}>{s.contentCount} contents</td>
                <td style={{ fontWeight: 700, color: "var(--accent-cyan)" }}>
                  {s.impressions.toLocaleString()}
                </td>
                <td>{s.reach.toLocaleString()}</td>
                <td style={{ color: "var(--accent-emerald)", fontWeight: 600 }}>
                  {s.engagement.toLocaleString()}
                </td>
                <td style={{ fontWeight: 700, color: "var(--accent-primary)" }}>
                  {s.avgEr}%
                </td>
                <td style={{ maxWidth: "240px" }}>
                  <div style={{ fontSize: "0.85rem", fontStyle: "italic", color: "var(--text-muted)", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
                    "{s.topPost ? s.topPost.caption : 'N/A'}"
                  </div>
                </td>
              </tr>
            ))}

            {filteredSubjects.length === 0 && (
              <tr>
                <td colSpan="7" style={{ textAlign: "center", padding: "2.5rem", color: "var(--text-muted)" }}>
                  No subject records found in your content table.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};
