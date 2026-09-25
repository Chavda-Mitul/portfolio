import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Users, Eye, Bot } from 'lucide-react';

interface ViewerBadgeProps {
    theme?: 'light' | 'dark';
}

type TrafficStats = {
    totalViews: number;
    uniqueVisitors: number;
    activeNow: number;
};

const formatCounterValue = (value: number) => value.toLocaleString('en-US');

export const ViewerBadge = ({ theme = 'dark' }: ViewerBadgeProps) => {
    const [displayStats] = useState<TrafficStats>({ totalViews: 634, uniqueVisitors: 312, activeNow: 3 });
    const [isOpen, setIsOpen] = useState(false);
    const [overInverted, setOverInverted] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null);

    const INVERTED_SECTION_IDS = ['experience'];
    const baseIsLight = theme === 'light';
    const isOverLightBg = baseIsLight !== overInverted;

    useEffect(() => {
        let rafId: number | null = null;
        const check = () => {
            rafId = null;
            if (!containerRef.current) return;
            const rect = containerRef.current.getBoundingClientRect();
            const centerY = rect.top + rect.height / 2;
            const overlaps = INVERTED_SECTION_IDS.some(id => {
                const el = document.getElementById(id);
                if (!el) return false;
                const r = el.getBoundingClientRect();
                return r.top <= centerY && r.bottom >= centerY;
            });
            setOverInverted(overlaps);
        };
        const onScroll = () => {
            if (rafId === null) rafId = requestAnimationFrame(check);
        };
        check();
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => {
            window.removeEventListener('scroll', onScroll);
            if (rafId !== null) cancelAnimationFrame(rafId);
        };
    }, []);

    return (
        <div ref={containerRef} className="fixed top-[4vw] left-[4vw] md:top-[2vw] md:left-[2.5vw] z-[70] font-mono select-none">
            <motion.button
                onClick={() => setIsOpen(!isOpen)}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className={`flex items-center gap-[2.5vw] md:gap-[0.9vw] px-[5vw] md:px-[1.8vw] py-[2.5vw] md:py-[1vw] rounded-full border backdrop-blur-2xl backdrop-saturate-150 transition-all duration-300 pointer-events-auto cursor-pointer
                    ${isOverLightBg
                        ? 'bg-white/70 border-black/10 text-black shadow-[0_8px_32px_rgba(0,0,0,0.08),inset_0_1px_0_0_rgba(255,255,255,0.9)]'
                        : 'bg-zinc-900/60 border-white/15 text-white shadow-[0_8px_32px_rgba(0,0,0,0.4),inset_0_1px_0_0_rgba(255,255,255,0.12)]'}`}
            >
                <Bot className={`w-[3.5vw] h-[3.5vw] md:w-[14px] md:h-[14px] ${isOverLightBg ? 'text-black' : 'text-white'}`} />
                <span className={`text-[2.2vw] md:text-xs uppercase tracking-[0.15em] font-black leading-tight ${isOverLightBg ? 'text-black' : 'text-white'}`}>
                    {formatCounterValue(displayStats.totalViews)} <span className="opacity-40">Views</span>
                </span>
            </motion.button>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 15, scale: 0.95, filter: 'blur(10px)' }}
                        animate={{ opacity: 1, y: 0, scale: 1, filter: 'blur(0px)' }}
                        exit={{ opacity: 0, y: 10, scale: 0.95, filter: 'blur(10px)' }}
                        transition={{ type: 'spring', stiffness: 300, damping: 25 }}
                        className={`absolute top-full left-0 mt-[4vw] md:mt-[1vw] w-[70vw] md:w-[22vw] max-w-[calc(100vw-2rem)] backdrop-blur-xl border rounded-[2rem] shadow-lg overflow-hidden z-[71]
                            ${isOverLightBg ? 'bg-white/70 text-black border-black/10' : 'bg-black/70 text-white border-white/10'}`}
                    >
                        <div className="p-[4vw] md:p-[1.5vw]">
                            <div className={`px-[2vw] md:px-[0.5vw] pb-[4vw] md:pb-[1vw] border-b mb-[4vw] md:mb-[1vw] flex items-center justify-between ${isOverLightBg ? 'border-black/5' : 'border-white/5'}`}>
                                <span className={`text-[2.25vw] md:text-[0.7vw] uppercase tracking-[0.3em] font-black opacity-40 ${isOverLightBg ? 'text-black' : 'text-white'}`}>
                                    Traffic Insights
                                </span>
                            </div>
                            <div className="flex flex-col gap-[2vw] md:gap-[0.5vw]">
                                {[
                                    { name: 'Total Views', value: formatCounterValue(displayStats.totalViews), icon: <Eye size={14} /> },
                                    { name: 'Unique Visitors', value: formatCounterValue(displayStats.uniqueVisitors), icon: <Users size={14} /> },
                                ].map((stat, i) => (
                                    <div key={i} className="flex items-center justify-between p-[3vw] md:p-[1vw] rounded-2xl">
                                        <div className="flex items-center gap-[4vw] md:gap-[1vw]">
                                            <div className={`p-[2vw] md:p-[0.75vw] rounded-xl ${isOverLightBg ? 'bg-black/5 text-black' : 'bg-white/5 text-white'}`}>
                                                {stat.icon}
                                            </div>
                                            <span className={`text-[2.25vw] md:text-[0.7vw] uppercase tracking-wider font-bold opacity-40 ${isOverLightBg ? 'text-black' : 'text-white'}`}>
                                                {stat.name}
                                            </span>
                                        </div>
                                        <span className={`text-[2.5vw] md:text-[0.9vw] font-black ${isOverLightBg ? 'text-black' : 'text-white'}`}>
                                            {stat.value}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};