import { motion } from 'framer-motion';
import { Github, Twitter, Linkedin, Calendar } from 'lucide-react';
import { Container } from '../ui/Container';
import { SocialButton } from '../ui/SocialButton';
import { ResumeButton } from '../ui/ResumeButton';
import { SideBranding } from '../ui/SideBranding';

interface HeroProps {
    theme?: 'light' | 'dark';
    onResumeClick?: () => void;
}

export const Hero = ({ theme = 'dark', onResumeClick }: HeroProps) => {
    return (
        <section id="hero" className="min-h-[100dvh] lg:min-h-[90vh] relative flex flex-col pb-0 overflow-visible">
            {/* Split Background — glassy panels */}
            <div className="absolute inset-0 z-0 flex flex-col pointer-events-none">
                {/* TOP half — frosted glass panel */}
                <div
                    className={`relative h-[58%] lg:h-[44%] w-full overflow-hidden ${
                        theme === 'dark' ? 'bg-white' : 'bg-black'
                    }`}
                >
                    <div
                        className={`absolute inset-0 ${
                            theme === 'dark'
                                ? 'bg-gradient-to-b from-white via-white/95 to-zinc-100'
                                : 'bg-gradient-to-b from-black via-black/95 to-zinc-950'
                        }`}
                    />
                    <div
                        className={`absolute inset-x-0 top-0 h-1/3 ${
                            theme === 'dark'
                                ? 'bg-gradient-to-b from-white via-white/40 to-transparent'
                                : 'bg-gradient-to-b from-zinc-700/60 via-zinc-800/30 to-transparent'
                        }`}
                    />
                    <div
                        className={`absolute inset-0 ${
                            theme === 'dark'
                                ? 'bg-gradient-to-tr from-transparent via-white/15 to-transparent'
                                : 'bg-gradient-to-tr from-transparent via-zinc-700/20 to-transparent'
                        }`}
                    />
                    <div
                        className={`absolute inset-x-0 bottom-0 h-12 ${
                            theme === 'dark'
                                ? 'bg-gradient-to-t from-zinc-200/50 to-transparent'
                                : 'bg-gradient-to-t from-zinc-900/40 to-transparent'
                        }`}
                    />
                </div>

                {/* BOTTOM half — dark glass panel */}
                <div className="relative h-[42%] lg:h-[56%] w-full overflow-hidden bg-bg-primary">
                    <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-fg-primary/30 to-transparent" />
                    <div className="absolute inset-x-0 top-0 h-1/4 bg-gradient-to-b from-fg-primary/[0.05] to-transparent" />
                    <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_0%,rgba(255,255,255,0.06),transparent_70%)]" />
                </div>
            </div>

            <SideBranding />

            <Container className="relative z-10 min-h-[100dvh] lg:h-full flex flex-col pt-4 lg:pt-8 pb-24 lg:pb-10 overflow-visible">
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                    className="flex-1 grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-8 items-end lg:items-start overflow-visible"
                >
                    {/* Left Column: Text */}
                    <div className="order-2 lg:order-1 lg:row-start-1 lg:col-start-1 lg:col-span-7 relative z-30 pt-24 md:pt-24 h-full flex flex-col pointer-events-none">
                        <div className="-translate-y-[25%] lg:translate-y-0 -mb-24 lg:-mb-0">
                            <h1 className={`font-display font-black text-[13vw] md:text-[11vw] lg:text-9xl xl:text-[10rem] leading-[0.8] lg:leading-[0.85] tracking-tighter uppercase mb-4 lg:mb-6 lg:mix-blend-difference ${theme === 'light' ? 'text-white' : 'text-black'}`}>
                                <motion.span
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.8, delay: 0.2 }}
                                    className="block"
                                >
                                    MITUL
                                </motion.span>
                                <motion.span
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.8, delay: 0.4 }}
                                    className="block"
                                >
                                    CHAVDA
                                </motion.span>
                            </h1>
                        </div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.8 }}
                            className="w-full mt-auto mb-2 lg:mb-28 lg:mt-12 pointer-events-auto"
                        >
                            <p className="hero-intro-text max-w-2xl text-sm md:text-xl lg:text-3xl text-fg-secondary leading-relaxed font-medium mb-4 lg:mb-10">
                                <strong className="text-fg-primary font-bold">Full-Stack Software Engineer</strong> specializing in <strong className="text-fg-primary">React</strong>, <strong className="text-fg-primary">TypeScript</strong>, and <strong className="text-fg-primary">Real-Time Systems</strong> — currently at <strong className="text-fg-primary">Neomenta Pvt. Ltd.</strong>
                                , building products for{' '}
                                <strong className="text-fg-primary font-bold">
                                    2,000+ daily users
                                </strong>.
                            </p>

                            <div className="flex flex-wrap items-center gap-3 md:gap-4 relative z-50">
                                <SocialButton href="https://github.com/chavda-mitul" icon={Github} label="GitHub Profile" />
                                <SocialButton href="https://x.com/Mitul_dev" icon={Twitter} label="Twitter Profile" />
                                <SocialButton href="https://www.linkedin.com/in/mitul-chavda-a37650213/" icon={Linkedin} label="LinkedIn Profile" />
                                <SocialButton href="mailto:mitulchavda100@gmail.com" icon={Calendar} label="Email Me" />
                                <ResumeButton onClick={onResumeClick} />
                            </div>
                        </motion.div>
                    </div>
                </motion.div>
            </Container>
        </section>
    );
};