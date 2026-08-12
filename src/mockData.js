// Initial Sample Data Store for Social Media Command Suite
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
        { id: "p1", name: "Instagram", handle: "@alex_creator", followers: 124500, url: "https://instagram.com/alex_creator" },
        { id: "p2", name: "YouTube", handle: "AlexVlogsTech", followers: 310000, url: "https://youtube.com/@AlexVlogsTech" },
        { id: "p3", name: "TikTok", handle: "@alex_tok", followers: 450000, url: "https://tiktok.com/@alex_tok" },
        { id: "p4", name: "X (Twitter)", handle: "@alex_tweets", followers: 89000, url: "https://x.com/alex_tweets" }
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
    {
      id: "cnt_01",
      accountId: "acc_01",
      uploadDate: "2026-08-10",
      platform: "Instagram",
      caption: "Unboxing the futuristic AI Glasses with Sarah! Is this the replacement for smartphones?",
      hashtags: ["#tech", "#gadgets", "#aiglasses", "#unboxing"],
      subjects: ["Alex", "Sarah"],
      impressions: 145000,
      reach: 122000,
      likes: 12400,
      comments: 980,
      shares: 1420,
      saves: 3100,
      status: "Uploaded"
    },
    {
      id: "cnt_02",
      accountId: "acc_01",
      uploadDate: "2026-08-08",
      platform: "YouTube",
      caption: "Full Day in the Life of a Tech Creator feat. Jordan & Alex (Setup Tour 2026)",
      hashtags: ["#vlog", "#setuptour", "#creativestudio", "#tech"],
      subjects: ["Alex", "Jordan"],
      impressions: 380000,
      reach: 295000,
      likes: 28900,
      comments: 2450,
      shares: 3100,
      saves: 5400,
      status: "Uploaded"
    },
    {
      id: "cnt_03",
      accountId: "acc_01",
      uploadDate: "2026-08-05",
      platform: "TikTok",
      caption: "3 AI tools you need to try this week! 🚀 #ai #productivity #tech",
      hashtags: ["#ai", "#productivity", "#tech", "#hacks"],
      subjects: ["Alex"],
      impressions: 620000,
      reach: 540000,
      likes: 54000,
      comments: 3120,
      shares: 12400,
      saves: 18900,
      status: "Uploaded"
    },
    {
      id: "cnt_04",
      accountId: "acc_01",
      uploadDate: "2026-08-15",
      platform: "Instagram",
      caption: "Behind the scenes with Sarah on the new studio build podcast!",
      hashtags: ["#podcast", "#studio", "#behindthescenes"],
      subjects: ["Sarah"],
      impressions: 85000,
      reach: 71000,
      likes: 7200,
      comments: 420,
      shares: 610,
      saves: 1100,
      status: "Scheduled"
    },
    {
      id: "cnt_05",
      accountId: "acc_01",
      uploadDate: "2026-07-28",
      platform: "X (Twitter)",
      caption: "Thread: Why 2026 is the turning point for wearable spatial computing. 🧵👇",
      hashtags: ["#tech", "#spatialcomputing", "#thread"],
      subjects: ["Alex"],
      impressions: 92000,
      reach: 84000,
      likes: 4100,
      comments: 630,
      shares: 1890,
      saves: 2200,
      status: "Uploaded"
    },
    {
      id: "cnt_06",
      accountId: "acc_02",
      uploadDate: "2026-08-02",
      platform: "YouTube",
      caption: "Apex 2026 Smartphone Flagship Shootout: Jordan vs Alex blind camera test",
      hashtags: ["#smartphone", "#cameratest", "#tech", "#gadgets"],
      subjects: ["Alex", "Jordan"],
      impressions: 410000,
      reach: 340000,
      likes: 31000,
      comments: 1850,
      shares: 2400,
      saves: 4800,
      status: "Uploaded"
    }
  ]
};
