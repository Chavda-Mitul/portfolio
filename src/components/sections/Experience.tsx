import { useState } from 'react';
import { motion } from 'framer-motion';
import { Container } from '../ui/Container';
import { StealthExperienceModal } from '../ui/StealthExperienceModal';
import experienceData from '../../data/experience.json';

const NEOMENTA_TECH_ICONS = [
    {
        name: 'React.js',
        color: '#61DAFB',
        icon: (
            <svg viewBox="-11.5 -10.5 23 23" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <circle cx="0" cy="0" r="2" />
                <g stroke="currentColor" strokeWidth="1" fill="none">
                    <ellipse rx="11" ry="4.5" />
                    <ellipse rx="11" ry="4.5" transform="rotate(60)" />
                    <ellipse rx="11" ry="4.5" transform="rotate(-60)" />
                </g>
            </svg>
        ),
    },
    {
        name: 'React Native',
        color: '#61DAFB',
        icon: (
            <svg viewBox="-11.5 -10.5 23 23" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <circle cx="0" cy="0" r="2" />
                <g stroke="currentColor" strokeWidth="1" fill="none">
                    <ellipse rx="11" ry="4.5" />
                    <ellipse rx="11" ry="4.5" transform="rotate(60)" />
                    <ellipse rx="11" ry="4.5" transform="rotate(-60)" />
                </g>
            </svg>
        ),
    },
    {
        name: 'Node.js',
        color: '#339933',
        icon: (
            <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M11.998 0a1.52 1.52 0 0 0-.76.203L2.698 5.24a1.53 1.53 0 0 0-.76 1.324v10.668c0 .54.283 1.04.76 1.324l8.54 5.036c.24.14.521.204.76.204.252 0 .505-.064.74-.204l8.545-5.036c.463-.282.754-.784.754-1.324V6.564c0-.54-.291-1.042-.755-1.324L12.758.203A1.52 1.52 0 0 0 11.998 0Zm.007 1.652c.06 0 .119.013.174.04l8.546 5.042c.106.064.18.19.18.33v10.634c0 .13-.06.25-.164.318l-8.545 5.036a.35.35 0 0 1-.348 0l-8.54-5.036a.373.373 0 0 1-.164-.318V6.564a.36.36 0 0 1 .18-.33l8.54-5.236a.38.38 0 0 1 .175-.04l.19.27-.19-.27v.01l.15.252Z"/>
            </svg>
        ),
    },
    {
        name: 'Couchbase',
        color: '#EA2328',
        icon: (
            <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M18.074 14.043c-.106-.144-.262-.221-.482-.221H13.48a.65.65 0 0 0-.443.159c-.135.134-.175.327-.122.544.05.207.244.385.443.385h1.369c.576 0 .748.273.341.679l-1.834 1.834c-.26.26-.76.537-1.234.537-.466 0-.967-.277-1.227-.536L9.02 16.07c-.408-.408-.235-.68.34-.68h.73c.19 0 .382-.19.382-.382v-1.234c0-.19-.192-.382-.382-.382H7.003c-.19 0-.382.191-.382.382v2.758l.002.006c0 .066.008.133.025.196.05.207.244.385.443.385h.616c.191 0 .382.191.382.382v1.256c0 .191-.191.383-.382.383h-.616a.926.926 0 0 1-.951-.898v-2.938c0-.322.258-.691.576-.691H9.67c.478 0 .866-.388.866-.866v-1.234c0-.478-.388-.866-.866-.866H6.334c-.321 0-.684.258-.684.576v5.615c0 .31.362.688.684.688h.993c.23 0 .43.195.43.43v1.256c0 .23-.2.43-.43.43H5.525a.52.52 0 0 1-.432-.23c-.107-.143-.262-.221-.481-.221H3.31c-.19 0-.382.192-.382.382v.872c0 .296.334.672.634.672h.594c.19 0 .382.19.382.382v1.256c0 .19-.191.382-.382.382H3.207l-.003-.001c-.29 0-.632-.406-.632-.726v-5.945c0-.29.224-.655.515-.655h2.676c.478 0 .866-.389.866-.866v-1.234c0-.478-.388-.866-.866-.866H3.079c-.39 0-.655.232-.655.515v1.236c0 .283.265.515.655.515h.357c.478 0 .866.388.866.866v.826c0 .478-.388.866-.866.866h-.89c-.377 0-.536.202-.536.463v5.489c0 .32.322.726.622.726h1.302c.478 0 .866-.389.866-.866v-1.234c0-.478-.388-.866-.866-.866h-.357a.52.52 0 0 1-.432-.23c-.107-.143-.262-.221-.482-.221H3.31c-.19 0-.382.192-.382.382v.255c0 .191.192.383.382.383h.356c.478 0 .866.388.866.866v1.234c0 .478-.388.866-.866.866H5.127c-1.347 0-2.443-1.096-2.443-2.443v-6.164c0-1.024.812-1.836 1.836-1.836h3.918c.863 0 1.65.34 2.053 1.09.048.086.105.16.185.235.069.078.157.15.256.216l.001.001c.003.002.005.003.008.005l.023.014c.02.013.04.025.058.036l.009.005c.056.034.115.062.178.084h.001c.283.1.596.11.89.034a.946.946 0 0 1-.245-.44c-.05-.207-.244-.384-.443-.384h-.864c-.478 0-.866-.388-.866-.866v-1.234c0-.478.388-.866.866-.866h5.929c.735 0 1.244.338 1.244.967 0 .66-.532 1.116-1.244 1.116h-1.369c-.478 0-.866.388-.866.866v1.234c0 .478.388.866.866.866h1.344c.583 0 .87.251.87.756 0 .243-.117.44-.313.566z"/>
            </svg>
        ),
    },
];

const INTERNSHIP_TECH_ICONS = [
    {
        name: 'Node.js',
        color: '#339933',
        icon: (
            <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M11.998 0a1.52 1.52 0 0 0-.76.203L2.698 5.24a1.53 1.53 0 0 0-.76 1.324v10.668c0 .54.283 1.04.76 1.324l8.54 5.036c.24.14.521.204.76.204.252 0 .505-.064.74-.204l8.545-5.036c.463-.282.754-.784.754-1.324V6.564c0-.54-.291-1.042-.755-1.324L12.758.203A1.52 1.52 0 0 0 11.998 0Zm.007 1.652c.06 0 .119.013.174.04l8.546 5.042c.106.064.18.19.18.33v10.634c0 .13-.06.25-.164.318l-8.545 5.036a.35.35 0 0 1-.348 0l-8.54-5.036a.373.373 0 0 1-.164-.318V6.564a.36.36 0 0 1 .18-.33l8.54-5.236a.38.38 0 0 1 .175-.04l.19.27-.19-.27v.01l.15.252Z"/>
            </svg>
        ),
    },
    {
        name: 'Next.js',
        color: '#FFFFFF',
        icon: (
            <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M18.665 21.978C16.758 23.255 14.465 24 12 24 5.377 24 0 18.623 0 12S5.377 0 12 0s12 5.377 12 12c0 3.583-1.574 6.801-4.067 9.001L9.219 7.2H7.2v9.596h1.615V9.251l9.85 11.727Zm-2.332-9.533h-1.616V7.2h1.616v5.245Z"/>
            </svg>
        ),
    },
    {
        name: 'AWS',
        color: '#FF9900',
        icon: (
            <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M7.762 12.794c0-.108-.055-.144-.166-.144h-.22v.477h.22c.11 0 .166-.037.166-.145v-.188Zm.752.085c0 .29-.16.447-.455.447h-.373v-.98h.373c.294 0 .455.155.455.447v.086ZM0 12c0 6.628 5.372 12 12 12s12-5.372 12-12S18.628 0 12 0 0 5.372 0 12Zm9.476-1.009v-.508H8.507v1.926h.626v-.76h.364c.258 0 .478-.106.625-.31a.876.876 0 0 0 .162-.523.869.869 0 0 0-.162-.52.733.733 0 0 0-.493-.297h-.12l.001.001h-.032l.014-.001.013-.008Zm-3.22.823.103.639.013.008.013-.008.103-.639a2.17 2.17 0 0 0 .038-.258h-.013v-.51h-.198v.51c.009.085.023.17.039.256l.009-.001-.007-.006ZM8.14 8.977c-.011-.066-.044-.114-.098-.12h-.184v.255h.149c.093-.007.141-.082.133-.135Zm.75 1.546h-.637v.508h.638c.147 0 .282-.067.381-.192.099-.126.152-.3.152-.523s-.05-.396-.147-.52a5.08 5.08 0 0 0-.373-.2l-.168-.08a3.55 3.55 0 0 1-.254-.135.966.966 0 0 1-.169-.13.435.435 0 0 1-.1-.145.445.445 0 0 1-.032-.178c0-.153.073-.287.218-.386.145-.098.316-.147.514-.147.299 0 .522.123.666.369l.425-.237c-.2-.368-.57-.582-1.063-.582a1.49 1.49 0 0 0-.68.155.973.973 0 0 0-.42.422 1.103 1.103 0 0 0-.14.543c0 .213.038.393.115.54.076.148.179.266.31.353.13.087.305.178.526.272.136.058.324.141.438.191a1.27 1.27 0 0 1 .31.196.39.39 0 0 1 .135.304c0 .146-.07.27-.21.371-.14.101-.319.151-.537.151a.87.87 0 0 1-.494-.145.856.856 0 0 1-.34-.43l-.458.225c.173.43.534.645 1.083.645.278 0 .521-.052.728-.156.207-.104.367-.253.48-.446.112-.193.169-.417.169-.672 0-.248-.044-.456-.132-.624a.997.997 0 0 0-.352-.385l-.546-.296a1.108 1.108 0 0 1-.344-.341.608.608 0 0 1-.076-.31c0-.16.074-.293.222-.396.148-.103.334-.155.557-.155.282 0 .478.08.587.24l.38-.328c-.21-.28-.552-.42-1.026-.42-.42 0-.762.131-1.028.393-.269.262-.403.596-.403 1.003 0 .348.126.634.377.857.25.223.597.375 1.04.456l.108.02.007-.005.015.003.015-.003.555.27c.148.072.224.19.224.353Z"/>
            </svg>
        ),
    },
];

export const Experience = () => {
    const [isStealthModalOpen, setIsStealthModalOpen] = useState(false);

    const handleNeomentaClick = () => {
        setIsStealthModalOpen(true);
    };

    const handleNeomentaKeyDown = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            setIsStealthModalOpen(true);
        }
    };

    return (
        <section id="experience" className="inverted bg-bg-primary text-fg-primary py-[16vw] md:py-24 relative">
            <Container>
                <motion.h2
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="font-mono text-[2.5vw] md:text-base uppercase tracking-widest text-fg-secondary mb-[6vw] md:mb-16"
                >
                    <span className="text-fg-primary/30">01 /</span> Experience
                </motion.h2>

                {/* Neomenta Pvt Ltd - Full-time */}
                <motion.article
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-10%' }}
                    transition={{ duration: 0.6 }}
                    onClick={handleNeomentaClick}
                    onKeyDown={handleNeomentaKeyDown}
                    role="button"
                    tabIndex={0}
                    aria-label="Open Neomenta Pvt. Ltd. experience overview"
                    className="group relative border border-border-primary rounded-2xl bg-fg-primary/[0.04] backdrop-blur-sm p-[6vw] md:p-10 mb-[6vw] md:mb-8 overflow-hidden cursor-pointer transition-colors hover:bg-fg-primary/[0.06]"
                >
                    <div className="flex items-start justify-between gap-[4vw] md:gap-6 mb-[6vw] md:mb-8">
                        <div className="flex flex-wrap items-center gap-[2vw] md:gap-3">
                            <span className="inline-flex items-center gap-[2vw] md:gap-2 font-mono text-[2.5vw] md:text-xs uppercase tracking-widest text-fg-secondary px-[3vw] md:px-3 py-[1vw] md:py-1 rounded-full border border-border-primary">
                                <span className="relative flex h-[2vw] w-[2vw] md:h-2 md:w-2">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                                    <span className="relative inline-flex rounded-full h-[2vw] w-[2vw] md:h-2 md:w-2 bg-emerald-500" />
                                </span>
                                Aug 2023 → Present
                            </span>
                            <span className="font-mono text-[2.5vw] md:text-xs uppercase tracking-widest text-fg-secondary">
                                Software Engineer · Neomenta Pvt. Ltd.
                            </span>
                        </div>
                    </div>

                    <h3 className="font-display font-black text-[9vw] md:text-5xl lg:text-6xl leading-[0.9] tracking-tighter uppercase mb-[3vw] md:mb-4">
                        {(experienceData.roles as Array<{company: string}>)[0].company}
                    </h3>
                    <p className="font-mono text-[3vw] md:text-base uppercase tracking-widest text-fg-secondary mb-[6vw] md:mb-8">
                        Full-stack Software Engineering · AI Workflow Builder
                    </p>

                    <p className="text-[4vw] md:text-xl text-fg-secondary leading-relaxed mb-[8vw] md:mb-10 max-w-4xl">
                        {(experienceData.roles as Array<{summary: string}>)[0].summary}
                    </p>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-[3vw] md:gap-4 mb-[6vw] md:mb-8">
                        {NEOMENTA_TECH_ICONS.map((t) => (
                            <div
                                key={t.name}
                                className="p-[4vw] md:p-5 rounded-xl border border-border-primary bg-fg-primary/[0.04] flex flex-col items-center gap-[2vw] md:gap-3"
                            >
                                <div className="w-[8vw] h-[8vw] md:w-10 md:h-10" style={{ color: t.color }}>
                                    {t.icon}
                                </div>
                                <div className="font-mono text-[2.5vw] md:text-xs uppercase tracking-widest text-fg-secondary text-center">
                                    {t.name}
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="flex flex-wrap items-center justify-between gap-[3vw] md:gap-4">
                        <div className="flex flex-wrap gap-[2vw] md:gap-2">
                            {['React', 'TypeScript', 'React Native', 'WebSockets', 'Redis', 'Node.js', 'PostgreSQL'].map((t) => (
                                <span key={t} className="px-[3vw] md:px-3 py-[1vw] md:py-1 rounded-full border border-border-primary text-[2.5vw] md:text-xs font-mono bg-fg-primary/[0.03] text-fg-secondary">
                                    {t}
                                </span>
                            ))}
                        </div>
                        <div className="flex items-center gap-[3vw] md:gap-4">
                            <a href="https://neome.ai" target="_blank" rel="noopener noreferrer" className="font-mono text-[2.5vw] md:text-xs uppercase tracking-widest text-fg-secondary hover:text-fg-primary transition-colors" onClick={(e) => e.stopPropagation()}>
                                neome.ai ↗
                            </a>
                            <span className="font-mono text-[2.5vw] md:text-xs uppercase tracking-widest text-fg-secondary group-hover:text-fg-primary transition-colors">
                                Explore technologies →
                            </span>
                        </div>
                    </div>
                </motion.article>

                {/* TatvaSoft Pvt Ltd - Internship */}
                <motion.article
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-10%' }}
                    transition={{ duration: 0.6 }}
                    className="group relative border border-border-primary rounded-2xl bg-fg-primary/[0.04] backdrop-blur-sm p-[6vw] md:p-10 overflow-hidden"
                >
                    <div className="flex items-start justify-between gap-[4vw] md:gap-6 mb-[6vw] md:mb-8">
                        <div className="flex flex-wrap items-center gap-[2vw] md:gap-3">
                            <span className="font-mono text-[2.5vw] md:text-xs uppercase tracking-widest text-fg-secondary px-[3vw] md:px-3 py-[1vw] md:py-1 rounded-full border border-border-primary">
                                Jan → Jun 2023
                            </span>
                            <span className="font-mono text-[2.5vw] md:text-xs uppercase tracking-widest text-fg-secondary">
                                Frontend Developer Intern · TatvaSoft Pvt. Ltd.
                            </span>
                        </div>
                    </div>

                    <h3 className="font-display font-black text-[9vw] md:text-5xl lg:text-6xl leading-[0.9] tracking-tighter uppercase mb-[3vw] md:mb-4">
                        TatvaSoft
                    </h3>
                    <p className="font-mono text-[3vw] md:text-base uppercase tracking-widest text-fg-secondary mb-[6vw] md:mb-8">
                        Frontend Internship
                    </p>

                    <p className="text-[4vw] md:text-xl text-fg-secondary leading-relaxed mb-[8vw] md:mb-10 max-w-4xl">
                        {(experienceData.roles as Array<{summary: string}>)[1].summary}
                    </p>

                    <div className="grid grid-cols-2 md:grid-cols-3 gap-[3vw] md:gap-4 mb-[6vw] md:mb-8">
                        {INTERNSHIP_TECH_ICONS.map((t) => (
                            <div
                                key={t.name}
                                className="p-[4vw] md:p-5 rounded-xl border border-border-primary bg-fg-primary/[0.04] flex flex-col items-center gap-[2vw] md:gap-3"
                            >
                                <div className="w-[8vw] h-[8vw] md:w-10 md:h-10" style={{ color: t.color }}>
                                    {t.icon}
                                </div>
                                <div className="font-mono text-[2.5vw] md:text-xs uppercase tracking-widest text-fg-secondary text-center">
                                    {t.name}
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="flex flex-wrap gap-[2vw] md:gap-2">
                        {['Node.js', 'Next.js', 'AWS'].map((t) => (
                            <span key={t} className="px-[3vw] md:px-3 py-[1vw] md:py-1 rounded-full border border-border-primary text-[2.5vw] md:text-xs font-mono bg-fg-primary/[0.03] text-fg-secondary">
                                {t}
                            </span>
                        ))}
                    </div>
                </motion.article>

                <StealthExperienceModal
                    isOpen={isStealthModalOpen}
                    onClose={() => setIsStealthModalOpen(false)}
                />
            </Container>
        </section>
    );
};