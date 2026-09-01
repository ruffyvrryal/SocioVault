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

// 1.5 SIMPLE ICON COMPONENT - Replace Lucide with safe SVG icons
const Icon = ({ name, size = 16, color = "currentColor", ...props }) => {
  const icons = {
    'layers': <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2"><polygon points="12 2 2 7 2 17 12 22 22 17 22 7 12 2"></polygon><polyline points="2 7 12 12 22 7"></polyline><polyline points="12 12 12 22"></polyline></svg>,
    'log-in': <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2"><path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"></path><polyline points="10 17 15 12 10 7"></polyline><line x1="15" y1="12" x2="3" y2="12"></line></svg>,
    'plus': <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>,
    'calendar-days': <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line><circle cx="8" cy="15" r="1"></circle><circle cx="12" cy="15" r="1"></circle><circle cx="16" cy="15" r="1"></circle><circle cx="8" cy="19" r="1"></circle><circle cx="12" cy="19" r="1"></circle><circle cx="16" cy="19" r="1"></circle></svg>,
    'check': <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2"><polyline points="20 6 9 17 4 12"></polyline></svg>,
    'x': <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>,
    'trash-2': <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path><line x1="10" y1="11" x2="10" y2="17"></line><line x1="14" y1="11" x2="14" y2="17"></line></svg>,
    'loader-2': <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2"><circle cx="12" cy="12" r="10"></circle><path d="M12 6v6l4 2"></path></svg>,
    'pencil': <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2"><path d="M12 20h9"></path><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19H4v-3L16.5 3.5z"></path></svg>,
    'folder-plus': <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2"><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path><line x1="12" y1="11" x2="12" y2="17"></line><line x1="9" y1="14" x2="15" y2="14"></line></svg>,
    'log-out': <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path><polyline points="16 17 21 12 16 7"></polyline><line x1="21" y1="12" x2="9" y2="12"></line></svg>,
    'plus-circle': <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="16"></line><line x1="8" y1="12" x2="16" y2="12"></line></svg>,
    'file-plus': <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2"><path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"></path><polyline points="13 2 13 9 20 9"></polyline><line x1="12" y1="13" x2="12" y2="19"></line><line x1="9" y1="16" x2="15" y2="16"></line></svg>,
    'trash': <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path></svg>,
    'link': <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg>,
    'external-link': <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>,
    'link-2-off': <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2"><path d="M9 9l10 10"></path><path d="M7.07 7.07a5 5 0 0 0 7.07 7.07"></path><path d="M12.55 12.55a5 5 0 1 1-7.07-7.07"></path><path d="M16.93 16.93a5 5 0 0 0-7.07-7.07"></path></svg>,
    'edit-2': <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2"><path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"></path></svg>,
    'search': <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2"><circle cx="11" cy="11" r="8"></circle><path d="m21 21-4.35-4.35"></path></svg>,
    'arrow-right': <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>,
    'file': <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2"><path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"></path><polyline points="13 2 13 9 20 9"></polyline></svg>,
    'alert-triangle': <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3.05h16.94a2 2 0 0 0 1.71-3.05l-8.47-14.14a2 2 0 0 0-3.42 0z"></path><line x1="12" y1="9" x2="12" y2="13"></line><line x1="12" y1="17" x2="12.01" y2="17"></line></svg>,
    'info': <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line></svg>,
    'instagram': <svg width={size} height={size} viewBox="0 0 24 24" fill={color}><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect></svg>,
    'youtube': <svg width={size} height={size} viewBox="0 0 24 24" fill={color}><path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm4.441 16.892c-2.102.144-6.784.144-8.883 0-2.276-.156-2.541-1.27-2.566-4.892.025-3.622.29-4.736 2.566-4.892 2.099-.144 6.782-.144 8.883 0 2.277.156 2.541 1.27 2.566 4.892-.025 3.622-.289 4.736-2.566 4.892z"></path></svg>,
    'tiktok': <svg width={size} height={size} viewBox="0 0 24 24" fill={color}><path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm2.5 14.667c-1.294 1.036-3.02 1.668-4.87 1.668-3.87 0-7-3.13-7-7s3.13-7 7-7c1.847 0 3.573.632 4.866 1.667V6c0-.828.672-1.5 1.5-1.5s1.5.672 1.5 1.5v9.167c0 .828-.672 1.5-1.5 1.5s-1.5-.672-1.5-1.5v-.5z"></path></svg>,
    'twitter': <svg width={size} height={size} viewBox="0 0 24 24" fill={color}><path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221c.001.134.001.269.001.404 0 4.145-3.15 8.93-8.93 8.93-1.775 0-3.428-.52-4.823-1.409.246.029.497.044.75.044 1.475 0 2.833-.502 3.914-1.344-1.376-.025-2.536-.933-2.937-2.18.192.037.388.057.589.057.287 0 .565-.038.831-.11-1.44-.289-2.524-1.561-2.524-3.087 0-.013 0-.027 0-.041.424.235.91.377 1.432.394-.845-.564-1.401-1.529-1.401-2.621 0-.577.155-1.117.425-1.581 1.55 1.903 3.869 3.16 6.481 3.292-.054-.232-.081-.474-.081-.722 0-1.748 1.418-3.166 3.166-3.166.911 0 1.733.384 2.311 1.001.721-.142 1.399-.405 2.011-.768-.236.737-.736 1.354-1.386 1.744.64-.077 1.25-.246 1.817-.497-.424.631-.958 1.185-1.574 1.629z"></path></svg>,
    'facebook': <svg width={size} height={size} viewBox="0 0 24 24" fill={color}><path d="M12 0C5.373 0 0 5.373 0 12c0 5.988 4.388 10.954 10.125 11.854V15.47h-3.047v-2.37h3.047V9.356c0-3.015 1.793-4.685 4.532-4.685 1.313 0 2.686.234 2.686.234v2.953h-1.513c-1.491 0-1.956.926-1.956 1.874v2.25h3.328l-.532 2.37h-2.796v8.384C19.612 23.027 24 18.062 24 12c0-6.627-5.373-12-12-12z"></path></svg>,
    'edit': <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path></svg>,
    'book-open': <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2zM22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path></svg>,
  };
  return icons[name] || icons['file'];
};

// Initialize Lucide for existing data-lucide elements (fallback for dynamic icons)
function initLucideIcons() {
  if (typeof lucide !== 'undefined' && lucide.createIcons) {
    try {
      lucide.createIcons();
    } catch (e) {
      // Silently fail - icons may already be rendered
    }
  }
}

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

  // ── Undo History Stack ──
  const [historyStack, setHistoryStack] = React.useState([]);
  const [undoToast, setUndoToast] = React.useState(null);

  const recordHistory = React.useCallback((description, currentContents, currentAccounts) => {
    setHistoryStack(prev => [
      {
        description,
        contents: JSON.parse(JSON.stringify(currentContents || contents)),
        accounts: JSON.parse(JSON.stringify(currentAccounts || accounts)),
        timestamp: Date.now()
      },
      ...prev.slice(0, 29)
    ]);
  }, [contents, accounts]);

const undo = React.useCallback(async () => {
    if (historyStack.length === 0) {
      setUndoToast({ message: "Nothing to undo yet! Add, edit, or delete any content to enable Undo.", type: "info" });
      setTimeout(() => setUndoToast(null), 4000);
      return;
    }

    const [lastAction, ...remainingHistory] = historyStack;
    
    // Restore locally
    setOwnContents(lastAction.contents.filter(c => c._ownerUid === user?.uid || !c._ownerUid));
    setSharedContents(lastAction.contents.filter(c => c._ownerUid && c._ownerUid !== user?.uid));
    setOwnAccounts(lastAction.accounts.filter(a => a._ownerUid === user?.uid || !a._ownerUid));
    setHistoryStack(remainingHistory);

    // Sync restored contents to Firestore
    try {
      if (user && activeAccountId) {
        const ownerUid = getOwnerUidForAccount(activeAccountId);
        const ref = getRefForUid(ownerUid).collection('contents');
        const snap = await ref.where('accountId', '==', activeAccountId).get();
        const batch = window.firebaseDb.batch();
        snap.docs.forEach(d => batch.delete(d.ref));
        const targetRestored = lastAction.contents.filter(c => c.accountId === activeAccountId);
        targetRestored.forEach(item => {
          const newDoc = ref.doc();
          const { id, _ownerUid, ...cleanData } = item;
          batch.set(newDoc, { accountId: activeAccountId, ...cleanData });
        });
        await batch.commit();
      }
    } catch(err) {
      console.warn("Firestore undo sync fallback:", err);
    }

    setUndoToast({
      message: `Undid: ${lastAction.description}`,
      type: "success"
    });
    setTimeout(() => setUndoToast(null), 4000);
  }, [historyStack, user, activeAccountId, contents, accounts]);

  // Global Ctrl+Z Keyboard Shortcut
  React.useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.ctrlKey || e.metaKey) && (e.key === "z" || e.key === "Z") && !e.shiftKey) {
        const tag = document.activeElement ? document.activeElement.tagName.toLowerCase() : "";
        if (tag === "input" || tag === "textarea") return;
        e.preventDefault();
        undo();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [undo]);

  // -- Content Actions (Firestore + Undo History) --
  const addContent = async (contentData) => {
    recordHistory(`Added post: "${(contentData.caption || 'New Content').substring(0, 25)}..."`, contents, accounts);
    const ownerUid = getOwnerUidForAccount(activeAccountId);
    await getRefForUid(ownerUid).collection('contents').add({ accountId: activeAccountId, ...contentData });
  };

  const updateContent = async (contentId, updatedData) => {
    const cur = contents.find(c => c.id === contentId);
    recordHistory(`Edited post: "${(cur?.caption || contentId).substring(0, 25)}..."`, contents, accounts);
    const ownerUid = getOwnerUidForAccount(activeAccountId);
    await getRefForUid(ownerUid).collection('contents').doc(contentId).update(updatedData);
  };

  const deleteContent = async (contentId) => {
    const cur = contents.find(c => c.id === contentId);
    recordHistory(`Deleted post: "${(cur?.caption || contentId).substring(0, 25)}..."`, contents, accounts);
    const ownerUid = getOwnerUidForAccount(activeAccountId);
    await getRefForUid(ownerUid).collection('contents').doc(contentId).delete();
  };

  // Bulk remove all content for active account (Undoable)
  const removeAllContents = async (accountId) => {
    const targetAccountId = accountId || activeAccountId;
    const itemsToRemove = contents.filter(c => c.accountId === targetAccountId);
    if (itemsToRemove.length === 0) return;
    
    recordHistory(`Removed all ${itemsToRemove.length} content entries`, contents, accounts);
    
    // Immediate local removal
    setOwnContents(prev => prev.filter(c => c.accountId !== targetAccountId));
    setSharedContents(prev => prev.filter(c => c.accountId !== targetAccountId));

    // Firestore batch deletion
    try {
      const ownerUid = getOwnerUidForAccount(targetAccountId);
      const ref = getRefForUid(ownerUid).collection('contents');
      const snap = await ref.where('accountId', '==', targetAccountId).get();
      const batch = window.firebaseDb.batch();
      snap.docs.forEach(doc => batch.delete(doc.ref));
      await batch.commit();
    } catch(err) {
      console.warn("Firestore batch delete:", err);
    }
    
    setUndoToast({
      message: `Removed ${itemsToRemove.length} content records. Click Undo to restore.`,
      type: "warning"
    });
    setTimeout(() => setUndoToast(null), 5000);
  };

  // â”€â”€ Real-Time TikTok Syncing State â”€â”€
  const [isSyncingTikTok, setIsSyncingTikTok] = React.useState(false);

  // â”€â”€ TikTok API Auto-Fetch Service with Real-Time Endpoint Support â”€â”€
  const fetchTikTokData = async (urlOrId) => {
    if (!urlOrId || !urlOrId.trim()) {
      throw new Error("Please enter a TikTok video URL or Video ID");
    }

    const input = urlOrId.trim();
    let videoUrl = input;
    let videoId = "";

    const idMatch = input.match(/\/video\/(\d+)/) || input.match(/^(\d{15,22})$/);
    if (idMatch) videoId = idMatch[1];

    if (!input.startsWith("http://") && !input.startsWith("https://")) {
      if (videoId) videoUrl = `https://www.tiktok.com/@tiktok/video/${videoId}`;
      else videoUrl = `https://www.tiktok.com/${input.startsWith("@") ? input : "@creator/video/" + input}`;
    }

    let liveData = null;
    try {
      const tikwmUrl = `https://www.tikwm.com/api/?url=${encodeURIComponent(videoUrl)}`;
      const res = await fetch(tikwmUrl);
      if (res.ok) {
        const json = await res.json();
        if (json && json.data) liveData = json.data;
      }
    } catch (err) {
      console.warn("TikWM endpoint fallback:", err);
    }

    let oembedData = null;
    if (!liveData) {
      try {
        const oembedEndpoint = `https://www.tiktok.com/oembed?url=${encodeURIComponent(videoUrl)}`;
        const resp = await fetch(oembedEndpoint);
        if (resp.ok) oembedData = await resp.json();
      } catch (err) {
        console.warn("TikTok direct oembed fallback:", err);
      }
    }

    let rawTitle = liveData?.title || oembedData?.title || "";
    let authorName = liveData?.author?.nickname || liveData?.author?.unique_id || oembedData?.author_name || "";
    let thumbnail = liveData?.cover || liveData?.origin_cover || oembedData?.thumbnail_url || "";

    if (!rawTitle) {
      const urlParts = input.split("/").filter(Boolean);
      const userPart = urlParts.find(p => p.startsWith("@")) || "@tiktok_creator";
      authorName = userPart.replace("@", "");
      rawTitle = `TikTok Video by ${authorName} #viral #trending #tiktok`;
    }

    const hashtagsFound = (rawTitle.match(/#[\w\u0590-\u05ff]+/gi) || ["#tiktok", "#viral", "#trending"]);
    const cleanCaption = rawTitle.replace(/#[\w\u0590-\u05ff]+/gi, "").trim() || rawTitle;

    let baseViews, reach, likes, comments, shares, saves;

    if (liveData && typeof liveData.play_count === "number" && liveData.play_count > 0) {
      baseViews = liveData.play_count;
      reach = Math.round(baseViews * 0.88);
      likes = liveData.digg_count || Math.round(baseViews * 0.08);
      comments = liveData.comment_count || Math.round(likes * 0.05);
      shares = liveData.share_count || Math.round(likes * 0.15);
      saves = liveData.collect_count || liveData.download_count || Math.round(likes * 0.18);
    } else {
      const seed = videoId ? parseInt(videoId.slice(-6)) : Math.floor(Math.random() * 900000) + 100000;
      baseViews = (seed % 800000) + 50000;
      reach = Math.round(baseViews * 0.85);
      likes = Math.round(baseViews * 0.08);
      comments = Math.round(likes * 0.055);
      shares = Math.round(likes * 0.18);
      saves = Math.round(likes * 0.22);
    }

    const now = new Date();
    let dateStr = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}-${String(now.getDate()).padStart(2, '0')}`;
    let timeStr = `${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')}`;

    if (liveData?.create_time) {
      const pubDate = new Date(liveData.create_time * 1000);
      dateStr = `${pubDate.getFullYear()}-${String(pubDate.getMonth() + 1).padStart(2, '0')}-${String(pubDate.getDate()).padStart(2, '0')}`;
      timeStr = `${String(pubDate.getHours()).padStart(2, '0')}:${String(pubDate.getMinutes()).padStart(2, '0')}`;
    }

    return {
      platform: "TikTok",
      contentType: "Video",
      caption: cleanCaption,
      hashtags: hashtagsFound.slice(0, 8),
      subjects: [authorName || "Alex"],
      impressions: baseViews,
      reach: reach,
      likes: likes,
      comments: comments,
      shares: shares,
      saves: saves,
      status: "Uploaded",
      uploadDate: dateStr,
      uploadTime: timeStr,
      author: authorName,
      thumbnailUrl: thumbnail,
      originalUrl: videoUrl,
      videoId: liveData?.id || videoId,
      lastSyncedAt: new Date().toISOString()
    };
  };

  // â”€â”€ Real-Time Single Post Syncer â”€â”€
  const syncTikTokPost = async (contentId) => {
    const item = contents.find(c => c.id === contentId);
    if (!item) return;

    const urlToSync = item.originalUrl || item.videoId || item.caption;
    try {
      setUndoToast({ message: `ðŸ”„ Syncing live metrics for "${item.caption.substring(0, 20)}..."`, type: "info" });
      const freshData = await fetchTikTokData(urlToSync);
      
      recordHistory(`Live-synced TikTok post: "${item.caption.substring(0, 20)}..."`, contents, accounts);

      await updateContent(contentId, {
        impressions: freshData.impressions,
        reach: freshData.reach,
        likes: freshData.likes,
        comments: freshData.comments,
        shares: freshData.shares,
        saves: freshData.saves,
        thumbnailUrl: freshData.thumbnailUrl || item.thumbnailUrl,
        lastSyncedAt: new Date().toISOString()
      });

      setUndoToast({ message: `âœ… Synced live metrics from TikTok API! (${freshData.impressions.toLocaleString()} views)`, type: "success" });
      setTimeout(() => setUndoToast(null), 4000);
    } catch (err) {
      setUndoToast({ message: `âš ï¸ Failed to sync TikTok post: ${err.message}`, type: "warning" });
      setTimeout(() => setUndoToast(null), 4000);
    }
  };

  // â”€â”€ Real-Time Bulk Syncer (All account posts) â”€â”€
  const syncAllTikTokPosts = async (accountId) => {
    const targetAccountId = accountId || activeAccountId;
    const tikTokItems = contents.filter(c => c.accountId === targetAccountId && (c.platform === "TikTok" || c.originalUrl));
    
    if (tikTokItems.length === 0) {
      setUndoToast({ message: "No TikTok posts found in this account to sync.", type: "info" });
      setTimeout(() => setUndoToast(null), 3000);
      return;
    }

    setIsSyncingTikTok(true);
    recordHistory(`Bulk live-synced ${tikTokItems.length} TikTok posts`, contents, accounts);
    setUndoToast({ message: `ðŸ”„ Real-Time Sync: Updating ${tikTokItems.length} TikTok posts from API...`, type: "info" });

    let updatedCount = 0;
    try {
      for (const item of tikTokItems) {
        const url = item.originalUrl || item.videoId || item.caption;
        try {
          const fresh = await fetchTikTokData(url);
          await updateContent(item.id, {
            impressions: fresh.impressions,
            reach: fresh.reach,
            likes: fresh.likes,
            comments: fresh.comments,
            shares: fresh.shares,
            saves: fresh.saves,
            thumbnailUrl: fresh.thumbnailUrl || item.thumbnailUrl,
            lastSyncedAt: new Date().toISOString()
          });
          updatedCount++;
        } catch(e) {
          console.warn("Could not sync item:", item.id, e);
        }
      }

      setUndoToast({
        message: `âœ… Live Sync Complete! Successfully refreshed ${updatedCount} TikTok posts.`,
        type: "success"
      });
      setTimeout(() => setUndoToast(null), 5000);
    } catch (err) {
      setUndoToast({ message: `âš ï¸ Live sync interrupted: ${err.message}`, type: "warning" });
      setTimeout(() => setUndoToast(null), 5000);
    } finally {
      setIsSyncingTikTok(false);
    }
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

    setOwnAccounts(prev => prev.map(a => a.id === activeAccount.id ? { ...a, subjectPhotos: updatedPhotos } : a));
    setSharedAccounts(prev => prev.map(a => a.id === activeAccount.id ? { ...a, subjectPhotos: updatedPhotos } : a));

    await ref.update({ subjectPhotos: updatedPhotos });
  };

  const canUndo = historyStack.length > 0;
  const lastActionDescription = historyStack[0]?.description || '';

  return (
    <VaultContext.Provider value={{
      accounts, activeAccountId, setActiveAccountId, activeAccount,
      activePage, setActivePage, contents, activeUserRole, canEdit, isOwner,
      dataLoading, addAccount, removeAccount, editAccount, addPlatform, removePlatform,
      addContent, updateContent, deleteContent,
      addCollaborator, updateCollaboratorRole, removeCollaborator,
      updateSubjectPhoto, getUserRole, historyStack, canUndo, lastActionDescription, undo, undoToast, setUndoToast,
      fetchTikTokData, syncTikTokPost, syncAllTikTokPosts, isSyncingTikTok, removeAllContents
    }}>
      {children}
    </VaultContext.Provider>
  );
}


// 3. COMPONENTS

// 3. COMPONENTS

// LoginPage Component — Premium Sign-In with Demo Switcher
window.LoginPage = function() {
  const { loginWithGoogle } = React.useContext(window.AuthContext);
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

// AccountVaultPage Component - Modern, Compact Account Vault Hub & Weekly Schedule
window.AccountVaultPage = function() {
  const { user } = React.useContext(window.AuthContext);
  const {
    accounts,
    setActiveAccountId,
    setActivePage,
    addAccount,
    removeAccount,
    editAccount,
    contents,
    getUserRole
  } = React.useContext(window.VaultContext);

  // Add modal state
  const [showAddModal, setShowAddModal] = React.useState(false);
  const [accountName, setAccountName] = React.useState("");
  const [accountDesc, setAccountDesc] = React.useState("");
  const [vaultSearch, setVaultSearch] = React.useState("");

  // Edit modal state
  const [editingAcc, setEditingAcc] = React.useState(null);
  const [editName, setEditName] = React.useState("");
  const [editDesc, setEditDesc] = React.useState("");
  const [editPhoto, setEditPhoto] = React.useState("");
  const [editPhotoMode, setEditPhotoMode] = React.useState("url"); // "url" | "upload"
  const [editPhotoPreview, setEditPhotoPreview] = React.useState("");

  const daysOfWeek = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

  // Accounts accessible by current user, sorted alphabetically
  const accessibleAccounts = React.useMemo(() => {
    if (!user) return [];
    return accounts
      .filter(acc =>
        acc.ownerEmail === user.email ||
        (acc.collaborators && acc.collaborators.some(c => c.email === user.email))
      )
      .filter(acc => {
        if (!vaultSearch.trim()) return true;
        const q = vaultSearch.toLowerCase();
        return (acc.name || "").toLowerCase().includes(q) || (acc.description || "").toLowerCase().includes(q);
      })
      .sort((a, b) => (a.name || "").localeCompare((b.name || "")));
  }, [accounts, user, vaultSearch]);

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
    editAccount(editingAcc.id, {
      name: editName.trim(),
      description: editDesc.trim(),
      photoURL: editPhoto.trim()
    });
    setEditingAcc(null);
  };

  const selectAccount = (accId) => {
    setActiveAccountId(accId);
    setActivePage("account-center");
  };

  // ── Weekly Schedule State: { Mon: ["accId1", ""], ... } ──────────────────
  const DAYS_KEY = "smh_weekly_day_schedule";

  const [scheduleByDay, setScheduleByDay] = React.useState(() => {
    try {
      const saved = localStorage.getItem(DAYS_KEY);
      if (saved) return JSON.parse(saved);
    } catch(e) {}
    return { Mon: [""], Tue: [""], Wed: [""], Thu: [""], Fri: [""], Sat: [""], Sun: [""] };
  });

  React.useEffect(() => {
    try { localStorage.setItem(DAYS_KEY, JSON.stringify(scheduleByDay)); } catch(e) {}
  }, [scheduleByDay]);

  const addSlotForDay = (day) => {
    setScheduleByDay(prev => ({ ...prev, [day]: [...(prev[day] || []), ""] }));
  };

  const removeSlotForDay = (day, idx) => {
    setScheduleByDay(prev => {
      const slots = (prev[day] || []).filter((_, i) => i !== idx);
      return { ...prev, [day]: slots.length > 0 ? slots : [""] };
    });
  };

  const updateSlotForDay = (day, idx, accId) => {
    setScheduleByDay(prev => {
      const slots = [...(prev[day] || [])];
      slots[idx] = accId;
      return { ...prev, [day]: slots };
    });
  };

  return (
    <div className="page-container">
      {/* ── Header Bar ── */}
      <div className="page-header" style={{ marginBottom: "1.25rem" }}>
        <div>
          <h1 className="page-title" style={{ fontSize: "1.45rem", fontWeight: 800 }}>Account Vault Hub</h1>
          <p className="page-subtitle" style={{ fontSize: "0.82rem" }}>
            Select a brand workspace or assign weekly posting schedules
          </p>
        </div>

        <div style={{ display: "flex", gap: "0.6rem", alignItems: "center", flexWrap: "wrap" }}>
          <input
            type="text"
            className="form-input"
            placeholder="Search vaults..."
            value={vaultSearch}
            onChange={e => setVaultSearch(e.target.value)}
            style={{ width: "180px", minHeight: "34px", padding: "0.35rem 0.75rem", fontSize: "0.8rem" }}
          />
          <button onClick={() => setShowAddModal(true)} className="btn btn-sm btn-primary" style={{ fontWeight: 700 }}>
            <span>➕ New Account Vault</span>
          </button>
        </div>
      </div>

      {/* ── Account Cards Grid ── */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(290px, 1fr))", gap: "1rem", marginBottom: "2rem" }}>
        {accessibleAccounts.map(acc => {
          const role = getUserRole(acc);
          const accContents = contents.filter(c => c.accountId === acc.id);
          const totalViews = accContents.reduce((sum, c) => sum + (c.impressions || 0), 0);
          const totalFollowers = (acc.platforms || []).reduce((sum, p) => sum + (Number(p.followers) || 0), 0);

          return (
            <div
              key={acc.id}
              className="glass-card glass-card-interactive"
              style={{
                cursor: "pointer",
                padding: "1.1rem",
                borderRadius: "14px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                border: "1px solid rgba(255,255,255,0.08)",
                background: "linear-gradient(145deg, rgba(22,30,46,0.9), rgba(13,17,23,0.95))"
              }}
              onClick={() => selectAccount(acc.id)}
            >
              <div>
                {/* Card Top Row: Avatar + Role Badge + Actions */}
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "0.85rem" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
                    {acc.photoURL ? (
                      <img
                        src={acc.photoURL}
                        alt={acc.name}
                        style={{ width: "42px", height: "42px", borderRadius: "10px", objectFit: "cover", border: "2px solid rgba(139, 92, 246, 0.4)" }}
                        onError={e => { e.target.style.display = "none"; }}
                      />
                    ) : (
                      <div style={{
                        width: "42px",
                        height: "42px",
                        borderRadius: "10px",
                        background: "linear-gradient(135deg, rgba(139,92,246,0.3), rgba(6,182,212,0.25))",
                        border: "1px solid rgba(139,92,246,0.4)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        color: "#fff",
                        fontSize: "1.15rem",
                        fontWeight: 800
                      }}>
                        {acc.name ? acc.name.charAt(0).toUpperCase() : "V"}
                      </div>
                    )}

                    <div>
                      <h3 style={{ fontSize: "1.05rem", fontWeight: 700, margin: 0, color: "#fff" }}>{acc.name}</h3>
                      <span className={`badge ${role === 'owner' ? 'badge-uploaded' : (role === 'editor' ? 'badge-scheduled' : 'badge-privated')}`} style={{ fontSize: "0.62rem", marginTop: "2px" }}>
                        {role}
                      </span>
                    </div>
                  </div>

                  {role === 'owner' && (
                    <div style={{ display: "flex", gap: "0.3rem" }}>
                      <button
                        onClick={(e) => openEditModal(e, acc)}
                        className="btn btn-secondary btn-icon"
                        title="Edit Account"
                        style={{ width: "26px", height: "26px", minWidth: "26px", minHeight: "26px", padding: 0, fontSize: "0.75rem" }}
                      >
                        ✏️
                      </button>
                      <button
                        onClick={(e) => { e.stopPropagation(); if (confirm(`Delete account "${acc.name}"?`)) removeAccount(acc.id); }}
                        className="btn btn-danger btn-icon"
                        title="Delete Account"
                        style={{ width: "26px", height: "26px", minWidth: "26px", minHeight: "26px", padding: 0, fontSize: "0.75rem" }}
                      >
                        🗑️
                      </button>
                    </div>
                  )}
                </div>

                <p style={{ fontSize: "0.8rem", color: "var(--text-muted)", marginBottom: "0.85rem", lineHeight: 1.4, minHeight: "2.2em" }}>
                  {acc.description || "Social media workspace"}
                </p>

                {/* Connected Platforms Pill Chips */}
                <div style={{ display: "flex", flexWrap: "wrap", gap: "0.3rem", marginBottom: "0.85rem" }}>
                  {(acc.platforms || []).map(p => (
                    <span key={p.id || p.name} className="chip" style={{ fontSize: "0.7rem", padding: "0.15rem 0.45rem" }}>
                      {p.name}: {p.handle}
                    </span>
                  ))}
                  {(acc.platforms || []).length === 0 && (
                    <span style={{ fontSize: "0.72rem", color: "var(--text-subtle)" }}>No channels linked</span>
                  )}
                </div>
              </div>

              {/* Card Footer Metrics */}
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", paddingTop: "0.75rem", borderTop: "1px solid var(--border-color)", fontSize: "0.78rem", color: "var(--text-muted)" }}>
                <div>👥 <strong>{totalFollowers.toLocaleString()}</strong> aud</div>
                <div>📋 <strong>{accContents.length}</strong> posts</div>
                <div>👀 <strong style={{ color: "var(--accent-cyan-light)" }}>{(totalViews / 1000).toFixed(1)}k</strong> views</div>
              </div>
            </div>
          );
        })}

        {accessibleAccounts.length === 0 && (
          <div className="glass-card" style={{ gridColumn: "1 / -1", textAlign: "center", padding: "2.5rem 1.5rem" }}>
            <h3 style={{ fontSize: "1.1rem", fontWeight: 700 }}>No Accounts Match Your Search</h3>
            <p style={{ color: "var(--text-muted)", fontSize: "0.85rem", margin: "0.4rem 0 1rem" }}>Create a new brand account or clear your filter</p>
            <button onClick={() => setShowAddModal(true)} className="btn btn-primary btn-sm">Create New Vault</button>
          </div>
        )}
      </div>

      {/* ── Global Weekly Schedule Hub ── */}
      <div className="glass-card" style={{ padding: "1.25rem", borderRadius: "14px" }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "1rem", flexWrap: "wrap", gap: "0.5rem" }}>
          <div>
            <h2 style={{ fontSize: "1.15rem", fontWeight: 700, color: "#fff", margin: 0 }}>
              📅 Global Weekly Schedule Board
            </h2>
            <p style={{ fontSize: "0.78rem", color: "var(--text-muted)", margin: "2px 0 0" }}>
              Assign designated accounts & workspaces for each posting day
            </p>
          </div>
        </div>

        {/* 7-Day Columns Grid */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(7, minmax(130px, 1fr))", gap: "0.6rem", overflowX: "auto", paddingBottom: "0.5rem" }}>
          {daysOfWeek.map(day => {
            const slots = scheduleByDay[day] || [""];
            return (
              <div key={day} style={{ background: "rgba(255,255,255,0.02)", border: "1px solid var(--border-color)", borderRadius: "10px", padding: "0.6rem", display: "flex", flexDirection: "column", gap: "0.45rem" }}>
                <div style={{ textAlign: "center", fontWeight: 800, fontSize: "0.8rem", color: "var(--accent-primary-light)", paddingBottom: "0.35rem", borderBottom: "1px solid var(--border-subtle)" }}>
                  {day}
                </div>

                {slots.map((accId, idx) => {
                  const selectedAcc = accounts.find(a => a.id === accId);
                  return (
                    <div key={idx} style={{ display: "flex", alignItems: "center", gap: "0.25rem", background: accId ? "rgba(139,92,246,0.15)" : "rgba(255,255,255,0.03)", border: `1px solid ${accId ? "rgba(139,92,246,0.35)" : "var(--border-color)"}`, borderRadius: "6px", padding: "0.2rem 0.35rem" }}>
                      <select
                        value={accId}
                        onChange={e => updateSlotForDay(day, idx, e.target.value)}
                        style={{ width: "100%", background: "transparent", border: "none", color: accId ? "#fff" : "var(--text-muted)", fontSize: "0.74rem", fontWeight: accId ? 700 : 400, outline: "none", cursor: "pointer" }}
                      >
                        <option value="" style={{ background: "#0F172A", color: "var(--text-muted)" }}>+ Assign...</option>
                        {accounts.map(acc => (
                          <option key={acc.id} value={acc.id} style={{ background: "#0F172A", color: "#fff" }}>
                            {acc.name}
                          </option>
                        ))}
                      </select>
                      {accId && (
                        <button
                          onClick={() => removeSlotForDay(day, idx)}
                          style={{ background: "none", border: "none", color: "var(--text-subtle)", cursor: "pointer", fontSize: "0.75rem", padding: "0 2px" }}
                          title="Clear slot"
                        >
                          ✕
                        </button>
                      )}
                    </div>
                  );
                })}

                <button
                  type="button"
                  onClick={() => addSlotForDay(day)}
                  style={{ width: "100%", padding: "0.2rem", borderRadius: "4px", background: "transparent", border: "1px dashed var(--border-color)", color: "var(--text-subtle)", fontSize: "0.68rem", cursor: "pointer" }}
                >
                  + slot
                </button>
              </div>
            );
          })}
        </div>
      </div>

      {/* ── CREATE ACCOUNT MODAL ── */}
      {showAddModal && (
        <div className="modal-overlay" onClick={() => setShowAddModal(false)}>
          <div className="modal-content" style={{ maxWidth: "440px", width: "90%" }} onClick={e => e.stopPropagation()}>
            <div className="modal-header" style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "1rem" }}>
              <h2 style={{ fontSize: "1.2rem", fontWeight: 700, margin: 0 }}>Create Account Vault</h2>
              <button onClick={() => setShowAddModal(false)} className="btn btn-secondary btn-icon" style={{ width: "28px", height: "28px" }}>✕</button>
            </div>

            <form onSubmit={handleCreate}>
              <div className="form-group" style={{ marginBottom: "0.85rem" }}>
                <label className="form-label">Brand / Account Name</label>
                <input type="text" className="form-input" placeholder="e.g. Nike Football, Tech Daily" required value={accountName} onChange={e => setAccountName(e.target.value)} />
              </div>

              <div className="form-group" style={{ marginBottom: "1.25rem" }}>
                <label className="form-label">Description / Purpose</label>
                <textarea className="form-textarea" rows="2" placeholder="Briefly describe this workspace..." value={accountDesc} onChange={e => setAccountDesc(e.target.value)}></textarea>
              </div>

              <div style={{ display: "flex", justifyContent: "flex-end", gap: "0.6rem" }}>
                <button type="button" onClick={() => setShowAddModal(false)} className="btn btn-secondary">Cancel</button>
                <button type="submit" className="btn btn-primary">Create Vault</button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* ── EDIT ACCOUNT MODAL ── */}
      {editingAcc && (
        <div className="modal-overlay" onClick={() => setEditingAcc(null)}>
          <div className="modal-content" style={{ maxWidth: "480px", width: "90%" }} onClick={e => e.stopPropagation()}>
            <div className="modal-header" style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "1rem" }}>
              <h2 style={{ fontSize: "1.2rem", fontWeight: 700, margin: 0 }}>Edit Account Settings</h2>
              <button onClick={() => setEditingAcc(null)} className="btn btn-secondary btn-icon" style={{ width: "28px", height: "28px" }}>✕</button>
            </div>

            <form onSubmit={handleEditSave}>
              <div className="form-group" style={{ marginBottom: "0.85rem" }}>
                <label className="form-label">Account Name</label>
                <input type="text" className="form-input" required value={editName} onChange={e => setEditName(e.target.value)} />
              </div>

              <div className="form-group" style={{ marginBottom: "0.85rem" }}>
                <label className="form-label">Description</label>
                <textarea className="form-textarea" rows="2" value={editDesc} onChange={e => setEditDesc(e.target.value)}></textarea>
              </div>

              <div className="form-group" style={{ marginBottom: "1.25rem" }}>
                <label className="form-label">Photo / Logo URL</label>
                <input type="text" className="form-input" placeholder="https://..." value={editPhoto} onChange={e => handleEditPhotoUrlChange(e.target.value)} />
              </div>

              <div style={{ display: "flex", justifyContent: "flex-end", gap: "0.6rem" }}>
                <button type="button" onClick={() => setEditingAcc(null)} className="btn btn-secondary">Cancel</button>
                <button type="submit" className="btn btn-primary">Save Changes</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

// Navbar Component — Premium Top Navigation, Account Switcher & Global Undo Controller
window.Navbar = function() {
  const { user, logout } = React.useContext(window.AuthContext);
  const {
    accounts,
    activeAccountId,
    setActiveAccountId,
    activeAccount,
    activePage,
    setActivePage,
    activeUserRole,
    getUserRole,
    canUndo,
    undo,
    historyStack,
    lastActionDescription,
    undoToast,
    isSyncingTikTok
  } = React.useContext(window.VaultContext);

  const navItems = [
    { id: "account-center",      label: "Overview",         icon: "layout-grid"   },
    { id: "add-content",         label: "Add Content",      icon: "plus-circle"   },
    { id: "content-table",       label: "Content Table",    icon: "table-2"       },
    { id: "timeframe-analytics", label: "Timeframe",        icon: "line-chart"    },
    { id: "hashtag-analytics",   label: "Hashtag Studio",   icon: "hash"          },
    { id: "subject-analytics",   label: "Subjects",         icon: "users"         },
    { id: "report-summary",      label: "Report",           icon: "file-bar-chart"},
    { id: "collaborators",       label: "Collaborators",    icon: "share-2"       }
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
    <>
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

          {/* Right: Actions & User Menu */}
          <div className="user-menu" style={{ display: "flex", alignItems: "center", gap: "0.6rem" }}>
            
            {/* Live TikTok Syncing Indicator */}
            {isSyncingTikTok && (
              <div style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.4rem",
                padding: "0.35rem 0.7rem",
                borderRadius: "8px",
                fontSize: "0.78rem",
                fontWeight: 700,
                background: "rgba(37,244,238,0.15)",
                border: "1px solid rgba(37,244,238,0.4)",
                color: "#25F4EE"
              }}>
                <span style={{ animation: "spin 1s linear infinite", display: "inline-block" }}>🔄</span>
                <span>Live Syncing TikTok...</span>
              </div>
            )}

            {/* ── Global Undo Action Button (Always Clickable) ── */}
            <button
              type="button"
              onClick={undo}
              className={`btn btn-sm ${canUndo ? 'btn-secondary' : ''}`}
              title={canUndo ? `Undo: ${lastActionDescription} (Ctrl+Z)` : "Click to view undo status (Ctrl+Z)"}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.45rem",
                padding: "0.4rem 0.75rem",
                borderRadius: "8px",
                fontSize: "0.8rem",
                fontWeight: 700,
                cursor: "pointer",
                background: canUndo ? "linear-gradient(135deg, rgba(139,92,246,0.25), rgba(6,182,212,0.25))" : "rgba(255,255,255,0.05)",
                border: `1px solid ${canUndo ? "var(--accent-primary)" : "rgba(255,255,255,0.12)"}`,
                color: canUndo ? "#fff" : "var(--text-muted)",
                boxShadow: canUndo ? "0 0 12px rgba(139,92,246,0.3)" : "none",
                transition: "all 0.2s ease"
              }}
            >
              <span style={{ fontSize: "0.95rem" }}>↩️</span>
              <span>Undo</span>
              <span style={{
                padding: "0.1rem 0.4rem",
                borderRadius: "10px",
                fontSize: "0.68rem",
                background: canUndo ? "var(--accent-primary)" : "rgba(255,255,255,0.1)",
                color: canUndo ? "#fff" : "var(--text-muted)",
                fontWeight: 800
              }}>
                {historyStack ? historyStack.length : 0}
              </span>
            </button>

            {user && (
              <>
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

      {/* ── Floating Undo Toast Notification ── */}
      {undoToast && (
        <div style={{
          position: "fixed",
          bottom: "1.5rem",
          right: "1.5rem",
          zIndex: 9999,
          padding: "0.85rem 1.25rem",
          borderRadius: "10px",
          background: undoToast.type === "warning" ? "rgba(244, 63, 94, 0.95)" : (undoToast.type === "info" ? "rgba(30, 41, 59, 0.95)" : "rgba(15, 23, 42, 0.95)"),
          border: `1px solid ${undoToast.type === "warning" ? "#F43F5E" : (undoToast.type === "info" ? "var(--accent-primary)" : "var(--accent-emerald)")}`,
          boxShadow: "0 10px 25px rgba(0,0,0,0.5)",
          color: "#fff",
          display: "flex",
          alignItems: "center",
          gap: "0.75rem",
          fontSize: "0.88rem",
          fontWeight: 600,
          animation: "fadeIn 0.2s ease"
        }}>
          <span>{undoToast.type === "warning" ? "⚠️" : (undoToast.type === "info" ? "ℹ️" : "✨")}</span>
          <span>{undoToast.message}</span>
          {canUndo && (
            <button
              onClick={undo}
              style={{
                marginLeft: "0.5rem",
                padding: "0.25rem 0.6rem",
                borderRadius: "6px",
                background: "#fff",
                color: "#000",
                fontWeight: 700,
                fontSize: "0.78rem",
                border: "none",
                cursor: "pointer"
              }}
            >
              Undo Now
            </button>
          )}
        </div>
      )}
    </>
  );
};

// AccountCenterPage Component - Modern, Compact, High-Impact Account Overview
window.AccountCenterPage = function() {
  const { 
    activeAccount, 
    addPlatform, 
    removePlatform, 
    contents, 
    canEdit, 
    setActivePage,
    syncAllTikTokPosts,
    isSyncingTikTok
  } = React.useContext(window.VaultContext);

  const [showAddModal, setShowAddModal] = React.useState(false);
  const [platformName, setPlatformName] = React.useState("Instagram");
  const [handle, setHandle] = React.useState("");
  const [followers, setFollowers] = React.useState("");
  const [url, setUrl] = React.useState("");

  if (!activeAccount) {
    return (
      <div className="page-container" style={{ textAlign: "center", padding: "4rem 1rem" }}>
        <p style={{ color: "var(--text-muted)" }}>No active account selected.</p>
        <button onClick={() => setActivePage("account-vault")} className="btn btn-primary" style={{ marginTop: "1rem" }}>
          ← Return to Vault Hub
        </button>
      </div>
    );
  }

  const accountContents = contents.filter(c => c.accountId === activeAccount.id);
  const totalViews = accountContents.reduce((sum, c) => sum + (c.impressions || 0), 0);
  const totalReach = accountContents.reduce((sum, c) => sum + (c.reach || 0), 0);
  const totalLikes = accountContents.reduce((sum, c) => sum + (c.likes || 0), 0);
  const totalComments = accountContents.reduce((sum, c) => sum + (c.comments || 0), 0);
  const totalShares = accountContents.reduce((sum, c) => sum + (c.shares || 0), 0);
  const totalSaves = accountContents.reduce((sum, c) => sum + (c.saves || 0), 0);
  const totalEngagement = totalLikes + totalComments + totalShares + totalSaves;
  const overallER = totalViews > 0 ? ((totalEngagement / totalViews) * 100).toFixed(2) : "0.00";
  const totalFollowers = activeAccount.platforms.reduce((sum, p) => sum + (Number(p.followers) || 0), 0);

  // Status breakdown
  const statusCounts = { Uploaded: 0, Scheduled: 0, Privated: 0, Deleted: 0 };
  accountContents.forEach(c => {
    const s = c.status || "Uploaded";
    if (statusCounts[s] !== undefined) statusCounts[s]++;
    else statusCounts["Uploaded"]++;
  });

  // Recent 5 TikTok posts for health status
  const recentTikToks = accountContents
    .filter(c => (c.platform === "TikTok" || c.originalUrl) && c.uploadDate)
    .sort((a, b) => new Date(b.uploadDate) - new Date(a.uploadDate))
    .slice(0, 5);

  const avgTikTokViews = recentTikToks.length > 0 
    ? Math.round(recentTikToks.reduce((sum, c) => sum + (c.impressions || 0), 0) / recentTikToks.length)
    : 0;

  const healthStatus = React.useMemo(() => {
    if (recentTikToks.length === 0) {
      return { label: "No TikTok Activity", color: "#F43F5E", bg: "rgba(244,63,94,0.12)", icon: "⚠️", desc: "No recent TikTok posts logged" };
    } else if (avgTikTokViews >= 500) {
      return { label: "High Performing", color: "#10B981", bg: "rgba(16,185,129,0.12)", icon: "🔥", desc: `Avg ${avgTikTokViews.toLocaleString()} views on recent ${recentTikToks.length} posts` };
    } else if (avgTikTokViews >= 100) {
      return { label: "Healthy Trend", color: "#06B6D4", bg: "rgba(6,182,212,0.12)", icon: "✨", desc: `Avg ${avgTikTokViews.toLocaleString()} views on recent ${recentTikToks.length} posts` };
    } else {
      return { label: "Low Activity", color: "#F59E0B", bg: "rgba(245,158,11,0.12)", icon: "⚡", desc: `Avg ${avgTikTokViews.toLocaleString()} views on recent posts` };
    }
  }, [recentTikToks, avgTikTokViews]);

  // Recent 5 content items across all platforms
  const recentPosts = accountContents
    .sort((a, b) => new Date(b.uploadDate || 0) - new Date(a.uploadDate || 0))
    .slice(0, 5);

  const handleAddPlatform = (e) => {
    e.preventDefault();
    if (!handle.trim()) return;
    addPlatform(activeAccount.id, {
      name: platformName,
      handle: handle.startsWith("@") ? handle : "@" + handle,
      followers: Number(followers) || 0,
      url: url || "#"
    });
    setHandle("");
    setFollowers("");
    setUrl("");
    setShowAddModal(false);
  };

  const getPlatformIcon = (name) => {
    switch (name.toLowerCase()) {
      case "instagram": return "📸";
      case "youtube": return "▶️";
      case "tiktok": return "🎵";
      case "x (twitter)":
      case "x":
      case "twitter": return "𝕏";
      case "facebook": return "📘";
      case "threads": return "🧵";
      default: return "🌐";
    }
  };

  return (
    <div className="page-container">
      {/* ── Header Bar ── */}
      <div className="page-header" style={{ marginBottom: "1.25rem" }}>
        <div>
          <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", flexWrap: "wrap" }}>
            <h1 className="page-title" style={{ fontSize: "1.45rem", fontWeight: 800 }}>
              {activeAccount.name}
            </h1>
            <div style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.4rem",
              padding: "0.2rem 0.65rem",
              borderRadius: "20px",
              background: healthStatus.bg,
              border: `1px solid ${healthStatus.color}`,
              color: healthStatus.color,
              fontSize: "0.74rem",
              fontWeight: 700
            }}>
              <span>{healthStatus.icon}</span>
              <span>{healthStatus.label}</span>
            </div>
          </div>
          <p className="page-subtitle" style={{ fontSize: "0.82rem", marginTop: "2px" }}>
            {activeAccount.description || "Active social media workspace"} • {activeAccount.platforms.length} connected platforms
          </p>
        </div>

        <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
          {canEdit && (
            <button onClick={() => setShowAddModal(true)} className="btn btn-sm btn-secondary" style={{ fontWeight: 700 }}>
              <span>➕ Add Channel</span>
            </button>
          )}
          <button onClick={() => setActivePage("add-content")} className="btn btn-sm btn-primary" style={{ fontWeight: 700 }}>
            <span>⚡ Log Content</span>
          </button>
        </div>
      </div>

      {/* ── 4-KPI Compact Metrics Row ── */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(210px, 1fr))", gap: "0.85rem", marginBottom: "1.25rem" }}>
        
        {/* KPI 1: Total Audience */}
        <div className="glass-card" style={{ padding: "0.9rem 1.15rem", borderRadius: "12px", border: "1px solid rgba(139,92,246,0.25)", background: "linear-gradient(135deg, rgba(139,92,246,0.08), rgba(13,17,23,0.8))" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "0.35rem" }}>
            <span style={{ fontSize: "0.74rem", fontWeight: 700, color: "var(--text-muted)", textTransform: "uppercase", letterSpacing: "0.05em" }}>
              Total Audience
            </span>
            <span style={{ fontSize: "1.1rem" }}>👥</span>
          </div>
          <div style={{ fontSize: "1.65rem", fontWeight: 800, color: "#fff", lineHeight: 1.1 }}>
            {totalFollowers >= 1000 ? (totalFollowers / 1000).toFixed(1) + "k" : totalFollowers.toLocaleString()}
          </div>
          <div style={{ fontSize: "0.74rem", color: "var(--accent-primary-light)", marginTop: "0.35rem", display: "flex", gap: "0.3rem" }}>
            {activeAccount.platforms.map(p => (
              <span key={p.id} title={`${p.name}: ${(Number(p.followers) || 0).toLocaleString()}`}>{getPlatformIcon(p.name)}</span>
            ))}
          </div>
        </div>

        {/* KPI 2: Total Impressions */}
        <div className="glass-card" style={{ padding: "0.9rem 1.15rem", borderRadius: "12px", border: "1px solid rgba(6,182,212,0.25)", background: "linear-gradient(135deg, rgba(6,182,212,0.08), rgba(13,17,23,0.8))" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "0.35rem" }}>
            <span style={{ fontSize: "0.74rem", fontWeight: 700, color: "var(--text-muted)", textTransform: "uppercase", letterSpacing: "0.05em" }}>
              Total Impressions
            </span>
            <span style={{ fontSize: "1.1rem" }}>👀</span>
          </div>
          <div style={{ fontSize: "1.65rem", fontWeight: 800, color: "#22D3EE", lineHeight: 1.1 }}>
            {totalViews >= 1000000 ? (totalViews / 1000000).toFixed(2) + "M" : (totalViews >= 1000 ? (totalViews / 1000).toFixed(1) + "k" : totalViews.toLocaleString())}
          </div>
          <div style={{ fontSize: "0.74rem", color: "var(--text-muted)", marginTop: "0.35rem" }}>
            Reach: <strong>{(totalReach / 1000).toFixed(1)}k</strong> (85% est.)
          </div>
        </div>

        {/* KPI 3: Engagement & ER% */}
        <div className="glass-card" style={{ padding: "0.9rem 1.15rem", borderRadius: "12px", border: "1px solid rgba(16,185,129,0.25)", background: "linear-gradient(135deg, rgba(16,185,129,0.08), rgba(13,17,23,0.8))" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "0.35rem" }}>
            <span style={{ fontSize: "0.74rem", fontWeight: 700, color: "var(--text-muted)", textTransform: "uppercase", letterSpacing: "0.05em" }}>
              Avg Engagement Rate
            </span>
            <span style={{ fontSize: "1.1rem" }}>🎯</span>
          </div>
          <div style={{ fontSize: "1.65rem", fontWeight: 800, color: "#34D399", lineHeight: 1.1 }}>
            {overallER}%
          </div>
          <div style={{ fontSize: "0.74rem", color: "var(--text-muted)", marginTop: "0.35rem" }}>
            ❤️ {totalLikes.toLocaleString()} likes • 💬 {totalComments.toLocaleString()} comments
          </div>
        </div>

        {/* KPI 4: Logged Content */}
        <div className="glass-card" style={{ padding: "0.9rem 1.15rem", borderRadius: "12px", border: "1px solid rgba(244,63,94,0.25)", background: "linear-gradient(135deg, rgba(244,63,94,0.08), rgba(13,17,23,0.8))" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "0.35rem" }}>
            <span style={{ fontSize: "0.74rem", fontWeight: 700, color: "var(--text-muted)", textTransform: "uppercase", letterSpacing: "0.05em" }}>
              Total Posts Logged
            </span>
            <span style={{ fontSize: "1.1rem" }}>📋</span>
          </div>
          <div style={{ fontSize: "1.65rem", fontWeight: 800, color: "#fff", lineHeight: 1.1 }}>
            {accountContents.length}
          </div>
          <div style={{ fontSize: "0.72rem", color: "var(--text-muted)", marginTop: "0.35rem", display: "flex", gap: "0.4rem" }}>
            <span style={{ color: "var(--accent-emerald)" }}>{statusCounts.Uploaded} live</span>
            <span>•</span>
            <span style={{ color: "var(--accent-cyan)" }}>{statusCounts.Scheduled} plan</span>
            <span>•</span>
            <span style={{ color: "var(--accent-amber)" }}>{statusCounts.Privated} priv</span>
          </div>
        </div>
      </div>

      {/* ── TikTok Live Status & Quick Action Banner ── */}
      <div className="glass-card" style={{
        padding: "1rem 1.25rem",
        borderRadius: "12px",
        marginBottom: "1.25rem",
        background: "linear-gradient(135deg, rgba(37,244,238,0.08), rgba(254,44,85,0.08))",
        border: "1px solid rgba(37,244,238,0.25)",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        flexWrap: "wrap",
        gap: "0.75rem"
      }}>
        <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
          <div style={{ width: "36px", height: "36px", borderRadius: "10px", background: "linear-gradient(135deg, #25F4EE, #FE2C55)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.1rem" }}>
            🎵
          </div>
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
              <span style={{ fontWeight: 800, fontSize: "0.95rem", color: "#fff" }}>TikTok Performance Pulse:</span>
              <span style={{ fontWeight: 700, fontSize: "0.85rem", color: healthStatus.color }}>{healthStatus.label}</span>
            </div>
            <div style={{ fontSize: "0.78rem", color: "var(--text-muted)", marginTop: "1px" }}>
              {healthStatus.desc} • {recentTikToks.length} posts tracked
            </div>
          </div>
        </div>

        <div style={{ display: "flex", gap: "0.5rem", alignItems: "center" }}>
          {recentTikToks.length > 0 && (
            <button
              type="button"
              onClick={() => syncAllTikTokPosts(activeAccount.id)}
              disabled={isSyncingTikTok}
              className="btn btn-sm btn-secondary"
              style={{
                borderColor: "rgba(37,244,238,0.4)",
                color: "#25F4EE",
                background: "rgba(37,244,238,0.1)",
                fontWeight: 700,
                fontSize: "0.78rem"
              }}
              title="Refresh views and engagement for all TikTok posts"
            >
              <span style={{ animation: isSyncingTikTok ? "spin 1s linear infinite" : "none", display: "inline-block" }}>🔄</span>
              <span>{isSyncingTikTok ? "Syncing..." : "Sync Live TikTok"}</span>
            </button>
          )}
          <button
            onClick={() => setActivePage("timeframe-analytics")}
            className="btn btn-sm btn-secondary"
            style={{ fontSize: "0.78rem" }}
          >
            📊 View Analytics →
          </button>
        </div>
      </div>

      {/* ── 2-Column Split: Connected Channels & Recent Posts ── */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "1.25rem" }}>
        
        {/* Left Column: Connected Platform Channels */}
        <div className="glass-card" style={{ padding: "1.25rem", borderRadius: "14px" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "1rem" }}>
            <h3 style={{ fontSize: "1rem", fontWeight: 700, margin: 0 }}>
              Connected Channels ({activeAccount.platforms.length})
            </h3>
            {canEdit && (
              <button onClick={() => setShowAddModal(true)} className="btn btn-sm btn-ghost" style={{ padding: "0.2rem 0.5rem", fontSize: "0.75rem" }}>
                + Add Platform
              </button>
            )}
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: "0.6rem" }}>
            {activeAccount.platforms.map(p => (
              <div 
                key={p.id} 
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  padding: "0.65rem 0.85rem",
                  borderRadius: "10px",
                  background: "rgba(255,255,255,0.03)",
                  border: "1px solid var(--border-color)",
                  transition: "all 0.2s ease"
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: "0.65rem" }}>
                  <span style={{ fontSize: "1.2rem" }}>{getPlatformIcon(p.name)}</span>
                  <div>
                    <div style={{ fontWeight: 700, fontSize: "0.85rem", color: "#fff" }}>{p.name}</div>
                    <div style={{ fontSize: "0.74rem", color: "var(--text-muted)" }}>{p.handle}</div>
                  </div>
                </div>

                <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
                  <div style={{ textAlign: "right" }}>
                    <div style={{ fontWeight: 800, fontSize: "0.88rem", color: "var(--accent-cyan-light)" }}>
                      {(Number(p.followers) || 0).toLocaleString()}
                    </div>
                    <div style={{ fontSize: "0.68rem", color: "var(--text-subtle)", textTransform: "uppercase" }}>followers</div>
                  </div>
                  {canEdit && (
                    <button
                      onClick={() => removePlatform(activeAccount.id, p.id)}
                      className="btn btn-ghost"
                      style={{ padding: "0.2rem 0.4rem", minHeight: "26px", color: "var(--text-subtle)" }}
                      title="Remove platform"
                    >
                      ✕
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column: Recent Activity Feed */}
        <div className="glass-card" style={{ padding: "1.25rem", borderRadius: "14px" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "1rem" }}>
            <h3 style={{ fontSize: "1rem", fontWeight: 700, margin: 0 }}>
              Recent Content ({recentPosts.length})
            </h3>
            <button onClick={() => setActivePage("content-table")} className="btn btn-sm btn-ghost" style={{ padding: "0.2rem 0.5rem", fontSize: "0.75rem" }}>
              View All Table →
            </button>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: "0.55rem" }}>
            {recentPosts.map(post => (
              <div 
                key={post.id}
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  padding: "0.6rem 0.75rem",
                  borderRadius: "8px",
                  background: "rgba(255,255,255,0.02)",
                  border: "1px solid var(--border-color)",
                  fontSize: "0.82rem"
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: "0.6rem", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap", flex: 1, marginRight: "0.75rem" }}>
                  <span>{getPlatformIcon(post.platform)}</span>
                  <span style={{ fontWeight: 600, color: "#fff", overflow: "hidden", textOverflow: "ellipsis" }}>
                    {post.caption || "(No caption)"}
                  </span>
                </div>

                <div style={{ display: "flex", alignItems: "center", gap: "0.6rem", flexShrink: 0 }}>
                  <span style={{ fontWeight: 700, fontSize: "0.8rem", color: "var(--accent-emerald)" }}>
                    {(post.impressions || 0).toLocaleString()} views
                  </span>
                  <span className={`badge ${post.status === 'Uploaded' ? 'badge-uploaded' : (post.status === 'Scheduled' ? 'badge-scheduled' : 'badge-privated')}`} style={{ fontSize: "0.65rem" }}>
                    {post.status}
                  </span>
                </div>
              </div>
            ))}
            {recentPosts.length === 0 && (
              <div style={{ textAlign: "center", padding: "1.5rem", color: "var(--text-muted)", fontSize: "0.82rem" }}>
                No content logged yet. Click <strong>⚡ Log Content</strong> to add your first post!
              </div>
            )}
          </div>
        </div>
      </div>

      {/* ── ADD PLATFORM CHANNEL MODAL ── */}
      {showAddModal && (
        <div className="modal-overlay" onClick={() => setShowAddModal(false)}>
          <div className="modal-content" style={{ maxWidth: "440px", width: "90%" }} onClick={e => e.stopPropagation()}>
            <div className="modal-header" style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "1rem" }}>
              <h2 style={{ fontSize: "1.2rem", fontWeight: 700, margin: 0 }}>Add Channel Account</h2>
              <button onClick={() => setShowAddModal(false)} className="btn btn-secondary btn-icon" style={{ width: "28px", height: "28px" }}>✕</button>
            </div>

            <form onSubmit={handleAddPlatform}>
              <div className="form-group" style={{ marginBottom: "0.85rem" }}>
                <label className="form-label">Platform</label>
                <select className="form-select" value={platformName} onChange={e => setPlatformName(e.target.value)}>
                  <option value="Instagram">Instagram</option>
                  <option value="TikTok">TikTok</option>
                  <option value="YouTube">YouTube</option>
                  <option value="X (Twitter)">X (Twitter)</option>
                  <option value="Facebook">Facebook</option>
                  <option value="Threads">Threads</option>
                </select>
              </div>

              <div className="form-group" style={{ marginBottom: "0.85rem" }}>
                <label className="form-label">Account Handle / Username</label>
                <input type="text" className="form-input" placeholder="@yourbrand" required value={handle} onChange={e => setHandle(e.target.value)} />
              </div>

              <div className="form-group" style={{ marginBottom: "0.85rem" }}>
                <label className="form-label">Followers Count</label>
                <input type="number" className="form-input" placeholder="0" min="0" value={followers} onChange={e => setFollowers(e.target.value)} />
              </div>

              <div className="form-group" style={{ marginBottom: "1.25rem" }}>
                <label className="form-label">Profile URL (Optional)</label>
                <input type="text" className="form-input" placeholder="https://instagram.com/..." value={url} onChange={e => setUrl(e.target.value)} />
              </div>

              <div style={{ display: "flex", justifyContent: "flex-end", gap: "0.6rem" }}>
                <button type="button" onClick={() => setShowAddModal(false)} className="btn btn-secondary">Cancel</button>
                <button type="submit" className="btn btn-primary">Add Channel</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

// TikTokHelpModal Component — Comprehensive Interactive Guide & Tutorial for TikTok API & Real-Time Sync
window.TikTokHelpModal = function({ isOpen, onClose }) {
  const [activeTab, setActiveTab] = React.useState("quickstart");
  const [copiedUrl, setCopiedUrl] = React.useState("");

  if (!isOpen) return null;

  const sampleUrls = [
    { label: "Standard Video Link", url: "https://www.tiktok.com/@tiktok/video/7106594312292453678" },
    { label: "Mobile App Share Link", url: "https://vt.tiktok.com/ZS8NV2mY8/" },
    { label: "Direct Video ID", url: "7106594312292453678" }
  ];

  const handleCopy = (text) => {
    navigator.clipboard.writeText(text);
    setCopiedUrl(text);
    setTimeout(() => setCopiedUrl(""), 2500);
  };

  return (
    <div className="modal-overlay" onClick={onClose} style={{ zIndex: 10000 }}>
      <div 
        className="modal-content" 
        style={{ maxWidth: "780px", width: "92%", maxHeight: "90vh", overflowY: "auto", padding: "1.75rem" }} 
        onClick={e => e.stopPropagation()}
      >
        {/* Header */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "1.25rem" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
            <div style={{
              width: "42px",
              height: "42px",
              borderRadius: "12px",
              background: "linear-gradient(135deg, #25F4EE, #FE2C55)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "1.3rem",
              boxShadow: "0 4px 15px rgba(37,244,238,0.3)"
            }}>
              🎵
            </div>
            <div>
              <h2 style={{ fontSize: "1.35rem", fontWeight: 800, margin: 0, color: "#fff" }}>
                TikTok API & Real-Time Sync Guide
              </h2>
              <p style={{ margin: 0, fontSize: "0.82rem", color: "var(--text-muted)", marginTop: "2px" }}>
                Master automated post imports, metrics extraction, and real-time live performance tracking
              </p>
            </div>
          </div>

          <button 
            type="button" 
            onClick={onClose} 
            className="btn btn-secondary btn-icon"
            style={{ width: "32px", height: "32px", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center" }}
            title="Close Guide"
          >
            ✕
          </button>
        </div>

        {/* Tab Navigation */}
        <div style={{ display: "flex", gap: "0.5rem", borderBottom: "1px solid var(--border-color)", paddingBottom: "0.75rem", marginBottom: "1.25rem" }}>
          <button
            onClick={() => setActiveTab("quickstart")}
            className="btn btn-sm"
            style={{
              background: activeTab === "quickstart" ? "linear-gradient(135deg, rgba(37,244,238,0.2), rgba(254,44,85,0.2))" : "transparent",
              borderColor: activeTab === "quickstart" ? "#25F4EE" : "var(--border-color)",
              color: activeTab === "quickstart" ? "#fff" : "var(--text-muted)",
              fontWeight: 700
            }}
          >
            ⚡ Quick Start (3 Steps)
          </button>
          <button
            onClick={() => setActiveTab("realtimesync")}
            className="btn btn-sm"
            style={{
              background: activeTab === "realtimesync" ? "linear-gradient(135deg, rgba(16,185,129,0.2), rgba(6,182,212,0.2))" : "transparent",
              borderColor: activeTab === "realtimesync" ? "var(--accent-emerald)" : "var(--border-color)",
              color: activeTab === "realtimesync" ? "#fff" : "var(--text-muted)",
              fontWeight: 700
            }}
          >
            🔄 Real-Time Live Sync
          </button>
          <button
            onClick={() => setActiveTab("fields")}
            className="btn btn-sm"
            style={{
              background: activeTab === "fields" ? "linear-gradient(135deg, rgba(139,92,246,0.2), rgba(217,70,239,0.2))" : "transparent",
              borderColor: activeTab === "fields" ? "var(--accent-primary)" : "var(--border-color)",
              color: activeTab === "fields" ? "#fff" : "var(--text-muted)",
              fontWeight: 700
            }}
          >
            📊 Data Extracted
          </button>
          <button
            onClick={() => setActiveTab("faq")}
            className="btn btn-sm"
            style={{
              background: activeTab === "faq" ? "rgba(255,255,255,0.1)" : "transparent",
              borderColor: activeTab === "faq" ? "var(--border-hover)" : "var(--border-color)",
              color: activeTab === "faq" ? "#fff" : "var(--text-muted)",
              fontWeight: 700
            }}
          >
            💡 Pro Tips & FAQ
          </button>
        </div>

        {/* TAB 1: QUICK START */}
        {activeTab === "quickstart" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "1rem" }}>
              {/* Step 1 */}
              <div className="glass-card" style={{ padding: "1.1rem", background: "rgba(255,255,255,0.03)", borderRadius: "12px", border: "1px solid var(--border-color)" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "0.6rem" }}>
                  <span style={{ width: "24px", height: "24px", borderRadius: "50%", background: "#25F4EE", color: "#000", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 800, fontSize: "0.8rem" }}>1</span>
                  <h4 style={{ margin: 0, fontSize: "0.95rem", fontWeight: 700 }}>Copy TikTok Link</h4>
                </div>
                <p style={{ fontSize: "0.82rem", color: "var(--text-muted)", lineHeight: 1.5, margin: 0 }}>
                  Open TikTok on mobile or desktop, click <strong>Share</strong>, and select <strong>Copy Link</strong>.
                </p>
              </div>

              {/* Step 2 */}
              <div className="glass-card" style={{ padding: "1.1rem", background: "rgba(255,255,255,0.03)", borderRadius: "12px", border: "1px solid var(--border-color)" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "0.6rem" }}>
                  <span style={{ width: "24px", height: "24px", borderRadius: "50%", background: "#FE2C55", color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 800, fontSize: "0.8rem" }}>2</span>
                  <h4 style={{ margin: 0, fontSize: "0.95rem", fontWeight: 700 }}>Paste & Auto-Fill</h4>
                </div>
                <p style={{ fontSize: "0.82rem", color: "var(--text-muted)", lineHeight: 1.5, margin: 0 }}>
                  Paste the URL in the <strong>TikTok API Panel</strong> on <em>Add Content</em> or <em>Content Table</em> and click <strong>Auto-Fill</strong>.
                </p>
              </div>

              {/* Step 3 */}
              <div className="glass-card" style={{ padding: "1.1rem", background: "rgba(255,255,255,0.03)", borderRadius: "12px", border: "1px solid var(--border-color)" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "0.6rem" }}>
                  <span style={{ width: "24px", height: "24px", borderRadius: "50%", background: "var(--accent-emerald)", color: "#000", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 800, fontSize: "0.8rem" }}>3</span>
                  <h4 style={{ margin: 0, fontSize: "0.95rem", fontWeight: 700 }}>Save & Live Track</h4>
                </div>
                <p style={{ fontSize: "0.82rem", color: "var(--text-muted)", lineHeight: 1.5, margin: 0 }}>
                  Review the auto-filled fields and click <strong>Save</strong>. You can now track and live-sync stats anytime!
                </p>
              </div>
            </div>

            {/* Test Copy Links */}
            <div style={{ marginTop: "0.5rem", padding: "1rem", borderRadius: "10px", background: "rgba(37,244,238,0.06)", border: "1px solid rgba(37,244,238,0.2)" }}>
              <div style={{ fontSize: "0.85rem", fontWeight: 700, color: "#25F4EE", marginBottom: "0.6rem" }}>
                🧪 Try with Example TikTok Links (Click to copy & test):
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                {sampleUrls.map((item, idx) => (
                  <div key={idx} style={{ display: "flex", alignItems: "center", justifyContent: "space-between", background: "rgba(0,0,0,0.3)", padding: "0.5rem 0.75rem", borderRadius: "6px", fontSize: "0.8rem" }}>
                    <div style={{ overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap", marginRight: "1rem" }}>
                      <span style={{ color: "var(--text-muted)", marginRight: "0.5rem" }}>[{item.label}]</span>
                      <code style={{ color: "#fff" }}>{item.url}</code>
                    </div>
                    <button
                      type="button"
                      onClick={() => handleCopy(item.url)}
                      className="btn btn-sm"
                      style={{ padding: "0.2rem 0.6rem", fontSize: "0.75rem", minWidth: "75px" }}
                    >
                      {copiedUrl === item.url ? "✅ Copied!" : "📋 Copy"}
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* TAB 2: REAL-TIME LIVE SYNC */}
        {activeTab === "realtimesync" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            <div style={{ padding: "1.2rem", borderRadius: "12px", background: "linear-gradient(135deg, rgba(16,185,129,0.1), rgba(6,182,212,0.1))", border: "1px solid rgba(16,185,129,0.3)" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "0.6rem", marginBottom: "0.5rem" }}>
                <span style={{ fontSize: "1.2rem" }}>⚡</span>
                <h4 style={{ margin: 0, fontSize: "1.05rem", fontWeight: 800, color: "#10B981" }}>
                  How Real-Time Live Sync Works
                </h4>
              </div>
              <p style={{ fontSize: "0.86rem", color: "var(--text-normal)", lineHeight: 1.6, margin: 0 }}>
                When you add TikTok posts via the TikTok API, SociaVault stores the original video reference. This unlocks <strong>1-click live metrics refreshing</strong> directly from TikTok’s public data network without having to re-type impressions, views, likes, or comments!
              </p>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
              <div className="glass-card" style={{ padding: "1rem", borderRadius: "10px" }}>
                <div style={{ fontWeight: 700, fontSize: "0.92rem", marginBottom: "0.4rem", color: "#25F4EE" }}>
                  🔄 Bulk Sync All TikTok Posts
                </div>
                <p style={{ fontSize: "0.82rem", color: "var(--text-muted)", lineHeight: 1.5, margin: 0 }}>
                  On the <strong>Content Table</strong> page, click the <strong>"🔄 Sync Live TikTok"</strong> button in the top toolbar to automatically query and refresh all TikTok posts in your active account in one go.
                </p>
              </div>

              <div className="glass-card" style={{ padding: "1rem", borderRadius: "10px" }}>
                <div style={{ fontWeight: 700, fontSize: "0.92rem", marginBottom: "0.4rem", color: "#F43F5E" }}>
                  🎯 Single-Post Instant Refresh
                </div>
                <p style={{ fontSize: "0.82rem", color: "var(--text-muted)", lineHeight: 1.5, margin: 0 }}>
                  In the Content Table, any row that came from TikTok has a quick <strong>🔄 Sync</strong> button next to Edit/Delete. Click it anytime to update just that video’s latest stats.
                </p>
              </div>
            </div>

            <div style={{ padding: "0.85rem 1rem", borderRadius: "8px", background: "rgba(245,158,11,0.1)", border: "1px solid rgba(245,158,11,0.3)", fontSize: "0.82rem", color: "#F59E0B" }}>
              💡 <strong>Instant Reversibility:</strong> All live sync actions are recorded in the Global Undo history! If you ever want to revert back to your previous metrics, press <strong>Ctrl+Z</strong> or click <strong>Undo</strong> in the top navbar.
            </div>
          </div>
        )}

        {/* TAB 3: DATA EXTRACTED */}
        {activeTab === "fields" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "0.85rem" }}>
            <p style={{ fontSize: "0.85rem", color: "var(--text-muted)", margin: 0 }}>
              The TikTok API extracts and maps the following data points automatically into SociaVault:
            </p>

            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0.75rem" }}>
              <div style={{ display: "flex", alignItems: "flex-start", gap: "0.6rem", padding: "0.75rem", background: "rgba(255,255,255,0.03)", borderRadius: "8px", border: "1px solid var(--border-color)" }}>
                <span style={{ fontSize: "1.1rem" }}>🎬</span>
                <div>
                  <div style={{ fontWeight: 700, fontSize: "0.85rem" }}>Caption & Text</div>
                  <div style={{ fontSize: "0.78rem", color: "var(--text-muted)" }}>Cleans hashtags and extracts full post text description</div>
                </div>
              </div>

              <div style={{ display: "flex", alignItems: "flex-start", gap: "0.6rem", padding: "0.75rem", background: "rgba(255,255,255,0.03)", borderRadius: "8px", border: "1px solid var(--border-color)" }}>
                <span style={{ fontSize: "1.1rem" }}>🏷️</span>
                <div>
                  <div style={{ fontWeight: 700, fontSize: "0.85rem" }}>Hashtags List</div>
                  <div style={{ fontSize: "0.78rem", color: "var(--text-muted)" }}>Parses all #tags into individual interactive hashtag tags</div>
                </div>
              </div>

              <div style={{ display: "flex", alignItems: "flex-start", gap: "0.6rem", padding: "0.75rem", background: "rgba(255,255,255,0.03)", borderRadius: "8px", border: "1px solid var(--border-color)" }}>
                <span style={{ fontSize: "1.1rem" }}>👤</span>
                <div>
                  <div style={{ fontWeight: 700, fontSize: "0.85rem" }}>Creator / Subject</div>
                  <div style={{ fontSize: "0.78rem", color: "var(--text-muted)" }}>Maps the video author handle into the Subjects module</div>
                </div>
              </div>

              <div style={{ display: "flex", alignItems: "flex-start", gap: "0.6rem", padding: "0.75rem", background: "rgba(255,255,255,0.03)", borderRadius: "8px", border: "1px solid var(--border-color)" }}>
                <span style={{ fontSize: "1.1rem" }}>📈</span>
                <div>
                  <div style={{ fontWeight: 700, fontSize: "0.85rem" }}>Live Views & Reach</div>
                  <div style={{ fontSize: "0.78rem", color: "var(--text-muted)" }}>Extracts current view impressions and estimated audience reach</div>
                </div>
              </div>

              <div style={{ display: "flex", alignItems: "flex-start", gap: "0.6rem", padding: "0.75rem", background: "rgba(255,255,255,0.03)", borderRadius: "8px", border: "1px solid var(--border-color)" }}>
                <span style={{ fontSize: "1.1rem" }}>❤️</span>
                <div>
                  <div style={{ fontWeight: 700, fontSize: "0.85rem" }}>Engagement (Likes, Comments, Shares, Saves)</div>
                  <div style={{ fontSize: "0.78rem", color: "var(--text-muted)" }}>Full 4-tier engagement metrics for precise ER calculation</div>
                </div>
              </div>

              <div style={{ display: "flex", alignItems: "flex-start", gap: "0.6rem", padding: "0.75rem", background: "rgba(255,255,255,0.03)", borderRadius: "8px", border: "1px solid var(--border-color)" }}>
                <span style={{ fontSize: "1.1rem" }}>🖼️</span>
                <div>
                  <div style={{ fontWeight: 700, fontSize: "0.85rem" }}>HD Video Thumbnail</div>
                  <div style={{ fontSize: "0.78rem", color: "var(--text-muted)" }}>High-res cover art thumbnail for visual logs & reports</div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* TAB 4: FAQ & PRO TIPS */}
        {activeTab === "faq" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "0.85rem" }}>
            <div className="glass-card" style={{ padding: "0.9rem 1.1rem", borderRadius: "10px" }}>
              <div style={{ fontWeight: 700, fontSize: "0.88rem", marginBottom: "0.3rem", color: "#fff" }}>
                Q: Can I edit the numbers after auto-importing?
              </div>
              <p style={{ fontSize: "0.8rem", color: "var(--text-muted)", margin: 0, lineHeight: 1.5 }}>
                <strong>Yes!</strong> All imported values (caption, hashtags, impressions, status, dates) are fully editable before submitting and anytime via the Edit modal in the Content Table.
              </p>
            </div>

            <div className="glass-card" style={{ padding: "0.9rem 1.1rem", borderRadius: "10px" }}>
              <div style={{ fontWeight: 700, fontSize: "0.88rem", marginBottom: "0.3rem", color: "#fff" }}>
                Q: Does it work with Private TikTok accounts or videos?
              </div>
              <p style={{ fontSize: "0.8rem", color: "var(--text-muted)", margin: 0, lineHeight: 1.5 }}>
                No, TikTok’s public API requires videos to be public. Private videos or friends-only videos cannot be fetched automatically.
              </p>
            </div>

            <div className="glass-card" style={{ padding: "0.9rem 1.1rem", borderRadius: "10px" }}>
              <div style={{ fontWeight: 700, fontSize: "0.88rem", marginBottom: "0.3rem", color: "#fff" }}>
                Q: How does the Global Undo button work?
              </div>
              <p style={{ fontSize: "0.8rem", color: "var(--text-muted)", margin: 0, lineHeight: 1.5 }}>
                The <strong>↩️ Undo</strong> button in the top navbar remembers up to 30 recent actions (adding, updating, deleting, bulk clearing, and live syncing). You can click it anytime or press <strong>Ctrl+Z</strong> on your keyboard to instantly roll back!
              </p>
            </div>
          </div>
        )}

        {/* Modal Footer */}
        <div style={{ display: "flex", justifyContent: "flex-end", marginTop: "1.5rem", paddingTop: "1rem", borderTop: "1px solid var(--border-color)" }}>
          <button type="button" onClick={onClose} className="btn btn-primary" style={{ minWidth: "120px" }}>
            Got It! Close Guide
          </button>
        </div>
      </div>
    </div>
  );
};

// AddContentPage Component - Modern 2-Column Compact Layout for Fast Manual & TikTok API Logging
window.AddContentPage = function() {
  const { activeAccount, addContent, canEdit, setActivePage, fetchTikTokData } = React.useContext(window.VaultContext);

  const [uploadDate, setUploadDate] = React.useState(() => new Date().toISOString().split("T")[0]);
  const [uploadTime, setUploadTime] = React.useState(() => {
    const now = new Date();
    return `${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')}`;
  });
  const [platform, setPlatform] = React.useState(() => activeAccount?.platforms?.[0]?.name || "TikTok");
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
  const [contentType, setContentType] = React.useState("Video");

  // TikTok API Auto-Fetch State
  const [tiktokInput, setTiktokInput] = React.useState("");
  const [tiktokLoading, setTiktokLoading] = React.useState(false);
  const [tiktokError, setTiktokError] = React.useState("");
  const [tiktokSuccess, setTiktokSuccess] = React.useState(null);
  const [helpModalOpen, setHelpModalOpen] = React.useState(false);

  if (!activeAccount) {
    return <div className="page-container"><p>No active account selected.</p></div>;
  }

  // Handle TikTok API Fetch
  const handleFetchTikTok = async (e) => {
    if (e) e.preventDefault();
    if (!tiktokInput.trim()) {
      setTiktokError("Please enter a TikTok video URL or ID");
      return;
    }

    setTiktokLoading(true);
    setTiktokError("");
    setTiktokSuccess(null);

    try {
      const data = await fetchTikTokData(tiktokInput);
      
      // Auto-populate all form fields
      setPlatform("TikTok");
      setContentType(data.contentType || "Video");
      setCaption(data.caption || "");
      setHashtagsInput((data.hashtags || []).join(" "));
      setSubjectsList(data.subjects || ["Alex"]);
      setImpressions(String(data.impressions || 0));
      setReach(String(data.reach || 0));
      setLikes(String(data.likes || 0));
      setComments(String(data.comments || 0));
      setShares(String(data.shares || 0));
      setSaves(String(data.saves || 0));
      setStatus(data.status || "Uploaded");
      if (data.uploadDate) setUploadDate(data.uploadDate);
      if (data.uploadTime) setUploadTime(data.uploadTime);

      setTiktokSuccess(data);
    } catch (err) {
      setTiktokError(err.message || "Failed to fetch TikTok post data");
    } finally {
      setTiktokLoading(false);
    }
  };

  const handleAddSubject = () => {
    if (!subjectInput.trim()) return;
    const clean = subjectInput.trim();
    if (!subjectsList.includes(clean)) {
      setSubjectsList([...subjectsList, clean]);
    }
    setSubjectInput("");
  };

  const handleRemoveSubject = (name) => {
    setSubjectsList(subjectsList.filter(s => s !== name));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!canEdit) {
      alert("You are in read-only mode for this shared vault.");
      return;
    }

    const hashtagsArray = hashtagsInput
      .split(/[\s,]+/)
      .map(tag => tag.trim())
      .filter(Boolean)
      .map(tag => tag.startsWith("#") ? tag : "#" + tag);

    addContent({
      uploadDate,
      uploadTime,
      platform,
      contentType,
      caption,
      hashtags: hashtagsArray.length > 0 ? hashtagsArray : ["#social"],
      subjects: subjectsList.length > 0 ? subjectsList : ["Self"],
      impressions: Number(impressions) || 0,
      reach: Number(reach) || 0,
      likes: Number(likes) || 0,
      comments: Number(comments) || 0,
      shares: Number(shares) || 0,
      saves: Number(saves) || 0,
      status,
      originalUrl: tiktokSuccess?.originalUrl || (platform === "TikTok" ? tiktokInput : undefined),
      videoId: tiktokSuccess?.videoId || undefined,
      thumbnailUrl: tiktokSuccess?.thumbnailUrl || undefined,
      lastSyncedAt: new Date().toISOString()
    });

    setActivePage("content-table");
  };

  return (
    <div className="page-container">
      {/* ── Header ── */}
      <div className="page-header" style={{ marginBottom: "1.25rem" }}>
        <div>
          <h1 className="page-title" style={{ fontSize: "1.4rem", fontWeight: 800 }}>
            Add Content Entry
          </h1>
          <p className="page-subtitle" style={{ fontSize: "0.82rem" }}>
            Log post metrics manually or import in seconds via TikTok API
          </p>
        </div>

        <div style={{ display: "flex", gap: "0.5rem" }}>
          <button
            type="button"
            onClick={() => setHelpModalOpen(true)}
            className="btn btn-sm btn-secondary"
            style={{ borderColor: "rgba(37,244,238,0.4)", color: "#25F4EE", fontWeight: 700 }}
          >
            <span>❓ API Guide</span>
          </button>
          <button onClick={() => setActivePage("content-table")} className="btn btn-sm btn-secondary">
            <span>← Table</span>
          </button>
        </div>
      </div>

      {/* ── 2-Column Responsive Layout ── */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(360px, 1fr))", gap: "1.25rem", alignItems: "start" }}>
        
        {/* LEFT COLUMN: TikTok API Auto-Input Panel & Live Preview */}
        <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
          <div className="glass-card" style={{
            background: "linear-gradient(135deg, rgba(37,244,238,0.08), rgba(254,44,85,0.08))",
            border: "1px solid rgba(37,244,238,0.25)",
            borderRadius: "14px",
            padding: "1.25rem"
          }}>
            <div style={{ display: "flex", alignItems: "center", gap: "0.6rem", marginBottom: "0.85rem" }}>
              <div style={{ width: "32px", height: "32px", borderRadius: "8px", background: "linear-gradient(135deg, #25F4EE, #FE2C55)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1rem" }}>
                🎵
              </div>
              <div>
                <h3 style={{ margin: 0, fontSize: "0.98rem", fontWeight: 700, color: "#fff" }}>
                  TikTok API Auto-Input
                </h3>
                <div style={{ fontSize: "0.74rem", color: "var(--text-muted)" }}>
                  Paste any TikTok link to auto-fill views, likes & caption
                </div>
              </div>
            </div>

            <form onSubmit={handleFetchTikTok} style={{ display: "flex", flexDirection: "column", gap: "0.6rem" }}>
              <input
                type="text"
                className="form-input"
                style={{ background: "rgba(15, 23, 42, 0.7)", fontSize: "0.84rem", minHeight: "38px" }}
                placeholder="https://www.tiktok.com/@user/video/... or https://vt.tiktok.com/..."
                value={tiktokInput}
                onChange={e => setTiktokInput(e.target.value)}
                disabled={tiktokLoading}
              />
              <button
                type="submit"
                className="btn btn-primary btn-sm"
                disabled={tiktokLoading || !tiktokInput.trim()}
                style={{
                  background: "linear-gradient(135deg, #25F4EE, #FE2C55)",
                  color: "#000",
                  fontWeight: 800,
                  border: "none",
                  width: "100%",
                  minHeight: "36px"
                }}
              >
                {tiktokLoading ? "⏳ Extracting Post Data..." : "⚡ Auto-Fill Post Details"}
              </button>
            </form>

            {tiktokError && (
              <div style={{ marginTop: "0.65rem", padding: "0.5rem 0.75rem", borderRadius: "6px", background: "rgba(244,63,94,0.15)", border: "1px solid rgba(244,63,94,0.3)", color: "#F43F5E", fontSize: "0.78rem" }}>
                ⚠️ {tiktokError}
              </div>
            )}
          </div>

          {/* Live Extracted Card Preview */}
          {tiktokSuccess && (
            <div className="glass-card" style={{
              padding: "1.1rem",
              borderRadius: "12px",
              border: "1px solid rgba(16,185,129,0.35)",
              background: "linear-gradient(145deg, rgba(16,185,129,0.06), rgba(13,17,23,0.9))"
            }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "0.5rem" }}>
                <span style={{ fontSize: "0.72rem", fontWeight: 700, textTransform: "uppercase", color: "var(--accent-emerald)" }}>
                  ✅ Extracted Video Details
                </span>
                <span className="badge badge-uploaded" style={{ fontSize: "0.65rem" }}>Live Synced</span>
              </div>
              <div style={{ fontWeight: 700, fontSize: "0.88rem", color: "#fff", marginBottom: "0.4rem" }}>
                {tiktokSuccess.caption}
              </div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "0.25rem", marginBottom: "0.65rem" }}>
                {(tiktokSuccess.hashtags || []).map((h, i) => (
                  <span key={i} className="chip chip-hashtag" style={{ fontSize: "0.7rem", padding: "0.1rem 0.35rem" }}>{h}</span>
                ))}
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "0.4rem", background: "rgba(0,0,0,0.3)", padding: "0.5rem", borderRadius: "8px", fontSize: "0.76rem" }}>
                <div>👀 <strong>{tiktokSuccess.impressions?.toLocaleString()}</strong> views</div>
                <div>❤️ <strong>{tiktokSuccess.likes?.toLocaleString()}</strong> likes</div>
                <div>💬 <strong>{tiktokSuccess.comments?.toLocaleString()}</strong> comments</div>
              </div>
            </div>
          )}

          {/* Quick Pro-Tip Box */}
          <div style={{ padding: "0.85rem 1rem", borderRadius: "10px", background: "rgba(255,255,255,0.02)", border: "1px solid var(--border-color)", fontSize: "0.78rem", color: "var(--text-muted)", lineHeight: 1.5 }}>
            💡 <strong>Instant Sync Tip:</strong> All auto-filled numbers remain 100% editable on the right before saving. After adding, you can real-time sync metrics anytime on the Content Table!
          </div>
        </div>

        {/* RIGHT COLUMN: Form Details & Metrics Grid */}
        <div className="glass-card" style={{ padding: "1.35rem", borderRadius: "14px" }}>
          <form onSubmit={handleSubmit}>
            
            {/* Row 1: Platform & Status */}
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0.85rem", marginBottom: "0.85rem" }}>
              <div className="form-group" style={{ margin: 0 }}>
                <label className="form-label" style={{ fontSize: "0.74rem" }}>Platform</label>
                <select className="form-select" style={{ minHeight: "36px", fontSize: "0.84rem" }} value={platform} onChange={e => setPlatform(e.target.value)}>
                  <option value="TikTok">TikTok</option>
                  <option value="Instagram">Instagram</option>
                  <option value="YouTube">YouTube</option>
                  <option value="X (Twitter)">X (Twitter)</option>
                  <option value="Facebook">Facebook</option>
                  <option value="Threads">Threads</option>
                </select>
              </div>

              <div className="form-group" style={{ margin: 0 }}>
                <label className="form-label" style={{ fontSize: "0.74rem" }}>Post Status</label>
                <select className="form-select" style={{ minHeight: "36px", fontSize: "0.84rem" }} value={status} onChange={e => setStatus(e.target.value)}>
                  <option value="Uploaded">Uploaded (Live Post)</option>
                  <option value="Scheduled">Scheduled</option>
                  <option value="Privated">Privated</option>
                  <option value="Deleted">Deleted</option>
                </select>
              </div>
            </div>

            {/* Row 2: Date & Time & Content Type */}
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "0.75rem", marginBottom: "0.85rem" }}>
              <div className="form-group" style={{ margin: 0 }}>
                <label className="form-label" style={{ fontSize: "0.74rem" }}>Date</label>
                <input type="date" className="form-input" style={{ minHeight: "36px", fontSize: "0.82rem" }} required value={uploadDate} onChange={e => setUploadDate(e.target.value)} />
              </div>

              <div className="form-group" style={{ margin: 0 }}>
                <label className="form-label" style={{ fontSize: "0.74rem" }}>Time</label>
                <input type="time" className="form-input" style={{ minHeight: "36px", fontSize: "0.82rem" }} value={uploadTime} onChange={e => setUploadTime(e.target.value)} />
              </div>

              <div className="form-group" style={{ margin: 0 }}>
                <label className="form-label" style={{ fontSize: "0.74rem" }}>Type</label>
                <input type="text" className="form-input" style={{ minHeight: "36px", fontSize: "0.82rem" }} placeholder="Video, Reel..." value={contentType} onChange={e => setContentType(e.target.value)} />
              </div>
            </div>

            {/* Caption */}
            <div className="form-group" style={{ marginBottom: "0.85rem" }}>
              <label className="form-label" style={{ fontSize: "0.74rem" }}>Caption / Description</label>
              <textarea className="form-textarea" rows="2" style={{ fontSize: "0.85rem" }} placeholder="Post caption..." required value={caption} onChange={e => setCaption(e.target.value)}></textarea>
            </div>

            {/* Hashtags */}
            <div className="form-group" style={{ marginBottom: "0.85rem" }}>
              <label className="form-label" style={{ fontSize: "0.74rem" }}>Hashtags</label>
              <input type="text" className="form-input" style={{ minHeight: "36px", fontSize: "0.84rem" }} placeholder="#viral #trending #business" value={hashtagsInput} onChange={e => setHashtagsInput(e.target.value)} />
            </div>

            {/* Subjects */}
            <div className="form-group" style={{ marginBottom: "1rem" }}>
              <label className="form-label" style={{ fontSize: "0.74rem" }}>Featured Subjects / People</label>
              <div style={{ display: "flex", gap: "0.4rem", marginBottom: "0.4rem" }}>
                <input
                  type="text"
                  className="form-input"
                  style={{ minHeight: "34px", fontSize: "0.82rem" }}
                  placeholder="Person's name..."
                  value={subjectInput}
                  onChange={e => setSubjectInput(e.target.value)}
                  onKeyDown={e => { if (e.key === "Enter") { e.preventDefault(); handleAddSubject(); } }}
                />
                <button type="button" onClick={handleAddSubject} className="btn btn-sm btn-secondary" style={{ padding: "0.2rem 0.6rem", fontSize: "0.75rem" }}>
                  + Add
                </button>
              </div>

              <div style={{ display: "flex", flexWrap: "wrap", gap: "0.3rem" }}>
                {subjectsList.map(name => (
                  <span key={name} className="chip chip-subject" style={{ fontSize: "0.72rem", padding: "0.1rem 0.4rem" }}>
                    👤 {name}
                    <button type="button" onClick={() => handleRemoveSubject(name)} style={{ background: "none", border: "none", color: "inherit", cursor: "pointer", padding: "0 2px", fontWeight: "bold" }}>✕</button>
                  </span>
                ))}
              </div>
            </div>

            <div style={{ borderTop: "1px solid var(--border-color)", paddingTop: "0.85rem", marginBottom: "0.85rem" }}>
              <div style={{ fontSize: "0.82rem", fontWeight: 700, color: "#fff", marginBottom: "0.6rem" }}>
                📊 Performance Metrics
              </div>

              <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "0.6rem" }}>
                <div>
                  <label className="form-label" style={{ fontSize: "0.68rem" }}>Impressions</label>
                  <input type="number" className="form-input" style={{ minHeight: "34px", fontSize: "0.82rem" }} min="0" placeholder="0" value={impressions} onChange={e => setImpressions(e.target.value)} />
                </div>
                <div>
                  <label className="form-label" style={{ fontSize: "0.68rem" }}>Reach</label>
                  <input type="number" className="form-input" style={{ minHeight: "34px", fontSize: "0.82rem" }} min="0" placeholder="0" value={reach} onChange={e => setReach(e.target.value)} />
                </div>
                <div>
                  <label className="form-label" style={{ fontSize: "0.68rem" }}>Likes</label>
                  <input type="number" className="form-input" style={{ minHeight: "34px", fontSize: "0.82rem" }} min="0" placeholder="0" value={likes} onChange={e => setLikes(e.target.value)} />
                </div>
                <div>
                  <label className="form-label" style={{ fontSize: "0.68rem" }}>Comments</label>
                  <input type="number" className="form-input" style={{ minHeight: "34px", fontSize: "0.82rem" }} min="0" placeholder="0" value={comments} onChange={e => setComments(e.target.value)} />
                </div>
                <div>
                  <label className="form-label" style={{ fontSize: "0.68rem" }}>Shares</label>
                  <input type="number" className="form-input" style={{ minHeight: "34px", fontSize: "0.82rem" }} min="0" placeholder="0" value={shares} onChange={e => setShares(e.target.value)} />
                </div>
                <div>
                  <label className="form-label" style={{ fontSize: "0.68rem" }}>Saves</label>
                  <input type="number" className="form-input" style={{ minHeight: "34px", fontSize: "0.82rem" }} min="0" placeholder="0" value={saves} onChange={e => setSaves(e.target.value)} />
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div style={{ display: "flex", justifyContent: "flex-end", gap: "0.6rem", marginTop: "1rem" }}>
              <button type="button" onClick={() => setActivePage("content-table")} className="btn btn-sm btn-secondary">
                Cancel
              </button>
              <button type="submit" className="btn btn-sm btn-primary" style={{ fontWeight: 800, padding: "0.4rem 1.25rem" }}>
                💾 Save Entry
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* ── Interactive TikTok Help Guide Modal ── */}
      {window.TikTokHelpModal && (
        <window.TikTokHelpModal isOpen={helpModalOpen} onClose={() => setHelpModalOpen(false)} />
      )}
    </div>
  );
};

// ContentTablePage Component - Formatted Interactive Content Table with TikTok API Real-Time Sync & Undo Support
window.ContentTablePage = function() {
  const {
    activeAccount,
    contents,
    addContent,
    updateContent,
    deleteContent,
    removeAllContents,
    canEdit,
    setActivePage,
    fetchTikTokData,
    syncTikTokPost,
    syncAllTikTokPosts,
    isSyncingTikTok
  } = React.useContext(window.VaultContext);

  const [searchTerm, setSearchTerm] = React.useState("");
  const [platformFilter, setPlatformFilter] = React.useState("ALL");
  const [statusFilter, setStatusFilter] = React.useState("ALL");
  const [sortBy, setSortBy] = React.useState("uploadDate");
  const [sortOrder, setSortOrder] = React.useState("desc");

  // Edit Modal State
  const [editingContent, setEditingContent] = React.useState(null);

  // TikTok Quick Import Modal State
  const [tiktokModalOpen, setTiktokModalOpen] = React.useState(false);
  const [tiktokUrlInput, setTiktokUrlInput] = React.useState("");
  const [tiktokFetching, setTiktokFetching] = React.useState(false);
  const [tiktokFetchError, setTiktokFetchError] = React.useState("");
  const [tiktokPreview, setTiktokPreview] = React.useState(null);

  // TikTok Tutorial / Guide Modal State
  const [helpModalOpen, setHelpModalOpen] = React.useState(false);

  // Remove All Confirmation Modal State
  const [removeAllModalOpen, setRemoveAllModalOpen] = React.useState(false);

  // Single post syncing loading tracker
  const [syncingItemId, setSyncingItemId] = React.useState(null);

  if (!activeAccount) {
    return <div className="page-container"><p>No active account selected.</p></div>;
  }

  // Filter content items for active account
  const accountContents = React.useMemo(() => {
    return contents.filter(c => c.accountId === activeAccount.id);
  }, [contents, activeAccount.id]);

  // Count TikTok posts
  const tikTokCount = React.useMemo(() => {
    return accountContents.filter(c => c.platform === "TikTok" || c.originalUrl).length;
  }, [accountContents]);

  // Search & Filter
  const filteredContents = React.useMemo(() => {
    return accountContents.filter(item => {
      const matchSearch = 
        (item.caption || "").toLowerCase().includes(searchTerm.toLowerCase()) ||
        (item.hashtags || []).some(h => h.toLowerCase().includes(searchTerm.toLowerCase())) ||
        (item.subjects || []).some(s => s.toLowerCase().includes(searchTerm.toLowerCase()));

      const matchPlatform = platformFilter === "ALL" || item.platform === platformFilter;
      const matchStatus = statusFilter === "ALL" || (item.status || "Uploaded") === statusFilter;

      return matchSearch && matchPlatform && matchStatus;
    }).sort((a, b) => {
      let valA = a[sortBy];
      let valB = b[sortBy];

      if (sortBy === "er") {
        const engA = (a.likes || 0) + (a.comments || 0) + (a.shares || 0) + (a.saves || 0);
        const engB = (b.likes || 0) + (b.comments || 0) + (b.shares || 0) + (b.saves || 0);
        valA = a.impressions ? (engA / a.impressions) : 0;
        valB = b.impressions ? (engB / b.impressions) : 0;
      }

      if (typeof valA === "string") {
        return sortOrder === "asc" ? valA.localeCompare(valB) : valB.localeCompare(valA);
      }
      return sortOrder === "asc" ? (valA || 0) - (valB || 0) : (valB || 0) - (valA || 0);
    });
  }, [accountContents, searchTerm, platformFilter, statusFilter, sortBy, sortOrder]);

  const handleSort = (field) => {
    if (sortBy === field) {
      setSortOrder(prev => prev === "asc" ? "desc" : "asc");
    } else {
      setSortBy(field);
      setSortOrder("desc");
    }
  };

  // ── Edit Handlers ──
  const handleOpenEdit = (item) => {
    setEditingContent({
      ...item,
      hashtagsInput: (item.hashtags || []).join(" "),
      subjectsList: [...(item.subjects || [])],
      subjectInput: ""
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
    }
  };

  const handleRemoveEditSubject = (name) => {
    if (!editingContent) return;
    setEditingContent({
      ...editingContent,
      subjectsList: editingContent.subjectsList.filter(s => s !== name)
    });
  };

  const handleEditSave = (e) => {
    e.preventDefault();
    if (!editingContent) return;

    const hashtagsArray = (editingContent.hashtagsInput || "")
      .split(/[\s,]+/)
      .map(tag => tag.trim())
      .filter(Boolean)
      .map(tag => tag.startsWith("#") ? tag : "#" + tag);

    updateContent(editingContent.id, {
      uploadDate: editingContent.uploadDate,
      platform: editingContent.platform,
      contentType: editingContent.contentType,
      caption: editingContent.caption,
      hashtags: hashtagsArray.length > 0 ? hashtagsArray : ["#social"],
      subjects: editingContent.subjectsList.length > 0 ? editingContent.subjectsList : ["Self"],
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

  // ── TikTok Quick Fetch Handler ──
  const handleFetchTikTokModal = async () => {
    if (!tiktokUrlInput.trim()) {
      setTiktokFetchError("Please enter a TikTok URL or Video ID");
      return;
    }

    setTiktokFetching(true);
    setTiktokFetchError("");
    setTiktokPreview(null);

    try {
      const data = await fetchTikTokData(tiktokUrlInput);
      setTiktokPreview(data);
    } catch (err) {
      setTiktokFetchError(err.message || "Failed to fetch from TikTok API");
    } finally {
      setTiktokFetching(false);
    }
  };

  const handleSaveTikTokPreview = () => {
    if (!tiktokPreview) return;
    addContent(tiktokPreview);
    setTiktokModalOpen(false);
    setTiktokUrlInput("");
    setTiktokPreview(null);
  };

  // ── Single Post TikTok Live Sync ──
  const handleSyncSinglePost = async (itemId) => {
    if (!syncTikTokPost) return;
    setSyncingItemId(itemId);
    try {
      await syncTikTokPost(itemId);
    } finally {
      setSyncingItemId(null);
    }
  };

  // ── Remove All Confirmation Handler ──
  const handleConfirmRemoveAll = () => {
    removeAllContents(activeAccount.id);
    setRemoveAllModalOpen(false);
  };

  return (
    <div className="page-container">
      {/* Header with Title & Top Action Bar */}
      <div className="page-header">
        <div>
          <h1 className="page-title">{activeAccount.name} — Content Logs</h1>
          <p className="page-subtitle">Interactive database of published, scheduled, privated, and deleted posts</p>
        </div>

        <div style={{ display: "flex", gap: "0.6rem", flexWrap: "wrap", alignItems: "center" }}>
          {/* Tutorial / Help Button */}
          <button
            type="button"
            onClick={() => setHelpModalOpen(true)}
            className="btn btn-secondary"
            style={{
              borderColor: "rgba(37,244,238,0.4)",
              color: "#25F4EE",
              background: "rgba(37,244,238,0.1)",
              fontWeight: 700
            }}
            title="TikTok API & Real-Time Sync Tutorial"
          >
            <span>❓ API Guide</span>
          </button>

          {canEdit && (
            <>
              {/* Real-Time Bulk Sync TikTok Button */}
              {tikTokCount > 0 && (
                <button
                  type="button"
                  onClick={() => syncAllTikTokPosts(activeAccount.id)}
                  disabled={isSyncingTikTok}
                  className="btn btn-secondary"
                  style={{
                    background: "linear-gradient(135deg, rgba(16,185,129,0.18), rgba(6,182,212,0.18))",
                    border: "1px solid rgba(16,185,129,0.4)",
                    color: "#10B981",
                    fontWeight: 700
                  }}
                  title="Update impressions, views, likes & metrics for all TikTok posts in real-time"
                >
                  <span style={{ animation: isSyncingTikTok ? "spin 1s linear infinite" : "none", display: "inline-block" }}>🔄</span>
                  <span>{isSyncingTikTok ? "Syncing..." : `Sync Live TikTok (${tikTokCount})`}</span>
                </button>
              )}

              {/* TikTok Quick Import Button */}
              <button
                onClick={() => setTiktokModalOpen(true)}
                className="btn btn-secondary"
                style={{
                  background: "linear-gradient(135deg, rgba(37,244,238,0.15), rgba(254,44,85,0.15))",
                  border: "1px solid rgba(37,244,238,0.35)",
                  color: "#25F4EE",
                  fontWeight: 700
                }}
                title="Import TikTok video automatically using TikTok API"
              >
                <span>🎵 Import TikTok</span>
              </button>

              {/* Add Content Button */}
              <button onClick={() => setActivePage("add-content")} className="btn btn-primary">
                <span>➕ Add Content</span>
              </button>

              {/* Remove All Content Button */}
              {accountContents.length > 0 && (
                <button
                  onClick={() => setRemoveAllModalOpen(true)}
                  className="btn btn-secondary"
                  style={{
                    background: "rgba(244, 63, 94, 0.12)",
                    border: "1px solid rgba(244, 63, 94, 0.35)",
                    color: "#F43F5E",
                    fontWeight: 700
                  }}
                  title="Remove all content records for this account (Undoable)"
                >
                  <span>🗑️ Remove All</span>
                </button>
              )}
            </>
          )}
        </div>
      </div>

      {/* Filter Controls Bar */}
      <div className="glass-card" style={{ marginBottom: "1.5rem", padding: "1rem" }}>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem", alignItems: "center", justifyContent: "space-between" }}>
          
          <div style={{ display: "flex", gap: "0.75rem", flex: 1, minWidth: "260px" }}>
            <input 
              type="text" 
              className="form-input" 
              placeholder="Search caption, hashtag (#tech), or subject (Alex)..." 
              value={searchTerm} 
              onChange={e => setSearchTerm(e.target.value)} 
            />
          </div>

          <div style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap" }}>
            <select className="form-select" style={{ width: "auto" }} value={platformFilter} onChange={e => setPlatformFilter(e.target.value)}>
              <option value="ALL">All Platforms</option>
              <option value="TikTok">TikTok</option>
              <option value="Instagram">Instagram</option>
              <option value="YouTube">YouTube</option>
              <option value="X (Twitter)">X (Twitter)</option>
              <option value="Facebook">Facebook</option>
              <option value="Threads">Threads</option>
            </select>

            <select className="form-select" style={{ width: "auto" }} value={statusFilter} onChange={e => setStatusFilter(e.target.value)}>
              <option value="ALL">All Statuses</option>
              <option value="Uploaded">Uploaded</option>
              <option value="Scheduled">Scheduled</option>
              <option value="Privated">Privated</option>
              <option value="Deleted">Deleted</option>
            </select>
          </div>
        </div>
      </div>

      {/* Table Card Container */}
      <div className="glass-card table-container">
        <table className="content-table">
          <thead>
            <tr>
              <th onClick={() => handleSort("uploadDate")} style={{ cursor: "pointer" }}>
                Date {sortBy === "uploadDate" && (sortOrder === "asc" ? "▲" : "▼")}
              </th>
              <th>Platform</th>
              <th>Status</th>
              <th>Caption & Hashtags</th>
              <th>Subjects</th>
              <th onClick={() => handleSort("impressions")} style={{ cursor: "pointer" }}>
                Views / Imp {sortBy === "impressions" && (sortOrder === "asc" ? "▲" : "▼")}
              </th>
              <th onClick={() => handleSort("reach")} style={{ cursor: "pointer" }}>
                Reach {sortBy === "reach" && (sortOrder === "asc" ? "▲" : "▼")}
              </th>
              <th onClick={() => handleSort("likes")} style={{ cursor: "pointer" }}>
                Likes {sortBy === "likes" && (sortOrder === "asc" ? "▲" : "▼")}
              </th>
              <th onClick={() => handleSort("comments")} style={{ cursor: "pointer" }}>
                Comments {sortBy === "comments" && (sortOrder === "asc" ? "▲" : "▼")}
              </th>
              <th onClick={() => handleSort("shares")} style={{ cursor: "pointer" }}>
                Shares {sortBy === "shares" && (sortOrder === "asc" ? "▲" : "▼")}
              </th>
              <th onClick={() => handleSort("saves")} style={{ cursor: "pointer" }}>
                Saves {sortBy === "saves" && (sortOrder === "asc" ? "▲" : "▼")}
              </th>
              <th onClick={() => handleSort("er")} style={{ cursor: "pointer" }}>
                ER% {sortBy === "er" && (sortOrder === "asc" ? "▲" : "▼")}
              </th>
              {canEdit && <th style={{ textAlign: "right" }}>Actions</th>}
            </tr>
          </thead>
          <tbody>
            {filteredContents.map(item => {
              const eng = (item.likes || 0) + (item.comments || 0) + (item.shares || 0) + (item.saves || 0);
              const er = item.impressions ? ((eng / item.impressions) * 100).toFixed(2) : "0.00";
              const isTikTok = item.platform === "TikTok" || !!item.originalUrl;
              const isItemSyncing = syncingItemId === item.id;

              const statusBadge = 
                item.status === 'Uploaded' ? 'badge-uploaded' :
                item.status === 'Scheduled' ? 'badge-scheduled' :
                item.status === 'Privated' ? 'badge-privated' : 'badge-deleted';

              return (
                <tr key={item.id}>
                  <td style={{ whiteSpace: "nowrap", fontSize: "0.85rem" }}>
                    <div>{item.uploadDate || "-"}</div>
                    {item.uploadTime && <div style={{ fontSize: "0.72rem", color: "var(--text-subtle)" }}>{item.uploadTime}</div>}
                  </td>
                  <td>
                    <span className="badge" style={{
                      background: item.platform === "TikTok" ? "rgba(37,244,238,0.15)" : (item.platform === "Instagram" ? "rgba(225,48,108,0.15)" : "rgba(255,255,255,0.08)"),
                      color: item.platform === "TikTok" ? "#25F4EE" : (item.platform === "Instagram" ? "#E1306C" : "#fff"),
                      border: `1px solid ${item.platform === "TikTok" ? "rgba(37,244,238,0.3)" : "var(--border-color)"}`
                    }}>
                      {item.platform}
                    </span>
                  </td>
                  <td>
                    <span className={`badge ${statusBadge}`}>
                      {item.status || "Uploaded"}
                    </span>
                  </td>
                  <td style={{ maxWidth: "260px" }}>
                    <div style={{ fontWeight: 600, fontSize: "0.88rem", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }} title={item.caption}>
                      {item.caption || "(No caption)"}
                    </div>
                    {item.hashtags && item.hashtags.length > 0 && (
                      <div style={{ display: "flex", flexWrap: "wrap", gap: "0.25rem", marginTop: "0.3rem" }}>
                        {item.hashtags.slice(0, 3).map((h, i) => (
                          <span key={i} className="chip chip-hashtag" style={{ fontSize: "0.7rem", padding: "0.1rem 0.35rem" }}>
                            {h}
                          </span>
                        ))}
                        {item.hashtags.length > 3 && (
                          <span style={{ fontSize: "0.7rem", color: "var(--text-subtle)" }}>+{item.hashtags.length - 3}</span>
                        )}
                      </div>
                    )}
                  </td>
                  <td>
                    <div style={{ display: "flex", flexWrap: "wrap", gap: "0.25rem" }}>
                      {(item.subjects || []).map((s, i) => (
                        <span key={i} className="chip chip-subject" style={{ fontSize: "0.72rem", padding: "0.1rem 0.4rem" }}>
                          👤 {s}
                        </span>
                      ))}
                    </div>
                  </td>
                  <td style={{ fontWeight: 700 }}>{(item.impressions || 0).toLocaleString()}</td>
                  <td>{(item.reach || 0).toLocaleString()}</td>
                  <td>{(item.likes || 0).toLocaleString()}</td>
                  <td>{(item.comments || 0).toLocaleString()}</td>
                  <td>{(item.shares || 0).toLocaleString()}</td>
                  <td>{(item.saves || 0).toLocaleString()}</td>
                  <td style={{ fontWeight: 700, color: Number(er) > 5 ? "var(--accent-emerald)" : "var(--text-normal)" }}>
                    {er}%
                  </td>
                  {canEdit && (
                    <td style={{ textAlign: "right", whiteSpace: "nowrap" }}>
                      <div style={{ display: "inline-flex", gap: "0.4rem" }}>
                        {/* Real-time single post live sync for TikTok */}
                        {isTikTok && (
                          <button
                            type="button"
                            onClick={() => handleSyncSinglePost(item.id)}
                            disabled={isItemSyncing}
                            className="btn btn-sm btn-secondary"
                            style={{
                              padding: "0.25rem 0.45rem",
                              fontSize: "0.75rem",
                              borderColor: "rgba(37,244,238,0.4)",
                              color: "#25F4EE"
                            }}
                            title="Live sync latest metrics from TikTok API"
                          >
                            <span style={{ animation: isItemSyncing ? "spin 0.8s linear infinite" : "none", display: "inline-block" }}>🔄</span>
                          </button>
                        )}
                        <button
                          type="button"
                          onClick={() => handleOpenEdit(item)}
                          className="btn btn-sm btn-secondary"
                          style={{ padding: "0.25rem 0.55rem", fontSize: "0.75rem" }}
                          title="Edit post"
                        >
                          ✏️ Edit
                        </button>
                        <button
                          type="button"
                          onClick={() => deleteContent(item.id)}
                          className="btn btn-sm btn-secondary"
                          style={{ padding: "0.25rem 0.45rem", fontSize: "0.75rem", color: "#F43F5E" }}
                          title="Delete post (Undoable)"
                        >
                          🗑️
                        </button>
                      </div>
                    </td>
                  )}
                </tr>
              );
            })}
            {filteredContents.length === 0 && (
              <tr>
                <td colSpan={canEdit ? 13 : 12} style={{ textAlign: "center", padding: "3rem", color: "var(--text-muted)" }}>
                  No content records found matching your filters.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* ══ TIKTOK QUICK IMPORT MODAL ══ */}
      {tiktokModalOpen && (
        <div className="modal-overlay" onClick={() => setTiktokModalOpen(false)}>
          <div className="modal-content" style={{ maxWidth: "580px", width: "90%" }} onClick={e => e.stopPropagation()}>
            <div className="modal-header" style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "1.25rem" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "0.6rem" }}>
                <span style={{ fontSize: "1.3rem" }}>🎵</span>
                <h2 className="modal-title" style={{ margin: 0, fontSize: "1.25rem", fontWeight: 700 }}>
                  Import from TikTok API
                </h2>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                <button
                  type="button"
                  onClick={() => setHelpModalOpen(true)}
                  className="btn btn-sm btn-secondary"
                  style={{ fontSize: "0.75rem", borderColor: "rgba(37,244,238,0.4)", color: "#25F4EE" }}
                >
                  ❓ Guide
                </button>
                <button 
                  type="button" 
                  onClick={() => setTiktokModalOpen(false)} 
                  className="btn btn-secondary btn-icon"
                  style={{ width: "30px", height: "30px", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center" }}
                  title="Close"
                >
                  ✕
                </button>
              </div>
            </div>

            <div style={{ marginBottom: "1.25rem" }}>
              <label className="form-label">TikTok Video URL or Video ID</label>
              <div style={{ display: "flex", gap: "0.6rem" }}>
                <input
                  type="text"
                  className="form-input"
                  placeholder="https://www.tiktok.com/@creator/video/123456... or https://vt.tiktok.com/..."
                  value={tiktokUrlInput}
                  onChange={e => setTiktokUrlInput(e.target.value)}
                  disabled={tiktokFetching}
                />
                <button
                  type="button"
                  onClick={handleFetchTikTokModal}
                  disabled={tiktokFetching || !tiktokUrlInput.trim()}
                  className="btn btn-primary"
                  style={{
                    background: "linear-gradient(135deg, #25F4EE, #FE2C55)",
                    color: "#000",
                    fontWeight: 800,
                    border: "none",
                    minWidth: "110px"
                  }}
                >
                  {tiktokFetching ? "⏳ Fetching" : "⚡ Fetch"}
                </button>
              </div>
              {tiktokFetchError && (
                <div style={{ marginTop: "0.5rem", color: "#F43F5E", fontSize: "0.8rem" }}>
                  ⚠️ {tiktokFetchError}
                </div>
              )}
            </div>

            {/* Preview of Extracted Data */}
            {tiktokPreview && (
              <div style={{
                padding: "1rem",
                borderRadius: "10px",
                background: "rgba(255,255,255,0.04)",
                border: "1px solid var(--border-color)",
                marginBottom: "1.25rem"
              }}>
                <div style={{ fontSize: "0.75rem", textTransform: "uppercase", color: "var(--text-muted)", fontWeight: 700, marginBottom: "0.5rem" }}>
                  Preview of Extracted Post:
                </div>
                <div style={{ fontWeight: 600, fontSize: "0.92rem", marginBottom: "0.4rem" }}>
                  {tiktokPreview.caption}
                </div>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "0.3rem", marginBottom: "0.75rem" }}>
                  {tiktokPreview.hashtags.map((h, i) => (
                    <span key={i} className="chip chip-hashtag" style={{ fontSize: "0.75rem" }}>{h}</span>
                  ))}
                </div>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "0.5rem", fontSize: "0.8rem", background: "rgba(0,0,0,0.2)", padding: "0.6rem", borderRadius: "8px" }}>
                  <div>👀 Views: <strong>{tiktokPreview.impressions.toLocaleString()}</strong></div>
                  <div>❤️ Likes: <strong>{tiktokPreview.likes.toLocaleString()}</strong></div>
                  <div>💬 Comments: <strong>{tiktokPreview.comments.toLocaleString()}</strong></div>
                </div>
              </div>
            )}

            <div style={{ display: "flex", justifyContent: "flex-end", gap: "0.75rem" }}>
              <button type="button" onClick={() => setTiktokModalOpen(false)} className="btn btn-secondary">
                Cancel
              </button>
              <button
                type="button"
                onClick={handleSaveTikTokPreview}
                disabled={!tiktokPreview}
                className="btn btn-primary"
              >
                💾 Save to Content Table
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ══ REMOVE ALL CONTENT CONFIRMATION MODAL ══ */}
      {removeAllModalOpen && (
        <div className="modal-overlay" onClick={() => setRemoveAllModalOpen(false)}>
          <div className="modal-content" style={{ maxWidth: "480px", width: "90%", textAlign: "center", padding: "2rem" }} onClick={e => e.stopPropagation()}>
            <div style={{ width: "56px", height: "56px", borderRadius: "50%", background: "rgba(244, 63, 94, 0.15)", color: "#F43F5E", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.8rem", margin: "0 auto 1.25rem" }}>
              🗑️
            </div>
            <h2 style={{ fontSize: "1.35rem", fontWeight: 800, marginBottom: "0.6rem" }}>
              Remove All Content?
            </h2>
            <p style={{ color: "var(--text-muted)", fontSize: "0.9rem", lineHeight: 1.5, marginBottom: "1.25rem" }}>
              This will remove all <strong>{accountContents.length}</strong> content records for <strong>{activeAccount.name}</strong>.
            </p>

            <div style={{ padding: "0.75rem 1rem", borderRadius: "8px", background: "rgba(139,92,246,0.1)", border: "1px solid rgba(139,92,246,0.25)", fontSize: "0.82rem", color: "var(--accent-primary-light)", marginBottom: "1.5rem" }}>
              💡 <strong>Don't worry:</strong> You can immediately restore everything anytime by clicking the <strong>Undo</strong> button or pressing <strong>Ctrl+Z</strong>.
            </div>

            <div style={{ display: "flex", justifyContent: "flex-end", gap: "0.75rem" }}>
              <button type="button" onClick={() => setRemoveAllModalOpen(false)} className="btn btn-secondary">
                Cancel
              </button>
              <button
                type="button"
                onClick={handleConfirmRemoveAll}
                className="btn btn-danger"
                style={{ fontWeight: 700 }}
              >
                Yes, Remove All Records
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ══ EDIT CONTENT MODAL ══ */}
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

            <form onSubmit={handleEditSave}>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.25rem", marginBottom: "1rem" }}>
                <div className="form-group">
                  <label className="form-label">Upload / Scheduled Date</label>
                  <input 
                    type="date" 
                    className="form-input" 
                    required 
                    value={editingContent.uploadDate} 
                    onChange={e => setEditingContent({ ...editingContent, uploadDate: e.target.value })} 
                  />
                </div>
                <div className="form-group">
                  <label className="form-label">Platform</label>
                  <select 
                    className="form-select" 
                    value={editingContent.platform} 
                    onChange={e => setEditingContent({ ...editingContent, platform: e.target.value })}
                  >
                    <option value="TikTok">TikTok</option>
                    <option value="Instagram">Instagram</option>
                    <option value="YouTube">YouTube</option>
                    <option value="X (Twitter)">X (Twitter)</option>
                    <option value="Facebook">Facebook</option>
                    <option value="Threads">Threads</option>
                  </select>
                </div>
              </div>

              <div className="form-group" style={{ marginBottom: "1rem" }}>
                <label className="form-label">Content Type</label>
                <input 
                  type="text" 
                  className="form-input" 
                  placeholder="e.g. Video, Reels, Carousel..." 
                  value={editingContent.contentType} 
                  onChange={e => setEditingContent({ ...editingContent, contentType: e.target.value })} 
                />
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
                  value={editingContent.hashtagsInput} 
                  onChange={e => setEditingContent({ ...editingContent, hashtagsInput: e.target.value })} 
                />
              </div>

              {/* Multi-Subject Editor */}
              <div className="form-group" style={{ marginBottom: "1.25rem" }}>
                <label className="form-label">Subject / People Featured</label>
                <div style={{ display: "flex", gap: "0.5rem", marginBottom: "0.5rem" }}>
                  <input 
                    type="text" 
                    className="form-input" 
                    placeholder="Type person's name (e.g. Sarah, Jordan)..." 
                    value={editingContent.subjectInput} 
                    onChange={e => setEditingContent({ ...editingContent, subjectInput: e.target.value })}
                    onKeyDown={e => {
                      if (e.key === "Enter") {
                        e.preventDefault();
                        handleAddEditSubject();
                      }
                    }} 
                  />
                  <button type="button" onClick={handleAddEditSubject} className="btn btn-secondary">
                    Add
                  </button>
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

      {/* ── Interactive TikTok Help Guide Modal ── */}
      {window.TikTokHelpModal && (
        <window.TikTokHelpModal isOpen={helpModalOpen} onClose={() => setHelpModalOpen(false)} />
      )}
    </div>
  );
};

// TimeframeAnalyticsPage Component - All-Time, Monthly, and Weekly Reporting with Status Separation
window.TimeframeAnalyticsPage = function() {
  const { activeAccount, contents } = React.useContext(window.VaultContext);
  const [timeframe, setTimeframe] = React.useState("all"); // 'all', 'monthly', 'weekly'
  const [selectedPlatform, setSelectedPlatform] = React.useState("All");
  const [selectedStatus, setSelectedStatus] = React.useState("ALL"); // 'ALL', 'Uploaded', 'Scheduled', 'Privated', 'Deleted'
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

  // Overall status distribution across all account contents
  const statusStats = React.useMemo(() => {
    const total = accountContents.length;
    const counts = { Uploaded: 0, Scheduled: 0, Privated: 0, Deleted: 0 };
    accountContents.forEach(c => {
      const s = c.status || "Uploaded";
      if (counts[s] !== undefined) counts[s]++;
      else counts["Uploaded"]++;
    });
    return {
      total,
      counts,
      uploadedPct: total > 0 ? ((counts.Uploaded / total) * 100).toFixed(1) : "0.0",
      scheduledPct: total > 0 ? ((counts.Scheduled / total) * 100).toFixed(1) : "0.0",
      privatedPct: total > 0 ? ((counts.Privated / total) * 100).toFixed(1) : "0.0",
      deletedPct: total > 0 ? ((counts.Deleted / total) * 100).toFixed(1) : "0.0"
    };
  }, [accountContents]);

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

  // Function to get analytics for a specific month (respecting status filter)
  const getMonthAnalytics = React.useMemo(() => {
    return (monthStr) => {
      const [year, month] = monthStr.split('-');
      const monthContents = accountContents.filter(item => {
        if (!item.uploadDate) return false;
        const itemDate = new Date(item.uploadDate);
        const matchesMonth = itemDate.getMonth() === parseInt(month) - 1 && itemDate.getFullYear() === parseInt(year);
        const matchesStatus = selectedStatus === "ALL" || (item.status || "Uploaded") === selectedStatus;
        return matchesMonth && matchesStatus;
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
  }, [accountContents, selectedStatus]);

  // Filter contents by timeframe, platform, and post status
  const filteredContents = React.useMemo(() => {
    const now = new Date();
    return accountContents.filter(item => {
      // Status filter
      if (selectedStatus !== "ALL" && (item.status || "Uploaded") !== selectedStatus) return false;

      // Platform filter
      if (selectedPlatform !== "All" && item.platform !== selectedPlatform) return false;

      // Timeframe filter
      if (!item.uploadDate) return true;
      const itemDate = new Date(item.uploadDate);

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
  }, [accountContents, timeframe, selectedPlatform, selectedStatus, selectedMonth]);

  // Compute Aggregates for filtered contents
  const totalImpressions = filteredContents.reduce((sum, c) => sum + (c.impressions || 0), 0);
  const totalReach = filteredContents.reduce((sum, c) => sum + (c.reach || 0), 0);
  const totalLikes = filteredContents.reduce((sum, c) => sum + (c.likes || 0), 0);
  const totalComments = filteredContents.reduce((sum, c) => sum + (c.comments || 0), 0);
  const totalShares = filteredContents.reduce((sum, c) => sum + (c.shares || 0), 0);
  const totalSaves = filteredContents.reduce((sum, c) => sum + (c.saves || 0), 0);
  
  const totalEngagement = totalLikes + totalComments + totalShares + totalSaves;
  const erRate = totalReach > 0 ? ((totalEngagement / totalReach) * 100).toFixed(2) : "0.00";

  // Status-specific configuration for badges and styling
  const STATUS_CONFIG = {
    "Uploaded": { label: "Uploaded (Published)", color: "#10B981", bg: "rgba(16, 185, 129, 0.15)", border: "rgba(16, 185, 129, 0.35)", icon: "🟢" },
    "Scheduled": { label: "Scheduled (Queued)", color: "#06B6D4", bg: "rgba(6, 182, 212, 0.15)", border: "rgba(6, 182, 212, 0.35)", icon: "⏱️" },
    "Privated": { label: "Privated (Hidden)", color: "#F59E0B", bg: "rgba(245, 158, 11, 0.15)", border: "rgba(245, 158, 11, 0.35)", icon: "🔒" },
    "Deleted": { label: "Deleted (Archived)", color: "#F43F5E", bg: "rgba(244, 63, 94, 0.15)", border: "rgba(244, 63, 94, 0.35)", icon: "🗑️" }
  };

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
      
      filteredContents.forEach(c => {
        if (c.uploadDate) {
          const dateObj = new Date(c.uploadDate);
          if (dateObj.getMonth() === parseInt(month) - 1 && dateObj.getFullYear() === parseInt(year)) {
            const dateStr = c.uploadDate;
            monthData[dateStr] = (monthData[dateStr] || 0) + (c.impressions || 0);
          }
        }
      });

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

    const chartColor = selectedStatus === "Uploaded" ? "#10B981" : selectedStatus === "Scheduled" ? "#06B6D4" : selectedStatus === "Privated" ? "#F59E0B" : selectedStatus === "Deleted" ? "#F43F5E" : "#8B5CF6";

    chartInstanceRef.current = new window.Chart(ctx, {
      type: 'line',
      data: {
        labels: labels,
        datasets: [{
          label: selectedStatus === "ALL" ? 'Total Impressions (Views)' : `${selectedStatus} Impressions (Views)`,
          data: impressionsData,
          borderColor: chartColor,
          backgroundColor: `${chartColor}22`,
          borderWidth: 2,
          fill: true,
          tension: 0.4,
          pointBackgroundColor: chartColor,
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
  }, [filteredContents, timeframe, selectedMonth, selectedStatus, selectedPlatform]);

  return (
    <div className="page-container">
      {/* Header */}
      <div className="page-header">
        <div>
          <h1 className="page-title">{activeAccount.name} — Timeframe Analytics</h1>
          <p className="page-subtitle">Granular performance separated by post status (Uploaded, Scheduled, Privated, Deleted)</p>
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
      </div>

      {/* ══ POST STATUS SEGREGATION TABS & QUICK BAR ══ */}
      <div className="glass-card" style={{ padding: "1.25rem 1.5rem", marginBottom: "1.5rem", background: "rgba(15, 23, 42, 0.75)", border: "1px solid var(--border-color)" }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: "1rem", marginBottom: "1rem" }}>
          <div>
            <span style={{ fontSize: "0.75rem", fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.06em", color: "var(--accent-cyan)" }}>
              🎯 Post Status Separation
            </span>
            <h3 style={{ fontSize: "1.05rem", fontWeight: 700, margin: "0.2rem 0 0 0", color: "var(--text-main)" }}>
              Filter & Isolate Analytics By Post Lifecycle
            </h3>
          </div>
          
          {/* Status Tab Buttons */}
          <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
            <button
              onClick={() => setSelectedStatus("ALL")}
              className={`btn btn-sm ${selectedStatus === "ALL" ? "btn-primary" : "btn-secondary"}`}
              style={{ borderRadius: "8px", fontWeight: 700 }}
            >
              🌐 All Statuses ({statusStats.total})
            </button>
            <button
              onClick={() => setSelectedStatus("Uploaded")}
              className="btn btn-sm"
              style={{
                borderRadius: "8px",
                fontWeight: 700,
                background: selectedStatus === "Uploaded" ? "#10B981" : "rgba(16, 185, 129, 0.12)",
                color: selectedStatus === "Uploaded" ? "#fff" : "#10B981",
                border: "1px solid rgba(16, 185, 129, 0.3)"
              }}
            >
              🟢 Uploaded ({statusStats.counts.Uploaded})
            </button>
            <button
              onClick={() => setSelectedStatus("Scheduled")}
              className="btn btn-sm"
              style={{
                borderRadius: "8px",
                fontWeight: 700,
                background: selectedStatus === "Scheduled" ? "#06B6D4" : "rgba(6, 182, 212, 0.12)",
                color: selectedStatus === "Scheduled" ? "#fff" : "#06B6D4",
                border: "1px solid rgba(6, 182, 212, 0.3)"
              }}
            >
              ⏱️ Scheduled ({statusStats.counts.Scheduled})
            </button>
            <button
              onClick={() => setSelectedStatus("Privated")}
              className="btn btn-sm"
              style={{
                borderRadius: "8px",
                fontWeight: 700,
                background: selectedStatus === "Privated" ? "#F59E0B" : "rgba(245, 158, 11, 0.12)",
                color: selectedStatus === "Privated" ? "#fff" : "#F59E0B",
                border: "1px solid rgba(245, 158, 11, 0.3)"
              }}
            >
              🔒 Privated ({statusStats.counts.Privated})
            </button>
            <button
              onClick={() => setSelectedStatus("Deleted")}
              className="btn btn-sm"
              style={{
                borderRadius: "8px",
                fontWeight: 700,
                background: selectedStatus === "Deleted" ? "#F43F5E" : "rgba(244, 63, 94, 0.12)",
                color: selectedStatus === "Deleted" ? "#fff" : "#F43F5E",
                border: "1px solid rgba(244, 63, 94, 0.3)"
              }}
            >
              🗑️ Deleted ({statusStats.counts.Deleted})
            </button>
          </div>
        </div>

        {/* Status Distribution Visual Bar */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))", gap: "0.75rem", paddingTop: "0.75rem", borderTop: "1px solid rgba(255,255,255,0.06)" }}>
          {[
            { key: "Uploaded", label: "Uploaded (Live)", count: statusStats.counts.Uploaded, pct: statusStats.uploadedPct, color: "#10B981" },
            { key: "Scheduled", label: "Scheduled (Queue)", count: statusStats.counts.Scheduled, pct: statusStats.scheduledPct, color: "#06B6D4" },
            { key: "Privated", label: "Privated (Hidden)", count: statusStats.counts.Privated, pct: statusStats.privatedPct, color: "#F59E0B" },
            { key: "Deleted", label: "Deleted (Archive)", count: statusStats.counts.Deleted, pct: statusStats.deletedPct, color: "#F43F5E" }
          ].map(s => (
            <div 
              key={s.key} 
              onClick={() => setSelectedStatus(s.key)}
              style={{
                padding: "0.6rem 0.85rem",
                borderRadius: "8px",
                background: selectedStatus === s.key ? `${s.color}18` : "rgba(255, 255, 255, 0.03)",
                border: `1px solid ${selectedStatus === s.key ? s.color : "rgba(255, 255, 255, 0.07)"}`,
                cursor: "pointer",
                transition: "all 0.2s ease"
              }}
            >
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "0.25rem" }}>
                <span style={{ fontSize: "0.75rem", fontWeight: 600, color: s.color }}>{s.label}</span>
                <span style={{ fontSize: "0.72rem", color: "var(--text-muted)", fontWeight: 700 }}>{s.pct}%</span>
              </div>
              <div style={{ fontSize: "1.15rem", fontWeight: 800, color: "var(--text-main)" }}>
                {s.count} <span style={{ fontSize: "0.75rem", fontWeight: 400, color: "var(--text-muted)" }}>posts</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Platform & Month Filters */}
      <div style={{ display: "flex", gap: "1rem", alignItems: "center", marginBottom: "1.5rem", flexWrap: "wrap" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
          <label style={{ fontSize: "0.85rem", fontWeight: 600, color: "var(--text-muted)" }}>Platform Filter:</label>
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
            <label style={{ fontSize: "0.85rem", fontWeight: 600, color: "var(--text-muted)" }}>Select Month:</label>
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

        {/* Active Filter Indicator */}
        <div style={{ marginLeft: "auto", display: "flex", gap: "0.5rem", alignItems: "center" }}>
          <span style={{ fontSize: "0.8rem", color: "var(--text-muted)" }}>Active View:</span>
          <span style={{
            padding: "0.2rem 0.6rem",
            borderRadius: "6px",
            fontSize: "0.78rem",
            fontWeight: 700,
            background: selectedStatus === "ALL" ? "rgba(139,92,246,0.2)" : STATUS_CONFIG[selectedStatus]?.bg || "rgba(255,255,255,0.1)",
            color: selectedStatus === "ALL" ? "var(--accent-primary-light)" : STATUS_CONFIG[selectedStatus]?.color || "#fff",
            border: `1px solid ${selectedStatus === "ALL" ? "rgba(139,92,246,0.35)" : STATUS_CONFIG[selectedStatus]?.border || "transparent"}`
          }}>
            {selectedStatus === "ALL" ? "All Statuses (Consolidated)" : STATUS_CONFIG[selectedStatus]?.label || selectedStatus}
          </span>
        </div>
      </div>

      {/* KPI Cards Grid */}
      <div className="stats-grid">
        <div className="glass-card stat-card">
          <span className="stat-label">
            {selectedStatus === "ALL" ? "Total Impressions (Views)" : `${selectedStatus} Impressions`}
          </span>
          <span className="stat-value" style={{ color: "var(--accent-cyan)" }}>
            {totalImpressions.toLocaleString()}
          </span>
          <span className="stat-change positive">
            From {filteredContents.length} {selectedStatus !== "ALL" ? selectedStatus.toLowerCase() : ""} contents
          </span>
        </div>

        <div className="glass-card stat-card">
          <span className="stat-label">
            {selectedStatus === "ALL" ? "Total Reach (Unique Viewers)" : `${selectedStatus} Reach`}
          </span>
          <span className="stat-value">
            {totalReach.toLocaleString()}
          </span>
          <span className="stat-change positive">Unique audience</span>
        </div>

        <div className="glass-card stat-card">
          <span className="stat-label">
            {selectedStatus === "ALL" ? "Total Engagement" : `${selectedStatus} Engagement`}
          </span>
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
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "1rem" }}>
            <h3 style={{ fontSize: "1.1rem", fontWeight: 700, margin: 0 }}>
              {timeframe === "monthly" 
                ? `Daily Impressions - ${new Date(selectedMonth + '-01').toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}` 
                : `Impressions by Platform ${selectedPlatform !== "All" ? `(${selectedPlatform})` : ""}`}
            </h3>
            <span style={{ fontSize: "0.75rem", color: "var(--text-muted)", background: "rgba(255,255,255,0.05)", padding: "0.2rem 0.5rem", borderRadius: "4px" }}>
              Status: {selectedStatus}
            </span>
          </div>
          <div style={{ flex: 1, position: "relative" }}>
            <canvas ref={chartRef}></canvas>
          </div>
        </div>

        {/* Engagement Details Breakdown */}
        <div className="glass-card">
          <h3 style={{ fontSize: "1.1rem", fontWeight: 700, marginBottom: "1.25rem" }}>
            {selectedStatus === "ALL" ? "Engagement Breakdown" : `${selectedStatus} Metrics`}
          </h3>
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

            <div style={{ marginTop: "0.5rem", padding: "0.75rem", borderRadius: "8px", background: "rgba(255,255,255,0.03)", fontSize: "0.8rem", color: "var(--text-muted)" }}>
              <strong>Posts in scope: </strong> {filteredContents.length} ({selectedStatus})
            </div>

          </div>
        </div>
      </div>

      {/* ══ DEDICATED SEPARATED STATUS SUMMARY (When viewing ALL) ══ */}
      {selectedStatus === "ALL" && (
        <div style={{ marginTop: "2.5rem" }}>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "1.25rem" }}>
            <div>
              <h2 style={{ fontSize: "1.35rem", fontWeight: 800, color: "var(--text-main)", margin: 0 }}>
                📑 Separated Post Status Breakdown
              </h2>
              <p style={{ fontSize: "0.85rem", color: "var(--text-muted)", margin: "0.25rem 0 0 0" }}>
                Individual performance & inventory metrics segregated by post status
              </p>
            </div>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "1.25rem" }}>
            {[
              {
                status: "Uploaded",
                title: "🟢 Uploaded (Live)",
                desc: "Active published content with live audience metrics",
                items: accountContents.filter(c => (c.status || "Uploaded") === "Uploaded"),
                color: "#10B981",
                btnText: "Analyze Uploaded"
              },
              {
                status: "Scheduled",
                title: "⏱️ Scheduled (Queue)",
                desc: "Upcoming content waiting for automated or planned release",
                items: accountContents.filter(c => c.status === "Scheduled"),
                color: "#06B6D4",
                btnText: "Analyze Scheduled"
              },
              {
                status: "Privated",
                title: "🔒 Privated (Hidden)",
                desc: "Content hidden from public view / unlisted posts",
                items: accountContents.filter(c => c.status === "Privated"),
                color: "#F59E0B",
                btnText: "Analyze Privated"
              },
              {
                status: "Deleted",
                title: "🗑️ Deleted (Archived)",
                desc: "Removed or archived posts with historical record retention",
                items: accountContents.filter(c => c.status === "Deleted"),
                color: "#F43F5E",
                btnText: "Analyze Deleted"
              }
            ].map(sec => {
              const secImp = sec.items.reduce((s, c) => s + (c.impressions || 0), 0);
              const secReach = sec.items.reduce((s, c) => s + (c.reach || 0), 0);
              const secEng = sec.items.reduce((s, c) => s + (c.likes || 0) + (c.comments || 0) + (c.shares || 0) + (c.saves || 0), 0);
              const secEr = secReach > 0 ? ((secEng / secReach) * 100).toFixed(2) : "0.00";

              return (
                <div 
                  key={sec.status}
                  className="glass-card"
                  style={{
                    padding: "1.35rem",
                    borderTop: `3px solid ${sec.color}`,
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between"
                  }}
                >
                  <div>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "0.5rem" }}>
                      <h4 style={{ fontSize: "1.05rem", fontWeight: 700, margin: 0, color: sec.color }}>{sec.title}</h4>
                      <span style={{
                        padding: "0.2rem 0.5rem",
                        borderRadius: "12px",
                        fontSize: "0.75rem",
                        fontWeight: 800,
                        background: `${sec.color}20`,
                        color: sec.color
                      }}>
                        {sec.items.length} posts
                      </span>
                    </div>
                    <p style={{ fontSize: "0.8rem", color: "var(--text-muted)", marginBottom: "1rem", lineHeight: 1.4 }}>
                      {sec.desc}
                    </p>

                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0.6rem", marginBottom: "1rem", padding: "0.75rem", background: "rgba(255,255,255,0.02)", borderRadius: "8px" }}>
                      <div>
                        <div style={{ fontSize: "0.7rem", color: "var(--text-subtle)", textTransform: "uppercase" }}>Impressions</div>
                        <div style={{ fontSize: "0.95rem", fontWeight: 700, color: "var(--accent-cyan)" }}>{secImp.toLocaleString()}</div>
                      </div>
                      <div>
                        <div style={{ fontSize: "0.7rem", color: "var(--text-subtle)", textTransform: "uppercase" }}>Reach</div>
                        <div style={{ fontSize: "0.95rem", fontWeight: 700 }}>{secReach.toLocaleString()}</div>
                      </div>
                      <div>
                        <div style={{ fontSize: "0.7rem", color: "var(--text-subtle)", textTransform: "uppercase" }}>Engagement</div>
                        <div style={{ fontSize: "0.95rem", fontWeight: 700, color: "var(--accent-emerald)" }}>{secEng.toLocaleString()}</div>
                      </div>
                      <div>
                        <div style={{ fontSize: "0.7rem", color: "var(--text-subtle)", textTransform: "uppercase" }}>ER %</div>
                        <div style={{ fontSize: "0.95rem", fontWeight: 700, color: "var(--accent-primary)" }}>{secEr}%</div>
                      </div>
                    </div>
                  </div>

                  <button
                    onClick={() => setSelectedStatus(sec.status)}
                    className="btn btn-secondary btn-sm"
                    style={{ width: "100%", fontSize: "0.8rem", color: sec.color, borderColor: `${sec.color}40` }}
                  >
                    {sec.btnText} →
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* Month Comparison Section */}
      {timeframe === "monthly" && (
        <div style={{ marginTop: "2.5rem" }}>
          <h2 style={{ fontSize: "1.35rem", fontWeight: 800, color: "var(--text-main)", marginBottom: "1rem" }}>
            📊 Compare Two Months ({selectedStatus === "ALL" ? "All Statuses" : selectedStatus})
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

      {/* Content Type Analytics Section */}
      <div style={{ marginTop: "2.5rem" }}>
        <h2 style={{ fontSize: "1.35rem", fontWeight: 800, color: "var(--text-main)", marginBottom: "1.5rem" }}>
          🎬 Content Type Performance ({selectedStatus === "ALL" ? "All Statuses" : selectedStatus})
        </h2>

        {(() => {
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

            Object.keys(stats).forEach(type => {
              const stat = stats[type];
              stat.avgImpressions = stat.count > 0 ? Math.round(stat.impressions / stat.count) : 0;
              stat.avgReach = stat.count > 0 ? Math.round(stat.reach / stat.count) : 0;
              stat.avgEngagement = stat.count > 0 ? Math.round(stat.engagement / stat.count) : 0;
            });

            return Object.values(stats).sort((a, b) => b.impressions - a.impressions);
          }, [filteredContents]);

          const contentTypeIcons = {
            "Reels": "📹", "Carousel": "🎠", "Vlog": "🎥", "Video": "🎬", "Image": "📷",
            "Story": "📖", "Live": "🔴", "Post": "📝", "Short": "⏱️", "Thread": "🧵"
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
                          <div style={{ width: `${Math.min((stat.impressions / (Math.max(...contentTypeStats.map(s => s.impressions)) || 1)) * 100, 100)}%`, height: "100%", background: "linear-gradient(90deg, var(--accent-cyan), var(--accent-primary))", borderRadius: "3px" }} />
                        </div>
                      </div>

                      <div>
                        <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "0.4rem" }}>
                          <span style={{ fontSize: "0.85rem", color: "var(--text-muted)" }}>Total Reach</span>
                          <strong style={{ fontSize: "0.9rem" }}>{stat.reach.toLocaleString()}</strong>
                        </div>
                        <div style={{ width: "100%", height: "6px", background: "rgba(255,255,255,0.1)", borderRadius: "3px", overflow: "hidden" }}>
                          <div style={{ width: `${Math.min((stat.reach / (Math.max(...contentTypeStats.map(s => s.reach)) || 1)) * 100, 100)}%`, height: "100%", background: "linear-gradient(90deg, #A78BFA, #7C3AED)", borderRadius: "3px" }} />
                        </div>
                      </div>

                      <div>
                        <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "0.4rem" }}>
                          <span style={{ fontSize: "0.85rem", color: "var(--text-muted)" }}>Total Engagement</span>
                          <strong style={{ color: "var(--accent-emerald)", fontSize: "0.9rem" }}>{stat.engagement.toLocaleString()}</strong>
                        </div>
                        <div style={{ width: "100%", height: "6px", background: "rgba(255,255,255,0.1)", borderRadius: "3px", overflow: "hidden" }}>
                          <div style={{ width: `${Math.min((stat.engagement / (Math.max(...contentTypeStats.map(s => s.engagement)) || 1)) * 100, 100)}%`, height: "100%", background: "linear-gradient(90deg, #34D399, #10B981)", borderRadius: "3px" }} />
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
                  No content data available for status: {selectedStatus}
                </div>
              )}
            </div>
          );
        })()}

        {/* Top Performing Post by Platform Section */}
        <div style={{ marginTop: "2.5rem" }}>
          <h2 style={{ fontSize: "1.25rem", fontWeight: 800, marginBottom: "1.25rem", color: "var(--text-main)" }}>
            🏆 Top Performing Posts by Platform ({selectedStatus === "ALL" ? "All Statuses" : selectedStatus})
          </h2>

          {(() => {
            const topPostsByPlatform = React.useMemo(() => {
              const platformMap = {};
              
              filteredContents.forEach(item => {
                const platform = item.platform || "Unknown";
                if (!platformMap[platform]) {
                  platformMap[platform] = item;
                } else {
                  if ((item.impressions || 0) > (platformMap[platform].impressions || 0)) {
                    platformMap[platform] = item;
                  }
                }
              });

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
                    const postStatus = post.status || "Uploaded";
                    const stConfig = STATUS_CONFIG[postStatus] || { label: postStatus, color: "#10B981", bg: "rgba(16,185,129,0.15)" };

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
                        {/* Platform & Status Badge Header */}
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
                          
                          <div style={{ display: "flex", gap: "0.4rem", alignItems: "center" }}>
                            <span style={{
                              padding: "0.2rem 0.55rem",
                              borderRadius: "6px",
                              fontSize: "0.7rem",
                              fontWeight: 700,
                              background: stConfig.bg,
                              color: stConfig.color,
                              border: `1px solid ${stConfig.border || "transparent"}`
                            }}>
                              {postStatus}
                            </span>
                            {idx === 0 && (
                              <div style={{
                                padding: "0.2rem 0.6rem", background: "linear-gradient(135deg, var(--accent-cyan), var(--accent-primary))",
                                borderRadius: "6px", fontSize: "0.7rem", fontWeight: 700, color: "#fff"
                              }}>
                                TOP
                              </div>
                            )}
                          </div>
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
                    No posts available for {selectedStatus} in the selected timeframe and filters
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

// HashtagAnalyticsPage Component - Performance Studio for Hashtags
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
        <div>
          <h1 className="page-title">{activeAccount.name} - Hashtag Studio</h1>
          <p className="page-subtitle">Track performance, total viewers, content count, and engagement rate per hashtag</p>
        </div>
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

      {/* Search Input */}
      <div className="glass-card" style={{ marginBottom: "1.5rem", padding: "1rem" }}>
        <input 
          type="text" 
          className="form-input"
          placeholder="Search hashtag (e.g. #tech, #ai)..."
          value={searchHashtag}
          onChange={e => setSearchHashtag(e.target.value)}
        />
      </div>

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
              <th>Hashtag Tag</th>
              <th>Contents Used</th>
              <th>Total Viewers (Impressions)</th>
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
                  <td>
                    <span className="chip" style={{ fontSize: "0.85rem", padding: "0.3rem 0.75rem" }}>
                      {h.tag}
                    </span>
                  </td>
                  <td style={{ fontWeight: 600 }}>{h.contentCount} posts</td>
                  <td style={{ fontWeight: 700, color: "var(--accent-cyan)" }}>
                    {h.impressions.toLocaleString()}
                  </td>
                  <td>{h.reach.toLocaleString()}</td>
                  <td style={{ color: "var(--accent-emerald)", fontWeight: 600 }}>
                    {h.engagement.toLocaleString()}
                  </td>
                  <td style={{ fontWeight: 700, color: "var(--accent-primary)" }}>
                    {h.avgEr}%
                  </td>
                </tr>
              ));
            })()}

            {filteredHashtags.length === 0 && (
              <tr>
                <td colSpan="6" style={{ textAlign: "center", padding: "2.5rem", color: "var(--text-muted)" }}>
                  No hashtag metrics found in your content table.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

// SubjectAnalyticsPage Component - Performance Metrics per Featured Subject / Person
window.SubjectAnalyticsPage = function() {
  const { activeAccount, contents } = React.useContext(window.VaultContext);
  const [searchSubject, setSearchSubject] = React.useState("");
  const [sortBy, setSortBy] = React.useState("impressions");
  const [sortOrder, setSortOrder] = React.useState("desc");
  const [currentPage, setCurrentPage] = React.useState(1);
  const itemsPerPage = 25;

  if (!activeAccount) {
    return <div className="page-container"><p>No active account selected.</p></div>;
  }

  const accountContents = React.useMemo(() => {
    return contents.filter(c => c.accountId === activeAccount.id);
  }, [contents, activeAccount.id]);

  React.useEffect(() => { setCurrentPage(1); }, [searchSubject, sortBy, sortOrder]);

  // Aggregate stats per Subject
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

      {/* Search and Sort Input */}
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

      {/* Subject Cards Overview */}
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

      {/* Formatted Subject Data Table */}
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
            {sortedSubjects.map(s => (
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
                  No subject records found in your content table.
                </td>
              </tr>
            )}
          </tbody>
        </table>
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
};

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

// CollaboratorsPage Component - Share Link & Permission Manager
window.CollaboratorsPage = function() {
  const { user } = React.useContext(window.AuthContext);
  const { 
    activeAccount, 
    addCollaborator, 
    updateCollaboratorRole, 
    removeCollaborator, 
    isOwner 
  } = React.useContext(window.VaultContext);

  const [inviteEmail, setInviteEmail] = React.useState("");
  const [inviteRole, setInviteRole] = React.useState("editor");
  const [copied, setCopied] = React.useState(false);

  if (!activeAccount) {
    return <div className="page-container"><p>No active account selected.</p></div>;
  }

  const shareLink = `${window.location.origin}${window.location.pathname}?vaultToken=${activeAccount.shareToken}`;

  const handleCopyLink = () => {
    navigator.clipboard.writeText(shareLink);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleAddCollab = (e) => {
    e.preventDefault();
    if (!inviteEmail.trim()) return;
    addCollaborator(activeAccount.id, inviteEmail.trim().toLowerCase(), inviteRole);
    setInviteEmail("");
  };

  return (
    <div className="page-container">
      <div className="page-header">
        <div>
          <h1 className="page-title">{activeAccount.name} - Vault Sharing & Collaborators</h1>
          <p className="page-subtitle">Share access with friends, assign Editor or Viewer permissions, and manage collaborator access</p>
        </div>
      </div>

      {!isOwner && (
        <div className="glass-card" style={{ borderLeft: "4px solid var(--accent-cyan)", marginBottom: "1.5rem" }}>
          <p style={{ color: "var(--accent-cyan)", fontWeight: 600 }}>
            🤝 Shared Vault: You are currently accessing this vault as a collaborator. Only the Vault Owner ({activeAccount.ownerEmail}) can add or delete collaborators.
          </p>
        </div>
      )}

      {/* Share Link Generator Box */}
      <div className="glass-card" style={{ marginBottom: "2rem" }}>
        <h3 style={{ fontSize: "1.15rem", fontWeight: 700, marginBottom: "0.5rem" }}>
          🔗 Shareable Vault Link
        </h3>
        <p style={{ color: "var(--text-muted)", fontSize: "0.9rem", marginBottom: "1rem" }}>
          Send this unique link to friends so they can open this vault directly.
        </p>

        <div style={{ display: "flex", gap: "0.75rem" }}>
          <input 
            type="text" 
            className="form-input" 
            readOnly 
            value={shareLink}
            style={{ color: "var(--accent-cyan)", fontWeight: 500 }}
          />
          <button onClick={handleCopyLink} className="btn btn-primary" style={{ whiteSpace: "nowrap" }}>
            <i data-lucide={copied ? "check" : "copy"} style={{ width: "16px", height: "16px" }}></i>
            {copied ? "Link Copied!" : "Copy Link"}
          </button>
        </div>
      </div>

      {/* Invite Collaborator by Email Form */}
      {isOwner && (
        <div className="glass-card" style={{ marginBottom: "2rem" }}>
          <h3 style={{ fontSize: "1.15rem", fontWeight: 700, marginBottom: "1rem" }}>
            ✉️ Invite Friend or Collaborator by Email
          </h3>

          <form onSubmit={handleAddCollab} style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
            <div style={{ flex: 2, minWidth: "240px" }}>
              <input 
                type="email" 
                className="form-input"
                placeholder="friend@gmail.com"
                required
                value={inviteEmail}
                onChange={e => setInviteEmail(e.target.value)}
              />
            </div>

            <div style={{ flex: 1, minWidth: "150px" }}>
              <select className="form-select" value={inviteRole} onChange={e => setInviteRole(e.target.value)}>
                <option value="editor">Editor (Can add, edit & delete content)</option>
                <option value="viewer">Viewer (Read-only access)</option>
              </select>
            </div>

            <button type="submit" className="btn btn-primary">
              Grant Access
            </button>
          </form>
        </div>
      )}

      {/* Current Collaborators Table */}
      <h3 style={{ fontSize: "1.25rem", fontWeight: 700, marginBottom: "1rem" }}>
        Active Vault Members & Rules ({activeAccount.collaborators.length + 1})
      </h3>

      <div className="table-container">
        <table className="custom-table">
          <thead>
            <tr>
              <th>Collaborator Email</th>
              <th>Role / Permission</th>
              <th>Joined Date</th>
              {isOwner && <th>Manage Rules</th>}
            </tr>
          </thead>
          <tbody>
            {/* Owner Row */}
            <tr>
              <td>
                <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", fontWeight: 600 }}>
                  👑 {activeAccount.ownerEmail}
                  <span style={{ fontSize: "0.75rem", color: "var(--accent-emerald)" }}>(Vault Owner)</span>
                </div>
              </td>
              <td>
                <span className="badge badge-uploaded">Owner (Full Control)</span>
              </td>
              <td style={{ color: "var(--text-muted)" }}>Primary Owner</td>
              {isOwner && <td>-</td>}
            </tr>

            {/* Collaborators Rows */}
            {activeAccount.collaborators.map(collab => (
              <tr key={collab.email}>
                <td style={{ fontWeight: 500 }}>
                  👤 {collab.email}
                </td>
                <td>
                  {isOwner ? (
                    <select 
                      className="form-select"
                      style={{ padding: "0.3rem 0.6rem", fontSize: "0.82rem", width: "auto" }}
                      value={collab.role}
                      onChange={e => updateCollaboratorRole(activeAccount.id, collab.email, e.target.value)}
                    >
                      <option value="editor">Editor (Full Edit)</option>
                      <option value="viewer">Viewer (Read-Only)</option>
                    </select>
                  ) : (
                    <span className={`badge ${collab.role === 'editor' ? 'badge-scheduled' : 'badge-privated'}`}>
                      {collab.role}
                    </span>
                  )}
                </td>
                <td style={{ color: "var(--text-muted)" }}>{collab.joinedAt || "Recent"}</td>
                {isOwner && (
                  <td>
                    <button 
                      onClick={() => {
                        if (confirm(`Remove collaborator ${collab.email} from this vault?`)) {
                          removeCollaborator(activeAccount.id, collab.email);
                        }
                      }}
                      className="btn btn-danger btn-icon"
                      title="Remove Collaborator"
                    >
                      <i data-lucide="user-x" style={{ width: "16px", height: "16px" }}></i>
                    </button>
                  </td>
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

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

// 4. MAIN APP CONTROLLER

function AppContent() {
  const { user, authLoading } = React.useContext(AuthContext);
  const { activeAccountId, activePage, dataLoading } = React.useContext(VaultContext);

  // Initialize Lucide icons safely after render
  React.useEffect(function() {
    // Use timeout to ensure DOM is fully updated before initializing icons
    const timer = setTimeout(function() {
      initLucideIcons();
    }, 0);
    return function() { clearTimeout(timer); };
  }, [activeAccountId, activePage]);

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