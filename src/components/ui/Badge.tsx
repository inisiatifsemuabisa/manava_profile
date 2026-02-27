import { type ReactNode } from "react";

type BadgeProps = {
    children: ReactNode;
    variant?: "default" | "accent" | "muted";
    className?: string;
};

export default function Badge({ children, variant = "default", className = "" }: BadgeProps) {
    const variants = {
        default: "bg-white/5 text-white/80 border border-white/10",
        accent: "bg-brand-accent/10 text-brand-accent",
        muted: "bg-white/5 text-white/40",
    };

    return (
        <span
            className={`inline-flex items-center px-3 py-1 text-xs font-medium rounded-full ${variants[variant]} ${className}`}
        >
            {children}
        </span>
    );
}
