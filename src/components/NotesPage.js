// NotesPage Component — Bullet-Point Note Editor per Account
window.NotesPage = function() {
  const { activeAccount, editAccount, canEdit } = React.useContext(window.VaultContext);
  const [notes, setNotes] = React.useState(activeAccount?.notes || "");
  const [notesSaving, setNotesSaving] = React.useState(false);

  React.useEffect(function() {
    if (activeAccount?.notes !== undefined) {
      setNotes(activeAccount.notes || "");
    }
  }, [activeAccount?.id]);

  const notesRef = React.useRef(null);
  const activeAccountRef = React.useRef(null);
  const canEditRef = React.useRef(null);

  notesRef.current = notes;
  activeAccountRef.current = activeAccount;
  canEditRef.current = canEdit;

  React.useEffect(function() {
    const timeout = setTimeout(async function() {
      if (!activeAccountRef.current || !canEditRef.current || notesRef.current === (activeAccountRef.current.notes || "")) return;
      setNotesSaving(true);
      try {
        await editAccount(activeAccountRef.current.id, { notes: notesRef.current.trim() });
      } catch(e) {
        console.error("Failed to save notes:", e);
      }
      setNotesSaving(false);
    }, 1200);
    return function() { clearTimeout(timeout); };
  }, []);

  if (!activeAccount) {
    return (
      <div className="page-container">
        <div className="glass-card" style={{ textAlign: "center", padding: "4rem 2rem" }}>
          <p style={{ color: "var(--text-muted)" }}>No active account selected.</p>
        </div>
      </div>
    );
  }

  const lines = notes.split("\n").map(function(line) { return line.trim(); }).filter(Boolean).length;

  return (
    <div className="page-container">
      <div className="page-header">
        <div>
          <h1 className="page-title">Notes</h1>
          <p className="page-subtitle">Keep bullet-point notes for {activeAccount.name}. Start each line with • or -, or just write freely.</p>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
          {notesSaving && (
            <div style={{ display: "flex", alignItems: "center", gap: "0.35rem", fontSize: "0.8rem", color: "var(--text-muted)" }}>
              <span style={{ animation: "spin 0.8s linear infinite", display: "inline-block" }}>🔄</span>
              <span>Saving...</span>
            </div>
          )}
          <span style={{ fontSize: "0.78rem", color: "var(--text-subtle)", paddingLeft: "1rem", borderLeft: "1px solid var(--border-subtle)" }}>
            {lines} line{lines !== 1 ? "s" : ""}
          </span>
        </div>
      </div>

      <div className="notes-editor-wrap">
        <div className="notes-editor-help">
          <span>💡 Type • or - at the start of a line for bullets • Use Tab to indent</span>
        </div>
        <textarea
          className="notes-editor"
          placeholder={"• Key points for " + activeAccount.name + "\n• What worked this week\n• Ideas for next week\n• Collaboration notes"}
          value={notes}
          onChange={function(e) { setNotes(e.target.value); }}
          onKeyDown={function(e) {
            if (e.key === "Enter" && e.ctrlKey) {
              const ta = e.currentTarget;
              const start = ta.selectionStart;
              const end = ta.selectionEnd;
              const val = ta.value;
              const lineStart = val.lastIndexOf("\n", start - 1) + 1;
              const line = val.substring(lineStart, start);
              if (!line.match(/^\s*[•\-]\s/)) {
                const newVal = val.substring(0, start) + "\n• " + val.substring(end);
                setNotes(newVal);
                setTimeout(function() { ta.selectionStart = ta.selectionEnd = start + 3; }, 0);
                e.preventDefault();
              }
            }
          }}
          disabled={!canEdit}
          style={{ opacity: canEdit ? 1 : 0.6 }}
        />
      </div>

      <div style={{ marginTop: "1.5rem", fontSize: "0.85rem", color: "var(--text-muted)", lineHeight: 1.6 }}>
        <p><strong>Tips:</strong></p>
        <ul style={{ marginLeft: "1.5rem", marginTop: "0.5rem" }}>
          <li>Start lines with <code style={{ background: "rgba(255,255,255,0.08)", padding: "0.15rem 0.4rem", borderRadius: "4px", fontFamily: "var(--font-mono)", fontSize: "0.8rem" }}>•</code> or <code style={{ background: "rgba(255,255,255,0.08)", padding: "0.15rem 0.4rem", borderRadius: "4px", fontFamily: "var(--font-mono)", fontSize: "0.8rem" }}>-</code> for bullets</li>
          <li>Indent with spaces or tabs for sub-bullets</li>
          <li>Your notes are automatically saved to the cloud</li>
        </ul>
      </div>
    </div>
  );
};
