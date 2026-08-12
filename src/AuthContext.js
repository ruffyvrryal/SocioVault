// Auth Context Provider
window.AuthContext = React.createContext();

window.AuthProvider = function({ children }) {
  const [user, setUser] = React.useState(() => {
    const saved = localStorage.getItem("smh_user");
    return saved ? JSON.parse(saved) : window.INITIAL_DATA.currentUser;
  });

  React.useEffect(() => {
    if (user) {
      localStorage.setItem("smh_user", JSON.stringify(user));
    } else {
      localStorage.removeItem("smh_user");
    }
  }, [user]);

  const loginWithGoogle = (email = "alex.creator@gmail.com", name = "Alex Rivera") => {
    const newUser = {
      uid: "user_" + Math.random().toString(36).substr(2, 9),
      displayName: name,
      email: email,
      photoURL: `https://api.dicebear.com/7.x/avataaars/svg?seed=${encodeURIComponent(name)}`
    };
    setUser(newUser);
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <window.AuthContext.Provider value={{ user, setUser, loginWithGoogle, logout }}>
      {children}
    </window.AuthContext.Provider>
  );
};
