import Link from "next/link";
import { type ComponentPropsWithoutRef } from "react";

type ButtonVariant = "primary" | "secondary" | "ghost" | "outline" | "inverted";
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
        "bg-brand-accent text-white hover:bg-brand-accent-hover shadow-sm hover:shadow-lg hover:shadow-brand-accent/20",
    secondary:
        "bg-[#1a1a1a] text-white border border-white/10 hover:border-brand-accent/30 hover:bg-[#222]",
    ghost:
        "text-white/70 hover:text-white hover:bg-white/5",
    outline:
        "border border-white/20 text-white hover:border-brand-accent hover:text-brand-accent",
    inverted:
        "bg-white text-[#FF5C00] hover:bg-white/90 shadow-sm",
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
    const baseClasses = `inline-flex items-center justify-center font-semibold rounded-lg transition-all duration-200 focus-visible:ring-2 focus-visible:ring-brand-accent focus-visible:ring-offset-2 focus-visible:ring-offset-black ${variantStyles[variant]} ${sizeStyles[size]} ${className}`;

    if ("href" in props && props.href) {
        const { href, ...linkProps } = props as ButtonAsLink;
        return <Link href={href} className={baseClasses} {...linkProps} />;
    }

    return <button className={baseClasses} {...(props as ButtonAsButton)} />;
}
