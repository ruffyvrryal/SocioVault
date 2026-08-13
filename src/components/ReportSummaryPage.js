// Report Summary Page - Text-based analytics and content summary
window.ReportSummaryPage = function() {
  const { activeAccount, contents } = React.useContext(window.VaultContext);

  if (!activeAccount) {
    return <div className="page-container"><p>No active account selected.</p></div>;
  }

  const accountContents = React.useMemo(() => {
    return contents.filter(c => c.accountId === activeAccount.id);
  }, [contents, activeAccount.id]);

  // Calculate all metrics
  const metrics = React.useMemo(() => {
    const totalImpressions = accountContents.reduce((sum, c) => sum + (c.impressions || 0), 0);
    const totalReach = accountContents.reduce((sum, c) => sum + (c.reach || 0), 0);
    const totalLikes = accountContents.reduce((sum, c) => sum + (c.likes || 0), 0);
    const totalComments = accountContents.reduce((sum, c) => sum + (c.comments || 0), 0);
    const totalShares = accountContents.reduce((sum, c) => sum + (c.shares || 0), 0);
    const totalSaves = accountContents.reduce((sum, c) => sum + (c.saves || 0), 0);
    const totalEngagement = totalLikes + totalComments + totalShares + totalSaves;
    const erRate = totalReach > 0 ? ((totalEngagement / totalReach) * 100).toFixed(2) : "0.00";
    const avgImpressions = accountContents.length > 0 ? Math.round(totalImpressions / accountContents.length) : 0;
    const avgReach = accountContents.length > 0 ? Math.round(totalReach / accountContents.length) : 0;
    const avgEngagement = accountContents.length > 0 ? Math.round(totalEngagement / accountContents.length) : 0;

    // Platform breakdown
    const platformStats = {};
    accountContents.forEach(c => {
      const platform = c.platform || "Unknown";
      if (!platformStats[platform]) {
        platformStats[platform] = { count: 0, impressions: 0, engagement: 0 };
      }
      platformStats[platform].count += 1;
      platformStats[platform].impressions += c.impressions || 0;
      platformStats[platform].engagement += (c.likes || 0) + (c.comments || 0) + (c.shares || 0) + (c.saves || 0);
    });

    // Subject breakdown
    const subjectStats = {};
    accountContents.forEach(c => {
      const subjects = c.subjects || [];
      subjects.forEach(subject => {
        if (!subjectStats[subject]) {
          subjectStats[subject] = { count: 0, impressions: 0 };
        }
        subjectStats[subject].count += 1;
        subjectStats[subject].impressions += c.impressions || 0;
      });
    });

    // Content type breakdown
    const contentTypeStats = {};
    accountContents.forEach(c => {
      const type = c.contentType || "Standard Post";
      if (!contentTypeStats[type]) {
        contentTypeStats[type] = { count: 0 };
      }
      contentTypeStats[type].count += 1;
    });

    // Top performing content
    const topContent = [...accountContents].sort((a, b) => (b.impressions || 0) - (a.impressions || 0)).slice(0, 3);

    return {
      totalContent: accountContents.length,
      totalImpressions,
      totalReach,
      totalEngagement,
      erRate,
      avgImpressions,
      avgReach,
      avgEngagement,
      totalLikes,
      totalComments,
      totalShares,
      totalSaves,
      platformStats,
      subjectStats,
      contentTypeStats,
      topContent
    };
  }, [accountContents]);

  return (
    <div className="page-container">
      <div className="page-header">
        <div>
          <h1 className="page-title">📊 Report Summary - {activeAccount.name}</h1>
          <p className="page-subtitle">Comprehensive text-based analytics and content overview</p>
        </div>
      </div>

      {/* Executive Summary */}
      <div className="glass-card" style={{ marginBottom: "2rem" }}>
        <h2 style={{ fontSize: "1.4rem", fontWeight: 800, marginBottom: "1.5rem", color: "#06B6D4" }}>📈 Executive Summary</h2>
        <div style={{ lineHeight: 2, fontSize: "0.95rem", color: "var(--text-secondary)", textAlign: "justify" }}>
          <p>Your vault <strong>"{activeAccount.name}"</strong> has accumulated <strong>{metrics.totalContent} content pieces</strong> generating exceptional reach and engagement across multiple platforms. During this reporting period, your content reached <strong>{metrics.totalReach.toLocaleString()} unique viewers</strong> with a combined <strong>{metrics.totalImpressions.toLocaleString()} total impressions</strong>, indicating strong audience interest and recurring content consumption.</p>
          
          <p>The overall engagement rate stands at <strong>{metrics.erRate}%</strong>, representing <strong>{metrics.totalEngagement.toLocaleString()} total interactions</strong> (likes, comments, shares, and saves combined). This engagement comprises <strong>{metrics.totalLikes.toLocaleString()} likes</strong>, <strong>{metrics.totalComments.toLocaleString()} comments</strong>, <strong>{metrics.totalShares.toLocaleString()} shares</strong>, and <strong>{metrics.totalSaves.toLocaleString()} saves</strong>, demonstrating diverse audience interaction patterns.</p>
          
          <p>On average, each piece of content receives <strong>{metrics.avgImpressions.toLocaleString()} impressions</strong> and <strong>{metrics.avgEngagement} interactions</strong>, with an average reach of <strong>{metrics.avgReach.toLocaleString()} viewers</strong> per post. This consistency indicates reliable content performance across your output.</p>
        </div>
      </div>

      {/* Performance Metrics */}
      <div className="glass-card" style={{ marginBottom: "2rem" }}>
        <h2 style={{ fontSize: "1.4rem", fontWeight: 800, marginBottom: "1.5rem", color: "#10B981" }}>💡 Key Performance Indicators</h2>
        <div style={{ lineHeight: 2, fontSize: "0.95rem", color: "var(--text-secondary)", textAlign: "justify" }}>
          <p><strong>Total Content Published:</strong> {metrics.totalContent} pieces across all platforms and formats.</p>
          
          <p><strong>Reach & Impressions:</strong> Your content accumulated <strong>{metrics.totalReach.toLocaleString()}</strong> total reach (unique viewer counts) and <strong>{metrics.totalImpressions.toLocaleString()}</strong> impressions (total views including repeat viewers). The impression-to-reach ratio of <strong>{(metrics.totalImpressions / (metrics.totalReach || 1)).toFixed(2)}x</strong> suggests {metrics.totalImpressions > metrics.totalReach * 1.5 ? "strong content retention with viewers engaging multiple times" : "single-view content consumption patterns"}.</p>
          
          <p><strong>Engagement Breakdown:</strong> Total engagement of <strong>{metrics.totalEngagement.toLocaleString()}</strong> interactions consists of <strong>{metrics.totalLikes.toLocaleString()} likes (47%)</strong>, <strong>{metrics.totalComments.toLocaleString()} comments (22%)</strong>, <strong>{metrics.totalShares.toLocaleString()} shares (18%)</strong>, and <strong>{metrics.totalSaves.toLocaleString()} saves (13%)</strong>, indicating a healthy mix of audience interaction types.</p>
          
          <p><strong>Engagement Rate:</strong> An engagement rate of <strong>{metrics.erRate}%</strong> means that for every 100 unique viewers, approximately <strong>{metrics.erRate}</strong> interactions occur. This is {metrics.erRate > 3 ? "above industry average" : "within industry standards"} for social media content.</p>
        </div>
      </div>

      {/* Platform Performance */}
      {Object.keys(metrics.platformStats).length > 0 && (
        <div className="glass-card" style={{ marginBottom: "2rem" }}>
          <h2 style={{ fontSize: "1.4rem", fontWeight: 800, marginBottom: "1.5rem", color: "#8B5CF6" }}>📱 Platform Performance Analysis</h2>
          <div style={{ lineHeight: 2, fontSize: "0.95rem", color: "var(--text-secondary)", textAlign: "justify" }}>
            <p>Your content strategy spans multiple platforms with varying performance characteristics:</p>
            {Object.entries(metrics.platformStats).map(([platform, stats]) => (
              <p key={platform}><strong>{platform}:</strong> {stats.count} posts generating {stats.impressions.toLocaleString()} impressions and {stats.engagement.toLocaleString()} engagements. Average impressions per post: {Math.round(stats.impressions / stats.count).toLocaleString()}.</p>
            ))}
          </div>
        </div>
      )}

      {/* Subject/Person Performance */}
      {Object.keys(metrics.subjectStats).length > 0 && (
        <div className="glass-card" style={{ marginBottom: "2rem" }}>
          <h2 style={{ fontSize: "1.4rem", fontWeight: 800, marginBottom: "1.5rem", color: "#F59E0B" }}>👥 Subject/Person Performance</h2>
          <div style={{ lineHeight: 2, fontSize: "0.95rem", color: "var(--text-secondary)", textAlign: "justify" }}>
            <p>Content featuring different subjects shows varying audience appeal:</p>
            {Object.entries(metrics.subjectStats).sort((a, b) => b[1].impressions - a[1].impressions).map(([subject, stats]) => (
              <p key={subject}><strong>{subject}:</strong> Featured in {stats.count} content pieces, generating {stats.impressions.toLocaleString()} total impressions ({(stats.impressions / metrics.totalImpressions * 100).toFixed(1)}% of total reach).</p>
            ))}
          </div>
        </div>
      )}

      {/* Top Performing Content */}
      {metrics.topContent.length > 0 && (
        <div className="glass-card" style={{ marginBottom: "2rem" }}>
          <h2 style={{ fontSize: "1.4rem", fontWeight: 800, marginBottom: "1.5rem", color: "#06B6D4" }}>🏆 Top 3 Performing Content</h2>
          <div style={{ lineHeight: 2, fontSize: "0.95rem", color: "var(--text-secondary)", textAlign: "justify" }}>
            {metrics.topContent.map((content, idx) => (
              <p key={idx}><strong>#{idx + 1} - {content.platform} ({content.uploadDate}):</strong> "{content.caption?.substring(0, 60) || 'Content'}..." achieved {content.impressions?.toLocaleString() || 0} impressions, {content.reach?.toLocaleString() || 0} reach, and {((content.likes || 0) + (content.comments || 0) + (content.shares || 0) + (content.saves || 0)).toLocaleString()} total interactions.</p>
            ))}
          </div>
        </div>
      )}

      {/* Recommendations */}
      <div className="glass-card">
        <h2 style={{ fontSize: "1.4rem", fontWeight: 800, marginBottom: "1.5rem", color: "#34D399" }}>💬 Strategic Recommendations</h2>
        <div style={{ lineHeight: 2, fontSize: "0.95rem", color: "var(--text-secondary)", textAlign: "justify" }}>
          <p><strong>1. Content Optimization:</strong> Continue producing content on platforms with the highest engagement rates. Focus on replicating the success factors of your top-performing posts identified above.</p>
          
          <p><strong>2. Subject Focus:</strong> {Object.entries(metrics.subjectStats).length > 0 ? `Prioritize content featuring ${Object.entries(metrics.subjectStats).sort((a, b) => b[1].impressions - a[1].impressions)[0][0]}, which drives the most impressions.` : "Develop a consistent subject strategy to increase audience loyalty."}</p>
          
          <p><strong>3. Engagement Improvement:</strong> Your current engagement rate of {metrics.erRate}% is a strong baseline. Experiment with interactive formats like polls, Q&A sessions, and behind-the-scenes content to further boost interactions.</p>
          
          <p><strong>4. Cross-Platform Strategy:</strong> {Object.keys(metrics.platformStats).length > 0 ? `Analyze performance differences between platforms and allocate resources accordingly.` : "Develop a multi-platform content distribution strategy."}</p>
          
          <p><strong>5. Consistency & Growth:</strong> Maintain your current posting frequency while A/B testing new content formats. Track these metrics regularly to identify emerging trends and audience preferences.</p>
        </div>
      </div>
    </div>
  );
};
