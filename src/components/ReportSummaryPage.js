// ReportSummaryPage — Professional Analytics Report
window.ReportSummaryPage = function() {
  const { activeAccount, contents } = React.useContext(window.VaultContext);

  if (!activeAccount) {
    return (
      <div className="page-container">
        <div className="glass-card" style={{ textAlign: "center", padding: "4rem 2rem" }}>
          <i data-lucide="file-bar-chart" style={{ width: "48px", height: "48px", color: "var(--text-subtle)", marginBottom: "1rem" }}></i>
          <p style={{ color: "var(--text-muted)" }}>No active account selected.</p>
        </div>
      </div>
    );
  }

  // ─── Data ───────────────────────────────────────────────────────────────────
  const accountContents = React.useMemo(
    () => contents.filter(c => c.accountId === activeAccount.id),
    [contents, activeAccount.id]
  );

  const metrics = React.useMemo(() => {
    const totalImpressions = accountContents.reduce((s, c) => s + (c.impressions || 0), 0);
    const totalReach       = accountContents.reduce((s, c) => s + (c.reach       || 0), 0);
    const totalLikes       = accountContents.reduce((s, c) => s + (c.likes       || 0), 0);
    const totalComments    = accountContents.reduce((s, c) => s + (c.comments    || 0), 0);
    const totalShares      = accountContents.reduce((s, c) => s + (c.shares      || 0), 0);
    const totalSaves       = accountContents.reduce((s, c) => s + (c.saves       || 0), 0);
    const totalEngagement  = totalLikes + totalComments + totalShares + totalSaves;

    const erRate       = totalReach > 0 ? ((totalEngagement / totalReach) * 100).toFixed(2) : "0.00";
    const irRatio      = totalReach > 0 ? (totalImpressions / totalReach).toFixed(2) : "0.00";
    const avgImp       = accountContents.length > 0 ? Math.round(totalImpressions / accountContents.length) : 0;
    const avgReach     = accountContents.length > 0 ? Math.round(totalReach       / accountContents.length) : 0;
    const avgEng       = accountContents.length > 0 ? Math.round(totalEngagement  / accountContents.length) : 0;

    // Engagement breakdown with real percentages
    const likePct    = totalEngagement > 0 ? ((totalLikes    / totalEngagement) * 100).toFixed(1) : "0.0";
    const commentPct = totalEngagement > 0 ? ((totalComments / totalEngagement) * 100).toFixed(1) : "0.0";
    const sharePct   = totalEngagement > 0 ? ((totalShares   / totalEngagement) * 100).toFixed(1) : "0.0";
    const savePct    = totalEngagement > 0 ? ((totalSaves    / totalEngagement) * 100).toFixed(1) : "0.0";

    // Platform breakdown
    const platformStats = {};
    accountContents.forEach(c => {
      const p = c.platform || "Unknown";
      if (!platformStats[p]) platformStats[p] = { count: 0, impressions: 0, reach: 0, engagement: 0 };
      platformStats[p].count       += 1;
      platformStats[p].impressions += (c.impressions || 0);
      platformStats[p].reach       += (c.reach       || 0);
      platformStats[p].engagement  += (c.likes || 0) + (c.comments || 0) + (c.shares || 0) + (c.saves || 0);
    });

    // Subject breakdown
    const subjectStats = {};
    accountContents.forEach(c => {
      (c.subjects || []).forEach(sub => {
        if (!subjectStats[sub]) subjectStats[sub] = { count: 0, impressions: 0, engagement: 0 };
        subjectStats[sub].count       += 1;
        subjectStats[sub].impressions += (c.impressions || 0);
        subjectStats[sub].engagement  += (c.likes || 0) + (c.comments || 0) + (c.shares || 0) + (c.saves || 0);
      });
    });

    // Status breakdown
    const statusStats = {};
    accountContents.forEach(c => {
      const s = c.status || "Unknown";
      statusStats[s] = (statusStats[s] || 0) + 1;
    });

    // Date range
    const dates = accountContents.map(c => c.uploadDate).filter(Boolean).sort();
    const dateFrom = dates[0] || null;
    const dateTo   = dates[dates.length - 1] || null;

    // Top content
    const topContent = [...accountContents]
      .sort((a, b) => (b.impressions || 0) - (a.impressions || 0))
      .slice(0, 3);

    // Best performing platform
    const bestPlatform = Object.entries(platformStats)
      .sort((a, b) => b[1].impressions - a[1].impressions)[0] || null;

    // Best subject
    const bestSubject = Object.entries(subjectStats)
      .sort((a, b) => b[1].impressions - a[1].impressions)[0] || null;

    // Max platform impressions (for progress bars)
    const maxPlatformImp = Math.max(...Object.values(platformStats).map(p => p.impressions), 1);

    // Max subject impressions (for bars)
    const maxSubjectImp = Math.max(...Object.values(subjectStats).map(s => s.impressions), 1);

    return {
      totalContent: accountContents.length,
      totalImpressions, totalReach, totalLikes, totalComments, totalShares, totalSaves,
      totalEngagement, erRate, irRatio,
      avgImp, avgReach, avgEng,
      likePct, commentPct, sharePct, savePct,
      platformStats, subjectStats, statusStats,
      dateFrom, dateTo, topContent,
      bestPlatform, bestSubject,
      maxPlatformImp, maxSubjectImp
    };
  }, [accountContents]);

  // ─── Helpers ─────────────────────────────────────────────────────────────────
  const fmt   = n => n >= 1_000_000
    ? (n / 1_000_000).toFixed(1) + "M"
    : n >= 1_000
      ? (n / 1_000).toFixed(1) + "K"
      : n.toLocaleString();

  const fmtFull = n => n.toLocaleString();

  const fmtDate = d => {
    if (!d) return "—";
    const [y, m, day] = d.split("-");
    return new Date(+y, +m - 1, +day).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" });
  };

  const platformColor = p => ({
    "Instagram":   "#E1306C",
    "YouTube":     "#FF4444",
    "TikTok":      "#25F4EE",
    "X (Twitter)": "#60A5FA",
    "Facebook":    "#4B8FE4",
    "Threads":     "#E8EAED"
  })[p] || "var(--accent-primary)";

  const platformIcon = p => ({
    "Instagram":   "instagram",
    "YouTube":     "youtube",
    "TikTok":      "music-2",
    "X (Twitter)": "twitter",
    "Facebook":    "facebook",
    "Threads":     "at-sign"
  })[p] || "globe";

  const erQuality = er => {
    const v = parseFloat(er);
    if (v >= 6)  return { label: "Exceptional", color: "#10B981" };
    if (v >= 3)  return { label: "Above Average", color: "#34D399" };
    if (v >= 1)  return { label: "Industry Standard", color: "#F59E0B" };
    return             { label: "Needs Improvement", color: "#F43F5E" };
  };

  const irQuality = ir => parseFloat(ir) > 1.5
    ? "strong content retention — viewers return to watch multiple times"
    : "typical single-view consumption pattern";

  const today = new Date().toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" });
  const erInfo = erQuality(metrics.erRate);

  // ─── DOCX Export ─────────────────────────────────────────────────────────────
  const handleExportDocx = () => {
    if (!window.docx) { alert("DOCX library not loaded."); return; }
    const { Document, Packer, Paragraph, TextRun, HeadingLevel, AlignmentType, BorderStyle, Table, TableRow, TableCell, WidthType, ShadingType } = window.docx;

    const titleParagraph = new Paragraph({
      children: [new TextRun({ text: "PERFORMANCE ANALYTICS REPORT", bold: true, size: 40, color: "7C3AED" })],
      alignment: AlignmentType.CENTER,
      spacing: { after: 100 }
    });

    const subTitle = new Paragraph({
      children: [new TextRun({ text: activeAccount.name, bold: true, size: 28, color: "06B6D4" })],
      alignment: AlignmentType.CENTER,
      spacing: { after: 200 }
    });

    const dateLine = new Paragraph({
      children: [new TextRun({ text: `Report Generated: ${today}`, size: 20, color: "6B7280", italics: true })],
      alignment: AlignmentType.CENTER,
      spacing: { after: 400 }
    });

    const makeHeading = (text, color = "8B5CF6") => new Paragraph({
      children: [new TextRun({ text, bold: true, size: 26, color })],
      spacing: { before: 400, after: 150 },
      border: { bottom: { style: BorderStyle.SINGLE, size: 4, color: "2D3748" } }
    });

    const makeParagraph = (text) => new Paragraph({
      children: [new TextRun({ text, size: 20, color: "C9D1D9" })],
      spacing: { after: 160 }
    });

    const makeBullet = (label, value) => new Paragraph({
      children: [
        new TextRun({ text: `${label}: `, bold: true, size: 20, color: "F0F6FC" }),
        new TextRun({ text: value, size: 20, color: "9CA3AF" })
      ],
      bullet: { level: 0 },
      spacing: { after: 80 }
    });

    const doc = new Document({
      sections: [{
        properties: {},
        children: [
          titleParagraph, subTitle, dateLine,

          makeHeading("EXECUTIVE SUMMARY", "06B6D4"),
          makeParagraph(
            `${activeAccount.name} has published ${metrics.totalContent} content pieces across ${Object.keys(metrics.platformStats).length} platform(s), ` +
            `generating ${fmtFull(metrics.totalImpressions)} total impressions and reaching ${fmtFull(metrics.totalReach)} unique viewers. ` +
            `Total engagement stands at ${fmtFull(metrics.totalEngagement)} interactions, representing an engagement rate of ${metrics.erRate}% — rated "${erInfo.label}".`
          ),

          makeHeading("KEY PERFORMANCE INDICATORS", "10B981"),
          makeBullet("Total Content Published", `${metrics.totalContent} pieces`),
          makeBullet("Total Impressions (Views)", fmtFull(metrics.totalImpressions)),
          makeBullet("Total Reach (Unique Viewers)", fmtFull(metrics.totalReach)),
          makeBullet("Total Engagement", fmtFull(metrics.totalEngagement)),
          makeBullet("Engagement Rate (ER%)", `${metrics.erRate}% — ${erInfo.label}`),
          makeBullet("Impression/Reach Ratio", `${metrics.irRatio}x — ${irQuality(metrics.irRatio)}`),
          makeBullet("Average Impressions per Post", fmtFull(metrics.avgImp)),
          makeBullet("Average Reach per Post", fmtFull(metrics.avgReach)),
          makeBullet("Average Engagement per Post", fmtFull(metrics.avgEng)),
          makeBullet("Reporting Period", metrics.dateFrom ? `${fmtDate(metrics.dateFrom)} → ${fmtDate(metrics.dateTo)}` : "All time"),

          makeHeading("ENGAGEMENT BREAKDOWN", "8B5CF6"),
          makeBullet("Likes",    `${fmtFull(metrics.totalLikes)}    (${metrics.likePct}%)`),
          makeBullet("Comments", `${fmtFull(metrics.totalComments)} (${metrics.commentPct}%)`),
          makeBullet("Shares",   `${fmtFull(metrics.totalShares)}   (${metrics.sharePct}%)`),
          makeBullet("Saves",    `${fmtFull(metrics.totalSaves)}    (${metrics.savePct}%)`),

          makeHeading("PLATFORM PERFORMANCE", "F59E0B"),
          ...Object.entries(metrics.platformStats).map(([platform, stats]) =>
            makeBullet(platform,
              `${stats.count} posts · ${fmtFull(stats.impressions)} impressions · ` +
              `${fmtFull(stats.engagement)} engagements · ` +
              `ER ${stats.reach > 0 ? ((stats.engagement / stats.reach) * 100).toFixed(2) : "0.00"}%`
            )
          ),

          ...(Object.keys(metrics.subjectStats).length > 0 ? [
            makeHeading("SUBJECT / TALENT PERFORMANCE", "EC4899"),
            ...Object.entries(metrics.subjectStats)
              .sort((a, b) => b[1].impressions - a[1].impressions)
              .map(([sub, stats]) =>
                makeBullet(sub,
                  `${stats.count} appearances · ${fmtFull(stats.impressions)} impressions ` +
                  `(${(stats.impressions / Math.max(metrics.totalImpressions, 1) * 100).toFixed(1)}% of total)`
                )
              )
          ] : []),

          makeHeading("TOP 3 PERFORMING CONTENT", "06B6D4"),
          ...metrics.topContent.map((c, i) => makeBullet(
            `#${i + 1} — ${c.platform} (${fmtDate(c.uploadDate)})`,
            `"${(c.caption || "").substring(0, 80)}..." · ` +
            `${fmtFull(c.impressions || 0)} impressions · ` +
            `${fmtFull(c.reach || 0)} reach · ` +
            `${fmtFull((c.likes||0)+(c.comments||0)+(c.shares||0)+(c.saves||0))} engagements`
          )),

          makeHeading("STRATEGIC RECOMMENDATIONS", "34D399"),
          makeBullet("1. Replicate Top Performers",
            `Study the content format, posting time, and hashtags of your top-performing posts and build a repeatable template.`
          ),
          makeBullet("2. Double Down on Best Platform",
            metrics.bestPlatform
              ? `${metrics.bestPlatform[0]} drives the most impressions. Allocate more resources and posting frequency here.`
              : "Establish a clear primary platform and build your posting strategy around it."
          ),
          makeBullet("3. Prioritise High-Impact Talent",
            metrics.bestSubject
              ? `Content featuring ${metrics.bestSubject[0]} consistently drives the highest viewership — schedule more collaborations.`
              : "Identify and develop recurring on-screen talent to build audience familiarity."
          ),
          makeBullet("4. Improve Engagement Rate",
            `Your current ER of ${metrics.erRate}% is "${erInfo.label}". ` +
            "Introduce interactive formats — polls, Q&A, pinned comment threads — to push interactions higher."
          ),
          makeBullet("5. Diversify Engagement Types",
            `Saves (${metrics.savePct}%) indicate evergreen value — produce more how-to and reference content to boost saves. ` +
            `Shares (${metrics.sharePct}%) amplify organic reach — emotional or surprising hooks tend to maximise shares.`
          ),

          new Paragraph({
            children: [new TextRun({ text: `\nGenerated by SocioVault · ${today}`, size: 16, color: "484F58", italics: true })],
            alignment: AlignmentType.CENTER,
            spacing: { before: 600 }
          })
        ]
      }]
    });

    Packer.toBlob(doc).then(blob => {
      const url = URL.createObjectURL(blob);
      const a   = document.createElement("a");
      a.href     = url;
      a.download = `${activeAccount.name.replace(/\s+/g, "_")}_Report_${new Date().toISOString().slice(0,10)}.docx`;
      a.click();
      URL.revokeObjectURL(url);
    });
  };

  // ─── Render ──────────────────────────────────────────────────────────────────
  return (
    <div className="page-container">

      {/* ══ HERO COVER ══════════════════════════════════════════════════════════ */}
      <div className="report-hero">
        <div className="report-hero-content">
          <div className="report-title-eyebrow">
            <i data-lucide="file-bar-chart" style={{ width: "12px", height: "12px" }}></i>
            Performance Analytics Report
          </div>

          <h1 className="report-hero-title">{activeAccount.name}</h1>
          <p style={{ color: "var(--text-muted)", fontSize: "0.92rem", marginBottom: "0.5rem" }}>
            {activeAccount.description || "Social Media Analytics Overview"}
          </p>

          <div className="report-hero-meta">
            <div className="report-hero-meta-item">
              <i data-lucide="calendar" style={{ width: "13px", height: "13px" }}></i>
              <span>
                {metrics.dateFrom
                  ? `${fmtDate(metrics.dateFrom)} — ${fmtDate(metrics.dateTo)}`
                  : "All-Time Data"}
              </span>
            </div>
            <div className="report-hero-meta-item">
              <i data-lucide="layers" style={{ width: "13px", height: "13px" }}></i>
              <span>{metrics.totalContent} content pieces</span>
            </div>
            <div className="report-hero-meta-item">
              <i data-lucide="globe" style={{ width: "13px", height: "13px" }}></i>
              <span>{Object.keys(metrics.platformStats).length} platforms</span>
            </div>
            <div className="report-hero-meta-item">
              <i data-lucide="clock" style={{ width: "13px", height: "13px" }}></i>
              <span>Generated {today}</span>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div style={{ position: "absolute", top: "1.5rem", right: "1.5rem", display: "flex", gap: "0.6rem", flexWrap: "wrap" }}>
          <button
            className="btn btn-export btn-sm"
            onClick={handleExportDocx}
            title="Export as .docx"
          >
            <i data-lucide="download" style={{ width: "13px", height: "13px" }}></i>
            Export DOCX
          </button>
          <button
            className="btn btn-print btn-sm"
            onClick={() => window.print()}
            title="Print report"
          >
            <i data-lucide="printer" style={{ width: "13px", height: "13px" }}></i>
            Print
          </button>
        </div>
      </div>

      {/* ══ KPI STRIP ════════════════════════════════════════════════════════════ */}
      <div className="report-kpi-grid">

        {[
          { label: "Total Impressions",    value: fmt(metrics.totalImpressions), sub: fmtFull(metrics.totalImpressions) + " views",        color: "#06B6D4",  gradient: "linear-gradient(90deg, #06B6D4, #22D3EE)" },
          { label: "Total Reach",          value: fmt(metrics.totalReach),       sub: "unique viewers",                                    color: "#8B5CF6",  gradient: "linear-gradient(90deg, #8B5CF6, #A78BFA)" },
          { label: "Total Engagement",     value: fmt(metrics.totalEngagement),  sub: "likes + comments + shares + saves",                 color: "#10B981",  gradient: "linear-gradient(90deg, #10B981, #34D399)" },
          { label: "Engagement Rate",      value: metrics.erRate + "%",          sub: erInfo.label,                                        color: erInfo.color, gradient: `linear-gradient(90deg, ${erInfo.color}, ${erInfo.color}99)` },
          { label: "Avg Views / Post",     value: fmt(metrics.avgImp),           sub: "per content piece",                                 color: "#F59E0B",  gradient: "linear-gradient(90deg, #F59E0B, #FCD34D)" },
          { label: "Impression / Reach",   value: metrics.irRatio + "×",         sub: irQuality(metrics.irRatio).split(" — ")[0] || "ratio", color: "#EC4899", gradient: "linear-gradient(90deg, #EC4899, #F9A8D4)" }
        ].map((kpi, i) => (
          <div key={i} className="report-kpi-card">
            <div className="kpi-accent-bar" style={{ background: kpi.gradient }}></div>
            <div className="report-kpi-label">{kpi.label}</div>
            <div className="report-kpi-value" style={{ color: kpi.color }}>{kpi.value}</div>
            <div className="report-kpi-sub">{kpi.sub}</div>
          </div>
        ))}

      </div>

      {/* ══ EXECUTIVE SUMMARY ════════════════════════════════════════════════════ */}
      <div className="report-section" style={{ marginBottom: "1.5rem" }}>
        <div className="report-section-head">
          <div className="report-section-icon" style={{ background: "rgba(6,182,212,0.12)", border: "1px solid rgba(6,182,212,0.2)" }}>
            <span>📋</span>
          </div>
          <div>
            <div className="report-section-label">Executive Summary</div>
          </div>
        </div>
        <div className="report-section-body">
          <div className="insight-prose">
            <p>
              <strong>{activeAccount.name}</strong> has published{" "}
              <span className="metric-callout metric-callout-primary">{metrics.totalContent} pieces</span>{" "}
              of content across{" "}
              <span className="metric-callout metric-callout-cyan">{Object.keys(metrics.platformStats).length} platform{Object.keys(metrics.platformStats).length !== 1 ? "s" : ""}</span>,
              accumulating a total of{" "}
              <span className="metric-callout metric-callout-cyan">{fmtFull(metrics.totalImpressions)} impressions</span>{" "}
              and reaching{" "}
              <span className="metric-callout metric-callout-primary">{fmtFull(metrics.totalReach)} unique viewers</span>.
              The impression-to-reach ratio of <strong>{metrics.irRatio}×</strong> indicates {irQuality(metrics.irRatio)}.
            </p>
            <p>
              Audience interaction totals{" "}
              <span className="metric-callout metric-callout-emerald">{fmtFull(metrics.totalEngagement)} engagements</span>{" "}
              — yielding an overall engagement rate of{" "}
              <span className="metric-callout" style={{ background: `${erInfo.color}18`, color: erInfo.color, border: `1px solid ${erInfo.color}30` }}>
                {metrics.erRate}%
              </span>,
              classified as <strong style={{ color: erInfo.color }}>{erInfo.label}</strong> relative to industry benchmarks.
              On average, each content piece receives{" "}
              <strong>{fmtFull(metrics.avgImp)}</strong> views,{" "}
              <strong>{fmtFull(metrics.avgReach)}</strong> unique viewers, and{" "}
              <strong>{fmtFull(metrics.avgEng)}</strong> interactions.
            </p>
            {metrics.bestPlatform && (
              <p>
                The strongest-performing platform is{" "}
                <span className="metric-callout metric-callout-amber">{metrics.bestPlatform[0]}</span>{" "}
                with{" "}
                <strong>{fmtFull(metrics.bestPlatform[1].impressions)}</strong> total impressions
                across <strong>{metrics.bestPlatform[1].count}</strong> post{metrics.bestPlatform[1].count !== 1 ? "s" : ""}.
                {metrics.bestSubject && (
                  <> Content featuring <span className="metric-callout metric-callout-primary">{metrics.bestSubject[0]}</span>{" "}
                  drives the highest viewership among all tracked subjects.</>
                )}
              </p>
            )}
          </div>
        </div>
      </div>

      {/* ══ ENGAGEMENT BREAKDOWN + PLATFORM SIDE BY SIDE ═════════════════════════ */}
      <div className="report-two-col" style={{ marginBottom: "1.5rem" }}>

        {/* Engagement Breakdown */}
        <div className="report-section" style={{ marginBottom: 0 }}>
          <div className="report-section-head">
            <div className="report-section-icon" style={{ background: "rgba(139,92,246,0.12)", border: "1px solid rgba(139,92,246,0.2)" }}>
              <span>💬</span>
            </div>
            <div>
              <div className="report-section-label">Engagement Breakdown</div>
            </div>
          </div>
          <div className="report-section-body">

            {[
              { label: "Likes",    icon: "heart",      value: metrics.totalLikes,    pct: metrics.likePct,    color: "#F43F5E",  gradient: "linear-gradient(90deg, #F43F5E, #FB7185)" },
              { label: "Comments", icon: "message-circle", value: metrics.totalComments, pct: metrics.commentPct, color: "#8B5CF6",  gradient: "linear-gradient(90deg, #8B5CF6, #A78BFA)" },
              { label: "Shares",   icon: "repeat-2",   value: metrics.totalShares,   pct: metrics.sharePct,   color: "#06B6D4",  gradient: "linear-gradient(90deg, #06B6D4, #22D3EE)" },
              { label: "Saves",    icon: "bookmark",   value: metrics.totalSaves,    pct: metrics.savePct,    color: "#10B981",  gradient: "linear-gradient(90deg, #10B981, #34D399)" }
            ].map(item => (
              <div key={item.label} className="engagement-bar-row">
                <div className="engagement-bar-label">
                  <i data-lucide={item.icon} style={{ width: "14px", height: "14px", color: item.color, flexShrink: 0 }}></i>
                  {item.label}
                </div>
                <div className="engagement-bar-track">
                  <div
                    className="engagement-bar-fill"
                    style={{ width: `${item.pct}%`, background: item.gradient }}
                  ></div>
                </div>
                <div className="engagement-bar-value">{fmt(item.value)}</div>
                <div className="engagement-bar-pct">{item.pct}%</div>
              </div>
            ))}

            {/* Total row */}
            <div style={{
              marginTop: "1rem", paddingTop: "0.85rem",
              borderTop: "1px solid var(--border-color)",
              display: "flex", justifyContent: "space-between", alignItems: "center"
            }}>
              <span style={{ fontSize: "0.8rem", color: "var(--text-muted)", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.04em" }}>
                Total Interactions
              </span>
              <span style={{ fontSize: "1.2rem", fontWeight: 800, fontFamily: "var(--font-heading)", color: "var(--accent-emerald)" }}>
                {fmtFull(metrics.totalEngagement)}
              </span>
            </div>

            {/* Insight note */}
            <div style={{
              marginTop: "0.85rem", padding: "0.85rem 1rem",
              background: "rgba(139,92,246,0.06)", borderRadius: "var(--radius-sm)",
              border: "1px solid rgba(139,92,246,0.1)"
            }}>
              <p style={{ fontSize: "0.8rem", color: "var(--text-muted)", lineHeight: 1.6, margin: 0 }}>
                <strong style={{ color: "var(--accent-primary-light)" }}>💡 Insight: </strong>
                {parseFloat(metrics.savePct) >= 15
                  ? `High save rate (${metrics.savePct}%) signals strong evergreen/reference content value.`
                  : parseFloat(metrics.sharePct) >= 15
                    ? `Strong share rate (${metrics.sharePct}%) is driving significant organic amplification.`
                    : parseFloat(metrics.commentPct) >= 15
                      ? `Above-average comment rate (${metrics.commentPct}%) indicates high audience conversational engagement.`
                      : `Likes dominate at ${metrics.likePct}% — experiment with CTAs to convert passive likes into saves and shares.`
                }
              </p>
            </div>
          </div>
        </div>

        {/* Content Status */}
        <div className="report-section" style={{ marginBottom: 0 }}>
          <div className="report-section-head">
            <div className="report-section-icon" style={{ background: "rgba(245,158,11,0.12)", border: "1px solid rgba(245,158,11,0.2)" }}>
              <span>📊</span>
            </div>
            <div>
              <div className="report-section-label">Content Status Overview</div>
            </div>
          </div>
          <div className="report-section-body">

            {/* Status cards */}
            {Object.entries(metrics.statusStats).length > 0 ? (
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0.85rem", marginBottom: "1.25rem" }}>
                {[
                  { key: "Uploaded",  label: "Published",  color: "#10B981", gradient: "linear-gradient(135deg, rgba(16,185,129,0.15), rgba(16,185,129,0.05))", border: "rgba(16,185,129,0.3)",  icon: "check-circle" },
                  { key: "Scheduled", label: "Scheduled",  color: "#06B6D4", gradient: "linear-gradient(135deg, rgba(6,182,212,0.15), rgba(6,182,212,0.05))",   border: "rgba(6,182,212,0.3)",   icon: "clock"        },
                  { key: "Privated",  label: "Privated",   color: "#F59E0B", gradient: "linear-gradient(135deg, rgba(245,158,11,0.15), rgba(245,158,11,0.05))", border: "rgba(245,158,11,0.3)",  icon: "eye-off"      },
                  { key: "Deleted",   label: "Archived",   color: "#F43F5E", gradient: "linear-gradient(135deg, rgba(244,63,94,0.12), rgba(244,63,94,0.04))",   border: "rgba(244,63,94,0.25)",  icon: "archive"      }
                ].map(s => {
                  const count = metrics.statusStats[s.key] || 0;
                  if (count === 0) return null;
                  const pct = metrics.totalContent > 0 ? ((count / metrics.totalContent) * 100).toFixed(0) : 0;
                  return (
                    <div key={s.key} style={{
                      padding: "1rem", borderRadius: "var(--radius-md)",
                      background: s.gradient, border: `1px solid ${s.border}`
                    }}>
                      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "0.5rem" }}>
                        <i data-lucide={s.icon} style={{ width: "15px", height: "15px", color: s.color }}></i>
                        <span style={{ fontSize: "0.7rem", color: s.color, fontWeight: 700 }}>{pct}%</span>
                      </div>
                      <div style={{ fontSize: "1.6rem", fontWeight: 800, fontFamily: "var(--font-heading)", color: s.color, lineHeight: 1 }}>
                        {count}
                      </div>
                      <div style={{ fontSize: "0.72rem", color: "var(--text-muted)", fontWeight: 600, marginTop: "0.2rem", textTransform: "uppercase", letterSpacing: "0.04em" }}>
                        {s.label}
                      </div>
                    </div>
                  );
                })}
              </div>
            ) : (
              <p style={{ color: "var(--text-muted)", fontSize: "0.88rem" }}>No status data available.</p>
            )}

            {/* Publication health bar */}
            {metrics.totalContent > 0 && (
              <div>
                <div style={{ fontSize: "0.78rem", color: "var(--text-muted)", fontWeight: 600, marginBottom: "0.5rem", textTransform: "uppercase", letterSpacing: "0.04em" }}>
                  Publication Health
                </div>
                <div className="progress-bar-track progress-bar-track-lg">
                  <div
                    className="progress-bar-fill progress-bar-fill-emerald"
                    style={{ width: `${((metrics.statusStats["Uploaded"] || 0) / metrics.totalContent) * 100}%` }}
                  ></div>
                </div>
                <div style={{ display: "flex", justifyContent: "space-between", marginTop: "0.35rem" }}>
                  <span style={{ fontSize: "0.75rem", color: "var(--accent-emerald)" }}>
                    {metrics.statusStats["Uploaded"] || 0} published
                  </span>
                  <span style={{ fontSize: "0.75rem", color: "var(--text-muted)" }}>
                    {metrics.totalContent} total
                  </span>
                </div>
              </div>
            )}

            {/* Avg engagement rate note */}
            <div style={{
              marginTop: "1rem", padding: "0.85rem 1rem",
              background: `${erInfo.color}0F`, borderRadius: "var(--radius-sm)",
              border: `1px solid ${erInfo.color}25`
            }}>
              <div style={{ fontSize: "0.72rem", textTransform: "uppercase", letterSpacing: "0.05em", color: "var(--text-subtle)", fontWeight: 700, marginBottom: "0.35rem" }}>
                Overall Engagement Health
              </div>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                <span style={{ fontSize: "1.5rem", fontWeight: 800, fontFamily: "var(--font-heading)", color: erInfo.color }}>
                  {metrics.erRate}%
                </span>
                <span style={{
                  padding: "0.25rem 0.65rem", borderRadius: "var(--radius-full)",
                  background: `${erInfo.color}18`, border: `1px solid ${erInfo.color}30`,
                  fontSize: "0.75rem", fontWeight: 700, color: erInfo.color
                }}>
                  {erInfo.label}
                </span>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* ══ PLATFORM PERFORMANCE ════════════════════════════════════════════════ */}
      {Object.keys(metrics.platformStats).length > 0 && (
        <div className="report-section" style={{ marginBottom: "1.5rem" }}>
          <div className="report-section-head">
            <div className="report-section-icon" style={{ background: "rgba(99,102,241,0.12)", border: "1px solid rgba(99,102,241,0.2)" }}>
              <span>📱</span>
            </div>
            <div>
              <div className="report-section-label">Platform Performance Analysis</div>
            </div>
          </div>
          <div className="report-section-body">
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "1rem" }}>
              {Object.entries(metrics.platformStats)
                .sort((a, b) => b[1].impressions - a[1].impressions)
                .map(([platform, stats]) => {
                  const pct      = Math.round((stats.impressions / metrics.maxPlatformImp) * 100);
                  const er       = stats.reach > 0 ? ((stats.engagement / stats.reach) * 100).toFixed(2) : "0.00";
                  const avgViews = stats.count > 0 ? Math.round(stats.impressions / stats.count) : 0;
                  const pColor   = platformColor(platform);

                  return (
                    <div key={platform} className="platform-stat-card">
                      <div className="platform-stat-header">
                        <div style={{ display: "flex", alignItems: "center", gap: "0.6rem" }}>
                          <div style={{
                            width: "32px", height: "32px", borderRadius: "9px",
                            background: `${pColor}18`, border: `1px solid ${pColor}30`,
                            display: "flex", alignItems: "center", justifyContent: "center"
                          }}>
                            <i data-lucide={platformIcon(platform)} style={{ width: "14px", height: "14px", color: pColor }}></i>
                          </div>
                          <div className="platform-stat-name" style={{ color: pColor }}>{platform}</div>
                        </div>
                        <span className="platform-stat-count">{stats.count} post{stats.count !== 1 ? "s" : ""}</span>
                      </div>

                      {/* Impression progress bar */}
                      <div>
                        <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "0.35rem" }}>
                          <span style={{ fontSize: "0.72rem", color: "var(--text-subtle)", textTransform: "uppercase", letterSpacing: "0.04em", fontWeight: 600 }}>Impressions share</span>
                          <span style={{ fontSize: "0.78rem", fontWeight: 700, color: pColor }}>{pct}%</span>
                        </div>
                        <div className="progress-bar-track">
                          <div
                            className="progress-bar-fill"
                            style={{ width: `${pct}%`, background: `linear-gradient(90deg, ${pColor}, ${pColor}99)` }}
                          ></div>
                        </div>
                      </div>

                      <div className="platform-stat-metrics">
                        <div className="platform-stat-metric-item">
                          <span className="platform-stat-metric-lbl">Impressions</span>
                          <span className="platform-stat-metric-val" style={{ color: "var(--accent-cyan)" }}>{fmt(stats.impressions)}</span>
                        </div>
                        <div className="platform-stat-metric-item">
                          <span className="platform-stat-metric-lbl">Reach</span>
                          <span className="platform-stat-metric-val">{fmt(stats.reach)}</span>
                        </div>
                        <div className="platform-stat-metric-item">
                          <span className="platform-stat-metric-lbl">Engagement</span>
                          <span className="platform-stat-metric-val" style={{ color: "var(--accent-emerald)" }}>{fmt(stats.engagement)}</span>
                        </div>
                        <div className="platform-stat-metric-item">
                          <span className="platform-stat-metric-lbl">Avg. ER %</span>
                          <span className="platform-stat-metric-val" style={{ color: "var(--accent-primary)" }}>{er}%</span>
                        </div>
                        <div className="platform-stat-metric-item" style={{ gridColumn: "1 / -1" }}>
                          <span className="platform-stat-metric-lbl">Avg views / post</span>
                          <span className="platform-stat-metric-val" style={{ color: "var(--accent-amber)" }}>{fmt(avgViews)}</span>
                        </div>
                      </div>
                    </div>
                  );
                })}
            </div>
          </div>
        </div>
      )}

      {/* ══ SUBJECT / TALENT PERFORMANCE ════════════════════════════════════════ */}
      {Object.keys(metrics.subjectStats).length > 0 && (
        <div className="report-section" style={{ marginBottom: "1.5rem" }}>
          <div className="report-section-head">
            <div className="report-section-icon" style={{ background: "rgba(236,72,153,0.12)", border: "1px solid rgba(236,72,153,0.2)" }}>
              <span>👥</span>
            </div>
            <div>
              <div className="report-section-label">Subject &amp; Talent Performance</div>
            </div>
          </div>
          <div className="report-section-body">
            {Object.entries(metrics.subjectStats)
              .sort((a, b) => b[1].impressions - a[1].impressions)
              .map(([name, stats], idx) => {
                const pct     = Math.round((stats.impressions / metrics.maxSubjectImp) * 100);
                const share   = metrics.totalImpressions > 0
                  ? ((stats.impressions / metrics.totalImpressions) * 100).toFixed(1)
                  : "0.0";
                const initials = name.split(" ").map(n => n[0]).join("").toUpperCase().slice(0, 2);
                const gradients = [
                  "linear-gradient(135deg, #8B5CF6, #06B6D4)",
                  "linear-gradient(135deg, #10B981, #06B6D4)",
                  "linear-gradient(135deg, #F59E0B, #EF4444)",
                  "linear-gradient(135deg, #EC4899, #8B5CF6)",
                  "linear-gradient(135deg, #6366F1, #06B6D4)"
                ];

                return (
                  <div key={name} className="subject-person-row">
                    <div className="subject-avatar" style={{ background: gradients[idx % gradients.length] }}>
                      {initials}
                    </div>
                    <div className="subject-info">
                      <div className="subject-name">{name}</div>
                      <div className="subject-meta">
                        {stats.count} appearance{stats.count !== 1 ? "s" : ""} · {share}% of total impressions
                      </div>
                    </div>
                    <div style={{ textAlign: "right", marginRight: "1rem", flexShrink: 0 }}>
                      <div style={{ fontSize: "1.05rem", fontWeight: 800, fontFamily: "var(--font-heading)", color: "var(--text-main)" }}>
                        {fmt(stats.impressions)}
                      </div>
                      <div style={{ fontSize: "0.72rem", color: "var(--text-muted)" }}>impressions</div>
                    </div>
                    <div className="subject-bar-wrap">
                      <div className="progress-bar-track">
                        <div
                          className="progress-bar-fill"
                          style={{
                            width: `${pct}%`,
                            background: gradients[idx % gradients.length]
                          }}
                        ></div>
                      </div>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      )}

      {/* ══ TOP 3 PERFORMING CONTENT ═════════════════════════════════════════════ */}
      {metrics.topContent.length > 0 && (
        <div className="report-section" style={{ marginBottom: "1.5rem" }}>
          <div className="report-section-head">
            <div className="report-section-icon" style={{ background: "rgba(245,158,11,0.12)", border: "1px solid rgba(245,158,11,0.2)" }}>
              <span>🏆</span>
            </div>
            <div>
              <div className="report-section-label">Top 3 Performing Content</div>
            </div>
          </div>
          <div className="report-section-body">
            <div className="podium-grid">
              {metrics.topContent.map((content, idx) => {
                const eng = (content.likes||0) + (content.comments||0) + (content.shares||0) + (content.saves||0);
                const pColor = platformColor(content.platform);
                const cardClass = `podium-card podium-card-${idx + 1}`;
                const badgeClass = `podium-rank-badge podium-rank-badge-${idx + 1}`;
                const medals = ["🥇", "🥈", "🥉"];

                return (
                  <div key={content.id || idx} className={cardClass}>
                    <div className={badgeClass}>#{idx + 1} Top</div>
                    <span className="podium-medal">{medals[idx]}</span>

                    <div className="podium-platform-tag">
                      <i data-lucide={platformIcon(content.platform)} style={{ width: "11px", height: "11px", color: pColor }}></i>
                      <span style={{ color: pColor }}>{content.platform}</span>
                      <span style={{ color: "var(--text-subtle)" }}>·</span>
                      <span>{fmtDate(content.uploadDate)}</span>
                    </div>

                    <p className="podium-caption">{content.caption || "No caption"}</p>

                    {/* Hashtags */}
                    {content.hashtags && content.hashtags.length > 0 && (
                      <div style={{ display: "flex", flexWrap: "wrap", gap: "0.3rem", marginBottom: "0.85rem" }}>
                        {content.hashtags.slice(0, 4).map(tag => (
                          <span key={tag} className="chip" style={{ fontSize: "0.7rem", padding: "0.15rem 0.45rem" }}>{tag}</span>
                        ))}
                        {content.hashtags.length > 4 && (
                          <span style={{ fontSize: "0.72rem", color: "var(--text-subtle)" }}>+{content.hashtags.length - 4}</span>
                        )}
                      </div>
                    )}

                    <div className="podium-metrics-strip">
                      <div className="podium-metric">
                        <span className="podium-metric-lbl">Views</span>
                        <span className="podium-metric-val" style={{ color: "var(--accent-cyan)" }}>{fmt(content.impressions || 0)}</span>
                      </div>
                      <div className="podium-metric">
                        <span className="podium-metric-lbl">Reach</span>
                        <span className="podium-metric-val">{fmt(content.reach || 0)}</span>
                      </div>
                      <div className="podium-metric">
                        <span className="podium-metric-lbl">Engmt</span>
                        <span className="podium-metric-val" style={{ color: "var(--accent-emerald)" }}>{fmt(eng)}</span>
                      </div>
                      <div className="podium-metric">
                        <span className="podium-metric-lbl">Likes</span>
                        <span className="podium-metric-val" style={{ color: "#FB7185" }}>{fmt(content.likes || 0)}</span>
                      </div>
                      <div className="podium-metric">
                        <span className="podium-metric-lbl">Shares</span>
                        <span className="podium-metric-val" style={{ color: "var(--accent-cyan)" }}>{fmt(content.shares || 0)}</span>
                      </div>
                      <div className="podium-metric">
                        <span className="podium-metric-lbl">Saves</span>
                        <span className="podium-metric-val" style={{ color: "var(--accent-emerald)" }}>{fmt(content.saves || 0)}</span>
                      </div>
                    </div>

                    {/* ER for this post */}
                    {content.reach > 0 && (
                      <div style={{
                        marginTop: "0.75rem", paddingTop: "0.65rem",
                        borderTop: "1px solid rgba(255,255,255,0.06)",
                        display: "flex", alignItems: "center", justifyContent: "space-between"
                      }}>
                        <span style={{ fontSize: "0.72rem", color: "var(--text-subtle)", textTransform: "uppercase", letterSpacing: "0.05em", fontWeight: 600 }}>Post ER</span>
                        <span style={{ fontSize: "0.95rem", fontWeight: 800, fontFamily: "var(--font-heading)", color: "var(--accent-primary)" }}>
                          {((eng / content.reach) * 100).toFixed(2)}%
                        </span>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      )}

      {/* ══ STRATEGIC RECOMMENDATIONS ═══════════════════════════════════════════ */}
      <div className="report-section">
        <div className="report-section-head">
          <div className="report-section-icon" style={{ background: "rgba(52,211,153,0.12)", border: "1px solid rgba(52,211,153,0.2)" }}>
            <span>🎯</span>
          </div>
          <div>
            <div className="report-section-label">Strategic Recommendations</div>
          </div>
        </div>
        <div className="report-section-body">
          <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>

            {/* Rec 1 — Replicate Top Performers */}
            <div className="recommendation-card">
              <div className="recommendation-number">1</div>
              <div className="recommendation-content">
                <div className="recommendation-title">Replicate Top-Performing Formats</div>
                <div className="recommendation-text">
                  Identify the content format, posting cadence, and hashtag clusters from your top {metrics.topContent.length} post{metrics.topContent.length !== 1 ? "s" : ""} and
                  build a repeatable content template around them.
                  {metrics.topContent[0] && (
                    <> Your current #1 post generated <strong style={{ color: "var(--accent-cyan)" }}>{fmt(metrics.topContent[0].impressions || 0)}</strong> views —
                    use this as the performance benchmark for future content.</>
                  )}
                </div>
              </div>
            </div>

            {/* Rec 2 — Platform Focus */}
            <div className="recommendation-card">
              <div className="recommendation-number">2</div>
              <div className="recommendation-content">
                <div className="recommendation-title">
                  Double Down on {metrics.bestPlatform ? metrics.bestPlatform[0] : "Your Best Platform"}
                </div>
                <div className="recommendation-text">
                  {metrics.bestPlatform
                    ? <>
                        <strong>{metrics.bestPlatform[0]}</strong> accounts for{" "}
                        <strong style={{ color: "var(--accent-cyan)" }}>
                          {((metrics.bestPlatform[1].impressions / Math.max(metrics.totalImpressions, 1)) * 100).toFixed(0)}%
                        </strong> of total impressions across {metrics.bestPlatform[1].count} post{metrics.bestPlatform[1].count !== 1 ? "s" : ""}.
                        Increase posting frequency here and experiment with new formats (e.g. Reels, Shorts, Threads) to compound reach further.
                      </>
                    : "Identify the platform generating the most reach and allocate additional content resources to maximise returns there."
                  }
                </div>
              </div>
            </div>

            {/* Rec 3 — Talent / Subjects */}
            <div className="recommendation-card">
              <div className="recommendation-number">3</div>
              <div className="recommendation-content">
                <div className="recommendation-title">
                  Prioritise High-Impact Talent
                </div>
                <div className="recommendation-text">
                  {metrics.bestSubject
                    ? <>
                        Content featuring <strong>{metrics.bestSubject[0]}</strong> drives the highest viewership
                        at <strong style={{ color: "var(--accent-primary)" }}>{fmt(metrics.bestSubject[1].impressions)}</strong> impressions
                        ({((metrics.bestSubject[1].impressions / Math.max(metrics.totalImpressions, 1)) * 100).toFixed(1)}% of all views).
                        Schedule more frequent appearances and collaborative content to capitalise on this audience affinity.
                      </>
                    : "Develop consistent on-screen talent or recurring characters to build audience familiarity and loyalty over time."
                  }
                </div>
              </div>
            </div>

            {/* Rec 4 — Engagement Rate */}
            <div className="recommendation-card">
              <div className="recommendation-number">4</div>
              <div className="recommendation-content">
                <div className="recommendation-title">Elevate Engagement Rate from {metrics.erRate}%</div>
                <div className="recommendation-text">
                  Your current ER is <strong style={{ color: erInfo.color }}>{metrics.erRate}% ({erInfo.label})</strong>.{" "}
                  {parseFloat(metrics.erRate) < 3
                    ? "Introduce interactive hooks — polls, question stickers, pinned comments — in the first 3 seconds of video or in the first line of captions to drive higher interaction rates."
                    : "Maintain this strong engagement by consistently testing new interactive formats: Q&A sessions, reaction videos, and challenge posts tend to amplify interaction spikes."
                  }
                </div>
              </div>
            </div>

            {/* Rec 5 — Engagement Mix */}
            <div className="recommendation-card">
              <div className="recommendation-number">5</div>
              <div className="recommendation-content">
                <div className="recommendation-title">Optimise Engagement Type Mix</div>
                <div className="recommendation-text">
                  Saves ({metrics.savePct}%) are the highest-value signal for algorithmic reach — produce more how-to, reference, and checklist content to boost this metric.
                  Shares ({metrics.sharePct}%) amplify organic distribution — emotional, surprising, or highly relatable content reliably maximises share velocity.
                  {parseFloat(metrics.commentPct) < 10 && (
                    <> Comment rate ({metrics.commentPct}%) is below average — end content with a direct open-ended question to stimulate discussion.</>
                  )}
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* ── Footer ───────────────────────────────────────────────────────────── */}
      <div style={{
        marginTop: "2.5rem", paddingTop: "1.5rem",
        borderTop: "1px solid var(--border-subtle)",
        display: "flex", alignItems: "center", justifyContent: "space-between",
        flexWrap: "wrap", gap: "1rem"
      }}>
        <div style={{ display: "flex", alignItems: "center", gap: "0.6rem" }}>
          <div style={{
            width: "24px", height: "24px", borderRadius: "7px",
            background: "var(--gradient-primary)",
            display: "flex", alignItems: "center", justifyContent: "center"
          }}>
            <i data-lucide="layers" style={{ width: "12px", height: "12px", color: "#fff" }}></i>
          </div>
          <span style={{ fontSize: "0.8rem", fontWeight: 700, color: "var(--text-muted)" }}>SocioVault</span>
        </div>
        <div style={{ fontSize: "0.76rem", color: "var(--text-subtle)" }}>
          Report generated on {today} · Data covers {metrics.totalContent} content pieces
        </div>
        <div style={{ display: "flex", gap: "0.5rem" }}>
          <button className="btn btn-export btn-sm" onClick={handleExportDocx}>
            <i data-lucide="download" style={{ width: "12px", height: "12px" }}></i>
            Export DOCX
          </button>
          <button className="btn btn-print btn-sm" onClick={() => window.print()}>
            <i data-lucide="printer" style={{ width: "12px", height: "12px" }}></i>
            Print
          </button>
        </div>
      </div>

    </div>
  );
};
