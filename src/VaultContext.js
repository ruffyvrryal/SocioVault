// Vault Context Provider - Accounts, Content, Roles, Analytics
window.VaultContext = React.createContext();

window.VaultProvider = function({ children }) {
  const { user } = React.useContext(window.AuthContext);

  // Accounts state
  const [accounts, setAccounts] = React.useState(() => {
    const saved = localStorage.getItem("smh_accounts");
    return saved ? JSON.parse(saved) : window.INITIAL_DATA.accounts;
  });

  // Active Selected Account
  const [activeAccountId, setActiveAccountId] = React.useState(() => {
    return localStorage.getItem("smh_active_account") || "acc_01";
  });

  // Active Navigation Page
  const [activePage, setActivePage] = React.useState("account-center");

  // Content Logs state
  const [contents, setContents] = React.useState(() => {
    const saved = localStorage.getItem("smh_contents");
    return saved ? JSON.parse(saved) : window.INITIAL_DATA.contents;
  });

  // Save changes to localStorage
  React.useEffect(() => {
    localStorage.setItem("smh_accounts", JSON.stringify(accounts));
  }, [accounts]);

  React.useEffect(() => {
    if (activeAccountId) {
      localStorage.setItem("smh_active_account", activeAccountId);
    } else {
      localStorage.removeItem("smh_active_account");
    }
  }, [activeAccountId]);

  React.useEffect(() => {
    localStorage.setItem("smh_contents", JSON.stringify(contents));
  }, [contents]);

  // Current active account object
  const activeAccount = React.useMemo(() => {
    return accounts.find(a => a.id === activeAccountId) || null;
  }, [accounts, activeAccountId]);

  // Role Checker for given account & active user
  const getUserRole = React.useCallback((account) => {
    if (!user || !account) return "viewer";
    if (account.ownerEmail === user.email) return "owner";
    const collab = (account.collaborators || []).find(c => c.email === user.email);
    if (collab) return collab.role; // 'editor' or 'viewer'
    return "viewer";
  }, [user]);

  const activeUserRole = React.useMemo(() => {
    return getUserRole(activeAccount);
  }, [activeAccount, getUserRole]);

  const canEdit = activeUserRole === "owner" || activeUserRole === "editor";
  const isOwner = activeUserRole === "owner";

  // Account Actions
  const addAccount = (name, description) => {
    if (!user) return;
    const newAcc = {
      id: "acc_" + Math.random().toString(36).substr(2, 9),
      name: name || "New Media Account",
      ownerEmail: user.email,
      description: description || "Social media account workspace",
      platforms: [
        { id: "p_" + Date.now(), name: "Instagram", handle: "@" + name.toLowerCase().replace(/\s+/g, "_"), followers: 0, url: "#" }
      ],
      collaborators: [],
      shareToken: "vlt_token_" + Math.random().toString(36).substr(2, 8)
    };
    setAccounts(prev => [...prev, newAcc]);
    setActiveAccountId(newAcc.id);
    setActivePage("account-center");
  };

  const removeAccount = (accountId) => {
    setAccounts(prev => prev.filter(a => a.id !== accountId));
    setContents(prev => prev.filter(c => c.accountId !== accountId));
    if (activeAccountId === accountId) {
      setActiveAccountId(null);
    }
  };

  const editAccount = (accountId, updatedFields) => {
    setAccounts(prev => prev.map(a =>
      a.id === accountId ? { ...a, ...updatedFields } : a
    ));
  };

  // Platform Actions
  const addPlatform = (accountId, platformData) => {
    setAccounts(prev => prev.map(acc => {
      if (acc.id === accountId) {
        return {
          ...acc,
          platforms: [...(acc.platforms || []), { id: "p_" + Date.now(), ...platformData }]
        };
      }
      return acc;
    }));
  };

  const removePlatform = (accountId, platformId) => {
    setAccounts(prev => prev.map(acc => {
      if (acc.id === accountId) {
        return {
          ...acc,
          platforms: (acc.platforms || []).filter(p => p.id !== platformId)
        };
      }
      return acc;
    }));
  };

  // Content Actions
  const addContent = (contentData) => {
    const newItem = {
      id: "cnt_" + Math.random().toString(36).substr(2, 9),
      accountId: activeAccountId,
      ...contentData
    };
    setContents(prev => [newItem, ...prev]);
  };

  const updateContent = (contentId, updatedData) => {
    setContents(prev => prev.map(item => item.id === contentId ? { ...item, ...updatedData } : item));
  };

  const deleteContent = (contentId) => {
    setContents(prev => prev.filter(item => item.id !== contentId));
  };

  // Collaborator Actions
  const addCollaborator = (accountId, email, role) => {
    setAccounts(prev => prev.map(acc => {
      if (acc.id === accountId) {
        const collabs = acc.collaborators || [];
        if (collabs.some(c => c.email === email)) return acc;
        return {
          ...acc,
          collaborators: [...collabs, { email, role, joinedAt: new Date().toISOString().split("T")[0] }]
        };
      }
      return acc;
    }));
  };

  const updateCollaboratorRole = (accountId, email, newRole) => {
    setAccounts(prev => prev.map(acc => {
      if (acc.id === accountId) {
        return {
          ...acc,
          collaborators: (acc.collaborators || []).map(c => c.email === email ? { ...c, role: newRole } : c)
        };
      }
      return acc;
    }));
  };

  const removeCollaborator = (accountId, email) => {
    setAccounts(prev => prev.map(acc => {
      if (acc.id === accountId) {
        return {
          ...acc,
          collaborators: (acc.collaborators || []).filter(c => c.email !== email)
        };
      }
      return acc;
    }));
  };

  return (
    <window.VaultContext.Provider value={{
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
      addAccount,
      removeAccount,
      editAccount,
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
    </window.VaultContext.Provider>
  );
};
