import { motion } from 'framer-motion';

interface ResumeButtonProps {
    onClick?: () => void;
}

export const ResumeButton = ({ onClick }: ResumeButtonProps) => (
    <motion.button
        onClick={onClick}
        whileHover={{ scale: 1.05, y: -2 }}
        whileTap={{ scale: 0.95 }}
        className="flex items-center gap-2 px-6 py-3 rounded-full bg-fg-primary text-bg-primary font-mono text-sm uppercase tracking-widest font-bold hover:opacity-90 transition-opacity"
    >
        Resume
    </motion.button>
);