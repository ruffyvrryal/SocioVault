// FollowerTracksPage — Daily Follower Growth Tracker (Firebase Cloud Synced)
// Auto-updates on TikTok account sync. Paginated table (25 rows/page). Live SVG chart.
window.FollowerTracksPage = function() {
  const {
    activeAccount, followerHistory, recordFollowerSnapshot, setUndoToast
  } = React.useContext(window.VaultContext);

  const ROWS_PER_PAGE = 25;
  const [currentPage, setCurrentPage] = React.useState(1);
  const [manualFollowers, setManualFollowers] = React.useState({});
  const [addingManual, setAddingManual] = React.useState(false);
  const [manualDate, setManualDate] = React.useState(new Date().toISOString().split("T")[0]);

  if (!activeAccount) {
    return <div className="page-container"><p style={{ color: "var(--text-muted)" }}>No active account selected.</p></div>;
  }

  const accHistory = React.useMemo(() => {
    if (activeAccount && Array.isArray(activeAccount.followerHistory) && activeAccount.followerHistory.length > 0) {
      return activeAccount.followerHistory;
    }
    return Array.isArray(followerHistory[activeAccount?.id]) ? followerHistory[activeAccount.id] : [];
  }, [activeAccount, followerHistory]);

  const allPlatforms = React.useMemo(() => {
    const set = new Set();
    accHistory.forEach(s => Object.keys(s.platforms || {}).forEach(p => set.add(p)));
    (activeAccount.platforms || []).forEach(p => set.add(p.name));
    return Array.from(set);
  }, [accHistory, activeAccount]);

  const tableRows = React.useMemo(() => [...accHistory].reverse(), [accHistory]);

  const totalPages = Math.max(1, Math.ceil(tableRows.length / ROWS_PER_PAGE));
  const pagedRows = tableRows.slice((currentPage - 1) * ROWS_PER_PAGE, currentPage * ROWS_PER_PAGE);

  const chartData = React.useMemo(() => accHistory.slice(-30), [accHistory]);
  const chartMax  = React.useMemo(() => Math.max(...chartData.map(s => s.total || 0), 1000), [chartData]);

  const latestSnap  = accHistory[accHistory.length - 1];
  const prevSnap    = accHistory[accHistory.length - 2];
  const todayTotal  = latestSnap ? latestSnap.total : 0;
  const prevTotal   = prevSnap   ? prevSnap.total   : 0;
  const dailyGrowth = todayTotal - prevTotal;
  const growthPct   = prevTotal > 0 ? ((dailyGrowth / prevTotal) * 100).toFixed(2) : "0.00";

  const handleSnapshotNow = async () => {
    await recordFollowerSnapshot(activeAccount.id, activeAccount.platforms || []);
    setUndoToast({ message: "📸 Today's follower snapshot saved to Firebase!", type: "success" });
    setTimeout(() => setUndoToast(null), 3000);
  };

  const handleAddManual = async (e) => {
    e.preventDefault();
    const platforms = {};
    allPlatforms.forEach(p => {
      const val = Number(manualFollowers[p] || 0);
      if (val > 0) platforms[p] = val;
    });
    if (Object.values(platforms).reduce((s, v) => s + v, 0) === 0) return;
    await recordFollowerSnapshot(activeAccount.id, allPlatforms.map(name => ({ name, followers: platforms[name] || 0 })), manualDate);
    setAddingManual(false);
    setManualFollowers({});
    setUndoToast({ message: `✅ Follower snapshot for ${manualDate} saved to Firebase!`, type: "success" });
    setTimeout(() => setUndoToast(null), 3000);
  };

  const fmt = (n) => {
    if (!n && n !== 0) return "0";
    if (n >= 1000000) return (n / 1000000).toFixed(2) + "M";
    if (n >= 1000) return (n / 1000).toFixed(1) + "K";
    return Number(n).toLocaleString();
  };

  const getPlatformColor = (name) => {
    switch ((name || "").toLowerCase()) {
      case "tiktok": return "#25F4EE";
      case "instagram": return "#E1306C";
      case "youtube": return "#FF0000";
      case "x (twitter)": case "x": case "twitter": return "#1DA1F2";
      case "facebook": return "#1877F2";
      default: return "#8B5CF6";
    }
  };

  const platformBars = allPlatforms.map(p => ({
    name: p, val: latestSnap ? (latestSnap.platforms[p] || 0) : 0, color: getPlatformColor(p)
  })).filter(p => p.val > 0).sort((a, b) => b.val - a.val);
  const barMax = platformBars.length > 0 ? platformBars[0].val : 1;

  const LineChart = ({ data, maxVal }) => {
    if (data.length < 2) return (
      <div style={{ display: "flex", alignItems: "center", justifyContent: "center", height: "180px", color: "var(--text-muted)", fontSize: "0.82rem", flexDirection: "column", gap: "0.5rem" }}>
        <span style={{ fontSize: "2rem" }}>📈</span>
        <span>Sync TikTok or add entries to see growth chart</span>
      </div>
    );
    const W = 700, H = 180, PAD = 40, w = W - PAD * 2, h = H - PAD;
    const pts = data.map((s, i) => ({
      x: PAD + (i / (data.length - 1)) * w,
      y: PAD / 2 + (1 - (s.total || 0) / maxVal) * h,
      val: s.total || 0, date: s.date
    }));
    const pathD = pts.map((p, i) => `${i === 0 ? "M" : "L"}${p.x.toFixed(1)},${p.y.toFixed(1)}`).join(" ");
    const areaD = pathD + ` L${pts[pts.length-1].x.toFixed(1)},${(PAD/2+h).toFixed(1)} L${pts[0].x.toFixed(1)},${(PAD/2+h).toFixed(1)} Z`;
    const yLabels = [0,.25,.5,.75,1].map(f => ({ y: PAD/2+(1-f)*h, label: fmt(Math.round(f*maxVal)) }));
    return (
      <svg viewBox={`0 0 ${W} ${H}`} style={{ width:"100%", height:"180px" }}>
        <defs>
          <linearGradient id="ftGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#25F4EE" stopOpacity="0.35"/>
            <stop offset="100%" stopColor="#25F4EE" stopOpacity="0.02"/>
          </linearGradient>
        </defs>
        {yLabels.map((yl,i) => (
          <g key={i}>
            <line x1={PAD} y1={yl.y} x2={W-PAD/2} y2={yl.y} stroke="rgba(255,255,255,0.07)" strokeWidth="1"/>
            <text x={PAD-4} y={yl.y+4} textAnchor="end" fontSize="9" fill="rgba(255,255,255,0.35)">{yl.label}</text>
          </g>
        ))}
        <path d={areaD} fill="url(#ftGrad)"/>
        <path d={pathD} fill="none" stroke="#25F4EE" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
        {pts.filter((_,i) => i % Math.max(1,Math.floor(pts.length/10))===0 || i===pts.length-1).map((p,i) => (
          <g key={i}><circle cx={p.x} cy={p.y} r="3.5" fill="#25F4EE" stroke="#0d1117" strokeWidth="1.5"/><title>{p.date}: {fmt(p.val)}</title></g>
        ))}
        {pts.filter((_,i) => i===0 || i===pts.length-1 || i%Math.max(1,Math.floor(pts.length/5))===0).map((p,i) => (
          <text key={i} x={p.x} y={H-4} textAnchor="middle" fontSize="9" fill="rgba(255,255,255,0.4)">{p.date.slice(5)}</text>
        ))}
      </svg>
    );
  };

  return (
    <div className="page-container">
      <div className="page-header" style={{ marginBottom:"1.5rem" }}>
        <div>
          <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
            <h1 className="page-title" style={{ fontSize:"1.5rem", fontWeight:800, margin:0 }}>📊 Follower Tracks</h1>
            <span style={{ fontSize: "0.72rem", color: "#10B981", background: "rgba(16,185,129,0.12)", border: "1px solid rgba(16,185,129,0.3)", padding: "0.15rem 0.5rem", borderRadius: "12px", fontWeight: 700 }}>
              🔥 Firebase Cloud
            </span>
          </div>
          <p style={{ color:"var(--text-muted)", fontSize:"0.82rem", margin:"0.25rem 0 0 0" }}>
            Daily follower growth for <strong>{activeAccount.name}</strong> — automatically synced & stored on Firebase
          </p>
        </div>
        <div style={{ display:"flex", gap:"0.6rem", flexWrap:"wrap" }}>
          <button onClick={handleSnapshotNow} className="btn btn-sm btn-secondary" style={{ fontWeight:700 }}>📸 Snapshot Now</button>
          <button onClick={() => setAddingManual(true)} className="btn btn-sm btn-primary" style={{ fontWeight:700 }}>✏️ Add Manual Entry</button>
        </div>
      </div>

      {/* KPI Cards */}
      <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fit,minmax(200px,1fr))", gap:"0.85rem", marginBottom:"1.5rem" }}>
        {[
          { label:"Total Followers Today", val:fmt(todayTotal), sub:"All platforms combined", color:"#25F4EE", border:"rgba(37,244,238,0.25)", bg:"rgba(37,244,238,0.08)" },
          { label:"Daily Growth", val:(dailyGrowth>=0?"+":"")+fmt(dailyGrowth), sub:`${dailyGrowth>=0?"▲":"▼"} ${Math.abs(growthPct)}% vs yesterday`, color:dailyGrowth>=0?"#10B981":"#F43F5E", border:dailyGrowth>=0?"rgba(16,185,129,0.25)":"rgba(244,63,94,0.25)", bg:dailyGrowth>=0?"rgba(16,185,129,0.08)":"rgba(244,63,94,0.08)" },
          { label:"Days Tracked", val:accHistory.length, sub:"Cloud snapshots logged", color:"#A78BFA", border:"rgba(139,92,246,0.25)", bg:"rgba(139,92,246,0.08)" },
          { label:"Avg Daily Growth", val:accHistory.length>=2?"+"+fmt(Math.round((accHistory[accHistory.length-1].total-accHistory[0].total)/Math.max(1,accHistory.length-1))):"—", sub:"Over all tracked days", color:"#F59E0B", border:"rgba(245,158,11,0.25)", bg:"rgba(245,158,11,0.08)" }
        ].map(c => (
          <div key={c.label} className="glass-card" style={{ padding:"1rem 1.2rem", borderRadius:"12px", border:`1px solid ${c.border}`, background:`linear-gradient(135deg,${c.bg},rgba(13,17,23,0.8))` }}>
            <div style={{ fontSize:"0.72rem", fontWeight:700, color:"var(--text-muted)", textTransform:"uppercase", letterSpacing:"0.05em", marginBottom:"0.35rem" }}>{c.label}</div>
            <div style={{ fontSize:"1.8rem", fontWeight:900, color:c.color, lineHeight:1.1 }}>{c.val}</div>
            <div style={{ fontSize:"0.73rem", color:"var(--text-muted)", marginTop:"0.3rem" }}>{c.sub}</div>
          </div>
        ))}
      </div>

      {/* Chart + Platform Breakdown */}
      <div style={{ display:"grid", gridTemplateColumns:"1fr 260px", gap:"1rem", marginBottom:"1.5rem" }}>
        <div className="glass-card" style={{ padding:"1.25rem", borderRadius:"14px", border:"1px solid var(--border-color)" }}>
          <div style={{ display:"flex", justifyContent:"space-between", alignItems:"center", marginBottom:"0.75rem" }}>
            <div>
              <div style={{ fontSize:"0.88rem", fontWeight:800, color:"#fff" }}>Follower Growth (Last 30 Days)</div>
              <div style={{ fontSize:"0.72rem", color:"var(--text-muted)", marginTop:"2px" }}>Total followers across all platforms</div>
            </div>
            <span style={{ fontSize:"0.72rem", color: "#10B981", fontWeight:700, background:"rgba(16,185,129,0.1)", padding:"0.2rem 0.55rem", borderRadius:"20px", border:"1px solid rgba(16,185,129,0.25)" }}>☁️ FIREBASE LIVE</span>
          </div>
          <LineChart data={chartData} maxVal={chartMax}/>
        </div>
        <div className="glass-card" style={{ padding:"1.25rem", borderRadius:"14px", border:"1px solid var(--border-color)" }}>
          <div style={{ fontSize:"0.88rem", fontWeight:800, color:"#fff", marginBottom:"0.85rem" }}>Platform Breakdown</div>
          {platformBars.length === 0
            ? <div style={{ color:"var(--text-muted)", fontSize:"0.78rem", textAlign:"center", padding:"2rem 0" }}>Sync TikTok or add a snapshot</div>
            : platformBars.map(p => (
              <div key={p.name} style={{ marginBottom:"0.75rem" }}>
                <div style={{ display:"flex", justifyContent:"space-between", marginBottom:"0.25rem" }}>
                  <span style={{ fontSize:"0.78rem", fontWeight:700, color:"#fff" }}>{p.name}</span>
                  <span style={{ fontSize:"0.78rem", fontWeight:700, color:p.color }}>{fmt(p.val)}</span>
                </div>
                <div style={{ height:"6px", borderRadius:"3px", background:"rgba(255,255,255,0.08)" }}>
                  <div style={{ height:"100%", borderRadius:"3px", width:`${Math.round((p.val/barMax)*100)}%`, background:p.color, transition:"width 0.4s ease" }}></div>
                </div>
              </div>
            ))
          }
        </div>
      </div>

      {/* Manual Entry Modal */}
      {addingManual && (
        <div className="modal-overlay" onClick={() => setAddingManual(false)}>
          <div className="modal-content" style={{ maxWidth:"420px", width:"95%" }} onClick={e => e.stopPropagation()}>
            <div className="modal-header" style={{ display:"flex", justifyContent:"space-between", alignItems: "center", marginBottom: "1rem" }}>
              <h2 style={{ fontSize:"1.1rem", fontWeight:700, margin:0 }}>✏️ Add Follower Snapshot to Firebase</h2>
              <button onClick={() => setAddingManual(false)} className="btn btn-secondary btn-icon" style={{ width:"28px", height:"28px" }}>✕</button>
            </div>
            <form onSubmit={handleAddManual}>
              <div className="form-group" style={{ marginBottom:"0.85rem" }}>
                <label className="form-label" style={{ fontSize:"0.76rem" }}>Date</label>
                <input type="date" className="form-input" value={manualDate} onChange={e => setManualDate(e.target.value)} required/>
              </div>
              {(activeAccount.platforms || []).map(p => (
                <div className="form-group" key={p.id} style={{ marginBottom:"0.75rem" }}>
                  <label className="form-label" style={{ fontSize:"0.76rem" }}>{p.name} Followers</label>
                  <input type="number" className="form-input" min="0" placeholder={`${p.name} follower count`}
                    value={manualFollowers[p.name] || ""}
                    onChange={e => setManualFollowers(prev => ({ ...prev, [p.name]: e.target.value }))}/>
                </div>
              ))}
              <div style={{ display:"flex", justifyContent:"flex-end", gap:"0.6rem" }}>
                <button type="button" onClick={() => setAddingManual(false)} className="btn btn-secondary btn-sm">Cancel</button>
                <button type="submit" className="btn btn-primary btn-sm">💾 Save to Firebase</button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Daily Table */}
      <div className="glass-card" style={{ borderRadius:"14px", border:"1px solid var(--border-color)", overflow:"hidden" }}>
        <div style={{ padding:"1rem 1.25rem", borderBottom:"1px solid var(--border-color)", display:"flex", justifyContent:"space-between", alignItems:"center", flexWrap:"wrap", gap:"0.5rem" }}>
          <div>
            <div style={{ fontSize:"0.9rem", fontWeight:800, color:"#fff" }}>📅 Daily Follower Log (Cloud Synced)</div>
            <div style={{ fontSize:"0.72rem", color:"var(--text-muted)", marginTop:"2px" }}>
              {tableRows.length} entries • Page {currentPage} of {totalPages} • 25 per page
            </div>
          </div>
          <div style={{ fontSize:"0.72rem", color:"var(--text-muted)" }}>Auto-updated on every TikTok sync • Newest first</div>
        </div>

        {tableRows.length === 0 ? (
          <div style={{ padding:"3rem", textAlign:"center", color:"var(--text-muted)", fontSize:"0.85rem" }}>
            <div style={{ fontSize:"2.5rem", marginBottom:"0.75rem" }}>📊</div>
            <div style={{ fontWeight:700, color:"#fff", marginBottom:"0.4rem" }}>No follower data on Firebase yet</div>
            <div>Click <strong>📸 Snapshot Now</strong> to log today's count, or sync your TikTok account to auto-log to Firebase.</div>
          </div>
        ) : (
          <>
            <div className="table-container" style={{ overflowX:"auto" }}>
              <table className="custom-table" style={{ minWidth:"600px" }}>
                <thead>
                  <tr>
                    <th style={{ width:"50px" }}>#</th>
                    <th>Date</th>
                    <th>Total Followers</th>
                    {allPlatforms.map(p => <th key={p} style={{ color:getPlatformColor(p) }}>{p}</th>)}
                    <th>Daily Change</th>
                    <th>Growth %</th>
                  </tr>
                </thead>
                <tbody>
                  {pagedRows.map((row, idx) => {
                    const num = tableRows.length - ((currentPage-1)*ROWS_PER_PAGE + idx);
                    const prev = tableRows[(currentPage-1)*ROWS_PER_PAGE + idx + 1];
                    const change = prev ? row.total - prev.total : 0;
                    const pct = prev && prev.total > 0 ? ((change/prev.total)*100).toFixed(2) : null;
                    return (
                      <tr key={row.date}>
                        <td style={{ color:"var(--text-muted)", fontSize:"0.75rem" }}>{num}</td>
                        <td><div style={{ fontWeight:700, color:"#fff", fontSize:"0.84rem" }}>{row.date}</div></td>
                        <td><span style={{ fontWeight:800, color:"#25F4EE", fontSize:"0.9rem" }}>{fmt(row.total)}</span></td>
                        {allPlatforms.map(p => (
                          <td key={p}><span style={{ fontWeight:600, color:row.platforms[p]?getPlatformColor(p):"var(--text-muted)" }}>{row.platforms[p]?fmt(row.platforms[p]):"—"}</span></td>
                        ))}
                        <td>
                          {prev ? <span style={{ fontWeight:700, color:change>0?"#10B981":change<0?"#F43F5E":"var(--text-muted)", fontSize:"0.84rem" }}>{change>0?"+":""}{fmt(change)}</span> : <span style={{ color:"var(--text-muted)" }}>—</span>}
                        </td>
                        <td>
                          {pct !== null ? <span style={{ fontWeight:700, fontSize:"0.78rem", color:Number(pct)>0?"#10B981":Number(pct)<0?"#F43F5E":"var(--text-muted)" }}>{Number(pct)>0?"▲":Number(pct)<0?"▼":"●"} {Math.abs(Number(pct))}%</span> : <span style={{ color:"var(--text-muted)" }}>—</span>}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>

            {totalPages > 1 && (
              <div style={{ padding:"0.85rem 1.25rem", borderTop:"1px solid var(--border-color)", display:"flex", justifyContent:"space-between", alignItems:"center", flexWrap:"wrap", gap:"0.5rem" }}>
                <div style={{ fontSize:"0.76rem", color:"var(--text-muted)" }}>
                  Rows {((currentPage-1)*ROWS_PER_PAGE)+1}–{Math.min(currentPage*ROWS_PER_PAGE,tableRows.length)} of {tableRows.length}
                </div>
                <div style={{ display:"flex", gap:"0.35rem", flexWrap:"wrap" }}>
                  {[["«",1],["‹",Math.max(1,currentPage-1)]].map(([label,pg]) => (
                    <button key={label} onClick={() => setCurrentPage(pg)} disabled={currentPage===1} className="btn btn-secondary btn-sm" style={{ padding:"0.25rem 0.55rem", fontSize:"0.75rem", opacity:currentPage===1?0.4:1 }}>{label}</button>
                  ))}
                  {Array.from({ length:Math.min(7,totalPages) }, (_,i) => {
                    let p = totalPages<=7 ? i+1 : currentPage<=4 ? i+1 : currentPage>=totalPages-3 ? totalPages-6+i : currentPage-3+i;
                    return <button key={p} onClick={() => setCurrentPage(p)} className={`btn btn-sm ${currentPage===p?"btn-primary":"btn-secondary"}`} style={{ padding:"0.25rem 0.6rem", fontSize:"0.75rem", minWidth:"32px", fontWeight:currentPage===p?800:500 }}>{p}</button>;
                  })}
                  {[["›",Math.min(totalPages,currentPage+1)],["»",totalPages]].map(([label,pg]) => (
                    <button key={label} onClick={() => setCurrentPage(pg)} disabled={currentPage===totalPages} className="btn btn-secondary btn-sm" style={{ padding:"0.25rem 0.55rem", fontSize:"0.75rem", opacity:currentPage===totalPages?0.4:1 }}>{label}</button>
                  ))}
                </div>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
};
