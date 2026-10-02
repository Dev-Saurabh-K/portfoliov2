/*
  Portfolio environment data
  Edit this file to update portfolio content. The website reads this file at load time.
*/
window.PORTFOLIO_ENV = {
  profile: {
    title: "Backend and Devops Developer",
    headline: "Building thoughtful systems .",
    summary: "I build end-to-end products at the intersection of clean interfaces, reliable backends, and practical AI. From first commit to cloud deployment.",
    availability: "Open to building meaningful things",
    email: "saurabhkumar.sakr@gmail.com",
    github: "https://github.com/Dev-Saurabh-K"
  },
  skills: [
    { icon: "⌘", tone: "pink", title: "Frontend", items: "React · Next.js · JavaScript · TypeScript", percentage: 85 },
    { icon: "⌁", tone: "blue", title: "Backend", items: "Node.js · Express · FastAPI · REST APIs", percentage: 88 },
    { icon: "◈", tone: "yellow", title: "Data & AI", items: "MongoDB · AI integrations · real-time data · sql", percentage: 84 },
    { icon: "⌘", tone: "green", title: "DevOps", items: "Docker · CI/CD · cloud deployment · Git · Nginx", percentage: 80 }
  ],
  projects: [
    { number: "01", name: "Synaptiq", suffix: "/ AI learning platform", icon: "✦", iconClass: "synaptiq-folder", cardClass: "synaptiq", description: "Transforms PDFs into structured, topic-by-topic learning paths with detailed notes. Explore contextual keywords for supporting visuals and information, take quizzes per topic, and track progress through a personal analytics dashboard.", tags: ["AI", "PDF processing", "Analytics", "Quizzes"], linkText: "View project ↗", url: "private-sigma-mauve.vercel.app", repo: "https://github.com/Dev-Saurabh-K/Private" },
    { number: "02", name: "DeployCode", suffix: "/ VibeDeploy", icon: "▰", cardClass: "featured", description: "A developer-focused deployment experience that brings the path from code to production into a calmer, more approachable workflow.", tags: ["Nginx", "FastAPI", "Docker", "ReactJS"], linkText: "Case study ↗", url: "deploycode-chi.vercel.app", repo: "https://github.com/Dev-Saurabh-K/deployCode" },
    { number: "03", name: "Realtime chat", suffix: "", icon: "▰", iconClass: "green-folder", description: "A responsive messaging experience exploring live updates, user presence, and the small details that make conversation feel immediate.", tags: ["MERN", "Socket-based", "REST"], linkText: "View project ↗", url: "chat-app-x6sa.vercel.app", repo: "https://github.com/Dev-Saurabh-K/chat-app" },
    { number: "04", name: "Water monitoring IoT", suffix: "", icon: "▰", iconClass: "orange-folder", description: "An IoT monitoring project that turns sensor readings into useful visibility for water quality and resource awareness.", tags: ["IoT", "Data", "Monitoring"], linkText: "View project ↗", url: "#contact", repo: "#contact" }
  ]
};
