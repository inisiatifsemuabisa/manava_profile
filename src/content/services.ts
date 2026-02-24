export type Service = {
    id: string;
    title: string;
    shortDescription: string;
    description: string;
    icon: string;
    highlights: string[];
};

export const services: Service[] = [
    {
        id: "consulting",
        title: "Consulting",
        shortDescription: "Strategic technology direction for growing teams.",
        description:
            "We help organizations define their technology roadmap, evaluate architectures, and make informed decisions that align engineering with business goals. From startup-scale to enterprise, we bring clarity to complexity.",
        icon: "compass",
        highlights: [
            "Technology roadmap & strategy",
            "Architecture review & recommendations",
            "Engineering team assessment",
            "Digital transformation advisory",
        ],
    },
    {
        id: "solutions",
        title: "Solutions",
        shortDescription: "End-to-end product engineering that ships.",
        description:
            "We design and build digital products — from web platforms to mobile apps — with a focus on reliability, performance, and user experience. Our solutions are built to scale and maintained with care.",
        icon: "code",
        highlights: [
            "Web & mobile application development",
            "System integration & API design",
            "Data pipeline & analytics platforms",
            "Cloud infrastructure setup",
        ],
    },
    {
        id: "outsourcing",
        title: "Outsourcing",
        shortDescription: "Extend your team with embedded engineers.",
        description:
            "Need extra engineering capacity without the overhead? We embed skilled engineers into your existing workflows — aligned with your tools, culture, and delivery standards.",
        icon: "users",
        highlights: [
            "Dedicated engineering teams",
            "Staff augmentation",
            "QA & testing resources",
            "DevOps & infrastructure support",
        ],
    },
    {
        id: "training",
        title: "Training",
        shortDescription: "Upskill your people through real project needs.",
        description:
            "We deliver hands-on training programs tailored to your team's actual challenges — not generic courseware. Our approach is rooted in real-world problem solving and practical implementation.",
        icon: "graduation-cap",
        highlights: [
            "Custom curriculum design",
            "Hands-on workshops & bootcamps",
            "Code review & mentoring programs",
            "Technology adoption training",
        ],
    },
];
