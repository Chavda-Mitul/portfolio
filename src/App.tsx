import { useState, lazy, Suspense } from 'react';
import { AnimatePresence } from 'framer-motion';
import { Grain } from './components/ui/Grain';
import { CustomCursor } from './components/ui/CustomCursor';
import { Preloader } from './components/ui/Preloader';
import { ProjectModal } from './components/ui/ProjectModal';
import { ResumeModal } from './components/ui/ResumeModal';
import { ViewerBadge } from './components/ui/ViewerBadge';
import { SunToggle } from './components/ui/SunToggle';
import { Hero } from './components/sections/Hero';

const Experience = lazy(() => import('./components/sections/Experience').then(m => ({ default: m.Experience })));
const Work = lazy(() => import('./components/sections/Work').then(m => ({ default: m.Work })));
const Skills = lazy(() => import('./components/sections/Skills').then(m => ({ default: m.Skills })));
const Footer = lazy(() => import('./components/sections/Footer').then(m => ({ default: m.Footer })));

interface ProjectData {
    title: string;
    category: string;
    description: string;
    repoUrl?: string;
    liveUrl?: string;
    summary?: string;
    details?: Array<{ title: string; body?: string; bullets?: string[] }>;
    highlights?: string[];
    tech?: string[];
}

function App() {
    const [isLoading, setIsLoading] = useState(true);
    const [theme, setTheme] = useState<'light' | 'dark'>('dark');
    const [selectedProject, setSelectedProject] = useState<ProjectData | null>(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isResumeModalOpen, setIsResumeModalOpen] = useState(false);

    const projects: ProjectData[] = [
        {
            title: 'SentinelInvoice',
            category: 'AI / Automation',
            description: 'Autonomous AI invoice auditing engine that parses PDF invoices via LlamaParse OCR, extracts structured fields with Gemini, validates line-item math against historical vendor prices, and flags anomalies via a Tavily-powered ReAct agent.',
            summary: 'An autonomous AI invoice auditing system. Parses PDF invoices via LlamaParse OCR, extracts structured data with Gemini, validates line-item math against historical vendor prices, and flags anomalies to a Tavily-powered ReAct enrichment agent.',
            details: [
                {
                    title: 'Key features',
                    bullets: [
                        'LlamaParse OCR for PDF invoice extraction',
                        'Gemini for structured field extraction',
                        'Tavily-powered ReAct agent for anomaly enrichment',
                        'LangGraph human-in-the-loop checkpoint',
                        'Trust score (0-100) with auto-finalize',
                    ],
                },
            ],
            highlights: [
                'LLM-powered structured extraction from PDFs',
                'LangGraph-based human-in-the-loop verification',
                'Historical price anomaly detection',
            ],
            tech: ['LangGraph', 'LangChain', 'Google Gemini', 'Groq', 'LlamaParse', 'Tavily', 'PostgreSQL', 'Express.js', 'React'],
            repoUrl: 'https://github.com/Chavda-Mitul/invoice-anomaly-detection',
        },
        {
            title: 'Code-RAG',
            category: 'RAG / Knowledge Graph',
            description: 'Production-grade codebase Q&A system that ingests any GitHub repo, parses with tree-sitter AST, stores a Neo4j knowledge graph, and answers via hybrid RRF retrieval with a CRAG corrective loop.',
            summary: 'A production-grade RAG system for codebases that ingests any GitHub repo, parses source with tree-sitter AST, builds a Neo4j knowledge graph, and answers via hybrid RRF retrieval with CRAG corrective loop.',
            details: [
                {
                    title: 'Architecture',
                    bullets: [
                        'tree-sitter AST parsing for semantic code understanding',
                        'Neo4j knowledge graph of files, classes, functions',
                        'Hybrid RRF retrieval: dense vectors + BM25 + graph traversal',
                        'CRAG corrective loop that grades and rewrites queries',
                    ],
                },
            ],
            highlights: [
                'AST-level code understanding via tree-sitter',
                'Neo4j knowledge graph for relational code context',
                'CRAG corrective loop for hallucination-free answers',
            ],
            tech: ['LangGraph', 'LangChain', 'Neo4j', 'Groq LLaMA-3.3', 'FastAPI', 'Next.js', 'tree-sitter', 'Python'],
            repoUrl: 'https://github.com/Chavda-Mitul/Codebase-RAG',
        },
        {
            title: 'FlashCommerce',
            category: 'Backend / Systems',
            description: 'A high-traffic flash sale backend built to handle thousands of concurrent buyers without overselling, using Redis Lua atomic scripts for microsecond inventory reservation.',
            summary: 'A high-concurrency flash sale backend using Redis Lua atomic scripts for microsecond inventory reservation, two-layer storage (Redis + PostgreSQL), JWT auth, and Stripe payments.',
            details: [
                {
                    title: 'Architecture',
                    bullets: [
                        'Redis Lua atomic scripts for microsecond inventory reservation',
                        '15-minute TTL checkout reservations with auto-release',
                        'Two-layer storage: Redis for real-time, PostgreSQL for persistent orders',
                        'JWT authentication and Stripe payment integration',
                    ],
                },
            ],
            highlights: [
                'Microsecond inventory reservation with Redis Lua',
                'Auto-release timed checkout reservations',
                'Two-layer storage architecture',
            ],
            tech: ['Node.js', 'Fastify', 'TypeScript', 'Redis', 'PostgreSQL', 'Stripe', 'JWT', 'Docker'],
            repoUrl: 'https://github.com/Chavda-Mitul/flash-sale',
        },
        {
            title: 'Satellite Surveillance',
            category: 'Real-time / Visualization',
            description: 'Real-time 3D satellite tracking app that visualises thousands of active satellites over a Cesium.js globe with live TLE orbital data streaming.',
            summary: 'Real-time 3D satellite tracking over a Cesium.js globe. Streams live TLE orbital data from CelesTrak via Redis-cached backend, classifies satellites by type, and renders predicted orbit paths.',
            details: [
                {
                    title: 'Features',
                    bullets: [
                        'Streams live TLE orbital data from CelesTrak via Redis cache',
                        'Classifies satellites by type: ISS, Starlink, GPS, Debris',
                        'Click to fly and render predicted orbit path',
                    ],
                },
            ],
            highlights: [
                'Real-time 3D visualization with Cesium.js',
                'Live TLE orbital data streaming',
                'Satellite classification and orbit prediction',
            ],
            tech: ['React 18', 'TypeScript', 'Cesium.js', 'Node.js', 'Fastify', 'Redis'],
            repoUrl: 'https://github.com/Chavda-Mitul/surveillance',
        },
        {
            title: 'CSV-Parser',
            category: 'Backend / Data Processing',
            description: 'A lightweight, high-performance CSV parsing library for Node.js with streaming support, custom delimiter configuration, and robust error handling.',
            summary: 'A performant CSV parsing library for Node.js. Handles large files via streaming, supports custom delimiters, automatic type detection, and comprehensive error handling.',
            details: [
                {
                    title: 'Features',
                    bullets: [
                        'Stream-based parsing for memory-efficient processing',
                        'Automatic data type detection (numbers, booleans, dates)',
                        'Custom delimiter, quote, and escape character config',
                        'Detailed row-level error reporting',
                    ],
                },
            ],
            highlights: [
                'Streaming parser for large files',
                'Automatic type detection',
                'Comprehensive error handling',
            ],
            tech: ['Node.js', 'TypeScript', 'Streams'],
            repoUrl: 'https://github.com/Chavda-Mitul/csv-parser',
        },
    ];

    const openModal = (project: ProjectData) => {
        setSelectedProject(project);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setSelectedProject(null);
    };

    const closeResumeModal = () => {
        setIsResumeModalOpen(false);
    };

    const toggleTheme = () => {
        setTheme(prev => prev === 'dark' ? 'light' : 'dark');
    };

    return (
        <>
            <Grain />
            {!isLoading && <CustomCursor />}

            <AnimatePresence>
                {isLoading && <Preloader onComplete={() => setIsLoading(false)} />}
            </AnimatePresence>

            <main className="bg-bg-primary text-fg-primary min-h-screen">
                <Hero theme={theme} onResumeClick={() => setIsResumeModalOpen(true)} />

                <Suspense fallback={null}>
                    <Experience />
                </Suspense>

                <Suspense fallback={null}>
                    <Work projects={projects} openModal={openModal} />
                </Suspense>

                <Suspense fallback={null}>
                    <Skills />
                </Suspense>

                <Suspense fallback={null}>
                    <Footer />
                </Suspense>
            </main>

            <ViewerBadge theme={theme} />
            <SunToggle theme={theme} onToggle={toggleTheme} />

            <ProjectModal isOpen={isModalOpen} onClose={closeModal} project={selectedProject} />
            <ResumeModal isOpen={isResumeModalOpen} onClose={closeResumeModal} />
        </>
    );
}

export default App;