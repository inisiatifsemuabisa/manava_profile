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
    className = "",
}: SectionHeadingProps) {
    return (
        <div
            className={`mb-12 lg:mb-16 ${align === "center" ? "text-center mx-auto max-w-2xl" : ""
                } ${className}`}
        >
            {label && (
                <p className="text-sm font-semibold uppercase tracking-widest mb-3 text-brand-accent">
                    {label}
                </p>
            )}
            <h2>{title}</h2>
            {description && (
                <p className="mt-4 text-lg leading-relaxed text-[var(--color-text-secondary)]">
                    {description}
                </p>
            )}
        </div>
    );
}
