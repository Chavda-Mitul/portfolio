export interface DetailSection {
    title: string;
    body?: string;
    bullets?: string[];
}

export const DetailSections = ({ sections }: { sections: DetailSection[] }) => (
    <div className="space-y-[6vw] md:space-y-8">
        {sections.map((section, i) => (
            <div key={i}>
                <h3 className="font-mono text-[3vw] md:text-sm uppercase tracking-widest text-fg-primary mb-[2vw] md:mb-3">
                    {section.title}
                </h3>
                {section.body && (
                    <p className="text-[3.5vw] md:text-base text-fg-secondary leading-relaxed mb-[2vw] md:mb-4">
                        {section.body}
                    </p>
                )}
                {section.bullets && (
                    <ul className="space-y-[1.5vw] md:space-y-2">
                        {section.bullets.map((bullet, j) => (
                            <li key={j} className="relative pl-[4vw] md:pl-5 text-[3vw] md:text-sm text-fg-secondary leading-relaxed before:content-[''] before:absolute before:left-[1vw] md:before:left-1.5 before:top-[2vw] md:before:top-2 before:w-[1.5vw] md:before:w-1.5 before:h-px before:bg-fg-primary/40">
                                {bullet}
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        ))}
    </div>
);