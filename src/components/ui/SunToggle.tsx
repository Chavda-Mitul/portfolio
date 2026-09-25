import { Sun, Moon } from 'lucide-react';
import { motion } from 'framer-motion';

interface SunToggleProps {
    theme: 'light' | 'dark';
    onToggle: () => void;
}

export const SunToggle = ({ theme, onToggle }: SunToggleProps) => (
    <motion.button
        onClick={onToggle}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="fixed bottom-[4vw] right-[4vw] md:bottom-6 md:right-6 z-[70] p-[3vw] md:p-3 rounded-full border border-border-primary bg-bg-primary/60 backdrop-blur-md shadow-lg"
        aria-label="Toggle theme"
    >
        {theme === 'dark' ? <Sun className="w-[5vw] h-[5vw] md:w-5 md:h-5" /> : <Moon className="w-[5vw] h-[5vw] md:w-5 md:h-5" />}
    </motion.button>
);