import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

interface PreloaderProps {
    onComplete: () => void;
}

export const Preloader = ({ onComplete }: PreloaderProps) => {
    const [phase, setPhase] = useState<'text' | 'exit'>('text');

    useEffect(() => {
        const timer = setTimeout(() => setPhase('exit'), 1000);
        const cleanup = setTimeout(() => onComplete(), 2500);
        return () => { clearTimeout(timer); clearTimeout(cleanup); };
    }, [onComplete]);

    return (
        <div className="fixed inset-0 z-[100] flex flex-col pointer-events-none">
            <motion.div
                initial={{ y: 0 }}
                animate={{ y: phase === 'exit' ? "-100%" : 0 }}
                transition={{ duration: 1.5, ease: [0.87, 0, 0.13, 1] }}
                className="h-[50vh] w-full bg-fg-primary relative z-20 flex items-end justify-center overflow-hidden border-b border-bg-primary/10"
            >
                <div className="overflow-hidden mb-[-0.5vw] md:mb-[-1vw] pb-2 px-4">
                    <motion.h1
                        initial={{ y: "100%" }}
                        animate={{ y: phase === 'exit' ? "50%" : 0 }}
                        transition={{ duration: 1.5, ease: [0.87, 0, 0.13, 1] }}
                        className="text-[15vw] leading-none font-black tracking-tighter text-bg-primary font-display translate-y-[50%]"
                    >
                        MITUL
                    </motion.h1>
                </div>
            </motion.div>

            <motion.div
                initial={{ y: 0 }}
                animate={{ y: phase === 'exit' ? "100%" : 0 }}
                transition={{ duration: 1.5, ease: [0.87, 0, 0.13, 1] }}
                className="h-[50vh] w-full bg-black relative z-20 flex items-start justify-center overflow-hidden border-t border-white/10"
            >
                <div className="overflow-hidden mt-[-0.5vw] md:mt-[-1vw] pt-2 px-4">
                    <motion.h1
                        initial={{ y: "-100%" }}
                        animate={{ y: phase === 'exit' ? "-50%" : 0 }}
                        transition={{ duration: 1.5, ease: [0.87, 0, 0.13, 1] }}
                        className="text-[15vw] leading-none font-black tracking-tighter text-white font-display -translate-y-[50%]"
                    >
                        CHAVDA
                    </motion.h1>
                </div>
            </motion.div>
        </div>
    );
};