import { type ReactNode } from "react";

type CardProps = {
    children: ReactNode;
    className?: string;
    hover?: boolean;
};

export default function Card({ children, className = "", hover = true }: CardProps) {
    return (
        <div
            className={`rounded-2xl border border-brand-border bg-white p-6 lg:p-8 transition-all duration-300 ${hover ? "hover:border-brand-accent/30 hover:shadow-lg hover:-translate-y-1" : ""
                } ${className}`}
        >
            {children}
        </div>
    );
}
