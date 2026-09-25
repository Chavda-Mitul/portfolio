export const MagneticButton = ({ children, className = '' }: { children: React.ReactNode; className?: string }) => (
    <div className={`inline-block ${className}`}>
        {children}
    </div>
);