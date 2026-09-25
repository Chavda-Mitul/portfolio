import { Container } from '../ui/Container';

export const Footer = () => (
    <footer className="py-[8vw] md:py-16 border-t border-border-primary bg-bg-primary">
        <Container>
            <div className="flex flex-col md:flex-row items-center justify-between gap-[4vw] md:gap-8">
                <p className="font-mono text-[2.5vw] md:text-xs uppercase tracking-widest text-fg-secondary">
                    &copy; {new Date().getFullYear()} Mitul Chavda
                </p>
                <div className="flex gap-[4vw] md:gap-8">
                    <a href="https://github.com/chavda-mitul" target="_blank" rel="noopener noreferrer" className="font-mono text-[2.5vw] md:text-xs uppercase tracking-widest text-fg-secondary hover:text-fg-primary transition-colors">
                        GitHub
                    </a>
                    <a href="https://x.com/Mitul_dev" target="_blank" rel="noopener noreferrer" className="font-mono text-[2.5vw] md:text-xs uppercase tracking-widest text-fg-secondary hover:text-fg-primary transition-colors">
                        X
                    </a>
                    <a href="https://www.linkedin.com/in/mitul-chavda-a37650213/" target="_blank" rel="noopener noreferrer" className="font-mono text-[2.5vw] md:text-xs uppercase tracking-widest text-fg-secondary hover:text-fg-primary transition-colors">
                        LinkedIn
                    </a>
                </div>
            </div>
        </Container>
    </footer>
);