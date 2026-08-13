// TimeframeAnalyticsPage Component - All-Time, Monthly, and Weekly Reporting
window.TimeframeAnalyticsPage = function() {
  const { activeAccount, contents } = React.useContext(window.VaultContext);
  const [timeframe, setTimeframe] = React.useState("all"); // 'all', 'monthly', 'weekly'
  const [selectedPlatform, setSelectedPlatform] = React.useState("All");
  const [selectedMonth, setSelectedMonth] = React.useState(() => {
    const now = new Date();
    return `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}`;
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
              <label style={{ fontSize: "0.9rem", fontWeight: 600, color: "var(--text-muted)" }}>Month & Year:</label>
              <input 
                type="month"
                value={selectedMonth}
                onChange={e => setSelectedMonth(e.target.value)}
                className="form-input"
                style={{ width: "auto" }}
              />
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
    </div>
  );
};
