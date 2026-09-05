// ReportSummaryPage — Separated Status Analytics Report (Uploaded, Scheduled, Privated, Deleted)
function ReportSummaryPage() {
  const { activeAccount, contents, editAccount, canEdit } = React.useContext(window.VaultContext);
  const [reportStatusScope, setReportStatusScope] = React.useState("ALL"); // 'ALL', 'Uploaded', 'Scheduled', 'Privated', 'Deleted'

  // Account Brief state
  const [briefOpen, setBriefOpen] = React.useState(false);
  const [briefSaving, setBriefSaving] = React.useState(false);
  const [briefSaved, setBriefSaved] = React.useState(false);

  // Draft fields
  const [draftNiche, setDraftNiche] = React.useState("");
  const [draftGoals, setDraftGoals] = React.useState("");
  const [draftAudience, setDraftAudience] = React.useState("");
  const [draftTone, setDraftTone] = React.useState("");
  const [draftPillars, setDraftPillars] = React.useState("");
  const [draftContext, setDraftContext] = React.useState("");

  // AI / Local Report Generator state
  const [reportLoading, setReportLoading] = React.useState(false);
  const [reportOutput, setReportOutput] = React.useState("");

  if (!activeAccount) {
    return (
      <div className="page-container">
        <div className="glass-card" style={{ textAlign: "center", padding: "4rem 2rem" }}>
          <p style={{ color: "var(--text-muted)" }}>No active account selected.</p>
        </div>
      </div>
    );
  }

  const accountContents = React.useMemo(
    () => contents.filter(c => c.accountId === activeAccount.id),
    [contents, activeAccount.id]
  );

  // ─── HELPERS ────────────────────────────────────────────────────────────────
  const fmt = n => {
    if (!n && n !== 0) return "0";
    if (n >= 1_000_000) return (n / 1_000_000).toFixed(2) + "M";
    if (n >= 1_000) return (n / 1_000).toFixed(1) + "K";
    return (n || 0).toLocaleString();
  };
  const fmtFull = n => (n || 0).toLocaleString();
  const fmtDate = d => {
    if (!d) return "—";
    const [y, m, day] = d.split("-");
    return new Date(+y, +m - 1, +day).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" });
  };
  const pct = (num, den) => den > 0 ? ((num / den) * 100).toFixed(1) : "0.0";
  const erOf = (eng, reach) => reach > 0 ? ((eng / reach) * 100).toFixed(2) : "0.00";
  const irOf = (imp, reach) => reach > 0 ? (imp / reach).toFixed(2) : "0.00";

  const PLATFORM_COLOR = { "Instagram": "#E1306C", "YouTube": "#FF4444", "TikTok": "#25F4EE", "X (Twitter)": "#60A5FA", "Facebook": "#4B8FE4", "Threads": "#E8EAED" };
  const PLATFORM_ICON = { "Instagram": "instagram", "YouTube": "youtube", "TikTok": "music-2", "X (Twitter)": "twitter", "Facebook": "facebook", "Threads": "at-sign" };
  const pColor = p => PLATFORM_COLOR[p] || "var(--accent-primary)";
  const pIcon = p => PLATFORM_ICON[p] || "globe";

  const erLabel = er => {
    const v = parseFloat(er);
    if (v >= 6) return { label: "Exceptional", color: "#10B981" };
    if (v >= 3) return { label: "Above Average", color: "#34D399" };
    if (v >= 1) return { label: "Industry Standard", color: "#F59E0B" };
    return { label: "Needs Improvement", color: "#F43F5E" };
  };

  // ─── SEPARATED METRICS BY STATUS ────────────────────────────────────────────
  const statusGroups = React.useMemo(() => {
    const uploadedList = accountContents.filter(c => (c.status || "Uploaded") === "Uploaded");
    const scheduledList = accountContents.filter(c => c.status === "Scheduled");
    const privatedList = accountContents.filter(c => c.status === "Privated");
    const deletedList = accountContents.filter(c => c.status === "Deleted");

    const computeGroup = (list, name, color, icon) => {
      const imp = list.reduce((s, c) => s + (c.impressions || 0), 0);
      const reach = list.reduce((s, c) => s + (c.reach || 0), 0);
      const lik = list.reduce((s, c) => s + (c.likes || 0), 0);
      const com = list.reduce((s, c) => s + (c.comments || 0), 0);
      const sha = list.reduce((s, c) => s + (c.shares || 0), 0);
      const sav = list.reduce((s, c) => s + (c.saves || 0), 0);
      const eng = lik + com + sha + sav;
      const n = list.length;
      const dates = list.map(c => c.uploadDate).filter(Boolean).sort();
      const sorted = [...list].sort((a, b) => (b.impressions || 0) - (a.impressions || 0));

      return {
        name,
        color,
        icon,
        count: n,
        items: sorted,
        imp,
        reach,
        lik,
        com,
        sha,
        sav,
        eng,
        er: erOf(eng, reach),
        ir: irOf(imp, reach),
        avgImp: n > 0 ? Math.round(imp / n) : 0,
        avgReach: n > 0 ? Math.round(reach / n) : 0,
        avgEng: n > 0 ? Math.round(eng / n) : 0,
        likPct: pct(lik, eng),
        comPct: pct(com, eng),
        shaPct: pct(sha, eng),
        savPct: pct(sav, eng),
        dateFrom: dates[0] || null,
        dateTo: dates[dates.length - 1] || null,
        topContent: sorted.slice(0, 3)
      };
    };

    return {
      uploaded: computeGroup(uploadedList, "Uploaded (Published)", "#10B981", "🟢"),
      scheduled: computeGroup(scheduledList, "Scheduled (Pipeline)", "#06B6D4", "⏱️"),
      privated: computeGroup(privatedList, "Privated (Hidden)", "#F59E0B", "🔒"),
      deleted: computeGroup(deletedList, "Deleted (Archived)", "#F43F5E", "🗑️"),
      totalCount: accountContents.length
    };
  }, [accountContents]);

  // Overall combined metrics
  const combined = React.useMemo(() => {
    const targetItems = reportStatusScope === "ALL" 
      ? accountContents 
      : accountContents.filter(c => (c.status || "Uploaded") === reportStatusScope);

    const imp = targetItems.reduce((s, c) => s + (c.impressions || 0), 0);
    const reach = targetItems.reduce((s, c) => s + (c.reach || 0), 0);
    const lik = targetItems.reduce((s, c) => s + (c.likes || 0), 0);
    const com = targetItems.reduce((s, c) => s + (c.comments || 0), 0);
    const sha = targetItems.reduce((s, c) => s + (c.shares || 0), 0);
    const sav = targetItems.reduce((s, c) => s + (c.saves || 0), 0);
    const eng = lik + com + sha + sav;
    const n = targetItems.length;
    const dates = targetItems.map(c => c.uploadDate).filter(Boolean).sort();
    const statuses = { Uploaded: 0, Scheduled: 0, Privated: 0, Deleted: 0 };
    accountContents.forEach(c => { const s = c.status || "Uploaded"; if (statuses[s] !== undefined) statuses[s]++; else statuses["Uploaded"]++; });

    return {
      imp, reach, lik, com, sha, sav, eng,
      er: erOf(eng, reach), ir: irOf(imp, reach),
      avgImp: n > 0 ? Math.round(imp / n) : 0,
      avgReach: n > 0 ? Math.round(reach / n) : 0,
      avgEng: n > 0 ? Math.round(eng / n) : 0,
      likPct: pct(lik, eng), comPct: pct(com, eng),
      shaPct: pct(sha, eng), savPct: pct(sav, eng),
      count: n,
      dateFrom: dates[0] || null, dateTo: dates[dates.length - 1] || null,
      statuses,
      topContent: [...targetItems].sort((a, b) => (b.impressions || 0) - (a.impressions || 0)).slice(0, 3)
    };
  }, [accountContents, reportStatusScope]);

  // ─── PER-PLATFORM STATUS METRICS ────────────────────────────────────────────
  const platformData = React.useMemo(() => {
    const map = {};
    accountContents.forEach(c => {
      const p = c.platform || "Unknown";
      if (!map[p]) {
        map[p] = {
          name: p,
          posts: [],
          uploaded: [],
          scheduled: [],
          privated: [],
          deleted: [],
          imp: 0,
          reach: 0,
          lik: 0,
          com: 0,
          sha: 0,
          sav: 0
        };
      }
      map[p].posts.push(c);
      const st = c.status || "Uploaded";
      if (map[p][st.toLowerCase()]) {
        map[p][st.toLowerCase()].push(c);
      } else {
        map[p].uploaded.push(c);
      }
      map[p].imp += c.impressions || 0;
      map[p].reach += c.reach || 0;
      map[p].lik += c.likes || 0;
      map[p].com += c.comments || 0;
      map[p].sha += c.shares || 0;
      map[p].sav += c.saves || 0;
    });

    return Object.values(map).map(p => {
      const eng = p.lik + p.com + p.sha + p.sav;
      const n = p.posts.length;
      return {
        ...p,
        eng,
        er: erOf(eng, p.reach),
        ir: irOf(p.imp, p.reach),
        avgImp: n > 0 ? Math.round(p.imp / n) : 0,
        avgReach: n > 0 ? Math.round(p.reach / n) : 0,
        avgEng: n > 0 ? Math.round(eng / n) : 0,
        likPct: pct(p.lik, eng),
        comPct: pct(p.com, eng),
        shaPct: pct(p.sha, eng),
        savPct: pct(p.sav, eng),
        impShare: pct(p.imp, combined.imp || 1),
        reachShare: pct(p.reach, combined.reach || 1),
        engShare: pct(eng, combined.eng || 1),
        topPost: [...p.posts].sort((a, b) => (b.impressions || 0) - (a.impressions || 0))[0] || null,
        worstPost: [...p.posts].sort((a, b) => (a.impressions || 0) - (b.impressions || 0))[0] || null,
        dates: p.posts.map(x => x.uploadDate).filter(Boolean).sort()
      };
    }).sort((a, b) => b.imp - a.imp);
  }, [accountContents, combined]);

  // ─── SUBJECT METRICS ────────────────────────────────────────────────────────
  const subjectData = React.useMemo(() => {
    const map = {};
    accountContents.forEach(c => {
      (c.subjects || []).forEach(sub => {
        if (!map[sub]) map[sub] = { name: sub, count: 0, imp: 0, eng: 0, statuses: { Uploaded: 0, Scheduled: 0, Privated: 0, Deleted: 0 } };
        map[sub].count += 1;
        const st = c.status || "Uploaded";
        map[sub].statuses[st] = (map[sub].statuses[st] || 0) + 1;
        map[sub].imp += c.impressions || 0;
        map[sub].eng += (c.likes || 0) + (c.comments || 0) + (c.shares || 0) + (c.saves || 0);
      });
    });
    return Object.values(map).sort((a, b) => b.imp - a.imp);
  }, [accountContents]);

  const today = new Date().toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" });
  const erInfo = erLabel(combined.er);

  // ─── DOCX EXPORT (SEPARATED BY STATUS) ──────────────────────────────────────
  const handleExportDocx = () => {
    if (!window.docx) {
      alert("DOCX library not loaded — please check your internet connection and refresh.");
      return;
    }
    const { Document, Packer, Paragraph, TextRun, AlignmentType, BorderStyle } = window.docx;
    
    const H1 = (text, color = "7C3AED") => new Paragraph({
      children: [new TextRun({ text, bold: true, size: 28, color })],
      spacing: { before: 450, after: 150 },
      border: { bottom: { style: BorderStyle.SINGLE, size: 6, color: "2D3748" } }
    });

    const H2 = (text, color = "06B6D4") => new Paragraph({
      children: [new TextRun({ text, bold: true, size: 22, color })],
      spacing: { before: 300, after: 100 }
    });

    const P = (text) => new Paragraph({
      children: [new TextRun({ text, size: 20, color: "C9D1D9" })],
      spacing: { after: 140 }
    });

    const B = (label, value) => new Paragraph({
      children: [
        new TextRun({ text: `${label}: `, bold: true, size: 20, color: "F0F6FC" }),
        new TextRun({ text: value, size: 20, color: "9CA3AF" })
      ],
      bullet: { level: 0 },
      spacing: { after: 80 }
    });

    const children = [
      new Paragraph({
        children: [new TextRun({ text: "PERFORMANCE ANALYTICS REPORT", bold: true, size: 44, color: "7C3AED" })],
        alignment: AlignmentType.CENTER,
        spacing: { after: 100 }
      }),
      new Paragraph({
        children: [new TextRun({ text: `${activeAccount.name} — Multi-Status Segregated Audit`, bold: true, size: 28, color: "06B6D4" })],
        alignment: AlignmentType.CENTER,
        spacing: { after: 80 }
      }),
      new Paragraph({
        children: [new TextRun({ text: `Generated: ${today}  ·  Post Statuses Segregated: Uploaded, Scheduled, Privated, Deleted`, size: 18, color: "6B7280", italics: true })],
        alignment: AlignmentType.CENTER,
        spacing: { after: 400 }
      }),

      // Executive Summary & Status Breakdown
      H1("EXECUTIVE SUMMARY & STATUS DISTRIBUTION", "06B6D4"),
      P(`${activeAccount.name} has a total inventory of ${statusGroups.totalCount} content pieces across ${platformData.length} platform(s). Content is partitioned into 4 distinct lifecycles: Uploaded (${statusGroups.uploaded.count}), Scheduled (${statusGroups.scheduled.count}), Privated (${statusGroups.privated.count}), and Deleted (${statusGroups.deleted.count}).`),
      B("Uploaded (Published)", `${statusGroups.uploaded.count} posts (${pct(statusGroups.uploaded.count, statusGroups.totalCount)}%) — ${fmtFull(statusGroups.uploaded.imp)} impressions`),
      B("Scheduled (Queue)", `${statusGroups.scheduled.count} posts (${pct(statusGroups.scheduled.count, statusGroups.totalCount)}%) — Upcoming scheduled pipeline`),
      B("Privated (Hidden)", `${statusGroups.privated.count} posts (${pct(statusGroups.privated.count, statusGroups.totalCount)}%) — ${fmtFull(statusGroups.privated.imp)} historical impressions`),
      B("Deleted (Archived)", `${statusGroups.deleted.count} posts (${pct(statusGroups.deleted.count, statusGroups.totalCount)}%) — ${fmtFull(statusGroups.deleted.imp)} archived impressions`),

      // Chapter 1: Uploaded Content Performance
      H1("CHAPTER 1: UPLOADED (PUBLISHED) LIVE PERFORMANCE", "10B981"),
      P(`This section evaluates active public content currently generating live views and interactions.`),
      B("Live Posts Published", `${statusGroups.uploaded.count}`),
      B("Total Live Impressions", `${fmtFull(statusGroups.uploaded.imp)} views`),
      B("Total Live Reach", `${fmtFull(statusGroups.uploaded.reach)} unique viewers`),
      B("Total Engagement", `${fmtFull(statusGroups.uploaded.eng)} (Likes ${fmtFull(statusGroups.uploaded.lik)} · Comments ${fmtFull(statusGroups.uploaded.com)} · Shares ${fmtFull(statusGroups.uploaded.sha)} · Saves ${fmtFull(statusGroups.uploaded.sav)})`),
      B("Live Engagement Rate", `${statusGroups.uploaded.er}% (${erLabel(statusGroups.uploaded.er).label})`),
      B("Average Views / Live Post", `${fmtFull(statusGroups.uploaded.avgImp)}`),
      B("Impression / Reach Ratio", `${statusGroups.uploaded.ir}×`),

      H2("Top Performing Live Content (Uploaded)", "10B981"),
      ...statusGroups.uploaded.items.slice(0, 5).map((c, i) => {
        const eng = (c.likes || 0) + (c.comments || 0) + (c.shares || 0) + (c.saves || 0);
        return B(`#${i + 1} [${c.platform}] ${fmtDate(c.uploadDate)}`, `"${(c.caption || "").substring(0, 70)}…" · ${fmtFull(c.impressions || 0)} views · ${fmtFull(eng)} engagements · ER ${erOf(eng, c.reach || 0)}%`);
      }),

      // Chapter 2: Scheduled Content Pipeline
      H1("CHAPTER 2: SCHEDULED CONTENT PIPELINE", "06B6D4"),
      P(`This section details the upcoming scheduled content queued across all accounts and platforms.`),
      B("Total Queued Posts", `${statusGroups.scheduled.count}`),
      ...statusGroups.scheduled.items.map((c, i) => {
        return B(`Queue #${i + 1} [${c.platform}] Scheduled: ${fmtDate(c.uploadDate)}`, `"${(c.caption || "").substring(0, 80)}…" · Tags: ${(c.hashtags || []).join(" ")}`);
      }),

      // Chapter 3: Privated Content
      H1("CHAPTER 3: PRIVATED & UNLISTED CONTENT", "F59E0B"),
      P(`Audit of content removed from public visibility but maintained in internal records.`),
      B("Total Privated Posts", `${statusGroups.privated.count}`),
      ...statusGroups.privated.items.map((c, i) => {
        return B(`Hidden #${i + 1} [${c.platform}]`, `"${(c.caption || "").substring(0, 80)}…" · Historical Views: ${fmtFull(c.impressions || 0)}`);
      }),

      // Chapter 4: Deleted Content History
      H1("CHAPTER 4: DELETED / ARCHIVED CONTENT LOG", "F43F5E"),
      P(`Historical registry of deleted content items.`),
      B("Total Deleted Posts", `${statusGroups.deleted.count}`),
      ...statusGroups.deleted.items.map((c, i) => {
        return B(`Archived #${i + 1} [${c.platform}]`, `"${(c.caption || "").substring(0, 80)}…" · Archived Views: ${fmtFull(c.impressions || 0)}`);
      }),

      // Chapter 5: Platform Breakdown
      H1("CHAPTER 5: PER-PLATFORM STATUS BREAKDOWN", "8B5CF6")
    ];

    platformData.forEach((pl, idx) => {
      children.push(H2(`PLATFORM ${idx + 1}: ${pl.name.toUpperCase()}`, pColor(pl.name).replace("#", "")));
      children.push(B("Status Breakdown", `Uploaded: ${pl.uploaded.length} · Scheduled: ${pl.scheduled.length} · Privated: ${pl.privated.length} · Deleted: ${pl.deleted.length}`));
      children.push(B("Total Platform Impressions", `${fmtFull(pl.imp)} (${pl.impShare}% of all platforms)`));
      children.push(B("Engagement Rate", `${pl.er}% (${erLabel(pl.er).label})`));
    });

    // Strategic recommendations
    children.push(H1("CHAPTER 6: STRATEGIC RECOMMENDATIONS", "34D399"));
    children.push(B("1. Live Content Optimization", "Focus creative effort on high ER formats identified in Chapter 1."));
    children.push(B("2. Scheduled Pipeline Management", `Maintain a regular release cadence for the ${statusGroups.scheduled.count} scheduled posts.`));
    children.push(B("3. Status Hygiene", `Review ${statusGroups.privated.count} privated and ${statusGroups.deleted.count} deleted posts to learn why they were taken down.`));

    children.push(new Paragraph({
      children: [new TextRun({ text: `\nGenerated by SocioVault Multi-Status Analytics Engine · ${today}`, size: 16, color: "484F58", italics: true })],
      alignment: AlignmentType.CENTER,
      spacing: { before: 600 }
    }));

    const doc = new Document({ sections: [{ properties: {}, children }] });
    window.docx.Packer.toBlob(doc).then(blob => {
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = `${activeAccount.name.replace(/\s+/g, "_")}_Separated_Report_${new Date().toISOString().slice(0, 10)}.docx`;
      a.click();
      URL.revokeObjectURL(url);
    });
  };

  // ─── LOCAL REPORT GENERATOR ────────────────────────────────────────────────
  const generateStatusAnalysis = () => {
    setReportLoading(true);
    setTimeout(() => {
      let output = `📊 SOCIOVAULT SEPARATED STATUS PERFORMANCE AUDIT\n`;
      output += `Account: ${activeAccount.name}\n`;
      output += `Generated: ${new Date().toLocaleString()}\n`;
      output += `════════════════════════════════════════════════════════════════\n\n`;

      output += `1. LIFECYCLE DISTRIBUTION\n`;
      output += `----------------------------------------------------------------\n`;
      output += `• Total Content: ${statusGroups.totalCount} items\n`;
      output += `• 🟢 Uploaded (Live): ${statusGroups.uploaded.count} posts (${pct(statusGroups.uploaded.count, statusGroups.totalCount)}%)\n`;
      output += `• ⏱️ Scheduled (Queue): ${statusGroups.scheduled.count} posts (${pct(statusGroups.scheduled.count, statusGroups.totalCount)}%)\n`;
      output += `• 🔒 Privated (Hidden): ${statusGroups.privated.count} posts (${pct(statusGroups.privated.count, statusGroups.totalCount)}%)\n`;
      output += `• 🗑️ Deleted (Archived): ${statusGroups.deleted.count} posts (${pct(statusGroups.deleted.count, statusGroups.totalCount)}%)\n\n`;

      output += `2. UPLOADED (LIVE) PERFORMANCE\n`;
      output += `----------------------------------------------------------------\n`;
      output += `• Total Live Impressions: ${fmtFull(statusGroups.uploaded.imp)}\n`;
      output += `• Total Live Reach: ${fmtFull(statusGroups.uploaded.reach)}\n`;
      output += `• Live Engagement Rate: ${statusGroups.uploaded.er}% (${erLabel(statusGroups.uploaded.er).label})\n`;
      output += `• Average Views / Post: ${fmtFull(statusGroups.uploaded.avgImp)}\n\n`;

      output += `3. SCHEDULED PIPELINE\n`;
      output += `----------------------------------------------------------------\n`;
      output += `• Queued posts waiting for release: ${statusGroups.scheduled.count}\n\n`;

      output += `4. PRIVATED & DELETED CONTENT AUDIT\n`;
      output += `----------------------------------------------------------------\n`;
      output += `• Privated Posts: ${statusGroups.privated.count} (Historical Views: ${fmtFull(statusGroups.privated.imp)})\n`;
      output += `• Deleted Posts: ${statusGroups.deleted.count} (Archived Views: ${fmtFull(statusGroups.deleted.imp)})\n\n`;

      setReportOutput(output);
      setReportLoading(false);
    }, 300);
  };

  // ─── REUSABLE SUB-COMPONENTS ───────────────────────────────────────────────
  const MetricPill = ({ value, color, bg }) => (
    <span style={{ display: "inline-flex", alignItems: "center", padding: "0.15rem 0.6rem", borderRadius: "6px", background: bg || `${color}18`, border: `1px solid ${color}30`, fontSize: "0.82rem", fontWeight: 700, color, fontFamily: "var(--font-heading)", whiteSpace: "nowrap" }}>
      {value}
    </span>
  );

  const EngBar = ({ label, icon, value, pctVal, color, gradient }) => (
    <div className="engagement-bar-row">
      <div className="engagement-bar-label">
        <span style={{ color, marginRight: "4px" }}>•</span>
        {label}
      </div>
      <div className="engagement-bar-track">
        <div className="engagement-bar-fill" style={{ width: `${pctVal}%`, background: gradient }}></div>
      </div>
      <div className="engagement-bar-value">{fmt(value)}</div>
      <div className="engagement-bar-pct">{pctVal}%</div>
    </div>
  );

  const SectionHead = ({ emoji, label, colorBg, colorBorder }) => (
    <div className="report-section-head">
      <div className="report-section-icon" style={{ background: colorBg, border: `1px solid ${colorBorder}` }}>
        <span>{emoji}</span>
      </div>
      <div className="report-section-label">{label}</div>
    </div>
  );

  const MiniStat = ({ label, value, color }) => (
    <div style={{ display: "flex", flexDirection: "column", gap: "0.2rem" }}>
      <span style={{ fontSize: "0.68rem", color: "var(--text-subtle)", textTransform: "uppercase", letterSpacing: "0.05em", fontWeight: 700 }}>{label}</span>
      <span style={{ fontSize: "1.05rem", fontWeight: 800, fontFamily: "var(--font-heading)", color: color || "var(--text-main)" }}>{value}</span>
    </div>
  );

  return (
    <div className="page-container">

      {/* ══ HERO ══════════════════════════════════════════════════════════════ */}
      <div className="report-hero">
        <div className="report-hero-content">
          <div className="report-title-eyebrow">
            📊 Separated Post Status Report & Analytics
          </div>
          <h1 className="report-hero-title">{activeAccount.name}</h1>
          <p style={{ color: "var(--text-muted)", fontSize: "0.9rem", marginBottom: "0.5rem" }}>
            {activeAccount.description || "Segmented reports for Uploaded, Scheduled, Privated, and Deleted posts"}
          </p>
          <div className="report-hero-meta">
            <div className="report-hero-meta-item"><span>📅 {combined.dateFrom ? `${fmtDate(combined.dateFrom)} — ${fmtDate(combined.dateTo)}` : "All-Time"}</span></div>
            <div className="report-hero-meta-item"><span>📑 {accountContents.length} total posts</span></div>
            <div className="report-hero-meta-item"><span>📡 {platformData.length} platform{platformData.length !== 1 ? "s" : ""}</span></div>
            <div className="report-hero-meta-item"><span>🕒 Generated {today}</span></div>
          </div>
        </div>
        <div style={{ position: "absolute", top: "1.5rem", right: "1.5rem", display: "flex", gap: "0.6rem", flexWrap: "wrap" }}>
          <button className="btn btn-export btn-sm" onClick={handleExportDocx} title="Export segregated report as .docx">
            📥 Export Segregated DOCX
          </button>
          <button className="btn btn-secondary btn-sm" onClick={generateStatusAnalysis}>
            ⚡ Generate Audit Text
          </button>
          <button className="btn btn-print btn-sm" onClick={() => window.print()}>
            🖨️ Print
          </button>
        </div>
      </div>

      {/* ══ POST STATUS SCOPE SWITCHER ═══════════════════════════════════════ */}
      <div className="glass-card" style={{ padding: "1.25rem 1.5rem", marginBottom: "1.5rem", background: "rgba(15, 23, 42, 0.8)", border: "1px solid var(--border-color)" }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: "1rem" }}>
          <div>
            <div style={{ fontSize: "0.75rem", fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.06em", color: "var(--accent-cyan)" }}>
              📑 Report View Mode
            </div>
            <h3 style={{ fontSize: "1.1rem", fontWeight: 700, margin: "0.2rem 0 0 0" }}>
              Select Status View Scope
            </h3>
          </div>

          <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
            <button
              onClick={() => setReportStatusScope("ALL")}
              className={`btn btn-sm ${reportStatusScope === "ALL" ? "btn-primary" : "btn-secondary"}`}
              style={{ fontWeight: 700, borderRadius: "8px" }}
            >
              🌐 Full Separated Report ({statusGroups.totalCount})
            </button>
            <button
              onClick={() => setReportStatusScope("Uploaded")}
              className="btn btn-sm"
              style={{
                fontWeight: 700,
                borderRadius: "8px",
                background: reportStatusScope === "Uploaded" ? "#10B981" : "rgba(16, 185, 129, 0.12)",
                color: reportStatusScope === "Uploaded" ? "#fff" : "#10B981",
                border: "1px solid rgba(16, 185, 129, 0.3)"
              }}
            >
              🟢 Uploaded ({statusGroups.uploaded.count})
            </button>
            <button
              onClick={() => setReportStatusScope("Scheduled")}
              className="btn btn-sm"
              style={{
                fontWeight: 700,
                borderRadius: "8px",
                background: reportStatusScope === "Scheduled" ? "#06B6D4" : "rgba(6, 182, 212, 0.12)",
                color: reportStatusScope === "Scheduled" ? "#fff" : "#06B6D4",
                border: "1px solid rgba(6, 182, 212, 0.3)"
              }}
            >
              ⏱️ Scheduled ({statusGroups.scheduled.count})
            </button>
            <button
              onClick={() => setReportStatusScope("Privated")}
              className="btn btn-sm"
              style={{
                fontWeight: 700,
                borderRadius: "8px",
                background: reportStatusScope === "Privated" ? "#F59E0B" : "rgba(245, 158, 11, 0.12)",
                color: reportStatusScope === "Privated" ? "#fff" : "#F59E0B",
                border: "1px solid rgba(245, 158, 11, 0.3)"
              }}
            >
              🔒 Privated ({statusGroups.privated.count})
            </button>
            <button
              onClick={() => setReportStatusScope("Deleted")}
              className="btn btn-sm"
              style={{
                fontWeight: 700,
                borderRadius: "8px",
                background: reportStatusScope === "Deleted" ? "#F43F5E" : "rgba(244, 63, 94, 0.12)",
                color: reportStatusScope === "Deleted" ? "#fff" : "#F43F5E",
                border: "1px solid rgba(244, 63, 94, 0.3)"
              }}
            >
              🗑️ Deleted ({statusGroups.deleted.count})
            </button>
          </div>
        </div>
      </div>

      {/* ══ AUDIT TEXT OUTPUT (IF GENERATED) ════════════════════════════════ */}
      {reportOutput && (
        <div className="glass-card" style={{ padding: "1.5rem", marginBottom: "1.5rem", background: "rgba(7, 9, 15, 0.9)", border: "1px solid var(--accent-cyan)" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "0.75rem" }}>
            <h3 style={{ fontSize: "1rem", fontWeight: 700, color: "var(--accent-cyan)", margin: 0 }}>⚡ Status Audit Summary Output</h3>
            <button className="btn btn-secondary btn-sm" onClick={() => setReportOutput("")}>Close</button>
          </div>
          <pre style={{ whiteSpace: "pre-wrap", fontFamily: "JetBrains Mono, monospace", fontSize: "0.85rem", color: "var(--text-secondary)", lineHeight: 1.6, margin: 0 }}>
            {reportOutput}
          </pre>
        </div>
      )}

      {/* ══ STATUS SUMMARY CARDS STRIP ══════════════════════════════════════ */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "1rem", marginBottom: "1.5rem" }}>
        {[
          { key: "Uploaded", title: "🟢 Uploaded (Live)", count: statusGroups.uploaded.count, pct: pct(statusGroups.uploaded.count, statusGroups.totalCount), imp: statusGroups.uploaded.imp, er: statusGroups.uploaded.er, color: "#10B981" },
          { key: "Scheduled", title: "⏱️ Scheduled (Queue)", count: statusGroups.scheduled.count, pct: pct(statusGroups.scheduled.count, statusGroups.totalCount), imp: statusGroups.scheduled.imp, er: statusGroups.scheduled.er, color: "#06B6D4" },
          { key: "Privated", title: "🔒 Privated (Hidden)", count: statusGroups.privated.count, pct: pct(statusGroups.privated.count, statusGroups.totalCount), imp: statusGroups.privated.imp, er: statusGroups.privated.er, color: "#F59E0B" },
          { key: "Deleted", title: "🗑️ Deleted (Archived)", count: statusGroups.deleted.count, pct: pct(statusGroups.deleted.count, statusGroups.totalCount), imp: statusGroups.deleted.imp, er: statusGroups.deleted.er, color: "#F43F5E" }
        ].map(st => (
          <div
            key={st.key}
            onClick={() => setReportStatusScope(st.key)}
            className="glass-card"
            style={{
              padding: "1.1rem",
              borderTop: `3px solid ${st.color}`,
              background: reportStatusScope === st.key ? `${st.color}15` : "rgba(15, 23, 42, 0.6)",
              cursor: "pointer"
            }}
          >
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "0.4rem" }}>
              <span style={{ fontSize: "0.85rem", fontWeight: 700, color: st.color }}>{st.title}</span>
              <span style={{ fontSize: "0.72rem", color: "var(--text-muted)", fontWeight: 700 }}>{st.pct}%</span>
            </div>
            <div style={{ fontSize: "1.6rem", fontWeight: 800, fontFamily: "var(--font-heading)", color: st.color, lineHeight: 1.1 }}>
              {st.count} <span style={{ fontSize: "0.75rem", fontWeight: 500, color: "var(--text-muted)" }}>posts</span>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between", marginTop: "0.6rem", paddingTop: "0.5rem", borderTop: "1px solid rgba(255,255,255,0.06)", fontSize: "0.75rem", color: "var(--text-muted)" }}>
              <span>Views: <strong style={{ color: "var(--accent-cyan)" }}>{fmt(st.imp)}</strong></span>
              <span>ER: <strong style={{ color: "var(--accent-primary)" }}>{st.er}%</strong></span>
            </div>
          </div>
        ))}
      </div>

      {/* ══ SECTION 1: UPLOADED (PUBLISHED) REPORT ═══════════════════════════ */}
      {(reportStatusScope === "ALL" || reportStatusScope === "Uploaded") && (
        <div className="report-section" style={{ marginBottom: "2rem", borderLeft: "4px solid #10B981" }}>
          <SectionHead emoji="🟢" label="Live Published Content (Uploaded) — Deep Performance" colorBg="rgba(16, 185, 129, 0.1)" colorBorder="rgba(16, 185, 129, 0.3)" />
          
          <div className="report-section-body">
            {/* Live KPI Grid */}
            <div className="report-kpi-grid" style={{ marginBottom: "1.5rem" }}>
              {[
                { label: "Live Impressions", value: fmt(statusGroups.uploaded.imp), sub: fmtFull(statusGroups.uploaded.imp) + " views", color: "#06B6D4", g: "linear-gradient(90deg,#06B6D4,#22D3EE)" },
                { label: "Live Reach", value: fmt(statusGroups.uploaded.reach), sub: "unique viewers", color: "#8B5CF6", g: "linear-gradient(90deg,#8B5CF6,#A78BFA)" },
                { label: "Live Engagement", value: fmt(statusGroups.uploaded.eng), sub: "likes+comments+shares+saves", color: "#10B981", g: "linear-gradient(90deg,#10B981,#34D399)" },
                { label: "Live ER Rate", value: statusGroups.uploaded.er + "%", sub: erLabel(statusGroups.uploaded.er).label, color: erLabel(statusGroups.uploaded.er).color, g: "linear-gradient(90deg,#10B981,#34D399)" },
                { label: "Avg Views / Post", value: fmt(statusGroups.uploaded.avgImp), sub: "per published post", color: "#F59E0B", g: "linear-gradient(90deg,#F59E0B,#FCD34D)" },
                { label: "Imp / Reach Ratio", value: statusGroups.uploaded.ir + "×", sub: "retention index", color: "#EC4899", g: "linear-gradient(90deg,#EC4899,#F9A8D4)" }
              ].map((k, i) => (
                <div key={i} className="report-kpi-card">
                  <div className="kpi-accent-bar" style={{ background: k.g }}></div>
                  <div className="report-kpi-label">{k.label}</div>
                  <div className="report-kpi-value" style={{ color: k.color }}>{k.value}</div>
                  <div className="report-kpi-sub">{k.sub}</div>
                </div>
              ))}
            </div>

            {/* Engagement Mix & Top Posts Table */}
            <div style={{ display: "grid", gridTemplateColumns: "1fr 2fr", gap: "1.25rem", marginBottom: "1.5rem" }}>
              <div style={{ padding: "1.1rem", borderRadius: "var(--radius-md)", background: "rgba(7,9,15,0.4)", border: "1px solid rgba(16, 185, 129, 0.2)" }}>
                <div style={{ fontSize: "0.75rem", color: "var(--text-muted)", fontWeight: 700, textTransform: "uppercase", marginBottom: "1rem" }}>
                  Live Engagement Mix
                </div>
                {[
                  { label: "Likes", icon: "heart", value: statusGroups.uploaded.lik, pctVal: statusGroups.uploaded.likPct, color: "#F43F5E", gradient: "linear-gradient(90deg,#F43F5E,#FB7185)" },
                  { label: "Comments", icon: "message-circle", value: statusGroups.uploaded.com, pctVal: statusGroups.uploaded.comPct, color: "#8B5CF6", gradient: "linear-gradient(90deg,#8B5CF6,#A78BFA)" },
                  { label: "Shares", icon: "repeat-2", value: statusGroups.uploaded.sha, pctVal: statusGroups.uploaded.shaPct, color: "#06B6D4", gradient: "linear-gradient(90deg,#06B6D4,#22D3EE)" },
                  { label: "Saves", icon: "bookmark", value: statusGroups.uploaded.sav, pctVal: statusGroups.uploaded.savPct, color: "#10B981", gradient: "linear-gradient(90deg,#10B981,#34D399)" }
                ].map(item => <EngBar key={item.label} {...item} />)}
              </div>

              <div style={{ padding: "1.1rem", borderRadius: "var(--radius-md)", background: "rgba(7,9,15,0.4)", border: "1px solid rgba(16, 185, 129, 0.2)" }}>
                <div style={{ fontSize: "0.75rem", color: "var(--text-muted)", fontWeight: 700, textTransform: "uppercase", marginBottom: "0.75rem" }}>
                  Top Published Posts ({statusGroups.uploaded.items.length})
                </div>
                <div style={{ overflowX: "auto" }}>
                  <table className="custom-table" style={{ fontSize: "0.8rem" }}>
                    <thead>
                      <tr>
                        <th>Date</th>
                        <th>Platform</th>
                        <th>Caption</th>
                        <th style={{ color: "var(--accent-cyan)" }}>Views</th>
                        <th>Reach</th>
                        <th style={{ color: "var(--accent-emerald)" }}>Engmt</th>
                        <th style={{ color: "var(--accent-primary)" }}>ER%</th>
                      </tr>
                    </thead>
                    <tbody>
                      {statusGroups.uploaded.items.slice(0, 5).map((post, idx) => {
                        const postEng = (post.likes || 0) + (post.comments || 0) + (post.shares || 0) + (post.saves || 0);
                        const postEr = erOf(postEng, post.reach || 0);
                        return (
                          <tr key={post.id || idx}>
                            <td style={{ whiteSpace: "nowrap" }}>{fmtDate(post.uploadDate)}</td>
                            <td><span style={{ fontWeight: 600, color: pColor(post.platform) }}>{post.platform}</span></td>
                            <td style={{ maxWidth: "200px", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{post.caption}</td>
                            <td style={{ fontWeight: 700, color: "var(--accent-cyan)" }}>{fmt(post.impressions || 0)}</td>
                            <td>{fmt(post.reach || 0)}</td>
                            <td style={{ fontWeight: 700, color: "var(--accent-emerald)" }}>{fmt(postEng)}</td>
                            <td style={{ fontWeight: 700, color: erLabel(postEr).color }}>{postEr}%</td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ══ SECTION 2: SCHEDULED CONTENT PIPELINE ═══════════════════════════ */}
      {(reportStatusScope === "ALL" || reportStatusScope === "Scheduled") && (
        <div className="report-section" style={{ marginBottom: "2rem", borderLeft: "4px solid #06B6D4" }}>
          <SectionHead emoji="⏱️" label="Scheduled Content Pipeline & Upcoming Queue" colorBg="rgba(6, 182, 212, 0.1)" colorBorder="rgba(6, 182, 212, 0.3)" />
          
          <div className="report-section-body">
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "1rem" }}>
              <p style={{ color: "var(--text-muted)", fontSize: "0.85rem", margin: 0 }}>
                {statusGroups.scheduled.count > 0 
                  ? `There are ${statusGroups.scheduled.count} scheduled content pieces waiting for release.` 
                  : "No scheduled content currently queued."}
              </p>
              <span style={{ padding: "0.2rem 0.6rem", borderRadius: "12px", background: "rgba(6, 182, 212, 0.15)", color: "#06B6D4", fontSize: "0.75rem", fontWeight: 700 }}>
                {statusGroups.scheduled.count} Queued
              </span>
            </div>

            {statusGroups.scheduled.count > 0 ? (
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "1rem" }}>
                {statusGroups.scheduled.items.map((item, idx) => (
                  <div key={item.id || idx} style={{ padding: "1.1rem", borderRadius: "var(--radius-md)", background: "rgba(6, 182, 212, 0.05)", border: "1px solid rgba(6, 182, 212, 0.2)" }}>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "0.5rem" }}>
                      <span style={{ fontWeight: 700, color: pColor(item.platform) }}>{item.platform}</span>
                      <span style={{ fontSize: "0.75rem", color: "var(--accent-cyan)", fontWeight: 700 }}>📅 {fmtDate(item.uploadDate)}</span>
                    </div>
                    <p style={{ fontSize: "0.82rem", color: "var(--text-secondary)", lineHeight: 1.4, marginBottom: "0.75rem" }}>
                      "{item.caption}"
                    </p>
                    <div style={{ display: "flex", gap: "0.4rem", flexWrap: "wrap" }}>
                      {(item.hashtags || []).map(tag => (
                        <span key={tag} style={{ fontSize: "0.7rem", padding: "0.1rem 0.4rem", borderRadius: "4px", background: "rgba(255,255,255,0.05)", color: "var(--text-muted)" }}>
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div style={{ textAlign: "center", padding: "2rem", color: "var(--text-muted)", background: "rgba(255,255,255,0.02)", borderRadius: "8px" }}>
                No scheduled content found.
              </div>
            )}
          </div>
        </div>
      )}

      {/* ══ SECTION 3: PRIVATED CONTENT AUDIT ════════════════════════════════ */}
      {(reportStatusScope === "ALL" || reportStatusScope === "Privated") && (
        <div className="report-section" style={{ marginBottom: "2rem", borderLeft: "4px solid #F59E0B" }}>
          <SectionHead emoji="🔒" label="Privated & Hidden Content Audit" colorBg="rgba(245, 158, 11, 0.1)" colorBorder="rgba(245, 158, 11, 0.3)" />
          
          <div className="report-section-body">
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "1rem" }}>
              <p style={{ color: "var(--text-muted)", fontSize: "0.85rem", margin: 0 }}>
                {statusGroups.privated.count > 0 
                  ? `${statusGroups.privated.count} posts are currently marked as Privated (hidden from public feed).` 
                  : "No privated content found."}
              </p>
              <span style={{ padding: "0.2rem 0.6rem", borderRadius: "12px", background: "rgba(245, 158, 11, 0.15)", color: "#F59E0B", fontSize: "0.75rem", fontWeight: 700 }}>
                {statusGroups.privated.count} Privated
              </span>
            </div>

            {statusGroups.privated.count > 0 ? (
              <div style={{ overflowX: "auto" }}>
                <table className="custom-table" style={{ fontSize: "0.8rem" }}>
                  <thead>
                    <tr>
                      <th>Date</th>
                      <th>Platform</th>
                      <th>Caption</th>
                      <th>Historical Views</th>
                      <th>Historical Reach</th>
                      <th>Historical Engmt</th>
                      <th>Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {statusGroups.privated.items.map((post, idx) => {
                      const postEng = (post.likes || 0) + (post.comments || 0) + (post.shares || 0) + (post.saves || 0);
                      return (
                        <tr key={post.id || idx}>
                          <td style={{ whiteSpace: "nowrap" }}>{fmtDate(post.uploadDate)}</td>
                          <td><span style={{ fontWeight: 600, color: pColor(post.platform) }}>{post.platform}</span></td>
                          <td style={{ maxWidth: "240px", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{post.caption}</td>
                          <td style={{ fontWeight: 700, color: "var(--accent-cyan)" }}>{fmt(post.impressions || 0)}</td>
                          <td>{fmt(post.reach || 0)}</td>
                          <td style={{ fontWeight: 700, color: "var(--accent-emerald)" }}>{fmt(postEng)}</td>
                          <td><span className="badge badge-privated">Privated</span></td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            ) : (
              <div style={{ textAlign: "center", padding: "2rem", color: "var(--text-muted)", background: "rgba(255,255,255,0.02)", borderRadius: "8px" }}>
                No privated content in this account.
              </div>
            )}
          </div>
        </div>
      )}

      {/* ══ SECTION 4: DELETED / ARCHIVED CONTENT LOG ════════════════════════ */}
      {(reportStatusScope === "ALL" || reportStatusScope === "Deleted") && (
        <div className="report-section" style={{ marginBottom: "2rem", borderLeft: "4px solid #F43F5E" }}>
          <SectionHead emoji="🗑️" label="Deleted / Archived Content Log" colorBg="rgba(244, 63, 94, 0.1)" colorBorder="rgba(244, 63, 94, 0.3)" />
          
          <div className="report-section-body">
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "1rem" }}>
              <p style={{ color: "var(--text-muted)", fontSize: "0.85rem", margin: 0 }}>
                {statusGroups.deleted.count > 0 
                  ? `${statusGroups.deleted.count} posts have been marked as Deleted/Archived.` 
                  : "No deleted/archived content recorded."}
              </p>
              <span style={{ padding: "0.2rem 0.6rem", borderRadius: "12px", background: "rgba(244, 63, 94, 0.15)", color: "#F43F5E", fontSize: "0.75rem", fontWeight: 700 }}>
                {statusGroups.deleted.count} Deleted
              </span>
            </div>

            {statusGroups.deleted.count > 0 ? (
              <div style={{ overflowX: "auto" }}>
                <table className="custom-table" style={{ fontSize: "0.8rem" }}>
                  <thead>
                    <tr>
                      <th>Original Date</th>
                      <th>Platform</th>
                      <th>Caption</th>
                      <th>Archived Views</th>
                      <th>Archived Reach</th>
                      <th>Archived Engmt</th>
                      <th>Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {statusGroups.deleted.items.map((post, idx) => {
                      const postEng = (post.likes || 0) + (post.comments || 0) + (post.shares || 0) + (post.saves || 0);
                      return (
                        <tr key={post.id || idx}>
                          <td style={{ whiteSpace: "nowrap" }}>{fmtDate(post.uploadDate)}</td>
                          <td><span style={{ fontWeight: 600, color: pColor(post.platform) }}>{post.platform}</span></td>
                          <td style={{ maxWidth: "240px", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{post.caption}</td>
                          <td style={{ fontWeight: 700, color: "var(--accent-cyan)" }}>{fmt(post.impressions || 0)}</td>
                          <td>{fmt(post.reach || 0)}</td>
                          <td style={{ fontWeight: 700, color: "var(--accent-emerald)" }}>{fmt(postEng)}</td>
                          <td><span className="badge badge-deleted">Deleted</span></td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            ) : (
              <div style={{ textAlign: "center", padding: "2rem", color: "var(--text-muted)", background: "rgba(255,255,255,0.02)", borderRadius: "8px" }}>
                No deleted or archived content in this account.
              </div>
            )}
          </div>
        </div>
      )}

      {/* ══ SECTION 5: PER-PLATFORM STATUS AUDIT ═════════════════════════════ */}
      <div className="report-section" style={{ marginBottom: "2rem" }}>
        <SectionHead emoji="📡" label="Per-Platform Status Breakdown & Distribution" colorBg="rgba(139, 92, 246, 0.1)" colorBorder="rgba(139, 92, 246, 0.3)" />
        
        <div className="report-section-body">
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "1.25rem" }}>
            {platformData.map((pl, idx) => (
              <div key={pl.name} style={{ padding: "1.25rem", borderRadius: "var(--radius-md)", background: "rgba(7,9,15,0.5)", border: `1px solid ${pColor(pl.name)}25` }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "0.75rem" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                    <span style={{ fontSize: "1.2rem", fontWeight: 800, color: pColor(pl.name) }}>{pl.name}</span>
                    <span style={{ fontSize: "0.75rem", color: "var(--text-muted)" }}>({pl.posts.length} posts)</span>
                  </div>
                  <span style={{ fontSize: "0.8rem", fontWeight: 700, color: pColor(pl.name) }}>{fmt(pl.imp)} views</span>
                </div>

                {/* Status pill strip for platform */}
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr 1fr", gap: "0.4rem", padding: "0.5rem", borderRadius: "6px", background: "rgba(255,255,255,0.03)", marginBottom: "0.75rem", textAlign: "center" }}>
                  <div>
                    <div style={{ fontSize: "0.65rem", color: "#10B981", fontWeight: 700 }}>LIVE</div>
                    <div style={{ fontSize: "0.95rem", fontWeight: 800 }}>{pl.uploaded.length}</div>
                  </div>
                  <div>
                    <div style={{ fontSize: "0.65rem", color: "#06B6D4", fontWeight: 700 }}>SCHED</div>
                    <div style={{ fontSize: "0.95rem", fontWeight: 800 }}>{pl.scheduled.length}</div>
                  </div>
                  <div>
                    <div style={{ fontSize: "0.65rem", color: "#F59E0B", fontWeight: 700 }}>PRIV</div>
                    <div style={{ fontSize: "0.95rem", fontWeight: 800 }}>{pl.privated.length}</div>
                  </div>
                  <div>
                    <div style={{ fontSize: "0.65rem", color: "#F43F5E", fontWeight: 700 }}>DEL</div>
                    <div style={{ fontSize: "0.95rem", fontWeight: 800 }}>{pl.deleted.length}</div>
                  </div>
                </div>

                <div style={{ display: "flex", justifyContent: "space-between", fontSize: "0.78rem", color: "var(--text-muted)" }}>
                  <span>Reach: <strong>{fmt(pl.reach)}</strong></span>
                  <span>Eng: <strong>{fmt(pl.eng)}</strong></span>
                  <span>ER: <strong style={{ color: erLabel(pl.er).color }}>{pl.er}%</strong></span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

    </div>
  );
}

window.ReportSummaryPage = ReportSummaryPage;
