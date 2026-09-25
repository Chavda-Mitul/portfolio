import { useState } from 'react';

interface CopyButtonProps {
    contentId: string;
    className?: string;
}

export const CopyButton = ({ contentId, className = '' }: CopyButtonProps) => {
    const [copied, setCopied] = useState(false);

    const handleCopy = async () => {
        const el = document.getElementById(contentId);
        if (!el) return;
        const text = el.textContent || '';
        try {
            await navigator.clipboard.writeText(text);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        } catch {
            // Fallback
        }
    };

    return (
        <button onClick={handleCopy} className={`font-mono text-[2.5vw] md:text-xs uppercase tracking-widest text-fg-secondary hover:text-fg-primary transition-colors ${className}`}>
            {copied ? 'Copied!' : 'Copy'}
        </button>
    );
};