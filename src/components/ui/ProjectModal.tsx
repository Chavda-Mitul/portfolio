import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, Mail } from 'lucide-react';
import { CopyButton } from './CopyButton';
import { useEffect } from 'react';
import { DetailSections, DetailSection } from './DetailSections';

interface Project {
    title: string;
    category: string;
    description: string;
    repoUrl?: string;
    liveUrl?: string;
    summary?: string;
    details?: DetailSection[];
    highlights?: string[];
    tech?: string[];
}

interface ProjectModalProps {
    isOpen: boolean;
    onClose: () => void;
    project: Project | null;
}

export const ProjectModal = ({ isOpen, onClose, project }: ProjectModalProps) => {
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        const onKey = (e: KeyboardEvent) => {
            if (e.key === 'Escape') onClose();
        };
        if (isOpen) window.addEventListener('keydown', onKey);
        return () => {
            document.body.style.overflow = 'unset';
            window.removeEventListener('keydown', onKey);
        };
    }, [isOpen, onClose]);

    if (!project) return null;

    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center p-[3vw] md:p-[2vw]">
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="absolute inset-0 bg-black/85 backdrop-blur-sm cursor-pointer"
                    />

                    <motion.div
                        initial={{ scale: 0.97, opacity: 0, y: 20 }}
                        animate={{ scale: 1, opacity: 1, y: 0 }}
                        exit={{ scale: 0.97, opacity: 0, y: 20 }}
                        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                        className="relative w-full max-w-[1320px] bg-bg-primary border border-border-primary rounded-2xl shadow-2xl flex flex-col max-h-[92vh] md:h-[88vh] overflow-hidden"
                    >
                        {/* Header */}
                        <div className="flex justify-between items-start gap-4 px-[6vw] md:px-8 py-[4vw] md:py-5 border-b border-border-primary bg-bg-primary/80 backdrop-blur-md shrink-0">
                            <div className="min-w-0 flex-1">
                                <span className="font-mono text-[2.5vw] md:text-xs uppercase tracking-widest text-fg-secondary block mb-[1vw] md:mb-1.5">
                                    {project.category}
                                </span>
                                <h2 className="font-display font-black text-[6vw] md:text-3xl leading-tight tracking-tight truncate">
                                    {project.title}
                                </h2>
                            </div>
                            <div className="flex items-center gap-3 shrink-0">
                                <CopyButton contentId="project-modal-content" className="flex" />
                                <button
                                    onClick={onClose}
                                    aria-label="Close"
                                    className="p-[2vw] md:p-2 rounded-full border border-transparent hover:border-border-primary hover:bg-bg-secondary transition-colors"
                                >
                                    <X className="w-[5vw] h-[5vw] md:w-5 md:h-5" />
                                </button>
                            </div>
                        </div>

                        {/* Body */}
                        <div id="project-modal-content" className="flex flex-col flex-1 min-h-0 overflow-y-auto">
                            <div className="md:overflow-y-auto md:overscroll-contain">
                                <div className="px-[6vw] md:px-8 py-[6vw] md:py-8">
                                    <p className="text-[4vw] md:text-lg text-fg-primary leading-relaxed mb-[6vw] md:mb-8 font-medium">
                                        {project.summary || project.description}
                                    </p>

                                    {project.details && project.details.length > 0 && (
                                        <div className="mb-[10vw] md:mb-10">
                                            <DetailSections sections={project.details} />
                                        </div>
                                    )}

                                    {project.highlights && project.highlights.length > 0 && (
                                        <div className="mb-[8vw] md:mb-8">
                                            <span className="font-mono text-[2.5vw] md:text-xs uppercase tracking-widest text-fg-secondary block mb-[3vw] md:mb-4">
                                                Highlights
                                            </span>
                                            <ul className="space-y-[2vw] md:space-y-2.5">
                                                {project.highlights.map((h, i) => (
                                                    <li key={i} className="relative pl-[5vw] md:pl-6 text-[3.5vw] md:text-sm leading-relaxed text-fg-secondary before:content-[''] before:absolute before:left-[1vw] md:before:left-2 before:top-[2.2vw] md:before:top-2.5 before:w-[2vw] md:before:w-2 before:h-px before:bg-fg-primary/40">
                                                        {h}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    )}

                                    {project.tech && project.tech.length > 0 && (
                                        <div className="mb-[8vw] md:mb-8">
                                            <span className="font-mono text-[2.5vw] md:text-xs uppercase tracking-widest text-fg-secondary block mb-[3vw] md:mb-4">
                                                Stack
                                            </span>
                                            <div className="flex flex-wrap gap-[2vw] md:gap-2">
                                                {project.tech.map((t) => (
                                                    <span key={t} className="px-[3vw] md:px-3 py-[1vw] md:py-1 rounded-full border border-border-primary text-[2.5vw] md:text-xs font-mono bg-bg-secondary/40 text-fg-secondary">
                                                        {t}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    )}

                                    <div className="flex flex-wrap gap-[3vw] md:gap-3 pt-[4vw] md:pt-6 border-t border-border-primary/60">
                                        {project.liveUrl && (
                                            <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-[2vw] md:gap-2 px-[5vw] md:px-5 py-[3vw] md:py-2.5 rounded-full bg-fg-primary text-bg-primary font-mono text-[2.8vw] md:text-xs uppercase tracking-widest font-bold hover:scale-105 transition-transform">
                                                <ExternalLink className="w-[4vw] h-[4vw] md:w-4 md:h-4" />
                                                Live Demo
                                            </a>
                                        )}
                                        {project.repoUrl && (
                                            <a href={project.repoUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-[2vw] md:gap-2 px-[5vw] md:px-5 py-[3vw] md:py-2.5 rounded-full border border-border-primary font-mono text-[2.8vw] md:text-xs uppercase tracking-widest font-bold hover:bg-bg-secondary transition-colors">
                                                <svg viewBox="0 0 24 24" fill="currentColor" className="w-[4vw] h-[4vw] md:w-4 md:h-4" xmlns="http://www.w3.org/2000/svg"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>
                                                GitHub
                                            </a>
                                        )}
                                        <a href="mailto:mitulchavda100@gmail.com" className="inline-flex items-center gap-[2vw] md:gap-2 px-[5vw] md:px-5 py-[3vw] md:py-2.5 rounded-full border border-border-primary font-mono text-[2.8vw] md:text-xs uppercase tracking-widest font-bold hover:bg-bg-secondary transition-colors">
                                            <Mail className="w-[4vw] h-[4vw] md:w-4 md:h-4" />
                                            Discuss / Code
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
};