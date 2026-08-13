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
        { id: "p6", name: "Facebook", handle: "Apex Tech Media", followers: 42000, url: "https://facebook.com" }
      ],
      collaborators: [],
      shareToken: "vlt_token_apex_88"
    }
  ],
  contents: [
    { id: "cnt_01", accountId: "acc_01", uploadDate: "2026-08-10", uploadTime: "14:30", platform: "Instagram", caption: "Unboxing the futuristic AI Glasses with Sarah! Is this the replacement for smartphones?", hashtags: ["#tech", "#gadgets", "#aiglasses"], subjects: ["Alex", "Sarah"], impressions: 145000, reach: 122000, likes: 12400, comments: 980, shares: 1420, saves: 3100, status: "Uploaded" },
    { id: "cnt_02", accountId: "acc_01", uploadDate: "2026-08-08", uploadTime: "18:00", platform: "YouTube", caption: "Full Day in the Life of a Tech Creator feat. Jordan & Alex (Setup Tour 2026)", hashtags: ["#vlog", "#setuptour", "#tech"], subjects: ["Alex", "Jordan"], impressions: 380000, reach: 295000, likes: 28900, comments: 2450, shares: 3100, saves: 5400, status: "Uploaded" },
    { id: "cnt_03", accountId: "acc_01", uploadDate: "2026-08-05", uploadTime: "11:15", platform: "TikTok", caption: "3 AI tools you need to try this week! 🚀 #ai #productivity #tech", hashtags: ["#ai", "#productivity", "#tech"], subjects: ["Alex"], impressions: 620000, reach: 540000, likes: 54000, comments: 3120, shares: 12400, saves: 18900, status: "Uploaded" },
    { id: "cnt_04", accountId: "acc_01", uploadDate: "2026-08-15", uploadTime: "09:00", platform: "Instagram", caption: "Behind the scenes with Sarah on the new studio build podcast!", hashtags: ["#podcast", "#studio"], subjects: ["Sarah"], impressions: 85000, reach: 71000, likes: 7200, comments: 420, shares: 610, saves: 1100, status: "Scheduled" },
    { id: "cnt_05", accountId: "acc_01", uploadDate: "2026-07-28", uploadTime: "16:45", platform: "X (Twitter)", caption: "Thread: Why 2026 is the turning point for wearable spatial computing. 🧵👇", hashtags: ["#tech", "#spatialcomputing"], subjects: ["Alex"], impressions: 92000, reach: 84000, likes: 4100, comments: 630, shares: 1890, saves: 2200, status: "Uploaded" },
    { id: "cnt_06", accountId: "acc_01", uploadDate: "2026-07-20", uploadTime: "19:30", platform: "Instagram", caption: "Testing camera quality at sunset with Jordan #photography", hashtags: ["#photography", "#tech"], subjects: ["Jordan"], impressions: 110000, reach: 95000, likes: 9800, comments: 510, shares: 720, saves: 1400, status: "Uploaded" },
    { id: "cnt_07", accountId: "acc_01", uploadDate: "2026-07-12", uploadTime: "13:00", platform: "YouTube", caption: "Top 5 Mac Apps for Creators in 2026", hashtags: ["#mac", "#apps", "#productivity"], subjects: ["Alex"], impressions: 240000, reach: 210000, likes: 18500, comments: 1200, shares: 1900, saves: 4200, status: "Uploaded" },
    { id: "cnt_08", accountId: "acc_01", uploadDate: "2026-07-04", uploadTime: "15:20", platform: "TikTok", caption: "How to edit videos 2x faster with AI shortcodes!", hashtags: ["#editing", "#ai", "#tutorial"], subjects: ["Alex"], impressions: 450000, reach: 390000, likes: 41000, comments: 1950, shares: 8900, saves: 12500, status: "Uploaded" },
    { id: "cnt_09", accountId: "acc_01", uploadDate: "2026-06-25", uploadTime: "10:10", platform: "Instagram", caption: "Summer tech gift guide feat. Sarah & Alex", hashtags: ["#giftguide", "#tech"], subjects: ["Alex", "Sarah"], impressions: 130000, reach: 115000, likes: 11200, comments: 680, shares: 950, saves: 2100, status: "Uploaded" },
    { id: "cnt_10", accountId: "acc_01", uploadDate: "2026-06-15", uploadTime: "17:00", platform: "YouTube", caption: "Building a $10,000 Dream Desk Setup 2026", hashtags: ["#desksetup", "#workspace"], subjects: ["Alex"], impressions: 520000, reach: 430000, likes: 46000, comments: 3400, shares: 5100, saves: 9800, status: "Uploaded" },
    { id: "cnt_11", accountId: "acc_01", uploadDate: "2026-06-02", uploadTime: "12:45", platform: "TikTok", caption: "Secret iPhone feature you definitely didn't know!", hashtags: ["#iphone", "#hacks"], subjects: ["Alex"], impressions: 780000, reach: 690000, likes: 72000, comments: 4500, shares: 18900, saves: 24500, status: "Uploaded" },
    { id: "cnt_12", accountId: "acc_01", uploadDate: "2026-05-18", uploadTime: "08:30", platform: "Instagram", caption: "Coffee & Code with Jordan", hashtags: ["#vlog", "#code"], subjects: ["Jordan"], impressions: 95000, reach: 82000, likes: 8100, comments: 410, shares: 520, saves: 980, status: "Uploaded" },
    { id: "cnt_13", accountId: "acc_02", uploadDate: "2026-08-02", uploadTime: "14:00", platform: "YouTube", caption: "Apex 2026 Smartphone Flagship Shootout: Jordan vs Alex blind camera test", hashtags: ["#smartphone", "#cameratest", "#tech"], subjects: ["Alex", "Jordan"], impressions: 410000, reach: 340000, likes: 31000, comments: 1850, shares: 2400, saves: 4800, status: "Uploaded" }
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
      provider.setCustomParameters({ prompt: 'select_account' });
      await window.firebaseAuth.signInWithPopup(provider);
      return { success: true };
    } catch (error) {
      console.error('Google Sign-In error:', error);
      if (error.code === 'auth/unauthorized-domain') {
        alert(`Google Sign-In Error: Domain "${window.location.hostname}" is not authorized in your Firebase Console.\n\nTo fix this:\n1. Go to console.firebase.google.com\n2. Open your SociaVault project\n3. Go to Authentication -> Settings -> Authorized domains\n4. Add "${window.location.hostname}"`);
      } else if (error.code === 'auth/popup-blocked') {
        try {
          const provider = new firebase.auth.GoogleAuthProvider();
          await window.firebaseAuth.signInWithRedirect(provider);
        } catch (redirectErr) {
          alert(`Google Sign-In failed: ${redirectErr.message}`);
        }
      } else if (error.code === 'auth/popup-closed-by-user') {
        // User cancelled login popup
      } else {
        alert(`Google Sign-In failed (${error.code}): ${error.message}`);
      }
      return { success: false, message: error.message };
    }
  };

  const logout = async () => {
    await window.firebaseAuth.signOut();
    setUser(null);
  };

  const loginWithEmail = async (email, password) => {
    try {
      await window.firebaseAuth.signInWithEmailAndPassword(email, password);
      return { success: true };
    } catch (error) {
      return { success: false, message: getErrorMessage(error.code) };
    }
  };

  const registerWithEmail = async (email, password, displayName) => {
    try {
      const result = await window.firebaseAuth.createUserWithEmailAndPassword(email, password);
      await result.user.updateProfile({ displayName });
      return { success: true };
    } catch (error) {
      return { success: false, message: getErrorMessage(error.code) };
    }
  };

  const forgotPassword = async (email) => {
    try {
      await window.firebaseAuth.sendPasswordResetEmail(email);
      return { success: true };
    } catch (error) {
      return { success: false, message: getErrorMessage(error.code) };
    }
  };

  const getErrorMessage = (code) => {
    const messages = {
      'auth/user-not-found': 'No account found with this email.',
      'auth/wrong-password': 'Incorrect password. Please try again.',
      'auth/email-already-in-use': 'An account with this email already exists.',
      'auth/weak-password': 'Password must be at least 6 characters.',
      'auth/invalid-email': 'Please enter a valid email address.',
      'auth/too-many-requests': 'Too many attempts. Please try again later.',
      'auth/invalid-credential': 'Incorrect email or password.',
    };
    return messages[code] || 'Something went wrong. Please try again.';
  };

  return (
    <AuthContext.Provider value={{ user, setUser, loginWithGoogle, loginWithEmail, registerWithEmail, forgotPassword, logout, authLoading }}>
      {children}
    </AuthContext.Provider>
  );
}

function VaultProvider({ children }) {
  const { user } = React.useContext(AuthContext);

  const [ownAccounts, setOwnAccounts] = React.useState([]);
  const [sharedAccounts, setSharedAccounts] = React.useState([]);
  const [ownContents, setOwnContents] = React.useState([]);
  const [sharedContents, setSharedContents] = React.useState([]);
  const [activeAccountIdState, setActiveAccountIdState] = React.useState(null);
  const [activePage, setActivePage] = React.useState("account-center");
  const [dataLoading, setDataLoading] = React.useState(true);

  const accounts = React.useMemo(() => [...ownAccounts, ...sharedAccounts], [ownAccounts, sharedAccounts]);
  const contents = React.useMemo(() => [...ownContents, ...sharedContents], [ownContents, sharedContents]);

  // Returns Firestore ref for the account's actual owner
  const getRefForUid = (uid) => window.firebaseDb.collection('users').doc(uid || user.uid);
  const getUserRef = () => window.firebaseDb.collection('users').doc(user.uid);

  // Real-time listener for OWN accounts & contents
  React.useEffect(() => {
    if (!user) {
      setOwnAccounts([]); setOwnContents([]);
      setDataLoading(false);
      return;
    }

    setDataLoading(true);
    const userRef = getUserRef();

    // Real-time listener for OWN accounts
    const unsubAccounts = userRef.collection('accounts').onSnapshot(snap => {
      const data = snap.docs.map(doc => ({ id: doc.id, ...doc.data(), _ownerUid: user.uid }));
      setOwnAccounts(data);
      setDataLoading(false);
    });

    // Real-time listener for OWN contents
    const unsubContents = userRef.collection('contents').orderBy('uploadDate', 'desc').onSnapshot(snap => {
      const data = snap.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setOwnContents(data);
    });

    // Restore last active account
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

  // Real-time listener for SHARED vaults
  React.useEffect(() => {
    if (!user) {
      setSharedAccounts([]); setSharedContents([]);
      return;
    }

    const emailKey = (user.email || "").toLowerCase().trim().replace(/\./g, '__dot__');
    const indexRef = window.firebaseDb.collection('collaboratorIndex').doc(emailKey);

    let activeUnsubscribers = [];

    const unsubIndex = indexRef.onSnapshot((indexSnap) => {
      // Clean up previous shared vault listeners
      activeUnsubscribers.forEach(unsub => unsub());
      activeUnsubscribers = [];

      if (!indexSnap.exists) {
        setSharedAccounts([]); setSharedContents([]);
        return;
      }

      const vaults = indexSnap.data().vaults || [];
      if (vaults.length === 0) {
        setSharedAccounts([]); setSharedContents([]);
        return;
      }

      const sharedAccMap = {};
      const sharedContMap = {};

      vaults.forEach(v => {
        const { ownerUid, accountId } = v;
        if (!ownerUid || !accountId) return;

        // Listen in real time to shared account document
        const unsubAcc = window.firebaseDb.collection('users').doc(ownerUid)
          .collection('accounts').doc(accountId)
          .onSnapshot(accDoc => {
            if (accDoc.exists) {
              sharedAccMap[accountId] = { id: accDoc.id, ...accDoc.data(), _ownerUid: ownerUid };
            } else {
              delete sharedAccMap[accountId];
            }
            setSharedAccounts(Object.values(sharedAccMap));
          });
        activeUnsubscribers.push(unsubAcc);

        // Listen in real time to shared contents collection
        const unsubCont = window.firebaseDb.collection('users').doc(ownerUid)
          .collection('contents').where('accountId', '==', accountId)
          .onSnapshot(contSnap => {
            sharedContMap[accountId] = contSnap.docs.map(d => ({ id: d.id, ...d.data() }));
            setSharedContents(Object.values(sharedContMap).flat());
          });
        activeUnsubscribers.push(unsubCont);
      });
    });

    // Handle ?vaultToken in URL — automatically register shared vault into collaborator index
    const params = new URLSearchParams(window.location.search);
    const vaultToken = params.get('vaultToken');
    if (vaultToken && user) {
      window.firebaseDb.collection('vaultShareIndex').doc(vaultToken).get().then(async (tokenDoc) => {
        if (!tokenDoc.exists) return;
        const { ownerUid, accountId } = tokenDoc.data();
        const accDoc = await window.firebaseDb.collection('users').doc(ownerUid).collection('accounts').doc(accountId).get();
        if (!accDoc.exists) return;
        const accData = accDoc.data();
        const userEmail = (user.email || "").toLowerCase().trim();
        const ownerEmail = (accData.ownerEmail || "").toLowerCase().trim();
        const isAllowed = ownerEmail === userEmail ||
          (accData.collaborators || []).some(c => (c.email || "").toLowerCase().trim() === userEmail);
        if (!isAllowed) {
          alert("You have not been invited to this vault. Ask the owner to add your email as a collaborator first.");
          return;
        }

        // Add to collaboratorIndex if missing so real-time listeners pick it up
        const indexDoc = await indexRef.get();
        const existingVaults = indexDoc.exists ? (indexDoc.data().vaults || []) : [];
        if (!existingVaults.some(v => v.accountId === accountId)) {
          const collab = (accData.collaborators || []).find(c => (c.email || "").toLowerCase().trim() === userEmail);
          const role = collab ? collab.role : "editor";
          await indexRef.set({ vaults: [...existingVaults, { ownerUid, accountId, role, shareToken: vaultToken, accountName: accData.name }] }, { merge: true });
        }

        setActiveAccountIdState(accountId);
        setActivePage('account-center');
        window.history.replaceState({}, '', window.location.pathname);
      }).catch(() => {});
    }

    return () => {
      unsubIndex();
      activeUnsubscribers.forEach(unsub => unsub());
    };
  }, [user]);

  const activeAccountId = activeAccountIdState;

  const setActiveAccountId = (id) => {
    setActiveAccountIdState(id);
    if (user) {
      window.firebaseDb.collection('users').doc(user.uid).set({ activeAccountId: id || null }, { merge: true });
    }
  };

  const activeAccount = React.useMemo(() => accounts.find(a => a.id === activeAccountId) || null, [accounts, activeAccountId]);

  // Get ownerUid for an account
  const getOwnerUidForAccount = (accountId) => {
    const acc = accounts.find(a => a.id === accountId);
    return (acc && acc._ownerUid) || user.uid;
  };

  const getUserRole = React.useCallback((account) => {
    if (!user || !account) return "viewer";
    const userEmail = (user.email || "").toLowerCase().trim();
    const ownerEmail = (account.ownerEmail || "").toLowerCase().trim();
    if (ownerEmail === userEmail) return "owner";
    const collab = (account.collaborators || []).find(c => (c.email || "").toLowerCase().trim() === userEmail);
    if (collab) return collab.role;
    return "viewer";
  }, [user]);

  const activeUserRole = React.useMemo(() => getUserRole(activeAccount), [activeAccount, getUserRole]);
  const canEdit = activeUserRole === "owner" || activeUserRole === "editor";
  const isOwner = activeUserRole === "owner";

  // ── Account Actions (Firestore) ──
  const addAccount = async (name, description) => {
    if (!user) return;
    const shareToken = "vlt_token_" + Math.random().toString(36).substr(2, 8);
    const newAcc = {
      name: name || "New Media Account",
      ownerEmail: user.email.toLowerCase().trim(),
      description: description || "Social media account workspace",
      platforms: [{ id: "p_" + Date.now(), name: "Instagram", handle: "@" + name.toLowerCase().replace(/\s+/g, "_"), followers: 0, url: "#" }],
      collaborators: [],
      subjectPhotos: {},
      shareToken
    };
    const docRef = await getUserRef().collection('accounts').add(newAcc);
    await window.firebaseDb.collection('vaultShareIndex').doc(shareToken).set({ ownerUid: user.uid, accountId: docRef.id, accountName: name });
    setActiveAccountId(docRef.id);
    setActivePage("account-center");
  };

  const removeAccount = async (accountId) => {
    const ownerUid = getOwnerUidForAccount(accountId);
    const ref = getRefForUid(ownerUid);
    await ref.collection('accounts').doc(accountId).delete();
    const contentSnap = await ref.collection('contents').where('accountId', '==', accountId).get();
    const batch = window.firebaseDb.batch();
    contentSnap.docs.forEach(doc => batch.delete(doc.ref));
    await batch.commit();
    if (activeAccountId === accountId) setActiveAccountId(null);
  };

  const editAccount = async (accountId, updatedFields) => {
    const ownerUid = getOwnerUidForAccount(accountId);
    const ref = getRefForUid(ownerUid).collection('accounts').doc(accountId);
    await ref.update(updatedFields);
    // Update local state immediately for instant UI feedback
    setOwnAccounts(prev => prev.map(a => a.id === accountId ? { ...a, ...updatedFields } : a));
    setSharedAccounts(prev => prev.map(a => a.id === accountId ? { ...a, ...updatedFields } : a));
  };

  // ── Platform Actions (Firestore) ──
  const addPlatform = async (accountId, platformData) => {
    const ownerUid = getOwnerUidForAccount(accountId);
    const ref = getRefForUid(ownerUid).collection('accounts').doc(accountId);
    const snap = await ref.get();
    if (snap.exists) {
      await ref.update({ platforms: [...(snap.data().platforms || []), { id: "p_" + Date.now(), ...platformData }] });
    }
  };

  const removePlatform = async (accountId, platformId) => {
    const ownerUid = getOwnerUidForAccount(accountId);
    const ref = getRefForUid(ownerUid).collection('accounts').doc(accountId);
    const snap = await ref.get();
    if (snap.exists) {
      await ref.update({ platforms: (snap.data().platforms || []).filter(p => p.id !== platformId) });
    }
  };

  // ── Content Actions (Firestore) ──
  const addContent = async (contentData) => {
    const ownerUid = getOwnerUidForAccount(activeAccountId);
    await getRefForUid(ownerUid).collection('contents').add({ accountId: activeAccountId, ...contentData });
  };

  const updateContent = async (contentId, updatedData) => {
    const ownerUid = getOwnerUidForAccount(activeAccountId);
    await getRefForUid(ownerUid).collection('contents').doc(contentId).update(updatedData);
  };

  const deleteContent = async (contentId) => {
    const ownerUid = getOwnerUidForAccount(activeAccountId);
    await getRefForUid(ownerUid).collection('contents').doc(contentId).delete();
  };

  // ── Collaborator Actions (Firestore) ──
  const addCollaborator = async (accountId, email, role) => {
    const cleanEmail = (email || "").toLowerCase().trim();
    if (!cleanEmail) return;
    const ownerUid = getOwnerUidForAccount(accountId);
    const ref = getRefForUid(ownerUid).collection('accounts').doc(accountId);
    const snap = await ref.get();
    if (!snap.exists) return;
    const current = snap.data();
    const collabs = current.collaborators || [];
    if (collabs.some(c => (c.email || "").toLowerCase().trim() === cleanEmail)) {
      alert("This person is already a collaborator.");
      return;
    }
    await ref.update({ collaborators: [...collabs, { email: cleanEmail, role, joinedAt: new Date().toISOString().split("T")[0] }] });

    const emailKey = cleanEmail.replace(/\./g, '__dot__');
    const indexRef = window.firebaseDb.collection('collaboratorIndex').doc(emailKey);
    const indexDoc = await indexRef.get();
    const existingVaults = indexDoc.exists ? (indexDoc.data().vaults || []) : [];
    if (!existingVaults.some(v => v.accountId === accountId)) {
      await indexRef.set({ vaults: [...existingVaults, { ownerUid, accountId, role, shareToken: current.shareToken, accountName: current.name }] }, { merge: true });
    }
    alert(`✅ Access granted! ${cleanEmail} can now view and edit this vault in real time.`);
  };

  const updateCollaboratorRole = async (accountId, email, newRole) => {
    const cleanEmail = (email || "").toLowerCase().trim();
    const ownerUid = getOwnerUidForAccount(accountId);
    const ref = getRefForUid(ownerUid).collection('accounts').doc(accountId);
    const snap = await ref.get();
    if (snap.exists) {
      await ref.update({ collaborators: (snap.data().collaborators || []).map(c => (c.email || "").toLowerCase().trim() === cleanEmail ? { ...c, role: newRole } : c) });
    }
  };

  const removeCollaborator = async (accountId, email) => {
    const cleanEmail = (email || "").toLowerCase().trim();
    const ownerUid = getOwnerUidForAccount(accountId);
    const ref = getRefForUid(ownerUid).collection('accounts').doc(accountId);
    const snap = await ref.get();
    if (snap.exists) {
      await ref.update({ collaborators: (snap.data().collaborators || []).filter(c => (c.email || "").toLowerCase().trim() !== cleanEmail) });
    }
    const emailKey = cleanEmail.replace(/\./g, '__dot__');
    const indexRef = window.firebaseDb.collection('collaboratorIndex').doc(emailKey);
    const indexDoc = await indexRef.get();
    if (indexDoc.exists) {
      const remaining = (indexDoc.data().vaults || []).filter(v => v.accountId !== accountId);
      await indexRef.set({ vaults: remaining }, { merge: true });
    }
  };

  // ── Subject Photo Action ──
  const updateSubjectPhoto = async (subjectName, photoData) => {
    if (!activeAccount) return;
    const ownerUid = getOwnerUidForAccount(activeAccount.id);
    const ref = getRefForUid(ownerUid).collection('accounts').doc(activeAccount.id);

    const currentPhotos = activeAccount.subjectPhotos || {};
    const updatedPhotos = { ...currentPhotos };

    if (photoData) {
      updatedPhotos[subjectName] = photoData;
    } else {
      delete updatedPhotos[subjectName];
    }

    // Update local state immediately so card previews change instantly
    setOwnAccounts(prev => prev.map(a => a.id === activeAccount.id ? { ...a, subjectPhotos: updatedPhotos } : a));
    setSharedAccounts(prev => prev.map(a => a.id === activeAccount.id ? { ...a, subjectPhotos: updatedPhotos } : a));

    // Save map to Firestore
    await ref.update({ subjectPhotos: updatedPhotos });
  };

  return (
    <VaultContext.Provider value={{
      accounts, activeAccountId, setActiveAccountId, activeAccount,
      activePage, setActivePage, contents, activeUserRole, canEdit, isOwner,
      dataLoading, addAccount, removeAccount, editAccount, addPlatform, removePlatform,
      addContent, updateContent, deleteContent,
      addCollaborator, updateCollaboratorRole, removeCollaborator,
      updateSubjectPhoto, getUserRole
    }}>
      {children}
    </VaultContext.Provider>
  );
}


// 3. COMPONENTS
// LoginPage Component — Premium Sign-In
// LoginPage Component — Premium Sign-In with Demo Switcher
function LoginPage() {
  const { loginWithGoogle } = React.useContext(AuthContext);
  const [emailInput, setEmailInput] = React.useState("");
  const [nameInput,  setNameInput]  = React.useState("");

  const handleCustomLogin = (e) => {
    e.preventDefault();
    if (!emailInput.trim()) return;
    loginWithGoogle(emailInput.trim(), nameInput.trim() || emailInput.split("@")[0]);
  };

  return (
    <div className="login-wrapper">
      <div className="login-card glass-card" style={{ padding: "2.5rem 2rem" }}>

        {/* Brand Icon */}
        <div className="login-brand-icon">
          <i data-lucide="layers" style={{ width: "28px", height: "28px", color: "#fff" }}></i>
        </div>

        {/* Title */}
        <h1 className="login-title">
          Socio<span style={{
            background: "var(--gradient-primary)",
            WebkitBackgroundClip: "text",
            backgroundClip: "text",
            WebkitTextFillColor: "transparent"
          }}>Vault</span>
        </h1>
        <p className="login-subtitle">
          Your premium multi-account social media command centre —<br />
          content vault, analytics, hashtag studio &amp; reports.
        </p>

        {/* Google Sign In */}
        <button
          className="btn btn-google"
          style={{ display: "flex", alignItems: "center", justifyContent: "center" }}
          onClick={() => loginWithGoogle("alex.creator@gmail.com", "Alex Rivera")}
        >
          <svg width="18" height="18" viewBox="0 0 24 24" style={{ flexShrink: 0 }}>
            <path fill="#4285F4" d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.82-2.4 3.68v3.05h3.88c2.27-2.09 3.665-5.17 3.665-9.17z"/>
            <path fill="#34A853" d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.11-6.72-4.96H1.24v3.15C3.26 21.3 7.37 24 12 24z"/>
            <path fill="#FBBC05" d="M5.28 14.24c-.25-.72-.38-1.49-.38-2.24s.13-1.52.38-2.24V6.61H1.24C.45 8.18 0 10.03 0 12s.45 3.82 1.24 5.39l4.04-3.15z"/>
            <path fill="#EA4335" d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.37 0 3.26 2.7 1.24 6.61l4.04 3.15c.95-2.85 3.6-4.96 6.72-4.96z"/>
          </svg>
          Continue with Google
        </button>

        {/* Divider */}
        <div className="login-divider">or sign in with email</div>

        {/* Email Form */}
        <form onSubmit={handleCustomLogin}>
          <div className="form-group" style={{ marginBottom: "1rem" }}>
            <label className="form-label">Full Name</label>
            <input
              type="text"
              className="form-input"
              placeholder="Alex Rivera"
              value={nameInput}
              onChange={e => setNameInput(e.target.value)}
            />
          </div>
          <div className="form-group" style={{ marginBottom: "1.25rem" }}>
            <label className="form-label">Email Address</label>
            <input
              type="email"
              className="form-input"
              placeholder="alex@example.com"
              required
              value={emailInput}
              onChange={e => setEmailInput(e.target.value)}
            />
          </div>
          <button type="submit" className="btn btn-primary" style={{ width: "100%", minHeight: "46px" }}>
            <i data-lucide="log-in" style={{ width: "16px", height: "16px" }}></i>
            Sign In / Register
          </button>
        </form>

        {/* Demo Quick-Login */}
        <div className="demo-section">
          <p className="demo-section-label">⚡ Demo Quick Sign-In</p>
          <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>

            <button
              onClick={() => loginWithGoogle("alex.creator@gmail.com", "Alex Rivera")}
              className="btn btn-secondary"
              style={{ justifyContent: "flex-start", gap: "0.65rem", fontSize: "0.84rem" }}
            >
              <span style={{
                width: "24px", height: "24px", borderRadius: "6px",
                background: "linear-gradient(135deg, #10B981, #06B6D4)",
                display: "inline-flex", alignItems: "center", justifyContent: "center",
                fontSize: "0.72rem", fontWeight: 800, color: "#fff", flexShrink: 0
              }}>O</span>
              <span><strong>Alex Rivera</strong> — Vault Owner</span>
            </button>

            <button
              onClick={() => loginWithGoogle("sarah.editor@gmail.com", "Sarah Jenkins")}
              className="btn btn-secondary"
              style={{ justifyContent: "flex-start", gap: "0.65rem", fontSize: "0.84rem" }}
            >
              <span style={{
                width: "24px", height: "24px", borderRadius: "6px",
                background: "linear-gradient(135deg, #06B6D4, #6366F1)",
                display: "inline-flex", alignItems: "center", justifyContent: "center",
                fontSize: "0.72rem", fontWeight: 800, color: "#fff", flexShrink: 0
              }}>E</span>
              <span><strong>Sarah Jenkins</strong> — Collaborator Editor</span>
            </button>

            <button
              onClick={() => loginWithGoogle("sponsor.client@gmail.com", "Sponsor Client")}
              className="btn btn-secondary"
              style={{ justifyContent: "flex-start", gap: "0.65rem", fontSize: "0.84rem" }}
            >
              <span style={{
                width: "24px", height: "24px", borderRadius: "6px",
                background: "linear-gradient(135deg, #F59E0B, #F97316)",
                display: "inline-flex", alignItems: "center", justifyContent: "center",
                fontSize: "0.72rem", fontWeight: 800, color: "#fff", flexShrink: 0
              }}>V</span>
              <span><strong>Sponsor Client</strong> — Read-Only Viewer</span>
            </button>

          </div>
        </div>

      </div>
    </div>
  );
};


// Navbar Component — Premium Top Navigation
// Navbar Component — Premium Top Navigation & Account Switcher
function Navbar() {
  const { user, logout } = React.useContext(AuthContext);
  const {
    accounts,
    activeAccountId,
    setActiveAccountId,
    activeAccount,
    activePage,
    setActivePage,
    activeUserRole,
    getUserRole
  } = React.useContext(VaultContext);

  const navItems = [
    { id: "account-center",      label: "Overview",         icon: "layout-grid"  },
    { id: "add-content",         label: "Add Content",      icon: "plus-circle"  },
    { id: "content-table",       label: "Content Table",    icon: "table-2"      },
    { id: "timeframe-analytics", label: "Timeframe",        icon: "line-chart"   },
    { id: "hashtag-analytics",   label: "Hashtag Studio",   icon: "hash"         },
    { id: "subject-analytics",   label: "Subjects",         icon: "users"        },
    { id: "report-summary",      label: "Report",           icon: "file-bar-chart"},
    { id: "collaborators",       label: "Collaborators",    icon: "share-2"      }
  ];

  const accessibleAccounts = accounts.filter(acc =>
    user && (
      acc.ownerEmail === user.email ||
      acc.collaborators.some(c => c.email === user.email)
    )
  );

  const roleBadgeClass =
    activeUserRole === 'owner'  ? 'badge-uploaded' :
    activeUserRole === 'editor' ? 'badge-scheduled' :
                                  'badge-privated';

  return (
    <nav className="navbar">
      {/* ── Primary Row ── */}
      <div className="navbar-container">

        {/* Left: Brand + Account Switcher */}
        <div style={{ display: "flex", alignItems: "center", gap: "0.9rem", minWidth: 0 }}>

          {/* Brand Logo */}
          <div
            className="navbar-brand"
            onClick={() => { setActiveAccountId(null); setActivePage("account-vault"); }}
            title="Return to Account Vault"
          >
            <div className="brand-icon">
              <i data-lucide="layers" style={{ width: "16px", height: "16px", color: "#fff" }}></i>
            </div>
            <span>SocioVault</span>
          </div>

          {/* Account Switcher */}
          {activeAccount && (
            <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", minWidth: 0 }}>
              <span style={{ color: "var(--border-hover)", fontSize: "1rem", opacity: 0.5 }}>/</span>

              <select
                className="form-select"
                style={{
                  padding:    "0.35rem 2rem 0.35rem 0.7rem",
                  fontSize:   "0.82rem",
                  fontWeight: 600,
                  width:      "auto",
                  minHeight:  "unset",
                  background: "rgba(22, 30, 46, 0.9)",
                  border:     "1px solid var(--border-color)",
                  maxWidth:   "200px"
                }}
                value={activeAccountId || ""}
                onChange={e => {
                  if (e.target.value === "VAULT_HUB") setActiveAccountId(null);
                  else setActiveAccountId(e.target.value);
                }}
              >
                <option value="VAULT_HUB">← Vault Hub</option>
                {accessibleAccounts.map(acc => (
                  <option key={acc.id} value={acc.id}>
                    {acc.name} ({getUserRole(acc)})
                  </option>
                ))}
              </select>

              <span className={`badge ${roleBadgeClass}`}
                style={{ fontSize: "0.65rem" }}>
                {activeUserRole}
              </span>
            </div>
          )}
        </div>

        {/* Right: User Menu */}
        <div className="user-menu">
          {user && (
            <>
              <div style={{ textAlign: "right", display: "none" }}>
                <div style={{ fontSize: "0.82rem", fontWeight: 600, color: "var(--text-main)" }}>
                  {user.displayName}
                </div>
                <div style={{ fontSize: "0.72rem", color: "var(--text-muted)" }}>
                  {user.email}
                </div>
              </div>
              <img
                src={user.photoURL}
                alt={user.displayName}
                title={`${user.displayName} · ${user.email}`}
                style={{
                  width:        "34px",
                  height:       "34px",
                  borderRadius: "50%",
                  border:       "2px solid var(--border-color)",
                  objectFit:    "cover",
                  transition:   "border-color 0.2s"
                }}
                onMouseOver={e => e.target.style.borderColor = "var(--accent-primary)"}
                onMouseOut={e  => e.target.style.borderColor = "var(--border-color)"}
              />
              <button
                onClick={logout}
                className="btn btn-secondary btn-icon"
                title={`Sign out (${user.email})`}
                style={{ minHeight: "36px", minWidth: "36px", padding: "0.4rem" }}
              >
                <i data-lucide="log-out" style={{ width: "15px", height: "15px" }}></i>
              </button>
            </>
          )}
        </div>
      </div>

      {/* ── Navigation Row (only inside an account) ── */}
      {activeAccount && (
        <div className="navbar-nav-row">
          <div className="navbar-container">
            <div className="navbar-nav">
              {navItems.map(item => (
                <div
                  key={item.id}
                  className={`nav-link ${activePage === item.id ? 'active' : ''}`}
                  onClick={() => setActivePage(item.id)}
                >
                  <i data-lucide={item.icon} style={{ width: "13px", height: "13px" }}></i>
                  {item.label}
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};
function AccountCenterPage() {
  const { activeAccount, addPlatform, removePlatform, contents, canEdit, setActivePage } = React.useContext(VaultContext);

  const [showAddModal, setShowAddModal] = React.useState(false);
  const [platformName, setPlatformName] = React.useState("TikTok");
  const [handle, setHandle] = React.useState("");
  const [followers, setFollowers] = React.useState("");
  const [url, setUrl] = React.useState("");

  if (!activeAccount) return <div className="page-container"><p>No active account selected.</p></div>;

  const accountContents = contents.filter(c => c.accountId === activeAccount.id);
  const totalViews = accountContents.reduce((sum, c) => sum + (c.impressions || 0), 0);
  const totalFollowers = activeAccount.platforms.reduce((sum, p) => sum + (Number(p.followers) || 0), 0);

  // Calculate TikTok monthly impression trend for health status
  const getHealthStatus = React.useMemo(() => {
    const now = new Date();
    const currentMonth = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}`;
    
    // Get TikTok impressions from current month only
    const tiktokMonthlyImpressions = accountContents
      .filter(c => c.uploadDate && c.uploadDate.startsWith(currentMonth) && c.platform === "TikTok")
      .reduce((sum, c) => sum + (c.impressions || 0), 0);

    // Determine status based on TikTok monthly impressions
    if (tiktokMonthlyImpressions === 0) {
      return { status: "red", label: "No TikTok Activity", color: "#F43F5E" };
    } else if (tiktokMonthlyImpressions > 100) {
      return { status: "green", label: "Healthy", color: "#10B981" };
    } else {
      return { status: "yellow", label: "Low TikTok Activity", color: "#F59E0B" };
    }
  }, [accountContents]);

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
          <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
            <h1 className="page-title">{activeAccount.name} - Account Center</h1>
            <div
              style={{
                width: "16px",
                height: "16px",
                borderRadius: "50%",
                backgroundColor: getHealthStatus.color,
                boxShadow: `0 0 12px ${getHealthStatus.color}`,
                border: `2px solid ${getHealthStatus.color}`,
                display: "flex",
                alignItems: "center",
                justifyContent: "center"
              }}
              title={`Health Status: ${getHealthStatus.label}`}
            />
          </div>
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

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))", gap: "1rem" }}>
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
              {p.url && p.url !== "#" && (
                <div style={{
                  display: "flex", alignItems: "center", gap: "0.4rem",
                  fontSize: "0.78rem", color: "var(--text-muted)",
                  background: "rgba(255,255,255,0.04)", borderRadius: "8px",
                  padding: "0.4rem 0.6rem", marginBottom: "0.75rem",
                  overflow: "hidden"
                }}>
                  <i data-lucide="link" style={{ width: "12px", height: "12px", flexShrink: 0, color: "var(--accent-cyan)" }}></i>
                  <span style={{ overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{p.url}</span>
                </div>
              )}
            </div>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", paddingTop: "0.85rem", borderTop: "1px solid var(--border-color)", fontSize: "0.85rem" }}>
              <div>Followers: <strong style={{ color: "#fff" }}>{p.followers > 1000 ? (p.followers / 1000).toFixed(1) + "k" : p.followers}</strong></div>
              {p.url && p.url !== "#" ? (
                <a
                  href={p.url.startsWith("http") ? p.url : "https://" + p.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: "flex", alignItems: "center", gap: "0.35rem",
                    color: "var(--accent-cyan)", fontSize: "0.82rem", fontWeight: 600,
                    textDecoration: "none"
                  }}
                >
                  <i data-lucide="external-link" style={{ width: "13px", height: "13px" }}></i>
                  View Channel
                </a>
              ) : (
                <span style={{ color: "var(--text-subtle)", fontSize: "0.82rem", display: "flex", alignItems: "center", gap: "0.35rem" }}>
                  <i data-lucide="link-2-off" style={{ width: "13px", height: "13px" }}></i>
                  No link added
                </span>
              )}
            </div>
          </div>
        ))}
      </div>

      {showAddModal && (
        <div className="modal-overlay" onClick={() => setShowAddModal(false)}>
          <div className="modal-content" onClick={e => e.stopPropagation()}>
            <div className="modal-header">
              <h2 className="modal-title">Link Platform to {activeAccount.name}</h2>
              <button type="button" onClick={() => setShowAddModal(false)} className="btn btn-secondary btn-icon" style={{ cursor: "pointer", width: "32px", height: "32px", display: "flex", alignItems: "center", justifyContent: "center" }} title="Close">
                <span style={{ fontSize: "1.2rem", lineHeight: 1, fontWeight: "bold" }}>✕</span>
              </button>
            </div>
            <form onSubmit={handleAddPlatform}>
              <div className="form-group">
                <label className="form-label">Platform</label>
                <select className="form-select" value={platformName} onChange={e => setPlatformName(e.target.value)}>
                  <option value="TikTok">TikTok</option>
                  <option value="Instagram">Instagram</option>
                  <option value="Facebook">Facebook</option>
                  <option value="X (Twitter)">X (Twitter)</option>
                  <option value="YouTube">YouTube</option>
                  <option value="Threads">Threads</option>
                </select>
              </div>
              <div className="form-group">
                <label className="form-label">Handle</label>
                <input type="text" className="form-input" placeholder="@handle" required value={handle} onChange={e => setHandle(e.target.value)} />
              </div>
              <div className="form-group">
                <label className="form-label">Followers Count</label>
                <input type="number" className="form-input" placeholder="10000" value={followers} onChange={e => setFollowers(e.target.value)} />
              </div>
              <div className="form-group">
                <label className="form-label">Channel / Profile URL</label>
                <input
                  type="url"
                  className="form-input"
                  placeholder="https://instagram.com/yourhandle"
                  value={url}
                  onChange={e => setUrl(e.target.value)}
                />
                <p style={{ fontSize: "0.78rem", color: "var(--text-muted)", marginTop: "0.35rem" }}>
                  Paste the full link to your profile/channel so "View Channel" works.
                </p>
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
  const [uploadTime, setUploadTime] = React.useState(() => {
    const d = new Date();
    return `${String(d.getHours()).padStart(2, "0")}:${String(d.getMinutes()).padStart(2, "0")}`;
  });
  const [platform, setPlatform] = React.useState("Instagram");
  const [contentType, setContentType] = React.useState("");
  const [caption, setCaption] = React.useState("");
  const [hashtagsInput, setHashtagsInput] = React.useState("");
  const [subjectInput, setSubjectInput] = React.useState("");
  const [subjectsList, setSubjectsList] = React.useState([]);
  const [impressions, setImpressions] = React.useState("");
  const [reach, setReach] = React.useState("");
  const [likes, setLikes] = React.useState("");
  const [comments, setComments] = React.useState("");
  const [shares, setShares] = React.useState("");
  const [saves, setSaves] = React.useState("");
  const [status, setStatus] = React.useState("Uploaded");

  const availablePlatforms = React.useMemo(() => {
    const defaults = ["Instagram", "YouTube", "TikTok", "X (Twitter)", "Facebook", "Threads", "LinkedIn"];
    const connected = (activeAccount?.platforms || []).map(p => p.name);
    return Array.from(new Set([...defaults, ...connected]));
  }, [activeAccount]);

  if (!activeAccount) return <div className="page-container"><p>No active account selected.</p></div>;

  const handleAddSubject = () => {
    if (!subjectInput.trim()) return;
    const clean = subjectInput.trim();
    if (!subjectsList.includes(clean)) setSubjectsList([...subjectsList, clean]);
    setSubjectInput("");
  };

  const handleRemoveSubject = (name) => {
    setSubjectsList(subjectsList.filter(s => s !== name));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!canEdit) return;

    const hashtagsArray = hashtagsInput.split(/[\s,]+/).map(t => t.trim()).filter(Boolean).map(t => t.startsWith("#") ? t : "#" + t);

    addContent({
      uploadDate,
      uploadTime: uploadTime || "12:00",
      platform,
      contentType,
      caption,
      hashtags: hashtagsArray,
      subjects: subjectsList,
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
        <div>
          <h1 className="page-title">Add Content Log</h1>
          <p className="page-subtitle">Input content performance metrics, subjects featured, and hashtags for {activeAccount.name}</p>
        </div>
      </div>
      <div className="glass-card" style={{ maxWidth: "800px", margin: "0 auto" }}>
        <form onSubmit={handleSubmit}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "1.25rem" }}>
            <div className="form-group">
              <label className="form-label">Upload Date</label>
              <input type="date" className="form-input" required value={uploadDate} onChange={e => setUploadDate(e.target.value)} />
            </div>
            <div className="form-group">
              <label className="form-label">Upload Time</label>
              <input type="time" className="form-input" value={uploadTime} onChange={e => setUploadTime(e.target.value)} />
            </div>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "1.25rem" }}>
            <div className="form-group">
              <label className="form-label">Platform</label>
              <select className="form-select" value={platform} onChange={e => setPlatform(e.target.value)}>
                {availablePlatforms.map(pName => (
                  <option key={pName} value={pName}>{pName}</option>
                ))}
              </select>
            </div>
            <div className="form-group">
              <label className="form-label">Content Type</label>
              <input
                type="text"
                className="form-input"
                placeholder="e.g. Reels, Carousel, Vlog..."
                value={contentType}
                onChange={e => setContentType(e.target.value)}
              />
            </div>
          </div>

          <div className="form-group">
            <label className="form-label">Caption / Post Text</label>
            <textarea className="form-textarea" rows="3" placeholder="Enter post caption or video title..." required value={caption} onChange={e => setCaption(e.target.value)}></textarea>
          </div>

          <div className="form-group">
            <label className="form-label">Hashtags (space or comma separated)</label>
            <input type="text" className="form-input" placeholder="e.g. #tech #gadgets" value={hashtagsInput} onChange={e => setHashtagsInput(e.target.value)} />
          </div>

          <div className="form-group">
            <label className="form-label">Subjects Featured (Multiple People)</label>
            <div style={{ display: "flex", gap: "0.5rem", marginBottom: "0.5rem" }}>
              <input 
                type="text" 
                className="form-input" 
                placeholder="Type person's name (e.g. Sarah)..." 
                value={subjectInput} 
                onChange={e => setSubjectInput(e.target.value)}
                onKeyDown={e => {
                  if (e.key === "Enter") {
                    e.preventDefault();
                    handleAddSubject();
                  }
                }}
              />
              <button type="button" onClick={handleAddSubject} className="btn btn-secondary">Add Person</button>
            </div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem" }}>
              {subjectsList.map(name => (
                <span key={name} className="chip chip-subject" style={{ display: "inline-flex", alignItems: "center", gap: "0.3rem" }}>
                  👤 {name}
                  <button 
                    type="button" 
                    onClick={() => handleRemoveSubject(name)} 
                    style={{ background: "none", border: "none", color: "inherit", cursor: "pointer", padding: "0 2px", fontWeight: "bold", fontSize: "0.85rem", lineHeight: 1 }}
                    title="Remove subject"
                  >
                    ✕
                  </button>
                </span>
              ))}
            </div>
          </div>

          <hr style={{ borderColor: "var(--border-color)", margin: "1.5rem 0" }} />

          <h3 style={{ fontSize: "1.05rem", fontWeight: 700, marginBottom: "1rem" }}>Content Performance Metrics</h3>

          <div className="form-grid-metrics" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))", gap: "1rem" }}>
            <div className="form-group"><label className="form-label">Impressions</label><input type="number" className="form-input" min="0" placeholder="0" value={impressions} onChange={e => setImpressions(e.target.value)} /></div>
            <div className="form-group"><label className="form-label">Reach</label><input type="number" className="form-input" min="0" placeholder="0" value={reach} onChange={e => setReach(e.target.value)} /></div>
            <div className="form-group"><label className="form-label">Likes</label><input type="number" className="form-input" min="0" placeholder="0" value={likes} onChange={e => setLikes(e.target.value)} /></div>
            <div className="form-group"><label className="form-label">Comments</label><input type="number" className="form-input" min="0" placeholder="0" value={comments} onChange={e => setComments(e.target.value)} /></div>
            <div className="form-group"><label className="form-label">Shares</label><input type="number" className="form-input" min="0" placeholder="0" value={shares} onChange={e => setShares(e.target.value)} /></div>
            <div className="form-group"><label className="form-label">Saves</label><input type="number" className="form-input" min="0" placeholder="0" value={saves} onChange={e => setSaves(e.target.value)} /></div>
          </div>

          <div className="form-group" style={{ marginTop: "1rem" }}>
            <label className="form-label">Post Status</label>
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
  const [sortBy, setSortBy] = React.useState("date-desc");
  const [editingContent, setEditingContent] = React.useState(null);

  const [currentPage, setCurrentPage] = React.useState(1);
  const itemsPerPage = 10;

  const availablePlatforms = React.useMemo(() => {
    const defaults = ["Instagram", "YouTube", "TikTok", "X (Twitter)", "Facebook", "Threads", "LinkedIn"];
    const connected = (activeAccount?.platforms || []).map(p => p.name);
    return Array.from(new Set([...defaults, ...connected]));
  }, [activeAccount]);

  if (!activeAccount) return <div className="page-container"><p>No active account selected.</p></div>;

  const accountContents = contents.filter(c => c.accountId === activeAccount.id);

  React.useEffect(() => {
    setCurrentPage(1);
  }, [searchTerm, platformFilter, statusFilter, sortBy]);

  const filteredContents = React.useMemo(() => {
    return accountContents.filter(item => {
      const matchSearch = item.caption.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.hashtags.some(h => h.toLowerCase().includes(searchTerm.toLowerCase())) ||
        item.subjects.some(s => s.toLowerCase().includes(searchTerm.toLowerCase()));
      const matchPlatform = platformFilter === "ALL" || item.platform === platformFilter;
      const matchStatus = statusFilter === "ALL" || item.status === statusFilter;
      return matchSearch && matchPlatform && matchStatus;
    }).sort((a, b) => {
      if (sortBy === "date-desc") {
        const timeA = `${a.uploadDate || ''}T${a.uploadTime || '00:00'}`;
        const timeB = `${b.uploadDate || ''}T${b.uploadTime || '00:00'}`;
        return timeB.localeCompare(timeA);
      }
      if (sortBy === "date-asc") {
        const timeA = `${a.uploadDate || ''}T${a.uploadTime || '00:00'}`;
        const timeB = `${b.uploadDate || ''}T${b.uploadTime || '00:00'}`;
        return timeA.localeCompare(timeB);
      }
      if (sortBy === "impressions-desc") {
        return (b.impressions || 0) - (a.impressions || 0);
      }
      if (sortBy === "reach-desc") {
        return (b.reach || 0) - (a.reach || 0);
      }
      if (sortBy === "er-desc") {
        const erA = a.reach > 0 ? (((a.likes + a.comments + a.shares + a.saves) / a.reach) * 100) : 0;
        const erB = b.reach > 0 ? (((b.likes + b.comments + b.shares + b.saves) / b.reach) * 100) : 0;
        return erB - erA;
      }
      return 0;
    });
  }, [accountContents, searchTerm, platformFilter, statusFilter, sortBy]);

  const totalPages = Math.ceil(filteredContents.length / itemsPerPage) || 1;
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedContents = filteredContents.slice(startIndex, startIndex + itemsPerPage);

  const handleOpenEdit = (item) => {
    setEditingContent({
      id: item.id,
      uploadDate: item.uploadDate || new Date().toISOString().split("T")[0],
      uploadTime: item.uploadTime || "12:00",
      platform: item.platform || "Instagram",
      contentType: item.contentType || "",
      caption: item.caption || "",
      hashtagsInput: (item.hashtags || []).join(" "),
      subjectInput: "",
      subjectsList: [...(item.subjects || [])],
      impressions: item.impressions !== undefined ? String(item.impressions) : "",
      reach: item.reach !== undefined ? String(item.reach) : "",
      likes: item.likes !== undefined ? String(item.likes) : "",
      comments: item.comments !== undefined ? String(item.comments) : "",
      shares: item.shares !== undefined ? String(item.shares) : "",
      saves: item.saves !== undefined ? String(item.saves) : "",
      status: item.status || "Uploaded"
    });
  };

  const handleAddEditSubject = () => {
    if (!editingContent || !editingContent.subjectInput.trim()) return;
    const clean = editingContent.subjectInput.trim();
    if (!editingContent.subjectsList.includes(clean)) {
      setEditingContent({
        ...editingContent,
        subjectsList: [...editingContent.subjectsList, clean],
        subjectInput: ""
      });
    } else {
      setEditingContent({ ...editingContent, subjectInput: "" });
    }
  };

  const handleRemoveEditSubject = (name) => {
    if (!editingContent) return;
    setEditingContent({
      ...editingContent,
      subjectsList: editingContent.subjectsList.filter(s => s !== name)
    });
  };

  const handleSaveEdit = (e) => {
    e.preventDefault();
    if (!editingContent) return;

    const hashtagsArray = editingContent.hashtagsInput
      .split(/[\s,]+/)
      .map(t => t.trim())
      .filter(Boolean)
      .map(t => t.startsWith("#") ? t : "#" + t);

    updateContent(editingContent.id, {
      uploadDate: editingContent.uploadDate,
      uploadTime: editingContent.uploadTime || "12:00",
      platform: editingContent.platform,
      contentType: editingContent.contentType,
      caption: editingContent.caption,
      hashtags: hashtagsArray,
      subjects: editingContent.subjectsList,
      impressions: Number(editingContent.impressions) || 0,
      reach: Number(editingContent.reach) || 0,
      likes: Number(editingContent.likes) || 0,
      comments: Number(editingContent.comments) || 0,
      shares: Number(editingContent.shares) || 0,
      saves: Number(editingContent.saves) || 0,
      status: editingContent.status
    });

    setEditingContent(null);
  };

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
        <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap", alignItems: "center" }}>
          <input type="text" className="form-input" placeholder="Search caption, hashtag, subject..." value={searchTerm} onChange={e => setSearchTerm(e.target.value)} style={{ flex: 1 }} />
          
          <select className="form-select" value={sortBy} onChange={e => setSortBy(e.target.value)} style={{ width: "auto" }}>
            <option value="date-desc">Sort: Date & Time (Newest First)</option>
            <option value="date-asc">Sort: Date & Time (Oldest First)</option>
            <option value="impressions-desc">Sort: Impressions / Views</option>
            <option value="reach-desc">Sort: Reach</option>
            <option value="er-desc">Sort: Engagement Rate %</option>
          </select>

          <select className="form-select" value={platformFilter} onChange={e => setPlatformFilter(e.target.value)} style={{ width: "auto" }}>
            <option value="ALL">All Platforms</option>
            {availablePlatforms.map(pName => (
              <option key={pName} value={pName}>{pName}</option>
            ))}
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
              <th>Upload Date & Time</th>
              <th>Platform</th>
              <th>Type</th>
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
                  <td>
                    <div style={{ fontWeight: 600 }}>{item.uploadDate}</div>
                    {item.uploadTime && <div style={{ fontSize: "0.78rem", color: "var(--text-muted)" }}>at {item.uploadTime}</div>}
                  </td>
                  <td><span className="chip">{item.platform}</span></td>
                  <td><span className="chip" style={{ fontSize: "0.75rem", background: "rgba(255,255,255,0.06)" }}>{item.contentType || "Feed Post / Image"}</span></td>
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
                      <button onClick={() => handleOpenEdit(item)} className="btn btn-secondary btn-icon" title="Edit Content"><i data-lucide="edit-2" style={{ width: "14px", height: "14px" }}></i></button>
                      <button onClick={() => confirm("Delete content?") && deleteContent(item.id)} className="btn btn-danger btn-icon" style={{ marginLeft: "0.75rem" }} title="Delete Content"><i data-lucide="trash-2" style={{ width: "14px", height: "14px" }}></i></button>
                    </td>
                  )}
                </tr>
              );
            })}

            {filteredContents.length === 0 && (
              <tr>
                <td colSpan="15" style={{ textAlign: "center", padding: "2.5rem", color: "var(--text-muted)" }}>
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
          <div className="modal-content" style={{ maxWidth: "800px", width: "90%", maxHeight: "90vh", overflowY: "auto" }} onClick={e => e.stopPropagation()}>
            <div className="modal-header" style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "1.25rem" }}>
              <h2 className="modal-title" style={{ margin: 0, fontSize: "1.35rem", fontWeight: 700 }}>Edit Content Entry</h2>
              <button 
                type="button" 
                onClick={() => setEditingContent(null)} 
                className="btn btn-secondary btn-icon"
                style={{ cursor: "pointer", width: "32px", height: "32px", display: "flex", alignItems: "center", justifyContent: "center" }}
                title="Close"
              >
                <span style={{ fontSize: "1.2rem", lineHeight: 1, fontWeight: "bold" }}>✕</span>
              </button>
            </div>

            <form onSubmit={handleSaveEdit}>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr 1fr", gap: "1rem", marginBottom: "1rem" }}>
                <div className="form-group">
                  <label className="form-label">Upload Date</label>
                  <input 
                    type="date" 
                    className="form-input" 
                    required 
                    value={editingContent.uploadDate} 
                    onChange={e => setEditingContent({ ...editingContent, uploadDate: e.target.value })} 
                  />
                </div>
                <div className="form-group">
                  <label className="form-label">Upload Time</label>
                  <input 
                    type="time" 
                    className="form-input" 
                    value={editingContent.uploadTime} 
                    onChange={e => setEditingContent({ ...editingContent, uploadTime: e.target.value })} 
                  />
                </div>
                <div className="form-group">
                  <label className="form-label">Platform</label>
                  <select 
                    className="form-select" 
                    value={editingContent.platform} 
                    onChange={e => setEditingContent({ ...editingContent, platform: e.target.value })}
                  >
                    {availablePlatforms.map(pName => (
                      <option key={pName} value={pName}>{pName}</option>
                    ))}
                  </select>
                </div>
                <div className="form-group">
                  <label className="form-label">Content Type</label>
                  <input
                    type="text"
                    className="form-input"
                    placeholder="e.g. Reels, Carousel, Vlog..."
                    value={editingContent.contentType}
                    onChange={e => setEditingContent({ ...editingContent, contentType: e.target.value })}
                  />
                </div>
              </div>

              <div className="form-group" style={{ marginBottom: "1rem" }}>
                <label className="form-label">Caption / Post Text</label>
                <textarea 
                  className="form-textarea" 
                  rows="3" 
                  required 
                  value={editingContent.caption} 
                  onChange={e => setEditingContent({ ...editingContent, caption: e.target.value })}
                ></textarea>
              </div>

              <div className="form-group" style={{ marginBottom: "1rem" }}>
                <label className="form-label">Hashtags (space or comma separated)</label>
                <input 
                  type="text" 
                  className="form-input" 
                  placeholder="e.g. #tech #gadgets" 
                  value={editingContent.hashtagsInput} 
                  onChange={e => setEditingContent({ ...editingContent, hashtagsInput: e.target.value })} 
                />
              </div>

              <div className="form-group" style={{ marginBottom: "1rem" }}>
                <label className="form-label">Subjects Featured (Multiple People)</label>
                <div style={{ display: "flex", gap: "0.5rem", marginBottom: "0.5rem" }}>
                  <input 
                    type="text" 
                    className="form-input" 
                    placeholder="Type person's name..." 
                    value={editingContent.subjectInput} 
                    onChange={e => setEditingContent({ ...editingContent, subjectInput: e.target.value })} 
                    onKeyDown={e => {
                      if (e.key === "Enter") {
                        e.preventDefault();
                        handleAddEditSubject();
                      }
                    }}
                  />
                  <button type="button" onClick={handleAddEditSubject} className="btn btn-secondary">Add Person</button>
                </div>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem" }}>
                  {editingContent.subjectsList.map(name => (
                    <span key={name} className="chip chip-subject" style={{ display: "inline-flex", alignItems: "center", gap: "0.3rem" }}>
                      👤 {name}
                      <button 
                        type="button" 
                        onClick={() => handleRemoveEditSubject(name)} 
                        style={{ background: "none", border: "none", color: "inherit", cursor: "pointer", padding: "0 2px", fontWeight: "bold", fontSize: "0.85rem", lineHeight: 1 }}
                        title="Remove subject"
                      >
                        ✕
                      </button>
                    </span>
                  ))}
                </div>
              </div>

              <hr style={{ borderColor: "var(--border-color)", margin: "1.25rem 0" }} />

              <h3 style={{ fontSize: "1.05rem", fontWeight: 700, marginBottom: "1rem" }}>Content Performance Metrics</h3>

              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(130px, 1fr))", gap: "0.85rem", marginBottom: "1rem" }}>
                <div className="form-group"><label className="form-label">Impressions</label><input type="number" className="form-input" min="0" value={editingContent.impressions} onChange={e => setEditingContent({ ...editingContent, impressions: e.target.value })} /></div>
                <div className="form-group"><label className="form-label">Reach</label><input type="number" className="form-input" min="0" value={editingContent.reach} onChange={e => setEditingContent({ ...editingContent, reach: e.target.value })} /></div>
                <div className="form-group"><label className="form-label">Likes</label><input type="number" className="form-input" min="0" value={editingContent.likes} onChange={e => setEditingContent({ ...editingContent, likes: e.target.value })} /></div>
                <div className="form-group"><label className="form-label">Comments</label><input type="number" className="form-input" min="0" value={editingContent.comments} onChange={e => setEditingContent({ ...editingContent, comments: e.target.value })} /></div>
                <div className="form-group"><label className="form-label">Shares</label><input type="number" className="form-input" min="0" value={editingContent.shares} onChange={e => setEditingContent({ ...editingContent, shares: e.target.value })} /></div>
                <div className="form-group"><label className="form-label">Saves</label><input type="number" className="form-input" min="0" value={editingContent.saves} onChange={e => setEditingContent({ ...editingContent, saves: e.target.value })} /></div>
              </div>

              <div className="form-group" style={{ marginBottom: "1rem" }}>
                <label className="form-label">Post Status</label>
                <select 
                  className="form-select" 
                  value={editingContent.status} 
                  onChange={e => setEditingContent({ ...editingContent, status: e.target.value })}
                >
                  <option value="Uploaded">Uploaded</option>
                  <option value="Scheduled">Scheduled</option>
                  <option value="Privated">Privated</option>
                  <option value="Deleted">Deleted</option>
                </select>
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
  try {
    // Wait for docx library to load if not already available
    let docxLib = window.docx;
    let attempts = 0;
    while (!docxLib && attempts < 10) {
      await new Promise(resolve => setTimeout(resolve, 500));
      docxLib = window.docx;
      attempts++;
    }

    if (!docxLib) {
      alert("DOCX library failed to load. Please refresh the page and try again.");
      return;
    }

    const {
      Document, Paragraph, TextRun, Table, TableRow, TableCell,
      Packer, HeadingLevel, AlignmentType, WidthType, BorderStyle
    } = docxLib;

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
        children: [new Paragraph({ children: [new TextRun({ text: String(text ?? ""), bold: true, size: 18, color: "FFFFFF" })] })]
      }))
    });

    const makeDataRow = (cells) => new TableRow({
      children: cells.map(text => new TableCell({
        borders: tableBorder,
        children: [new Paragraph({ children: [new TextRun({ text: String(text ?? ""), size: 18, color: "2D3748" })] })]
      }))
    });

    const totalImpressions = accountContents.reduce((s, c) => s + (Number(c.impressions) || 0), 0);
    const totalReach = accountContents.reduce((s, c) => s + (Number(c.reach) || 0), 0);
    const totalEngagement = accountContents.reduce((s, c) => s + (Number(c.likes) || 0) + (Number(c.comments) || 0) + (Number(c.shares) || 0) + (Number(c.saves) || 0), 0);
    const erRate = totalReach > 0 ? ((totalEngagement / totalReach) * 100).toFixed(2) : "0.00";
    const topPost = [...accountContents].sort((a, b) => (Number(b.impressions) || 0) - (Number(a.impressions) || 0))[0];

    // Hashtag aggregation
    const hashMap = {};
    accountContents.forEach(item => {
      const eng = (Number(item.likes) || 0) + (Number(item.comments) || 0) + (Number(item.shares) || 0) + (Number(item.saves) || 0);
      (item.hashtags || []).forEach(tag => {
        if (!tag) return;
        const t = tag.trim().toLowerCase();
        if (!t) return;
        if (!hashMap[t]) hashMap[t] = { tag: t, count: 0, impressions: 0, reach: 0, engagement: 0 };
        hashMap[t].count += 1;
        hashMap[t].impressions += Number(item.impressions) || 0;
        hashMap[t].reach += Number(item.reach) || 0;
        hashMap[t].engagement += eng;
      });
    });
    const hashtagRows = Object.values(hashMap).sort((a, b) => b.impressions - a.impressions);

    // Subject aggregation
    const subMap = {};
    accountContents.forEach(item => {
      const eng = (Number(item.likes) || 0) + (Number(item.comments) || 0) + (Number(item.shares) || 0) + (Number(item.saves) || 0);
      (item.subjects || []).forEach(sub => {
        if (!sub) return;
        const name = sub.trim();
        if (!name) return;
        if (!subMap[name]) subMap[name] = { name, count: 0, impressions: 0, reach: 0, engagement: 0 };
        subMap[name].count += 1;
        subMap[name].impressions += Number(item.impressions) || 0;
        subMap[name].reach += Number(item.reach) || 0;
        subMap[name].engagement += eng;
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
          new Paragraph({ children: [new TextRun({ text: `Account: ${accountName || "Media Account"}`, size: 28, bold: true, color: "4A5568" })], alignment: AlignmentType.CENTER }),
          new Paragraph({ children: [new TextRun({ text: `Report Period: ${timeframeLabel || "All-Time"}`, size: 24, color: "718096" })], alignment: AlignmentType.CENTER }),
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
            new Paragraph({ children: [new TextRun({ text: "Caption: ", ...labelStyle }), new TextRun({ text: String(topPost.caption || "No caption"), ...valueStyle })] }),
            new Paragraph({ children: [new TextRun({ text: "Platform: ", ...labelStyle }), new TextRun({ text: String(topPost.platform || "N/A"), ...valueStyle })] }),
            new Paragraph({ children: [new TextRun({ text: "Upload Date: ", ...labelStyle }), new TextRun({ text: String(topPost.uploadDate || "N/A"), ...valueStyle })] }),
            new Paragraph({ children: [new TextRun({ text: "Subjects: ", ...labelStyle }), new TextRun({ text: (topPost.subjects || []).join(", ") || "None", ...valueStyle })] }),
            new Paragraph({ children: [new TextRun({ text: "Impressions: ", ...labelStyle }), new TextRun({ text: (Number(topPost.impressions) || 0).toLocaleString(), ...valueStyle })] }),
            new Paragraph({ children: [new TextRun({ text: "Reach: ", ...labelStyle }), new TextRun({ text: (Number(topPost.reach) || 0).toLocaleString(), ...valueStyle })] }),
            new Paragraph({ children: [new TextRun({ text: "Likes: ", ...labelStyle }), new TextRun({ text: String(topPost.likes || 0), ...valueStyle })] }),
            new Paragraph({ children: [new TextRun({ text: "Comments: ", ...labelStyle }), new TextRun({ text: String(topPost.comments || 0), ...valueStyle })] }),
            new Paragraph({ children: [new TextRun({ text: "Shares: ", ...labelStyle }), new TextRun({ text: String(topPost.shares || 0), ...valueStyle })] }),
            new Paragraph({ children: [new TextRun({ text: "Saves: ", ...labelStyle }), new TextRun({ text: String(topPost.saves || 0), ...valueStyle })] }),
          ] : [new Paragraph({ children: [new TextRun({ text: "No posts recorded for this period.", ...mutedStyle })] })]),
          new Paragraph({ text: "", spacing: { after: 200 } }),

          // ---- CONTENT TABLE ----
          new Paragraph({ children: [new TextRun({ text: "3. Content Log Table", ...sectionStyle })], heading: HeadingLevel.HEADING_2, spacing: { before: 200, after: 100 } }),
          new Table({
            width: { size: 100, type: WidthType.PERCENTAGE },
            rows: [
              makeHeaderRow(["Date", "Platform", "Caption (truncated)", "Hashtags", "Subjects", "Impressions", "Reach", "Likes", "Comments", "Shares", "Saves", "Status"]),
              ...accountContents.map(item => {
                const cap = String(item.caption || "");
                const capTrunc = cap.length > 60 ? cap.substring(0, 57) + "..." : cap;
                return makeDataRow([
                  String(item.uploadDate || "N/A"),
                  String(item.platform || "N/A"),
                  capTrunc || "No caption",
                  (item.hashtags || []).join(" "),
                  (item.subjects || []).join(", "),
                  (Number(item.impressions) || 0).toLocaleString(),
                  (Number(item.reach) || 0).toLocaleString(),
                  String(item.likes || 0),
                  String(item.comments || 0),
                  String(item.shares || 0),
                  String(item.saves || 0),
                  String(item.status || "uploaded")
                ]);
              })
            ]
          }),

          new Paragraph({ text: "", spacing: { after: 400 } }),

          // ---- HASHTAG ANALYTICS TABLE ----
          new Paragraph({ children: [new TextRun({ text: "3. Top 10 Performing Hashtags", ...sectionStyle })], heading: HeadingLevel.HEADING_1 }),
          new Paragraph({ text: "", spacing: { after: 150 } }),

          new Table({
            width: { size: 100, type: WidthType.PERCENTAGE },
            rows: [
              makeHeaderRow(["Hashtag", "Post Count", "Total Impressions", "Total Reach", "Total Engagement", "Avg ER %"]),
              ...sortedTags.map(t => makeDataRow([
                t.tag,
                String(t.count),
                t.impressions.toLocaleString(),
                t.reach.toLocaleString(),
                t.engagement.toLocaleString(),
                `${t.avgEr}%`
              ]))
            ]
          }),

          new Paragraph({ text: "", spacing: { after: 400 } }),

          // ---- SUBJECT ANALYTICS TABLE ----
          new Paragraph({ children: [new TextRun({ text: "4. Featured Subject Performance Studio", ...sectionStyle })], heading: HeadingLevel.HEADING_1 }),
          new Paragraph({ text: "", spacing: { after: 150 } }),

          new Table({
            width: { size: 100, type: WidthType.PERCENTAGE },
            rows: [
              makeHeaderRow(["Subject Name", "Posts Featured", "Total Views", "Total Reach", "Total Engagement", "Avg ER %"]),
              ...sortedSubjects.map(s => makeDataRow([
                s.name,
                String(s.count),
                s.impressions.toLocaleString(),
                s.reach.toLocaleString(),
                s.engagement.toLocaleString(),
                `${s.avgEr}%`
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
    const safeName = (accountName || "Account").replace(/[^a-zA-Z0-9]/g, "_");
    const safeTimeframe = (timeframeLabel || "Report").replace(/[^a-zA-Z0-9]/g, "_");
    a.download = `SocialVault_Report_${safeName}_${safeTimeframe}.docx`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  } catch (err) {
    console.error("Error generating DOCX report:", err);
    alert(`Failed to generate DOCX report: ${err.message || err}`);
  }
}

// TIMEFRAME ANALYTICS PAGE (WITH TOP PERFORMING POST HIGHLIGHT BOX & CONTENT TYPE BREAKDOWN)
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

        {/* Platform & Month/Year Selectors */}
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




window.HashtagAnalyticsPage = function() {
  const { activeAccount, contents } = React.useContext(window.VaultContext);
  const [searchHashtag, setSearchHashtag] = React.useState("");
  const [hashtagSortBy, setHashtagSortBy] = React.useState("impressions");

  if (!activeAccount) {
    return <div className="page-container"><p>No active account selected.</p></div>;
  }

  const accountContents = React.useMemo(() => {
    return contents.filter(c => c.accountId === activeAccount.id);
  }, [contents, activeAccount.id]);

  // Aggregate stats per Hashtag
  const hashtagStats = React.useMemo(() => {
    const map = {};

    accountContents.forEach(item => {
      if (!item.hashtags || !Array.isArray(item.hashtags)) return;

      const engagement = (item.likes || 0) + (item.comments || 0) + (item.shares || 0) + (item.saves || 0);

      item.hashtags.forEach(tag => {
        const cleanTag = tag.trim().toLowerCase();
        if (!cleanTag) return;

        if (!map[cleanTag]) {
          map[cleanTag] = {
            tag: cleanTag.startsWith("#") ? cleanTag : "#" + cleanTag,
            contentCount: 0,
            impressions: 0,
            reach: 0,
            engagement: 0,
            erSum: 0
          };
        }

        map[cleanTag].contentCount += 1;
        map[cleanTag].impressions += item.impressions || 0;
        map[cleanTag].reach += item.reach || 0;
        map[cleanTag].engagement += engagement;
      });
    });

    return Object.values(map).map(h => ({
      ...h,
      avgEr: h.reach > 0 ? ((h.engagement / h.reach) * 100).toFixed(2) : "0.00"
    })).sort((a, b) => b.impressions - a.impressions);
  }, [accountContents]);

  const filteredHashtags = React.useMemo(() => {
    return hashtagStats.filter(h => h.tag.toLowerCase().includes(searchHashtag.toLowerCase()));
  }, [hashtagStats, searchHashtag]);

  // Calculate top 3 hashtags by avg impressions per content
  const top3Hashtags = React.useMemo(() => {
    const withAvg = hashtagStats.map(h => ({
      ...h,
      avgImpressionsPerContent: h.contentCount > 0 ? (h.impressions / h.contentCount) : 0
    }));
    return withAvg.sort((a, b) => b.avgImpressionsPerContent - a.avgImpressionsPerContent).slice(0, 3);
  }, [hashtagStats]);

  return (
    <div className="page-container">
      <div className="page-header">
        <h1 className="page-title">{activeAccount.name} - Hashtag Studio</h1>
        <p className="page-subtitle">Track performance of every hashtag across your content</p>
      </div>

      {/* Top 3 Hashtags Premium Cards */}
      {top3Hashtags.length > 0 && (
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "1.5rem", marginBottom: "2.5rem" }}>
          {top3Hashtags.map((hashtag, index) => (
            <div key={hashtag.tag} style={{
              background: index === 0 
                ? "linear-gradient(135deg, rgba(34, 197, 94, 0.15), rgba(59, 130, 246, 0.15))" 
                : index === 1 
                ? "linear-gradient(135deg, rgba(168, 85, 247, 0.15), rgba(59, 130, 246, 0.15))"
                : "linear-gradient(135deg, rgba(244, 63, 94, 0.15), rgba(249, 115, 22, 0.15))",
              borderRadius: "var(--radius-md)",
              border: index === 0 ? "2px solid rgba(34, 197, 94, 0.4)" : index === 1 ? "2px solid rgba(168, 85, 247, 0.4)" : "2px solid rgba(244, 63, 94, 0.4)",
              padding: "1.75rem",
              position: "relative",
              overflow: "hidden",
              backdropFilter: "blur(10px)"
            }}>
              {/* Badge */}
              <div style={{
                position: "absolute",
                top: "-8px",
                left: "15px",
                background: index === 0 ? "linear-gradient(135deg, #22C55E, #3B82F6)" : index === 1 ? "linear-gradient(135deg, #A855F7, #3B82F6)" : "linear-gradient(135deg, #F43F5E, #F97316)",
                color: "#fff",
                padding: "0.35rem 0.75rem",
                borderRadius: "var(--radius-sm)",
                fontSize: "0.75rem",
                fontWeight: 700,
                letterSpacing: "0.05em",
                textTransform: "uppercase"
              }}>
                #{index + 1} Top Hashtag
              </div>

              {/* Icon/Medal */}
              <div style={{
                width: "56px",
                height: "56px",
                borderRadius: "12px",
                background: index === 0 ? "linear-gradient(135deg, #22C55E, #16A34A)" : index === 1 ? "linear-gradient(135deg, #A855F7, #7C3AED)" : "linear-gradient(135deg, #F43F5E, #DC2626)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontWeight: 800,
                color: "#fff",
                fontSize: "1.8rem",
                marginBottom: "1rem"
              }}>
                {index === 0 ? "🥇" : index === 1 ? "🥈" : "🥉"}
              </div>

              {/* Hashtag Name */}
              <h3 style={{ fontSize: "1.25rem", fontWeight: 700, marginBottom: "0.5rem", color: "#fff", wordBreak: "break-word" }}>
                {hashtag.tag}
              </h3>

              {/* Main Metric - Avg Views Per Content */}
              <div style={{ marginBottom: "1.25rem" }}>
                <div style={{ fontSize: "0.85rem", color: "rgba(255, 255, 255, 0.7)", marginBottom: "0.35rem", textTransform: "uppercase", letterSpacing: "0.05em", fontWeight: 600 }}>
                  Avg Views per Post
                </div>
                <div style={{ fontSize: "2rem", fontWeight: 800, background: index === 0 ? "linear-gradient(135deg, #22C55E, #3B82F6)" : index === 1 ? "linear-gradient(135deg, #A855F7, #3B82F6)" : "linear-gradient(135deg, #F43F5E, #F97316)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
                  {hashtag.avgImpressionsPerContent.toLocaleString('en-US', { maximumFractionDigits: 0 })}
                </div>
              </div>

              {/* Stats Row */}
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem", paddingTop: "1rem", borderTop: "1px solid rgba(255, 255, 255, 0.1)" }}>
                <div>
                  <div style={{ fontSize: "0.75rem", color: "rgba(255, 255, 255, 0.6)", marginBottom: "0.25rem", textTransform: "uppercase" }}>
                    Total Views
                  </div>
                  <div style={{ fontSize: "1.1rem", fontWeight: 700 }}>
                    {(hashtag.impressions / 1000).toFixed(1)}K
                  </div>
                </div>
                <div>
                  <div style={{ fontSize: "0.75rem", color: "rgba(255, 255, 255, 0.6)", marginBottom: "0.25rem", textTransform: "uppercase" }}>
                    Featured In
                  </div>
                  <div style={{ fontSize: "1.1rem", fontWeight: 700 }}>
                    {hashtag.contentCount} posts
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Hashtags Performance Data Table */}
      <div className="table-container">
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "1.5rem", gap: "1.5rem", flexWrap: "wrap" }}>
          <h2 style={{ fontSize: "1.2rem", fontWeight: 700, margin: 0, minWidth: "200px" }}>Hashtag Performance Table</h2>
          
          {/* Sort Dropdown */}
          <div style={{ display: "flex", gap: "0.75rem", alignItems: "center", minWidth: "auto" }}>
            <label style={{ fontSize: "0.9rem", fontWeight: 600, color: "var(--text-muted)", whiteSpace: "nowrap" }}>Sort by:</label>
            <select 
              className="form-select"
              value={hashtagSortBy}
              onChange={(e) => setHashtagSortBy(e.target.value)}
              style={{ 
                padding: "0.65rem 1rem", 
                fontSize: "0.9rem",
                fontWeight: 500,
                background: "linear-gradient(135deg, var(--bg-tertiary) 0%, rgba(59, 130, 246, 0.05) 100%)",
                border: "1.5px solid var(--accent-cyan)",
                borderRadius: "10px",
                color: "var(--text-primary)",
                cursor: "pointer",
                boxShadow: "0 4px 12px rgba(6, 182, 212, 0.1)",
                transition: "all 0.2s ease",
                appearance: "none",
                backgroundImage: "url(\"data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='rgb(6, 182, 212)' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3e%3cpolyline points='6 9 12 15 18 9'%3e%3c/polyline%3e%3c/svg%3e\")",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "right 0.75rem center",
                backgroundSize: "1.2em 1.2em",
                paddingRight: "2.5rem"
              }}
            >
              <option value="impressions">Total Impressions</option>
              <option value="reach">Total Reach</option>
              <option value="engagement">Total Engagement</option>
              <option value="contentCount">Content Count</option>
              <option value="avgEr">Avg Engagement Rate %</option>
              <option value="avgImpressions">Avg Impressions per Post</option>
              <option value="alphabetical">Alphabetical (A-Z)</option>
            </select>
          </div>
        </div>

        <table className="custom-table">
          <thead>
            <tr>
              <th>Hashtag</th>
              <th>Content Count</th>
              <th>Total Impressions (Viewers)</th>
              <th>Total Reach</th>
              <th>Total Engagement</th>
              <th>Avg Engagement Rate %</th>
            </tr>
          </thead>
          <tbody>
            {(() => {
              // Sort the hashtags based on selected criteria
              const sortedHashtags = [...filteredHashtags].sort((a, b) => {
                switch(hashtagSortBy) {
                  case "impressions":
                    return b.impressions - a.impressions;
                  case "reach":
                    return b.reach - a.reach;
                  case "engagement":
                    return b.engagement - a.engagement;
                  case "contentCount":
                    return b.contentCount - a.contentCount;
                  case "avgEr":
                    return parseFloat(b.avgEr) - parseFloat(a.avgEr);
                  case "avgImpressions":
                    return (b.contentCount > 0 ? b.impressions / b.contentCount : 0) - (a.contentCount > 0 ? a.impressions / a.contentCount : 0);
                  case "alphabetical":
                    return a.tag.localeCompare(b.tag);
                  default:
                    return b.impressions - a.impressions;
                }
              });

              return sortedHashtags.map(h => (
                <tr key={h.tag}>
                  <td><span className="chip" style={{ background: "rgba(139, 92, 246, 0.15)", color: "var(--accent-primary)", border: "1px solid rgba(139, 92, 246, 0.3)", fontSize: "0.85rem", padding: "0.3rem 0.75rem" }}>{h.tag}</span></td>
                  <td style={{ fontWeight: 600 }}>{h.contentCount} contents</td>
                  <td style={{ fontWeight: 700, color: "var(--accent-cyan)" }}>{h.impressions.toLocaleString()}</td>
                  <td>{h.reach.toLocaleString()}</td>
                  <td style={{ color: "var(--accent-emerald)", fontWeight: 600 }}>{h.engagement.toLocaleString()}</td>
                  <td style={{ fontWeight: 700, color: "var(--accent-primary)" }}>{h.avgEr}%</td>
                </tr>
              ));
            })()}

            {filteredHashtags.length === 0 && (
              <tr>
                <td colSpan="6" style={{ textAlign: "center", padding: "2.5rem", color: "var(--text-muted)" }}>
                  No hashtag records found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};


function getSubjectPhotoData(subjectPhotos, subjectName) {
  if (!subjectPhotos || !subjectName) return { url: "", zoom: 1, offsetX: 0, offsetY: 0 };
  const raw = subjectPhotos[subjectName] || subjectPhotos[subjectName.replace(/\./g, '_')];
  if (!raw) return { url: "", zoom: 1, offsetX: 0, offsetY: 0 };
  if (typeof raw === "string") return { url: raw, zoom: 1, offsetX: 0, offsetY: 0 };
  return {
    url: raw.url || "",
    zoom: raw.zoom ?? 1,
    offsetX: raw.offsetX ?? 0,
    offsetY: raw.offsetY ?? 0
  };
}

function SubjectAnalyticsPage() {
  const { activeAccount, contents } = React.useContext(VaultContext);
  const [searchSubject, setSearchSubject] = React.useState("");
  const [sortBy, setSortBy] = React.useState("impressions");
  const [sortOrder, setSortOrder] = React.useState("desc");
  const [currentPage, setCurrentPage] = React.useState(1);
  const itemsPerPage = 25;

  if (!activeAccount) return <div className="page-container"><p>No active account selected.</p></div>;

  const accountContents = contents.filter(c => c.accountId === activeAccount.id);

  React.useEffect(() => { setCurrentPage(1); }, [searchSubject, sortBy, sortOrder]);

  const subjectStats = React.useMemo(() => {
    const map = {};
    accountContents.forEach(item => {
      if (!item.subjects || !Array.isArray(item.subjects)) return;
      const engagement = (item.likes || 0) + (item.comments || 0) + (item.shares || 0) + (item.saves || 0);
      item.subjects.forEach(sub => {
        const name = sub.trim();
        if (!name) return;
        if (!map[name]) {
          map[name] = { name, contentCount: 0, impressions: 0, reach: 0, engagement: 0, topPost: null };
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

  // Calculate Top 3 Subjects by Average Views per Content
  const top3Subjects = React.useMemo(() => {
    const withAvgViews = subjectStats.map(s => ({
      ...s,
      avgViewsPerContent: s.contentCount > 0 ? (s.impressions / s.contentCount) : 0
    }));
    return withAvgViews.sort((a, b) => b.avgViewsPerContent - a.avgViewsPerContent).slice(0, 3);
  }, [subjectStats]);

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

      {/* Top 3 Subjects Premium Cards */}
      {top3Subjects.length > 0 && (
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "1.5rem", marginBottom: "2.5rem" }}>
          {top3Subjects.map((subject, index) => (
            <div key={subject.name} style={{
              background: index === 0 
                ? "linear-gradient(135deg, rgba(34, 197, 94, 0.15), rgba(59, 130, 246, 0.15))" 
                : index === 1 
                ? "linear-gradient(135deg, rgba(168, 85, 247, 0.15), rgba(59, 130, 246, 0.15))"
                : "linear-gradient(135deg, rgba(244, 63, 94, 0.15), rgba(249, 115, 22, 0.15))",
              borderRadius: "var(--radius-md)",
              border: index === 0 ? "2px solid rgba(34, 197, 94, 0.4)" : index === 1 ? "2px solid rgba(168, 85, 247, 0.4)" : "2px solid rgba(244, 63, 94, 0.4)",
              padding: "1.75rem",
              position: "relative",
              overflow: "hidden",
              backdropFilter: "blur(10px)"
            }}>
              {/* Badge */}
              <div style={{
                position: "absolute",
                top: "-8px",
                left: "15px",
                background: index === 0 ? "linear-gradient(135deg, #22C55E, #3B82F6)" : index === 1 ? "linear-gradient(135deg, #A855F7, #3B82F6)" : "linear-gradient(135deg, #F43F5E, #F97316)",
                color: "#fff",
                padding: "0.35rem 0.75rem",
                borderRadius: "var(--radius-sm)",
                fontSize: "0.75rem",
                fontWeight: 700,
                letterSpacing: "0.05em",
                textTransform: "uppercase"
              }}>
                #{index + 1} Top Subject
              </div>

              {/* Avatar */}
              <div style={{
                width: "56px",
                height: "56px",
                borderRadius: "50%",
                background: index === 0 ? "linear-gradient(135deg, #22C55E, #16A34A)" : index === 1 ? "linear-gradient(135deg, #A855F7, #7C3AED)" : "linear-gradient(135deg, #F43F5E, #DC2626)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontWeight: 800,
                color: "#fff",
                fontSize: "1.5rem",
                marginBottom: "1rem"
              }}>
                {subject.name.charAt(0).toUpperCase()}
              </div>

              {/* Name */}
              <h3 style={{ fontSize: "1.25rem", fontWeight: 700, marginBottom: "0.5rem", color: "#fff" }}>
                {subject.name}
              </h3>

              {/* Main Metric - Avg Views Per Content */}
              <div style={{ marginBottom: "1.25rem" }}>
                <div style={{ fontSize: "0.85rem", color: "rgba(255, 255, 255, 0.7)", marginBottom: "0.35rem", textTransform: "uppercase", letterSpacing: "0.05em", fontWeight: 600 }}>
                  Avg Views per Post
                </div>
                <div style={{ fontSize: "2rem", fontWeight: 800, background: index === 0 ? "linear-gradient(135deg, #22C55E, #3B82F6)" : index === 1 ? "linear-gradient(135deg, #A855F7, #3B82F6)" : "linear-gradient(135deg, #F43F5E, #F97316)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
                  {subject.avgViewsPerContent.toLocaleString('en-US', { maximumFractionDigits: 0 })}
                </div>
              </div>

              {/* Stats Row */}
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem", paddingTop: "1rem", borderTop: "1px solid rgba(255, 255, 255, 0.1)" }}>
                <div>
                  <div style={{ fontSize: "0.75rem", color: "rgba(255, 255, 255, 0.6)", marginBottom: "0.25rem", textTransform: "uppercase" }}>
                    Total Views
                  </div>
                  <div style={{ fontSize: "1.1rem", fontWeight: 700 }}>
                    {(subject.impressions / 1000).toFixed(1)}K
                  </div>
                </div>
                <div>
                  <div style={{ fontSize: "0.75rem", color: "rgba(255, 255, 255, 0.6)", marginBottom: "0.25rem", textTransform: "uppercase" }}>
                    Featured In
                  </div>
                  <div style={{ fontSize: "1.1rem", fontWeight: 700 }}>
                    {subject.contentCount} posts
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

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
}


// Report Summary Page — Professional Analytics Report
// ReportSummaryPage — Professional Analytics Report
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
      case "report-summary": return <ReportSummaryPage />;
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
