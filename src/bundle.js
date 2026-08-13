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
      dataLoading, addAccount, removeAccount, addPlatform, removePlatform,
      addContent, updateContent, deleteContent,
      addCollaborator, updateCollaboratorRole, removeCollaborator,
      updateSubjectPhoto, getUserRole
    }}>
      {children}
    </VaultContext.Provider>
  );
}


// 3. COMPONENTS
function LoginPage() {
  const { loginWithGoogle, loginWithEmail, registerWithEmail, forgotPassword } = React.useContext(AuthContext);
  const [tab, setTab] = React.useState('signin'); // 'signin' | 'signup'
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [confirmPassword, setConfirmPassword] = React.useState('');
  const [name, setName] = React.useState('');
  const [showPass, setShowPass] = React.useState(false);
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState('');
  const [successMsg, setSuccessMsg] = React.useState('');

  const resetForm = () => { setEmail(''); setPassword(''); setConfirmPassword(''); setName(''); setError(''); setSuccessMsg(''); };

  const handleTabSwitch = (t) => { setTab(t); resetForm(); };

  const handleGoogleLogin = async () => {
    setLoading(true); setError('');
    await loginWithGoogle();
    setLoading(false);
  };

  const handleEmailSignIn = async (e) => {
    e.preventDefault();
    setError(''); setLoading(true);
    const result = await loginWithEmail(email, password);
    if (!result.success) setError(result.message);
    setLoading(false);
  };

  const handleEmailSignUp = async (e) => {
    e.preventDefault();
    setError('');
    if (!name.trim()) return setError('Please enter your full name.');
    if (password !== confirmPassword) return setError('Passwords do not match.');
    if (password.length < 6) return setError('Password must be at least 6 characters.');
    setLoading(true);
    const result = await registerWithEmail(email, password, name.trim());
    if (!result.success) setError(result.message);
    setLoading(false);
  };

  const handleForgotPassword = async () => {
    if (!email) return setError('Enter your email above first, then click Forgot Password.');
    setLoading(true); setError('');
    const result = await forgotPassword(email);
    if (result.success) setSuccessMsg('Password reset email sent! Check your inbox.');
    else setError(result.message);
    setLoading(false);
  };

  const inputStyle = {
    width: '100%', padding: '0.75rem 1rem', borderRadius: '10px',
    border: '1px solid var(--border-color)', background: 'var(--bg-tertiary)',
    color: 'var(--text-primary)', fontSize: '0.95rem', boxSizing: 'border-box',
    outline: 'none', transition: 'border-color 0.2s'
  };

  return (
    <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '2rem 1rem' }}>
      <div className="glass-card" style={{ maxWidth: '460px', width: '100%', padding: '2.5rem 2rem' }}>

        {/* Logo */}
        <div style={{ textAlign: 'center', marginBottom: '1.5rem' }}>
          <div style={{
            width: '56px', height: '56px', borderRadius: '16px',
            background: 'linear-gradient(135deg, var(--accent-primary), var(--accent-cyan))',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            margin: '0 auto 1rem', boxShadow: '0 10px 25px rgba(139, 92, 246, 0.3)'
          }}>
            <i data-lucide="shield-check" style={{ width: '28px', height: '28px', color: '#fff' }}></i>
          </div>
          <h1 style={{ fontSize: '1.8rem', fontWeight: 800, marginBottom: '0.25rem' }}>
            SociaVault <span style={{ background: 'linear-gradient(135deg, var(--accent-primary), var(--accent-cyan))', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Pro</span>
          </h1>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.875rem' }}>Secure Multi-Account Social Media Vault</p>
        </div>

        {/* Tabs */}
        <div style={{ display: 'flex', background: 'var(--bg-tertiary)', borderRadius: '12px', padding: '4px', marginBottom: '1.75rem' }}>
          {['signin', 'signup'].map(t => (
            <button key={t} onClick={() => handleTabSwitch(t)} style={{
              flex: 1, padding: '0.6rem', borderRadius: '9px', border: 'none', cursor: 'pointer',
              fontWeight: 600, fontSize: '0.9rem', transition: 'all 0.2s',
              background: tab === t ? 'linear-gradient(135deg, var(--accent-primary), var(--accent-cyan))' : 'transparent',
              color: tab === t ? '#fff' : 'var(--text-muted)'
            }}>
              {t === 'signin' ? 'Sign In' : 'Sign Up'}
            </button>
          ))}
        </div>

        {/* Google Button */}
        <button onClick={handleGoogleLogin} disabled={loading} style={{
          width: '100%', padding: '0.8rem', background: '#ffffff', color: '#1f2937',
          fontWeight: 600, fontSize: '0.9rem', borderRadius: '10px', border: 'none',
          display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.75rem',
          boxShadow: '0 2px 8px rgba(0,0,0,0.15)', cursor: 'pointer', marginBottom: '1.25rem',
          opacity: loading ? 0.7 : 1
        }}>
          <svg width="18" height="18" viewBox="0 0 24 24">
            <path fill="#4285F4" d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.82-2.4 3.68v3.05h3.88c2.27-2.09 3.665-5.17 3.665-9.17z"/>
            <path fill="#34A853" d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.11-6.72-4.96H1.24v3.15C3.26 21.3 7.37 24 12 24z"/>
            <path fill="#FBBC05" d="M5.28 14.24c-.25-.72-.38-1.49-.38-2.24s.13-1.52.38-2.24V6.61H1.24C.45 8.18 0 10.03 0 12s.45 3.82 1.24 5.39l4.04-3.15z"/>
            <path fill="#EA4335" d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.37 0 3.26 2.7 1.24 6.61l4.04 3.15c.95-2.85 3.6-4.96 6.72-4.96z"/>
          </svg>
          Continue with Google
        </button>

        {/* Divider */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.25rem' }}>
          <div style={{ flex: 1, height: '1px', background: 'var(--border-color)' }} />
          <span style={{ color: 'var(--text-muted)', fontSize: '0.8rem', whiteSpace: 'nowrap' }}>or with email</span>
          <div style={{ flex: 1, height: '1px', background: 'var(--border-color)' }} />
        </div>

        {/* Error / Success */}
        {error && (
          <div style={{
            background: 'rgba(239,68,68,0.12)', border: '1px solid rgba(239,68,68,0.3)',
            borderRadius: '10px', padding: '0.75rem 1rem', marginBottom: '1rem',
            color: '#f87171', fontSize: '0.875rem', display: 'flex', alignItems: 'center', gap: '0.5rem'
          }}>
            <i data-lucide="alert-circle" style={{ width: '16px', height: '16px', flexShrink: 0 }}></i>
            {error}
          </div>
        )}
        {successMsg && (
          <div style={{
            background: 'rgba(34,197,94,0.12)', border: '1px solid rgba(34,197,94,0.3)',
            borderRadius: '10px', padding: '0.75rem 1rem', marginBottom: '1rem',
            color: '#4ade80', fontSize: '0.875rem', display: 'flex', alignItems: 'center', gap: '0.5rem'
          }}>
            <i data-lucide="check-circle" style={{ width: '16px', height: '16px', flexShrink: 0 }}></i>
            {successMsg}
          </div>
        )}

        {/* Sign In Form */}
        {tab === 'signin' && (
          <form onSubmit={handleEmailSignIn} style={{ display: 'flex', flexDirection: 'column', gap: '0.875rem' }}>
            <div>
              <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-secondary)', marginBottom: '0.4rem' }}>Email Address</label>
              <input type="email" required value={email} onChange={e => setEmail(e.target.value)}
                placeholder="you@example.com" style={inputStyle} />
            </div>
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.4rem' }}>
                <label style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-secondary)' }}>Password</label>
                <button type="button" onClick={handleForgotPassword} style={{
                  background: 'none', border: 'none', color: 'var(--accent-primary)',
                  fontSize: '0.8rem', cursor: 'pointer', padding: 0, fontWeight: 500
                }}>Forgot password?</button>
              </div>
              <div style={{ position: 'relative' }}>
                <input type={showPass ? 'text' : 'password'} required value={password} onChange={e => setPassword(e.target.value)}
                  placeholder="••••••••" style={{ ...inputStyle, paddingRight: '2.75rem' }} />
                <button type="button" onClick={() => setShowPass(!showPass)} style={{
                  position: 'absolute', right: '0.75rem', top: '50%', transform: 'translateY(-50%)',
                  background: 'none', border: 'none', cursor: 'pointer', color: 'var(--text-muted)', padding: 0
                }}>
                  <i data-lucide={showPass ? 'eye-off' : 'eye'} style={{ width: '16px', height: '16px' }}></i>
                </button>
              </div>
            </div>
            <button type="submit" disabled={loading} className="btn btn-primary" style={{
              width: '100%', padding: '0.8rem', marginTop: '0.25rem',
              opacity: loading ? 0.7 : 1, cursor: loading ? 'not-allowed' : 'pointer'
            }}>
              {loading ? 'Signing in...' : 'Sign In'}
            </button>
            <p style={{ textAlign: 'center', fontSize: '0.85rem', color: 'var(--text-muted)', margin: 0 }}>
              No account yet?{' '}
              <button type="button" onClick={() => handleTabSwitch('signup')} style={{
                background: 'none', border: 'none', color: 'var(--accent-primary)',
                cursor: 'pointer', fontWeight: 600, padding: 0, fontSize: '0.85rem'
              }}>Sign up free</button>
            </p>
          </form>
        )}

        {/* Sign Up Form */}
        {tab === 'signup' && (
          <form onSubmit={handleEmailSignUp} style={{ display: 'flex', flexDirection: 'column', gap: '0.875rem' }}>
            <div>
              <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-secondary)', marginBottom: '0.4rem' }}>Full Name</label>
              <input type="text" required value={name} onChange={e => setName(e.target.value)}
                placeholder="Your full name" style={inputStyle} />
            </div>
            <div>
              <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-secondary)', marginBottom: '0.4rem' }}>Email Address</label>
              <input type="email" required value={email} onChange={e => setEmail(e.target.value)}
                placeholder="you@example.com" style={inputStyle} />
            </div>
            <div>
              <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-secondary)', marginBottom: '0.4rem' }}>Password</label>
              <div style={{ position: 'relative' }}>
                <input type={showPass ? 'text' : 'password'} required value={password} onChange={e => setPassword(e.target.value)}
                  placeholder="Min. 6 characters" style={{ ...inputStyle, paddingRight: '2.75rem' }} />
                <button type="button" onClick={() => setShowPass(!showPass)} style={{
                  position: 'absolute', right: '0.75rem', top: '50%', transform: 'translateY(-50%)',
                  background: 'none', border: 'none', cursor: 'pointer', color: 'var(--text-muted)', padding: 0
                }}>
                  <i data-lucide={showPass ? 'eye-off' : 'eye'} style={{ width: '16px', height: '16px' }}></i>
                </button>
              </div>
            </div>
            <div>
              <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-secondary)', marginBottom: '0.4rem' }}>Confirm Password</label>
              <input type={showPass ? 'text' : 'password'} required value={confirmPassword} onChange={e => setConfirmPassword(e.target.value)}
                placeholder="Repeat your password" style={inputStyle} />
            </div>
            <button type="submit" disabled={loading} className="btn btn-primary" style={{
              width: '100%', padding: '0.8rem', marginTop: '0.25rem',
              opacity: loading ? 0.7 : 1, cursor: loading ? 'not-allowed' : 'pointer'
            }}>
              {loading ? 'Creating account...' : 'Create Account'}
            </button>
            <p style={{ textAlign: 'center', fontSize: '0.85rem', color: 'var(--text-muted)', margin: 0 }}>
              Already have an account?{' '}
              <button type="button" onClick={() => handleTabSwitch('signin')} style={{
                background: 'none', border: 'none', color: 'var(--accent-primary)',
                cursor: 'pointer', fontWeight: 600, padding: 0, fontSize: '0.85rem'
              }}>Sign in</button>
            </p>
          </form>
        )}

        <p style={{ color: 'var(--text-muted)', fontSize: '0.75rem', textAlign: 'center', marginTop: '1.5rem' }}>
          🔒 Your data is securely stored in the cloud and synced across all devices.
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

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(270px, 1fr))", gap: "1.25rem" }}>
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
              <button type="button" onClick={() => setShowAddModal(false)} className="btn btn-secondary btn-icon" style={{ cursor: "pointer", width: "32px", height: "32px", display: "flex", alignItems: "center", justifyContent: "center" }} title="Close">
                <span style={{ fontSize: "1.2rem", lineHeight: 1, fontWeight: "bold" }}>✕</span>
              </button>
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

  const accessibleAccounts = accounts.filter(acc => {
    if (!user) return false;
    const uEmail = (user.email || "").toLowerCase().trim();
    const oEmail = (acc.ownerEmail || "").toLowerCase().trim();
    if (oEmail === uEmail) return true;
    return (acc.collaborators || []).some(c => (c.email || "").toLowerCase().trim() === uEmail);
  });

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
  const [platformName, setPlatformName] = React.useState("TikTok");
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
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem", marginBottom: "1rem", "@media (max-width: 640px)": { gridTemplateColumns: "1fr" } }}>
            <div className="form-group">
              <label className="form-label">Upload Date</label>
              <input type="date" className="form-input" required value={uploadDate} onChange={e => setUploadDate(e.target.value)} />
            </div>
            <div className="form-group">
              <label className="form-label">Upload Time</label>
              <input type="time" className="form-input" value={uploadTime} onChange={e => setUploadTime(e.target.value)} />
            </div>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem", marginBottom: "1rem", "@media (max-width: 640px)": { gridTemplateColumns: "1fr" } }}>
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
                      <button onClick={() => confirm("Delete content?") && deleteContent(item.id)} className="btn btn-danger btn-icon" style={{ marginLeft: "0.3rem" }} title="Delete Content"><i data-lucide="trash-2" style={{ width: "14px", height: "14px" }}></i></button>
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
function TimeframeAnalyticsPage() {
  const { activeAccount, contents } = React.useContext(VaultContext);
  const [timeframe, setTimeframe] = React.useState("monthly");
  const [selectedYear, setSelectedYear] = React.useState(2026);
  const [selectedMonth, setSelectedMonth] = React.useState(8);
  const [selectedPlatform, setSelectedPlatform] = React.useState("All");
  const [showExportModal, setShowExportModal] = React.useState(false);
  const [isExporting, setIsExporting] = React.useState(false);

  const lineChartRef = React.useRef(null);
  const lineChartInstance = React.useRef(null);

  if (!activeAccount) return <div className="page-container"><p>No active account selected.</p></div>;

  const accountContents = contents.filter(c => c.accountId === activeAccount.id);

  // Get all unique platforms
  const allPlatforms = React.useMemo(() => {
    const platforms = [...new Set(accountContents.map(c => c.platform))];
    return platforms.filter(Boolean).sort();
  }, [accountContents]);

  const timeframeFilteredContents = React.useMemo(() => {
    return accountContents.filter(item => {
      if (!item.uploadDate) return false;
      
      // Platform filter
      if (selectedPlatform !== "All" && item.platform !== selectedPlatform) return false;

      const d = new Date(item.uploadDate);

      if (timeframe === "monthly") {
        return (d.getMonth() + 1) === Number(selectedMonth) && d.getFullYear() === Number(selectedYear);
      }

      if (timeframe === "weekly") {
        return (d.getMonth() + 1) === Number(selectedMonth) && d.getFullYear() === Number(selectedYear);
      }

      return true; // all-time
    });
  }, [accountContents, timeframe, selectedMonth, selectedYear, selectedPlatform]);

  const topPost = React.useMemo(() => {
    if (timeframeFilteredContents.length === 0) return null;
    return [...timeframeFilteredContents].sort((a, b) => (b.impressions || 0) - (a.impressions || 0))[0];
  }, [timeframeFilteredContents]);

  const totalImpressions = timeframeFilteredContents.reduce((sum, c) => sum + (c.impressions || 0), 0);
  const totalReach = timeframeFilteredContents.reduce((sum, c) => sum + (c.reach || 0), 0);
  const totalEngagement = timeframeFilteredContents.reduce((sum, c) => sum + (c.likes || 0) + (c.comments || 0) + (c.shares || 0) + (c.saves || 0), 0);
  const erRate = totalReach > 0 ? ((totalEngagement / totalReach) * 100).toFixed(2) : "0.00";

  const contentTypeStats = React.useMemo(() => {
    // Dynamic color/icon palette for custom content types
    const colorPalette = [
      { icon: "🎬", color: "var(--accent-cyan)" },
      { icon: "🖼️", color: "var(--accent-primary)" },
      { icon: "📸", color: "var(--accent-emerald)" },
      { icon: "⏱️", color: "var(--accent-amber)" },
      { icon: "📹", color: "#EC4899" },
      { icon: "📝", color: "#6366F1" },
      { icon: "📌", color: "#F97316" },
      { icon: "🎙️", color: "#14B8A6" },
      { icon: "🗂️", color: "#A855F7" },
      { icon: "🌟", color: "#EAB308" }
    ];

    const map = {};
    let colorIndex = 0;

    timeframeFilteredContents.forEach(item => {
      const type = (item.contentType || "").trim() || "Uncategorized";
      if (!map[type]) {
        const palette = colorPalette[colorIndex % colorPalette.length];
        colorIndex++;
        map[type] = { type, icon: palette.icon, color: palette.color, count: 0, impressions: 0, reach: 0, engagement: 0 };
      }
      const eng = (Number(item.likes) || 0) + (Number(item.comments) || 0) + (Number(item.shares) || 0) + (Number(item.saves) || 0);
      map[type].count += 1;
      map[type].impressions += Number(item.impressions) || 0;
      map[type].reach += Number(item.reach) || 0;
      map[type].engagement += eng;
    });

    return Object.values(map)
      .sort((a, b) => b.impressions - a.impressions)
      .map(s => ({
        ...s,
        avgEr: s.reach > 0 ? ((s.engagement / s.reach) * 100).toFixed(2) : "0.00"
      }));
  }, [timeframeFilteredContents]);

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
          <select className="form-select" style={{ width: "auto" }} value={selectedPlatform} onChange={e => setSelectedPlatform(e.target.value)}>
            <option value="All">All Platforms</option>
            {allPlatforms.map(p => (
              <option key={p} value={p}>{p}</option>
            ))}
          </select>
        </div>
      )}

      {timeframe === "monthly" && (
        <div className="glass-card" style={{ marginBottom: "1.5rem", padding: "1rem", display: "flex", alignItems: "center", gap: "1rem", flexWrap: "wrap" }}>
          <span style={{ fontWeight: "600", fontSize: "0.95rem" }}>📅 Select Year for Monthly Growth:</span>
          <select className="form-select" style={{ width: "auto" }} value={selectedYear} onChange={e => setSelectedYear(Number(e.target.value))}>
            <option value={2026}>2026</option>
            <option value={2025}>2025</option>
          </select>
          <select className="form-select" style={{ width: "auto" }} value={selectedPlatform} onChange={e => setSelectedPlatform(e.target.value)}>
            <option value="All">All Platforms</option>
            {allPlatforms.map(p => (
              <option key={p} value={p}>{p}</option>
            ))}
          </select>
        </div>
      )}

      {timeframe === "all" && (
        <div className="glass-card" style={{ marginBottom: "1.5rem", padding: "1rem", display: "flex", alignItems: "center", gap: "1rem" }}>
          <span style={{ fontWeight: "600", fontSize: "0.95rem" }}>🎯 Filter by Platform:</span>
          <select className="form-select" style={{ width: "auto" }} value={selectedPlatform} onChange={e => setSelectedPlatform(e.target.value)}>
            <option value="All">All Platforms</option>
            {allPlatforms.map(p => (
              <option key={p} value={p}>{p}</option>
            ))}
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

      {/* CONTENT TYPE PERFORMANCE & BREAKDOWN CARDS */}
      <div style={{ marginTop: "2rem" }}>
        <div style={{ marginBottom: "1rem" }}>
          <h2 style={{ fontSize: "1.2rem", fontWeight: 800, color: "var(--text-main)", marginBottom: "0.25rem" }}>
            📊 Content Type Performance Breakdown ({timeframe === "all" ? "All-Time" : timeframe === "monthly" ? `Monthly: ${currentMonthName} ${selectedYear}` : `Weekly: ${currentMonthName} ${selectedYear}`})
          </h2>
          <p style={{ fontSize: "0.85rem", color: "var(--text-muted)" }}>
            Aggregated post count, total views (impressions), reach, and engagement rate per content format
          </p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))", gap: "1.25rem" }}>
          {contentTypeStats.map(stat => (
            <div key={stat.type} className="glass-card" style={{ borderLeft: `4px solid ${stat.color}`, position: "relative" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "0.85rem" }}>
                <div style={{ width: "38px", height: "38px", borderRadius: "10px", background: "rgba(255,255,255,0.08)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.2rem" }}>
                  {stat.icon}
                </div>
                <div>
                  <h3 style={{ fontSize: "1.05rem", fontWeight: 700, margin: 0 }}>{stat.type}</h3>
                  <span className="chip" style={{ fontSize: "0.75rem", padding: "0.15rem 0.5rem" }}>
                    {stat.count} {stat.count === 1 ? "post" : "posts"}
                  </span>
                </div>
              </div>

              <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem", fontSize: "0.88rem" }}>
                <div style={{ display: "flex", justifyContent: "space-between" }}>
                  <span style={{ color: "var(--text-muted)" }}>Total Impressions:</span>
                  <strong style={{ color: stat.color }}>{stat.impressions.toLocaleString()}</strong>
                </div>
                <div style={{ display: "flex", justifyContent: "space-between" }}>
                  <span style={{ color: "var(--text-muted)" }}>Total Reach:</span>
                  <strong>{stat.reach.toLocaleString()}</strong>
                </div>
                <div style={{ display: "flex", justifyContent: "space-between" }}>
                  <span style={{ color: "var(--text-muted)" }}>Total Engagement:</span>
                  <strong>{stat.engagement.toLocaleString()}</strong>
                </div>
                <div style={{ display: "flex", justifyContent: "space-between", paddingTop: "0.4rem", borderTop: "1px solid var(--border-color)" }}>
                  <span style={{ color: "var(--text-muted)" }}>Avg Engagement Rate:</span>
                  <strong style={{ color: "var(--accent-primary)", fontSize: "0.98rem" }}>{stat.avgEr}%</strong>
                </div>
              </div>
            </div>
          ))}
        </div>
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
                    try {
                      setIsExporting(true);
                      const filtered = accountContents.filter(option.filterFn);
                      await generateDocxReport({
                        accountName: activeAccount.name,
                        timeframeLabel: option.timeframeLabel,
                        contents: contents,
                        accountContents: filtered
                      });
                    } catch (err) {
                      console.error("DOCX export error:", err);
                      alert("DOCX export error: " + (err.message || err));
                    } finally {
                      setIsExporting(false);
                      setShowExportModal(false);
                    }
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
      avgImpressionsPerPost: h.contentCount > 0 ? Math.round(h.impressions / h.contentCount) : 0,
      avgEr: h.reach > 0 ? ((h.engagement / h.reach) * 100).toFixed(2) : "0.00"
    }));
  }, [accountContents]);

  const bestHashtag = React.useMemo(() => {
    if (!hashtagStats.length) return null;
    return hashtagStats.reduce((best, h) => h.avgImpressionsPerPost > best.avgImpressionsPerPost ? h : best, hashtagStats[0]);
  }, [hashtagStats]);

  const sortedHashtags = React.useMemo(() =>
    [...hashtagStats].sort((a, b) => b.avgImpressionsPerPost - a.avgImpressionsPerPost),
    [hashtagStats]
  );

  return (
    <div className="page-container">
      <div className="page-header">
        <h1 className="page-title">{activeAccount.name} - Hashtag Studio</h1>
        <p className="page-subtitle">Track performance of every hashtag across your content</p>
      </div>

      {/* Best Performer Card */}
      {bestHashtag && (
        <div style={{ marginBottom: "1.75rem" }}>
          <h2 style={{ fontSize: "1rem", fontWeight: 700, color: "var(--text-muted)", textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: "0.85rem" }}>
            🏆 Top Hashtag — Best Avg. Impressions Per Post
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))", gap: "1rem" }}>
            {sortedHashtags.slice(0, 3).map((h, idx) => (
              <div key={h.tag} className="glass-card" style={{ borderLeft: `4px solid ${idx === 0 ? "var(--accent-primary)" : idx === 1 ? "var(--accent-cyan)" : "var(--accent-emerald)"}`, position: "relative", overflow: "hidden" }}>
                {idx === 0 && (
                  <div style={{ position: "absolute", top: "0.75rem", right: "0.75rem", fontSize: "1.25rem" }}>🥇</div>
                )}
                {idx === 1 && (
                  <div style={{ position: "absolute", top: "0.75rem", right: "0.75rem", fontSize: "1.25rem" }}>🥈</div>
                )}
                {idx === 2 && (
                  <div style={{ position: "absolute", top: "0.75rem", right: "0.75rem", fontSize: "1.25rem" }}>🥉</div>
                )}
                <div style={{ marginBottom: "0.75rem" }}>
                  <span className="chip" style={{ fontSize: "0.95rem", padding: "0.35rem 0.85rem", fontWeight: 700 }}>{h.tag}</span>
                </div>
                <div style={{ fontSize: "1.8rem", fontWeight: 800, color: idx === 0 ? "var(--accent-primary)" : idx === 1 ? "var(--accent-cyan)" : "var(--accent-emerald)", marginBottom: "0.25rem" }}>
                  {h.avgImpressionsPerPost.toLocaleString()}
                </div>
                <div style={{ fontSize: "0.8rem", color: "var(--text-muted)", marginBottom: "0.75rem" }}>avg views per post</div>
                <div style={{ display: "flex", gap: "1rem", fontSize: "0.82rem" }}>
                  <div><span style={{ color: "var(--text-muted)" }}>Posts:</span> <strong>{h.contentCount}</strong></div>
                  <div><span style={{ color: "var(--text-muted)" }}>Total Views:</span> <strong>{h.impressions.toLocaleString()}</strong></div>
                  <div><span style={{ color: "var(--text-muted)" }}>ER:</span> <strong style={{ color: "var(--accent-primary)" }}>{h.avgEr}%</strong></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      <div className="table-container">
        <table className="custom-table">
          <thead>
            <tr>
              <th>Hashtag Tag</th>
              <th>Contents Used</th>
              <th>Avg Views / Post</th>
              <th>Total Viewers (Impressions)</th>
              <th>Total Reach</th>
              <th>Total Engagement</th>
              <th>Avg Engagement Rate %</th>
            </tr>
          </thead>
          <tbody>
            {sortedHashtags.map(h => (
              <tr key={h.tag}>
                <td><span className="chip">{h.tag}</span></td>
                <td>{h.contentCount} posts</td>
                <td style={{ color: "var(--accent-emerald)", fontWeight: 700 }}>{h.avgImpressionsPerPost.toLocaleString()}</td>
                <td style={{ color: "var(--accent-cyan)", fontWeight: 700 }}>{h.impressions.toLocaleString()}</td>
                <td>{h.reach.toLocaleString()}</td>
                <td>{h.engagement.toLocaleString()}</td>
                <td style={{ color: "var(--accent-primary)", fontWeight: 700 }}>{h.avgEr}%</td>
              </tr>
            ))}
            {sortedHashtags.length === 0 && (
              <tr>
                <td colSpan="7" style={{ textAlign: "center", padding: "2.5rem", color: "var(--text-muted)" }}>No hashtag data yet. Add hashtags to your content entries.</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

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
          )
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
            <h3 style={{ fontSize: "1.05rem", fontWeight: 700, marginBottom: "0.1rem" }}>🔗 Shareable Vault Link</h3>
            <p style={{ fontSize: "0.8rem", color: "var(--text-muted)" }}>Anyone with this link who is on the collaborators list can access this vault</p>
          </div>
        </div>
        <div style={{ display: "flex", gap: "0.75rem", alignItems: "center" }}>
          <input type="text" className="form-input" readOnly value={shareLink} style={{ flex: 1, fontSize: "0.82rem" }} onClick={e => e.target.select()} />
          <button onClick={handleCopy} className={`btn ${copied ? "btn-secondary" : "btn-primary"}`} style={{ whiteSpace: "nowrap", minWidth: "110px" }}>
            {copied ? "✅ Copied!" : "📋 Copy Link"}
          </button>
        </div>
        <p style={{ fontSize: "0.78rem", color: "var(--text-muted)", marginTop: "0.75rem", background: "rgba(255,255,255,0.04)", borderRadius: "8px", padding: "0.6rem 0.75rem" }}>
          ℹ️ <strong>How it works:</strong> First add the collaborator's email below, then share this link with them. When they open the link and log in, the vault will automatically appear in their account.
        </p>
      </div>

      {/* Invite Form */}
      {isOwner && (
        <div className="glass-card" style={{ marginBottom: "1.5rem" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "1rem" }}>
            <div style={{ width: "36px", height: "36px", borderRadius: "10px", background: "linear-gradient(135deg, var(--accent-emerald), var(--accent-cyan))", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <i data-lucide="user-plus" style={{ width: "18px", height: "18px", color: "#fff" }}></i>
            </div>
            <h3 style={{ fontSize: "1.05rem", fontWeight: 700 }}>✉️ Invite Collaborator</h3>
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
        <h3 style={{ fontSize: "1.05rem", fontWeight: 700, marginBottom: "1rem" }}>👥 Vault Members ({1 + (activeAccount.collaborators || []).length})</h3>
        <div style={{ display: "flex", flexDirection: "column", gap: "0.6rem" }}>
          {/* Owner row */}
          <div style={{ display: "flex", alignItems: "center", gap: "1rem", padding: "0.75rem 1rem", background: "rgba(255,255,255,0.04)", borderRadius: "10px", border: "1px solid var(--border-color)" }}>
            <div style={{ width: "36px", height: "36px", borderRadius: "50%", background: "linear-gradient(135deg, var(--accent-primary), var(--accent-cyan))", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 700, color: "#fff", fontSize: "0.9rem" }}>
              {activeAccount.ownerEmail.charAt(0).toUpperCase()}
            </div>
            <div style={{ flex: 1 }}>
              <div style={{ fontWeight: 600, fontSize: "0.92rem" }}>👑 {activeAccount.ownerEmail}</div>
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
                <div style={{ fontWeight: 600, fontSize: "0.92rem" }}>👤 {c.email}</div>
                <div style={{ fontSize: "0.78rem", color: "var(--text-muted)" }}>Joined {c.joinedAt || "—"}</div>
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
