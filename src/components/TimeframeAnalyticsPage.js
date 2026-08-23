// TimeframeAnalyticsPage Component - All-Time, Monthly, and Weekly Reporting
window.TimeframeAnalyticsPage = function() {
  const { activeAccount, contents } = React.useContext(window.VaultContext);
  const [timeframe, setTimeframe] = React.useState("all"); // 'all', 'monthly', 'weekly'
  const [selectedPlatform, setSelectedPlatform] = React.useState("All");
  const [selectedMonth, setSelectedMonth] = React.useState(() => {
    const now = new Date();
    return `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}`;
  });
  const [compareMonth1, setCompareMonth1] = React.useState(() => {
    const now = new Date();
    return `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}`;
  });
  const [compareMonth2, setCompareMonth2] = React.useState(() => {
    const now = new Date();
    const prevMonth = now.getMonth() === 0 ? 11 : now.getMonth() - 1;
    const year = now.getMonth() === 0 ? now.getFullYear() - 1 : now.getFullYear();
    return `${year}-${String(prevMonth + 1).padStart(2, '0')}`;
  });
  const chartRef = React.useRef(null);
  const chartInstanceRef = React.useRef(null);

  if (!activeAccount) {
    return <div className="page-container"><p>No active account selected.</p></div>;
  }

  const accountContents = React.useMemo(() => {
    return contents.filter(c => c.accountId === activeAccount.id);
  }, [contents, activeAccount.id]);

  // Get all unique platforms
  const allPlatforms = React.useMemo(() => {
    const platforms = [...new Set(accountContents.map(c => c.platform))];
    return platforms.filter(Boolean).sort();
  }, [accountContents]);

  // Helper to get all months with data
  const getAvailableMonths = React.useMemo(() => {
    const months = new Set();
    accountContents.forEach(item => {
      if (item.uploadDate) {
        const date = new Date(item.uploadDate);
        const month = `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}`;
        months.add(month);
      }
    });
    return Array.from(months).sort().reverse();
  }, [accountContents]);

  // Function to get analytics for a specific month
  const getMonthAnalytics = React.useMemo(() => {
    return (monthStr) => {
      const [year, month] = monthStr.split('-');
      const monthContents = accountContents.filter(item => {
        if (!item.uploadDate) return false;
        const itemDate = new Date(item.uploadDate);
        return itemDate.getMonth() === parseInt(month) - 1 && itemDate.getFullYear() === parseInt(year);
      });

      const totalImp = monthContents.reduce((sum, c) => sum + (c.impressions || 0), 0);
      const totalReach = monthContents.reduce((sum, c) => sum + (c.reach || 0), 0);
      const totalLikes = monthContents.reduce((sum, c) => sum + (c.likes || 0), 0);
      const totalComments = monthContents.reduce((sum, c) => sum + (c.comments || 0), 0);
      const totalShares = monthContents.reduce((sum, c) => sum + (c.shares || 0), 0);
      const totalSaves = monthContents.reduce((sum, c) => sum + (c.saves || 0), 0);
      const totalEng = totalLikes + totalComments + totalShares + totalSaves;
      const erRate = totalReach > 0 ? ((totalEng / totalReach) * 100).toFixed(2) : "0.00";

      return {
        impressions: totalImp,
        reach: totalReach,
        engagement: totalEng,
        er: erRate,
        contentCount: monthContents.length
      };
    };
  }, [accountContents]);

  // Filter contents by timeframe and platform
  const filteredContents = React.useMemo(() => {
    const now = new Date();
    return accountContents.filter(item => {
      if (!item.uploadDate) return true;
      const itemDate = new Date(item.uploadDate);

      // Platform filter
      if (selectedPlatform !== "All" && item.platform !== selectedPlatform) return false;

      if (timeframe === "weekly") {
        const diffDays = (now - itemDate) / (1000 * 3600 * 24);
        return diffDays <= 7 && diffDays >= 0;
      }

      if (timeframe === "monthly") {
        const [year, month] = selectedMonth.split('-');
        return itemDate.getMonth() === parseInt(month) - 1 && itemDate.getFullYear() === parseInt(year);
      }

      return true; // all-time
    });
  }, [accountContents, timeframe, selectedPlatform, selectedMonth]);

  // Compute Aggregates
  const totalImpressions = filteredContents.reduce((sum, c) => sum + (c.impressions || 0), 0);
  const totalReach = filteredContents.reduce((sum, c) => sum + (c.reach || 0), 0);
  const totalLikes = filteredContents.reduce((sum, c) => sum + (c.likes || 0), 0);
  const totalComments = filteredContents.reduce((sum, c) => sum + (c.comments || 0), 0);
  const totalShares = filteredContents.reduce((sum, c) => sum + (c.shares || 0), 0);
  const totalSaves = filteredContents.reduce((sum, c) => sum + (c.saves || 0), 0);
  
  const totalEngagement = totalLikes + totalComments + totalShares + totalSaves;
  const erRate = totalReach > 0 ? ((totalEngagement / totalReach) * 100).toFixed(2) : "0.00";

  // Render Chart.js - Different data based on timeframe
  React.useEffect(() => {
    if (!chartRef.current || window.Chart === undefined) return;

    if (chartInstanceRef.current) {
      chartInstanceRef.current.destroy();
    }

    const ctx = chartRef.current.getContext('2d');
    let labels, impressionsData;
    let chartTitle = "Impressions by Platform";

    if (timeframe === "monthly") {
      // Show daily data for the selected month
      const [year, month] = selectedMonth.split('-');
      const monthData = {};
      
      // Group contents by date
      filteredContents.forEach(c => {
        if (c.uploadDate) {
          const dateObj = new Date(c.uploadDate);
          if (dateObj.getMonth() === parseInt(month) - 1 && dateObj.getFullYear() === parseInt(year)) {
            const dateStr = c.uploadDate;
            monthData[dateStr] = (monthData[dateStr] || 0) + (c.impressions || 0);
          }
        }
      });

      // Sort dates and create arrays
      const sortedDates = Object.keys(monthData).sort();
      labels = sortedDates.length > 0 ? sortedDates.map(d => new Date(d).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })) : ['No Data'];
      impressionsData = sortedDates.length > 0 ? sortedDates.map(d => monthData[d]) : [0];
      chartTitle = `Daily Impressions - ${new Date(selectedMonth + '-01').toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}`;
    } else {
      // Show by platform for all-time and weekly views
      const platforms = [...new Set(filteredContents.map(c => c.platform))];
      const platformImpressions = platforms.map(p => {
        return filteredContents.filter(c => c.platform === p).reduce((sum, c) => sum + (c.impressions || 0), 0);
      });
      labels = platforms.length > 0 ? platforms : ['No Data'];
      impressionsData = platformImpressions.length > 0 ? platformImpressions : [0];
      chartTitle = `Impressions by Platform${selectedPlatform !== "All" ? ` (${selectedPlatform})` : ""}`;
    }

    chartInstanceRef.current = new window.Chart(ctx, {
      type: 'line',
      data: {
        labels: labels,
        datasets: [{
          label: 'Total Impressions (Views)',
          data: impressionsData,
          borderColor: '#06B6D4',
          backgroundColor: 'rgba(6, 182, 212, 0.1)',
          borderWidth: 2,
          fill: true,
          tension: 0.4,
          pointBackgroundColor: '#06B6D4',
          pointBorderColor: '#fff',
          pointBorderWidth: 2,
          pointRadius: 5,
          pointHoverRadius: 7
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: { labels: { color: '#9CA3AF' } },
          tooltip: {
            callbacks: {
              label: function(context) {
                return 'Impressions: ' + context.parsed.y.toLocaleString();
              }
            }
          }
        },
        scales: {
          x: { ticks: { color: '#9CA3AF' }, grid: { color: 'rgba(255,255,255,0.05)' } },
          y: { ticks: { color: '#9CA3AF' }, grid: { color: 'rgba(255,255,255,0.05)' }, beginAtZero: true }
        }
      }
    });

    return () => {
      if (chartInstanceRef.current) chartInstanceRef.current.destroy();
    };
  }, [filteredContents, timeframe, selectedMonth]);

  return (
    <div className="page-container">
      <div className="page-header">
        <div>
          <h1 className="page-title">{activeAccount.name} - Timeframe Analytics</h1>
          <p className="page-subtitle">Aggregated impressions, reach, total engagement, and engagement rate %</p>
        </div>

        {/* Timeframe Selector Tabs */}
        <div style={{ display: "flex", gap: "0.4rem", background: "rgba(15, 23, 42, 0.8)", padding: "0.3rem", borderRadius: "var(--radius-sm)", border: "1px solid var(--border-color)" }}>
          <button 
            onClick={() => setTimeframe("all")} 
            className={`btn ${timeframe === "all" ? "btn-primary" : "btn-secondary"}`}
            style={{ padding: "0.45rem 1rem", fontSize: "0.85rem" }}
          >
            All-Time
          </button>
          <button 
            onClick={() => setTimeframe("monthly")} 
            className={`btn ${timeframe === "monthly" ? "btn-primary" : "btn-secondary"}`}
            style={{ padding: "0.45rem 1rem", fontSize: "0.85rem" }}
          >
            This Month
          </button>
          <button 
            onClick={() => setTimeframe("weekly")} 
            className={`btn ${timeframe === "weekly" ? "btn-primary" : "btn-secondary"}`}
            style={{ padding: "0.45rem 1rem", fontSize: "0.85rem" }}
          >
            Past 7 Days
          </button>
        </div>

        {/* Platform Filter */}
        <div style={{ display: "flex", gap: "1rem", alignItems: "center", marginTop: "1rem", flexWrap: "wrap" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
            <label style={{ fontSize: "0.9rem", fontWeight: 600, color: "var(--text-muted)" }}>Platform:</label>
            <select 
              className="form-select"
              value={selectedPlatform}
              onChange={e => setSelectedPlatform(e.target.value)}
              style={{ width: "auto" }}
            >
              <option value="All">All Platforms</option>
              {allPlatforms.map(platform => (
                <option key={platform} value={platform}>{platform}</option>
              ))}
            </select>
          </div>

          {timeframe === "monthly" && (
            <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
              <label style={{ fontSize: "0.9rem", fontWeight: 600, color: "var(--text-muted)" }}>Select Month & Year:</label>
              <select 
                className="form-select"
                value={selectedMonth}
                onChange={e => setSelectedMonth(e.target.value)}
                style={{ width: "auto" }}
              >
                {getAvailableMonths.map(month => {
                  const [year, monthNum] = month.split('-');
                  const monthName = new Date(year, parseInt(monthNum) - 1).toLocaleDateString('en-US', { month: 'long', year: 'numeric' });
                  return (
                    <option key={month} value={month}>{monthName}</option>
                  );
                })}
                {getAvailableMonths.length === 0 && <option>No data available</option>}
              </select>
            </div>
          )}
        </div>
      </div>

      {/* KPI Cards Grid */}
      <div className="stats-grid">
        <div className="glass-card stat-card">
          <span className="stat-label">Total Impressions (Views)</span>
          <span className="stat-value" style={{ color: "var(--accent-cyan)" }}>
            {totalImpressions.toLocaleString()}
          </span>
          <span className="stat-change positive">From {filteredContents.length} contents</span>
        </div>

        <div className="glass-card stat-card">
          <span className="stat-label">Total Reach (Unique Viewers)</span>
          <span className="stat-value">
            {totalReach.toLocaleString()}
          </span>
          <span className="stat-change positive">Unique audience</span>
        </div>

        <div className="glass-card stat-card">
          <span className="stat-label">Total Engagement</span>
          <span className="stat-value" style={{ color: "var(--accent-emerald)" }}>
            {totalEngagement.toLocaleString()}
          </span>
          <span className="stat-change positive">Likes + Comments + Shares + Saves</span>
        </div>

        <div className="glass-card stat-card">
          <span className="stat-label">Engagement Rate (ER %)</span>
          <span className="stat-value" style={{ color: "var(--accent-primary)" }}>
            {erRate}%
          </span>
          <span className="stat-change positive">(Total Engagement / Reach) × 100</span>
        </div>
      </div>

      {/* Analytics Breakdown & Chart */}
      <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr", gap: "1.5rem", marginTop: "1.5rem" }}>
        <div className="glass-card" style={{ height: "350px", display: "flex", flexDirection: "column" }}>
          <h3 style={{ fontSize: "1.1rem", fontWeight: 700, marginBottom: "1rem" }}>
            {timeframe === "monthly" ? `Daily Impressions - ${new Date(selectedMonth + '-01').toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}` : `Impressions by Platform ${selectedPlatform !== "All" ? `(${selectedPlatform})` : ""}`}
          </h3>
          <div style={{ flex: 1, position: "relative" }}>
            <canvas ref={chartRef}></canvas>
          </div>
        </div>

        {/* Engagement Details Breakdown */}
        <div className="glass-card">
          <h3 style={{ fontSize: "1.1rem", fontWeight: 700, marginBottom: "1.25rem" }}>Engagement Metrics</h3>
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            
            <div style={{ display: "flex", justifyContent: "space-between", paddingBottom: "0.5rem", borderBottom: "1px solid var(--border-color)" }}>
              <span style={{ color: "var(--text-muted)", fontSize: "0.9rem" }}>❤️ Likes</span>
              <strong style={{ fontSize: "0.95rem" }}>{totalLikes.toLocaleString()}</strong>
            </div>

            <div style={{ display: "flex", justifyContent: "space-between", paddingBottom: "0.5rem", borderBottom: "1px solid var(--border-color)" }}>
              <span style={{ color: "var(--text-muted)", fontSize: "0.9rem" }}>💬 Comments</span>
              <strong style={{ fontSize: "0.95rem" }}>{totalComments.toLocaleString()}</strong>
            </div>

            <div style={{ display: "flex", justifyContent: "space-between", paddingBottom: "0.5rem", borderBottom: "1px solid var(--border-color)" }}>
              <span style={{ color: "var(--text-muted)", fontSize: "0.9rem" }}>🔁 Shares</span>
              <strong style={{ fontSize: "0.95rem" }}>{totalShares.toLocaleString()}</strong>
            </div>

            <div style={{ display: "flex", justifyContent: "space-between", paddingBottom: "0.5rem", borderBottom: "1px solid var(--border-color)" }}>
              <span style={{ color: "var(--text-muted)", fontSize: "0.9rem" }}>📌 Saves</span>
              <strong style={{ fontSize: "0.95rem" }}>{totalSaves.toLocaleString()}</strong>
            </div>

          </div>
        </div>
      </div>

      {/* Month Comparison Section */}
      {timeframe === "monthly" && (
        <div style={{ marginTop: "2.5rem" }}>
          <h2 style={{ fontSize: "1.35rem", fontWeight: 800, color: "var(--text-main)", marginBottom: "1rem" }}>
            📊 Compare Two Months
          </h2>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "2rem", marginBottom: "1.5rem" }}>
            {/* Month 1 Comparison Card */}
            <div className="glass-card" style={{ padding: "1.5rem" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "1rem" }}>
                <div style={{ width: "40px", height: "40px", borderRadius: "10px", background: "linear-gradient(135deg, #3B82F6, #06B6D4)", display: "flex", alignItems: "center", justifyContent: "center", color: "#fff", fontWeight: 700, fontSize: "1.1rem" }}>
                  1️⃣
                </div>
                <div>
                  <label style={{ fontSize: "0.85rem", fontWeight: 600, color: "var(--text-muted)", display: "block", marginBottom: "0.25rem" }}>First Month</label>
                  <select 
                    className="form-select"
                    value={compareMonth1}
                    onChange={e => setCompareMonth1(e.target.value)}
                    style={{ width: "100%", fontSize: "0.9rem" }}
                  >
                    {getAvailableMonths.map(month => {
                      const [year, monthNum] = month.split('-');
                      const monthName = new Date(year, parseInt(monthNum) - 1).toLocaleDateString('en-US', { month: 'long', year: 'numeric' });
                      return (
                        <option key={month} value={month}>{monthName}</option>
                      );
                    })}
                  </select>
                </div>
              </div>

              {(() => {
                const month1Data = getMonthAnalytics(compareMonth1);
                return (
                  <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                    <div style={{ display: "flex", justifyContent: "space-between", paddingBottom: "0.5rem", borderBottom: "1px solid rgba(255,255,255,0.1)" }}>
                      <span style={{ color: "var(--text-muted)", fontSize: "0.9rem" }}>Impressions</span>
                      <strong style={{ color: "var(--accent-cyan)" }}>{month1Data.impressions.toLocaleString()}</strong>
                    </div>
                    <div style={{ display: "flex", justifyContent: "space-between", paddingBottom: "0.5rem", borderBottom: "1px solid rgba(255,255,255,0.1)" }}>
                      <span style={{ color: "var(--text-muted)", fontSize: "0.9rem" }}>Reach</span>
                      <strong>{month1Data.reach.toLocaleString()}</strong>
                    </div>
                    <div style={{ display: "flex", justifyContent: "space-between", paddingBottom: "0.5rem", borderBottom: "1px solid rgba(255,255,255,0.1)" }}>
                      <span style={{ color: "var(--text-muted)", fontSize: "0.9rem" }}>Engagement</span>
                      <strong style={{ color: "var(--accent-emerald)" }}>{month1Data.engagement.toLocaleString()}</strong>
                    </div>
                    <div style={{ display: "flex", justifyContent: "space-between", paddingBottom: "0.5rem", borderBottom: "1px solid rgba(255,255,255,0.1)" }}>
                      <span style={{ color: "var(--text-muted)", fontSize: "0.9rem" }}>ER %</span>
                      <strong style={{ color: "var(--accent-primary)" }}>{month1Data.er}%</strong>
                    </div>
                    <div style={{ display: "flex", justifyContent: "space-between", paddingTop: "0.5rem" }}>
                      <span style={{ color: "var(--text-muted)", fontSize: "0.9rem" }}>Posts</span>
                      <strong>{month1Data.contentCount}</strong>
                    </div>
                  </div>
                );
              })()}
            </div>

            {/* Month 2 Comparison Card */}
            <div className="glass-card" style={{ padding: "1.5rem" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "1rem" }}>
                <div style={{ width: "40px", height: "40px", borderRadius: "10px", background: "linear-gradient(135deg, #A855F7, #06B6D4)", display: "flex", alignItems: "center", justifyContent: "center", color: "#fff", fontWeight: 700, fontSize: "1.1rem" }}>
                  2️⃣
                </div>
                <div>
                  <label style={{ fontSize: "0.85rem", fontWeight: 600, color: "var(--text-muted)", display: "block", marginBottom: "0.25rem" }}>Second Month</label>
                  <select 
                    className="form-select"
                    value={compareMonth2}
                    onChange={e => setCompareMonth2(e.target.value)}
                    style={{ width: "100%", fontSize: "0.9rem" }}
                  >
                    {getAvailableMonths.map(month => {
                      const [year, monthNum] = month.split('-');
                      const monthName = new Date(year, parseInt(monthNum) - 1).toLocaleDateString('en-US', { month: 'long', year: 'numeric' });
                      return (
                        <option key={month} value={month}>{monthName}</option>
                      );
                    })}
                  </select>
                </div>
              </div>

              {(() => {
                const month2Data = getMonthAnalytics(compareMonth2);
                return (
                  <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                    <div style={{ display: "flex", justifyContent: "space-between", paddingBottom: "0.5rem", borderBottom: "1px solid rgba(255,255,255,0.1)" }}>
                      <span style={{ color: "var(--text-muted)", fontSize: "0.9rem" }}>Impressions</span>
                      <strong style={{ color: "var(--accent-cyan)" }}>{month2Data.impressions.toLocaleString()}</strong>
                    </div>
                    <div style={{ display: "flex", justifyContent: "space-between", paddingBottom: "0.5rem", borderBottom: "1px solid rgba(255,255,255,0.1)" }}>
                      <span style={{ color: "var(--text-muted)", fontSize: "0.9rem" }}>Reach</span>
                      <strong>{month2Data.reach.toLocaleString()}</strong>
                    </div>
                    <div style={{ display: "flex", justifyContent: "space-between", paddingBottom: "0.5rem", borderBottom: "1px solid rgba(255,255,255,0.1)" }}>
                      <span style={{ color: "var(--text-muted)", fontSize: "0.9rem" }}>Engagement</span>
                      <strong style={{ color: "var(--accent-emerald)" }}>{month2Data.engagement.toLocaleString()}</strong>
                    </div>
                    <div style={{ display: "flex", justifyContent: "space-between", paddingBottom: "0.5rem", borderBottom: "1px solid rgba(255,255,255,0.1)" }}>
                      <span style={{ color: "var(--text-muted)", fontSize: "0.9rem" }}>ER %</span>
                      <strong style={{ color: "var(--accent-primary)" }}>{month2Data.er}%</strong>
                    </div>
                    <div style={{ display: "flex", justifyContent: "space-between", paddingTop: "0.5rem" }}>
                      <span style={{ color: "var(--text-muted)", fontSize: "0.9rem" }}>Posts</span>
                      <strong>{month2Data.contentCount}</strong>
                    </div>
                  </div>
                );
              })()}
            </div>

            {/* Comparison Insights */}
            <div className="glass-card" style={{ padding: "1.5rem", background: "linear-gradient(135deg, rgba(34, 197, 94, 0.1), rgba(59, 130, 246, 0.1))", borderLeft: "4px solid rgba(34, 197, 94, 0.5)" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "1rem" }}>
                <div style={{ fontSize: "1.5rem" }}>📈</div>
                <h3 style={{ fontSize: "1rem", fontWeight: 700, margin: 0 }}>Change Analysis</h3>
              </div>

              {(() => {
                const month1Data = getMonthAnalytics(compareMonth1);
                const month2Data = getMonthAnalytics(compareMonth2);
                const impDiff = month1Data.impressions - month2Data.impressions;
                const impPercent = month2Data.impressions > 0 ? ((impDiff / month2Data.impressions) * 100).toFixed(1) : 0;
                const reachDiff = month1Data.reach - month2Data.reach;
                const reachPercent = month2Data.reach > 0 ? ((reachDiff / month2Data.reach) * 100).toFixed(1) : 0;
                const engDiff = month1Data.engagement - month2Data.engagement;
                const engPercent = month2Data.engagement > 0 ? ((engDiff / month2Data.engagement) * 100).toFixed(1) : 0;

                return (
                  <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                    <div style={{ display: "flex", justifyContent: "space-between", paddingBottom: "0.5rem", borderBottom: "1px solid rgba(255,255,255,0.1)" }}>
                      <span style={{ color: "var(--text-muted)", fontSize: "0.9rem" }}>📊 Impressions</span>
                      <strong style={{ color: impDiff >= 0 ? "var(--accent-emerald)" : "#F43F5E" }}>{impDiff >= 0 ? "+" : ""}{impDiff.toLocaleString()} ({impPercent}%)</strong>
                    </div>
                    <div style={{ display: "flex", justifyContent: "space-between", paddingBottom: "0.5rem", borderBottom: "1px solid rgba(255,255,255,0.1)" }}>
                      <span style={{ color: "var(--text-muted)", fontSize: "0.9rem" }}>👥 Reach</span>
                      <strong style={{ color: reachDiff >= 0 ? "var(--accent-emerald)" : "#F43F5E" }}>{reachDiff >= 0 ? "+" : ""}{reachDiff.toLocaleString()} ({reachPercent}%)</strong>
                    </div>
                    <div style={{ display: "flex", justifyContent: "space-between", paddingBottom: "0.5rem", borderBottom: "1px solid rgba(255,255,255,0.1)" }}>
                      <span style={{ color: "var(--text-muted)", fontSize: "0.9rem" }}>💬 Engagement</span>
                      <strong style={{ color: engDiff >= 0 ? "var(--accent-emerald)" : "#F43F5E" }}>{engDiff >= 0 ? "+" : ""}{engDiff.toLocaleString()} ({engPercent}%)</strong>
                    </div>
                  </div>
                );
              })()}
            </div>
          </div>
        </div>
      )}

      {/* Content Type Analytics Section - Bottom of Page */}
      <div style={{ marginTop: "2.5rem" }}>
        <h2 style={{ fontSize: "1.35rem", fontWeight: 800, color: "var(--text-main)", marginBottom: "1.5rem" }}>
          🎬 Content Type Performance
        </h2>

        {(() => {
          // Group contents by content type and calculate analytics
          const contentTypeStats = React.useMemo(() => {
            const stats = {};
            filteredContents.forEach(content => {
              const type = content.contentType || "Unspecified";
              if (!stats[type]) {
                stats[type] = {
                  type,
                  count: 0,
                  impressions: 0,
                  reach: 0,
                  engagement: 0,
                  avgEngagement: 0,
                  avgReach: 0,
                  avgImpressions: 0
                };
              }
              stats[type].count += 1;
              stats[type].impressions += content.impressions || 0;
              stats[type].reach += content.reach || 0;
              stats[type].engagement += (content.likes || 0) + (content.comments || 0) + (content.shares || 0) + (content.saves || 0);
            });

            // Calculate averages
            Object.keys(stats).forEach(type => {
              const stat = stats[type];
              stat.avgImpressions = stat.count > 0 ? Math.round(stat.impressions / stat.count) : 0;
              stat.avgReach = stat.count > 0 ? Math.round(stat.reach / stat.count) : 0;
              stat.avgEngagement = stat.count > 0 ? Math.round(stat.engagement / stat.count) : 0;
            });

            return Object.values(stats).sort((a, b) => b.impressions - a.impressions);
          }, [filteredContents]);

          // Content type icon mapping
          const contentTypeIcons = {
            "Reels": "📹",
            "Carousel": "🎠",
            "Vlog": "🎥",
            "Video": "🎬",
            "Image": "📷",
            "Story": "📖",
            "Live": "🔴",
            "Post": "📝",
            "Short": "⏱️",
            "Thread": "🧵"
          };

          return (
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "1.5rem" }}>
              {contentTypeStats.length > 0 ? (
                contentTypeStats.map((stat, idx) => (
                  <div 
                    key={stat.type}
                    className="glass-card" 
                    style={{ 
                      padding: "1.5rem",
                      background: idx === 0 ? "linear-gradient(135deg, rgba(6, 182, 212, 0.1), rgba(59, 130, 246, 0.1))" : "rgba(15, 23, 42, 0.6)",
                      borderTop: idx === 0 ? "2px solid var(--accent-cyan)" : "1px solid var(--border-color)"
                    }}
                  >
                    <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "1.25rem" }}>
                      <div style={{ fontSize: "2rem" }}>{contentTypeIcons[stat.type] || "📄"}</div>
                      <div>
                        <h3 style={{ fontSize: "1rem", fontWeight: 700, color: "var(--text-main)", margin: 0 }}>{stat.type}</h3>
                        <p style={{ fontSize: "0.8rem", color: "var(--text-muted)", margin: "0.25rem 0 0 0" }}>{stat.count} content{stat.count !== 1 ? "s" : ""}</p>
                      </div>
                      {idx === 0 && (
                        <div style={{ marginLeft: "auto", padding: "0.35rem 0.75rem", background: "rgba(6, 182, 212, 0.2)", borderRadius: "6px", fontSize: "0.75rem", fontWeight: 700, color: "var(--accent-cyan)" }}>
                          TOP
                        </div>
                      )}
                    </div>

                    <div style={{ display: "flex", flexDirection: "column", gap: "0.9rem" }}>
                      <div>
                        <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "0.4rem" }}>
                          <span style={{ fontSize: "0.85rem", color: "var(--text-muted)" }}>Total Impressions</span>
                          <strong style={{ color: "var(--accent-cyan)", fontSize: "0.9rem" }}>{stat.impressions.toLocaleString()}</strong>
                        </div>
                        <div style={{ width: "100%", height: "6px", background: "rgba(255,255,255,0.1)", borderRadius: "3px", overflow: "hidden" }}>
                          <div style={{ width: `${Math.min((stat.impressions / Math.max(...contentTypeStats.map(s => s.impressions))) * 100, 100)}%`, height: "100%", background: "linear-gradient(90deg, var(--accent-cyan), var(--accent-primary))", borderRadius: "3px" }} />
                        </div>
                      </div>

                      <div>
                        <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "0.4rem" }}>
                          <span style={{ fontSize: "0.85rem", color: "var(--text-muted)" }}>Total Reach</span>
                          <strong style={{ fontSize: "0.9rem" }}>{stat.reach.toLocaleString()}</strong>
                        </div>
                        <div style={{ width: "100%", height: "6px", background: "rgba(255,255,255,0.1)", borderRadius: "3px", overflow: "hidden" }}>
                          <div style={{ width: `${Math.min((stat.reach / Math.max(...contentTypeStats.map(s => s.reach))) * 100, 100)}%`, height: "100%", background: "linear-gradient(90deg, #A78BFA, #7C3AED)", borderRadius: "3px" }} />
                        </div>
                      </div>

                      <div>
                        <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "0.4rem" }}>
                          <span style={{ fontSize: "0.85rem", color: "var(--text-muted)" }}>Total Engagement</span>
                          <strong style={{ color: "var(--accent-emerald)", fontSize: "0.9rem" }}>{stat.engagement.toLocaleString()}</strong>
                        </div>
                        <div style={{ width: "100%", height: "6px", background: "rgba(255,255,255,0.1)", borderRadius: "3px", overflow: "hidden" }}>
                          <div style={{ width: `${Math.min((stat.engagement / Math.max(...contentTypeStats.map(s => s.engagement))) * 100, 100)}%`, height: "100%", background: "linear-gradient(90deg, #34D399, #10B981)", borderRadius: "3px" }} />
                        </div>
                      </div>

                      <div style={{ borderTop: "1px solid rgba(255,255,255,0.1)", paddingTop: "0.75rem", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0.75rem" }}>
                        <div>
                          <div style={{ fontSize: "0.8rem", color: "var(--text-muted)", marginBottom: "0.2rem" }}>Avg per Content</div>
                          <div style={{ fontSize: "0.9rem", fontWeight: 600 }}>{stat.avgImpressions.toLocaleString()}</div>
                          <div style={{ fontSize: "0.75rem", color: "var(--text-muted)" }}>impressions</div>
                        </div>
                        <div>
                          <div style={{ fontSize: "0.8rem", color: "var(--text-muted)", marginBottom: "0.2rem" }}>Engagement Rate</div>
                          <div style={{ fontSize: "0.9rem", fontWeight: 600, color: "var(--accent-emerald)" }}>{stat.reach > 0 ? ((stat.engagement / stat.reach) * 100).toFixed(2) : "0.00"}%</div>
                          <div style={{ fontSize: "0.75rem", color: "var(--text-muted)" }}>ER %</div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <div style={{ gridColumn: "1 / -1", textAlign: "center", padding: "2rem", color: "var(--text-muted)" }}>
                  No content data available for the selected timeframe
                </div>
              )}
            </div>
          );
        })()}

        {/* Top Performing Post by Platform Section */}
        <div style={{ marginTop: "2.5rem" }}>
          <h2 style={{ fontSize: "1.25rem", fontWeight: 800, marginBottom: "1.25rem", color: "var(--text-main)" }}>
            🏆 Top Performing Post by Platform
          </h2>

          {(() => {
            // Get top post per platform for the selected timeframe
            const topPostsByPlatform = React.useMemo(() => {
              const platformMap = {};
              
              filteredContents.forEach(item => {
                const platform = item.platform || "Unknown";
                if (!platformMap[platform]) {
                  platformMap[platform] = item;
                } else {
                  // Compare by impressions
                  if ((item.impressions || 0) > (platformMap[platform].impressions || 0)) {
                    platformMap[platform] = item;
                  }
                }
              });

              // Convert to array and sort by impressions
              return Object.values(platformMap).sort((a, b) => (b.impressions || 0) - (a.impressions || 0));
            }, [filteredContents]);

            return (
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "1.25rem" }}>
                {topPostsByPlatform.length > 0 ? (
                  topPostsByPlatform.map((post, idx) => {
                    const engagement = (post.likes || 0) + (post.comments || 0) + (post.shares || 0) + (post.saves || 0);
                    const er = post.reach > 0 ? ((engagement / post.reach) * 100).toFixed(2) : "0.00";
                    const caption = String(post.caption || "").substring(0, 100);
                    const captionTrunc = caption.length > 100 ? caption.substring(0, 97) + "..." : caption;

                    return (
                      <div
                        key={idx}
                        style={{
                          background: "linear-gradient(135deg, rgba(6, 182, 212, 0.05), rgba(59, 130, 246, 0.05))",
                          border: "1px solid rgba(6, 182, 212, 0.2)",
                          borderRadius: "12px",
                          padding: "1.25rem",
                          backdropFilter: "blur(10px)",
                          display: "flex",
                          flexDirection: "column",
                          gap: "1rem"
                        }}
                      >
                        {/* Platform Badge */}
                        <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", justifyContent: "space-between" }}>
                          <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
                            <div style={{
                              width: "40px", height: "40px", borderRadius: "8px",
                              background: idx === 0 ? "linear-gradient(135deg, var(--accent-cyan), var(--accent-primary))" : "rgba(59, 130, 246, 0.2)",
                              display: "flex", alignItems: "center", justifyContent: "center",
                              fontSize: "1.25rem", fontWeight: 700,
                              color: idx === 0 ? "#fff" : "var(--accent-primary)"
                            }}>
                              {idx + 1}
                            </div>
                            <div>
                              <div style={{ fontSize: "0.9rem", fontWeight: 700, color: "var(--text-main)" }}>{post.platform}</div>
                              <div style={{ fontSize: "0.75rem", color: "var(--text-muted)" }}>Posted {post.uploadDate || "N/A"}</div>
                            </div>
                          </div>
                          {idx === 0 && (
                            <div style={{
                              padding: "0.4rem 0.8rem", background: "linear-gradient(135deg, var(--accent-cyan), var(--accent-primary))",
                              borderRadius: "6px", fontSize: "0.7rem", fontWeight: 700, color: "#fff"
                            }}>
                              TOP
                            </div>
                          )}
                        </div>

                        {/* Caption */}
                        <div style={{ fontSize: "0.85rem", color: "var(--text-secondary)", lineHeight: 1.4 }}>
                          "{captionTrunc}"
                        </div>

                        {/* Stats Grid */}
                        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0.75rem", paddingTop: "0.75rem", borderTop: "1px solid rgba(255, 255, 255, 0.1)" }}>
                          <div>
                            <div style={{ fontSize: "0.75rem", color: "var(--text-muted)", marginBottom: "0.3rem", fontWeight: 600 }}>Impressions</div>
                            <div style={{ fontSize: "1.1rem", fontWeight: 800, color: "var(--accent-cyan)" }}>
                              {(post.impressions || 0).toLocaleString()}
                            </div>
                          </div>
                          <div>
                            <div style={{ fontSize: "0.75rem", color: "var(--text-muted)", marginBottom: "0.3rem", fontWeight: 600 }}>Reach</div>
                            <div style={{ fontSize: "1.1rem", fontWeight: 800 }}>
                              {(post.reach || 0).toLocaleString()}
                            </div>
                          </div>
                          <div>
                            <div style={{ fontSize: "0.75rem", color: "var(--text-muted)", marginBottom: "0.3rem", fontWeight: 600 }}>Engagement</div>
                            <div style={{ fontSize: "1.1rem", fontWeight: 800, color: "var(--accent-emerald)" }}>
                              {engagement.toLocaleString()}
                            </div>
                          </div>
                          <div>
                            <div style={{ fontSize: "0.75rem", color: "var(--text-muted)", marginBottom: "0.3rem", fontWeight: 600 }}>ER Rate</div>
                            <div style={{ fontSize: "1.1rem", fontWeight: 800, color: "var(--accent-primary)" }}>
                              {er}%
                            </div>
                          </div>
                        </div>

                        {/* Detailed Breakdown */}
                        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr 1fr", gap: "0.5rem", fontSize: "0.75rem", paddingTop: "0.5rem" }}>
                          <div style={{ textAlign: "center", padding: "0.5rem", background: "rgba(255, 255, 255, 0.05)", borderRadius: "6px" }}>
                            <div style={{ color: "var(--text-muted)" }}>Likes</div>
                            <div style={{ fontWeight: 700, marginTop: "0.2rem" }}>{(post.likes || 0).toLocaleString()}</div>
                          </div>
                          <div style={{ textAlign: "center", padding: "0.5rem", background: "rgba(255, 255, 255, 0.05)", borderRadius: "6px" }}>
                            <div style={{ color: "var(--text-muted)" }}>Comments</div>
                            <div style={{ fontWeight: 700, marginTop: "0.2rem" }}>{(post.comments || 0).toLocaleString()}</div>
                          </div>
                          <div style={{ textAlign: "center", padding: "0.5rem", background: "rgba(255, 255, 255, 0.05)", borderRadius: "6px" }}>
                            <div style={{ color: "var(--text-muted)" }}>Shares</div>
                            <div style={{ fontWeight: 700, marginTop: "0.2rem" }}>{(post.shares || 0).toLocaleString()}</div>
                          </div>
                          <div style={{ textAlign: "center", padding: "0.5rem", background: "rgba(255, 255, 255, 0.05)", borderRadius: "6px" }}>
                            <div style={{ color: "var(--text-muted)" }}>Saves</div>
                            <div style={{ fontWeight: 700, marginTop: "0.2rem" }}>{(post.saves || 0).toLocaleString()}</div>
                          </div>
                        </div>
                      </div>
                    );
                  })
                ) : (
                  <div style={{ gridColumn: "1 / -1", textAlign: "center", padding: "2rem", color: "var(--text-muted)" }}>
                    No posts available for the selected timeframe and filters
                  </div>
                )}
              </div>
            );
          })()}
        </div>
      </div>
    </div>
  );
};
