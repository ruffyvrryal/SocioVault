// ReportSummaryPage — Deep Analytics Report with Per-Platform Breakdown
function ReportSummaryPage() {
  const { activeAccount, contents } = React.useContext(VaultContext);

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

  const accountContents = React.useMemo(
    () => contents.filter(c => c.accountId === activeAccount.id),
    [contents, activeAccount.id]
  );

  // ─── HELPERS ────────────────────────────────────────────────────────────────
  const fmt = n => n >= 1_000_000 ? (n/1_000_000).toFixed(2)+"M"
    : n >= 1_000 ? (n/1_000).toFixed(1)+"K" : (n||0).toLocaleString();
  const fmtFull = n => (n||0).toLocaleString();
  const fmtDate = d => {
    if (!d) return "—";
    const [y,m,day] = d.split("-");
    return new Date(+y,+m-1,+day).toLocaleDateString("en-US",{month:"short",day:"numeric",year:"numeric"});
  };
  const pct = (num, den) => den > 0 ? ((num/den)*100).toFixed(1) : "0.0";
  const erOf = (eng, reach) => reach > 0 ? ((eng/reach)*100).toFixed(2) : "0.00";
  const irOf = (imp, reach) => reach > 0 ? (imp/reach).toFixed(2) : "0.00";

  const PLATFORM_COLOR = { "Instagram":"#E1306C","YouTube":"#FF4444","TikTok":"#25F4EE","X (Twitter)":"#60A5FA","Facebook":"#4B8FE4","Threads":"#E8EAED" };
  const PLATFORM_ICON  = { "Instagram":"instagram","YouTube":"youtube","TikTok":"music-2","X (Twitter)":"twitter","Facebook":"facebook","Threads":"at-sign" };
  const pColor = p => PLATFORM_COLOR[p] || "var(--accent-primary)";
  const pIcon  = p => PLATFORM_ICON[p]  || "globe";

  const erLabel = er => {
    const v = parseFloat(er);
    if (v >= 6)  return { label:"Exceptional",       color:"#10B981" };
    if (v >= 3)  return { label:"Above Average",     color:"#34D399" };
    if (v >= 1)  return { label:"Industry Standard", color:"#F59E0B" };
    return             { label:"Needs Improvement",  color:"#F43F5E" };
  };

  // ─── COMBINED METRICS ───────────────────────────────────────────────────────
  const combined = React.useMemo(() => {
    const imp  = accountContents.reduce((s,c)=>s+(c.impressions||0),0);
    const reach= accountContents.reduce((s,c)=>s+(c.reach||0),0);
    const lik  = accountContents.reduce((s,c)=>s+(c.likes||0),0);
    const com  = accountContents.reduce((s,c)=>s+(c.comments||0),0);
    const sha  = accountContents.reduce((s,c)=>s+(c.shares||0),0);
    const sav  = accountContents.reduce((s,c)=>s+(c.saves||0),0);
    const eng  = lik+com+sha+sav;
    const n    = accountContents.length;
    const dates= accountContents.map(c=>c.uploadDate).filter(Boolean).sort();
    const statuses = {};
    accountContents.forEach(c=>{ const s=c.status||"Unknown"; statuses[s]=(statuses[s]||0)+1; });
    return {
      imp, reach, lik, com, sha, sav, eng,
      er: erOf(eng,reach), ir: irOf(imp,reach),
      avgImp: n>0?Math.round(imp/n):0,
      avgReach: n>0?Math.round(reach/n):0,
      avgEng: n>0?Math.round(eng/n):0,
      likPct: pct(lik,eng), comPct: pct(com,eng),
      shaPct: pct(sha,eng), savPct: pct(sav,eng),
      count: n, dateFrom: dates[0]||null, dateTo: dates[dates.length-1]||null,
      statuses,
      topContent: [...accountContents].sort((a,b)=>(b.impressions||0)-(a.impressions||0)).slice(0,3)
    };
  }, [accountContents]);

  // ─── PER-PLATFORM METRICS ───────────────────────────────────────────────────
  const platformData = React.useMemo(() => {
    const map = {};
    accountContents.forEach(c => {
      const p = c.platform || "Unknown";
      if (!map[p]) map[p] = { name:p, posts:[], imp:0, reach:0, lik:0, com:0, sha:0, sav:0 };
      map[p].posts.push(c);
      map[p].imp   += c.impressions||0;
      map[p].reach += c.reach||0;
      map[p].lik   += c.likes||0;
      map[p].com   += c.comments||0;
      map[p].sha   += c.shares||0;
      map[p].sav   += c.saves||0;
    });
    return Object.values(map).map(p => {
      const eng = p.lik+p.com+p.sha+p.sav;
      const n   = p.posts.length;
      return {
        ...p, eng,
        er: erOf(eng,p.reach), ir: irOf(p.imp,p.reach),
        avgImp:   n>0?Math.round(p.imp/n):0,
        avgReach: n>0?Math.round(p.reach/n):0,
        avgEng:   n>0?Math.round(eng/n):0,
        likPct: pct(p.lik,eng), comPct: pct(p.com,eng),
        shaPct: pct(p.sha,eng), savPct: pct(p.sav,eng),
        impShare: pct(p.imp, combined.imp||1),
        reachShare: pct(p.reach, combined.reach||1),
        engShare: pct(eng, combined.eng||1),
        topPost: [...p.posts].sort((a,b)=>(b.impressions||0)-(a.impressions||0))[0]||null,
        worstPost: [...p.posts].sort((a,b)=>(a.impressions||0)-(b.impressions||0))[0]||null,
        dates: p.posts.map(x=>x.uploadDate).filter(Boolean).sort()
      };
    }).sort((a,b)=>b.imp-a.imp);
  }, [accountContents, combined]);

  // ─── SUBJECT METRICS ────────────────────────────────────────────────────────
  const subjectData = React.useMemo(() => {
    const map = {};
    accountContents.forEach(c => {
      (c.subjects||[]).forEach(sub => {
        if (!map[sub]) map[sub] = { name:sub, count:0, imp:0, eng:0 };
        map[sub].count += 1;
        map[sub].imp   += c.impressions||0;
        map[sub].eng   += (c.likes||0)+(c.comments||0)+(c.shares||0)+(c.saves||0);
      });
    });
    return Object.values(map).sort((a,b)=>b.imp-a.imp);
  }, [accountContents]);

  const today = new Date().toLocaleDateString("en-US",{month:"long",day:"numeric",year:"numeric"});
  const erInfo = erLabel(combined.er);
  const maxPlatformImp = platformData.length > 0 ? platformData[0].imp : 1;

  // ─── DOCX EXPORT ────────────────────────────────────────────────────────────
  const handleExportDocx = () => {
    if (!window.docx) { alert("DOCX library not loaded — please check your internet connection and refresh."); return; }
    const { Document, Packer, Paragraph, TextRun, HeadingLevel, AlignmentType, BorderStyle } = window.docx;
    const H = (text, color="7C3AED") => new Paragraph({
      children: [new TextRun({ text, bold:true, size:26, color })],
      spacing: { before:400, after:150 },
      border: { bottom:{ style:BorderStyle.SINGLE, size:4, color:"2D3748" } }
    });
    const P = (text) => new Paragraph({ children:[new TextRun({text,size:20,color:"C9D1D9"})], spacing:{after:140} });
    const B = (label, value) => new Paragraph({
      children:[new TextRun({text:`${label}: `,bold:true,size:20,color:"F0F6FC"}), new TextRun({text:value,size:20,color:"9CA3AF"})],
      bullet:{level:0}, spacing:{after:80}
    });
    const children = [
      new Paragraph({ children:[new TextRun({text:"PERFORMANCE ANALYTICS REPORT",bold:true,size:44,color:"7C3AED"})], alignment:AlignmentType.CENTER, spacing:{after:100} }),
      new Paragraph({ children:[new TextRun({text:activeAccount.name,bold:true,size:30,color:"06B6D4"})], alignment:AlignmentType.CENTER, spacing:{after:80} }),
      new Paragraph({ children:[new TextRun({text:`Generated: ${today}  ·  Period: ${fmtDate(combined.dateFrom)} — ${fmtDate(combined.dateTo)}`,size:18,color:"6B7280",italics:true})], alignment:AlignmentType.CENTER, spacing:{after:400} }),
      H("EXECUTIVE SUMMARY","06B6D4"),
      P(`${activeAccount.name} has published ${combined.count} content pieces across ${platformData.length} platform(s), generating ${fmtFull(combined.imp)} total impressions and reaching ${fmtFull(combined.reach)} unique viewers. The overall engagement rate is ${combined.er}% (${erInfo.label}).`),
      H("COMBINED KEY METRICS","10B981"),
      B("Total Impressions", fmtFull(combined.imp)),
      B("Total Reach", fmtFull(combined.reach)),
      B("Total Engagement", `${fmtFull(combined.eng)} (Likes ${fmtFull(combined.lik)} · Comments ${fmtFull(combined.com)} · Shares ${fmtFull(combined.sha)} · Saves ${fmtFull(combined.sav)})`),
      B("Overall ER%", `${combined.er}% — ${erInfo.label}`),
      B("Impression/Reach Ratio", `${combined.ir}×`),
      B("Avg Impressions/Post", fmtFull(combined.avgImp)),
      B("Avg Reach/Post", fmtFull(combined.avgReach)),
      B("Avg Engagement/Post", fmtFull(combined.avgEng)),
    ];

    // Per-platform sections in DOCX
    platformData.forEach((pl, idx) => {
      const erI = erLabel(pl.er);
      children.push(H(`PLATFORM ${idx+1}: ${pl.name.toUpperCase()}`, pColor(pl.name).replace("#","")==="var(--accent-primary)"?"8B5CF6": pColor(pl.name).replace("#","")));
      children.push(B("Posts Published", `${pl.posts.length}`));
      children.push(B("Total Impressions", `${fmtFull(pl.imp)} (${pl.impShare}% of all platforms)`));
      children.push(B("Total Reach", `${fmtFull(pl.reach)} (${pl.reachShare}% of all platforms)`));
      children.push(B("Total Engagement", `${fmtFull(pl.eng)} (${pl.engShare}% of all platforms)`));
      children.push(B("Engagement Breakdown", `Likes ${fmtFull(pl.lik)} (${pl.likPct}%) · Comments ${fmtFull(pl.com)} (${pl.comPct}%) · Shares ${fmtFull(pl.sha)} (${pl.shaPct}%) · Saves ${fmtFull(pl.sav)} (${pl.savPct}%)`));
      children.push(B("Engagement Rate", `${pl.er}% — ${erI.label}`));
      children.push(B("Impression/Reach Ratio", `${pl.ir}×`));
      children.push(B("Avg Impressions/Post", fmtFull(pl.avgImp)));
      children.push(B("Avg Reach/Post", fmtFull(pl.avgReach)));
      children.push(B("Avg Engagement/Post", fmtFull(pl.avgEng)));
      if (pl.topPost) children.push(B("Top Post", `"${(pl.topPost.caption||"").substring(0,80)}…" · ${fmtFull(pl.topPost.impressions||0)} views · ER ${erOf((pl.topPost.likes||0)+(pl.topPost.comments||0)+(pl.topPost.shares||0)+(pl.topPost.saves||0), pl.topPost.reach||0)}%`));
      if (pl.dates.length) children.push(B("Date Range", `${fmtDate(pl.dates[0])} — ${fmtDate(pl.dates[pl.dates.length-1])}`));
    });

    // Subject section
    if (subjectData.length > 0) {
      children.push(H("SUBJECT / TALENT PERFORMANCE","EC4899"));
      subjectData.forEach(s => children.push(B(s.name, `${s.count} appearance(s) · ${fmtFull(s.imp)} impressions (${pct(s.imp,combined.imp||1)}% of total)`)));
    }

    // Top 3
    children.push(H("TOP 3 PERFORMING CONTENT","F59E0B"));
    combined.topContent.forEach((c,i) => {
      const eng=(c.likes||0)+(c.comments||0)+(c.shares||0)+(c.saves||0);
      children.push(B(`#${i+1} — ${c.platform} (${fmtDate(c.uploadDate)})`, `"${(c.caption||"").substring(0,80)}…" · ${fmtFull(c.impressions||0)} views · ${fmtFull(c.reach||0)} reach · ${fmtFull(eng)} engagements · ER ${erOf(eng,c.reach||0)}%`));
    });

    // Recommendations
    children.push(H("STRATEGIC RECOMMENDATIONS","34D399"));
    const bestPl = platformData[0];
    children.push(B("1. Double Down on Best Platform", bestPl ? `${bestPl.name} leads with ${fmtFull(bestPl.imp)} impressions (${bestPl.impShare}% of total). Increase posting frequency and test new formats here.` : "Identify your top platform and allocate more content resources."));
    children.push(B("2. Replicate Top Performers", `Study the format, timing, and hashtags of your top posts and build repeatable templates.`));
    children.push(B("3. Improve Engagement Rate", `Current ER: ${combined.er}% (${erInfo.label}). Use interactive hooks — polls, Q&A, pinned comments — to drive higher interaction.`));
    children.push(B("4. Boost Saves & Shares", `Saves (${combined.savPct}%) signal evergreen value. Produce how-to and reference content. Shares (${combined.shaPct}%) drive organic reach — emotional/surprising hooks maximise share velocity.`));
    children.push(B("5. Diversify Platform Mix", platformData.length < 3 ? "Expand to additional platforms to reduce single-platform dependency and grow total audience." : `You operate on ${platformData.length} platforms. Identify underperformers and consider reallocating their budget to top-performing channels.`));
    children.push(new Paragraph({ children:[new TextRun({text:`\nGenerated by SocioVault · ${today}`,size:16,color:"484F58",italics:true})], alignment:AlignmentType.CENTER, spacing:{before:600} }));

    const doc = new Document({ sections:[{ properties:{}, children }] });
    window.docx.Packer.toBlob(doc).then(blob => {
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = `${activeAccount.name.replace(/\s+/g,"_")}_Report_${new Date().toISOString().slice(0,10)}.docx`;
      a.click();
      URL.revokeObjectURL(url);
    });
  };

  // ─── REUSABLE SUB-COMPONENTS (inline) ───────────────────────────────────────
  const MetricPill = ({ value, color, bg }) => (
    <span style={{ display:"inline-flex", alignItems:"center", padding:"0.15rem 0.6rem", borderRadius:"6px", background:bg||`${color}18`, border:`1px solid ${color}30`, fontSize:"0.82rem", fontWeight:700, color, fontFamily:"var(--font-heading)", whiteSpace:"nowrap" }}>
      {value}
    </span>
  );

  const EngBar = ({ label, icon, value, pctVal, color, gradient, total }) => (
    <div className="engagement-bar-row">
      <div className="engagement-bar-label">
        <i data-lucide={icon} style={{ width:"13px", height:"13px", color, flexShrink:0 }}></i>
        {label}
      </div>
      <div className="engagement-bar-track">
        <div className="engagement-bar-fill" style={{ width:`${pctVal}%`, background:gradient }}></div>
      </div>
      <div className="engagement-bar-value">{fmt(value)}</div>
      <div className="engagement-bar-pct">{pctVal}%</div>
    </div>
  );

  const SectionHead = ({ emoji, label, colorBg, colorBorder }) => (
    <div className="report-section-head">
      <div className="report-section-icon" style={{ background:colorBg, border:`1px solid ${colorBorder}` }}>
        <span>{emoji}</span>
      </div>
      <div className="report-section-label">{label}</div>
    </div>
  );

  const MiniStat = ({ label, value, color }) => (
    <div style={{ display:"flex", flexDirection:"column", gap:"0.2rem" }}>
      <span style={{ fontSize:"0.68rem", color:"var(--text-subtle)", textTransform:"uppercase", letterSpacing:"0.05em", fontWeight:700 }}>{label}</span>
      <span style={{ fontSize:"1.05rem", fontWeight:800, fontFamily:"var(--font-heading)", color:color||"var(--text-main)" }}>{value}</span>
    </div>
  );

  // ─── RENDER ─────────────────────────────────────────────────────────────────
  return (
    <div className="page-container">

      {/* ══ HERO ══════════════════════════════════════════════════════════════ */}
      <div className="report-hero">
        <div className="report-hero-content">
          <div className="report-title-eyebrow">
            <i data-lucide="file-bar-chart" style={{ width:"12px", height:"12px" }}></i>
            Performance Analytics Report
          </div>
          <h1 className="report-hero-title">{activeAccount.name}</h1>
          <p style={{ color:"var(--text-muted)", fontSize:"0.9rem", marginBottom:"0.5rem" }}>{activeAccount.description||"Social Media Analytics Overview"}</p>
          <div className="report-hero-meta">
            <div className="report-hero-meta-item"><i data-lucide="calendar" style={{ width:"13px", height:"13px" }}></i><span>{combined.dateFrom ? `${fmtDate(combined.dateFrom)} — ${fmtDate(combined.dateTo)}` : "All-Time"}</span></div>
            <div className="report-hero-meta-item"><i data-lucide="layers" style={{ width:"13px", height:"13px" }}></i><span>{combined.count} content pieces</span></div>
            <div className="report-hero-meta-item"><i data-lucide="monitor-smartphone" style={{ width:"13px", height:"13px" }}></i><span>{platformData.length} platform{platformData.length!==1?"s":""}</span></div>
            <div className="report-hero-meta-item"><i data-lucide="clock" style={{ width:"13px", height:"13px" }}></i><span>Generated {today}</span></div>
          </div>
        </div>
        <div style={{ position:"absolute", top:"1.5rem", right:"1.5rem", display:"flex", gap:"0.6rem", flexWrap:"wrap" }}>
          <button className="btn btn-export btn-sm" onClick={handleExportDocx} title="Export full report as .docx">
            <i data-lucide="download" style={{ width:"13px", height:"13px" }}></i> Export DOCX
          </button>
          <button className="btn btn-print btn-sm" onClick={()=>window.print()}>
            <i data-lucide="printer" style={{ width:"13px", height:"13px" }}></i> Print
          </button>
        </div>
      </div>

      {/* ══ COMBINED KPI STRIP ════════════════════════════════════════════════ */}
      <div className="report-kpi-grid">
        {[
          { label:"Total Impressions",   value:fmt(combined.imp),    sub:fmtFull(combined.imp)+" views",               color:"#06B6D4", g:"linear-gradient(90deg,#06B6D4,#22D3EE)" },
          { label:"Total Reach",         value:fmt(combined.reach),  sub:"unique viewers",                              color:"#8B5CF6", g:"linear-gradient(90deg,#8B5CF6,#A78BFA)" },
          { label:"Total Engagement",    value:fmt(combined.eng),    sub:"likes+comments+shares+saves",                color:"#10B981", g:"linear-gradient(90deg,#10B981,#34D399)" },
          { label:"Engagement Rate",     value:combined.er+"%",      sub:erInfo.label,                                  color:erInfo.color, g:`linear-gradient(90deg,${erInfo.color},${erInfo.color}88)` },
          { label:"Avg Views / Post",    value:fmt(combined.avgImp), sub:"per content piece",                           color:"#F59E0B", g:"linear-gradient(90deg,#F59E0B,#FCD34D)" },
          { label:"Impression/Reach ×",  value:combined.ir+"×",      sub:parseFloat(combined.ir)>1.5?"Strong retention":"Single-view pattern", color:"#EC4899", g:"linear-gradient(90deg,#EC4899,#F9A8D4)" },
        ].map((k,i) => (
          <div key={i} className="report-kpi-card">
            <div className="kpi-accent-bar" style={{ background:k.g }}></div>
            <div className="report-kpi-label">{k.label}</div>
            <div className="report-kpi-value" style={{ color:k.color }}>{k.value}</div>
            <div className="report-kpi-sub">{k.sub}</div>
          </div>
        ))}
      </div>

      {/* ══ EXECUTIVE SUMMARY ════════════════════════════════════════════════ */}
      <div className="report-section" style={{ marginBottom:"1.5rem" }}>
        <SectionHead emoji="📋" label="Executive Summary" colorBg="rgba(6,182,212,0.1)" colorBorder="rgba(6,182,212,0.2)" />
        <div className="report-section-body">
          <div className="insight-prose">
            <p>
              <strong>{activeAccount.name}</strong> has published{" "}
              <MetricPill value={`${combined.count} pieces`} color="#8B5CF6" /> of content across{" "}
              <MetricPill value={`${platformData.length} platform${platformData.length!==1?"s":""}`} color="#06B6D4" />,
              generating <MetricPill value={fmtFull(combined.imp)+" impressions"} color="#06B6D4" /> and reaching{" "}
              <MetricPill value={fmtFull(combined.reach)+" unique viewers"} color="#8B5CF6" />.
              The impression-to-reach ratio of <strong>{combined.ir}×</strong> indicates{" "}
              {parseFloat(combined.ir)>1.5 ? "strong content retention — viewers consume content multiple times" : "a typical single-view consumption pattern"}.
            </p>
            <p>
              Total audience interaction stands at{" "}
              <MetricPill value={fmtFull(combined.eng)+" engagements"} color="#10B981" />,
              yielding an overall engagement rate of{" "}
              <MetricPill value={combined.er+"%"} color={erInfo.color} /> —
              classified as <strong style={{ color:erInfo.color }}>{erInfo.label}</strong>.
              On average, each post receives <strong>{fmtFull(combined.avgImp)}</strong> views,{" "}
              <strong>{fmtFull(combined.avgReach)}</strong> unique viewers, and{" "}
              <strong>{fmtFull(combined.avgEng)}</strong> interactions.
            </p>
            {platformData.length > 0 && (
              <p>
                The strongest platform is{" "}
                <MetricPill value={platformData[0].name} color={pColor(platformData[0].name)} />
                {" "}driving{" "}<strong>{platformData[0].impShare}%</strong> of total impressions.
                {platformData.length > 1 && (
                  <> The full breakdown across all {platformData.length} platforms is detailed in the per-platform sections below.</>
                )}
              </p>
            )}
          </div>
        </div>
      </div>

      {/* ══ COMBINED ENGAGEMENT + STATUS ════════════════════════════════════ */}
      <div className="report-two-col" style={{ marginBottom:"1.5rem" }}>

        {/* Engagement Breakdown */}
        <div className="report-section" style={{ marginBottom:0 }}>
          <SectionHead emoji="💬" label="Combined Engagement Breakdown" colorBg="rgba(139,92,246,0.1)" colorBorder="rgba(139,92,246,0.2)" />
          <div className="report-section-body">
            {[
              { label:"Likes",    icon:"heart",         value:combined.lik, pctVal:combined.likPct, color:"#F43F5E", gradient:"linear-gradient(90deg,#F43F5E,#FB7185)" },
              { label:"Comments", icon:"message-circle",value:combined.com, pctVal:combined.comPct, color:"#8B5CF6", gradient:"linear-gradient(90deg,#8B5CF6,#A78BFA)" },
              { label:"Shares",   icon:"repeat-2",      value:combined.sha, pctVal:combined.shaPct, color:"#06B6D4", gradient:"linear-gradient(90deg,#06B6D4,#22D3EE)" },
              { label:"Saves",    icon:"bookmark",      value:combined.sav, pctVal:combined.savPct, color:"#10B981", gradient:"linear-gradient(90deg,#10B981,#34D399)" },
            ].map(item => <EngBar key={item.label} {...item} />)}
            <div style={{ marginTop:"1rem", paddingTop:"0.85rem", borderTop:"1px solid var(--border-color)", display:"flex", justifyContent:"space-between", alignItems:"center" }}>
              <span style={{ fontSize:"0.78rem", color:"var(--text-muted)", fontWeight:700, textTransform:"uppercase", letterSpacing:"0.04em" }}>Total</span>
              <span style={{ fontSize:"1.2rem", fontWeight:800, fontFamily:"var(--font-heading)", color:"var(--accent-emerald)" }}>{fmtFull(combined.eng)}</span>
            </div>
            <div style={{ marginTop:"0.85rem", padding:"0.85rem 1rem", background:"rgba(139,92,246,0.06)", borderRadius:"var(--radius-sm)", border:"1px solid rgba(139,92,246,0.1)" }}>
              <p style={{ fontSize:"0.8rem", color:"var(--text-muted)", lineHeight:1.6, margin:0 }}>
                <strong style={{ color:"var(--accent-primary-light)" }}>💡 Insight: </strong>
                {parseFloat(combined.savPct)>=15 ? `High save rate (${combined.savPct}%) signals strong evergreen content value.`
                  : parseFloat(combined.shaPct)>=15 ? `Strong share rate (${combined.shaPct}%) is driving organic amplification.`
                  : parseFloat(combined.comPct)>=15 ? `Above-average comment rate (${combined.comPct}%) shows high conversational engagement.`
                  : `Likes dominate at ${combined.likPct}% — use CTAs to convert passive likes into saves and shares.`}
              </p>
            </div>
          </div>
        </div>

        {/* Content Status */}
        <div className="report-section" style={{ marginBottom:0 }}>
          <SectionHead emoji="📊" label="Content Status Overview" colorBg="rgba(245,158,11,0.1)" colorBorder="rgba(245,158,11,0.2)" />
          <div className="report-section-body">
            <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:"0.85rem", marginBottom:"1.25rem" }}>
              {[
                { key:"Uploaded",  label:"Published",color:"#10B981",g:"linear-gradient(135deg,rgba(16,185,129,0.15),rgba(16,185,129,0.05))",b:"rgba(16,185,129,0.3)", icon:"check-circle" },
                { key:"Scheduled", label:"Scheduled",color:"#06B6D4",g:"linear-gradient(135deg,rgba(6,182,212,0.15),rgba(6,182,212,0.05))",  b:"rgba(6,182,212,0.3)",  icon:"clock"        },
                { key:"Privated",  label:"Privated", color:"#F59E0B",g:"linear-gradient(135deg,rgba(245,158,11,0.15),rgba(245,158,11,0.05))",b:"rgba(245,158,11,0.3)", icon:"eye-off"      },
                { key:"Deleted",   label:"Archived", color:"#F43F5E",g:"linear-gradient(135deg,rgba(244,63,94,0.12),rgba(244,63,94,0.04))",  b:"rgba(244,63,94,0.25)", icon:"archive"      },
              ].map(s => {
                const count = combined.statuses[s.key]||0;
                if (count===0) return null;
                return (
                  <div key={s.key} style={{ padding:"1rem", borderRadius:"var(--radius-md)", background:s.g, border:`1px solid ${s.b}` }}>
                    <div style={{ display:"flex", alignItems:"center", justifyContent:"space-between", marginBottom:"0.5rem" }}>
                      <i data-lucide={s.icon} style={{ width:"15px", height:"15px", color:s.color }}></i>
                      <span style={{ fontSize:"0.7rem", color:s.color, fontWeight:700 }}>{pct(count,combined.count)}%</span>
                    </div>
                    <div style={{ fontSize:"1.6rem", fontWeight:800, fontFamily:"var(--font-heading)", color:s.color, lineHeight:1 }}>{count}</div>
                    <div style={{ fontSize:"0.72rem", color:"var(--text-muted)", fontWeight:700, marginTop:"0.2rem", textTransform:"uppercase", letterSpacing:"0.04em" }}>{s.label}</div>
                  </div>
                );
              })}
            </div>
            <div style={{ fontSize:"0.78rem", color:"var(--text-muted)", fontWeight:700, marginBottom:"0.5rem", textTransform:"uppercase", letterSpacing:"0.04em" }}>Publication Rate</div>
            <div className="progress-bar-track progress-bar-track-lg">
              <div className="progress-bar-fill progress-bar-fill-emerald" style={{ width:`${pct(combined.statuses["Uploaded"]||0, combined.count)}%` }}></div>
            </div>
            <div style={{ display:"flex", justifyContent:"space-between", marginTop:"0.35rem" }}>
              <span style={{ fontSize:"0.75rem", color:"var(--accent-emerald)" }}>{combined.statuses["Uploaded"]||0} published</span>
              <span style={{ fontSize:"0.75rem", color:"var(--text-muted)" }}>{combined.count} total</span>
            </div>
            <div style={{ marginTop:"1rem", padding:"0.85rem 1rem", background:`${erInfo.color}0F`, borderRadius:"var(--radius-sm)", border:`1px solid ${erInfo.color}25` }}>
              <div style={{ fontSize:"0.72rem", textTransform:"uppercase", letterSpacing:"0.05em", color:"var(--text-subtle)", fontWeight:700, marginBottom:"0.3rem" }}>Overall ER Health</div>
              <div style={{ display:"flex", alignItems:"center", justifyContent:"space-between" }}>
                <span style={{ fontSize:"1.5rem", fontWeight:800, fontFamily:"var(--font-heading)", color:erInfo.color }}>{combined.er}%</span>
                <span style={{ padding:"0.25rem 0.65rem", borderRadius:"var(--radius-full)", background:`${erInfo.color}18`, border:`1px solid ${erInfo.color}30`, fontSize:"0.75rem", fontWeight:700, color:erInfo.color }}>{erInfo.label}</span>
              </div>
            </div>
          </div>
        </div>

      </div>

      {/* ══ PLATFORM SHARE OVERVIEW (comparison bar) ═════════════════════════ */}
      {platformData.length > 1 && (
        <div className="report-section" style={{ marginBottom:"1.5rem" }}>
          <SectionHead emoji="📡" label="Cross-Platform Comparison Overview" colorBg="rgba(99,102,241,0.1)" colorBorder="rgba(99,102,241,0.2)" />
          <div className="report-section-body">
            <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fit,minmax(260px,1fr))", gap:"1rem", marginBottom:"1.5rem" }}>
              {["Impressions","Reach","Engagement","ER%"].map(metric => (
                <div key={metric} style={{ padding:"1rem", borderRadius:"var(--radius-md)", background:"rgba(7,9,15,0.5)", border:"1px solid var(--border-color)" }}>
                  <div style={{ fontSize:"0.72rem", color:"var(--text-muted)", fontWeight:700, textTransform:"uppercase", letterSpacing:"0.05em", marginBottom:"0.75rem" }}>{metric} — Platform Ranking</div>
                  {[...platformData].sort((a,b) => {
                    if (metric==="Impressions") return b.imp-a.imp;
                    if (metric==="Reach")       return b.reach-a.reach;
                    if (metric==="Engagement")  return b.eng-a.eng;
                    return parseFloat(b.er)-parseFloat(a.er);
                  }).map((pl,rank) => {
                    const val = metric==="Impressions"?pl.imp : metric==="Reach"?pl.reach : metric==="Engagement"?pl.eng : null;
                    const maxVal = metric==="Impressions"?platformData[0].imp : metric==="Reach"?Math.max(...platformData.map(p=>p.reach)) : metric==="Engagement"?Math.max(...platformData.map(p=>p.eng)) : Math.max(...platformData.map(p=>parseFloat(p.er)));
                    const barPct = maxVal > 0 ? ((metric==="ER%"?parseFloat(pl.er):val)/maxVal)*100 : 0;
                    const color = pColor(pl.name);
                    return (
                      <div key={pl.name} style={{ marginBottom:"0.6rem" }}>
                        <div style={{ display:"flex", alignItems:"center", justifyContent:"space-between", marginBottom:"0.2rem" }}>
                          <div style={{ display:"flex", alignItems:"center", gap:"0.4rem" }}>
                            <span style={{ fontSize:"0.7rem", fontWeight:800, color:"var(--text-subtle)", width:"14px" }}>#{rank+1}</span>
                            <i data-lucide={pIcon(pl.name)} style={{ width:"11px", height:"11px", color }}></i>
                            <span style={{ fontSize:"0.78rem", fontWeight:600, color:"var(--text-secondary)" }}>{pl.name}</span>
                          </div>
                          <span style={{ fontSize:"0.78rem", fontWeight:700, color }}>{metric==="ER%"?pl.er+"%":fmt(val)}</span>
                        </div>
                        <div className="progress-bar-track">
                          <div className="progress-bar-fill" style={{ width:`${barPct}%`, background:`linear-gradient(90deg,${color},${color}88)` }}></div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* ══ PER-PLATFORM DEEP ANALYSIS ═══════════════════════════════════════ */}
      {platformData.map((pl, plIdx) => {
        const color = pColor(pl.name);
        const erI   = erLabel(pl.er);
        const medals = ["🥇","🥈","🥉"];

        return (
          <div key={pl.name} className="report-section" style={{ marginBottom:"1.5rem" }}>
            {/* Platform Header */}
            <div className="report-section-head" style={{ background:`linear-gradient(135deg,${color}12,${color}05)`, borderBottom:`1px solid ${color}25` }}>
              <div style={{ width:"36px", height:"36px", borderRadius:"10px", background:`${color}18`, border:`1px solid ${color}35`, display:"flex", alignItems:"center", justifyContent:"center", flexShrink:0 }}>
                <i data-lucide={pIcon(pl.name)} style={{ width:"16px", height:"16px", color }}></i>
              </div>
              <div style={{ flex:1 }}>
                <div style={{ display:"flex", alignItems:"center", gap:"0.65rem" }}>
                  <span className="report-section-label" style={{ color }}>{pl.name}</span>
                  <span style={{ fontSize:"0.7rem", color:erI.color, fontWeight:700, padding:"0.15rem 0.5rem", borderRadius:"var(--radius-full)", background:`${erI.color}15`, border:`1px solid ${erI.color}30` }}>ER {pl.er}% · {erI.label}</span>
                  {plIdx===0 && <span style={{ fontSize:"0.68rem", color:"#F59E0B", fontWeight:800, padding:"0.12rem 0.45rem", borderRadius:"var(--radius-full)", background:"rgba(245,158,11,0.12)", border:"1px solid rgba(245,158,11,0.3)" }}>🏆 Top Platform</span>}
                </div>
                <div style={{ fontSize:"0.78rem", color:"var(--text-muted)", marginTop:"0.15rem" }}>
                  {pl.posts.length} post{pl.posts.length!==1?"s":""} · {pl.dates.length ? `${fmtDate(pl.dates[0])} — ${fmtDate(pl.dates[pl.dates.length-1])}` : "No dates"}
                </div>
              </div>
              <div style={{ textAlign:"right", flexShrink:0 }}>
                <div style={{ fontSize:"1.4rem", fontWeight:900, fontFamily:"var(--font-heading)", color }}>{fmt(pl.imp)}</div>
                <div style={{ fontSize:"0.7rem", color:"var(--text-subtle)", textTransform:"uppercase", letterSpacing:"0.04em" }}>Impressions</div>
              </div>
            </div>

            <div className="report-section-body">

              {/* KPI Row */}
              <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fit,minmax(140px,1fr))", gap:"0.85rem", marginBottom:"1.5rem" }}>
                {[
                  { label:"Impressions",   value:fmt(pl.imp),    sub:`${pl.impShare}% of total`,  color },
                  { label:"Reach",         value:fmt(pl.reach),  sub:`${pl.reachShare}% of total`,color:"var(--accent-primary)" },
                  { label:"Engagement",    value:fmt(pl.eng),    sub:`${pl.engShare}% of total`,  color:"var(--accent-emerald)" },
                  { label:"Eng. Rate",     value:pl.er+"%",      sub:erI.label,                    color:erI.color },
                  { label:"Imp/Reach ×",   value:pl.ir+"×",      sub:parseFloat(pl.ir)>1.5?"Strong retention":"Single-view",color:"#EC4899" },
                  { label:"Avg Views/Post",value:fmt(pl.avgImp), sub:"per post",                  color:"#F59E0B" },
                  { label:"Avg Reach/Post",value:fmt(pl.avgReach),sub:"per post",                 color:"var(--accent-primary)" },
                  { label:"Avg Eng/Post",  value:fmt(pl.avgEng), sub:"per post",                  color:"var(--accent-emerald)" },
                ].map((k,i) => (
                  <div key={i} style={{ padding:"0.85rem 1rem", borderRadius:"var(--radius-md)", background:"rgba(7,9,15,0.5)", border:`1px solid ${color}18` }}>
                    <div style={{ fontSize:"0.68rem", color:"var(--text-subtle)", textTransform:"uppercase", letterSpacing:"0.05em", fontWeight:700, marginBottom:"0.4rem" }}>{k.label}</div>
                    <div style={{ fontSize:"1.15rem", fontWeight:800, fontFamily:"var(--font-heading)", color:k.color, lineHeight:1, marginBottom:"0.2rem" }}>{k.value}</div>
                    <div style={{ fontSize:"0.7rem", color:"var(--text-subtle)" }}>{k.sub}</div>
                  </div>
                ))}
              </div>

              {/* Engagement Mix + Share bars side by side */}
              <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:"1.25rem", marginBottom:"1.5rem" }}>

                {/* Engagement breakdown */}
                <div style={{ padding:"1.1rem 1.25rem", borderRadius:"var(--radius-md)", background:"rgba(7,9,15,0.4)", border:`1px solid ${color}15` }}>
                  <div style={{ fontSize:"0.75rem", color:"var(--text-muted)", fontWeight:700, textTransform:"uppercase", letterSpacing:"0.05em", marginBottom:"1rem" }}>Engagement Mix</div>
                  {[
                    { label:"Likes",    icon:"heart",         value:pl.lik, pctVal:pl.likPct, color:"#F43F5E", gradient:"linear-gradient(90deg,#F43F5E,#FB7185)" },
                    { label:"Comments", icon:"message-circle",value:pl.com, pctVal:pl.comPct, color:"#8B5CF6", gradient:"linear-gradient(90deg,#8B5CF6,#A78BFA)" },
                    { label:"Shares",   icon:"repeat-2",      value:pl.sha, pctVal:pl.shaPct, color:"#06B6D4", gradient:"linear-gradient(90deg,#06B6D4,#22D3EE)" },
                    { label:"Saves",    icon:"bookmark",      value:pl.sav, pctVal:pl.savPct, color:"#10B981", gradient:"linear-gradient(90deg,#10B981,#34D399)" },
                  ].map(item => <EngBar key={item.label} {...item} />)}
                </div>

                {/* Share of total */}
                <div style={{ padding:"1.1rem 1.25rem", borderRadius:"var(--radius-md)", background:"rgba(7,9,15,0.4)", border:`1px solid ${color}15` }}>
                  <div style={{ fontSize:"0.75rem", color:"var(--text-muted)", fontWeight:700, textTransform:"uppercase", letterSpacing:"0.05em", marginBottom:"1rem" }}>Share of All-Platform Total</div>
                  {[
                    { label:"Impressions", val:pl.imp,   share:pl.impShare,   maxVal:combined.imp,   color },
                    { label:"Reach",       val:pl.reach, share:pl.reachShare, maxVal:combined.reach, color:"var(--accent-primary)" },
                    { label:"Engagement",  val:pl.eng,   share:pl.engShare,   maxVal:combined.eng,   color:"var(--accent-emerald)" },
                  ].map(s => (
                    <div key={s.label} style={{ marginBottom:"0.85rem" }}>
                      <div style={{ display:"flex", justifyContent:"space-between", alignItems:"center", marginBottom:"0.3rem" }}>
                        <span style={{ fontSize:"0.78rem", fontWeight:600, color:"var(--text-secondary)" }}>{s.label}</span>
                        <div style={{ display:"flex", gap:"0.5rem", alignItems:"center" }}>
                          <span style={{ fontSize:"0.78rem", fontWeight:700, color:s.color }}>{fmt(s.val)}</span>
                          <span style={{ fontSize:"0.7rem", color:"var(--text-muted)", background:"rgba(255,255,255,0.05)", padding:"0.1rem 0.4rem", borderRadius:"4px" }}>{s.share}%</span>
                        </div>
                      </div>
                      <div className="progress-bar-track">
                        <div className="progress-bar-fill" style={{ width:`${s.share}%`, background:`linear-gradient(90deg,${s.color},${s.color}88)` }}></div>
                      </div>
                    </div>
                  ))}
                  {/* Insights */}
                  <div style={{ marginTop:"0.85rem", padding:"0.75rem", background:`${color}08`, borderRadius:"var(--radius-sm)", border:`1px solid ${color}18` }}>
                    <p style={{ fontSize:"0.78rem", color:"var(--text-muted)", lineHeight:1.6, margin:0 }}>
                      <strong style={{ color }}>💡 </strong>
                      {parseFloat(pl.er) > parseFloat(combined.er)
                        ? `${pl.name} outperforms the account average ER (${combined.er}%) with ${pl.er}% — prioritise this platform.`
                        : `${pl.name} ER (${pl.er}%) is below account average (${combined.er}%). Test new formats or posting times here.`}
                    </p>
                  </div>
                </div>
              </div>

              {/* All Posts on this Platform */}
              <div style={{ marginBottom:"1.5rem" }}>
                <div style={{ fontSize:"0.75rem", color:"var(--text-muted)", fontWeight:700, textTransform:"uppercase", letterSpacing:"0.05em", marginBottom:"0.85rem" }}>
                  All {pl.posts.length} Post{pl.posts.length!==1?"s":""} on {pl.name}
                </div>
                <div style={{ borderRadius:"var(--radius-md)", border:`1px solid ${color}18`, overflow:"hidden" }}>
                  <table className="custom-table" style={{ fontSize:"0.8rem" }}>
                    <thead>
                      <tr>
                        <th>Date</th>
                        <th>Caption</th>
                        <th style={{ color:"var(--accent-cyan)" }}>Views</th>
                        <th>Reach</th>
                        <th style={{ color:"var(--accent-emerald)" }}>Engmt</th>
                        <th>Likes</th>
                        <th>Cmts</th>
                        <th>Shares</th>
                        <th>Saves</th>
                        <th style={{ color:"var(--accent-primary)" }}>ER%</th>
                        <th>Status</th>
                      </tr>
                    </thead>
                    <tbody>
                      {[...pl.posts].sort((a,b)=>(b.impressions||0)-(a.impressions||0)).map((post, pIdx) => {
                        const postEng = (post.likes||0)+(post.comments||0)+(post.shares||0)+(post.saves||0);
                        const postEr  = erOf(postEng, post.reach||0);
                        const isTop   = pIdx===0;
                        return (
                          <tr key={post.id||pIdx} style={isTop?{background:`${color}08`}:{}}>
                            <td style={{ whiteSpace:"nowrap", color:"var(--text-muted)" }}>{fmtDate(post.uploadDate)}</td>
                            <td style={{ maxWidth:"200px" }}>
                              <div style={{ display:"flex", alignItems:"flex-start", gap:"0.35rem" }}>
                                {isTop && <span title="Top post" style={{ fontSize:"0.7rem", flexShrink:0 }}>🏆</span>}
                                <span style={{ overflow:"hidden", textOverflow:"ellipsis", whiteSpace:"nowrap", display:"block", maxWidth:"180px", color:"var(--text-secondary)" }} title={post.caption||""}>
                                  {(post.caption||"—").substring(0,60)}{post.caption?.length>60?"…":""}
                                </span>
                              </div>
                            </td>
                            <td style={{ fontWeight:700, color:"var(--accent-cyan)" }}>{fmt(post.impressions||0)}</td>
                            <td>{fmt(post.reach||0)}</td>
                            <td style={{ fontWeight:700, color:"var(--accent-emerald)" }}>{fmt(postEng)}</td>
                            <td>{fmt(post.likes||0)}</td>
                            <td>{fmt(post.comments||0)}</td>
                            <td>{fmt(post.shares||0)}</td>
                            <td>{fmt(post.saves||0)}</td>
                            <td style={{ fontWeight:700, color:erLabel(postEr).color }}>{postEr}%</td>
                            <td><span className={`badge badge-${(post.status||"uploaded").toLowerCase()}`}>{post.status||"—"}</span></td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Top Post Highlight */}
              {pl.topPost && (
                <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:"1rem" }}>
                  <div style={{ padding:"1.1rem 1.25rem", borderRadius:"var(--radius-md)", background:`linear-gradient(135deg,rgba(245,158,11,0.08),rgba(245,158,11,0.03))`, border:"1px solid rgba(245,158,11,0.25)" }}>
                    <div style={{ display:"flex", alignItems:"center", gap:"0.5rem", marginBottom:"0.75rem" }}>
                      <span style={{ fontSize:"1.1rem" }}>🏆</span>
                      <span style={{ fontSize:"0.72rem", color:"#F59E0B", fontWeight:800, textTransform:"uppercase", letterSpacing:"0.05em" }}>Top Post on {pl.name}</span>
                    </div>
                    <p style={{ fontSize:"0.82rem", color:"var(--text-secondary)", lineHeight:1.55, marginBottom:"0.85rem" }}>
                      "{(pl.topPost.caption||"No caption").substring(0,100)}{pl.topPost.caption?.length>100?"…":""}"
                    </p>
                    <div style={{ display:"flex", gap:"0.5rem", flexWrap:"wrap" }}>
                      {(pl.topPost.hashtags||[]).slice(0,4).map(t=><span key={t} className="chip" style={{ fontSize:"0.7rem", padding:"0.12rem 0.45rem" }}>{t}</span>)}
                    </div>
                    <div style={{ display:"grid", gridTemplateColumns:"repeat(3,1fr)", gap:"0.5rem", marginTop:"0.85rem", paddingTop:"0.75rem", borderTop:"1px solid rgba(255,255,255,0.06)" }}>
                      <MiniStat label="Views"   value={fmt(pl.topPost.impressions||0)} color="var(--accent-cyan)" />
                      <MiniStat label="Reach"   value={fmt(pl.topPost.reach||0)} />
                      <MiniStat label="ER"      value={erOf((pl.topPost.likes||0)+(pl.topPost.comments||0)+(pl.topPost.shares||0)+(pl.topPost.saves||0),pl.topPost.reach||0)+"%"} color={erLabel(erOf((pl.topPost.likes||0)+(pl.topPost.comments||0)+(pl.topPost.shares||0)+(pl.topPost.saves||0),pl.topPost.reach||0)).color} />
                      <MiniStat label="Likes"   value={fmt(pl.topPost.likes||0)}    color="#FB7185" />
                      <MiniStat label="Shares"  value={fmt(pl.topPost.shares||0)}   color="var(--accent-cyan)" />
                      <MiniStat label="Saves"   value={fmt(pl.topPost.saves||0)}    color="var(--accent-emerald)" />
                    </div>
                  </div>

                  {/* Platform narrative */}
                  <div style={{ padding:"1.1rem 1.25rem", borderRadius:"var(--radius-md)", background:"rgba(7,9,15,0.4)", border:`1px solid ${color}15` }}>
                    <div style={{ fontSize:"0.72rem", color:"var(--text-muted)", fontWeight:700, textTransform:"uppercase", letterSpacing:"0.05em", marginBottom:"0.85rem" }}>Platform Analysis</div>
                    <div className="insight-prose" style={{ fontSize:"0.82rem" }}>
                      <p>
                        <strong style={{ color }}>{pl.name}</strong> accounts for{" "}
                        <MetricPill value={pl.impShare+"%"} color={color} /> of total impressions and{" "}
                        <MetricPill value={pl.engShare+"%"} color="var(--accent-emerald)" /> of total engagement across {pl.posts.length} post{pl.posts.length!==1?"s":""}.
                      </p>
                      <p>
                        {parseFloat(pl.er)>parseFloat(combined.er)
                          ? <><MetricPill value={pl.name+" ER "+pl.er+"%"} color={erI.color} /> exceeds the overall account average of {combined.er}%, making it the highest-return platform relative to audience size.</>
                          : <>At {pl.er}% ER, {pl.name} sits below the account average of {combined.er}%. Consider revising content formats, posting frequency, or caption strategy on this platform.</>}
                      </p>
                      <p>
                        The impression-to-reach ratio of <strong>{pl.ir}×</strong>{" "}
                        {parseFloat(pl.ir)>1.5 ? "suggests viewers are rewatching or the algorithm is redistributing content to existing viewers." : "indicates most viewers see the content only once — focus on hook strength to maximise first-view impact."}{" "}
                        Average engagement per post is <strong>{fmt(pl.avgEng)}</strong>.
                      </p>
                    </div>
                  </div>
                </div>
              )}

            </div>
          </div>
        );
      })}

