import { type ReactNode } from "react";

type CardProps = {
    children: ReactNode;
    className?: string;
    hover?: boolean;
};

export default function Card({ children, className = "", hover = true }: CardProps) {
    return (
        <div
            className={`rounded-2xl border border-white/10 bg-[#121212] p-6 lg:p-8 transition-all duration-300 ${hover ? "hover:border-brand-accent/30 hover:shadow-lg hover:shadow-brand-accent/5 hover:-translate-y-1" : ""
                } ${className}`}
        >
            {children}
        </div>
    );
}
