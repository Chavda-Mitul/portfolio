import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { MagneticButton } from './ui/MagneticButton';

export const CaseStudy = ({
    title,
    category,
    description,
    repoUrl,
    liveUrl,
    index
}: {
    title: string;
    category: string;
    description: string;
    repoUrl?: string;
    liveUrl?: string;
    index: number;
}) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-10%' }}
            transition={{ duration: 0.8, delay: index * 0.1 }}
            className="w-full py-[4vw] md:py-16 border-t border-border-primary"
        >
            <div className="w-full max-w-4xl">
                <motion.span
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: '-20%' }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="font-mono text-[2.5vw] md:text-base text-fg-secondary uppercase tracking-widest mb-[3vw] md:mb-4 block"
                >
                    0{index + 1} // {category}
                </motion.span>
                <motion.h2
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: '-20%' }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="font-display font-black text-[8vw] md:text-6xl lg:text-7xl mb-[4vw] md:mb-6 uppercase leading-[0.95] md:leading-[0.9]"
                >
                    {title}
                </motion.h2>
                <motion.p
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: '-20%' }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="text-[4vw] md:text-xl text-fg-secondary leading-relaxed mb-[6vw] md:mb-8 max-w-[90%] md:max-w-lg"
                >
                    {description}
                </motion.p>

                <div className="flex flex-wrap gap-[4vw] md:gap-3">
                    {liveUrl && (
                        <MagneticButton>
                            <a href={liveUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-[2vw] md:gap-2 px-[6vw] md:px-6 py-[3vw] md:py-3.5 bg-fg-primary text-bg-primary font-bold font-mono text-[2.5vw] md:text-sm uppercase hover:scale-105 transition-transform">
                                Live_Demo <ArrowUpRight className="w-[4vw] h-[4vw] md:w-4 md:h-4" />
                            </a>
                        </MagneticButton>
                    )}
                    {repoUrl && (
                        <MagneticButton>
                            <a href={repoUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-[2vw] md:gap-2 px-[6vw] md:px-6 py-[3vw] md:py-3.5 border border-border-primary text-fg-primary font-bold font-mono text-[2.5vw] md:text-sm uppercase hover:scale-105 transition-transform rounded-none">
                                GitHub <ArrowUpRight className="w-[4vw] h-[4vw] md:w-4 md:h-4" />
                            </a>
                        </MagneticButton>
                    )}
                </div>
                <p className="font-mono text-[2.8vw] md:text-sm text-fg-secondary mt-[4vw] md:mt-5">
                    Want to see the code or discuss?{' '}
                    <a href="mailto:mitulchavda100@gmail.com" className="text-fg-primary underline underline-offset-2 hover:opacity-70 transition-opacity">
                        Drop me a mail
                    </a>
                </p>
            </div>
        </motion.div>
    );
};