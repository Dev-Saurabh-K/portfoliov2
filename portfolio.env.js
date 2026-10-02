/*
  Portfolio environment data
  Edit this file to update portfolio content. The website reads this file at load time.
*/
window.PORTFOLIO_ENV = {
  profile: {
    title: "full-stack builder",
    headline: "Building thoughtful systems for the web.",
    summary: "I build end-to-end products at the intersection of clean interfaces, reliable backends, and practical AI. From first commit to cloud deployment.",
    availability: "Open to building meaningful things",
    email: "hello@example.com",
    github: "https://github.com/"
  },
  skills: [
    { icon: "⌘", tone: "pink", title: "Frontend", items: "React · Next.js · JavaScript · TypeScript", percentage: 91 },
    { icon: "⌁", tone: "blue", title: "Backend", items: "Node.js · Express · FastAPI · REST APIs", percentage: 88 },
    { icon: "◈", tone: "yellow", title: "Data & AI", items: "MongoDB · AI integrations · real-time data", percentage: 84 },
    { icon: "⌘", tone: "green", title: "DevOps", items: "Docker · CI/CD · cloud deployment · Git", percentage: 80 }
  ],
  projects: [
    { number: "01", name: "Synaptiq", suffix: "/ AI learning platform", icon: "✦", iconClass: "synaptiq-folder", cardClass: "synaptiq", description: "Transforms PDFs into structured, topic-by-topic learning paths with detailed notes. Explore contextual keywords for supporting visuals and information, take quizzes per topic, and track progress through a personal analytics dashboard.", tags: ["AI", "PDF processing", "Analytics", "Quizzes"], linkText: "View project ↗", url: "#contact", repo: "#contact" },
    { number: "02", name: "DeployCode", suffix: "/ VibeDeploy", icon: "▰", cardClass: "featured", description: "A developer-focused deployment experience that brings the path from code to production into a calmer, more approachable workflow.", tags: ["Next.js", "FastAPI", "DevOps"], linkText: "Case study ↗", url: "#contact", repo: "#contact" },
    { number: "03", name: "LokSahayakAI", suffix: "", icon: "▰", iconClass: "purple-folder", description: "An AI-powered public-service assistance concept, designed to make useful information and guidance more accessible.", tags: ["AI", "FastAPI", "Next.js"], linkText: "View project ↗", url: "#contact", repo: "#contact" },
    { number: "04", name: "Realtime chat", suffix: "", icon: "▰", iconClass: "green-folder", description: "A responsive messaging experience exploring live updates, user presence, and the small details that make conversation feel immediate.", tags: ["MERN", "Socket-based", "REST"], linkText: "View project ↗", url: "#contact", repo: "#contact" },
    { number: "05", name: "Water monitoring IoT", suffix: "", icon: "▰", iconClass: "orange-folder", description: "An IoT monitoring project that turns sensor readings into useful visibility for water quality and resource awareness.", tags: ["IoT", "Data", "Monitoring"], linkText: "View project ↗", url: "#contact", repo: "#contact" }
  ]
};
