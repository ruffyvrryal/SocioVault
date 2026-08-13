// SubjectAnalyticsPage Component - Performance Metrics per Featured Subject / Person
window.SubjectAnalyticsPage = function() {
  const { activeAccount, contents } = React.useContext(window.VaultContext);
  const [searchSubject, setSearchSubject] = React.useState("");
  const [sortBy, setSortBy] = React.useState("impressions");
  const [sortOrder, setSortOrder] = React.useState("desc");
  const [currentPage, setCurrentPage] = React.useState(1);
  const itemsPerPage = 25;

  if (!activeAccount) {
    return <div className="page-container"><p>No active account selected.</p></div>;
  }

  const accountContents = React.useMemo(() => {
    return contents.filter(c => c.accountId === activeAccount.id);
  }, [contents, activeAccount.id]);

  React.useEffect(() => { setCurrentPage(1); }, [searchSubject, sortBy, sortOrder]);

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
    }));
  }, [accountContents]);

  const sortedSubjects = React.useMemo(() => {
    return subjectStats
      .filter(s => s.name.toLowerCase().includes(searchSubject.toLowerCase()))
      .sort((a, b) => {
        let valA, valB;
        if (sortBy === "alphabet") {
          return sortOrder === "asc" ? a.name.localeCompare(b.name) : b.name.localeCompare(a.name);
        } else if (sortBy === "contentCount") {
          valA = a.contentCount; valB = b.contentCount;
        } else if (sortBy === "reach") {
          valA = a.reach; valB = b.reach;
        } else if (sortBy === "engagement") {
          valA = a.engagement; valB = b.engagement;
        } else if (sortBy === "er") {
          valA = Number(a.avgEr); valB = Number(b.avgEr);
        } else {
          valA = a.impressions; valB = b.impressions;
        }
        return sortOrder === "asc" ? valA - valB : valB - valA;
      });
  }, [subjectStats, searchSubject, sortBy, sortOrder]);

  const totalPages = Math.ceil(sortedSubjects.length / itemsPerPage) || 1;
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedSubjects = sortedSubjects.slice(startIndex, startIndex + itemsPerPage);

  return (
    <div className="page-container">
      <div className="page-header">
        <div>
          <h1 className="page-title">{activeAccount.name} - Subject Performance Studio</h1>
          <p className="page-subtitle">Multi-attribute sorting & 25 per-page pagination for featured subjects</p>
        </div>
      </div>

      {/* Search and Sort Input */}
      <div className="glass-card" style={{ marginBottom: "1.5rem", padding: "1rem" }}>
        <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap", alignItems: "center" }}>
          <input 
            type="text" 
            className="form-input"
            placeholder="Search subject/person name (e.g. Alex, Sarah)..."
            value={searchSubject}
            onChange={e => setSearchSubject(e.target.value)}
            style={{ flex: 1, minWidth: "220px" }}
          />

          <div style={{ display: "flex", gap: "0.5rem", alignItems: "center" }}>
            <span style={{ fontSize: "0.85rem", color: "var(--text-muted)", fontWeight: 600 }}>Sort By:</span>
            <select className="form-select" style={{ width: "auto" }} value={sortBy} onChange={e => setSortBy(e.target.value)}>
              <option value="impressions">Impressions (Views)</option>
              <option value="alphabet">Alphabet (Name)</option>
              <option value="contentCount">Contents Featured</option>
              <option value="reach">Reach</option>
              <option value="engagement">Total Engagement</option>
              <option value="er">Engagement Rate %</option>
            </select>

            <select className="form-select" style={{ width: "auto" }} value={sortOrder} onChange={e => setSortOrder(e.target.value)}>
              <option value="desc">High → Low (Z-A)</option>
              <option value="asc">Low → High (A-Z)</option>
            </select>
          </div>
        </div>
      </div>

      {/* Subject Cards Overview */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: "1.25rem", marginBottom: "2rem" }}>
        {paginatedSubjects.map(s => (
          <div key={s.name} className="glass-card" style={{ borderLeft: "4px solid var(--accent-cyan)" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "1rem" }}>
              <div style={{
                width: "42px",
                height: "42px",
                borderRadius: "50%",
                background: "linear-gradient(135deg, var(--accent-cyan), var(--accent-emerald))",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
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
            {sortedSubjects.map(s => (
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

            {sortedSubjects.length === 0 && (
              <tr>
                <td colSpan="7" style={{ textAlign: "center", padding: "2.5rem", color: "var(--text-muted)" }}>
                  No subject records found in your content table.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {totalPages > 1 && (
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "2rem" }}>
          <span style={{ fontSize: "0.88rem", color: "var(--text-muted)" }}>
            Showing {startIndex + 1}-{Math.min(startIndex + itemsPerPage, sortedSubjects.length)} of {sortedSubjects.length} subjects
          </span>
          <div style={{ display: "flex", gap: "0.5rem" }}>
            <button
              onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
              className="btn btn-secondary"
              disabled={currentPage === 1}
              style={{ opacity: currentPage === 1 ? 0.5 : 1, cursor: currentPage === 1 ? "not-allowed" : "pointer" }}
            >
              Previous
            </button>
            <span style={{ padding: "0.4rem 0.8rem", fontSize: "0.88rem", color: "var(--text-main)", fontWeight: 600 }}>
              Page {currentPage} of {totalPages}
            </span>
            <button
              onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
              className="btn btn-secondary"
              disabled={currentPage === totalPages}
              style={{ opacity: currentPage === totalPages ? 0.5 : 1, cursor: currentPage === totalPages ? "not-allowed" : "pointer" }}
            >
              Next
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
