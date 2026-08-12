// Complete Standalone Application Bundle for Social Media Hub (with Subject Sorting & Pagination + Top Post Highlight Card)

// 1. INITIAL MOCK DATA
window.INITIAL_DATA = {
  currentUser: {
    uid: "user_google_01",
    displayName: "Alex Rivera",
    email: "alex.creator@gmail.com",
    photoURL: "https://api.dicebear.com/7.x/avataaars/svg?seed=Alex"
  },
  accounts: [
    {
      id: "acc_01",
      name: "Alex Creator Studio",
      ownerEmail: "alex.creator@gmail.com",
      description: "Main tech & lifestyle personal media brand",
      platforms: [
        { id: "p1", name: "Instagram", handle: "@alex_creator", followers: 124500, url: "https://instagram.com" },
        { id: "p2", name: "YouTube", handle: "AlexVlogsTech", followers: 310000, url: "https://youtube.com" },
        { id: "p3", name: "TikTok", handle: "@alex_tok", followers: 450000, url: "https://tiktok.com" },
        { id: "p4", name: "X (Twitter)", handle: "@alex_tweets", followers: 89000, url: "https://x.com" }
      ],
      collaborators: [
        { email: "sarah.editor@gmail.com", role: "editor", joinedAt: "2026-07-15" },
        { email: "sponsor.client@gmail.com", role: "viewer", joinedAt: "2026-08-01" }
      ],
      shareToken: "vlt_token_alex_99"
    },
    {
      id: "acc_02",
      name: "Apex Tech Reviews",
      ownerEmail: "alex.creator@gmail.com",
      description: "Dedicated hardware, AI, and gadget review hub",
      platforms: [
        { id: "p5", name: "YouTube", handle: "ApexGadgetReviews", followers: 620000, url: "https://youtube.com" },
        { id: "p6", name: "LinkedIn", handle: "Apex Tech Media", followers: 42000, url: "https://linkedin.com" }
      ],
      collaborators: [],
      shareToken: "vlt_token_apex_88"
    }
  ],
  contents: [
    { id: "cnt_01", accountId: "acc_01", uploadDate: "2026-08-10", platform: "Instagram", caption: "Unboxing the futuristic AI Glasses with Sarah! Is this the replacement for smartphones?", hashtags: ["#tech", "#gadgets", "#aiglasses"], subjects: ["Alex", "Sarah"], impressions: 145000, reach: 122000, likes: 12400, comments: 980, shares: 1420, saves: 3100, status: "Uploaded" },
    { id: "cnt_02", accountId: "acc_01", uploadDate: "2026-08-08", platform: "YouTube", caption: "Full Day in the Life of a Tech Creator feat. Jordan & Alex (Setup Tour 2026)", hashtags: ["#vlog", "#setuptour", "#tech"], subjects: ["Alex", "Jordan"], impressions: 380000, reach: 295000, likes: 28900, comments: 2450, shares: 3100, saves: 5400, status: "Uploaded" },
    { id: "cnt_03", accountId: "acc_01", uploadDate: "2026-08-05", platform: "TikTok", caption: "3 AI tools you need to try this week! 🚀 #ai #productivity #tech", hashtags: ["#ai", "#productivity", "#tech"], subjects: ["Alex"], impressions: 620000, reach: 540000, likes: 54000, comments: 3120, shares: 12400, saves: 18900, status: "Uploaded" },
    { id: "cnt_04", accountId: "acc_01", uploadDate: "2026-08-15", platform: "Instagram", caption: "Behind the scenes with Sarah on the new studio build podcast!", hashtags: ["#podcast", "#studio"], subjects: ["Sarah"], impressions: 85000, reach: 71000, likes: 7200, comments: 420, shares: 610, saves: 1100, status: "Scheduled" },
    { id: "cnt_05", accountId: "acc_01", uploadDate: "2026-07-28", platform: "X (Twitter)", caption: "Thread: Why 2026 is the turning point for wearable spatial computing. 🧵👇", hashtags: ["#tech", "#spatialcomputing"], subjects: ["Alex"], impressions: 92000, reach: 84000, likes: 4100, comments: 630, shares: 1890, saves: 2200, status: "Uploaded" },
    { id: "cnt_06", accountId: "acc_01", uploadDate: "2026-07-20", platform: "Instagram", caption: "Testing camera quality at sunset with Jordan #photography", hashtags: ["#photography", "#tech"], subjects: ["Jordan"], impressions: 110000, reach: 95000, likes: 9800, comments: 510, shares: 720, saves: 1400, status: "Uploaded" },
    { id: "cnt_07", accountId: "acc_01", uploadDate: "2026-07-12", platform: "YouTube", caption: "Top 5 Mac Apps for Creators in 2026", hashtags: ["#mac", "#apps", "#productivity"], subjects: ["Alex"], impressions: 240000, reach: 210000, likes: 18500, comments: 1200, shares: 1900, saves: 4200, status: "Uploaded" },
    { id: "cnt_08", accountId: "acc_01", uploadDate: "2026-07-04", platform: "TikTok", caption: "How to edit videos 2x faster with AI shortcodes!", hashtags: ["#editing", "#ai", "#tutorial"], subjects: ["Alex"], impressions: 450000, reach: 390000, likes: 41000, comments: 1950, shares: 8900, saves: 12500, status: "Uploaded" },
    { id: "cnt_09", accountId: "acc_01", uploadDate: "2026-06-25", platform: "Instagram", caption: "Summer tech gift guide feat. Sarah & Alex", hashtags: ["#giftguide", "#tech"], subjects: ["Alex", "Sarah"], impressions: 130000, reach: 115000, likes: 11200, comments: 680, shares: 950, saves: 2100, status: "Uploaded" },
    { id: "cnt_10", accountId: "acc_01", uploadDate: "2026-06-15", platform: "YouTube", caption: "Building a $10,000 Dream Desk Setup 2026", hashtags: ["#desksetup", "#workspace"], subjects: ["Alex"], impressions: 520000, reach: 430000, likes: 46000, comments: 3400, shares: 5100, saves: 9800, status: "Uploaded" },
    { id: "cnt_11", accountId: "acc_01", uploadDate: "2026-06-02", platform: "TikTok", caption: "Secret iPhone feature you definitely didn't know!", hashtags: ["#iphone", "#hacks"], subjects: ["Alex"], impressions: 780000, reach: 690000, likes: 72000, comments: 4500, shares: 18900, saves: 24500, status: "Uploaded" },
    { id: "cnt_12", accountId: "acc_01", uploadDate: "2026-05-18", platform: "Instagram", caption: "Coffee & Code with Jordan", hashtags: ["#vlog", "#code"], subjects: ["Jordan"], impressions: 95000, reach: 82000, likes: 8100, comments: 410, shares: 520, saves: 980, status: "Uploaded" },
    { id: "cnt_13", accountId: "acc_02", uploadDate: "2026-08-02", platform: "YouTube", caption: "Apex 2026 Smartphone Flagship Shootout: Jordan vs Alex blind camera test", hashtags: ["#smartphone", "#cameratest", "#tech"], subjects: ["Alex", "Jordan"], impressions: 410000, reach: 340000, likes: 31000, comments: 1850, shares: 2400, saves: 4800, status: "Uploaded" }
  ]
};

// 2. CONTEXTS
const AuthContext = React.createContext();
const VaultContext = React.createContext();

function AuthProvider({ children }) {
  const [user, setUser] = React.useState(null);
  const [authLoading, setAuthLoading] = React.useState(true);

  React.useEffect(() => {
    const auth = window.firebaseAuth;
    const unsubscribe = auth.onAuthStateChanged((firebaseUser) => {
      if (firebaseUser) {
        setUser({
          uid: firebaseUser.uid,
          displayName: firebaseUser.displayName || firebaseUser.email.split('@')[0],
          email: firebaseUser.email,
          photoURL: firebaseUser.photoURL || `https://api.dicebear.com/7.x/avataaars/svg?seed=${encodeURIComponent(firebaseUser.email)}`
        });
      } else {
        setUser(null);
      }
      setAuthLoading(false);
    });
    return () => unsubscribe();
  }, []);

  const loginWithGoogle = async () => {
    try {
      const provider = new firebase.auth.GoogleAuthProvider();
      await window.firebaseAuth.signInWithPopup(provider);
    } catch (error) {
      console.error('Google Sign-In error:', error);
      alert('Sign-in failed. Please try again.');
    }
  };

  const logout = async () => {
    await window.firebaseAuth.signOut();
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, setUser, loginWithGoogle, logout, authLoading }}>
      {children}
    </AuthContext.Provider>
  );
}

function VaultProvider({ children }) {
  const { user } = React.useContext(AuthContext);

  const [accounts, setAccounts] = React.useState([]);
  const [contents, setContents] = React.useState([]);
  const [activeAccountIdState, setActiveAccountIdState] = React.useState(null);
  const [activePage, setActivePage] = React.useState("account-center");
  const [dataLoading, setDataLoading] = React.useState(true);

  // Helper to get current user's Firestore reference
  const getUserRef = () => window.firebaseDb.collection('users').doc(user.uid);

  // Listen to Firestore in real-time when user logs in
  React.useEffect(() => {
    if (!user) {
      setAccounts([]);
      setContents([]);
      setDataLoading(false);
      return;
    }

    setDataLoading(true);
    const userRef = window.firebaseDb.collection('users').doc(user.uid);

    // Real-time listener for accounts
    const unsubAccounts = userRef.collection('accounts').onSnapshot(snap => {
      const data = snap.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setAccounts(data);
      setDataLoading(false);
    });

    // Real-time listener for contents
    const unsubContents = userRef.collection('contents').orderBy('uploadDate', 'desc').onSnapshot(snap => {
      const data = snap.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setContents(data);
    });

    // Restore last active account from Firestore user profile
    userRef.get().then(doc => {
      if (doc.exists && doc.data().activeAccountId) {
        setActiveAccountIdState(doc.data().activeAccountId);
      }
    });

    return () => {
      unsubAccounts();
      unsubContents();
    };
  }, [user]);

  const activeAccountId = activeAccountIdState;

  const setActiveAccountId = (id) => {
    setActiveAccountIdState(id);
    if (user) {
      // Save active account preference to Firestore user profile
      window.firebaseDb.collection('users').doc(user.uid).set(
        { activeAccountId: id || null },
        { merge: true }
      );
    }
  };

  const activeAccount = React.useMemo(() => {
    return accounts.find(a => a.id === activeAccountId) || null;
  }, [accounts, activeAccountId]);

  const getUserRole = React.useCallback((account) => {
    if (!user || !account) return "viewer";
    if (account.ownerEmail === user.email) return "owner";
    const collab = (account.collaborators || []).find(c => c.email === user.email);
    if (collab) return collab.role;
    return "viewer";
  }, [user]);

  const activeUserRole = React.useMemo(() => {
    return getUserRole(activeAccount);
  }, [activeAccount, getUserRole]);

  const canEdit = activeUserRole === "owner" || activeUserRole === "editor";
  const isOwner = activeUserRole === "owner";

  // ── Account Actions (Firestore) ──
  const addAccount = async (name, description) => {
    if (!user) return;
    const newAcc = {
      name: name || "New Media Account",
      ownerEmail: user.email,
      description: description || "Social media account workspace",
      platforms: [
        { id: "p_" + Date.now(), name: "Instagram", handle: "@" + name.toLowerCase().replace(/\s+/g, "_"), followers: 0, url: "#" }
      ],
      collaborators: [],
      shareToken: "vlt_token_" + Math.random().toString(36).substr(2, 8)
    };
    const docRef = await getUserRef().collection('accounts').add(newAcc);
    setActiveAccountId(docRef.id);
    setActivePage("account-center");
  };

  const removeAccount = async (accountId) => {
    await getUserRef().collection('accounts').doc(accountId).delete();
    // Delete related contents
    const contentSnap = await getUserRef().collection('contents').where('accountId', '==', accountId).get();
    const batch = window.firebaseDb.batch();
    contentSnap.docs.forEach(doc => batch.delete(doc.ref));
    await batch.commit();
    if (activeAccountId === accountId) setActiveAccountId(null);
  };

  // ── Platform Actions (Firestore) ──
  const addPlatform = async (accountId, platformData) => {
    const ref = getUserRef().collection('accounts').doc(accountId);
    const snap = await ref.get();
    if (snap.exists) {
      const current = snap.data();
      await ref.update({ platforms: [...(current.platforms || []), { id: "p_" + Date.now(), ...platformData }] });
    }
  };

  const removePlatform = async (accountId, platformId) => {
    const ref = getUserRef().collection('accounts').doc(accountId);
    const snap = await ref.get();
    if (snap.exists) {
      const current = snap.data();
      await ref.update({ platforms: (current.platforms || []).filter(p => p.id !== platformId) });
    }
  };

  // ── Content Actions (Firestore) ──
  const addContent = async (contentData) => {
    await getUserRef().collection('contents').add({
      accountId: activeAccountId,
      ...contentData
    });
  };

  const updateContent = async (contentId, updatedData) => {
    await getUserRef().collection('contents').doc(contentId).update(updatedData);
  };

  const deleteContent = async (contentId) => {
    await getUserRef().collection('contents').doc(contentId).delete();
  };

  // ── Collaborator Actions (Firestore) ──
  const addCollaborator = async (accountId, email, role) => {
    const ref = getUserRef().collection('accounts').doc(accountId);
    const snap = await ref.get();
    if (snap.exists) {
      const current = snap.data();
      const collabs = current.collaborators || [];
      if (collabs.some(c => c.email === email)) return;
      await ref.update({ collaborators: [...collabs, { email, role, joinedAt: new Date().toISOString().split("T")[0] }] });
    }
  };

  const updateCollaboratorRole = async (accountId, email, newRole) => {
    const ref = getUserRef().collection('accounts').doc(accountId);
    const snap = await ref.get();
    if (snap.exists) {
      const current = snap.data();
      const collabs = (current.collaborators || []).map(c => c.email === email ? { ...c, role: newRole } : c);
      await ref.update({ collaborators: collabs });
    }
  };

  const removeCollaborator = async (accountId, email) => {
    const ref = getUserRef().collection('accounts').doc(accountId);
    const snap = await ref.get();
    if (snap.exists) {
      const current = snap.data();
      const collabs = (current.collaborators || []).filter(c => c.email !== email);
      await ref.update({ collaborators: collabs });
    }
  };

  return (
    <VaultContext.Provider value={{
      accounts,
      activeAccountId,
      setActiveAccountId,
      activeAccount,
      activePage,
      setActivePage,
      contents,
      activeUserRole,
      canEdit,
      isOwner,
      dataLoading,
      addAccount,
      removeAccount,
      addPlatform,
      removePlatform,
      addContent,
      updateContent,
      deleteContent,
      addCollaborator,
      updateCollaboratorRole,
      removeCollaborator,
      getUserRole
    }}>
      {children}
    </VaultContext.Provider>
  );
}

// 3. COMPONENTS
function LoginPage() {
  const { loginWithGoogle } = React.useContext(AuthContext);
  const [loading, setLoading] = React.useState(false);

  const handleGoogleLogin = async () => {
    setLoading(true);
    await loginWithGoogle();
    setLoading(false);
  };

  return (
    <div style={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", padding: "2rem 1rem" }}>
      <div className="glass-card" style={{ maxWidth: "460px", width: "100%", textAlign: "center", padding: "2.5rem 2rem" }}>
        <div style={{
          width: "56px", height: "56px", borderRadius: "16px",
          background: "linear-gradient(135deg, var(--accent-primary), var(--accent-cyan))",
          display: "flex", alignItems: "center", justifyContent: "center",
          margin: "0 auto 1.25rem", boxShadow: "0 10px 25px rgba(139, 92, 246, 0.3)"
        }}>
          <i data-lucide="shield-check" style={{ width: "28px", height: "28px", color: "#fff" }}></i>
        </div>

        <h1 style={{ fontSize: "2rem", fontWeight: 800, marginBottom: "0.5rem" }}>
          Social Vault <span style={{ background: "linear-gradient(135deg, var(--accent-primary), var(--accent-cyan))", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>Pro</span>
        </h1>
        <p style={{ color: "var(--text-muted)", fontSize: "0.95rem", marginBottom: "2rem" }}>
          Secure Multi-Account Vault, Content Tables, Hashtags & Subject Analytics
        </p>

        <button 
          onClick={handleGoogleLogin}
          disabled={loading}
          className="btn" 
          style={{
            width: "100%", padding: "0.85rem", background: "#ffffff", color: "#1f2937",
            fontWeight: 600, fontSize: "0.95rem", borderRadius: "var(--radius-sm)",
            display: "flex", alignItems: "center", justifyContent: "center", gap: "0.75rem",
            boxShadow: "0 4px 12px rgba(0,0,0,0.15)", cursor: loading ? "not-allowed" : "pointer", marginBottom: "1.5rem",
            opacity: loading ? 0.7 : 1
          }}
        >
          {loading ? (
            <span>Signing in...</span>
          ) : (
            <>
              <svg width="20" height="20" viewBox="0 0 24 24">
                <path fill="#4285F4" d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.82-2.4 3.68v3.05h3.88c2.27-2.09 3.665-5.17 3.665-9.17z"/>
                <path fill="#34A853" d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.11-6.72-4.96H1.24v3.15C3.26 21.3 7.37 24 12 24z"/>
                <path fill="#FBBC05" d="M5.28 14.24c-.25-.72-.38-1.49-.38-2.24s.13-1.52.38-2.24V6.61H1.24C.45 8.18 0 10.03 0 12s.45 3.82 1.24 5.39l4.04-3.15z"/>
                <path fill="#EA4335" d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.37 0 3.26 2.7 1.24 6.61l4.04 3.15c.95-2.85 3.6-4.96 6.72-4.96z"/>
              </svg>
              Sign in with Google
            </>
          )}
        </button>

        <p style={{ color: "var(--text-muted)", fontSize: "0.8rem", marginTop: "1rem" }}>
          🔒 Your data is securely stored in the cloud and synced across all your devices.
        </p>
      </div>
    </div>
  );
}

function AccountVaultPage() {
  const { user } = React.useContext(AuthContext);
  const { accounts, setActiveAccountId, setActivePage, addAccount, removeAccount, contents, getUserRole } = React.useContext(VaultContext);

  const [showAddModal, setShowAddModal] = React.useState(false);
  const [accountName, setAccountName] = React.useState("");
  const [accountDesc, setAccountDesc] = React.useState("");

  const accessibleAccounts = React.useMemo(() => {
    if (!user) return [];
    return accounts.filter(acc => acc.ownerEmail === user.email || acc.collaborators.some(c => c.email === user.email));
  }, [accounts, user]);

  const handleCreate = (e) => {
    e.preventDefault();
    if (!accountName.trim()) return;
    addAccount(accountName, accountDesc);
    setAccountName(""); setAccountDesc(""); setShowAddModal(false);
  };

  const selectAccount = (accId) => {
    setActiveAccountId(accId);
    setActivePage("account-center");
  };

  return (
    <div className="page-container">
      <div className="page-header">
        <div>
          <h1 className="page-title">Account Vault Hub</h1>
          <p className="page-subtitle">Select an account workspace to view platforms, content tables, and analytics.</p>
        </div>
        <button onClick={() => setShowAddModal(true)} className="btn btn-primary">
          <i data-lucide="plus" style={{ width: "18px", height: "18px" }}></i>
          Add New Account
        </button>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))", gap: "1.5rem" }}>
        {accessibleAccounts.map(acc => {
          const role = getUserRole(acc);
          const accContents = contents.filter(c => c.accountId === acc.id);
          const totalViews = accContents.reduce((sum, c) => sum + (c.impressions || 0), 0);

          return (
            <div key={acc.id} className="glass-card glass-card-interactive" style={{ cursor: "pointer", display: "flex", flexDirection: "column", justifyContent: "space-between" }} onClick={() => selectAccount(acc.id)}>
              <div>
                <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", marginBottom: "1rem" }}>
                  <div style={{
                    width: "44px", height: "44px", borderRadius: "12px", background: "rgba(139, 92, 246, 0.15)",
                    border: "1px solid rgba(139, 92, 246, 0.3)", display: "flex", alignItems: "center", justifyContent: "center",
                    color: "var(--accent-primary)", fontSize: "1.2rem", fontWeight: 700
                  }}>
                    {acc.name.charAt(0)}
                  </div>
                  <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                    <span className={`badge ${role === 'owner' ? 'badge-uploaded' : role === 'editor' ? 'badge-scheduled' : 'badge-privated'}`}>
                      {role}
                    </span>
                    {role === 'owner' && (
                      <button onClick={(e) => { e.stopPropagation(); if (confirm(`Remove account "${acc.name}"?`)) removeAccount(acc.id); }} className="btn btn-danger btn-icon" title="Remove Account">
                        <i data-lucide="trash-2" style={{ width: "16px", height: "16px" }}></i>
                      </button>
                    )}
                  </div>
                </div>

                <h3 style={{ fontSize: "1.25rem", fontWeight: 700, marginBottom: "0.4rem" }}>{acc.name}</h3>
                <p style={{ fontSize: "0.85rem", color: "var(--text-muted)", marginBottom: "1.25rem" }}>{acc.description}</p>
                
                <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem", marginBottom: "1.25rem" }}>
                  {acc.platforms.map(p => (
                    <span key={p.id} className="chip" style={{ fontSize: "0.75rem" }}>
                      {p.name}: {p.handle}
                    </span>
                  ))}
                </div>
              </div>

              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", paddingTop: "1rem", borderTop: "1px solid var(--border-color)", fontSize: "0.85rem", color: "var(--text-muted)" }}>
                <div><strong style={{ color: "#fff" }}>{accContents.length}</strong> Content Items</div>
                <div><strong style={{ color: "var(--accent-cyan)" }}>{(totalViews / 1000).toFixed(1)}k</strong> Views</div>
              </div>
            </div>
          );
        })}
      </div>

      {showAddModal && (
        <div className="modal-overlay" onClick={() => setShowAddModal(false)}>
          <div className="modal-content" onClick={e => e.stopPropagation()}>
            <div className="modal-header">
              <h2 className="modal-title">Add New Social Account Vault</h2>
              <button onClick={() => setShowAddModal(false)} className="btn btn-secondary btn-icon"><i data-lucide="x" style={{ width: "18px", height: "18px" }}></i></button>
            </div>
            <form onSubmit={handleCreate}>
              <div className="form-group">
                <label className="form-label">Account Name</label>
                <input type="text" className="form-input" placeholder="e.g. Gaming Hub" required value={accountName} onChange={e => setAccountName(e.target.value)} />
              </div>
              <div className="form-group">
                <label className="form-label">Description</label>
                <textarea className="form-textarea" placeholder="Account description..." rows="3" value={accountDesc} onChange={e => setAccountDesc(e.target.value)}></textarea>
              </div>
              <div style={{ display: "flex", justifyContent: "flex-end", gap: "0.75rem", marginTop: "1.5rem" }}>
                <button type="button" onClick={() => setShowAddModal(false)} className="btn btn-secondary">Cancel</button>
                <button type="submit" className="btn btn-primary">Create Account</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

function Navbar() {
  const { user, logout } = React.useContext(AuthContext);
  const { accounts, activeAccountId, setActiveAccountId, activeAccount, activePage, setActivePage, activeUserRole, getUserRole } = React.useContext(VaultContext);

  const navItems = [
    { id: "account-center", label: "Account Center", icon: "layout-grid" },
    { id: "add-content", label: "Add Content", icon: "plus-circle" },
    { id: "content-table", label: "Content Table", icon: "table" },
    { id: "timeframe-analytics", label: "Timeframe Analytics", icon: "line-chart" },
    { id: "hashtag-analytics", label: "Hashtag Studio", icon: "hash" },
    { id: "subject-analytics", label: "Subject Analytics", icon: "users" },
    { id: "collaborators", label: "Collaborators", icon: "share-2" }
  ];

  const accessibleAccounts = accounts.filter(acc => user && (acc.ownerEmail === user.email || acc.collaborators.some(c => c.email === user.email)));

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
          <div className="navbar-brand" onClick={() => { setActiveAccountId(null); setActivePage("account-vault"); }}>
            <i data-lucide="layers" style={{ color: "var(--accent-primary)" }}></i>
            <span>SocialVault</span>
          </div>

          {activeAccount && (
            <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
              <span style={{ color: "var(--text-subtle)", fontSize: "0.9rem" }}>/</span>
              <select 
                className="form-select"
                style={{ padding: "0.4rem 0.75rem", fontSize: "0.85rem", width: "auto", background: "rgba(31, 41, 55, 0.8)", fontWeight: 600 }}
                value={activeAccountId || ""}
                onChange={(e) => e.target.value === "VAULT_HUB" ? setActiveAccountId(null) : setActiveAccountId(e.target.value)}
              >
                <option value="VAULT_HUB">← Account Vault Hub</option>
                {accessibleAccounts.map(acc => (
                  <option key={acc.id} value={acc.id}>{acc.name} ({getUserRole(acc)})</option>
                ))}
              </select>
              <span className={`badge ${activeUserRole === 'owner' ? 'badge-uploaded' : activeUserRole === 'editor' ? 'badge-scheduled' : 'badge-privated'}`}>
                {activeUserRole}
              </span>
            </div>
          )}
        </div>

        <div className="user-menu">
          {user && (
            <div style={{ display: "flex", alignItems: "center", gap: "0.6rem" }}>
              <img src={user.photoURL} alt={user.displayName} style={{ width: "32px", height: "32px", borderRadius: "50%", border: "1px solid var(--border-color)" }} />
              <button onClick={logout} className="btn btn-secondary btn-icon" title={`Signed in as ${user.email}. Logout`}>
                <i data-lucide="log-out" style={{ width: "16px", height: "16px" }}></i>
              </button>
            </div>
          )}
        </div>
      </div>

      {activeAccount && (
        <div className="navbar-container" style={{ marginTop: "0.75rem", borderTop: "1px solid var(--border-color)", paddingTop: "0.5rem" }}>
          <div className="navbar-nav">
            {navItems.map(item => (
              <div key={item.id} className={`nav-link ${activePage === item.id ? 'active' : ''}`} onClick={() => setActivePage(item.id)}>
                <i data-lucide={item.icon} style={{ width: "16px", height: "16px" }}></i>
                {item.label}
              </div>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}

function AccountCenterPage() {
  const { activeAccount, addPlatform, removePlatform, contents, canEdit, setActivePage } = React.useContext(VaultContext);

  const [showAddModal, setShowAddModal] = React.useState(false);
  const [platformName, setPlatformName] = React.useState("Instagram");
  const [handle, setHandle] = React.useState("");
  const [followers, setFollowers] = React.useState("");
  const [url, setUrl] = React.useState("");

  if (!activeAccount) return <div className="page-container"><p>No active account selected.</p></div>;

  const accountContents = contents.filter(c => c.accountId === activeAccount.id);
  const totalViews = accountContents.reduce((sum, c) => sum + (c.impressions || 0), 0);
  const totalFollowers = activeAccount.platforms.reduce((sum, p) => sum + (Number(p.followers) || 0), 0);

  const handleAddPlatform = (e) => {
    e.preventDefault();
    if (!handle.trim()) return;
    addPlatform(activeAccount.id, {
      name: platformName,
      handle: handle.startsWith("@") ? handle : "@" + handle,
      followers: Number(followers) || 0,
      url: url || "#"
    });
    setHandle(""); setFollowers(""); setUrl(""); setShowAddModal(false);
  };

  return (
    <div className="page-container">
      <div className="page-header">
        <div>
          <h1 className="page-title">{activeAccount.name} - Account Center</h1>
          <p className="page-subtitle">{activeAccount.description} • Managed platforms & channel credentials</p>
        </div>
        <div style={{ display: "flex", gap: "0.75rem" }}>
          {canEdit && (
            <button onClick={() => setShowAddModal(true)} className="btn btn-primary">
              <i data-lucide="plus-circle" style={{ width: "18px", height: "18px" }}></i> Add Platform Channel
            </button>
          )}
          <button onClick={() => setActivePage("add-content")} className="btn btn-secondary">
            <i data-lucide="file-plus" style={{ width: "18px", height: "18px" }}></i> Create Content Entry
          </button>
        </div>
      </div>

      <div className="stats-grid">
        <div className="glass-card stat-card">
          <span className="stat-label">Total Channel Audience</span>
          <span className="stat-value" style={{ color: "var(--accent-cyan)" }}>
            {totalFollowers > 1000 ? (totalFollowers / 1000).toFixed(1) + "k" : totalFollowers}
          </span>
          <span className="stat-change positive">Across {activeAccount.platforms.length} connected platforms</span>
        </div>
        <div className="glass-card stat-card">
          <span className="stat-label">Logged Content Items</span>
          <span className="stat-value">{accountContents.length}</span>
          <span className="stat-change positive">Total uploaded & scheduled</span>
        </div>
        <div className="glass-card stat-card">
          <span className="stat-label">Total Impressions (Views)</span>
          <span className="stat-value" style={{ color: "var(--accent-emerald)" }}>{(totalViews / 1000).toFixed(1)}k</span>
          <span className="stat-change positive">Cumulative views recorded</span>
        </div>
      </div>

      <h2 style={{ fontSize: "1.35rem", fontWeight: 700, margin: "2rem 0 1rem" }}>
        Connected Platforms ({activeAccount.platforms.length})
      </h2>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: "1.25rem" }}>
        {activeAccount.platforms.map(p => (
          <div key={p.id} className="glass-card" style={{ display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
            <div>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "1rem" }}>
                <div>
                  <h3 style={{ fontSize: "1.1rem", fontWeight: 700 }}>{p.name}</h3>
                  <p style={{ fontSize: "0.85rem", color: "var(--text-muted)" }}>{p.handle}</p>
                </div>
                {canEdit && (
                  <button onClick={() => confirm(`Remove ${p.name}?`) && removePlatform(activeAccount.id, p.id)} className="btn btn-danger btn-icon">
                    <i data-lucide="trash" style={{ width: "14px", height: "14px" }}></i>
                  </button>
                )}
              </div>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between", paddingTop: "0.85rem", borderTop: "1px solid var(--border-color)", fontSize: "0.85rem" }}>
              <div>Followers: <strong style={{ color: "#fff" }}>{p.followers > 1000 ? (p.followers / 1000).toFixed(1) + "k" : p.followers}</strong></div>
              <a href={p.url} target="_blank" rel="noopener noreferrer">View Channel</a>
            </div>
          </div>
        ))}
      </div>

      {showAddModal && (
        <div className="modal-overlay" onClick={() => setShowAddModal(false)}>
          <div className="modal-content" onClick={e => e.stopPropagation()}>
            <div className="modal-header">
              <h2 className="modal-title">Link Platform to {activeAccount.name}</h2>
              <button onClick={() => setShowAddModal(false)} className="btn btn-secondary btn-icon"><i data-lucide="x" style={{ width: "18px", height: "18px" }}></i></button>
            </div>
            <form onSubmit={handleAddPlatform}>
              <div className="form-group">
                <label className="form-label">Platform</label>
                <select className="form-select" value={platformName} onChange={e => setPlatformName(e.target.value)}>
                  <option value="Instagram">Instagram</option>
                  <option value="YouTube">YouTube</option>
                  <option value="TikTok">TikTok</option>
                  <option value="X (Twitter)">X (Twitter)</option>
                  <option value="LinkedIn">LinkedIn</option>
                  <option value="Threads">Threads</option>
                </select>
              </div>
              <div className="form-group">
                <label className="form-label">Handle</label>
                <input type="text" className="form-input" placeholder="@handle" required value={handle} onChange={e => setHandle(e.target.value)} />
              </div>
              <div className="form-group">
                <label className="form-label">Followers</label>
                <input type="number" className="form-input" placeholder="10000" value={followers} onChange={e => setFollowers(e.target.value)} />
              </div>
              <div style={{ display: "flex", justifyContent: "flex-end", gap: "0.75rem", marginTop: "1.5rem" }}>
                <button type="button" onClick={() => setShowAddModal(false)} className="btn btn-secondary">Cancel</button>
                <button type="submit" className="btn btn-primary">Link Platform</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

function AddContentPage() {
  const { activeAccount, addContent, canEdit, setActivePage } = React.useContext(VaultContext);

  const [uploadDate, setUploadDate] = React.useState(() => new Date().toISOString().split("T")[0]);
  const [platform, setPlatform] = React.useState("Instagram");
  const [caption, setCaption] = React.useState("");
  const [hashtagsInput, setHashtagsInput] = React.useState("");
  const [subjectInput, setSubjectInput] = React.useState("");
  const [subjectsList, setSubjectsList] = React.useState(["Alex"]);
  const [impressions, setImpressions] = React.useState("10000");
  const [reach, setReach] = React.useState("8500");
  const [likes, setLikes] = React.useState("850");
  const [comments, setComments] = React.useState("45");
  const [shares, setShares] = React.useState("30");
  const [saves, setSaves] = React.useState("120");
  const [status, setStatus] = React.useState("Uploaded");

  if (!activeAccount) return <div className="page-container"><p>No active account selected.</p></div>;

  const handleAddSubject = () => {
    if (!subjectInput.trim()) return;
    if (!subjectsList.includes(subjectInput.trim())) setSubjectsList([...subjectsList, subjectInput.trim()]);
    setSubjectInput("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!canEdit) return;

    const hashtagsArray = hashtagsInput.split(/[\s,]+/).map(t => t.trim()).filter(Boolean).map(t => t.startsWith("#") ? t : "#" + t);

    addContent({
      uploadDate, platform, caption,
      hashtags: hashtagsArray.length > 0 ? hashtagsArray : ["#social"],
      subjects: subjectsList.length > 0 ? subjectsList : ["Self"],
      impressions: Number(impressions) || 0,
      reach: Number(reach) || 0,
      likes: Number(likes) || 0,
      comments: Number(comments) || 0,
      shares: Number(shares) || 0,
      saves: Number(saves) || 0,
      status
    });
    setActivePage("content-table");
  };

  return (
    <div className="page-container">
      <div className="page-header">
        <h1 className="page-title">Add Content Log</h1>
      </div>
      <div className="glass-card" style={{ maxWidth: "800px", margin: "0 auto" }}>
        <form onSubmit={handleSubmit}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.25rem" }}>
            <div className="form-group">
              <label className="form-label">Upload Date</label>
              <input type="date" className="form-input" required value={uploadDate} onChange={e => setUploadDate(e.target.value)} />
            </div>
            <div className="form-group">
              <label className="form-label">Platform</label>
              <select className="form-select" value={platform} onChange={e => setPlatform(e.target.value)}>
                {activeAccount.platforms.map(p => (
                  <option key={p.id} value={p.name}>{p.name}</option>
                ))}
              </select>
            </div>
          </div>

          <div className="form-group">
            <label className="form-label">Caption</label>
            <textarea className="form-textarea" rows="3" required value={caption} onChange={e => setCaption(e.target.value)}></textarea>
          </div>

          <div className="form-group">
            <label className="form-label">Hashtags</label>
            <input type="text" className="form-input" placeholder="#tech #ai" value={hashtagsInput} onChange={e => setHashtagsInput(e.target.value)} />
          </div>

          <div className="form-group">
            <label className="form-label">Subjects Featured (Multiple People)</label>
            <div style={{ display: "flex", gap: "0.5rem", marginBottom: "0.5rem" }}>
              <input type="text" className="form-input" placeholder="Name (e.g. Sarah)" value={subjectInput} onChange={e => setSubjectInput(e.target.value)} />
              <button type="button" onClick={handleAddSubject} className="btn btn-secondary">Add</button>
            </div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem" }}>
              {subjectsList.map(name => (
                <span key={name} className="chip chip-subject">👤 {name}</span>
              ))}
            </div>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(130px, 1fr))", gap: "1rem", marginTop: "1rem" }}>
            <div className="form-group"><label className="form-label">Impressions</label><input type="number" className="form-input" value={impressions} onChange={e => setImpressions(e.target.value)} /></div>
            <div className="form-group"><label className="form-label">Reach</label><input type="number" className="form-input" value={reach} onChange={e => setReach(e.target.value)} /></div>
            <div className="form-group"><label className="form-label">Likes</label><input type="number" className="form-input" value={likes} onChange={e => setLikes(e.target.value)} /></div>
            <div className="form-group"><label className="form-label">Comments</label><input type="number" className="form-input" value={comments} onChange={e => setComments(e.target.value)} /></div>
            <div className="form-group"><label className="form-label">Shares</label><input type="number" className="form-input" value={shares} onChange={e => setShares(e.target.value)} /></div>
            <div className="form-group"><label className="form-label">Saves</label><input type="number" className="form-input" value={saves} onChange={e => setSaves(e.target.value)} /></div>
          </div>

          <div className="form-group">
            <label className="form-label">Status</label>
            <select className="form-select" value={status} onChange={e => setStatus(e.target.value)}>
              <option value="Uploaded">Uploaded</option>
              <option value="Scheduled">Scheduled</option>
              <option value="Privated">Privated</option>
              <option value="Deleted">Deleted</option>
            </select>
          </div>

          <div style={{ display: "flex", justifyContent: "flex-end", gap: "0.75rem", marginTop: "1.5rem" }}>
            <button type="button" onClick={() => setActivePage("content-table")} className="btn btn-secondary">Cancel</button>
            <button type="submit" className="btn btn-primary">Save Content Log</button>
          </div>
        </form>
      </div>
    </div>
  );
}

// CONTENT TABLE PAGE (WITH PAGINATION: 10 CONTENTS PER PAGE)
function ContentTablePage() {
  const { activeAccount, contents, updateContent, deleteContent, canEdit, setActivePage } = React.useContext(VaultContext);
  const [searchTerm, setSearchTerm] = React.useState("");
  const [platformFilter, setPlatformFilter] = React.useState("ALL");
  const [statusFilter, setStatusFilter] = React.useState("ALL");
  const [editingContent, setEditingContent] = React.useState(null);

  const [currentPage, setCurrentPage] = React.useState(1);
  const itemsPerPage = 10;

  if (!activeAccount) return <div className="page-container"><p>No active account selected.</p></div>;

  const accountContents = contents.filter(c => c.accountId === activeAccount.id);

  React.useEffect(() => {
    setCurrentPage(1);
  }, [searchTerm, platformFilter, statusFilter]);

  const filteredContents = React.useMemo(() => {
    return accountContents.filter(item => {
      const matchSearch = item.caption.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.hashtags.some(h => h.toLowerCase().includes(searchTerm.toLowerCase())) ||
        item.subjects.some(s => s.toLowerCase().includes(searchTerm.toLowerCase()));
      const matchPlatform = platformFilter === "ALL" || item.platform === platformFilter;
      const matchStatus = statusFilter === "ALL" || item.status === statusFilter;
      return matchSearch && matchPlatform && matchStatus;
    });
  }, [accountContents, searchTerm, platformFilter, statusFilter]);

  const totalPages = Math.ceil(filteredContents.length / itemsPerPage) || 1;
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedContents = filteredContents.slice(startIndex, startIndex + itemsPerPage);

  return (
    <div className="page-container">
      <div className="page-header">
        <div>
          <h1 className="page-title">{activeAccount.name} - Content Table</h1>
          <p className="page-subtitle">Paginated content table tracking dates, subjects, metrics, and hashtags</p>
        </div>
        {canEdit && (
          <button onClick={() => setActivePage("add-content")} className="btn btn-primary">
            <i data-lucide="plus" style={{ width: "18px", height: "18px" }}></i> Add Content Entry
          </button>
        )}
      </div>

      <div className="glass-card" style={{ marginBottom: "1.5rem", padding: "1rem" }}>
        <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
          <input type="text" className="form-input" placeholder="Search caption, hashtag, subject..." value={searchTerm} onChange={e => setSearchTerm(e.target.value)} style={{ flex: 1 }} />
          <select className="form-select" value={platformFilter} onChange={e => setPlatformFilter(e.target.value)} style={{ width: "auto" }}>
            <option value="ALL">All Platforms</option>
            <option value="Instagram">Instagram</option>
            <option value="YouTube">YouTube</option>
            <option value="TikTok">TikTok</option>
            <option value="X (Twitter)">X (Twitter)</option>
          </select>
          <select className="form-select" value={statusFilter} onChange={e => setStatusFilter(e.target.value)} style={{ width: "auto" }}>
            <option value="ALL">All Statuses</option>
            <option value="Uploaded">Uploaded</option>
            <option value="Scheduled">Scheduled</option>
            <option value="Privated">Privated</option>
            <option value="Deleted">Deleted</option>
          </select>
        </div>
      </div>

      <div className="table-container">
        <table className="custom-table">
          <thead>
            <tr>
              <th>Upload Date</th>
              <th>Platform</th>
              <th>Caption</th>
              <th>Hashtags</th>
              <th>Subjects</th>
              <th>Impressions</th>
              <th>Reach</th>
              <th>Likes</th>
              <th>Comments</th>
              <th>Shares</th>
              <th>Saves</th>
              <th>ER %</th>
              <th>Status</th>
              {canEdit && <th>Actions</th>}
            </tr>
          </thead>
          <tbody>
            {paginatedContents.map(item => {
              const engagement = (item.likes || 0) + (item.comments || 0) + (item.shares || 0) + (item.saves || 0);
              const er = item.reach > 0 ? ((engagement / item.reach) * 100).toFixed(2) : "0.00";

              return (
                <tr key={item.id}>
                  <td>{item.uploadDate}</td>
                  <td><span className="chip">{item.platform}</span></td>
                  <td><div style={{ maxWidth: "220px", fontWeight: 500 }}>{item.caption}</div></td>
                  <td>{item.hashtags.map(h => <span key={h} className="chip" style={{ fontSize: "0.75rem" }}>{h}</span>)}</td>
                  <td>{item.subjects.map(s => <span key={s} className="chip chip-subject" style={{ fontSize: "0.75rem" }}>👤 {s}</span>)}</td>
                  <td style={{ color: "var(--accent-cyan)", fontWeight: 700 }}>{item.impressions.toLocaleString()}</td>
                  <td>{item.reach.toLocaleString()}</td>
                  <td>{item.likes.toLocaleString()}</td>
                  <td>{item.comments.toLocaleString()}</td>
                  <td>{item.shares.toLocaleString()}</td>
                  <td>{item.saves.toLocaleString()}</td>
                  <td style={{ color: "var(--accent-emerald)", fontWeight: 700 }}>{er}%</td>
                  <td><span className={`badge badge-${item.status.toLowerCase()}`}>{item.status}</span></td>
                  {canEdit && (
                    <td>
                      <button onClick={() => setEditingContent({ ...item })} className="btn btn-secondary btn-icon"><i data-lucide="edit-2" style={{ width: "14px", height: "14px" }}></i></button>
                      <button onClick={() => confirm("Delete content?") && deleteContent(item.id)} className="btn btn-danger btn-icon" style={{ marginLeft: "0.3rem" }}><i data-lucide="trash-2" style={{ width: "14px", height: "14px" }}></i></button>
                    </td>
                  )}
                </tr>
              );
            })}

            {filteredContents.length === 0 && (
              <tr>
                <td colSpan="14" style={{ textAlign: "center", padding: "2.5rem", color: "var(--text-muted)" }}>
                  No content records match your filter criteria.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {filteredContents.length > 0 && (
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: "1rem", marginTop: "1.25rem" }}>
          <div style={{ fontSize: "0.88rem", color: "var(--text-muted)" }}>
            Showing <strong>{startIndex + 1}</strong> – <strong>{Math.min(startIndex + itemsPerPage, filteredContents.length)}</strong> of <strong>{filteredContents.length}</strong> contents
          </div>

          <div style={{ display: "flex", gap: "0.4rem", alignItems: "center" }}>
            <button 
              onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))} 
              className="btn btn-secondary" 
              disabled={currentPage === 1}
              style={{ opacity: currentPage === 1 ? 0.5 : 1, cursor: currentPage === 1 ? "not-allowed" : "pointer" }}
            >
              Previous
            </button>

            {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
              <button 
                key={page}
                onClick={() => setCurrentPage(page)}
                className={`btn ${currentPage === page ? "btn-primary" : "btn-secondary"}`}
                style={{ minWidth: "36px", padding: "0.4rem 0.6rem" }}
              >
                {page}
              </button>
            ))}

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

      {editingContent && (
        <div className="modal-overlay" onClick={() => setEditingContent(null)}>
          <div className="modal-content" onClick={e => e.stopPropagation()}>
            <div className="modal-header">
              <h2 className="modal-title">Edit Content</h2>
              <button onClick={() => setEditingContent(null)} className="btn btn-secondary btn-icon"><i data-lucide="x" style={{ width: "18px", height: "18px" }}></i></button>
            </div>
            <form onSubmit={(e) => { e.preventDefault(); updateContent(editingContent.id, editingContent); setEditingContent(null); }}>
              <div className="form-group">
                <label className="form-label">Caption</label>
                <textarea className="form-textarea" rows="3" value={editingContent.caption} onChange={e => setEditingContent({ ...editingContent, caption: e.target.value })}></textarea>
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
                <div className="form-group"><label className="form-label">Impressions</label><input type="number" className="form-input" value={editingContent.impressions} onChange={e => setEditingContent({ ...editingContent, impressions: Number(e.target.value) })} /></div>
                <div className="form-group"><label className="form-label">Reach</label><input type="number" className="form-input" value={editingContent.reach} onChange={e => setEditingContent({ ...editingContent, reach: Number(e.target.value) })} /></div>
              </div>
              <div style={{ display: "flex", justifyContent: "flex-end", gap: "0.75rem", marginTop: "1.5rem" }}>
                <button type="button" onClick={() => setEditingContent(null)} className="btn btn-secondary">Cancel</button>
                <button type="submit" className="btn btn-primary">Save Changes</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

// -----------------------------------------------------------------------
// DOCX REPORT GENERATOR UTILITY
// -----------------------------------------------------------------------
async function generateDocxReport({ accountName, timeframeLabel, contents, accountContents }) {
  if (!window.docx) {
    alert("DOCX library not loaded yet. Please wait a moment and try again.");
    return;
  }

  const {
    Document, Paragraph, TextRun, Table, TableRow, TableCell,
    Packer, HeadingLevel, AlignmentType, WidthType, BorderStyle
  } = window.docx;

  const titleStyle = { bold: true, size: 52, color: "2D3748" };
  const sectionStyle = { bold: true, size: 32, color: "4A5568" };
  const labelStyle = { bold: true, size: 22, color: "2B6CB0" };
  const valueStyle = { size: 22, color: "1A202C" };
  const mutedStyle = { size: 20, color: "718096" };

  const tableBorder = {
    top: { style: BorderStyle.SINGLE, size: 1, color: "E2E8F0" },
    bottom: { style: BorderStyle.SINGLE, size: 1, color: "E2E8F0" },
    left: { style: BorderStyle.SINGLE, size: 1, color: "E2E8F0" },
    right: { style: BorderStyle.SINGLE, size: 1, color: "E2E8F0" },
    insideHorizontal: { style: BorderStyle.SINGLE, size: 1, color: "E2E8F0" },
    insideVertical: { style: BorderStyle.SINGLE, size: 1, color: "E2E8F0" },
  };

  const makeHeaderRow = (cells) => new TableRow({
    children: cells.map(text => new TableCell({
      borders: tableBorder,
      shading: { fill: "2D3748" },
      children: [new Paragraph({ children: [new TextRun({ text, bold: true, size: 18, color: "FFFFFF" })] })]
    }))
  });

  const makeDataRow = (cells) => new TableRow({
    children: cells.map(text => new TableCell({
      borders: tableBorder,
      children: [new Paragraph({ children: [new TextRun({ text: String(text), size: 18, color: "2D3748" })] })]
    }))
  });

  const totalImpressions = accountContents.reduce((s, c) => s + (c.impressions || 0), 0);
  const totalReach = accountContents.reduce((s, c) => s + (c.reach || 0), 0);
  const totalEngagement = accountContents.reduce((s, c) => s + (c.likes || 0) + (c.comments || 0) + (c.shares || 0) + (c.saves || 0), 0);
  const erRate = totalReach > 0 ? ((totalEngagement / totalReach) * 100).toFixed(2) : "0.00";
  const topPost = [...accountContents].sort((a, b) => (b.impressions || 0) - (a.impressions || 0))[0];

  // Hashtag aggregation
  const hashMap = {};
  accountContents.forEach(item => {
    const eng = (item.likes || 0) + (item.comments || 0) + (item.shares || 0) + (item.saves || 0);
    (item.hashtags || []).forEach(tag => {
      const t = tag.trim().toLowerCase();
      if (!hashMap[t]) hashMap[t] = { tag: t, count: 0, impressions: 0, reach: 0, engagement: 0 };
      hashMap[t].count += 1;
      hashMap[t].impressions += item.impressions || 0;
      hashMap[t].reach += item.reach || 0;
      hashMap[t].engagement += eng;
    });
  });
  const hashtagRows = Object.values(hashMap).sort((a, b) => b.impressions - a.impressions);

  // Subject aggregation
  const subMap = {};
  accountContents.forEach(item => {
    const eng = (item.likes || 0) + (item.comments || 0) + (item.shares || 0) + (item.saves || 0);
    (item.subjects || []).forEach(sub => {
      if (!subMap[sub]) subMap[sub] = { name: sub, count: 0, impressions: 0, reach: 0, engagement: 0 };
      subMap[sub].count += 1;
      subMap[sub].impressions += item.impressions || 0;
      subMap[sub].reach += item.reach || 0;
      subMap[sub].engagement += eng;
    });
  });
  const subjectRows = Object.values(subMap).sort((a, b) => b.impressions - a.impressions);

  const generatedAt = new Date().toLocaleString();

  const doc = new Document({
    sections: [{
      properties: {},
      children: [
        // ---- HEADER ----
        new Paragraph({ children: [new TextRun({ text: "SocialVault Analytics Report", ...titleStyle })], alignment: AlignmentType.CENTER }),
        new Paragraph({ children: [new TextRun({ text: `Account: ${accountName}`, size: 28, bold: true, color: "4A5568" })], alignment: AlignmentType.CENTER }),
        new Paragraph({ children: [new TextRun({ text: `Report Period: ${timeframeLabel}`, size: 24, color: "718096" })], alignment: AlignmentType.CENTER }),
        new Paragraph({ children: [new TextRun({ text: `Generated: ${generatedAt}`, size: 20, color: "A0AEC0" })], alignment: AlignmentType.CENTER }),
        new Paragraph({ text: "", spacing: { after: 300 } }),

        // ---- SUMMARY METRICS ----
        new Paragraph({ children: [new TextRun({ text: "1. Summary Metrics", ...sectionStyle })], heading: HeadingLevel.HEADING_2, spacing: { before: 200, after: 100 } }),
        new Paragraph({ children: [new TextRun({ text: "Total Content Items: ", ...labelStyle }), new TextRun({ text: String(accountContents.length), ...valueStyle })] }),
        new Paragraph({ children: [new TextRun({ text: "Total Impressions (Views): ", ...labelStyle }), new TextRun({ text: totalImpressions.toLocaleString(), ...valueStyle })] }),
        new Paragraph({ children: [new TextRun({ text: "Total Reach: ", ...labelStyle }), new TextRun({ text: totalReach.toLocaleString(), ...valueStyle })] }),
        new Paragraph({ children: [new TextRun({ text: "Total Engagement: ", ...labelStyle }), new TextRun({ text: totalEngagement.toLocaleString(), ...valueStyle })] }),
        new Paragraph({ children: [new TextRun({ text: "Engagement Rate (ER %): ", ...labelStyle }), new TextRun({ text: `${erRate}%`, ...valueStyle })] }),
        new Paragraph({ text: "", spacing: { after: 200 } }),

        // ---- TOP PERFORMING POST ----
        new Paragraph({ children: [new TextRun({ text: "2. Top Performing Post", ...sectionStyle })], heading: HeadingLevel.HEADING_2, spacing: { before: 200, after: 100 } }),
        ...(topPost ? [
          new Paragraph({ children: [new TextRun({ text: "Caption: ", ...labelStyle }), new TextRun({ text: topPost.caption, ...valueStyle })] }),
          new Paragraph({ children: [new TextRun({ text: "Platform: ", ...labelStyle }), new TextRun({ text: topPost.platform, ...valueStyle })] }),
          new Paragraph({ children: [new TextRun({ text: "Upload Date: ", ...labelStyle }), new TextRun({ text: topPost.uploadDate, ...valueStyle })] }),
          new Paragraph({ children: [new TextRun({ text: "Subjects: ", ...labelStyle }), new TextRun({ text: (topPost.subjects || []).join(", "), ...valueStyle })] }),
          new Paragraph({ children: [new TextRun({ text: "Impressions: ", ...labelStyle }), new TextRun({ text: topPost.impressions.toLocaleString(), ...valueStyle })] }),
          new Paragraph({ children: [new TextRun({ text: "Reach: ", ...labelStyle }), new TextRun({ text: topPost.reach.toLocaleString(), ...valueStyle })] }),
          new Paragraph({ children: [new TextRun({ text: "Likes: ", ...labelStyle }), new TextRun({ text: String(topPost.likes), ...valueStyle })] }),
          new Paragraph({ children: [new TextRun({ text: "Comments: ", ...labelStyle }), new TextRun({ text: String(topPost.comments), ...valueStyle })] }),
          new Paragraph({ children: [new TextRun({ text: "Shares: ", ...labelStyle }), new TextRun({ text: String(topPost.shares), ...valueStyle })] }),
          new Paragraph({ children: [new TextRun({ text: "Saves: ", ...labelStyle }), new TextRun({ text: String(topPost.saves), ...valueStyle })] }),
        ] : [new Paragraph({ children: [new TextRun({ text: "No posts recorded for this period.", ...mutedStyle })] })]),
        new Paragraph({ text: "", spacing: { after: 200 } }),

        // ---- CONTENT TABLE ----
        new Paragraph({ children: [new TextRun({ text: "3. Content Log Table", ...sectionStyle })], heading: HeadingLevel.HEADING_2, spacing: { before: 200, after: 100 } }),
        new Table({
          width: { size: 100, type: WidthType.PERCENTAGE },
          rows: [
            makeHeaderRow(["Date", "Platform", "Caption (truncated)", "Hashtags", "Subjects", "Impressions", "Reach", "Likes", "Comments", "Shares", "Saves", "Status"]),
            ...accountContents.map(item => makeDataRow([
              item.uploadDate,
              item.platform,
              item.caption.length > 60 ? item.caption.substring(0, 57) + "..." : item.caption,
              (item.hashtags || []).join(" "),
              (item.subjects || []).join(", "),
              (item.impressions || 0).toLocaleString(),
              (item.reach || 0).toLocaleString(),
              String(item.likes || 0),
              String(item.comments || 0),
              String(item.shares || 0),
              String(item.saves || 0),
              item.status
            ]))
          ]
        }),
        new Paragraph({ text: "", spacing: { after: 200 } }),

        // ---- HASHTAG TABLE ----
        new Paragraph({ children: [new TextRun({ text: "4. Hashtag Performance", ...sectionStyle })], heading: HeadingLevel.HEADING_2, spacing: { before: 200, after: 100 } }),
        new Table({
          width: { size: 100, type: WidthType.PERCENTAGE },
          rows: [
            makeHeaderRow(["Hashtag", "Posts Used", "Total Impressions", "Total Reach", "Total Engagement", "Avg ER %"]),
            ...hashtagRows.map(h => makeDataRow([
              h.tag,
              String(h.count),
              h.impressions.toLocaleString(),
              h.reach.toLocaleString(),
              h.engagement.toLocaleString(),
              h.reach > 0 ? ((h.engagement / h.reach) * 100).toFixed(2) + "%" : "0.00%"
            ]))
          ]
        }),
        new Paragraph({ text: "", spacing: { after: 200 } }),

        // ---- SUBJECT TABLE ----
        new Paragraph({ children: [new TextRun({ text: "5. Subject Performance", ...sectionStyle })], heading: HeadingLevel.HEADING_2, spacing: { before: 200, after: 100 } }),
        new Table({
          width: { size: 100, type: WidthType.PERCENTAGE },
          rows: [
            makeHeaderRow(["Subject / Person", "Contents Featured", "Total Impressions", "Total Reach", "Total Engagement", "Avg ER %"]),
            ...subjectRows.map(s => makeDataRow([
              s.name,
              String(s.count),
              s.impressions.toLocaleString(),
              s.reach.toLocaleString(),
              s.engagement.toLocaleString(),
              s.reach > 0 ? ((s.engagement / s.reach) * 100).toFixed(2) + "%" : "0.00%"
            ]))
          ]
        }),

        // ---- FOOTER ----
        new Paragraph({ text: "", spacing: { after: 400 } }),
        new Paragraph({ children: [new TextRun({ text: `SocialVault Pro Analytics Report — ${generatedAt}`, size: 18, color: "A0AEC0", italics: true })], alignment: AlignmentType.CENTER }),
      ]
    }]
  });

  const blob = await Packer.toBlob(doc);
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  const safeName = accountName.replace(/[^a-zA-Z0-9]/g, "_");
  const safeTimeframe = timeframeLabel.replace(/[^a-zA-Z0-9]/g, "_");
  a.download = `SocialVault_Report_${safeName}_${safeTimeframe}.docx`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}

// TIMEFRAME ANALYTICS PAGE (WITH TOP PERFORMING POST HIGHLIGHT BOX)
function TimeframeAnalyticsPage() {
  const { activeAccount, contents } = React.useContext(VaultContext);
  const [timeframe, setTimeframe] = React.useState("monthly");
  const [selectedYear, setSelectedYear] = React.useState(2026);
  const [selectedMonth, setSelectedMonth] = React.useState(8);
  const [showExportModal, setShowExportModal] = React.useState(false);
  const [isExporting, setIsExporting] = React.useState(false);

  const lineChartRef = React.useRef(null);
  const lineChartInstance = React.useRef(null);

  if (!activeAccount) return <div className="page-container"><p>No active account selected.</p></div>;

  const accountContents = contents.filter(c => c.accountId === activeAccount.id);

  const timeframeFilteredContents = React.useMemo(() => {
    return accountContents.filter(item => {
      if (!item.uploadDate) return false;
      const d = new Date(item.uploadDate);

      if (timeframe === "monthly") {
        return (d.getMonth() + 1) === Number(selectedMonth) && d.getFullYear() === Number(selectedYear);
      }

      if (timeframe === "weekly") {
        return (d.getMonth() + 1) === Number(selectedMonth) && d.getFullYear() === Number(selectedYear);
      }

      return true; // all-time
    });
  }, [accountContents, timeframe, selectedMonth, selectedYear]);

  const topPost = React.useMemo(() => {
    if (timeframeFilteredContents.length === 0) return null;
    return [...timeframeFilteredContents].sort((a, b) => (b.impressions || 0) - (a.impressions || 0))[0];
  }, [timeframeFilteredContents]);

  const totalImpressions = timeframeFilteredContents.reduce((sum, c) => sum + (c.impressions || 0), 0);
  const totalReach = timeframeFilteredContents.reduce((sum, c) => sum + (c.reach || 0), 0);
  const totalEngagement = timeframeFilteredContents.reduce((sum, c) => sum + (c.likes || 0) + (c.comments || 0) + (c.shares || 0) + (c.saves || 0), 0);
  const erRate = totalReach > 0 ? ((totalEngagement / totalReach) * 100).toFixed(2) : "0.00";

  React.useEffect(() => {
    if (!lineChartRef.current || !window.Chart) return;

    if (lineChartInstance.current) {
      lineChartInstance.current.destroy();
    }

    const ctx = lineChartRef.current.getContext('2d');
    let labels = [];
    let impressionsData = [];
    let reachData = [];
    let engagementData = [];

    if (timeframe === "monthly" || timeframe === "all") {
      const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
      labels = monthNames;

      monthNames.forEach((_, monthIndex) => {
        const monthItems = accountContents.filter(c => {
          if (!c.uploadDate) return false;
          const d = new Date(c.uploadDate);
          return d.getMonth() === monthIndex && d.getFullYear() === selectedYear;
        });

        impressionsData.push(monthItems.reduce((sum, c) => sum + (c.impressions || 0), 0));
        reachData.push(monthItems.reduce((sum, c) => sum + (c.reach || 0), 0));
        engagementData.push(monthItems.reduce((sum, c) => sum + (c.likes || 0) + (c.comments || 0) + (c.shares || 0) + (c.saves || 0), 0));
      });
    } else if (timeframe === "weekly") {
      labels = ["Week 1 (Days 1–7)", "Week 2 (Days 8–14)", "Week 3 (Days 15–21)", "Week 4 (Days 22–31)"];

      const monthItems = accountContents.filter(c => {
        if (!c.uploadDate) return false;
        const d = new Date(c.uploadDate);
        return (d.getMonth() + 1) === Number(selectedMonth) && d.getFullYear() === Number(selectedYear);
      });

      const weekBuckets = [
        monthItems.filter(c => new Date(c.uploadDate).getDate() <= 7),
        monthItems.filter(c => new Date(c.uploadDate).getDate() > 7 && new Date(c.uploadDate).getDate() <= 14),
        monthItems.filter(c => new Date(c.uploadDate).getDate() > 14 && new Date(c.uploadDate).getDate() <= 21),
        monthItems.filter(c => new Date(c.uploadDate).getDate() > 21)
      ];

      weekBuckets.forEach(bucket => {
        impressionsData.push(bucket.reduce((sum, c) => sum + (c.impressions || 0), 0));
        reachData.push(bucket.reduce((sum, c) => sum + (c.reach || 0), 0));
        engagementData.push(bucket.reduce((sum, c) => sum + (c.likes || 0) + (c.comments || 0) + (c.shares || 0) + (c.saves || 0), 0));
      });
    }

    lineChartInstance.current = new window.Chart(ctx, {
      type: 'line',
      data: {
        labels: labels,
        datasets: [
          { label: 'Impressions (Views)', data: impressionsData, borderColor: '#06B6D4', backgroundColor: 'rgba(6, 182, 212, 0.15)', tension: 0.35, fill: true, pointRadius: 5 },
          { label: 'Reach (Unique Viewers)', data: reachData, borderColor: '#8B5CF6', backgroundColor: 'rgba(139, 92, 246, 0.15)', tension: 0.35, fill: true, pointRadius: 5 },
          { label: 'Total Engagement', data: engagementData, borderColor: '#10B981', backgroundColor: 'rgba(16, 185, 129, 0.15)', tension: 0.35, fill: true, pointRadius: 5 }
        ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: { labels: { color: '#F9FAFB', font: { family: 'Inter', size: 12 } } }
        },
        scales: {
          x: { ticks: { color: '#9CA3AF' }, grid: { color: 'rgba(255,255,255,0.06)' } },
          y: { ticks: { color: '#9CA3AF' }, grid: { color: 'rgba(255,255,255,0.06)' } }
        }
      }
    });

    return () => {
      if (lineChartInstance.current) lineChartInstance.current.destroy();
    };
  }, [timeframe, selectedMonth, selectedYear, accountContents]);

  const monthOptions = [
    { value: 1, label: "January" }, { value: 2, label: "February" }, { value: 3, label: "March" },
    { value: 4, label: "April" }, { value: 5, label: "May" }, { value: 6, label: "June" },
    { value: 7, label: "July" }, { value: 8, label: "August" }, { value: 9, label: "September" },
    { value: 10, label: "October" }, { value: 11, label: "November" }, { value: 12, label: "December" }
  ];

  const currentMonthName = monthOptions.find(m => m.value === Number(selectedMonth))?.label;

  return (
    <div className="page-container">
      <div className="page-header">
        <div>
          <h1 className="page-title">{activeAccount.name} - Analytics & Growth Diagrams</h1>
          <p className="page-subtitle">Interactive line diagrams tracking monthly and weekly performance growth</p>
        </div>

        <div style={{ display: "flex", gap: "0.75rem", alignItems: "center", flexWrap: "wrap" }}>
          <div style={{ display: "flex", gap: "0.4rem", background: "rgba(15, 23, 42, 0.8)", padding: "0.3rem", borderRadius: "var(--radius-sm)", border: "1px solid var(--border-color)" }}>
            <button onClick={() => setTimeframe("all")} className={`btn ${timeframe === "all" ? "btn-primary" : "btn-secondary"}`} style={{ padding: "0.45rem 1rem", fontSize: "0.85rem" }}>All-Time</button>
            <button onClick={() => setTimeframe("monthly")} className={`btn ${timeframe === "monthly" ? "btn-primary" : "btn-secondary"}`} style={{ padding: "0.45rem 1rem", fontSize: "0.85rem" }}>Monthly Line Diagram</button>
            <button onClick={() => setTimeframe("weekly")} className={`btn ${timeframe === "weekly" ? "btn-primary" : "btn-secondary"}`} style={{ padding: "0.45rem 1rem", fontSize: "0.85rem" }}>Weekly Line Diagram</button>
          </div>
          <button
            onClick={() => setShowExportModal(true)}
            className="btn"
            style={{
              background: "linear-gradient(135deg, #059669, #10B981)",
              color: "#fff", fontWeight: 700, fontSize: "0.88rem",
              display: "flex", alignItems: "center", gap: "0.5rem",
              padding: "0.5rem 1.1rem", boxShadow: "0 4px 14px rgba(16,185,129,0.3)"
            }}
          >
            <i data-lucide="file-down" style={{ width: "17px", height: "17px" }}></i>
            Export DOCX Report
          </button>
        </div>
      </div>

      <div className="stats-grid">
        <div className="glass-card stat-card"><span className="stat-label">Total Impressions</span><span className="stat-value" style={{ color: "var(--accent-cyan)" }}>{totalImpressions.toLocaleString()}</span></div>
        <div className="glass-card stat-card"><span className="stat-label">Total Reach</span><span className="stat-value">{totalReach.toLocaleString()}</span></div>
        <div className="glass-card stat-card"><span className="stat-label">Total Engagement</span><span className="stat-value" style={{ color: "var(--accent-emerald)" }}>{totalEngagement.toLocaleString()}</span></div>
        <div className="glass-card stat-card"><span className="stat-label">Engagement Rate (ER %)</span><span className="stat-value" style={{ color: "var(--accent-primary)" }}>{erRate}%</span></div>
      </div>

      {timeframe === "weekly" && (
        <div className="glass-card" style={{ marginBottom: "1.5rem", padding: "1rem", display: "flex", alignItems: "center", gap: "1rem", flexWrap: "wrap" }}>
          <span style={{ fontWeight: "600", fontSize: "0.95rem" }}>📅 Select Month & Year for Weekly Breakdown:</span>
          <select className="form-select" style={{ width: "auto" }} value={selectedMonth} onChange={e => setSelectedMonth(Number(e.target.value))}>
            {monthOptions.map(m => (
              <option key={m.value} value={m.value}>{m.label}</option>
            ))}
          </select>
          <select className="form-select" style={{ width: "auto" }} value={selectedYear} onChange={e => setSelectedYear(Number(e.target.value))}>
            <option value={2026}>2026</option>
            <option value={2025}>2025</option>
          </select>
        </div>
      )}

      {timeframe === "monthly" && (
        <div className="glass-card" style={{ marginBottom: "1.5rem", padding: "1rem", display: "flex", alignItems: "center", gap: "1rem" }}>
          <span style={{ fontWeight: "600", fontSize: "0.95rem" }}>📅 Select Year for Monthly Growth:</span>
          <select className="form-select" style={{ width: "auto" }} value={selectedYear} onChange={e => setSelectedYear(Number(e.target.value))}>
            <option value={2026}>2026</option>
            <option value={2025}>2025</option>
          </select>
        </div>
      )}

      <div className="glass-card" style={{ height: "400px", display: "flex", flexDirection: "column", marginBottom: "2rem" }}>
        <h3 style={{ fontSize: "1.15rem", fontWeight: 700, marginBottom: "1rem" }}>
          📈 {timeframe === "weekly" ? `Weekly Growth Line Diagram (${currentMonthName} ${selectedYear})` : timeframe === "monthly" ? `Monthly Growth Line Diagram (${selectedYear})` : `All-Time Growth Line Diagram (${selectedYear})`}
        </h3>
        <div style={{ flex: 1, position: "relative" }}>
          <canvas ref={lineChartRef}></canvas>
        </div>
      </div>

      {/* TOP PERFORMING POST HIGHLIGHT BOX (AT BOTTOM OF PAGE) */}
      <div className="glass-card" style={{ border: "2px solid var(--accent-amber)", background: "rgba(245, 158, 11, 0.04)" }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "1rem", flexWrap: "wrap", gap: "0.5rem" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
            <div style={{
              width: "40px", height: "40px", borderRadius: "10px",
              background: "rgba(245, 158, 11, 0.2)", color: "var(--accent-amber)",
              display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.3rem"
            }}>
              🏆
            </div>
            <div>
              <h3 style={{ fontSize: "1.2rem", fontWeight: 800 }}>
                #1 Top Performing Post ({timeframe === "all" ? "All-Time" : timeframe === "monthly" ? `Monthly: ${currentMonthName} ${selectedYear}` : `Weekly: ${currentMonthName} ${selectedYear}`})
              </h3>
              <p style={{ fontSize: "0.85rem", color: "var(--text-muted)" }}>
                Highest impression post recorded for this selected section
              </p>
            </div>
          </div>

          {topPost && (
            <span className="badge badge-uploaded" style={{ padding: "0.4rem 0.8rem", fontSize: "0.85rem" }}>
              🌟 {topPost.impressions.toLocaleString()} Views
            </span>
          )}
        </div>

        {topPost ? (
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: "0.6rem", marginBottom: "0.75rem", flexWrap: "wrap" }}>
              <span className="chip" style={{ background: "rgba(255,255,255,0.1)", color: "#fff", fontWeight: 700 }}>{topPost.platform}</span>
              <span style={{ fontSize: "0.85rem", color: "var(--text-muted)" }}>Uploaded: <strong>{topPost.uploadDate}</strong></span>
              
              <div style={{ display: "flex", gap: "0.3rem" }}>
                {topPost.subjects.map(s => (
                  <span key={s} className="chip chip-subject" style={{ fontSize: "0.75rem" }}>👤 {s}</span>
                ))}
              </div>
            </div>

            <p style={{ fontSize: "1.05rem", fontWeight: 600, color: "var(--text-main)", marginBottom: "1rem", lineHeight: "1.4" }}>
              "{topPost.caption}"
            </p>

            <div style={{ display: "flex", flexWrap: "wrap", gap: "0.35rem", marginBottom: "1.25rem" }}>
              {topPost.hashtags.map(h => (
                <span key={h} className="chip" style={{ fontSize: "0.75rem" }}>{h}</span>
              ))}
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(130px, 1fr))", gap: "1rem", paddingTop: "1rem", borderTop: "1px solid var(--border-color)" }}>
              <div>
                <div style={{ fontSize: "0.78rem", color: "var(--text-muted)" }}>Impressions (Views)</div>
                <div style={{ fontSize: "1.2rem", fontWeight: 700, color: "var(--accent-cyan)" }}>{topPost.impressions.toLocaleString()}</div>
              </div>
              <div>
                <div style={{ fontSize: "0.78rem", color: "var(--text-muted)" }}>Reach</div>
                <div style={{ fontSize: "1.2rem", fontWeight: 700 }}>{topPost.reach.toLocaleString()}</div>
              </div>
              <div>
                <div style={{ fontSize: "0.78rem", color: "var(--text-muted)" }}>Likes</div>
                <div style={{ fontSize: "1.2rem", fontWeight: 700 }}>{topPost.likes.toLocaleString()}</div>
              </div>
              <div>
                <div style={{ fontSize: "0.78rem", color: "var(--text-muted)" }}>Comments</div>
                <div style={{ fontSize: "1.2rem", fontWeight: 700 }}>{topPost.comments.toLocaleString()}</div>
              </div>
              <div>
                <div style={{ fontSize: "0.78rem", color: "var(--text-muted)" }}>Shares</div>
                <div style={{ fontSize: "1.2rem", fontWeight: 700 }}>{topPost.shares.toLocaleString()}</div>
              </div>
              <div>
                <div style={{ fontSize: "0.78rem", color: "var(--text-muted)" }}>Saves</div>
                <div style={{ fontSize: "1.2rem", fontWeight: 700 }}>{topPost.saves.toLocaleString()}</div>
              </div>
              <div>
                <div style={{ fontSize: "0.78rem", color: "var(--text-muted)" }}>ER %</div>
                <div style={{ fontSize: "1.2rem", fontWeight: 700, color: "var(--accent-emerald)" }}>
                  {topPost.reach > 0 ? (((topPost.likes + topPost.comments + topPost.shares + topPost.saves) / topPost.reach) * 100).toFixed(2) : "0.00"}%
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div style={{ textAlign: "center", padding: "1.5rem", color: "var(--text-muted)" }}>
            No post content found for this selected timeframe section.
          </div>
        )}
      </div>

      {/* EXPORT MODAL */}
      {showExportModal && (
        <div className="modal-overlay" onClick={() => setShowExportModal(false)}>
          <div className="modal-content" onClick={e => e.stopPropagation()} style={{ maxWidth: "480px" }}>
            <div className="modal-header">
              <h2 className="modal-title">📄 Export Analytics Report</h2>
              <button onClick={() => setShowExportModal(false)} className="btn btn-secondary btn-icon">
                <i data-lucide="x" style={{ width: "18px", height: "18px" }}></i>
              </button>
            </div>

            <p style={{ color: "var(--text-muted)", fontSize: "0.9rem", marginBottom: "1.5rem" }}>
              Choose a timeframe scope and download a full <strong style={{ color: "#fff" }}>.docx</strong> report containing summary metrics, content log, hashtag performance, and subject analytics.
            </p>

            <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem", marginBottom: "1.5rem" }}>
              {[
                {
                  label: "All-Time Report",
                  desc: "Complete analytics across all recorded content",
                  icon: "infinity",
                  color: "var(--accent-cyan)",
                  scope: "all",
                  get timeframeLabel() { return "All-Time"; },
                  get filterFn() { return () => true; }
                },
                {
                  label: `Monthly Report — ${monthOptions.find(m => m.value === Number(selectedMonth))?.label || ""} ${selectedYear}`,
                  desc: "Analytics for the currently selected month & year",
                  icon: "calendar",
                  color: "var(--accent-primary)",
                  scope: "monthly",
                  get timeframeLabel() { return `Monthly_${monthOptions.find(m => m.value === Number(selectedMonth))?.label}_${selectedYear}`; },
                  get filterFn() {
                    return (item) => {
                      const d = new Date(item.uploadDate);
                      return (d.getMonth() + 1) === Number(selectedMonth) && d.getFullYear() === Number(selectedYear);
                    };
                  }
                },
                {
                  label: `Weekly Report — ${monthOptions.find(m => m.value === Number(selectedMonth))?.label || ""} ${selectedYear}`,
                  desc: "Analytics for the selected month broken into weeks",
                  icon: "calendar-days",
                  color: "var(--accent-emerald)",
                  scope: "weekly",
                  get timeframeLabel() { return `Weekly_${monthOptions.find(m => m.value === Number(selectedMonth))?.label}_${selectedYear}`; },
                  get filterFn() {
                    return (item) => {
                      const d = new Date(item.uploadDate);
                      return (d.getMonth() + 1) === Number(selectedMonth) && d.getFullYear() === Number(selectedYear);
                    };
                  }
                }
              ].map(option => (
                <button
                  key={option.scope}
                  disabled={isExporting}
                  onClick={async () => {
                    setIsExporting(true);
                    const filtered = accountContents.filter(option.filterFn);
                    await generateDocxReport({
                      accountName: activeAccount.name,
                      timeframeLabel: option.timeframeLabel,
                      contents: contents,
                      accountContents: filtered
                    });
                    setIsExporting(false);
                    setShowExportModal(false);
                  }}
                  style={{
                    display: "flex", alignItems: "center", gap: "1rem",
                    background: "rgba(255,255,255,0.04)",
                    border: `1.5px solid ${option.color}33`,
                    borderRadius: "var(--radius-sm)",
                    padding: "1rem 1.25rem",
                    cursor: isExporting ? "not-allowed" : "pointer",
                    opacity: isExporting ? 0.6 : 1,
                    transition: "all 0.2s",
                    textAlign: "left",
                    width: "100%"
                  }}
                  onMouseEnter={e => { if (!isExporting) e.currentTarget.style.borderColor = option.color; }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = `${option.color}33`; }}
                >
                  <div style={{
                    width: "40px", height: "40px", borderRadius: "10px",
                    background: `${option.color}20`, color: option.color,
                    display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0
                  }}>
                    <i data-lucide={option.icon} style={{ width: "20px", height: "20px" }}></i>
                  </div>
                  <div>
                    <div style={{ fontWeight: 700, fontSize: "0.95rem", color: "#fff", marginBottom: "0.2rem" }}>{option.label}</div>
                    <div style={{ fontSize: "0.8rem", color: "var(--text-muted)" }}>{option.desc}</div>
                  </div>
                  <div style={{ marginLeft: "auto", color: option.color, fontSize: "0.8rem", fontWeight: 600 }}>⬇ .docx</div>
                </button>
              ))}
            </div>

            {isExporting && (
              <div style={{ textAlign: "center", padding: "0.75rem", color: "var(--accent-emerald)", fontWeight: 600 }}>
                ⏳ Generating your DOCX report, please wait...
              </div>
            )}

            <div style={{ display: "flex", justifyContent: "flex-end" }}>
              <button onClick={() => setShowExportModal(false)} className="btn btn-secondary">Close</button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}

function HashtagAnalyticsPage() {
  const { activeAccount, contents } = React.useContext(VaultContext);

  if (!activeAccount) return <div className="page-container"><p>No active account selected.</p></div>;

  const accountContents = contents.filter(c => c.accountId === activeAccount.id);

  const hashtagStats = React.useMemo(() => {
    const map = {};
    accountContents.forEach(item => {
      if (!item.hashtags) return;
      const eng = (item.likes || 0) + (item.comments || 0) + (item.shares || 0) + (item.saves || 0);
      item.hashtags.forEach(tag => {
        const clean = tag.trim().toLowerCase();
        if (!map[clean]) map[clean] = { tag: clean, contentCount: 0, impressions: 0, reach: 0, engagement: 0 };
        map[clean].contentCount += 1;
        map[clean].impressions += item.impressions || 0;
        map[clean].reach += item.reach || 0;
        map[clean].engagement += eng;
      });
    });
    return Object.values(map).map(h => ({
      ...h,
      avgEr: h.reach > 0 ? ((h.engagement / h.reach) * 100).toFixed(2) : "0.00"
    }));
  }, [accountContents]);

  return (
    <div className="page-container">
      <div className="page-header">
        <h1 className="page-title">{activeAccount.name} - Hashtag Studio</h1>
      </div>

      <div className="table-container">
        <table className="custom-table">
          <thead>
            <tr>
              <th>Hashtag Tag</th>
              <th>Contents Used</th>
              <th>Total Viewers (Impressions)</th>
              <th>Total Reach</th>
              <th>Total Engagement</th>
              <th>Avg Engagement Rate %</th>
            </tr>
          </thead>
          <tbody>
            {hashtagStats.map(h => (
              <tr key={h.tag}>
                <td><span className="chip">{h.tag}</span></td>
                <td>{h.contentCount} posts</td>
                <td style={{ color: "var(--accent-cyan)", fontWeight: 700 }}>{h.impressions.toLocaleString()}</td>
                <td>{h.reach.toLocaleString()}</td>
                <td>{h.engagement.toLocaleString()}</td>
                <td style={{ color: "var(--accent-primary)", fontWeight: 700 }}>{h.avgEr}%</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

// ----------------------------------------------------------------------
// SUBJECT PERFORMANCE STUDIO (WITH SORTING & 25 PER PAGE PAGINATION)
// ----------------------------------------------------------------------
function SubjectAnalyticsPage() {
  const { activeAccount, contents } = React.useContext(VaultContext);
  const [searchSubject, setSearchSubject] = React.useState("");

  const [sortBy, setSortBy] = React.useState("impressions");
  const [sortOrder, setSortOrder] = React.useState("desc");

  const [currentPage, setCurrentPage] = React.useState(1);
  const itemsPerPage = 25;

  if (!activeAccount) return <div className="page-container"><p>No active account selected.</p></div>;

  const accountContents = contents.filter(c => c.accountId === activeAccount.id);

  React.useEffect(() => {
    setCurrentPage(1);
  }, [searchSubject, sortBy, sortOrder]);

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
    return subjectStats.filter(s => s.name.toLowerCase().includes(searchSubject.toLowerCase()))
      .sort((a, b) => {
        let valA, valB;

        if (sortBy === "alphabet") {
          valA = a.name.toLowerCase();
          valB = b.name.toLowerCase();
          return sortOrder === "asc" ? valA.localeCompare(valB) : valB.localeCompare(valA);
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

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: "1.25rem", marginBottom: "2rem" }}>
        {paginatedSubjects.map(s => (
          <div key={s.name} className="glass-card" style={{ borderLeft: "4px solid var(--accent-cyan)" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "1rem" }}>
              <div style={{
                width: "42px", height: "42px", borderRadius: "50%",
                background: "linear-gradient(135deg, var(--accent-cyan), var(--accent-emerald))",
                display: "flex", alignItems: "center", justifyContent: "center",
                fontWeight: 700, color: "#fff", fontSize: "1.1rem"
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
                <span style={{ color: "var(--text-muted)" }}>Total Engagement:</span>
                <strong style={{ color: "var(--accent-emerald)" }}>{s.engagement.toLocaleString()}</strong>
              </div>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <span style={{ color: "var(--text-muted)" }}>Avg ER %:</span>
                <strong style={{ color: "var(--accent-primary)" }}>{s.avgEr}%</strong>
              </div>
            </div>
          </div>
        ))}
      </div>

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
            {paginatedSubjects.map(s => (
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
                  No subject records found matching your filter criteria.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {sortedSubjects.length > 0 && (
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: "1rem", marginTop: "1.25rem" }}>
          <div style={{ fontSize: "0.88rem", color: "var(--text-muted)" }}>
            Showing <strong>{startIndex + 1}</strong> – <strong>{Math.min(startIndex + itemsPerPage, sortedSubjects.length)}</strong> of <strong>{sortedSubjects.length}</strong> subjects
          </div>

          <div style={{ display: "flex", gap: "0.4rem", alignItems: "center" }}>
            <button 
              onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))} 
              className="btn btn-secondary" 
              disabled={currentPage === 1}
              style={{ opacity: currentPage === 1 ? 0.5 : 1, cursor: currentPage === 1 ? "not-allowed" : "pointer" }}
            >
              Previous
            </button>

            {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
              <button 
                key={page}
                onClick={() => setCurrentPage(page)}
                className={`btn ${currentPage === page ? "btn-primary" : "btn-secondary"}`}
                style={{ minWidth: "36px", padding: "0.4rem 0.6rem" }}
              >
                {page}
              </button>
            ))}

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
}

function CollaboratorsPage() {
  const { activeAccount, addCollaborator, removeCollaborator, isOwner } = React.useContext(VaultContext);
  const [inviteEmail, setInviteEmail] = React.useState("");
  const [inviteRole, setInviteRole] = React.useState("editor");

  if (!activeAccount) return <div className="page-container"><p>No active account selected.</p></div>;

  const shareLink = `${window.location.origin}${window.location.pathname}?vaultToken=${activeAccount.shareToken}`;

  return (
    <div className="page-container">
      <div className="page-header">
        <h1 className="page-title">{activeAccount.name} - Vault Sharing & Collaborators</h1>
      </div>

      <div className="glass-card" style={{ marginBottom: "1.5rem" }}>
        <h3 style={{ fontSize: "1.1rem", fontWeight: 700, marginBottom: "0.5rem" }}>🔗 Shareable Vault Link</h3>
        <input type="text" className="form-input" readOnly value={shareLink} />
      </div>

      {isOwner && (
        <div className="glass-card" style={{ marginBottom: "1.5rem" }}>
          <h3 style={{ fontSize: "1.1rem", fontWeight: 700, marginBottom: "1rem" }}>✉️ Invite Collaborator</h3>
          <form onSubmit={(e) => { e.preventDefault(); addCollaborator(activeAccount.id, inviteEmail, inviteRole); setInviteEmail(""); }} style={{ display: "flex", gap: "1rem" }}>
            <input type="email" className="form-input" placeholder="friend@gmail.com" required value={inviteEmail} onChange={e => setInviteEmail(e.target.value)} style={{ flex: 1 }} />
            <select className="form-select" value={inviteRole} onChange={e => setInviteRole(e.target.value)} style={{ width: "auto" }}>
              <option value="editor">Editor</option>
              <option value="viewer">Viewer</option>
            </select>
            <button type="submit" className="btn btn-primary">Grant Access</button>
          </form>
        </div>
      )}

      <div className="table-container">
        <table className="custom-table">
          <thead>
            <tr><th>Collaborator</th><th>Role</th><th>Actions</th></tr>
          </thead>
          <tbody>
            <tr><td>👑 {activeAccount.ownerEmail} (Owner)</td><td><span className="badge badge-uploaded">Owner</span></td><td>-</td></tr>
            {activeAccount.collaborators.map(c => (
              <tr key={c.email}>
                <td>👤 {c.email}</td>
                <td><span className="badge badge-scheduled">{c.role}</span></td>
                <td>{isOwner && <button onClick={() => removeCollaborator(activeAccount.id, c.email)} className="btn btn-danger btn-icon"><i data-lucide="user-x" style={{ width: "14px", height: "14px" }}></i></button>}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

// 4. MAIN APP CONTROLLER
function AppContent() {
  const { user, authLoading } = React.useContext(AuthContext);
  const { activeAccountId, activePage, dataLoading } = React.useContext(VaultContext);

  React.useEffect(() => {
    if (window.lucide) {
      window.lucide.createIcons();
    }
  });

  // Show spinner while Firebase checks if user is logged in
  if (authLoading) {
    return (
      <div style={{
        minHeight: "100vh", display: "flex", flexDirection: "column",
        alignItems: "center", justifyContent: "center", gap: "1rem"
      }}>
        <div style={{
          width: "48px", height: "48px", borderRadius: "50%",
          border: "3px solid var(--border-color)",
          borderTopColor: "var(--accent-primary)",
          animation: "spin 0.8s linear infinite"
        }} />
        <p style={{ color: "var(--text-muted)", fontSize: "0.9rem" }}>Loading SociaVault...</p>
        <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
      </div>
    );
  }

  if (!user) return <LoginPage />;

  // Show spinner while Firestore loads cloud data
  if (dataLoading) {
    return (
      <div style={{
        minHeight: "100vh", display: "flex", flexDirection: "column",
        alignItems: "center", justifyContent: "center", gap: "1rem"
      }}>
        <div style={{
          width: "48px", height: "48px", borderRadius: "50%",
          border: "3px solid var(--border-color)",
          borderTopColor: "var(--accent-cyan)",
          animation: "spin 0.8s linear infinite"
        }} />
        <p style={{ color: "var(--text-muted)", fontSize: "0.9rem" }}>Syncing your cloud data...</p>
        <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
      </div>
    );
  }

  if (!activeAccountId || activePage === "account-vault") {
    return <div><Navbar /><AccountVaultPage /></div>;
  }

  const renderActivePage = () => {
    switch (activePage) {
      case "account-center": return <AccountCenterPage />;
      case "add-content": return <AddContentPage />;
      case "content-table": return <ContentTablePage />;
      case "timeframe-analytics": return <TimeframeAnalyticsPage />;
      case "hashtag-analytics": return <HashtagAnalyticsPage />;
      case "subject-analytics": return <SubjectAnalyticsPage />;
      case "collaborators": return <CollaboratorsPage />;
      default: return <AccountCenterPage />;
    }
  };

  return <div><Navbar />{renderActivePage()}</div>;
}

function MainApp() {
  return (
    <AuthProvider>
      <VaultProvider>
        <AppContent />
      </VaultProvider>
    </AuthProvider>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<MainApp />);
