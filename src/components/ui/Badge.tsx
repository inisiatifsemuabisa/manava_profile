import { type ReactNode } from "react";

type BadgeProps = {
    children: ReactNode;
    variant?: "default" | "accent" | "muted";
    className?: string;
};

export default function Badge({ children, variant = "default", className = "" }: BadgeProps) {
    const variants = {
        default: "bg-brand-surface-alt text-brand-primary border border-brand-border",
        accent: "bg-brand-accent/10 text-brand-accent",
        muted: "bg-[var(--color-surface-alt)] text-[var(--color-text-muted)]",
    };

    return (
        <span
            className={`inline-flex items-center px-3 py-1 text-xs font-medium rounded-full ${variants[variant]} ${className}`}
        >
            {children}
        </span>
    );
}
