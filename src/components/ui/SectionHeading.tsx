type SectionHeadingProps = {
    label?: string;
    title: string;
    description?: string;
    align?: "left" | "center";
    dark?: boolean;
    className?: string;
};

export default function SectionHeading({
    label,
    title,
    description,
    align = "center",
    dark = false,
    className = "",
}: SectionHeadingProps) {
    return (
        <div
            className={`mb-12 lg:mb-16 ${align === "center" ? "text-center mx-auto max-w-2xl" : ""
                } ${className}`}
        >
            {label && (
                <p
                    className={`text-sm font-semibold uppercase tracking-widest mb-3 ${dark ? "text-brand-accent-light" : "text-brand-accent"
                        }`}
                >
                    {label}
                </p>
            )}
            <h2>{title}</h2>
            {description && (
                <p
                    className={`mt-4 text-lg leading-relaxed ${dark
                            ? "text-[var(--color-text-on-dark-muted)]"
                            : "text-[var(--color-text-secondary)]"
                        }`}
                >
                    {description}
                </p>
            )}
        </div>
    );
}
