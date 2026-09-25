import { motion, AnimatePresence } from 'framer-motion';
import { useEffect } from 'react';
import { X } from 'lucide-react';

interface ResumeModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export const ResumeModal = ({ isOpen, onClose }: ResumeModalProps) => {
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
                        className="relative w-full max-w-[600px] bg-bg-primary border border-border-primary rounded-2xl shadow-2xl p-[6vw] md:p-10"
                    >
                        <button onClick={onClose} className="absolute top-[3vw] md:top-4 right-[3vw] md:right-4 p-[2vw] md:p-2 rounded-full border border-border-primary hover:bg-bg-secondary transition-colors">
                            <X className="w-[4vw] h-[4vw] md:w-4 md:h-4" />
                        </button>
                        <h2 className="font-display font-black text-[8vw] md:text-4xl uppercase mb-[4vw] md:mb-6">
                            Resume
                        </h2>
                        <p className="text-[3.5vw] md:text-base text-fg-secondary leading-relaxed mb-[4vw] md:mb-6">
                            Here's my professional experience and background. Feel free to download or reach out for more details.
                        </p>
                        <div className="flex flex-wrap gap-[3vw] md:gap-3">
                            <a href="/resume.pdf" target="_blank" className="inline-flex items-center px-[5vw] md:px-6 py-[3vw] md:py-3 rounded-full bg-fg-primary text-bg-primary font-mono text-[2.5vw] md:text-xs uppercase tracking-widest font-bold hover:opacity-90 transition-opacity">
                                Download PDF
                            </a>
                            <a href="mailto:mitulchavda100@gmail.com" className="inline-flex items-center px-[5vw] md:px-6 py-[3vw] md:py-3 rounded-full border border-border-primary font-mono text-[2.5vw] md:text-xs uppercase tracking-widest font-bold hover:bg-bg-secondary transition-colors">
                                Contact Me
                            </a>
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
};