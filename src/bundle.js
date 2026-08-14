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
    { id: "cnt_03", accountId: "acc_01", uploadDate: "2026-08-05", uploadTime: "11:15", platform: "TikTok", caption: "3 AI tools you need to try this week!  #ai #productivity #tech", hashtags: ["#ai", "#productivity", "#tech"], subjects: ["Alex"], impressions: 620000, reach: 540000, likes: 54000, comments: 3120, shares: 12400, saves: 18900, status: "Uploaded" },
    { id: "cnt_04", accountId: "acc_01", uploadDate: "2026-08-15", uploadTime: "09:00", platform: "Instagram", caption: "Behind the scenes with Sarah on the new studio build podcast!", hashtags: ["#podcast", "#studio"], subjects: ["Sarah"], impressions: 85000, reach: 71000, likes: 7200, comments: 420, shares: 610, saves: 1100, status: "Scheduled" },
    { id: "cnt_05", accountId: "acc_01", uploadDate: "2026-07-28", uploadTime: "16:45", platform: "X (Twitter)", caption: "Thread: Why 2026 is the turning point for wearable spatial computing. ", hashtags: ["#tech", "#spatialcomputing"], subjects: ["Alex"], impressions: 92000, reach: 84000, likes: 4100, comments: 630, shares: 1890, saves: 2200, status: "Uploaded" },
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

    // Handle ?vaultToken in URL - automatically register shared vault into collaborator index
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

  // -- Account Actions (Firestore) --
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

  // -- Platform Actions (Firestore) --
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

  // -- Content Actions (Firestore) --
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

  // -- Collaborator Actions (Firestore) --
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
    alert(`[OK] Access granted! ${cleanEmail} can now view and edit this vault in real time.`);
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

  // -- Subject Photo Action --
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

function AccountVaultPage() {
  const { user } = React.useContext(AuthContext);
  const { accounts, setActiveAccountId, setActivePage, addAccount, removeAccount, editAccount, contents, getUserRole } = React.useContext(VaultContext);

  // Add modal state
  const [showAddModal, setShowAddModal] = React.useState(false);
  const [accountName, setAccountName] = React.useState("");
  const [accountDesc, setAccountDesc] = React.useState("");

  // Edit modal state
  const [editingAcc, setEditingAcc] = React.useState(null);
  const [editName, setEditName] = React.useState("");
  const [editDesc, setEditDesc] = React.useState("");
  const [editPhoto, setEditPhoto] = React.useState("");
  const [editPhotoMode, setEditPhotoMode] = React.useState("url");
  const [editPhotoPreview, setEditPhotoPreview] = React.useState("");

  const accessibleAccounts = React.useMemo(() => {
    if (!user) return [];
    return accounts
      .filter(acc => acc.ownerEmail === user.email || acc.collaborators.some(c => c.email === user.email))
      .sort((a, b) => (a.name || "").localeCompare((b.name || "")));
  }, [accounts, user]);

  const handleCreate = (e) => {
    e.preventDefault();
    if (!accountName.trim()) return;
    addAccount(accountName, accountDesc);
    setAccountName(""); setAccountDesc(""); setShowAddModal(false);
  };

  const openEditModal = (e, acc) => {
    e.stopPropagation();
    setEditingAcc(acc);
    setEditName(acc.name || "");
    setEditDesc(acc.description || "");
    setEditPhoto(acc.photoURL || "");
    setEditPhotoPreview(acc.photoURL || "");
    setEditPhotoMode("url");
  };

  const handleEditPhotoUrlChange = (val) => {
    setEditPhoto(val);
    setEditPhotoPreview(val);
  };

  const handleEditPhotoUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (ev) => {
      setEditPhoto(ev.target.result);
      setEditPhotoPreview(ev.target.result);
    };
    reader.readAsDataURL(file);
  };

  const handleEditSave = (e) => {
    e.preventDefault();
    if (!editName.trim()) return;
    editAccount(editingAcc.id, { name: editName.trim(), description: editDesc.trim(), photoURL: editPhoto.trim() });
    setEditingAcc(null);
  };

  const selectAccount = (accId) => {
    setActiveAccountId(accId);
    setActivePage("account-center");
  };

  // ── Upload Schedule ──────────────────────────────────────────────────────────
  // Stored in localStorage as { [accountId]: string[] } where strings are day keys
  var DAYS = [
    { key: "mon", label: "Mon" },
    { key: "tue", label: "Tue" },
    { key: "wed", label: "Wed" },
    { key: "thu", label: "Thu" },
    { key: "fri", label: "Fri" },
    { key: "sat", label: "Sat" },
    { key: "sun", label: "Sun" }
  ];

  // ── Upload Schedule (dropdown rows + day toggles) ────────────────────────
  const [schedule, setSchedule] = React.useState(function() {
    var initial = {};
    if (accessibleAccounts.length > 0) {
      var firstAcc = accessibleAccounts[0];
      initial = firstAcc.uploadSchedule || {};
    }
    return initial;
  });

  const [scheduleRows, setScheduleRows] = React.useState(function() {
    // Initialize rows from schedule keys (account IDs that have any days)
    var rows = [];
    var seen = {};
    Object.keys(schedule).forEach(function(accId) {
      if (!seen[accId]) {
        rows.push(accId);
        seen[accId] = true;
      }
    });
    return rows.length > 0 ? rows : [""];
  });

  const [scheduleSaving, setScheduleSaving] = React.useState(false);

  function addScheduleRow() {
    setScheduleRows(function(prev) { return prev.concat([""]);  });
  }

  function removeScheduleRow(idx) {
    setScheduleRows(function(prev) {
      var row = prev[idx];
      var next = prev.filter(function(_, i) { return i !== idx; });
      // Clear schedule for this account if removed
      if (row && schedule[row]) {
        setSchedule(function(s) {
          var newS = Object.assign({}, s);
          delete newS[row];
          return newS;
        });
      }
      return next;
    });
  }

  function updateScheduleRow(idx, newAccId) {
    var oldAccId = scheduleRows[idx];
    setScheduleRows(function(prev) {
      var next = prev.slice();
      next[idx] = newAccId;
      return next;
    });
    // Move schedule data from old account to new
    if (oldAccId && oldAccId !== newAccId && schedule[oldAccId]) {
      setSchedule(function(s) {
        var newS = Object.assign({}, s);
        if (newAccId) {
          newS[newAccId] = newS[oldAccId];
        }
        delete newS[oldAccId];
        return newS;
      });
    }
  }

  function toggleScheduleDay(accId, dayKey) {
    if (!accId) return;
    setSchedule(function(prev) {
      var days = prev[accId] ? prev[accId].slice() : [];
      var idx = days.indexOf(dayKey);
      if (idx >= 0) days.splice(idx, 1);
      else days.push(dayKey);
      var next = Object.assign({}, prev, { [accId]: days });
      if (days.length === 0) delete next[accId];
      return next;
    });
  }

  function isScheduledDay(accId, dayKey) {
    return !!(accId && schedule[accId] && schedule[accId].indexOf(dayKey) >= 0);
  }

  // Save to Firestore — call after any schedule change
  var scheduleRef = React.useRef(null);
  var scheduleRowsRef = React.useRef(null);
  var accessibleAccountsRef = React.useRef(null);
  
  scheduleRef.current = schedule;
  scheduleRowsRef.current = scheduleRows;
  accessibleAccountsRef.current = accessibleAccounts;

  React.useEffect(function() {
    var timeout = setTimeout(async function() {
      if (accessibleAccountsRef.current.length === 0) return;
      setScheduleSaving(true);
      try {
        var firstAcc = accessibleAccountsRef.current[0];
        await editAccount(firstAcc.id, { uploadSchedule: scheduleRef.current });
      } catch(e) {
        console.error("Failed to save schedule:", e);
      }
      setScheduleSaving(false);
    }, 800);
    return function() { clearTimeout(timeout); };
  }, []);

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

      {/* ══ UPLOAD SCHEDULE ═══════════════════════════════════════════════════ */}
      {accessibleAccounts.length > 0 && (
        <div className="upload-schedule-card">
          <div className="upload-schedule-head">
            <div className="upload-schedule-brand">
              <div className="upload-schedule-icon">
                <i data-lucide="calendar-days" style={{ width:"16px", height:"16px", color:"#fff" }}></i>
              </div>
              <div>
                <div className="upload-schedule-title">UPLOAD SCHEDULE</div>
                <div className="upload-schedule-sub">Select accounts and mark posting days</div>
              </div>
            </div>
            <div style={{ display:"flex", alignItems:"center", gap:"0.5rem" }}>
              <span style={{ fontSize:"0.72rem", color:"var(--text-subtle)" }}>
                {scheduleRows.filter(function(r) { return r; }).length} row{scheduleRows.filter(function(r) { return r; }).length !== 1 ? "s" : ""}
              </span>
            </div>
          </div>

          <div className="upload-schedule-scroll">
            <table className="upload-schedule-table-new">
              <thead>
                <tr>
                  <th className="usched-new-th usched-new-account-col">Account</th>
                  {DAYS.map(function(d) {
                    return (
                      <th key={d.key} className="usched-new-th usched-new-day-col">
                        {d.label}
                      </th>
                    );
                  })}
                  <th className="usched-new-th usched-new-action-col"></th>
                </tr>
              </thead>
              <tbody>
                {scheduleRows.map(function(accId, rowIdx) {
                  return (
                    <tr key={rowIdx} className="usched-new-row">
                      {/* Account dropdown cell */}
                      <td className="usched-new-account-cell">
                        <select
                          className="usched-new-dropdown"
                          value={accId || ""}
                          onChange={function(e) { updateScheduleRow(rowIdx, e.target.value); }}
                        >
                          <option value="">Select account...</option>
                          {accessibleAccounts.map(function(acc) {
                            return (
                              <option key={acc.id} value={acc.id}>
                                {acc.name}
                              </option>
                            );
                          })}
                        </select>
                      </td>
                      {/* Day toggle cells */}
                      {DAYS.map(function(d) {
                        var isActive = isScheduledDay(accId, d.key);
                        return (
                          <td key={d.key} className="usched-new-day-cell">
                            <button
                              className={"usched-new-toggle" + (isActive ? " usched-new-toggle-on" : "")}
                              onClick={function() { toggleScheduleDay(accId, d.key); }}
                              disabled={!accId}
                              title={accId ? (isActive ? "Remove" : "Add") : "Select account first"}
                            >
                              {isActive ? <i data-lucide="check" style={{ width:"14px", height:"14px" }}></i> : <i data-lucide="x" style={{ width:"14px", height:"14px" }}></i>}
                            </button>
                          </td>
                        );
                      })}
                      {/* Remove button */}
                      <td className="usched-new-action-cell">
                        <button
                          className="usched-new-remove"
                          onClick={function() { removeScheduleRow(rowIdx); }}
                          title="Remove this row"
                        >
                          <i data-lucide="trash-2" style={{ width:"14px", height:"14px" }}></i>
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>

          {/* Add row button + footer */}
          <div className="upload-schedule-footer">
            <button
              className="btn btn-secondary"
              onClick={addScheduleRow}
              style={{ fontSize:"0.85rem", gap:"0.5rem" }}
            >
              <i data-lucide="plus" style={{ width:"14px", height:"14px" }}></i>
              Add Row
            </button>
            <div style={{ marginLeft:"auto", display:"flex", alignItems:"center", gap:"0.4rem", fontSize:"0.78rem", color:"var(--text-subtle)" }}>
              {scheduleSaving && <i data-lucide="loader-2" style={{ width:"12px", height:"12px", animation:"spin 0.8s linear infinite" }}></i>}
              <span>Schedule saved to cloud</span>
            </div>
          </div>
        </div>
      )}

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))", gap: "1.5rem" }}>
        {accessibleAccounts.map(acc => {
          const role = getUserRole(acc);
          const accContents = contents.filter(c => c.accountId === acc.id);
          const totalViews = accContents.reduce((sum, c) => sum + (c.impressions || 0), 0);

          return (
            <div key={acc.id} className="glass-card glass-card-interactive" style={{ cursor: "pointer", display: "flex", flexDirection: "column", justifyContent: "space-between" }} onClick={() => selectAccount(acc.id)}>
              <div>
                {/* Card Top Row: Avatar + Badges + Actions */}
                <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", marginBottom: "1rem" }}>
                  {acc.photoURL ? (
                    <img src={acc.photoURL} alt={acc.name} style={{ width: "48px", height: "48px", borderRadius: "12px", objectFit: "cover", border: "2px solid rgba(139,92,246,0.4)" }} onError={e => { e.target.style.display = "none"; }} />
                  ) : (
                    <div style={{ width: "48px", height: "48px", borderRadius: "12px", background: "linear-gradient(135deg, rgba(139,92,246,0.25), rgba(6,182,212,0.2))", border: "1px solid rgba(139,92,246,0.35)", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--accent-primary)", fontSize: "1.35rem", fontWeight: 800 }}>
                      {acc.name.charAt(0).toUpperCase()}
                    </div>
                  )}

                  <div style={{ display: "flex", alignItems: "center", gap: "0.45rem" }}>
                    <span className={`badge ${role === 'owner' ? 'badge-uploaded' : role === 'editor' ? 'badge-scheduled' : 'badge-privated'}`}>
                      {role}
                    </span>
                    {role === 'owner' && (
                      <>
                        <button onClick={(e) => openEditModal(e, acc)} className="btn btn-secondary btn-icon" title="Edit Account" style={{ width: "30px", height: "30px", padding: 0, display: "flex", alignItems: "center", justifyContent: "center" }}>
                          <i data-lucide="pencil" style={{ width: "14px", height: "14px" }}></i>
                        </button>
                        <button onClick={(e) => { e.stopPropagation(); if (confirm(`Delete account "${acc.name}"?`)) removeAccount(acc.id); }} className="btn btn-danger btn-icon" title="Delete Account" style={{ width: "30px", height: "30px", padding: 0, display: "flex", alignItems: "center", justifyContent: "center" }}>
                          <i data-lucide="trash-2" style={{ width: "14px", height: "14px" }}></i>
                        </button>
                      </>
                    )}
                  </div>
                </div>

                <h3 style={{ fontSize: "1.2rem", fontWeight: 700, marginBottom: "0.35rem" }}>{acc.name}</h3>
                <p style={{ fontSize: "0.85rem", color: "var(--text-muted)", marginBottom: "1.1rem", lineHeight: 1.5 }}>{acc.description}</p>

                <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem", marginBottom: "1.1rem" }}>
                  {acc.platforms.map(p => (
                    <span key={p.id} className="chip" style={{ fontSize: "0.75rem" }}>{p.name}: {p.handle}</span>
                  ))}
                </div>
              </div>

              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", paddingTop: "0.85rem", borderTop: "1px solid var(--border-color)", fontSize: "0.85rem", color: "var(--text-muted)" }}>
                <div><strong style={{ color: "#fff" }}>{accContents.length}</strong> Content Items</div>
                <div><strong style={{ color: "var(--accent-cyan)" }}>{(totalViews / 1000).toFixed(1)}k</strong> Views</div>
              </div>
            </div>
          );
        })}

        {accessibleAccounts.length === 0 && (
          <div className="glass-card" style={{ gridColumn: "1 / -1", textAlign: "center", padding: "3rem 1.5rem" }}>
            <i data-lucide="folder-plus" style={{ width: "48px", height: "48px", color: "var(--text-subtle)", marginBottom: "1rem" }}></i>
            <h3 style={{ fontSize: "1.2rem", fontWeight: 700 }}>No Accounts Found</h3>
            <p style={{ color: "var(--text-muted)", margin: "0.5rem 0 1.5rem" }}>You haven't created any social media accounts yet.</p>
            <button onClick={() => setShowAddModal(true)} className="btn btn-primary">Create Your First Account</button>
          </div>
        )}
      </div>

      {/* -- Add Account Modal -- */}
      {showAddModal && (
        <div className="modal-overlay" onClick={() => setShowAddModal(false)}>
          <div className="modal-content" onClick={e => e.stopPropagation()}>
            <div className="modal-header">
              <h2 className="modal-title">Add New Social Account Vault</h2>
              <button type="button" onClick={() => setShowAddModal(false)} className="btn btn-secondary btn-icon" style={{ width: "32px", height: "32px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <span style={{ fontSize: "1.2rem", fontWeight: "bold" }}>x</span>
              </button>
            </div>
            <form onSubmit={handleCreate}>
              <div className="form-group">
                <label className="form-label">Account / Brand Name</label>
                <input type="text" className="form-input" placeholder="e.g. Creator Gaming Hub" required value={accountName} onChange={e => setAccountName(e.target.value)} />
              </div>
              <div className="form-group">
                <label className="form-label">Description / Niche</label>
                <textarea className="form-textarea" placeholder="e.g. Gaming news, live highlights, short-form clips" rows="3" value={accountDesc} onChange={e => setAccountDesc(e.target.value)}></textarea>
              </div>
              <div style={{ display: "flex", justifyContent: "flex-end", gap: "0.75rem", marginTop: "1.5rem" }}>
                <button type="button" onClick={() => setShowAddModal(false)} className="btn btn-secondary">Cancel</button>
                <button type="submit" className="btn btn-primary">Create Account</button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* -- Edit Account Modal -- */}
      {editingAcc && (
        <div className="modal-overlay" onClick={() => setEditingAcc(null)}>
          <div className="modal-content" onClick={e => e.stopPropagation()} style={{ maxWidth: "520px" }}>
            <div className="modal-header">
              <h2 className="modal-title">Edit Account</h2>
              <button type="button" onClick={() => setEditingAcc(null)} className="btn btn-secondary btn-icon" style={{ width: "32px", height: "32px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <span style={{ fontSize: "1.2rem", fontWeight: "bold" }}>x</span>
              </button>
            </div>
            <form onSubmit={handleEditSave}>
              {/* Photo Preview */}
              <div style={{ display: "flex", justifyContent: "center", marginBottom: "1.5rem" }}>
                {editPhotoPreview ? (
                  <img src={editPhotoPreview} alt="Preview" style={{ width: "80px", height: "80px", borderRadius: "16px", objectFit: "cover", border: "2px solid rgba(139,92,246,0.4)" }} onError={e => { e.target.style.display = "none"; }} />
                ) : (
                  <div style={{ width: "80px", height: "80px", borderRadius: "16px", background: "linear-gradient(135deg, rgba(139,92,246,0.25), rgba(6,182,212,0.2))", border: "2px dashed rgba(139,92,246,0.4)", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--accent-primary)", fontSize: "2rem", fontWeight: 800 }}>
                    {editName.charAt(0).toUpperCase() || "?"}
                  </div>
                )}
              </div>

              {/* Account Name */}
              <div className="form-group">
                <label className="form-label">Account / Brand Name</label>
                <input type="text" className="form-input" required value={editName} onChange={e => setEditName(e.target.value)} placeholder="e.g. Creator Gaming Hub" />
              </div>

              {/* Description */}
              <div className="form-group">
                <label className="form-label">Description / Niche</label>
                <textarea className="form-textarea" rows="3" value={editDesc} onChange={e => setEditDesc(e.target.value)} placeholder="e.g. Gaming, tech reviews, lifestyle..."></textarea>
              </div>

              {/* Profile Photo */}
              <div className="form-group">
                <label className="form-label">Profile Photo</label>
                <div style={{ display: "flex", gap: "0.5rem", marginBottom: "0.75rem" }}>
                  <button type="button" onClick={() => setEditPhotoMode("url")} className={`btn ${editPhotoMode === "url" ? "btn-primary" : "btn-secondary"}`} style={{ fontSize: "0.82rem", padding: "0.35rem 0.9rem" }}>
                     Image URL
                  </button>
                  <button type="button" onClick={() => setEditPhotoMode("upload")} className={`btn ${editPhotoMode === "upload" ? "btn-primary" : "btn-secondary"}`} style={{ fontSize: "0.82rem", padding: "0.35rem 0.9rem" }}>
                     Local Upload
                  </button>
                </div>
                {editPhotoMode === "url" ? (
                  <input type="url" className="form-input" placeholder="https://example.com/photo.jpg" value={editPhoto} onChange={e => handleEditPhotoUrlChange(e.target.value)} />
                ) : (
                  <input type="file" accept="image/*" className="form-input" style={{ padding: "0.45rem" }} onChange={handleEditPhotoUpload} />
                )}
                {editPhotoPreview && (
                  <button type="button" onClick={() => { setEditPhoto(""); setEditPhotoPreview(""); }} style={{ marginTop: "0.5rem", background: "none", border: "none", color: "#F43F5E", fontSize: "0.82rem", cursor: "pointer", padding: 0 }}>
                    x Remove photo
                  </button>
                )}
              </div>

              <div style={{ display: "flex", justifyContent: "flex-end", gap: "0.75rem", marginTop: "1.5rem" }}>
                <button type="button" onClick={() => setEditingAcc(null)} className="btn btn-secondary">Cancel</button>
                <button type="submit" className="btn btn-primary">Save Changes</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

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

    { id: "collaborators",       label: "Collaborators",    icon: "share-2"      },
    { id: "notes",               label: "Notes",            icon: "notebook-text" }

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
          <p className="page-subtitle">{activeAccount.description} * Managed platforms & channel credentials</p>
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
                <span style={{ fontSize: "1.2rem", lineHeight: 1, fontWeight: "bold" }}>x</span>
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
                   {name}
                  <button 
                    type="button" 
                    onClick={() => handleRemoveSubject(name)} 
                    style={{ background: "none", border: "none", color: "inherit", cursor: "pointer", padding: "0 2px", fontWeight: "bold", fontSize: "0.85rem", lineHeight: 1 }}
                    title="Remove subject"
                  >
                    x
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
                  <td>{item.subjects.map(s => <span key={s} className="chip chip-subject" style={{ fontSize: "0.75rem" }}> {s}</span>)}</td>
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
            Showing <strong>{startIndex + 1}</strong> - <strong>{Math.min(startIndex + itemsPerPage, filteredContents.length)}</strong> of <strong>{filteredContents.length}</strong> contents
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
                <span style={{ fontSize: "1.2rem", lineHeight: 1, fontWeight: "bold" }}>x</span>
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
                       {name}
                      <button 
                        type="button" 
                        onClick={() => handleRemoveEditSubject(name)} 
                        style={{ background: "none", border: "none", color: "inherit", cursor: "pointer", padding: "0 2px", fontWeight: "bold", fontSize: "0.85rem", lineHeight: 1 }}
                        title="Remove subject"
                      >
                        x
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
          new Paragraph({ children: [new TextRun({ text: `SocialVault Pro Analytics Report - ${generatedAt}`, size: 18, color: "A0AEC0", italics: true })], alignment: AlignmentType.CENTER }),
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
          <span className="stat-change positive">(Total Engagement / Reach) x 100</span>
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
              <span style={{ color: "var(--text-muted)", fontSize: "0.9rem" }}> Likes</span>
              <strong style={{ fontSize: "0.95rem" }}>{totalLikes.toLocaleString()}</strong>
            </div>

            <div style={{ display: "flex", justifyContent: "space-between", paddingBottom: "0.5rem", borderBottom: "1px solid var(--border-color)" }}>
              <span style={{ color: "var(--text-muted)", fontSize: "0.9rem" }}> Comments</span>
              <strong style={{ fontSize: "0.95rem" }}>{totalComments.toLocaleString()}</strong>
            </div>

            <div style={{ display: "flex", justifyContent: "space-between", paddingBottom: "0.5rem", borderBottom: "1px solid var(--border-color)" }}>
              <span style={{ color: "var(--text-muted)", fontSize: "0.9rem" }}> Shares</span>
              <strong style={{ fontSize: "0.95rem" }}>{totalShares.toLocaleString()}</strong>
            </div>

            <div style={{ display: "flex", justifyContent: "space-between", paddingBottom: "0.5rem", borderBottom: "1px solid var(--border-color)" }}>
              <span style={{ color: "var(--text-muted)", fontSize: "0.9rem" }}> Saves</span>
              <strong style={{ fontSize: "0.95rem" }}>{totalSaves.toLocaleString()}</strong>
            </div>

          </div>
        </div>
      </div>

      {/* Month Comparison Section */}
      {timeframe === "monthly" && (
        <div style={{ marginTop: "2.5rem" }}>
          <h2 style={{ fontSize: "1.35rem", fontWeight: 800, color: "var(--text-main)", marginBottom: "1rem" }}>
             Compare Two Months
          </h2>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "2rem", marginBottom: "1.5rem" }}>
            {/* Month 1 Comparison Card */}
            <div className="glass-card" style={{ padding: "1.5rem" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "1rem" }}>
                <div style={{ width: "40px", height: "40px", borderRadius: "10px", background: "linear-gradient(135deg, #3B82F6, #06B6D4)", display: "flex", alignItems: "center", justifyContent: "center", color: "#fff", fontWeight: 700, fontSize: "1.1rem" }}>
                  1
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
                  2
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
                <div style={{ fontSize: "1.5rem" }}></div>
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
                      <span style={{ color: "var(--text-muted)", fontSize: "0.9rem" }}> Impressions</span>
                      <strong style={{ color: impDiff >= 0 ? "var(--accent-emerald)" : "#F43F5E" }}>{impDiff >= 0 ? "+" : ""}{impDiff.toLocaleString()} ({impPercent}%)</strong>
                    </div>
                    <div style={{ display: "flex", justifyContent: "space-between", paddingBottom: "0.5rem", borderBottom: "1px solid rgba(255,255,255,0.1)" }}>
                      <span style={{ color: "var(--text-muted)", fontSize: "0.9rem" }}> Reach</span>
                      <strong style={{ color: reachDiff >= 0 ? "var(--accent-emerald)" : "#F43F5E" }}>{reachDiff >= 0 ? "+" : ""}{reachDiff.toLocaleString()} ({reachPercent}%)</strong>
                    </div>
                    <div style={{ display: "flex", justifyContent: "space-between", paddingBottom: "0.5rem", borderBottom: "1px solid rgba(255,255,255,0.1)" }}>
                      <span style={{ color: "var(--text-muted)", fontSize: "0.9rem" }}> Engagement</span>
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
           Content Type Performance
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
            "Reels": "",
            "Carousel": "",
            "Vlog": "",
            "Video": "",
            "Image": "",
            "Story": "",
            "Live": "",
            "Post": "",
            "Short": "",
            "Thread": ""
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
                      <div style={{ width:"36px", height:"36px", borderRadius:"9px", background:"rgba(139,92,246,0.12)", border:"1px solid rgba(139,92,246,0.2)", display:"flex", alignItems:"center", justifyContent:"center" }}><i data-lucide={contentTypeIcons[stat.type] || "file"} style={{ width:"18px", height:"18px", color:"var(--accent-primary)" }}></i></div>
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
            Top Performing Post by Platform
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
  const [searchHashtag,  setSearchHashtag]  = React.useState("");
  const [hashtagSortBy,  setHashtagSortBy]  = React.useState("impressions");
  const [activePlatform, setActivePlatform] = React.useState("All");

  if (!activeAccount) {
    return <div className="page-container"><p>No active account selected.</p></div>;
  }

  const accountContents = React.useMemo(function() {
    return contents.filter(function(c) { return c.accountId === activeAccount.id; });
  }, [contents, activeAccount.id]);

  const allPlatforms = React.useMemo(function() {
    const ps = new Set();
    accountContents.forEach(function(c) { if (c.platform) ps.add(c.platform); });
    return Array.from(ps).sort();
  }, [accountContents]);

  const PCOLORS = {"Instagram":"#E1306C","YouTube":"#FF4444","TikTok":"#25F4EE","X (Twitter)":"#60A5FA","Facebook":"#4B8FE4","Threads":"#E8EAED"};
  const PICONS  = {"Instagram":"instagram","YouTube":"youtube","TikTok":"music-2","X (Twitter)":"twitter","Facebook":"facebook","Threads":"at-sign"};
  function pColor(p) { return PCOLORS[p] || "var(--accent-primary)"; }
  function pIcon(p)  { return PICONS[p]  || "globe"; }
  function fmt(n) {
    if (!n) return "0";
    if (n >= 1000000) return (n/1000000).toFixed(2)+"M";
    if (n >= 1000)    return (n/1000).toFixed(1)+"K";
    return n.toLocaleString();
  }

  // Build hashtag stats for each scope (All + per-platform)
  const allPlatformStats = React.useMemo(function() {
    const scopes = ["All"].concat(allPlatforms);
    const result = {};
    scopes.forEach(function(scope) {
      const src = scope === "All"
        ? accountContents
        : accountContents.filter(function(c) { return c.platform === scope; });
      const map = {};
      src.forEach(function(item) {
        if (!item.hashtags || !Array.isArray(item.hashtags)) return;
        const eng = (item.likes||0)+(item.comments||0)+(item.shares||0)+(item.saves||0);
        item.hashtags.forEach(function(tag) {
          const clean = tag.trim().toLowerCase();
          if (!clean) return;
          if (!map[clean]) {
            map[clean] = { tag: clean.startsWith("#") ? clean : "#"+clean,
              contentCount:0, impressions:0, reach:0, engagement:0,
              likes:0, comments:0, shares:0, saves:0, pset: new Set() };
          }
          map[clean].contentCount += 1;
          map[clean].impressions  += item.impressions||0;
          map[clean].reach        += item.reach||0;
          map[clean].engagement   += eng;
          map[clean].likes        += item.likes||0;
          map[clean].comments     += item.comments||0;
          map[clean].shares       += item.shares||0;
          map[clean].saves        += item.saves||0;
          if (item.platform) map[clean].pset.add(item.platform);
        });
      });
      result[scope] = Object.values(map).map(function(h) {
        return Object.assign({}, h, {
          platforms: Array.from(h.pset),
          avgImp: h.contentCount > 0 ? Math.round(h.impressions/h.contentCount) : 0,
          avgEr:  h.reach > 0 ? ((h.engagement/h.reach)*100).toFixed(2) : "0.00"
        });
      }).sort(function(a,b) { return b.impressions - a.impressions; });
    });
    return result;
  }, [accountContents, allPlatforms]);

  const activeStats = React.useMemo(function() {
    return allPlatformStats[activePlatform] || [];
  }, [allPlatformStats, activePlatform]);

  const displayStats = React.useMemo(function() {
    const filtered = activeStats.filter(function(h) {
      return h.tag.toLowerCase().includes(searchHashtag.toLowerCase());
    });
    return filtered.slice().sort(function(a,b) {
      if (hashtagSortBy === "reach")         return b.reach - a.reach;
      if (hashtagSortBy === "engagement")    return b.engagement - a.engagement;
      if (hashtagSortBy === "contentCount")  return b.contentCount - a.contentCount;
      if (hashtagSortBy === "avgEr")         return parseFloat(b.avgEr) - parseFloat(a.avgEr);
      if (hashtagSortBy === "avgImpressions") return b.avgImp - a.avgImp;
      if (hashtagSortBy === "alphabetical")  return a.tag.localeCompare(b.tag);
      return b.impressions - a.impressions;
    });
  }, [activeStats, searchHashtag, hashtagSortBy]);

  const top3 = React.useMemo(function() {
    return activeStats.slice().sort(function(a,b) { return b.avgImp - a.avgImp; }).slice(0, 3);
  }, [activeStats]);

  const scopeColor = activePlatform === "All" ? "var(--accent-primary)" : pColor(activePlatform);
  const scopeIcon  = activePlatform === "All" ? "hash" : pIcon(activePlatform);

  return (
    <div className="page-container">

      <div className="page-header">
        <div>
          <h1 className="page-title">{activeAccount.name} — Hashtag Studio</h1>
          <p className="page-subtitle">Analyze hashtag performance per platform or across all platforms combined</p>
        </div>
      </div>

      {/* ── PLATFORM TABS ─────────────────────────────────────────────────── */}
      <div style={{ display:"flex", alignItems:"center", gap:"0.5rem", marginBottom:"2rem", flexWrap:"wrap" }}>
        {["All"].concat(allPlatforms).map(function(plat) {
          const isActive = activePlatform === plat;
          const c  = plat === "All" ? "var(--accent-primary)" : pColor(plat);
          const ic = plat === "All" ? "layers" : pIcon(plat);
          const count = (allPlatformStats[plat] || []).length;
          return (
            <button key={plat}
              onClick={function() { setActivePlatform(plat); setSearchHashtag(""); }}
              style={{
                display:"inline-flex", alignItems:"center", gap:"0.5rem",
                padding:"0.5rem 1rem", borderRadius:"var(--radius-sm)",
                cursor:"pointer", fontSize:"0.85rem",
                fontWeight: isActive ? 700 : 500,
                border: isActive ? "1px solid "+c+"70" : "1px solid var(--border-color)",
                background: isActive ? c+"18" : "rgba(255,255,255,0.03)",
                color: isActive ? c : "var(--text-muted)",
                boxShadow: isActive ? "0 0 12px "+c+"20" : "none",
                transition:"all 0.2s ease"
              }}>
              <i data-lucide={ic} style={{ width:"13px", height:"13px", flexShrink:0 }}></i>
              {plat}
              <span style={{
                fontSize:"0.7rem", fontWeight:700,
                padding:"0.1rem 0.4rem", borderRadius:"10px",
                background: isActive ? c+"25" : "rgba(255,255,255,0.06)",
                color: isActive ? c : "var(--text-subtle)"
              }}>{count}</span>
            </button>
          );
        })}
      </div>

      {/* ── SCOPE SUMMARY STRIP ───────────────────────────────────────────── */}
      {activeStats.length > 0 && (
        <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fit,minmax(150px,1fr))", gap:"0.85rem", marginBottom:"2rem" }}>
          {[
            { label:"Unique Hashtags",   value:""+activeStats.length,
              color:scopeColor },
            { label:"Total Uses",
              value:fmt(activeStats.reduce(function(s,h){return s+h.contentCount;},0)),
              color:"var(--accent-cyan)" },
            { label:"Total Impressions",
              value:fmt(activeStats.reduce(function(s,h){return s+h.impressions;},0)),
              color:"var(--accent-cyan)" },
            { label:"Total Engagement",
              value:fmt(activeStats.reduce(function(s,h){return s+h.engagement;},0)),
              color:"var(--accent-emerald)" },
            { label:"Best Avg Views",
              value: top3[0] ? fmt(top3[0].avgImp) : "-",
              color:"#F59E0B" },
          ].map(function(k, i) {
            return (
              <div key={i} style={{ padding:"0.85rem 1rem", borderRadius:"var(--radius-md)",
                background:"rgba(7,9,15,0.6)", border:"1px solid var(--border-color)",
                position:"relative", overflow:"hidden" }}>
                <div style={{ position:"absolute", top:0, left:0, right:0, height:"2px",
                  background:"linear-gradient(90deg,"+k.color+","+k.color+"44)" }}></div>
                <div style={{ fontSize:"0.68rem", color:"var(--text-subtle)", textTransform:"uppercase",
                  letterSpacing:"0.05em", fontWeight:700, marginBottom:"0.35rem" }}>{k.label}</div>
                <div style={{ fontSize:"1.25rem", fontWeight:800, fontFamily:"var(--font-heading)",
                  color:k.color, lineHeight:1 }}>{k.value}</div>
              </div>
            );
          })}
        </div>
      )}

      {/* ── TOP 3 CARDS ───────────────────────────────────────────────────── */}
      {top3.length > 0 && (
        <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fit,minmax(300px,1fr))", gap:"1.25rem", marginBottom:"2.5rem" }}>
          {top3.map(function(hashtag, index) {
            const bgs  = ["linear-gradient(135deg,rgba(34,197,94,0.15),rgba(59,130,246,0.15))","linear-gradient(135deg,rgba(168,85,247,0.15),rgba(59,130,246,0.15))","linear-gradient(135deg,rgba(244,63,94,0.15),rgba(249,115,22,0.15))"];
            const bds  = ["2px solid rgba(34,197,94,0.4)","2px solid rgba(168,85,247,0.4)","2px solid rgba(244,63,94,0.4)"];
            const bBg  = ["linear-gradient(135deg,#22C55E,#3B82F6)","linear-gradient(135deg,#A855F7,#3B82F6)","linear-gradient(135deg,#F43F5E,#F97316)"];
            const iBg  = ["linear-gradient(135deg,#22C55E,#16A34A)","linear-gradient(135deg,#A855F7,#7C3AED)","linear-gradient(135deg,#F43F5E,#DC2626)"];
            return (
              <div key={hashtag.tag} style={{ background:bgs[index], borderRadius:"var(--radius-md)",
                border:bds[index], padding:"1.75rem", position:"relative", overflow:"hidden",
                backdropFilter:"blur(10px)" }}>
                <div style={{ position:"absolute", top:"-8px", left:"15px", background:bBg[index],
                  color:"#fff", padding:"0.35rem 0.75rem", borderRadius:"var(--radius-sm)",
                  fontSize:"0.75rem", fontWeight:700, letterSpacing:"0.05em", textTransform:"uppercase" }}>
                  #{index+1} Top Hashtag
                </div>
                <div style={{ width:"56px", height:"56px", borderRadius:"12px", background:iBg[index],
                  display:"flex", alignItems:"center", justifyContent:"center",
                  fontWeight:800, color:"#fff", fontSize:"1.8rem", marginBottom:"1rem", marginTop:"0.5rem" }}>
                  {index+1}
                </div>
                <h3 style={{ fontSize:"1.25rem", fontWeight:700, marginBottom:"0.5rem", color:"#fff", wordBreak:"break-word" }}>
                  {hashtag.tag}
                </h3>
                {activePlatform === "All" && hashtag.platforms.length > 0 && (
                  <div style={{ display:"flex", gap:"0.3rem", flexWrap:"wrap", marginBottom:"0.85rem" }}>
                    {hashtag.platforms.map(function(p) {
                      return (
                        <span key={p} style={{ display:"inline-flex", alignItems:"center", gap:"0.25rem",
                          fontSize:"0.7rem", fontWeight:600, padding:"0.15rem 0.45rem",
                          borderRadius:"var(--radius-full)", background:"rgba(255,255,255,0.1)",
                          color:"rgba(255,255,255,0.8)" }}>
                          <i data-lucide={pIcon(p)} style={{ width:"9px", height:"9px" }}></i>{p}
                        </span>
                      );
                    })}
                  </div>
                )}
                <div style={{ marginBottom:"1.25rem" }}>
                  <div style={{ fontSize:"0.85rem", color:"rgba(255,255,255,0.7)", marginBottom:"0.35rem",
                    textTransform:"uppercase", letterSpacing:"0.05em", fontWeight:600 }}>Avg Views per Post</div>
                  <div style={{ fontSize:"2rem", fontWeight:800, background:bBg[index],
                    WebkitBackgroundClip:"text", WebkitTextFillColor:"transparent", backgroundClip:"text" }}>
                    {hashtag.avgImp.toLocaleString()}
                  </div>
                </div>
                <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr 1fr", gap:"0.75rem",
                  paddingTop:"1rem", borderTop:"1px solid rgba(255,255,255,0.1)" }}>
                  {[
                    { l:"Total Views", v:fmt(hashtag.impressions) },
                    { l:"Posts",       v:""+hashtag.contentCount  },
                    { l:"Avg ER",      v:hashtag.avgEr+"%"        },
                  ].map(function(m) {
                    return (
                      <div key={m.l}>
                        <div style={{ fontSize:"0.7rem", color:"rgba(255,255,255,0.6)", marginBottom:"0.2rem",
                          textTransform:"uppercase", letterSpacing:"0.04em" }}>{m.l}</div>
                        <div style={{ fontSize:"1rem", fontWeight:700 }}>{m.v}</div>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      )}

      {/* ── HASHTAG TABLE ─────────────────────────────────────────────────── */}
      <div className="glass-card" style={{ padding:"1.5rem" }}>

        {/* Table controls */}
        <div style={{ display:"flex", justifyContent:"space-between", alignItems:"flex-start",
          marginBottom:"1.25rem", gap:"1rem", flexWrap:"wrap" }}>
          <div style={{ display:"flex", alignItems:"center", gap:"0.65rem" }}>
            <div style={{ width:"28px", height:"28px", borderRadius:"8px",
              background:scopeColor+"18", border:"1px solid "+scopeColor+"30",
              display:"flex", alignItems:"center", justifyContent:"center" }}>
              <i data-lucide={scopeIcon} style={{ width:"13px", height:"13px", color:scopeColor }}></i>
            </div>
            <div>
              <div style={{ fontSize:"1rem", fontWeight:700, color:"var(--text-main)" }}>
                {activePlatform === "All" ? "All Platforms" : activePlatform} — Hashtag Performance Table
              </div>
              {activePlatform !== "All" && (
                <div style={{ fontSize:"0.78rem", color:"var(--text-muted)", marginTop:"0.1rem" }}>
                  Only content from <strong style={{ color:scopeColor }}>{activePlatform}</strong>
                </div>
              )}
            </div>
            <span style={{ fontSize:"0.75rem", color:"var(--text-muted)", background:"rgba(255,255,255,0.05)",
              padding:"0.2rem 0.55rem", borderRadius:"var(--radius-full)", border:"1px solid var(--border-color)" }}>
              {displayStats.length} tag{displayStats.length !== 1 ? "s" : ""}
            </span>
          </div>
          <div style={{ display:"flex", gap:"0.65rem", alignItems:"center", flexWrap:"wrap" }}>
            <div style={{ position:"relative" }}>
              <i data-lucide="search" style={{ position:"absolute", left:"0.65rem", top:"50%",
                transform:"translateY(-50%)", width:"13px", height:"13px",
                color:"var(--text-subtle)", pointerEvents:"none" }}></i>
              <input type="text" className="form-input" placeholder="Search hashtag..."
                value={searchHashtag}
                onChange={function(e) { setSearchHashtag(e.target.value); }}
                style={{ paddingLeft:"2rem", width:"170px", minHeight:"36px", fontSize:"0.85rem" }} />
            </div>
            <select className="form-select" value={hashtagSortBy}
              onChange={function(e) { setHashtagSortBy(e.target.value); }}
              style={{ width:"auto", minHeight:"36px", fontSize:"0.85rem", border:"1.5px solid var(--accent-cyan)" }}>
              <option value="impressions">Total Impressions</option>
              <option value="reach">Total Reach</option>
              <option value="engagement">Total Engagement</option>
              <option value="contentCount">Post Count</option>
              <option value="avgEr">Avg ER %</option>
              <option value="avgImpressions">Avg Views / Post</option>
              <option value="alphabetical">Alphabetical (A-Z)</option>
            </select>
          </div>
        </div>

        {/* Table */}
        <div style={{ overflowX:"auto" }}>
          <table className="custom-table">
            <thead>
              <tr>
                <th>#</th>
                <th>Hashtag</th>
                {activePlatform === "All" && <th>Platforms</th>}
                <th>Posts</th>
                <th style={{ color:"var(--accent-cyan)" }}>Total Views</th>
                <th>Total Reach</th>
                <th style={{ color:"var(--accent-emerald)" }}>Total Eng.</th>
                <th style={{ color:"#FB7185" }}>Likes</th>
                <th style={{ color:"#A78BFA" }}>Comments</th>
                <th style={{ color:"#22D3EE" }}>Shares</th>
                <th style={{ color:"#34D399" }}>Saves</th>
                <th style={{ color:"#F59E0B" }}>Avg Views/Post</th>
                <th style={{ color:"var(--accent-primary)" }}>Avg ER %</th>
              </tr>
            </thead>
            <tbody>
              {displayStats.length === 0 && (
                <tr>
                  <td colSpan={activePlatform === "All" ? 13 : 12}
                    style={{ textAlign:"center", padding:"2.5rem", color:"var(--text-muted)" }}>
                    {searchHashtag ? "No hashtags match \""+searchHashtag+"\"" : "No hashtag data for "+activePlatform}
                  </td>
                </tr>
              )}
              {displayStats.map(function(h, idx) {
                const isTop = idx === 0;
                return (
                  <tr key={h.tag} style={isTop ? { background:scopeColor+"08" } : {}}>
                    <td style={{ fontWeight:700, color:isTop ? scopeColor : "var(--text-subtle)", fontSize:"0.8rem" }}>
                      {isTop ? "Best" : "#"+(idx+1)}
                    </td>
                    <td>
                      <span className="chip" style={{ background:"rgba(139,92,246,0.12)", color:"var(--accent-primary-light)",
                        border:"1px solid rgba(139,92,246,0.25)", fontSize:"0.82rem", padding:"0.25rem 0.65rem" }}>
                        {h.tag}
                      </span>
                    </td>
                    {activePlatform === "All" && (
                      <td>
                        <div style={{ display:"flex", gap:"0.25rem", flexWrap:"wrap" }}>
                          {h.platforms.map(function(p) {
                            return (
                              <span key={p} style={{ display:"inline-flex", alignItems:"center", gap:"0.2rem",
                                fontSize:"0.7rem", padding:"0.12rem 0.4rem", borderRadius:"var(--radius-full)",
                                background:pColor(p)+"15", border:"1px solid "+pColor(p)+"30",
                                color:pColor(p), fontWeight:600, whiteSpace:"nowrap" }}>
                                <i data-lucide={pIcon(p)} style={{ width:"9px", height:"9px", flexShrink:0 }}></i>{p}
                              </span>
                            );
                          })}
                        </div>
                      </td>
                    )}
                    <td style={{ fontWeight:600, color:"var(--text-secondary)" }}>{h.contentCount}</td>
                    <td style={{ fontWeight:700, color:"var(--accent-cyan)" }}>{fmt(h.impressions)}</td>
                    <td style={{ color:"var(--text-secondary)" }}>{fmt(h.reach)}</td>
                    <td style={{ fontWeight:700, color:"var(--accent-emerald)" }}>{fmt(h.engagement)}</td>
                    <td style={{ color:"#FB7185", fontSize:"0.82rem" }}>{fmt(h.likes)}</td>
                    <td style={{ color:"#A78BFA", fontSize:"0.82rem" }}>{fmt(h.comments)}</td>
                    <td style={{ color:"#22D3EE", fontSize:"0.82rem" }}>{fmt(h.shares)}</td>
                    <td style={{ color:"#34D399", fontSize:"0.82rem" }}>{fmt(h.saves)}</td>
                    <td style={{ fontWeight:700, color:"#F59E0B" }}>{fmt(h.avgImp)}</td>
                    <td style={{ fontWeight:700, color:"var(--accent-primary)" }}>{h.avgEr}%</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        {/* Quick platform switcher (shown on All view) */}
        {activePlatform === "All" && allPlatforms.length > 1 && displayStats.length > 0 && (
          <div style={{ marginTop:"1.5rem", paddingTop:"1.25rem", borderTop:"1px solid var(--border-subtle)" }}>
            <div style={{ fontSize:"0.75rem", color:"var(--text-muted)", fontWeight:700, textTransform:"uppercase",
              letterSpacing:"0.05em", marginBottom:"0.85rem" }}>View by Platform</div>
            <div style={{ display:"flex", gap:"0.6rem", flexWrap:"wrap" }}>
              {allPlatforms.map(function(p) {
                const pCount = (allPlatformStats[p] || []).length;
                const c = pColor(p);
                return (
                  <button key={p}
                    onClick={function() { setActivePlatform(p); setSearchHashtag(""); }}
                    style={{ display:"inline-flex", alignItems:"center", gap:"0.45rem",
                      padding:"0.45rem 0.85rem", borderRadius:"var(--radius-sm)",
                      border:"1px solid "+c+"30", background:c+"0C",
                      cursor:"pointer", transition:"all 0.2s", color:c, fontSize:"0.82rem", fontWeight:600 }}>
                    <i data-lucide={pIcon(p)} style={{ width:"12px", height:"12px" }}></i>
                    {p}
                    <span style={{ fontSize:"0.72rem", fontWeight:800, color:"var(--text-muted)" }}>{pCount} tags</span>
                    <i data-lucide="arrow-right" style={{ width:"10px", height:"10px", color:"var(--text-subtle)" }}></i>
                  </button>
                );
              })}
            </div>
          </div>
        )}
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
              <option value="desc">High to Low (Z-A)</option>
              <option value="asc">Low to High (A-Z)</option>
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


// Report Summary Page - Professional Deep Analytics
// ReportSummaryPage v4 — with Account Brief Vault
function ReportSummaryPage() {
  const { activeAccount, contents, editAccount, canEdit } = React.useContext(VaultContext);

  // ── Account Brief state ────────────────────────────────────────────────────
  const [briefOpen,    setBriefOpen]    = React.useState(false);
  const [briefSaving,  setBriefSaving]  = React.useState(false);
  const [briefSaved,   setBriefSaved]   = React.useState(false);

  // Draft fields (separate from saved so user can cancel)
  const [draftNiche,    setDraftNiche]    = React.useState("");
  const [draftGoals,    setDraftGoals]    = React.useState("");
  const [draftAudience, setDraftAudience] = React.useState("");
  const [draftTone,     setDraftTone]     = React.useState("");
  const [draftPillars,  setDraftPillars]  = React.useState("");
  const [draftContext,  setDraftContext]  = React.useState("");

  // ── AI Advisor state ────────────────────────────────────────────────────────
  const [aiKey,        setAiKey]        = React.useState(function(){ return localStorage.getItem("sv_gemini_key") || ""; });
  const [aiKeyVisible, setAiKeyVisible] = React.useState(false);
  const [aiLoading,    setAiLoading]    = React.useState(false);
  const [aiOutput,     setAiOutput]     = React.useState("");
  const [aiError,      setAiError]      = React.useState("");
  const [aiKeySaved,   setAiKeySaved]   = React.useState(false);

  function saveAiKey(val) {
    setAiKey(val);
    if (val.trim()) {
      localStorage.setItem("sv_gemini_key", val.trim());
      setAiKeySaved(true);
      setTimeout(function(){ setAiKeySaved(false); }, 1800);
    } else {
      localStorage.removeItem("sv_gemini_key");
    }
  }

  async function generateAiAnalysis(combined, platformData, contentTypeData, subjectData, brief, fmt, fmtFull, fmtDate, calcEr, pct) {
    var key = aiKey.trim();
    if (!key) { setAiError("Please enter your Gemini API key first."); return; }

    setAiLoading(true); setAiOutput(""); setAiError("");

    var ctx = "=== ACCOUNT: " + activeAccount.name + " ===\n";
    if (brief.niche)    ctx += "Niche/Industry: " + brief.niche + "\n";
    if (brief.goals)    ctx += "Goals: " + brief.goals + "\n";
    if (brief.audience) ctx += "Target Audience: " + brief.audience + "\n";
    if (brief.tone)     ctx += "Content Tone: " + brief.tone + "\n";
    if (brief.pillars)  ctx += "Content Pillars: " + brief.pillars + "\n";
    if (brief.context)  ctx += "Context: " + brief.context + "\n";
    ctx += "\n=== OVERALL METRICS ===\n";
    ctx += "Posts: " + combined.count + " | Impressions: " + fmtFull(combined.imp) + " | Reach: " + fmtFull(combined.reach) + "\n";
    ctx += "Engagement: " + fmtFull(combined.eng) + " (Likes " + fmtFull(combined.lik) + " / Comments " + fmtFull(combined.com) + " / Shares " + fmtFull(combined.sha) + " / Saves " + fmtFull(combined.sav) + ")\n";
    ctx += "ER: " + combined.er + "% | Imp/Reach: " + combined.ir + "x | Avg views/post: " + fmtFull(combined.avgImp) + "\n";
    ctx += "Likes " + combined.likPct + "% / Comments " + combined.comPct + "% / Shares " + combined.shaPct + "% / Saves " + combined.savPct + "%\n";
    ctx += "Health — Danger: " + combined.impTiers.danger + " | Warning: " + combined.impTiers.warning + " | Safe: " + combined.impTiers.safe + " | Good: " + combined.impTiers.good + " | FYP: " + combined.impTiers.fyp + "\n";
    ctx += "Period: " + fmtDate(combined.dateFrom) + " to " + fmtDate(combined.dateTo) + "\n";

    platformData.forEach(function(pl) {
      ctx += "\nPLATFORM " + pl.name + ": " + pl.posts.length + " posts | " + fmtFull(pl.imp) + " views (" + pl.impShare + "%) | ER " + pl.er + "% | Avg " + fmtFull(pl.avgImp) + " views/post\n";
      ctx += "  Mix: Likes " + pl.likPct + "% Shares " + pl.shaPct + "% Saves " + pl.savPct + "%\n";
      if (pl.topPost) { var tpe=(pl.topPost.likes||0)+(pl.topPost.comments||0)+(pl.topPost.shares||0)+(pl.topPost.saves||0); ctx += "  Best: \"" + (pl.topPost.caption||"").substring(0,70) + "\" — " + fmtFull(pl.topPost.impressions||0) + " views ER " + calcEr(tpe,pl.topPost.reach||0) + "%\n"; }
      if (pl.worstPost && pl.worstPost.id!==(pl.topPost||{}).id) ctx += "  Worst: \"" + (pl.worstPost.caption||"").substring(0,50) + "\" — " + fmtFull(pl.worstPost.impressions||0) + " views\n";
    });

    if (contentTypeData.length > 0) {
      ctx += "\nCONTENT TYPES:\n";
      contentTypeData.forEach(function(ct){ ctx += "  " + ct.type + ": " + ct.posts.length + " posts | avg " + fmtFull(ct.avgImp) + " views | ER " + ct.er + "%\n"; });
    }

    if (subjectData.length > 0) {
      ctx += "\nSUBJECTS:\n";
      subjectData.forEach(function(s){ ctx += "  " + s.name + ": " + s.count + " appearances | " + fmtFull(s.imp) + " impressions (" + pct(s.imp,combined.imp||1) + "%)\n"; });
    }

    if (combined.topContent.length > 0) {
      ctx += "\nTOP 3 POSTS:\n";
      combined.topContent.forEach(function(c,i){ var e=(c.likes||0)+(c.comments||0)+(c.shares||0)+(c.saves||0); ctx += "  #"+(i+1)+" ("+c.platform+" "+fmtDate(c.uploadDate)+"): \"" + (c.caption||"").substring(0,70) + "\" — " + fmtFull(c.impressions||0) + " views ER "+calcEr(e,c.reach||0)+"%\n"; if(c.hashtags&&c.hashtags.length) ctx+="    Tags: "+c.hashtags.join(" ")+"\n"; });
    }
    if (combined.bottomContent.length > 0) {
      ctx += "\nLOWEST POSTS:\n";
      combined.bottomContent.forEach(function(c,i){ ctx += "  #"+(i+1)+" ("+c.platform+"): \"" + (c.caption||"").substring(0,50) + "\" — " + fmtFull(c.impressions||0) + " views\n"; });
    }

    var prompt = "You are a senior social media strategist and growth consultant. You have deep expertise in platform algorithms, content strategy, audience psychology, and creator monetisation.\n\nAnalyse the following social media account data and provide a comprehensive, actionable, and intelligent growth strategy. Go beyond summarising numbers — diagnose WHY metrics are what they are, identify hidden patterns, compare against industry benchmarks, and prescribe specific prioritised actions.\n\nStructure your response exactly as:\n1. **Diagnostic Summary** — Account health and trajectory based on data\n2. **Algorithm Health Analysis** — Content distribution health, impression tiers, and what signals the algorithm is reading\n3. **Platform-Specific Strategy** — For each platform: what is working, what is broken, the single highest-impact change\n4. **Content & Engagement Gaps** — Specific weaknesses in engagement mix and content format\n5. **Top 3 Growth Levers** — Highest-ROI actions for next 30 days, ranked by impact\n6. **Audience & Niche Alignment** — How well content aligns with stated goals and audience, what to adjust\n7. **30/60/90 Day Roadmap** — Specific milestones and actions\n\nBe direct, specific, data-driven. Reference actual numbers. No generic advice.\n\nACCOUNT DATA:\n" + ctx;

    try {
      var resp = await fetch("https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key="+key, {
        method:"POST", headers:{"Content-Type":"application/json"},
        body:JSON.stringify({ contents:[{parts:[{text:prompt}]}], generationConfig:{temperature:0.7,maxOutputTokens:2048} })
      });
      if (!resp.ok) {
        var errData = await resp.json().catch(function(){return {};});
        var msg = (errData.error&&errData.error.message) ? errData.error.message : "API error "+resp.status;
        if (resp.status===400) msg="Invalid request. Check your Gemini API key.";
        if (resp.status===403) msg="API key not authorised. Enable Gemini API in Google Cloud Console.";
        if (resp.status===429) msg="Rate limit hit. Wait a moment and try again.";
        throw new Error(msg);
      }
      var data = await resp.json();
      var text = data.candidates&&data.candidates[0]&&data.candidates[0].content&&data.candidates[0].content.parts&&data.candidates[0].content.parts[0]&&data.candidates[0].content.parts[0].text;
      if (!text) throw new Error("Empty response from Gemini. Please try again.");
      setAiOutput(text);
    } catch(err) { setAiError(err.message||"Unexpected error. Please try again."); }
    setAiLoading(false);
  }

  if (!activeAccount) {
    return (
      <div className="page-container">
        <div className="glass-card" style={{ textAlign:"center", padding:"4rem 2rem" }}>
          <p style={{ color:"var(--text-muted)" }}>No active account selected.</p>
        </div>
      </div>
    );
  }

  // Resolved brief — what is actually saved on the account object
  var brief = {
    niche:    activeAccount.brief_niche    || "",
    goals:    activeAccount.brief_goals    || "",
    audience: activeAccount.brief_audience || "",
    tone:     activeAccount.brief_tone     || "",
    pillars:  activeAccount.brief_pillars  || "",
    context:  activeAccount.brief_context  || ""
  };

  var hasBrief = brief.niche || brief.goals || brief.audience || brief.tone || brief.pillars || brief.context;

  // Open brief editor – pre-fill drafts from saved values
  function openBrief() {
    setDraftNiche(brief.niche);
    setDraftGoals(brief.goals);
    setDraftAudience(brief.audience);
    setDraftTone(brief.tone);
    setDraftPillars(brief.pillars);
    setDraftContext(brief.context);
    setBriefOpen(true);
  }

  function cancelBrief() { setBriefOpen(false); }

  async function saveBrief() {
    setBriefSaving(true);
    await editAccount(activeAccount.id, {
      brief_niche:    draftNiche.trim(),
      brief_goals:    draftGoals.trim(),
      brief_audience: draftAudience.trim(),
      brief_tone:     draftTone.trim(),
      brief_pillars:  draftPillars.trim(),
      brief_context:  draftContext.trim()
    });
    setBriefSaving(false);
    setBriefSaved(true);
    setBriefOpen(false);
    setTimeout(function() { setBriefSaved(false); }, 2500);
  }


  // ── Data helpers ─────────────────────────────────────────────────────────────
  function fmt(n) {
    if (!n && n !== 0) return "0";
    if (n >= 1000000) return (n/1000000).toFixed(2)+"M";
    if (n >= 1000)    return (n/1000).toFixed(1)+"K";
    return n.toLocaleString();
  }
  function fmtFull(n) { return (n||0).toLocaleString(); }
  function fmtDate(d) {
    if (!d) return "-";
    var p = d.split("-");
    return new Date(+p[0],+p[1]-1,+p[2]).toLocaleDateString("en-US",{month:"short",day:"numeric",year:"numeric"});
  }
  function pct(num,den)     { return den>0 ? ((num/den)*100).toFixed(1) : "0.0"; }
  function calcEr(eng,reach){ return reach>0 ? ((eng/reach)*100).toFixed(2) : "0.00"; }
  function calcIr(imp,reach){ return reach>0 ? (imp/reach).toFixed(2) : "0.00"; }
  // ── Impression health tier ─────────────────────────────────────────────────
  // danger=0, warning=1-99, safe=100-999, good=1000-9999, fyp=10000+
  function impHealth(n) {
    if (!n || n === 0) return { tier:"danger",  label:"Danger",  color:"#F43F5E", cls:"imp-badge-danger",  desc:"Zero impressions — critically dangerous for account health" };
    if (n < 100)       return { tier:"warning", label:"Warning", color:"#F59E0B", cls:"imp-badge-warning", desc:"Below 100 impressions — not good, needs immediate attention" };
    if (n < 1000)      return { tier:"safe",    label:"Safe",    color:"#34D399", cls:"imp-badge-safe",    desc:"100–999 impressions — safe range" };
    if (n < 10000)     return { tier:"good",    label:"Good",    color:"#22D3EE", cls:"imp-badge-good",    desc:"1K–9.9K impressions — good performance" };
    return                    { tier:"fyp",     label:"FYP",     color:"#A78BFA", cls:"imp-badge-fyp",     desc:"10K+ impressions — excellent, FYP / viral reach" };
  }

  function erGrade(er) {
    var v = parseFloat(er);
    if (v>=6) return {label:"Exceptional",      color:"#10B981",bg:"rgba(16,185,129,0.12)", border:"rgba(16,185,129,0.3)"};
    if (v>=3) return {label:"Above Average",    color:"#34D399",bg:"rgba(52,211,153,0.12)", border:"rgba(52,211,153,0.3)"};
    if (v>=1) return {label:"Industry Standard",color:"#F59E0B",bg:"rgba(245,158,11,0.12)", border:"rgba(245,158,11,0.3)"};
    return         {label:"Needs Improvement",  color:"#F43F5E",bg:"rgba(244,63,94,0.12)",  border:"rgba(244,63,94,0.3)"};
  }
  var PCOLORS = {"Instagram":"#E1306C","YouTube":"#FF4444","TikTok":"#25F4EE","X (Twitter)":"#60A5FA","Facebook":"#4B8FE4","Threads":"#E8EAED"};
  var PICONS  = {"Instagram":"instagram","YouTube":"youtube","TikTok":"music-2","X (Twitter)":"twitter","Facebook":"facebook","Threads":"at-sign"};
  function pColor(p){ return PCOLORS[p]||"var(--accent-primary)"; }
  function pIcon(p) { return PICONS[p] ||"globe"; }


  const accountContents = React.useMemo(
    function() { return contents.filter(function(c){return c.accountId===activeAccount.id;}); },
    [contents,activeAccount.id]
  );

  // ── Combined metrics ─────────────────────────────────────────────────────────
  var combined = React.useMemo(function() {
    var imp=0,reach=0,lik=0,com=0,sha=0,sav=0;
    accountContents.forEach(function(c){
      imp+=c.impressions||0; reach+=c.reach||0;
      lik+=c.likes||0; com+=c.comments||0; sha+=c.shares||0; sav+=c.saves||0;
    });
    var eng=lik+com+sha+sav; var n=accountContents.length;
    var dates=accountContents.map(function(c){return c.uploadDate;}).filter(Boolean).sort();
    var statuses={};
    accountContents.forEach(function(c){var s=c.status||"Unknown";statuses[s]=(statuses[s]||0)+1;});
    var sorted=accountContents.slice().sort(function(a,b){return (b.impressions||0)-(a.impressions||0);});
    return {
      imp,reach,lik,com,sha,sav,eng,
      er:calcEr(eng,reach), ir:calcIr(imp,reach),
      avgImp:n>0?Math.round(imp/n):0, avgReach:n>0?Math.round(reach/n):0, avgEng:n>0?Math.round(eng/n):0,
      likPct:pct(lik,eng), comPct:pct(com,eng), shaPct:pct(sha,eng), savPct:pct(sav,eng),
      count:n, dateFrom:dates[0]||null, dateTo:dates[dates.length-1]||null,
      statuses, topContent:sorted.slice(0,3), bottomContent:sorted.slice(-2).reverse(),
      allSorted:sorted,
      impTiers: {
        danger:  sorted.filter(function(c){ return !c.impressions || c.impressions===0; }).length,
        warning: sorted.filter(function(c){ return c.impressions>0 && c.impressions<100; }).length,
        safe:    sorted.filter(function(c){ return c.impressions>=100 && c.impressions<1000; }).length,
        good:    sorted.filter(function(c){ return c.impressions>=1000 && c.impressions<10000; }).length,
        fyp:     sorted.filter(function(c){ return c.impressions>=10000; }).length
      }
    };
  }, [accountContents]);

  // ── Per-platform metrics ─────────────────────────────────────────────────────
  var platformData = React.useMemo(function() {
    var map={};
    accountContents.forEach(function(c){
      var p=c.platform||"Unknown";
      if (!map[p]) map[p]={name:p,posts:[],imp:0,reach:0,lik:0,com:0,sha:0,sav:0};
      map[p].posts.push(c);
      map[p].imp+=c.impressions||0; map[p].reach+=c.reach||0;
      map[p].lik+=c.likes||0; map[p].com+=c.comments||0; map[p].sha+=c.shares||0; map[p].sav+=c.saves||0;
    });
    return Object.values(map).map(function(p){
      var eng=p.lik+p.com+p.sha+p.sav; var n=p.posts.length;
      var sp=p.posts.slice().sort(function(a,b){return (b.impressions||0)-(a.impressions||0);});
      var ds=p.posts.map(function(x){return x.uploadDate;}).filter(Boolean).sort();
      return Object.assign({},p,{
        eng,er:calcEr(eng,p.reach),ir:calcIr(p.imp,p.reach),
        avgImp:n>0?Math.round(p.imp/n):0, avgReach:n>0?Math.round(p.reach/n):0, avgEng:n>0?Math.round(eng/n):0,
        likPct:pct(p.lik,eng), comPct:pct(p.com,eng), shaPct:pct(p.sha,eng), savPct:pct(p.sav,eng),
        impShare:pct(p.imp,combined.imp||1), reachShare:pct(p.reach,combined.reach||1), engShare:pct(eng,combined.eng||1),
        topPost:sp[0]||null, worstPost:sp[sp.length-1]||null, sortedPosts:sp, dates:ds
      });
    }).sort(function(a,b){return b.imp-a.imp;});
  }, [accountContents,combined]);


  // ── Content type + subject metrics ────────────────────────────────────────────
  var contentTypeData = React.useMemo(function() {
    var map={};
    accountContents.forEach(function(c){
      var t=c.contentType||"Standard Post";
      if (!map[t]) map[t]={type:t,posts:[],imp:0,reach:0,eng:0};
      map[t].posts.push(c); map[t].imp+=c.impressions||0; map[t].reach+=c.reach||0;
      map[t].eng+=(c.likes||0)+(c.comments||0)+(c.shares||0)+(c.saves||0);
    });
    return Object.values(map).map(function(t){
      var n=t.posts.length;
      return Object.assign({},t,{avgImp:n>0?Math.round(t.imp/n):0,avgEng:n>0?Math.round(t.eng/n):0,er:calcEr(t.eng,t.reach)});
    }).sort(function(a,b){return b.avgImp-a.avgImp;});
  }, [accountContents,combined]);

  var subjectData = React.useMemo(function() {
    var map={};
    accountContents.forEach(function(c){
      (c.subjects||[]).forEach(function(s){
        if (!map[s]) map[s]={name:s,count:0,imp:0,eng:0};
        map[s].count+=1; map[s].imp+=c.impressions||0;
        map[s].eng+=(c.likes||0)+(c.comments||0)+(c.shares||0)+(c.saves||0);
      });
    });
    return Object.values(map).sort(function(a,b){return b.imp-a.imp;});
  }, [accountContents]);

  var today    = new Date().toLocaleDateString("en-US",{month:"long",day:"numeric",year:"numeric"});
  var erC      = erGrade(combined.er);
  var bestPl   = platformData[0]||null;
  var worstPl  = platformData.length>1 ? platformData[platformData.length-1] : null;
  var bestCt   = contentTypeData[0]||null;
  var worstCt  = contentTypeData.length>1 ? contentTypeData[contentTypeData.length-1] : null;


  // ── DOCX Export ──────────────────────────────────────────────────────────────
  function handleExportDocx() {
    if (!window.docx) { alert("DOCX library not loaded. Please check your internet connection and reload."); return; }
    var Document=window.docx.Document,Packer=window.docx.Packer,Paragraph=window.docx.Paragraph,
        TextRun=window.docx.TextRun,AlignmentType=window.docx.AlignmentType,BorderStyle=window.docx.BorderStyle;
    function H(text,color){ return new Paragraph({children:[new TextRun({text,bold:true,size:26,color:color||"7C3AED"})],spacing:{before:400,after:150},border:{bottom:{style:BorderStyle.SINGLE,size:4,color:"2D3748"}}}); }
    function P(text){ return new Paragraph({children:[new TextRun({text,size:20,color:"C9D1D9"})],spacing:{after:140}}); }
    function B(label,value){ return new Paragraph({children:[new TextRun({text:label+": ",bold:true,size:20,color:"F0F6FC"}),new TextRun({text:value,size:20,color:"9CA3AF"})],bullet:{level:0},spacing:{after:80}}); }
    var children=[
      new Paragraph({children:[new TextRun({text:"PERFORMANCE ANALYTICS REPORT",bold:true,size:44,color:"7C3AED"})],alignment:AlignmentType.CENTER,spacing:{after:100}}),
      new Paragraph({children:[new TextRun({text:activeAccount.name,bold:true,size:30,color:"06B6D4"})],alignment:AlignmentType.CENTER,spacing:{after:80}}),
      new Paragraph({children:[new TextRun({text:"Generated: "+today+" | Period: "+fmtDate(combined.dateFrom)+" to "+fmtDate(combined.dateTo),size:18,color:"6B7280",italics:true})],alignment:AlignmentType.CENTER,spacing:{after:300}}),
    ];
    if (hasBrief) {
      children.push(H("ACCOUNT BRIEF","06B6D4"));
      if (brief.niche)    children.push(B("Niche / Industry", brief.niche));
      if (brief.goals)    children.push(B("Goals", brief.goals));
      if (brief.audience) children.push(B("Target Audience", brief.audience));
      if (brief.tone)     children.push(B("Content Tone", brief.tone));
      if (brief.pillars)  children.push(B("Content Pillars", brief.pillars));
      if (brief.context)  children.push(B("Additional Context", brief.context));
    }
    children.push(H("COMBINED KEY METRICS","10B981"));
    children.push(B("Total Impressions",fmtFull(combined.imp)));
    children.push(B("Total Reach",fmtFull(combined.reach)));
    children.push(B("Total Engagement",fmtFull(combined.eng)));
    children.push(B("Likes / Comments / Shares / Saves",fmtFull(combined.lik)+" / "+fmtFull(combined.com)+" / "+fmtFull(combined.sha)+" / "+fmtFull(combined.sav)));
    children.push(B("Overall ER%",combined.er+"% - "+erC.label));
    children.push(B("Avg Views/Post",fmtFull(combined.avgImp)));
    platformData.forEach(function(pl,idx){
      var erI=erGrade(pl.er);
      children.push(H("PLATFORM "+(idx+1)+": "+pl.name.toUpperCase(),"8B5CF6"));
      children.push(B("Posts",""+pl.posts.length));
      children.push(B("Impressions",fmtFull(pl.imp)+" ("+pl.impShare+"% of total)"));
      children.push(B("ER%",pl.er+"% - "+erI.label));
      children.push(B("Avg Views/Post",fmtFull(pl.avgImp)));
      pl.sortedPosts.forEach(function(post,pi){
        var pe=(post.likes||0)+(post.comments||0)+(post.shares||0)+(post.saves||0);
        children.push(B("#"+(pi+1)+" ("+fmtDate(post.uploadDate)+")",(post.caption||"").substring(0,60)+"... | "+fmtFull(post.impressions||0)+" views | ER "+calcEr(pe,post.reach||0)+"%"));
      });
    });
    children.push(H("STRATEGIC RECOMMENDATIONS","34D399"));
    buildRecs().forEach(function(rec){ children.push(P(rec.num+". "+rec.title+": "+rec.body)); });
    children.push(new Paragraph({children:[new TextRun({text:"Generated by SocioVault on "+today,size:16,color:"484F58",italics:true})],alignment:AlignmentType.CENTER,spacing:{before:600}}));
    var doc=new Document({sections:[{properties:{},children}]});
    Packer.toBlob(doc).then(function(blob){
      var url=URL.createObjectURL(blob),a=document.createElement("a");
      a.href=url; a.download=(activeAccount.name.replace(/\s+/g,"_"))+"_Report_"+(new Date().toISOString().slice(0,10))+".docx";
      a.click(); URL.revokeObjectURL(url);
    });
  }


  // ── Context-aware recommendations builder ─────────────────────────────────────
  // Uses brief fields to personalise every recommendation
  function buildRecs() {
    var recs = [];
    var nicheCtx    = brief.niche    ? " for a "+brief.niche+" account" : "";
    var goalCtx     = brief.goals    ? " Aligns with your stated goal: \""+brief.goals+"\"." : "";
    var audCtx      = brief.audience ? " Your target audience is "+brief.audience+"." : "";
    var toneCtx     = brief.tone     ? " Match the "+brief.tone+" tone your audience expects." : "";
    var pillarCtx   = brief.pillars  ? " Content pillars to lean into: "+brief.pillars+"." : "";

    var recCounter = 1;

    // 0 — Impression health alert (injected first if danger/warning posts exist)
    var dangerCount  = combined.impTiers.danger;
    var warningCount = combined.impTiers.warning;
    if (dangerCount > 0 || warningCount > 0) {
      var healthColor = dangerCount > 0 ? "#F43F5E" : "#F59E0B";
      var healthTitle = dangerCount > 0
        ? "CRITICAL: "+dangerCount+" Post"+(dangerCount>1?"s":""+" With Zero Impressions — Account Health at Risk")
        : "WARNING: "+warningCount+" Post"+(warningCount>1?"s":"")+" Below 100 Impressions";
      var healthBody = "";
      if (dangerCount > 0) {
        healthBody += dangerCount+" post"+(dangerCount>1?"s":"")+" have zero impressions. "
          +"This is dangerous for your account — the algorithm interprets dead content as a signal of poor account quality, which suppresses distribution of future posts. "
          +"Immediate actions: (1) delete or archive zero-impression posts, (2) check if they violate platform guidelines, (3) audit posting times and hashtag sets.";
      }
      if (warningCount > 0) {
        if (healthBody) healthBody += " Additionally, ";
        healthBody += warningCount+" post"+(warningCount>1?"s":"")+" have under 100 impressions. "
          +"This indicates the content was not distributed by the algorithm. Likely causes: wrong posting time, oversaturated hashtags, weak hook, or engagement bait. "
          +"Review and reschedule with improved captions.";
      }
      if (brief.audience) healthBody += " Ensure content resonates directly with "+brief.audience+".";
      recs.push({ num:""+recCounter, color:healthColor, title:healthTitle, body:healthBody, urgent:true });
      recCounter++;
    }
    // Best platform
    recs.push({num:""+recCounter, color:"var(--accent-emerald)",
      title:"Scale "+( bestPl ? bestPl.name : "Your Best Platform"),
      body: bestPl
        ? bestPl.name+" drives "+bestPl.impShare+"% of impressions"+nicheCtx+" with ER "+bestPl.er+"%. Increase posting frequency to at least "+(bestPl.posts.length*2)+" posts/month."+toneCtx+goalCtx
        : "Identify the platform generating most reach and concentrate content production there."
    });
    recCounter++;

    // Underperforming platform
    if (worstPl) {
      recs.push({num:""+recCounter, color:"#F43F5E",
        title:worstPl.name+" Is Underperforming — Fix or Reallocate",
        body: worstPl.name+" delivers only "+worstPl.impShare+"% of impressions with ER "+worstPl.er+"% (account avg "+combined.er+"%)."+audCtx
          +(parseFloat(worstPl.er)<1
            ? " Engagement is critically low. Run a 4-week content experiment with 3 new formats before deciding to cut this platform."
            : " Test posting time, caption structure, and hashtag sets tailored specifically for "+worstPl.name+"'s algorithm.")
      });
      recCounter++;
    }

    // Engagement rate
    recs.push({num:""+recCounter, color: parseFloat(combined.er)<3?"#F43F5E":"var(--accent-emerald)",
      title: parseFloat(combined.er)<3 ? "Engagement Rate ("+combined.er+"%) Needs Improvement" : "Sustain "+combined.er+"% ER",
      body: parseFloat(combined.er)<3
        ? "Current ER is "+erC.label+". Tactics"+nicheCtx+": (1) end every caption with a direct question"+audCtx+", (2) use interactive features like polls and stickers in the first 3 seconds, (3) reply to comments within 1 hour to trigger algorithm re-distribution."+goalCtx
        : "ER "+combined.er+"% ("+erC.label+"). Maintain with rotating interactive formats."+goalCtx+" Watch for drops below 3% as an early warning signal."
    });
    recCounter++;

    // Content type
    if (bestCt) {
      recs.push({num:""+recCounter, color:"#F59E0B",
        title: bestCt.type+" Content Outperforms — Scale It",
        body: bestCt.type+" averages "+fmt(bestCt.avgImp)+" views/post"
          +(worstCt ? " vs "+fmt(worstCt.avgImp)+" for "+worstCt.type+" (your weakest format)" : "")
          +". Shift at least 60% of content production to "+bestCt.type+"."+pillarCtx+toneCtx
      });
      recCounter++;
    }

    // Saves / algo signal
    recs.push({num:""+recCounter, color:"#06B6D4",
      title: parseFloat(combined.savPct)<15 ? "Boost Save Rate ("+combined.savPct+"%) — Strongest Algo Signal" : "Saves Are Strong — Compound It",
      body: parseFloat(combined.savPct)<15
        ? "Save rate is "+combined.savPct+"%. Saves are the highest-value algorithmic signal. Create evergreen reference content"+nicheCtx+": step-by-step guides, checklists, templates, and resources people bookmark."+audCtx+" Add 'Save this for later' as a CTA."
        : "Save rate "+combined.savPct+"% is strong. Convert top-saved posts into series, carousels, or short-form repost editions to extend their life."
    });
    recCounter++;

    // Brief goal rec
    if (brief.goals) {
      recs.push({num:""+recCounter, color:"var(--accent-primary)",
        title:"Align Analytics to Your Goal",
        body: "Your stated goal is: \""+brief.goals+"\". "
          +(combined.count<10
            ? "With only "+combined.count+" posts, focus on publishing frequency before optimising individual metrics."
            : "With "+combined.count+" posts of data, the next lever is testing: run 2-week experiments changing one variable at a time — posting time, caption format, or hook style — and measure ER change.")
          +(brief.audience ? " Consistently frame content around the needs and pain points of "+brief.audience+"." : "")
      });
      recCounter++;
    }

    // Performance gap rec
    if (combined.allSorted.length >= 2) {
      var topImp   = combined.allSorted[0].impressions||0;
      var lowImp   = combined.allSorted[combined.allSorted.length-1].impressions||0;
      var gapMulti = lowImp>0 ? Math.round(topImp/lowImp) : null;
      recs.push({num:""+recCounter, color:"var(--accent-primary)",
        title:"Close the "+( gapMulti ? gapMulti+"x" : "Large")+" Performance Gap",
        body: "Your best post earned "+fmt(topImp)+" views; your lowest earned "+fmt(lowImp)
          +". Audit the structural differences: hook length, posting time, hashtag volume, caption CTA, and thumbnail."+pillarCtx
          +" Apply the top-post formula to your next 3 pieces and measure the delta."
      });
    }

    return recs;
  }


  // ── RENDER ────────────────────────────────────────────────────────────────────
  return (
    <div className="page-container">

      {/* ══ ACCOUNT BRIEF VAULT ════════════════════════════════════════════════ */}
      <div style={{
        marginBottom:"1.75rem", borderRadius:"var(--radius-lg)",
        border: hasBrief ? "1px solid rgba(139,92,246,0.35)" : "1px dashed rgba(255,255,255,0.12)",
        background: hasBrief ? "linear-gradient(135deg,rgba(139,92,246,0.07),rgba(6,182,212,0.04))" : "rgba(255,255,255,0.02)",
        overflow:"hidden"
      }}>
        {/* Header row */}
        <div style={{ display:"flex", alignItems:"center", justifyContent:"space-between", padding:"1rem 1.5rem", borderBottom: hasBrief ? "1px solid rgba(139,92,246,0.15)" : "none", gap:"1rem", flexWrap:"wrap" }}>
          <div style={{ display:"flex", alignItems:"center", gap:"0.75rem" }}>
            <div style={{ width:"36px", height:"36px", borderRadius:"10px", background:"linear-gradient(135deg,#8B5CF6,#06B6D4)", display:"flex", alignItems:"center", justifyContent:"center", flexShrink:0, boxShadow:"0 4px 12px rgba(139,92,246,0.3)" }}>
              <i data-lucide="book-open" style={{ width:"16px", height:"16px", color:"#fff" }}></i>
            </div>
            <div>
              <div style={{ fontWeight:700, fontSize:"0.95rem", color:"var(--text-main)" }}>Account Brief</div>
              <div style={{ fontSize:"0.78rem", color:"var(--text-muted)", marginTop:"0.1rem" }}>
                {hasBrief ? "Your account context is set — recommendations are personalised to this brief." : "Describe your account goals, niche, and audience to get personalised recommendations."}
              </div>
            </div>
            {briefSaved && (
              <span style={{ display:"inline-flex", alignItems:"center", gap:"0.35rem", fontSize:"0.75rem", fontWeight:700, color:"#10B981", padding:"0.2rem 0.6rem", borderRadius:"var(--radius-full)", background:"rgba(16,185,129,0.12)", border:"1px solid rgba(16,185,129,0.3)" }}>
                <i data-lucide="check" style={{ width:"11px", height:"11px" }}></i> Saved
              </span>
            )}
          </div>
          {canEdit && (
            <button onClick={briefOpen ? cancelBrief : openBrief} className="btn btn-secondary btn-sm"
              style={{ gap:"0.4rem" }}>
              <i data-lucide={briefOpen ? "x" : (hasBrief ? "pencil" : "plus")} style={{ width:"13px", height:"13px" }}></i>
              {briefOpen ? "Cancel" : (hasBrief ? "Edit Brief" : "Add Brief")}
            </button>
          )}
        </div>


        {/* SAVED BRIEF DISPLAY */}
        {hasBrief && !briefOpen && (
          <div style={{ padding:"1.25rem 1.5rem", display:"grid", gridTemplateColumns:"repeat(auto-fit,minmax(260px,1fr))", gap:"1rem" }}>
            {[
              { icon:"tag",          label:"Niche / Industry",    value:brief.niche    },
              { icon:"target",       label:"Goals",               value:brief.goals    },
              { icon:"users",        label:"Target Audience",     value:brief.audience },
              { icon:"mic-2",        label:"Content Tone",        value:brief.tone     },
              { icon:"columns",      label:"Content Pillars",     value:brief.pillars  },
              { icon:"message-square", label:"Additional Context",value:brief.context  },
            ].filter(function(f){ return !!f.value; }).map(function(field) {
              return (
                <div key={field.label} style={{ display:"flex", gap:"0.65rem", alignItems:"flex-start" }}>
                  <div style={{ width:"28px", height:"28px", borderRadius:"7px", background:"rgba(139,92,246,0.1)", border:"1px solid rgba(139,92,246,0.2)", display:"flex", alignItems:"center", justifyContent:"center", flexShrink:0, marginTop:"0.1rem" }}>
                    <i data-lucide={field.icon} style={{ width:"12px", height:"12px", color:"var(--accent-primary)" }}></i>
                  </div>
                  <div>
                    <div style={{ fontSize:"0.7rem", fontWeight:700, color:"var(--text-subtle)", textTransform:"uppercase", letterSpacing:"0.05em", marginBottom:"0.2rem" }}>{field.label}</div>
                    <div style={{ fontSize:"0.85rem", color:"var(--text-secondary)", lineHeight:1.55 }}>{field.value}</div>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* EMPTY STATE */}
        {!hasBrief && !briefOpen && (
          <div style={{ padding:"1.5rem", display:"flex", alignItems:"center", justifyContent:"center", gap:"1.25rem", flexWrap:"wrap" }}>
            {["Niche / Industry","Goals","Target Audience","Content Tone","Content Pillars"].map(function(label) {
              return (
                <div key={label} style={{ display:"flex", alignItems:"center", gap:"0.4rem", fontSize:"0.78rem", color:"var(--text-subtle)" }}>
                  <div style={{ width:"6px", height:"6px", borderRadius:"50%", background:"rgba(139,92,246,0.3)" }}></div>
                  {label}
                </div>
              );
            })}
            {canEdit && (
              <button onClick={openBrief} className="btn btn-primary btn-sm" style={{ gap:"0.4rem" }}>
                <i data-lucide="plus" style={{ width:"12px", height:"12px" }}></i>
                Fill in Brief
              </button>
            )}
          </div>
        )}


        {/* BRIEF EDIT FORM */}
        {briefOpen && (
          <div style={{ padding:"1.5rem", borderTop:"1px solid rgba(139,92,246,0.15)" }}>
            <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fit,minmax(280px,1fr))", gap:"1.1rem", marginBottom:"1.25rem" }}>

              {/* Niche */}
              <div className="form-group" style={{ margin:0 }}>
                <label className="form-label" style={{ display:"flex", alignItems:"center", gap:"0.4rem" }}>
                  <i data-lucide="tag" style={{ width:"11px", height:"11px" }}></i> Niche / Industry
                </label>
                <input type="text" className="form-input" placeholder="e.g. Tech & Lifestyle, Beauty, Finance..."
                  value={draftNiche} onChange={function(e){ setDraftNiche(e.target.value); }} />
              </div>

              {/* Target Audience */}
              <div className="form-group" style={{ margin:0 }}>
                <label className="form-label" style={{ display:"flex", alignItems:"center", gap:"0.4rem" }}>
                  <i data-lucide="users" style={{ width:"11px", height:"11px" }}></i> Target Audience
                </label>
                <input type="text" className="form-input" placeholder="e.g. Tech-savvy millennials aged 22-35..."
                  value={draftAudience} onChange={function(e){ setDraftAudience(e.target.value); }} />
              </div>

              {/* Content Tone */}
              <div className="form-group" style={{ margin:0 }}>
                <label className="form-label" style={{ display:"flex", alignItems:"center", gap:"0.4rem" }}>
                  <i data-lucide="mic-2" style={{ width:"11px", height:"11px" }}></i> Content Tone
                </label>
                <input type="text" className="form-input" placeholder="e.g. Educational, Entertaining, Professional..."
                  value={draftTone} onChange={function(e){ setDraftTone(e.target.value); }} />
              </div>

              {/* Content Pillars */}
              <div className="form-group" style={{ margin:0 }}>
                <label className="form-label" style={{ display:"flex", alignItems:"center", gap:"0.4rem" }}>
                  <i data-lucide="columns" style={{ width:"11px", height:"11px" }}></i> Content Pillars
                </label>
                <input type="text" className="form-input" placeholder="e.g. Product reviews, tutorials, behind-the-scenes..."
                  value={draftPillars} onChange={function(e){ setDraftPillars(e.target.value); }} />
              </div>

              {/* Goals — full width */}
              <div className="form-group" style={{ margin:0, gridColumn:"1 / -1" }}>
                <label className="form-label" style={{ display:"flex", alignItems:"center", gap:"0.4rem" }}>
                  <i data-lucide="target" style={{ width:"11px", height:"11px" }}></i> Goals & Objectives
                </label>
                <textarea className="form-textarea" rows={3}
                  placeholder="e.g. Grow to 500K followers by Dec 2026. Increase brand deal revenue by 40%. Build authority in AI & gadget space..."
                  value={draftGoals} onChange={function(e){ setDraftGoals(e.target.value); }}
                  style={{ resize:"vertical", minHeight:"72px" }} />
              </div>

              {/* Additional Context — full width */}
              <div className="form-group" style={{ margin:0, gridColumn:"1 / -1" }}>
                <label className="form-label" style={{ display:"flex", alignItems:"center", gap:"0.4rem" }}>
                  <i data-lucide="message-square" style={{ width:"11px", height:"11px" }}></i> Additional Context
                  <span style={{ fontSize:"0.68rem", color:"var(--text-subtle)", fontWeight:400, marginLeft:"0.25rem" }}>(optional — anything else the analysis should know)</span>
                </label>
                <textarea className="form-textarea" rows={3}
                  placeholder="e.g. This account monetises through brand sponsorships and affiliate links. Main competitors are XYZ. We have a team of 3 editors..."
                  value={draftContext} onChange={function(e){ setDraftContext(e.target.value); }}
                  style={{ resize:"vertical", minHeight:"72px" }} />
              </div>

            </div>

            {/* Form actions */}
            <div style={{ display:"flex", gap:"0.75rem", alignItems:"center", justifyContent:"flex-end" }}>
              <button onClick={cancelBrief} className="btn btn-secondary btn-sm">Cancel</button>
              <button onClick={saveBrief} className="btn btn-primary btn-sm" disabled={briefSaving}
                style={{ gap:"0.45rem", minWidth:"110px" }}>
                {briefSaving
                  ? <><i data-lucide="loader-2" style={{ width:"13px", height:"13px" }}></i> Saving...</>
                  : <><i data-lucide="save" style={{ width:"13px", height:"13px" }}></i> Save Brief</>
                }
              </button>
            </div>
          </div>
        )}

      </div>
      {/* ══ END ACCOUNT BRIEF ══════════════════════════════════════════════════ */}


      {/* ══ REPORT HERO ═══════════════════════════════════════════════════════ */}
      <div className="report-hero">
        <div className="report-hero-content">
          <div className="report-title-eyebrow">
            <i data-lucide="file-bar-chart" style={{ width:"12px", height:"12px" }}></i>
            Performance Analytics Report
          </div>
          <h1 className="report-hero-title">{activeAccount.name}</h1>
          <p style={{ color:"var(--text-muted)", fontSize:"0.9rem", marginBottom:"0.5rem" }}>
            {activeAccount.description || "Social Media Analytics Overview"}
            {hasBrief && brief.niche && (
              <span style={{ marginLeft:"0.5rem", fontSize:"0.78rem", color:"var(--accent-primary-light)", background:"rgba(139,92,246,0.1)", padding:"0.1rem 0.5rem", borderRadius:"var(--radius-full)", border:"1px solid rgba(139,92,246,0.2)" }}>
                {brief.niche}
              </span>
            )}
          </p>
          <div className="report-hero-meta">
            {[
              { icon:"calendar",          text: combined.dateFrom ? fmtDate(combined.dateFrom)+" - "+fmtDate(combined.dateTo) : "All-Time" },
              { icon:"layers",            text: combined.count+" content pieces" },
              { icon:"monitor-smartphone",text: platformData.length+" platform"+(platformData.length!==1?"s":"") },
              { icon:"clock",             text: "Generated "+today },
            ].map(function(m){ return (
              <div key={m.icon} className="report-hero-meta-item">
                <i data-lucide={m.icon} style={{ width:"13px", height:"13px" }}></i>
                <span>{m.text}</span>
              </div>
            ); })}
          </div>
        </div>
        <div style={{ position:"absolute", top:"1.5rem", right:"1.5rem", display:"flex", gap:"0.6rem" }}>
          <button className="btn btn-export btn-sm" onClick={handleExportDocx}>
            <i data-lucide="download" style={{ width:"13px", height:"13px" }}></i> Export DOCX
          </button>
          <button className="btn btn-print btn-sm" onClick={function(){ window.print(); }}>
            <i data-lucide="printer" style={{ width:"13px", height:"13px" }}></i> Print
          </button>
        </div>
      </div>

      {/* ══ KPI STRIP ════════════════════════════════════════════════════════ */}
      <div className="report-kpi-grid">
        {[
          { label:"Total Impressions", value:fmt(combined.imp),    sub:fmtFull(combined.imp)+" views",  color:"#06B6D4", g:"linear-gradient(90deg,#06B6D4,#22D3EE)" },
          { label:"Total Reach",       value:fmt(combined.reach),  sub:"unique viewers",                 color:"#8B5CF6", g:"linear-gradient(90deg,#8B5CF6,#A78BFA)" },
          { label:"Total Engagement",  value:fmt(combined.eng),    sub:"likes+comments+shares+saves",   color:"#10B981", g:"linear-gradient(90deg,#10B981,#34D399)" },
          { label:"Engagement Rate",   value:combined.er+"%",      sub:erC.label,                        color:erC.color, g:"linear-gradient(90deg,"+erC.color+","+erC.color+"88)" },
          { label:"Avg Views/Post",    value:fmt(combined.avgImp), sub:"per content piece",              color:"#F59E0B", g:"linear-gradient(90deg,#F59E0B,#FCD34D)" },
          { label:"Imp/Reach Ratio",   value:combined.ir+"x",     sub:parseFloat(combined.ir)>1.5?"Strong retention":"Single-view", color:"#EC4899", g:"linear-gradient(90deg,#EC4899,#F9A8D4)" },
        ].map(function(k,i){ return (
          <div key={i} className="report-kpi-card">
            <div className="kpi-accent-bar" style={{ background:k.g }}></div>
            <div className="report-kpi-label">{k.label}</div>
            <div className="report-kpi-value" style={{ color:k.color }}>{k.value}</div>
            <div className="report-kpi-sub">{k.sub}</div>
          </div>
        ); })}
      </div>


      {/* ══ EXECUTIVE SUMMARY ════════════════════════════════════════════════ */}
      <div className="report-section" style={{ marginBottom:"1.5rem" }}>
        <div className="report-section-head">
          <div className="report-section-icon" style={{ background:"rgba(6,182,212,0.1)", border:"1px solid rgba(6,182,212,0.2)" }}>
            <i data-lucide="clipboard-list" style={{ width:"16px", height:"16px", color:"#06B6D4" }}></i>
          </div>
          <div className="report-section-label">Executive Summary</div>
        </div>
        <div className="report-section-body insight-prose">
          <p>
            <strong>{activeAccount.name}</strong> has published{" "}
            <span className="metric-callout metric-callout-primary">{combined.count} pieces</span> across{" "}
            <span className="metric-callout metric-callout-cyan">{platformData.length} platform{platformData.length!==1?"s":""}</span>,
            accumulating <span className="metric-callout metric-callout-cyan">{fmtFull(combined.imp)} impressions</span> and reaching{" "}
            <span className="metric-callout metric-callout-primary">{fmtFull(combined.reach)} unique viewers</span>.
            Impression-to-reach ratio <strong>{combined.ir}x</strong> —{" "}
            {parseFloat(combined.ir)>1.5 ? "strong content retention; viewers return multiple times." : "typical single-view pattern; focus on hook strength to extend dwell time."}
          </p>
          <p>
            Total engagement:{" "}
            <span className="metric-callout metric-callout-emerald">{fmtFull(combined.eng)}</span> — ER{" "}
            <span className="metric-callout" style={{ background:erC.bg, color:erC.color, border:"1px solid "+erC.border }}>{combined.er}%</span>{" "}
            (<strong style={{ color:erC.color }}>{erC.label}</strong>).
            Per-post average: <strong>{fmtFull(combined.avgImp)}</strong> views, <strong>{fmtFull(combined.avgEng)}</strong> interactions.
          </p>
          {hasBrief && (
            <p style={{ padding:"0.75rem 1rem", background:"rgba(139,92,246,0.06)", borderRadius:"var(--radius-sm)", border:"1px solid rgba(139,92,246,0.15)", marginBottom:0 }}>
              <strong style={{ color:"var(--accent-primary-light)" }}>Brief context: </strong>
              {brief.niche ? "This is a "+brief.niche+" account" : "This account"}{brief.audience ? " targeting "+brief.audience : ""}.
              {brief.goals ? " Goal: "+brief.goals+"." : ""}
              {brief.tone  ? " The content tone is "+brief.tone+"." : ""}
              {" "}The recommendations below are tailored to this brief.
            </p>
          )}
          {combined.allSorted.length >= 2 && (
            <p style={{ padding:"0.75rem 1rem", background:"rgba(244,63,94,0.06)", borderRadius:"var(--radius-sm)", border:"1px solid rgba(244,63,94,0.15)", marginBottom:0 }}>
              <strong style={{ color:"#F43F5E" }}>Performance gap: </strong>
              Top post earned <strong style={{ color:"#06B6D4" }}>{fmt(combined.allSorted[0].impressions||0)}</strong> views vs lowest at <strong style={{ color:"#F43F5E" }}>{fmt(combined.allSorted[combined.allSorted.length-1].impressions||0)}</strong> —{" "}
              a <strong style={{ color:"#F43F5E" }}>
                {combined.allSorted[combined.allSorted.length-1].impressions>0
                  ? Math.round((combined.allSorted[0].impressions||0)/(combined.allSorted[combined.allSorted.length-1].impressions||1))+"x"
                  : "large"}
              </strong> difference. Analyse structural differences and apply top-post learnings to underperforming content.
            </p>
          )}
        </div>
      </div>


      {/* ══ ENGAGEMENT + STATUS ══════════════════════════════════════════════ */}
      <div className="report-two-col" style={{ marginBottom:"1.5rem" }}>

        <div className="report-section" style={{ marginBottom:0 }}>
          <div className="report-section-head">
            <div className="report-section-icon" style={{ background:"rgba(139,92,246,0.1)", border:"1px solid rgba(139,92,246,0.2)" }}>
              <i data-lucide="bar-chart-2" style={{ width:"16px", height:"16px", color:"var(--accent-primary)" }}></i>
            </div>
            <div className="report-section-label">Engagement Breakdown</div>
          </div>
          <div className="report-section-body">
            {[
              { label:"Likes",    icon:"heart",          v:combined.lik, p:combined.likPct, c:"#F43F5E", g:"linear-gradient(90deg,#F43F5E,#FB7185)" },
              { label:"Comments", icon:"message-circle", v:combined.com, p:combined.comPct, c:"#8B5CF6", g:"linear-gradient(90deg,#8B5CF6,#A78BFA)" },
              { label:"Shares",   icon:"repeat-2",       v:combined.sha, p:combined.shaPct, c:"#06B6D4", g:"linear-gradient(90deg,#06B6D4,#22D3EE)" },
              { label:"Saves",    icon:"bookmark",       v:combined.sav, p:combined.savPct, c:"#10B981", g:"linear-gradient(90deg,#10B981,#34D399)" },
            ].map(function(item){ return (
              <div key={item.label} className="engagement-bar-row">
                <div className="engagement-bar-label">
                  <i data-lucide={item.icon} style={{ width:"13px", height:"13px", color:item.c, flexShrink:0 }}></i>{item.label}
                </div>
                <div className="engagement-bar-track">
                  <div className="engagement-bar-fill" style={{ width:item.p+"%", background:item.g }}></div>
                </div>
                <div className="engagement-bar-value">{fmt(item.v)}</div>
                <div className="engagement-bar-pct">{item.p}%</div>
              </div>
            ); })}
            <div style={{ marginTop:"1rem", paddingTop:"0.85rem", borderTop:"1px solid var(--border-color)", display:"flex", justifyContent:"space-between", alignItems:"center" }}>
              <span style={{ fontSize:"0.78rem", color:"var(--text-muted)", fontWeight:700, textTransform:"uppercase", letterSpacing:"0.04em" }}>Total</span>
              <span style={{ fontSize:"1.2rem", fontWeight:800, fontFamily:"var(--font-heading)", color:"var(--accent-emerald)" }}>{fmtFull(combined.eng)}</span>
            </div>
            <div style={{ marginTop:"0.85rem", padding:"0.85rem 1rem", background:"rgba(244,63,94,0.05)", borderRadius:"var(--radius-sm)", border:"1px solid rgba(244,63,94,0.15)" }}>
              <p style={{ fontSize:"0.8rem", color:"var(--text-muted)", lineHeight:1.6, margin:0 }}>
                <strong style={{ color:"#F43F5E" }}>Weakest signal: </strong>
                {parseFloat(combined.savPct)<10
                  ? "Save rate ("+combined.savPct+"%) is low. Saves are the top algorithmic signal. Create more how-to and reference content."+(brief.pillars ? " Relevant pillars: "+brief.pillars+"." : "")
                  : parseFloat(combined.shaPct)<10
                    ? "Share rate ("+combined.shaPct+"%) is low. Use emotional hooks, surprising facts, or strong opinions to drive re-sharing."
                    : parseFloat(combined.comPct)<10
                      ? "Comment rate ("+combined.comPct+"%) is low. End every post with a direct open-ended question."+(brief.audience ? " Tailor the question to "+brief.audience+"." : "")
                      : "Engagement mix is balanced. Keep monitoring weekly for shifts."}
              </p>
            </div>
          </div>
        </div>

        <div className="report-section" style={{ marginBottom:0 }}>
          <div className="report-section-head">
            <div className="report-section-icon" style={{ background:"rgba(245,158,11,0.1)", border:"1px solid rgba(245,158,11,0.2)" }}>
              <i data-lucide="layout-list" style={{ width:"16px", height:"16px", color:"var(--accent-amber)" }}></i>
            </div>
            <div className="report-section-label">Content Status</div>
          </div>
          <div className="report-section-body">
            <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:"0.85rem", marginBottom:"1.25rem" }}>
              {[
                { key:"Uploaded",  label:"Published", color:"#10B981", bg:"linear-gradient(135deg,rgba(16,185,129,0.15),rgba(16,185,129,0.05))",  border:"rgba(16,185,129,0.3)",  icon:"check-circle" },
                { key:"Scheduled", label:"Scheduled", color:"#06B6D4", bg:"linear-gradient(135deg,rgba(6,182,212,0.15),rgba(6,182,212,0.05))",    border:"rgba(6,182,212,0.3)",   icon:"clock"        },
                { key:"Privated",  label:"Privated",  color:"#F59E0B", bg:"linear-gradient(135deg,rgba(245,158,11,0.15),rgba(245,158,11,0.05))",  border:"rgba(245,158,11,0.3)",  icon:"eye-off"      },
                { key:"Deleted",   label:"Archived",  color:"#F43F5E", bg:"linear-gradient(135deg,rgba(244,63,94,0.12),rgba(244,63,94,0.04))",    border:"rgba(244,63,94,0.25)",  icon:"archive"      },
              ].map(function(s){
                var count=combined.statuses[s.key]||0;
                if (!count) return null;
                return (
                  <div key={s.key} style={{ padding:"1rem", borderRadius:"var(--radius-md)", background:s.bg, border:"1px solid "+s.border }}>
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
              <div className="progress-bar-fill progress-bar-fill-emerald" style={{ width:pct(combined.statuses["Uploaded"]||0,combined.count)+"%" }}></div>
            </div>
            <div style={{ display:"flex", justifyContent:"space-between", marginTop:"0.35rem" }}>
              <span style={{ fontSize:"0.75rem", color:"var(--accent-emerald)" }}>{combined.statuses["Uploaded"]||0} published</span>
              <span style={{ fontSize:"0.75rem", color:"var(--text-muted)" }}>{combined.count} total</span>
            </div>
            <div style={{ marginTop:"1rem", padding:"0.85rem 1rem", background:erC.color+"0F", borderRadius:"var(--radius-sm)", border:"1px solid "+erC.color+"25" }}>
              <div style={{ fontSize:"0.72rem", textTransform:"uppercase", letterSpacing:"0.05em", color:"var(--text-subtle)", fontWeight:700, marginBottom:"0.3rem" }}>Overall ER Health</div>
              <div style={{ display:"flex", alignItems:"center", justifyContent:"space-between" }}>
                <span style={{ fontSize:"1.5rem", fontWeight:800, fontFamily:"var(--font-heading)", color:erC.color }}>{combined.er}%</span>
                <span style={{ padding:"0.25rem 0.65rem", borderRadius:"var(--radius-full)", background:erC.bg, border:"1px solid "+erC.border, fontSize:"0.75rem", fontWeight:700, color:erC.color }}>{erC.label}</span>
              </div>
            </div>
          </div>
        </div>
      </div>


      {/* ══ CROSS-PLATFORM RANKING ════════════════════════════════════════════ */}
      {platformData.length > 1 && (
        <div className="report-section" style={{ marginBottom:"1.5rem" }}>
          <div className="report-section-head">
            <div className="report-section-icon" style={{ background:"rgba(99,102,241,0.1)", border:"1px solid rgba(99,102,241,0.2)" }}>
              <i data-lucide="bar-chart-horizontal" style={{ width:"16px", height:"16px", color:"#6366F1" }}></i>
            </div>
            <div className="report-section-label">Cross-Platform Comparison</div>
          </div>
          <div className="report-section-body">
            <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fit,minmax(220px,1fr))", gap:"1rem", marginBottom:"1.25rem" }}>
              {["Impressions","Reach","Engagement","ER %"].map(function(metric){
                var sorted=platformData.slice().sort(function(a,b){
                  if (metric==="Impressions") return b.imp-a.imp;
                  if (metric==="Reach")       return b.reach-a.reach;
                  if (metric==="Engagement")  return b.eng-a.eng;
                  return parseFloat(b.er)-parseFloat(a.er);
                });
                var maxVal=sorted.length>0?(metric==="ER %"?parseFloat(sorted[0].er):(metric==="Impressions"?sorted[0].imp:metric==="Reach"?sorted[0].reach:sorted[0].eng)):1;
                return (
                  <div key={metric} style={{ padding:"1rem", borderRadius:"var(--radius-md)", background:"rgba(7,9,15,0.5)", border:"1px solid var(--border-color)" }}>
                    <div style={{ fontSize:"0.72rem", color:"var(--text-muted)", fontWeight:700, textTransform:"uppercase", letterSpacing:"0.05em", marginBottom:"0.85rem" }}>{metric} Ranking</div>
                    {sorted.map(function(pl, rank){
                      var val=metric==="ER %"?parseFloat(pl.er):(metric==="Impressions"?pl.imp:metric==="Reach"?pl.reach:pl.eng);
                      var disp=metric==="ER %"?pl.er+"%":fmt(val);
                      var barPct=maxVal>0?(val/maxVal)*100:0;
                      var c=pColor(pl.name);
                      var isLast=rank===sorted.length-1&&sorted.length>1;
                      return (
                        <div key={pl.name} style={{ marginBottom:"0.65rem" }}>
                          <div style={{ display:"flex", alignItems:"center", justifyContent:"space-between", marginBottom:"0.25rem" }}>
                            <div style={{ display:"flex", alignItems:"center", gap:"0.4rem" }}>
                              <span style={{ fontSize:"0.68rem", fontWeight:800, color:isLast?"#F43F5E":"var(--text-subtle)", width:"14px" }}>#{rank+1}</span>
                              <i data-lucide={pIcon(pl.name)} style={{ width:"11px", height:"11px", color:c }}></i>
                              <span style={{ fontSize:"0.78rem", fontWeight:600, color:isLast?"#F43F5E":"var(--text-secondary)" }}>{pl.name}</span>
                              {isLast && <span style={{ fontSize:"0.62rem", color:"#F43F5E", fontWeight:700 }}>Lowest</span>}
                            </div>
                            <span style={{ fontSize:"0.78rem", fontWeight:700, color:c }}>{disp}</span>
                          </div>
                          <div className="progress-bar-track">
                            <div className="progress-bar-fill" style={{ width:barPct+"%", background:"linear-gradient(90deg,"+c+","+c+"88)" }}></div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                );
              })}
            </div>
            {worstPl && (
              <div style={{ padding:"0.85rem 1rem", background:"rgba(244,63,94,0.06)", borderRadius:"var(--radius-sm)", border:"1px solid rgba(244,63,94,0.15)" }}>
                <p style={{ fontSize:"0.8rem", color:"var(--text-muted)", lineHeight:1.6, margin:0 }}>
                  <strong style={{ color:"#F43F5E" }}>Underperformer: </strong>
                  {worstPl.name} has the lowest impressions ({fmt(worstPl.imp)}, {worstPl.impShare}% of total) and ER {worstPl.er}%.
                  {parseFloat(worstPl.er)<parseFloat(combined.er)
                    ? " Test new content formats tailored to "+worstPl.name+"'s algorithm for 4 weeks before reallocating budget."
                    : " Volume is low but ER is healthy — consider increasing posting frequency here."}
                </p>
              </div>
            )}
          </div>
        </div>
      )}


      {/* ══ PER-PLATFORM DEEP ANALYSIS ═══════════════════════════════════════ */}
      {platformData.map(function(pl, plIdx){
        var color=pColor(pl.name); var erI=erGrade(pl.er);
        var isTop=plIdx===0; var isLow=plIdx===platformData.length-1&&platformData.length>1;
        return (
          <div key={pl.name} className="report-section" style={{ marginBottom:"1.5rem" }}>
            <div className="report-section-head" style={{ background:"linear-gradient(135deg,"+color+"10,"+color+"04)", borderBottom:"1px solid "+color+"20" }}>
              <div style={{ width:"36px", height:"36px", borderRadius:"10px", background:color+"18", border:"1px solid "+color+"35", display:"flex", alignItems:"center", justifyContent:"center", flexShrink:0 }}>
                <i data-lucide={pIcon(pl.name)} style={{ width:"16px", height:"16px", color:color }}></i>
              </div>
              <div style={{ flex:1 }}>
                <div style={{ display:"flex", alignItems:"center", gap:"0.65rem", flexWrap:"wrap" }}>
                  <span className="report-section-label" style={{ color:color }}>{pl.name}</span>
                  <span style={{ fontSize:"0.7rem", color:erI.color, fontWeight:700, padding:"0.15rem 0.5rem", borderRadius:"var(--radius-full)", background:erI.bg, border:"1px solid "+erI.border }}>ER {pl.er}% — {erI.label}</span>
                  {isTop && <span style={{ fontSize:"0.68rem", color:"#F59E0B", fontWeight:800, padding:"0.12rem 0.45rem", borderRadius:"var(--radius-full)", background:"rgba(245,158,11,0.12)", border:"1px solid rgba(245,158,11,0.3)" }}>Top Platform</span>}
                  {isLow && <span style={{ fontSize:"0.68rem", color:"#F43F5E", fontWeight:800, padding:"0.12rem 0.45rem", borderRadius:"var(--radius-full)", background:"rgba(244,63,94,0.12)", border:"1px solid rgba(244,63,94,0.3)" }}>Needs Attention</span>}
                </div>
                <div style={{ fontSize:"0.78rem", color:"var(--text-muted)", marginTop:"0.15rem" }}>
                  {pl.posts.length} post{pl.posts.length!==1?"s":""}{pl.dates.length?" | "+fmtDate(pl.dates[0])+" - "+fmtDate(pl.dates[pl.dates.length-1]):""}
                </div>
              </div>
              <div style={{ textAlign:"right", flexShrink:0 }}>
                <div style={{ fontSize:"1.4rem", fontWeight:900, fontFamily:"var(--font-heading)", color:color }}>{fmt(pl.imp)}</div>
                <div style={{ fontSize:"0.7rem", color:"var(--text-subtle)", textTransform:"uppercase", letterSpacing:"0.04em" }}>Impressions</div>
              </div>
            </div>
            <div className="report-section-body">
              {/* 8 KPI boxes */}
              <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fit,minmax(140px,1fr))", gap:"0.85rem", marginBottom:"1.5rem" }}>
                {[
                  { label:"Impressions",    value:fmt(pl.imp),      sub:pl.impShare+"% of total",   c:color },
                  { label:"Reach",          value:fmt(pl.reach),    sub:pl.reachShare+"% of total", c:"var(--accent-primary)" },
                  { label:"Engagement",     value:fmt(pl.eng),      sub:pl.engShare+"% of total",   c:"var(--accent-emerald)" },
                  { label:"Eng. Rate",      value:pl.er+"%",        sub:erI.label,                   c:erI.color },
                  { label:"Imp/Reach",      value:pl.ir+"x",       sub:parseFloat(pl.ir)>1.5?"Retained":"Single-view", c:"#EC4899" },
                  { label:"Avg Views/Post", value:fmt(pl.avgImp),   sub:"per post",                  c:"#F59E0B" },
                  { label:"Avg Reach/Post", value:fmt(pl.avgReach), sub:"per post",                  c:"var(--accent-primary)" },
                  { label:"Avg Eng/Post",   value:fmt(pl.avgEng),   sub:"per post",                  c:"var(--accent-emerald)" },
                ].map(function(k,ki){ return (
                  <div key={ki} style={{ padding:"0.85rem 1rem", borderRadius:"var(--radius-md)", background:"rgba(7,9,15,0.5)", border:"1px solid "+color+"18" }}>
                    <div style={{ fontSize:"0.68rem", color:"var(--text-subtle)", textTransform:"uppercase", letterSpacing:"0.05em", fontWeight:700, marginBottom:"0.4rem" }}>{k.label}</div>
                    <div style={{ fontSize:"1.15rem", fontWeight:800, fontFamily:"var(--font-heading)", color:k.c, lineHeight:1, marginBottom:"0.2rem" }}>{k.value}</div>
                    <div style={{ fontSize:"0.7rem", color:"var(--text-subtle)" }}>{k.sub}</div>
                  </div>
                ); })}
              </div>


              {/* Engagement mix + narrative */}
              <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fit,minmax(240px,1fr))", gap:"1.25rem", marginBottom:"1.5rem" }}>
                <div style={{ padding:"1.1rem 1.25rem", borderRadius:"var(--radius-md)", background:"rgba(7,9,15,0.4)", border:"1px solid "+color+"15" }}>
                  <div style={{ fontSize:"0.75rem", color:"var(--text-muted)", fontWeight:700, textTransform:"uppercase", letterSpacing:"0.05em", marginBottom:"1rem" }}>Engagement Mix</div>
                  {[
                    { label:"Likes",    icon:"heart",          v:pl.lik, p:pl.likPct, c:"#F43F5E", g:"linear-gradient(90deg,#F43F5E,#FB7185)" },
                    { label:"Comments", icon:"message-circle", v:pl.com, p:pl.comPct, c:"#8B5CF6", g:"linear-gradient(90deg,#8B5CF6,#A78BFA)" },
                    { label:"Shares",   icon:"repeat-2",       v:pl.sha, p:pl.shaPct, c:"#06B6D4", g:"linear-gradient(90deg,#06B6D4,#22D3EE)" },
                    { label:"Saves",    icon:"bookmark",       v:pl.sav, p:pl.savPct, c:"#10B981", g:"linear-gradient(90deg,#10B981,#34D399)" },
                  ].map(function(item){ return (
                    <div key={item.label} className="engagement-bar-row">
                      <div className="engagement-bar-label"><i data-lucide={item.icon} style={{ width:"13px", height:"13px", color:item.c, flexShrink:0 }}></i>{item.label}</div>
                      <div className="engagement-bar-track"><div className="engagement-bar-fill" style={{ width:item.p+"%", background:item.g }}></div></div>
                      <div className="engagement-bar-value">{fmt(item.v)}</div>
                      <div className="engagement-bar-pct">{item.p}%</div>
                    </div>
                  ); })}
                </div>
                <div style={{ padding:"1.1rem 1.25rem", borderRadius:"var(--radius-md)", background:"rgba(7,9,15,0.4)", border:"1px solid "+color+"15" }}>
                  <div style={{ fontSize:"0.75rem", color:"var(--text-muted)", fontWeight:700, textTransform:"uppercase", letterSpacing:"0.05em", marginBottom:"0.85rem" }}>Platform Analysis</div>
                  <div className="insight-prose" style={{ fontSize:"0.82rem" }}>
                    <p><strong style={{ color:color }}>{pl.name}</strong> contributes <strong>{pl.impShare}%</strong> of impressions and <strong>{pl.engShare}%</strong> of engagement.</p>
                    <p>{parseFloat(pl.er)>parseFloat(combined.er)
                      ? "ER "+pl.er+"% exceeds account average ("+combined.er+"%) — this platform gives the best return per view."
                      : "ER "+pl.er+"% is below account average ("+combined.er+"%). Review content format, caption length, posting times, and hashtags."}</p>
                    <p style={{ padding:"0.6rem 0.75rem", background:"rgba(244,63,94,0.06)", borderRadius:"var(--radius-sm)", border:"1px solid rgba(244,63,94,0.15)", marginBottom:0 }}>
                      <strong style={{ color:"#F43F5E" }}>Weakness: </strong>
                      {parseFloat(pl.savPct)<10
                        ? "Low save rate ("+pl.savPct+"%) on "+pl.name+". Add evergreen value — step-by-step guides and 'save for later' hooks."+(brief.pillars?" Tie into pillars: "+brief.pillars+"." : "")
                        : parseFloat(pl.shaPct)<10
                          ? "Low share rate ("+pl.shaPct+"%) on "+pl.name+". Shareable formats: opinion takes, surprising stats, relatable humour."
                          : "Comment rate ("+pl.comPct+"%) could improve. End every "+pl.name+" caption with a direct question."+(brief.audience?" Speak to "+brief.audience+"." : "")}
                    </p>
                  </div>
                </div>
              </div>

              {/* Best post + Worst post */}
              {pl.topPost && (
                <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:"1rem", marginBottom:"1.5rem" }}>
                  <div style={{ padding:"1.1rem 1.25rem", borderRadius:"var(--radius-md)", background:"linear-gradient(135deg,rgba(245,158,11,0.08),rgba(245,158,11,0.03))", border:"1px solid rgba(245,158,11,0.25)" }}>
                    <div style={{ display:"flex", alignItems:"center", gap:"0.5rem", marginBottom:"0.6rem" }}>
                      <i data-lucide="award" style={{ width:"14px", height:"14px", color:"#F59E0B" }}></i>
                      <span style={{ fontSize:"0.72rem", color:"#F59E0B", fontWeight:800, textTransform:"uppercase", letterSpacing:"0.05em" }}>Best Post on {pl.name}</span>
                    </div>
                    <p style={{ fontSize:"0.82rem", color:"var(--text-secondary)", lineHeight:1.5, marginBottom:"0.75rem" }}>"{(pl.topPost.caption||"").substring(0,90)}{pl.topPost.caption&&pl.topPost.caption.length>90?"...":""}"</p>
                    <div style={{ display:"grid", gridTemplateColumns:"repeat(3,1fr)", gap:"0.5rem" }}>
                      {[{l:"Views",v:fmt(pl.topPost.impressions||0),c:"var(--accent-cyan)"},{l:"Reach",v:fmt(pl.topPost.reach||0),c:"var(--text-main)"},{l:"ER",v:calcEr((pl.topPost.likes||0)+(pl.topPost.comments||0)+(pl.topPost.shares||0)+(pl.topPost.saves||0),pl.topPost.reach||0)+"%",c:erGrade(calcEr((pl.topPost.likes||0)+(pl.topPost.comments||0)+(pl.topPost.shares||0)+(pl.topPost.saves||0),pl.topPost.reach||0)).color}].map(function(m){ return (
                        <div key={m.l} style={{ textAlign:"center" }}>
                          <div style={{ fontSize:"0.62rem", color:"var(--text-subtle)", textTransform:"uppercase", letterSpacing:"0.04em", fontWeight:600 }}>{m.l}</div>
                          <div style={{ fontSize:"0.92rem", fontWeight:800, fontFamily:"var(--font-heading)", color:m.c }}>{m.v}</div>
                        </div>
                      ); })}
                    </div>
                  </div>
                  {pl.worstPost && pl.worstPost.id !== pl.topPost.id && (
                    <div style={{ padding:"1.1rem 1.25rem", borderRadius:"var(--radius-md)", background:"linear-gradient(135deg,rgba(244,63,94,0.07),rgba(244,63,94,0.02))", border:"1px solid rgba(244,63,94,0.2)" }}>
                      <div style={{ display:"flex", alignItems:"center", gap:"0.5rem", marginBottom:"0.6rem" }}>
                        <i data-lucide="alert-triangle" style={{ width:"14px", height:"14px", color:"#F43F5E" }}></i>
                        <span style={{ fontSize:"0.72rem", color:"#F43F5E", fontWeight:800, textTransform:"uppercase", letterSpacing:"0.05em" }}>Lowest Post — Needs Review</span>
                      </div>
                      <p style={{ fontSize:"0.82rem", color:"var(--text-secondary)", lineHeight:1.5, marginBottom:"0.75rem" }}>"{(pl.worstPost.caption||"").substring(0,90)}{pl.worstPost.caption&&pl.worstPost.caption.length>90?"...":""}"</p>
                      <p style={{ fontSize:"0.75rem", color:"var(--text-muted)", lineHeight:1.55, margin:0, padding:"0.5rem 0.65rem", background:"rgba(244,63,94,0.05)", borderRadius:"6px", border:"1px solid rgba(244,63,94,0.15)" }}>
                        <strong style={{ color:"#F43F5E" }}>Action: </strong>
                        {pl.topPost&&pl.worstPost.impressions>0
                          ? "This post got "+Math.round((pl.topPost.impressions||0)/(pl.worstPost.impressions||1))+"x fewer views than your best on "+pl.name+". Compare hook, posting time, and hashtags."
                          : "Review caption hook, posting time, and hashtag relevance. Reschedule with improved structure."}
                      </p>
                    </div>
                  )}
                </div>
              )}

              {/* All posts table */}
              <div style={{ fontSize:"0.75rem", color:"var(--text-muted)", fontWeight:700, textTransform:"uppercase", letterSpacing:"0.05em", marginBottom:"0.75rem" }}>
                All {pl.posts.length} Post{pl.posts.length!==1?"s":""} — sorted by views
              </div>
              <div style={{ borderRadius:"var(--radius-md)", border:"1px solid "+color+"20", overflowX:"auto" }}>
                <table className="custom-table" style={{ fontSize:"0.79rem" }}>
                  <thead>
                    <tr>
                      <th>Health / #</th><th>Date</th><th>Caption</th>
                      <th style={{ color:"var(--accent-cyan)" }}>Views</th>
                      <th>Reach</th>
                      <th style={{ color:"var(--accent-emerald)" }}>Eng.</th>
                      <th>Likes</th><th>Cmts</th><th>Shares</th><th>Saves</th>
                      <th style={{ color:"var(--accent-primary)" }}>ER%</th>
                      <th>Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {pl.sortedPosts.map(function(post,pi){
                      var pe=(post.likes||0)+(post.comments||0)+(post.shares||0)+(post.saves||0);
                      var er=calcEr(pe,post.reach||0);
                      var isBest=pi===0; var isWorst=pi===pl.sortedPosts.length-1&&pl.sortedPosts.length>1;
                      return (
                        <tr key={post.id||pi} style={{ background:isBest?color+"0A":isWorst?"rgba(244,63,94,0.04)":"" }}>
                          <td style={{ fontWeight:700, color:isBest?color:isWorst?"#F43F5E":"var(--text-subtle)", fontSize:"0.8rem" }}>{isBest?"Best":isWorst?"Low":"#"+(pi+1)}</td>
                          <td style={{ whiteSpace:"nowrap", color:"var(--text-muted)" }}>{fmtDate(post.uploadDate)}</td>
                          <td><span style={{ overflow:"hidden", textOverflow:"ellipsis", whiteSpace:"nowrap", display:"block", maxWidth:"170px" }} title={post.caption||""}>{(post.caption||"-").substring(0,55)}{post.caption&&post.caption.length>55?"...":""}</span></td>
                          <td style={{ fontWeight:700, color:"var(--accent-cyan)" }}>{fmt(post.impressions||0)}</td>
                          <td>{fmt(post.reach||0)}</td>
                          <td style={{ fontWeight:700, color:"var(--accent-emerald)" }}>{fmt(pe)}</td>
                          <td>{fmt(post.likes||0)}</td>
                          <td>{fmt(post.comments||0)}</td>
                          <td>{fmt(post.shares||0)}</td>
                          <td>{fmt(post.saves||0)}</td>
                          <td style={{ fontWeight:700, color:erGrade(er).color }}>{er}%</td>
                          <td><span className={"badge badge-"+((post.status||"uploaded").toLowerCase())}>{post.status||"-"}</span></td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        );
      })}


      {/* ══ TOP 3 + BOTTOM 2 ═════════════════════════════════════════════════ */}
      <div className="report-two-col" style={{ marginBottom:"1.5rem" }}>
        {combined.topContent.length > 0 && (
          <div className="report-section" style={{ marginBottom:0 }}>
            <div className="report-section-head">
              <div className="report-section-icon" style={{ background:"rgba(245,158,11,0.1)", border:"1px solid rgba(245,158,11,0.2)" }}>
                <i data-lucide="award" style={{ width:"16px", height:"16px", color:"var(--accent-amber)" }}></i>
              </div>
              <div className="report-section-label">Top 3 Performing Content</div>
            </div>
            <div className="report-section-body" style={{ padding:"1rem" }}>
              {combined.topContent.map(function(c,i){
                var eng=(c.likes||0)+(c.comments||0)+(c.shares||0)+(c.saves||0);
                var col=pColor(c.platform);
                var ranks=["1st","2nd","3rd"];
                return (
                  <div key={c.id||i} style={{ padding:"0.85rem", borderRadius:"var(--radius-md)", border:"1px solid "+(i===0?"rgba(245,158,11,0.3)":"var(--border-color)"), background:i===0?"linear-gradient(135deg,rgba(245,158,11,0.07),rgba(245,158,11,0.02))":"rgba(7,9,15,0.4)", marginBottom:"0.75rem" }}>
                    <div style={{ display:"flex", alignItems:"center", gap:"0.5rem", marginBottom:"0.5rem" }}>
                      <span style={{ fontSize:"0.72rem", fontWeight:800, color:i===0?"#F59E0B":"var(--text-muted)", padding:"0.12rem 0.45rem", borderRadius:"4px", background:i===0?"rgba(245,158,11,0.15)":"rgba(255,255,255,0.05)", border:i===0?"1px solid rgba(245,158,11,0.3)":"1px solid var(--border-color)" }}>{ranks[i]}</span>
                      <i data-lucide={pIcon(c.platform)} style={{ width:"12px", height:"12px", color:col }}></i>
                      <span style={{ fontSize:"0.78rem", fontWeight:600, color:col }}>{c.platform}</span>
                      <span style={{ fontSize:"0.72rem", color:"var(--text-muted)" }}>{fmtDate(c.uploadDate)}</span>
                    </div>
                    <p style={{ fontSize:"0.82rem", color:"var(--text-secondary)", lineHeight:1.5, marginBottom:"0.6rem" }}>"{(c.caption||"").substring(0,80)}{c.caption&&c.caption.length>80?"...":""}"</p>
                    <div style={{ display:"grid", gridTemplateColumns:"repeat(4,1fr)", gap:"0.4rem" }}>
                      {[{l:"Views",v:fmt(c.impressions||0),c:"var(--accent-cyan)"},{l:"Reach",v:fmt(c.reach||0),c:"var(--text-main)"},{l:"Eng.",v:fmt(eng),c:"var(--accent-emerald)"},{l:"ER",v:calcEr(eng,c.reach||0)+"%",c:erGrade(calcEr(eng,c.reach||0)).color}].map(function(m){ return (
                        <div key={m.l} style={{ textAlign:"center", padding:"0.4rem", borderRadius:"6px", background:"rgba(255,255,255,0.03)" }}>
                          <div style={{ fontSize:"0.6rem", color:"var(--text-subtle)", textTransform:"uppercase", letterSpacing:"0.04em", fontWeight:600 }}>{m.l}</div>
                          <div style={{ fontSize:"0.85rem", fontWeight:800, fontFamily:"var(--font-heading)", color:m.c }}>{m.v}</div>
                        </div>
                      ); })}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}
        {combined.bottomContent.length > 0 && (
          <div className="report-section" style={{ marginBottom:0 }}>
            <div className="report-section-head">
              <div className="report-section-icon" style={{ background:"rgba(244,63,94,0.1)", border:"1px solid rgba(244,63,94,0.2)" }}>
                <i data-lucide="alert-triangle" style={{ width:"16px", height:"16px", color:"#F43F5E" }}></i>
              </div>
              <div className="report-section-label">Lowest Performing — Needs Attention</div>
            </div>
            <div className="report-section-body" style={{ padding:"1rem" }}>
              {combined.bottomContent.map(function(c,i){
                var eng=(c.likes||0)+(c.comments||0)+(c.shares||0)+(c.saves||0);
                var col=pColor(c.platform);
                return (
                  <div key={c.id||i} style={{ padding:"0.85rem", borderRadius:"var(--radius-md)", border:"1px solid rgba(244,63,94,0.2)", background:"linear-gradient(135deg,rgba(244,63,94,0.06),rgba(244,63,94,0.02))", marginBottom:"0.75rem" }}>
                    <div style={{ display:"flex", alignItems:"center", gap:"0.5rem", marginBottom:"0.5rem" }}>
                      <i data-lucide="alert-triangle" style={{ width:"11px", height:"11px", color:"#F43F5E", flexShrink:0 }}></i>
                      <i data-lucide={pIcon(c.platform)} style={{ width:"11px", height:"11px", color:col }}></i>
                      <span style={{ fontSize:"0.78rem", fontWeight:600, color:col }}>{c.platform}</span>
                      <span style={{ fontSize:"0.72rem", color:"var(--text-muted)" }}>{fmtDate(c.uploadDate)}</span>
                    </div>
                    <p style={{ fontSize:"0.82rem", color:"var(--text-secondary)", lineHeight:1.5, marginBottom:"0.6rem" }}>"{(c.caption||"").substring(0,80)}{c.caption&&c.caption.length>80?"...":""}"</p>
                    <div style={{ display:"grid", gridTemplateColumns:"repeat(4,1fr)", gap:"0.4rem", marginBottom:"0.6rem" }}>
                      {[{l:"Views",v:fmt(c.impressions||0),c:"#F43F5E"},{l:"Reach",v:fmt(c.reach||0),c:"var(--text-muted)"},{l:"Eng.",v:fmt(eng),c:"var(--text-muted)"},{l:"ER",v:calcEr(eng,c.reach||0)+"%",c:erGrade(calcEr(eng,c.reach||0)).color}].map(function(m){ return (
                        <div key={m.l} style={{ textAlign:"center", padding:"0.4rem", borderRadius:"6px", background:"rgba(244,63,94,0.04)" }}>
                          <div style={{ fontSize:"0.6rem", color:"var(--text-subtle)", textTransform:"uppercase", letterSpacing:"0.04em", fontWeight:600 }}>{m.l}</div>
                          <div style={{ fontSize:"0.85rem", fontWeight:800, fontFamily:"var(--font-heading)", color:m.c }}>{m.v}</div>
                        </div>
                      ); })}
                    </div>
                    <p style={{ fontSize:"0.75rem", color:"var(--text-muted)", lineHeight:1.55, margin:0, padding:"0.5rem 0.65rem", background:"rgba(244,63,94,0.05)", borderRadius:"6px", border:"1px solid rgba(244,63,94,0.15)" }}>
                      <strong style={{ color:"#F43F5E" }}>Action: </strong>
                      {combined.avgImp>0
                        ? "This post reached "+Math.round(((c.impressions||0)/combined.avgImp)*100)+"% of account average. Review: caption hook (first line), posting time, hashtag relevance, and thumbnail."
                        : "Analyse caption, posting time, and hashtags. Compare structure with top posts."}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </div>


      {/* ══ CONTENT TYPE ANALYSIS ════════════════════════════════════════════ */}
      {contentTypeData.length > 0 && (
        <div className="report-section" style={{ marginBottom:"1.5rem" }}>
          <div className="report-section-head">
            <div className="report-section-icon" style={{ background:"rgba(245,158,11,0.1)", border:"1px solid rgba(245,158,11,0.2)" }}>
              <i data-lucide="film" style={{ width:"16px", height:"16px", color:"var(--accent-amber)" }}></i>
            </div>
            <div className="report-section-label">Content Type Performance</div>
          </div>
          <div className="report-section-body">
            <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fit,minmax(220px,1fr))", gap:"1rem" }}>
              {contentTypeData.map(function(ct,cti){
                var isBest=cti===0; var isWorst=cti===contentTypeData.length-1&&contentTypeData.length>1;
                var erI=erGrade(ct.er);
                return (
                  <div key={ct.type} style={{ padding:"1.1rem", borderRadius:"var(--radius-md)", border:"1px solid "+(isBest?"rgba(6,182,212,0.3)":isWorst?"rgba(244,63,94,0.25)":"var(--border-color)"), background:isBest?"linear-gradient(135deg,rgba(6,182,212,0.08),rgba(6,182,212,0.03))":isWorst?"linear-gradient(135deg,rgba(244,63,94,0.06),rgba(244,63,94,0.02))":"rgba(7,9,15,0.5)" }}>
                    <div style={{ display:"flex", alignItems:"center", justifyContent:"space-between", marginBottom:"0.75rem" }}>
                      <span style={{ fontWeight:700, fontSize:"0.9rem", color:isBest?"var(--accent-cyan)":isWorst?"#F43F5E":"var(--text-main)" }}>{ct.type}</span>
                      <div style={{ display:"flex", gap:"0.35rem" }}>
                        {isBest  && <span style={{ fontSize:"0.62rem", fontWeight:800, color:"var(--accent-cyan)", padding:"0.12rem 0.4rem", borderRadius:"4px", background:"rgba(6,182,212,0.12)", border:"1px solid rgba(6,182,212,0.25)" }}>Best</span>}
                        {isWorst && <span style={{ fontSize:"0.62rem", fontWeight:800, color:"#F43F5E", padding:"0.12rem 0.4rem", borderRadius:"4px", background:"rgba(244,63,94,0.12)", border:"1px solid rgba(244,63,94,0.25)" }}>Lowest</span>}
                      </div>
                    </div>
                    <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:"0.6rem", marginBottom:"0.75rem" }}>
                      {[{l:"Posts",v:""+ct.posts.length,c:"var(--text-muted)"},{l:"Avg Views",v:fmt(ct.avgImp),c:"var(--accent-cyan)"},{l:"Avg ER%",v:ct.er+"%",c:erI.color},{l:"Total Views",v:fmt(ct.imp),c:"var(--text-main)"}].map(function(m){ return (
                        <div key={m.l} style={{ padding:"0.5rem 0.65rem", borderRadius:"6px", background:"rgba(255,255,255,0.03)", border:"1px solid rgba(255,255,255,0.05)" }}>
                          <div style={{ fontSize:"0.65rem", color:"var(--text-subtle)", textTransform:"uppercase", letterSpacing:"0.04em", fontWeight:600, marginBottom:"0.2rem" }}>{m.l}</div>
                          <div style={{ fontSize:"0.92rem", fontWeight:800, fontFamily:"var(--font-heading)", color:m.c }}>{m.v}</div>
                        </div>
                      ); })}
                    </div>
                    {isBest && (
                      <p style={{ fontSize:"0.75rem", color:"var(--text-muted)", lineHeight:1.55, margin:0, padding:"0.6rem 0.75rem", background:"rgba(6,182,212,0.05)", borderRadius:"6px", border:"1px solid rgba(6,182,212,0.12)" }}>
                        <strong style={{ color:"var(--accent-cyan)" }}>Scale it: </strong>
                        {ct.type} averages {fmt(ct.avgImp)} views.{brief.pillars?" Align "+ct.type+" content with your pillars: "+brief.pillars+"." : " Increase production frequency and template the format."}
                      </p>
                    )}
                    {isWorst && contentTypeData.length>1 && (
                      <p style={{ fontSize:"0.75rem", color:"var(--text-muted)", lineHeight:1.55, margin:0, padding:"0.6rem 0.75rem", background:"rgba(244,63,94,0.05)", borderRadius:"6px", border:"1px solid rgba(244,63,94,0.12)" }}>
                        <strong style={{ color:"#F43F5E" }}>Fix or cut: </strong>
                        {ct.type} averages only {fmt(ct.avgImp)} views vs {fmt(contentTypeData[0].avgImp)} for {contentTypeData[0].type}. Revise execution or reallocate budget.
                      </p>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      )}

      {/* ══ SUBJECT PERFORMANCE ══════════════════════════════════════════════ */}
      {subjectData.length > 0 && (
        <div className="report-section" style={{ marginBottom:"1.5rem" }}>
          <div className="report-section-head">
            <div className="report-section-icon" style={{ background:"rgba(236,72,153,0.1)", border:"1px solid rgba(236,72,153,0.2)" }}>
              <i data-lucide="users" style={{ width:"16px", height:"16px", color:"#EC4899" }}></i>
            </div>
            <div className="report-section-label">Subject & Talent Performance</div>
          </div>
          <div className="report-section-body">
            {subjectData.map(function(s,si){
              var grads=["linear-gradient(135deg,#8B5CF6,#06B6D4)","linear-gradient(135deg,#10B981,#06B6D4)","linear-gradient(135deg,#F59E0B,#EF4444)","linear-gradient(135deg,#EC4899,#8B5CF6)","linear-gradient(135deg,#6366F1,#06B6D4)"];
              var initials=s.name.split(" ").map(function(n){return n[0]||"";}).join("").toUpperCase().slice(0,2);
              var sharePct=pct(s.imp,combined.imp||1);
              var barPct=subjectData[0].imp>0?(s.imp/subjectData[0].imp)*100:0;
              var isTop=si===0; var isLow=si===subjectData.length-1&&subjectData.length>1;
              return (
                <div key={s.name} className="subject-person-row" style={{ background:isLow?"rgba(244,63,94,0.03)":"" }}>
                  <div className="subject-avatar" style={{ background:grads[si%grads.length] }}>{initials}</div>
                  <div className="subject-info">
                    <div style={{ display:"flex", alignItems:"center", gap:"0.4rem" }}>
                      <div className="subject-name">{s.name}</div>
                      {isTop && <span style={{ fontSize:"0.62rem", fontWeight:800, color:"#F59E0B", padding:"0.1rem 0.35rem", borderRadius:"4px", background:"rgba(245,158,11,0.12)", border:"1px solid rgba(245,158,11,0.25)" }}>Top</span>}
                      {isLow && <span style={{ fontSize:"0.62rem", fontWeight:800, color:"#F43F5E", padding:"0.1rem 0.35rem", borderRadius:"4px", background:"rgba(244,63,94,0.12)", border:"1px solid rgba(244,63,94,0.25)" }}>Lowest</span>}
                    </div>
                    <div className="subject-meta">{s.count} appearance{s.count!==1?"s":""} — {sharePct}% of total impressions</div>
                  </div>
                  <div style={{ textAlign:"right", marginRight:"1rem", flexShrink:0 }}>
                    <div style={{ fontSize:"1.05rem", fontWeight:800, fontFamily:"var(--font-heading)", color:isLow?"#F43F5E":"var(--text-main)" }}>{fmt(s.imp)}</div>
                    <div style={{ fontSize:"0.72rem", color:"var(--text-muted)" }}>impressions</div>
                  </div>
                  <div className="subject-bar-wrap">
                    <div className="progress-bar-track">
                      <div className="progress-bar-fill" style={{ width:barPct+"%", background:isLow?"linear-gradient(90deg,#F43F5E,#F97316)":grads[si%grads.length] }}></div>
                    </div>
                  </div>
                </div>
              );
            })}
            {subjectData.length>1 && (
              <div style={{ marginTop:"1rem", padding:"0.85rem 1rem", background:"rgba(244,63,94,0.05)", borderRadius:"var(--radius-sm)", border:"1px solid rgba(244,63,94,0.15)" }}>
                <p style={{ fontSize:"0.8rem", color:"var(--text-muted)", lineHeight:1.6, margin:0 }}>
                  <strong style={{ color:"#F43F5E" }}>Talent gap: </strong>
                  {subjectData[0].name} drives {pct(subjectData[0].imp,combined.imp||1)}% of impressions vs {subjectData[subjectData.length-1].name} at {pct(subjectData[subjectData.length-1].imp,combined.imp||1)}%.
                  Increase {subjectData[0].name} frequency and test collaborations to cross-pollinate audiences.
                </p>
              </div>
            )}
          </div>
        </div>
      )}


      {/* ══ AI ADVISOR ═══════════════════════════════════════════════════════ */}
      <div className="ai-advisor-card">
        <div className="ai-advisor-head">
          <div className="ai-advisor-brand">
            <div className="ai-advisor-icon">
              <i data-lucide="sparkles" style={{ width:"20px", height:"20px", color:"#fff" }}></i>
            </div>
            <div>
              <div className="ai-advisor-title">AI Growth Advisor</div>
              <div className="ai-advisor-subtitle">Powered by Google Gemini — deep analysis of your actual data</div>
            </div>
          </div>
          <div style={{ display:"flex", alignItems:"center", gap:"0.5rem" }}>
            <span style={{ fontSize:"0.72rem", color:"var(--accent-primary-light)", background:"rgba(139,92,246,0.1)", padding:"0.2rem 0.65rem", borderRadius:"var(--radius-full)", border:"1px solid rgba(139,92,246,0.25)", fontWeight:700 }}>BETA</span>
          </div>
        </div>
        <div className="ai-advisor-body">

          {/* API key row */}
          <div className="ai-key-row">
            <div style={{ position:"relative", flex:1 }}>
              <i data-lucide="key" style={{ position:"absolute", left:"0.75rem", top:"50%", transform:"translateY(-50%)", width:"13px", height:"13px", color:"var(--text-subtle)", pointerEvents:"none" }}></i>
              <input
                type={aiKeyVisible ? "text" : "password"}
                className="ai-key-input"
                style={{ paddingLeft:"2.25rem", paddingRight:"2.5rem" }}
                placeholder="Paste your Gemini API key (AIza...)"
                value={aiKey}
                onChange={function(e){ saveAiKey(e.target.value); }}
              />
              <button
                onClick={function(){ setAiKeyVisible(!aiKeyVisible); }}
                style={{ position:"absolute", right:"0.65rem", top:"50%", transform:"translateY(-50%)", background:"none", border:"none", cursor:"pointer", color:"var(--text-subtle)", padding:"0.15rem" }}
                title={aiKeyVisible ? "Hide key" : "Show key"}
              >
                <i data-lucide={aiKeyVisible ? "eye-off" : "eye"} style={{ width:"14px", height:"14px" }}></i>
              </button>
            </div>
            <button
              className="btn-ai-generate"
              disabled={aiLoading || !aiKey.trim()}
              onClick={function(){ generateAiAnalysis(combined, platformData, contentTypeData, subjectData, brief, fmt, fmtFull, fmtDate, calcEr, pct); }}
            >
              {aiLoading
                ? <><i data-lucide="loader-2" style={{ width:"14px", height:"14px" }}></i> Analysing...</>
                : <><i data-lucide="sparkles" style={{ width:"14px", height:"14px" }}></i> Generate AI Analysis</>
              }
            </button>
          </div>

          {/* Key saved indicator */}
          {aiKeySaved && (
            <div style={{ marginBottom:"0.85rem", fontSize:"0.75rem", color:"#10B981", display:"flex", alignItems:"center", gap:"0.35rem" }}>
              <i data-lucide="check" style={{ width:"12px", height:"12px" }}></i>
              API key saved to browser storage
            </div>
          )}

          {/* Get key link */}
          {!aiKey.trim() && (
            <div style={{ marginBottom:"0.85rem", fontSize:"0.78rem", color:"var(--text-muted)", lineHeight:1.6 }}>
              Get a free API key at{" "}
              <a href="https://aistudio.google.com/app/apikey" target="_blank" rel="noopener noreferrer"
                style={{ color:"var(--accent-primary-light)", textDecoration:"underline", textUnderlineOffset:"3px" }}>
                aistudio.google.com/app/apikey
              </a>
              {" "}— free tier includes 15 requests/minute. Your key is stored only in your browser.
            </div>
          )}

          {/* Thinking indicator */}
          {aiLoading && (
            <div className="ai-thinking">
              <div className="ai-thinking-dots">
                <span></span><span></span><span></span>
              </div>
              <span>Analysing {combined.count} posts across {platformData.length} platform{platformData.length!==1?"s":""}...</span>
            </div>
          )}

          {/* Error */}
          {aiError && !aiLoading && (
            <div className="ai-error-box">
              <div style={{ display:"flex", alignItems:"center", gap:"0.5rem", marginBottom:"0.35rem", fontWeight:700 }}>
                <i data-lucide="alert-triangle" style={{ width:"14px", height:"14px" }}></i>
                Error
              </div>
              {aiError}
            </div>
          )}

          {/* AI Output */}
          {aiOutput && !aiLoading && (
            <div className="ai-output">
              <div className="ai-output-head">
                <div className="ai-output-label">
                  <i data-lucide="sparkles" style={{ width:"12px", height:"12px" }}></i>
                  AI Analysis — {activeAccount.name}
                </div>
                <button
                  onClick={function(){ navigator.clipboard && navigator.clipboard.writeText(aiOutput); }}
                  className="btn btn-secondary btn-sm"
                  style={{ gap:"0.35rem", fontSize:"0.72rem", padding:"0.25rem 0.65rem", minHeight:"28px" }}
                  title="Copy to clipboard"
                >
                  <i data-lucide="copy" style={{ width:"11px", height:"11px" }}></i>
                  Copy
                </button>
              </div>
              <div className="ai-output-body">
                {aiOutput.split("\n").map(function(line, i) {
                  if (line.startsWith("**") && line.endsWith("**")) {
                    return <div key={i} style={{ fontWeight:800, color:"var(--text-main)", fontSize:"0.9rem", marginTop:"1rem", marginBottom:"0.3rem" }}>{line.replace(/\*\*/g,"")}</div>;
                  }
                  if (line.match(/^\d+\.\s*\*\*/)) {
                    var cleaned = line.replace(/\*\*/g,"");
                    return <div key={i} style={{ fontWeight:800, color:"var(--accent-primary-light)", fontSize:"0.9rem", marginTop:"1.1rem", marginBottom:"0.3rem" }}>{cleaned}</div>;
                  }
                  if (line.startsWith("- ") || line.startsWith("* ")) {
                    return <div key={i} style={{ paddingLeft:"1rem", marginBottom:"0.2rem" }}>{"• "+line.slice(2)}</div>;
                  }
                  if (line.trim() === "") return <div key={i} style={{ height:"0.5rem" }}></div>;
                  // Inline bold
                  var parts = line.split(/(\*\*[^*]+\*\*)/g);
                  return (
                    <div key={i} style={{ marginBottom:"0.2rem" }}>
                      {parts.map(function(part, j) {
                        if (part.startsWith("**") && part.endsWith("**")) {
                          return <strong key={j}>{part.slice(2,-2)}</strong>;
                        }
                        return part;
                      })}
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          <div className="ai-disclaimer">
            Your API key is stored only in your browser's localStorage and is sent directly to Google's Gemini API — it never touches SocioVault's servers. Analytics data is sent to Gemini for analysis. Do not share your API key with others.
          </div>
        </div>
      </div>

      {/* ══ STRATEGIC RECOMMENDATIONS ════════════════════════════════════════ */}
      <div className="report-section">
        <div className="report-section-head">
          <div className="report-section-icon" style={{ background:"rgba(52,211,153,0.1)", border:"1px solid rgba(52,211,153,0.2)" }}>
            <i data-lucide="target" style={{ width:"16px", height:"16px", color:"var(--accent-emerald)" }}></i>
          </div>
          <div>
            <div className="report-section-label">Strategic Recommendations</div>
            {hasBrief && (
              <div style={{ fontSize:"0.75rem", color:"var(--accent-primary-light)", marginTop:"0.15rem" }}>
                <i data-lucide="book-open" style={{ width:"10px", height:"10px", display:"inline", verticalAlign:"middle", marginRight:"0.3rem" }}></i>
                Personalised based on your Account Brief
              </div>
            )}
          </div>
        </div>
        <div className="report-section-body">
          <div style={{ display:"flex", flexDirection:"column", gap:"0.75rem" }}>
            {/* Impression health summary strip */}
            {combined.count > 0 && (
              <div className="imp-health-strip">
                {[
                  { tier:"danger",  label:"Danger (0)",     count:combined.impTiers.danger,  color:"#F43F5E", bg:"rgba(244,63,94,0.1)"  },
                  { tier:"warning", label:"Warning (<100)", count:combined.impTiers.warning, color:"#F59E0B", bg:"rgba(245,158,11,0.1)" },
                  { tier:"safe",    label:"Safe (100+)",    count:combined.impTiers.safe,    color:"#34D399", bg:"rgba(52,211,153,0.1)" },
                  { tier:"good",    label:"Good (1K+)",     count:combined.impTiers.good,    color:"#22D3EE", bg:"rgba(6,182,212,0.1)"  },
                  { tier:"fyp",     label:"FYP (10K+)",     count:combined.impTiers.fyp,     color:"#A78BFA", bg:"rgba(139,92,246,0.1)" },
                ].map(function(t){ return (
                  <div key={t.tier} className="imp-health-item" style={{ background:t.bg, border:"1px solid "+t.color+"25" }}>
                    <div className="imp-health-count" style={{ color:t.color }}>{t.count}</div>
                    <div className="imp-health-label">{t.label}</div>
                  </div>
                ); })}
                <div style={{ flex:1, display:"flex", alignItems:"center", paddingLeft:"0.5rem" }}>
                  <div style={{ fontSize:"0.75rem", color:"var(--text-muted)", lineHeight:1.55 }}>
                    <strong style={{ color:"var(--text-secondary)" }}>Content Health Overview</strong> —
                    {combined.impTiers.danger > 0 && <span style={{ color:"#F43F5E", fontWeight:700 }}> {combined.impTiers.danger} post{combined.impTiers.danger>1?"s":""} at CRITICAL risk.</span>}
                    {combined.impTiers.warning > 0 && <span style={{ color:"#F59E0B", fontWeight:700 }}> {combined.impTiers.warning} post{combined.impTiers.warning>1?"s":""} need attention.</span>}
                    {combined.impTiers.fyp > 0 && <span style={{ color:"#A78BFA", fontWeight:700 }}> {combined.impTiers.fyp} FYP-level post{combined.impTiers.fyp>1?"s":""}.</span>}
                    {combined.impTiers.danger===0 && combined.impTiers.warning===0 && <span style={{ color:"#34D399", fontWeight:700 }}> All posts are in safe range or above.</span>}
                  </div>
                </div>
              </div>
            )}
            {buildRecs().map(function(rec){
              return (
                <div key={rec.num} className="recommendation-card" style={rec.urgent ? { border:"1px solid "+rec.color+"40", background:rec.color+"08" } : {}}>
                  <div className="recommendation-number" style={{ color:rec.color, background:rec.color+"12", border:"1px solid "+rec.color+"25" }}>
                    {rec.urgent ? "!" : rec.num}
                  </div>
                  <div>
                    <div className="recommendation-title">{rec.title}</div>
                    <div className="recommendation-text">{rec.body}</div>
                  </div>
                </div>
              );
            })}
          </div>
          {!hasBrief && canEdit && (
            <div style={{ marginTop:"1.25rem", padding:"1rem 1.25rem", background:"rgba(139,92,246,0.06)", borderRadius:"var(--radius-md)", border:"1px solid rgba(139,92,246,0.2)", display:"flex", alignItems:"center", justifyContent:"space-between", gap:"1rem", flexWrap:"wrap" }}>
              <div>
                <div style={{ fontSize:"0.88rem", fontWeight:700, color:"var(--accent-primary-light)", marginBottom:"0.2rem" }}>Make recommendations smarter</div>
                <div style={{ fontSize:"0.8rem", color:"var(--text-muted)" }}>Fill in the Account Brief above to get personalised recommendations based on your niche, goals, and target audience.</div>
              </div>
              <button onClick={openBrief} className="btn btn-primary btn-sm" style={{ gap:"0.4rem", flexShrink:0 }}>
                <i data-lucide="book-open" style={{ width:"13px", height:"13px" }}></i>
                Add Account Brief
              </button>
            </div>
          )}
        </div>
      </div>

      {/* ══ FOOTER ═══════════════════════════════════════════════════════════ */}
      <div style={{ marginTop:"2.5rem", paddingTop:"1.5rem", borderTop:"1px solid var(--border-subtle)", display:"flex", alignItems:"center", justifyContent:"space-between", flexWrap:"wrap", gap:"1rem" }}>
        <div style={{ display:"flex", alignItems:"center", gap:"0.6rem" }}>
          <div style={{ width:"24px", height:"24px", borderRadius:"7px", background:"var(--gradient-primary)", display:"flex", alignItems:"center", justifyContent:"center" }}>
            <i data-lucide="layers" style={{ width:"12px", height:"12px", color:"#fff" }}></i>
          </div>
          <span style={{ fontSize:"0.8rem", fontWeight:700, color:"var(--text-muted)" }}>SocioVault</span>
          {hasBrief && brief.niche && (
            <span style={{ fontSize:"0.72rem", color:"var(--text-subtle)" }}>— {brief.niche}</span>
          )}
        </div>
        <div style={{ fontSize:"0.76rem", color:"var(--text-subtle)" }}>
          Report generated on {today} — {combined.count} pieces across {platformData.length} platform{platformData.length!==1?"s":""}
        </div>
        <div style={{ display:"flex", gap:"0.5rem" }}>
          <button className="btn btn-export btn-sm" onClick={handleExportDocx}>
            <i data-lucide="download" style={{ width:"12px", height:"12px" }}></i> Export DOCX
          </button>
          <button className="btn btn-print btn-sm" onClick={function(){ window.print(); }}>
            <i data-lucide="printer" style={{ width:"12px", height:"12px" }}></i> Print
          </button>
        </div>
      </div>

    </div>
  );
}


function CollaboratorsPage() {
  const { activeAccount, addCollaborator, removeCollaborator, isOwner } = React.useContext(VaultContext);
  const [inviteEmail, setInviteEmail] = React.useState("");
  const [inviteRole, setInviteRole] = React.useState("editor");
  const [copied, setCopied] = React.useState(false);
  const [inviting, setInviting] = React.useState(false);

  if (!activeAccount) return <div className="page-container"><p>No active account selected.</p></div>;

  const shareLink = `${window.location.origin}${window.location.pathname}?vaultToken=${activeAccount.shareToken}`;

  const handleCopy = () => {
    navigator.clipboard.writeText(shareLink).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    });
  };

  const handleInvite = async (e) => {
    e.preventDefault();
    setInviting(true);
    await addCollaborator(activeAccount.id, inviteEmail.trim().toLowerCase(), inviteRole);
    setInviteEmail("");
    setInviting(false);
  };

  return (
    <div className="page-container">
      <div className="page-header">
        <div>
          <h1 className="page-title">{activeAccount.name} - Vault Sharing & Collaborators</h1>
          <p className="page-subtitle">Invite teammates and share read/edit access to this vault</p>
        </div>
      </div>

      {/* Share Link Card */}
      <div className="glass-card" style={{ marginBottom: "1.5rem" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "1rem" }}>
          <div style={{ width: "36px", height: "36px", borderRadius: "10px", background: "linear-gradient(135deg, var(--accent-cyan), var(--accent-primary))", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <i data-lucide="link" style={{ width: "18px", height: "18px", color: "#fff" }}></i>
          </div>
          <div>
            <h3 style={{ fontSize: "1.05rem", fontWeight: 700, marginBottom: "0.1rem" }}> Shareable Vault Link</h3>
            <p style={{ fontSize: "0.8rem", color: "var(--text-muted)" }}>Anyone with this link who is on the collaborators list can access this vault</p>
          </div>
        </div>
        <div style={{ display: "flex", gap: "0.75rem", alignItems: "center" }}>
          <input type="text" className="form-input" readOnly value={shareLink} style={{ flex: 1, fontSize: "0.82rem" }} onClick={e => e.target.select()} />
          <button onClick={handleCopy} className={`btn ${copied ? "btn-secondary" : "btn-primary"}`} style={{ whiteSpace: "nowrap", minWidth: "110px" }}>
            {copied ? "[OK] Copied!" : " Copy Link"}
          </button>
        </div>
        <p style={{ fontSize: "0.78rem", color: "var(--text-muted)", marginTop: "0.75rem", background: "rgba(255,255,255,0.04)", borderRadius: "8px", padding: "0.6rem 0.75rem" }}>
          i <strong>How it works:</strong> First add the collaborator's email below, then share this link with them. When they open the link and log in, the vault will automatically appear in their account.
        </p>
      </div>

      {/* Invite Form */}
      {isOwner && (
        <div className="glass-card" style={{ marginBottom: "1.5rem" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "1rem" }}>
            <div style={{ width: "36px", height: "36px", borderRadius: "10px", background: "linear-gradient(135deg, var(--accent-emerald), var(--accent-cyan))", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <i data-lucide="user-plus" style={{ width: "18px", height: "18px", color: "#fff" }}></i>
            </div>
            <h3 style={{ fontSize: "1.05rem", fontWeight: 700 }}>+ Invite Collaborator</h3>
          </div>
          <form onSubmit={handleInvite} style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap" }}>
            <input
              type="email"
              className="form-input"
              placeholder="collaborator@gmail.com"
              required
              value={inviteEmail}
              onChange={e => setInviteEmail(e.target.value)}
              style={{ flex: 1, minWidth: "200px" }}
            />
            <select className="form-select" value={inviteRole} onChange={e => setInviteRole(e.target.value)} style={{ width: "auto" }}>
              <option value="editor">Editor (can add/edit content)</option>
              <option value="viewer">Viewer (read-only)</option>
            </select>
            <button type="submit" className="btn btn-primary" disabled={inviting} style={{ minWidth: "120px" }}>
              {inviting ? "Sending..." : "Grant Access"}
            </button>
          </form>
        </div>
      )}

      {/* Collaborators Table */}
      <div className="glass-card">
        <h3 style={{ fontSize: "1.05rem", fontWeight: 700, marginBottom: "1rem" }}> Vault Members ({1 + (activeAccount.collaborators || []).length})</h3>
        <div style={{ display: "flex", flexDirection: "column", gap: "0.6rem" }}>
          {/* Owner row */}
          <div style={{ display: "flex", alignItems: "center", gap: "1rem", padding: "0.75rem 1rem", background: "rgba(255,255,255,0.04)", borderRadius: "10px", border: "1px solid var(--border-color)" }}>
            <div style={{ width: "36px", height: "36px", borderRadius: "50%", background: "linear-gradient(135deg, var(--accent-primary), var(--accent-cyan))", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 700, color: "#fff", fontSize: "0.9rem" }}>
              {activeAccount.ownerEmail.charAt(0).toUpperCase()}
            </div>
            <div style={{ flex: 1 }}>
              <div style={{ fontWeight: 600, fontSize: "0.92rem" }}> {activeAccount.ownerEmail}</div>
              <div style={{ fontSize: "0.78rem", color: "var(--text-muted)" }}>Account Owner</div>
            </div>
            <span className="badge badge-uploaded">Owner</span>
          </div>
          {/* Collaborator rows */}
          {(activeAccount.collaborators || []).map(c => (
            <div key={c.email} style={{ display: "flex", alignItems: "center", gap: "1rem", padding: "0.75rem 1rem", background: "rgba(255,255,255,0.03)", borderRadius: "10px", border: "1px solid var(--border-color)" }}>
              <div style={{ width: "36px", height: "36px", borderRadius: "50%", background: "linear-gradient(135deg, var(--accent-emerald), var(--accent-cyan))", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 700, color: "#fff", fontSize: "0.9rem" }}>
                {c.email.charAt(0).toUpperCase()}
              </div>
              <div style={{ flex: 1 }}>
                <div style={{ fontWeight: 600, fontSize: "0.92rem" }}> {c.email}</div>
                <div style={{ fontSize: "0.78rem", color: "var(--text-muted)" }}>Joined {c.joinedAt || "-"}</div>
              </div>
              <span className="badge badge-scheduled">{c.role}</span>
              {isOwner && (
                <button onClick={() => confirm(`Remove ${c.email} from this vault?`) && removeCollaborator(activeAccount.id, c.email)} className="btn btn-danger btn-icon" title="Remove collaborator">
                  <i data-lucide="user-x" style={{ width: "14px", height: "14px" }}></i>
                </button>
              )}
            </div>
          ))}
          {(activeAccount.collaborators || []).length === 0 && (
            <div style={{ textAlign: "center", padding: "1.5rem", color: "var(--text-muted)", fontSize: "0.88rem" }}>
              No collaborators yet. Invite someone using the form above.
            </div>
          )}
        </div>
      </div>
    </div>
  );
}



// Notes Page — Bullet-point note editor per account
function NotesPage() {
  const { activeAccount, editAccount, canEdit } = React.useContext(VaultContext);
  const [notes, setNotes] = React.useState(activeAccount?.notes || "");
  const [notesSaving, setNotesSaving] = React.useState(false);

  React.useEffect(function() {
    if (activeAccount?.notes !== undefined) {
      setNotes(activeAccount.notes || "");
    }
  }, [activeAccount?.id]);

  var notesRef = React.useRef(null);
  var activeAccountRef = React.useRef(null);
  var canEditRef = React.useRef(null);

  notesRef.current = notes;
  activeAccountRef.current = activeAccount;
  canEditRef.current = canEdit;

  React.useEffect(function() {
    var timeout = setTimeout(async function() {
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
        <div className="glass-card" style={{ textAlign:"center", padding:"4rem 2rem" }}>
          <p style={{ color:"var(--text-muted)" }}>No active account selected.</p>
        </div>
      </div>
    );
  }

  var lines = notes.split("\n").map(function(line) { return line.trim(); }).filter(function(l) { return l; }).length;

  return (
    <div className="page-container">
      <div className="page-header">
        <div>
          <h1 className="page-title">Notes</h1>
          <p className="page-subtitle">Keep bullet-point notes for {activeAccount.name}. Start each line with • or -, or just write freely.</p>
        </div>
        <div style={{ display:"flex", alignItems:"center", gap:"0.75rem" }}>
          {notesSaving && (
            <div style={{ display:"flex", alignItems:"center", gap:"0.35rem", fontSize:"0.8rem", color:"var(--text-muted)" }}>
              <i data-lucide="loader-2" style={{ width:"14px", height:"14px", animation:"spin 0.8s linear infinite" }}></i>
              Saving...
            </div>
          )}
          <span style={{ fontSize:"0.78rem", color:"var(--text-subtle)", paddingLeft:"1rem", borderLeft:"1px solid var(--border-subtle)" }}>
            {lines} line{lines !== 1 ? "s" : ""}
          </span>
        </div>
      </div>

      <div className="notes-editor-wrap">
        <textarea
          className="notes-editor"
          placeholder={"• Key points for " + activeAccount.name + "\n• What worked this week\n• Ideas for next week\n• Collaboration notes"}
          value={notes}
          onChange={function(e) { setNotes(e.target.value); }}
          disabled={!canEdit}
          style={{ opacity: canEdit ? 1 : 0.6 }}
        />
      </div>

      <div style={{ marginTop:"1.5rem", fontSize:"0.85rem", color:"var(--text-muted)", lineHeight:1.6 }}>
        <p><strong>Tips:</strong></p>
        <ul style={{ marginLeft:"1.5rem", marginTop:"0.5rem" }}>
          <li>Start lines with <code style={{ background:"rgba(255,255,255,0.08)", padding:"0.15rem 0.4rem", borderRadius:"4px", fontFamily:"var(--font-mono)", fontSize:"0.8rem" }}>•</code> or <code style={{ background:"rgba(255,255,255,0.08)", padding:"0.15rem 0.4rem", borderRadius:"4px", fontFamily:"var(--font-mono)", fontSize:"0.8rem" }}>-</code> for bullets</li>
          <li>Indent with spaces or tabs for sub-bullets</li>
          <li>Your notes are automatically saved to the cloud</li>
        </ul>
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
      case "report-summary": return <ReportSummaryPage />;
      case "collaborators": return <CollaboratorsPage />;
      case "notes": return <NotesPage />;
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
