// Main App Component & Flow Controller
function AppContent() {
  const { user } = React.useContext(window.AuthContext);
  const { activeAccountId, activePage } = React.useContext(window.VaultContext);

  // Initialize Lucide icons on DOM updates
  React.useEffect(() => {
    if (window.lucide) {
      window.lucide.createIcons();
    }
  });

  // Step 1: Authentication Guard
  if (!user) {
    return <window.LoginPage />;
  }

  // Step 2: Account Vault Selection Guard
  if (!activeAccountId || activePage === "account-vault") {
    return (
      <div>
        <window.Navbar />
        <window.AccountVaultPage />
      </div>
    );
  }

  // Step 3: Account Workspace & Page Routing
  const renderActivePage = () => {
    switch (activePage) {
      case "account-center":
        return <window.AccountCenterPage />;
      case "add-content":
        return <window.AddContentPage />;
      case "content-table":
        return <window.ContentTablePage />;
      case "timeframe-analytics":
        return <window.TimeframeAnalyticsPage />;
      case "hashtag-analytics":
        return <window.HashtagAnalyticsPage />;
      case "subject-analytics":
        return <window.SubjectAnalyticsPage />;
      case "collaborators":
        return <window.CollaboratorsPage />;
      default:
        return <window.AccountCenterPage />;
    }
  };

  return (
    <div>
      <window.Navbar />
      {renderActivePage()}
    </div>
  );
}

function MainApp() {
  return (
    <window.AuthProvider>
      <window.VaultProvider>
        <AppContent />
      </window.VaultProvider>
    </window.AuthProvider>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<MainApp />);
