import { motion, AnimatePresence } from 'framer-motion';
import { useEffect } from 'react';

interface StealthExperienceModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export const StealthExperienceModal = ({ isOpen, onClose }: StealthExperienceModalProps) => {
    useEffect(() => {
        const onKey = (e: KeyboardEvent) => {
            if (e.key === 'Escape') onClose();
        };
        if (isOpen) {
            document.body.style.overflow = 'hidden';
            window.addEventListener('keydown', onKey);
        }
        return () => {
            document.body.style.overflow = 'unset';
            window.removeEventListener('keydown', onKey);
        };
    }, [isOpen, onClose]);

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
                        transition={{ duration: 0.3 }}
                        className="relative w-full max-w-[800px] bg-bg-primary border border-border-primary rounded-2xl shadow-2xl max-h-[80vh] overflow-y-auto p-[6vw] md:p-10"
                    >
                        <h2 className="font-display font-black text-[8vw] md:text-4xl uppercase mb-[4vw] md:mb-6">
                            Neomenta Pvt. Ltd.
                        </h2>
                        <p className="text-[4vw] md:text-lg text-fg-secondary leading-relaxed mb-[4vw] md:mb-6">
                            Full-stack Software Engineering · AI Workflow Builder
                        </p>
                        <div className="space-y-[4vw] md:space-y-4">
                            <p className="text-[3.5vw] md:text-base text-fg-secondary leading-relaxed">
                                At Neomenta, I architect scalable full-stack systems serving 2,000+ daily users. I build visual query builders, automated field mapping engines, and real-time analytics infrastructure using WebSockets, Redis, and React.
                            </p>
                            <p className="text-[3.5vw] md:text-base text-fg-secondary leading-relaxed">
                                I work across the full stack: from React/Next.js interfaces to Node.js/Fastify APIs to PostgreSQL/Redis data layers, focusing on performance, reliability, and clean architecture.
                            </p>
                        </div>
                        <button onClick={onClose} className="mt-[6vw] md:mt-8 px-[5vw] md:px-6 py-[3vw] md:py-3 rounded-full bg-fg-primary text-bg-primary font-mono text-[2.5vw] md:text-xs uppercase tracking-widest font-bold">
                            Close
                        </button>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
};