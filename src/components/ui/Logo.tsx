type LogoProps = {
    className?: string;
    size?: "sm" | "md" | "lg";
};

const sizes = {
    sm: { height: 24, iconScale: 0.75 },
    md: { height: 32, iconScale: 1 },
    lg: { height: 40, iconScale: 1.25 },
};

export default function Logo({ className = "", size = "md" }: LogoProps) {
    const { height, iconScale } = sizes[size];
    const iconW = Math.round(28 * iconScale);
    const iconH = Math.round(28 * iconScale);

    return (
        <span className={`inline-flex items-center gap-1.5 ${className}`}>
            {/* Icon: orange square + half-circle */}
            <svg
                width={iconW}
                height={iconH}
                viewBox="0 0 80 100"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
            >
                {/* Orange rectangle - left block */}
                <rect x="0" y="5" width="40" height="90" fill="#FF5C00" />
                {/* Circle left half - transparent cutout over the rectangle */}
                <path
                    d="M40 15 A35 35 0 0 0 40 85"
                    fill="black"
                />
                {/* Circle right half - orange */}
                <path
                    d="M40 15 A35 35 0 0 1 40 85"
                    fill="#FF5C00"
                />
            </svg>
            {/* Text */}
            <span
                className="font-black tracking-tight leading-none text-white"
                style={{ fontSize: height * 0.7 }}
            >
                labs
            </span>
        </span>
    );
}
