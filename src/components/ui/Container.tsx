interface ContainerProps {
    children: React.ReactNode;
    className?: string;
}

export const Container = ({ children, className = '' }: ContainerProps) => (
    <div className={`w-full max-w-[1440px] mx-auto px-[5vw] md:px-12 ${className}`}>
        {children}
    </div>
);