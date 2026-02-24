import Link from "next/link";
import { type ComponentPropsWithoutRef } from "react";

type ButtonVariant = "primary" | "secondary" | "ghost" | "outline";
type ButtonSize = "sm" | "md" | "lg";

type ButtonBaseProps = {
    variant?: ButtonVariant;
    size?: ButtonSize;
    className?: string;
};

type ButtonAsButton = ButtonBaseProps &
    Omit<ComponentPropsWithoutRef<"button">, keyof ButtonBaseProps> & {
        href?: never;
    };

type ButtonAsLink = ButtonBaseProps &
    Omit<ComponentPropsWithoutRef<typeof Link>, keyof ButtonBaseProps> & {
        href: string;
    };

type ButtonProps = ButtonAsButton | ButtonAsLink;

const variantStyles: Record<ButtonVariant, string> = {
    primary:
        "bg-brand-accent text-white hover:bg-brand-accent-hover shadow-sm hover:shadow-md",
    secondary:
        "bg-brand-surface-alt text-brand-primary border border-brand-border hover:bg-brand-surface hover:border-brand-accent/30",
    ghost:
        "text-[var(--color-text-secondary)] hover:text-brand-primary hover:bg-brand-surface-alt",
    outline:
        "border border-brand-border text-brand-primary hover:border-brand-accent hover:text-brand-accent",
};

const sizeStyles: Record<ButtonSize, string> = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-2.5 text-sm",
    lg: "px-8 py-3.5 text-base",
};

export default function Button({
    variant = "primary",
    size = "md",
    className = "",
    ...props
}: ButtonProps) {
    const baseClasses = `inline-flex items-center justify-center font-semibold rounded-lg transition-all duration-200 focus-visible:ring-2 focus-visible:ring-brand-accent focus-visible:ring-offset-2 ${variantStyles[variant]} ${sizeStyles[size]} ${className}`;

    if ("href" in props && props.href) {
        const { href, ...linkProps } = props as ButtonAsLink;
        return <Link href={href} className={baseClasses} {...linkProps} />;
    }

    return <button className={baseClasses} {...(props as ButtonAsButton)} />;
}
