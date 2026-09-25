import { motion } from 'framer-motion';
import { Container } from '../ui/Container';

const SKILL_CATEGORIES = [
    {
        title: 'Frontend',
        skills: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
    },
    {
        title: 'Backend',
        skills: ['Node.js', 'Fastify', 'Express', 'PostgreSQL', 'Redis', 'MongoDB'],
    },
    {
        title: 'Mobile',
        skills: ['React Native', 'Expo'],
    },
    {
        title: 'DevOps & Cloud',
        skills: ['Docker', 'AWS', 'Vercel', 'GitHub Actions'],
    },
];

export const Skills = () => (
    <section id="skills" className="py-[16vw] md:py-24 bg-bg-primary">
        <Container>
            <motion.h2
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="font-mono text-[2.5vw] md:text-base uppercase tracking-widest text-fg-secondary mb-[6vw] md:mb-16"
            >
                <span className="text-fg-primary/30">03 /</span> Skills
            </motion.h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-[6vw] md:gap-8">
                {SKILL_CATEGORIES.map((cat, i) => (
                    <motion.div
                        key={cat.title}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: i * 0.1 }}
                    >
                        <h3 className="font-mono text-[3vw] md:text-sm uppercase tracking-widest text-fg-primary mb-[3vw] md:mb-4">
                            {cat.title}
                        </h3>
                        <div className="flex flex-wrap gap-[2vw] md:gap-2">
                            {cat.skills.map((s) => (
                                <span key={s} className="px-[3vw] md:px-3 py-[1vw] md:py-1 rounded-full border border-border-primary text-[2.5vw] md:text-xs font-mono text-fg-secondary">
                                    {s}
                                </span>
                            ))}
                        </div>
                    </motion.div>
                ))}
            </div>
        </Container>
    </section>
);