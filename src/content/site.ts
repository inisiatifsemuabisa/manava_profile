export type NavItem = {
    label: string;
    href: string;
};

export const siteConfig = {
    name: "10Labs",
    legalName: "PT Inisiatif Semua Bisa",
    tagline: "Manava Collective",
    heroHeadline: "Engineering Solutions, Empowering People.",
    heroDescription:
        "10Labs membantu bisnis bergerak lebih cepat lewat arah teknologi, solusi, dan people enablement.",
    contactEmail: "-",
    contactPhone: "-",
    typeformUrl: "#", // TODO: Replace with actual Typeform URL
    address: {
        company: "PT Inisiatif Semua Bisa",
        street: "Jakarta, Indonesia",
    },
};

export const navigation: NavItem[] = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about/" },
    { label: "Services", href: "/services/" },
    { label: "Projects", href: "/case-studies/" },
];

export const footerLinks = {
    services: [
        { label: "Consulting", href: "/services/#consulting" },
        { label: "Solutions", href: "/services/#solutions" },
        { label: "Outsourcing", href: "/services/#outsourcing" },
        { label: "Training", href: "/training/" },
    ],
    company: [
        { label: "About Us", href: "/about/" },
        { label: "Case Studies", href: "/case-studies/" },
        { label: "Contact", href: "/contact/" },
    ],
};
