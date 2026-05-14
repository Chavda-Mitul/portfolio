export const projectsData = [
  {
    name: "SentinelInvoice",
    description:
      "Autonomous AI invoice auditing engine that parses PDF invoices via LlamaParse OCR, extracts structured fields with Gemini, validates line-item math, and checks historical vendor prices (±5%). Flags anomalies to a Tavily-powered ReAct enrichment agent that computes a trust score (0–100); low-trust invoices pause at a LangGraph human-in-the-loop checkpoint before finalizing.",
    github_link: "https://github.com/Chavda-Mitul/invoice-anomaly-detection",
    demo: "",
    tech: ["LangGraph", "LangChain", "Google Gemini", "Groq", "LlamaParse", "Tavily", "PostgreSQL", "Express.js", "React"],
  },
  {
    name: "Code-RAG",
    description:
      "Production-grade codebase Q&A system that ingests any GitHub repo, parses it with tree-sitter AST, and stores a Neo4j knowledge graph of files, classes, and functions. Answers questions via hybrid RRF retrieval (vector + BM25 + graph traversal) fed into a CRAG corrective loop — grades each retrieved doc, rewrites the query if quality is low (max 3 iterations), then checks the answer for hallucinations before returning.",
    github_link: "https://github.com/Chavda-Mitul/Codebase-RAG",
    demo: "",
    tech: ["LangGraph", "LangChain", "Neo4j", "Groq LLaMA-3.3", "FastAPI", "Next.js", "tree-sitter", "Python"],
  },
  {
    name: "FlashCommerce",
    description:
      "High-traffic flash sale backend built to handle thousands of concurrent buyers without overselling. Uses Redis Lua atomic scripts to reserve inventory in microseconds, 15-minute TTL checkout reservations that auto-release on timeout, and two-layer storage (Redis for real-time operations, PostgreSQL for persistent orders). Includes JWT auth, Stripe payment integration, Swagger docs, and a Jest test suite.",
    github_link: "https://github.com/Chavda-Mitul/flash-sale",
    demo: "",
    tech: ["Node.js", "Fastify", "TypeScript", "Redis", "PostgreSQL", "Stripe", "JWT", "Docker", "Jest"],
  },
  {
    name: "Satellite Surveillance",
    description:
      "Real-time 3D satellite tracking app that visualises thousands of active satellites over an interactive Cesium.js globe. Streams live TLE orbital data from CelesTrak, classifies satellites by type (ISS, Starlink, GPS, Debris), and lets users click any satellite to fly to it and render its predicted orbit path. Backend caches TLE data in Redis for 12 hours to avoid rate-limiting.",
    github_link: "https://github.com/Chavda-Mitul/surveillance",
    demo: "",
    tech: ["React 18", "TypeScript", "Cesium.js", "Node.js", "Fastify", "Redis", "satellite.js"],
  },
];
