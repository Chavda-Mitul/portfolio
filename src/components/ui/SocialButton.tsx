import { motion } from 'framer-motion';
import type { LucideIcon } from 'lucide-react';

interface SocialButtonProps {
    href: string;
    icon: LucideIcon;
    label: string;
}

export const SocialButton = ({ href, icon: Icon, label }: SocialButtonProps) => (
    <motion.a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={label}
        whileHover={{ scale: 1.1, y: -2 }}
        whileTap={{ scale: 0.95 }}
        className="flex items-center justify-center w-12 h-12 md:w-14 md:h-14 rounded-full border border-border-primary bg-bg-secondary/40 hover:bg-fg-primary hover:text-bg-primary transition-colors duration-300"
    >
        <Icon className="w-5 h-5 md:w-6 md:h-6" />
    </motion.a>
);