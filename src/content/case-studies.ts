export type CaseStudy = {
    slug: string;
    title: string;
    client: string;
    category: string;
    problem: string;
    solution: string;
    impact: string[];
    techStack?: string[];
    featured?: boolean;
};

export const caseStudies: CaseStudy[] = [
    {
        slug: "ganjar-website",
        title: "Campaign Digital Platform",
        client: "Ganjar Presidential Campaign",
        category: "Solutions",
        problem:
            "A national political campaign needed a high-performance digital platform capable of handling massive traffic spikes during critical moments — while maintaining fast load times and a trustworthy user experience across Indonesia.",
        solution:
            "We designed and built a scalable web platform with optimized performance, CDN-backed delivery, and a content management system that allowed the campaign team to publish updates in real-time without engineering support.",
        impact: [
            "Handled millions of concurrent visitors during debate nights",
            "Sub-second page load times nationally",
            "Real-time content publishing for campaign team",
        ],
        techStack: ["Next.js", "Vercel", "Headless CMS"],
        featured: true,
    },
    {
        slug: "askara-nusantara",
        title: "Cultural Heritage Digital Archive",
        client: "Askara Nusantara",
        category: "Solutions",
        problem:
            "Indonesia's rich cultural heritage data was scattered across institutions and formats, making it difficult for researchers, educators, and the public to discover and access these valuable artifacts systematically.",
        solution:
            "We built a searchable digital archive platform that aggregates cultural data from multiple sources into a unified, accessible interface — with structured metadata, advanced search capabilities, and a responsive design for broad accessibility.",
        impact: [
            "Unified access to thousands of cultural artifacts",
            "Improved discoverability for researchers and educators",
            "Mobile-friendly access for broader public engagement",
        ],
        techStack: ["React", "Node.js", "PostgreSQL"],
        featured: true,
    },
    {
        slug: "filantropi-indonesia",
        title: "Philanthropy Impact Platform",
        client: "Filantropi Indonesia",
        category: "Consulting",
        problem:
            "The philanthropy sector in Indonesia lacked a centralized platform to coordinate efforts, track impact metrics, and share knowledge across organizations — leading to duplicated efforts and missed collaboration opportunities.",
        solution:
            "We provided strategic technology consulting and helped build an impact measurement platform that enables philanthropic organizations to track, report, and visualize their collective contributions transparently.",
        impact: [
            "Streamlined impact reporting across organizations",
            "Data-driven decision making for fund allocation",
            "Increased transparency in philanthropic activities",
        ],
        techStack: ["Next.js", "Supabase", "Chart.js"],
        featured: true,
    },
    {
        slug: "ui-connect",
        title: "Alumni Engagement Platform",
        client: "UI Connect",
        category: "Solutions",
        problem:
            "Universitas Indonesia's alumni network had no effective digital channel to stay connected, share opportunities, and collaborate on initiatives — resulting in weak engagement and untapped potential across a massive alumni base.",
        solution:
            "We built a community-driven platform that connects alumni through interest groups, events, mentoring programs, and opportunity sharing — designed to grow organically and sustain high engagement over time.",
        impact: [
            "Active alumni community with growing engagement",
            "Event management and networking features",
            "Mentorship program connecting students with alumni",
        ],
        techStack: ["React", "Firebase", "Tailwind CSS"],
        featured: true,
    },
    {
        slug: "impactleap",
        title: "Social Impact Measurement SaaS",
        client: "ImpactLeap",
        category: "Solutions",
        problem:
            "Social enterprises and NGOs needed a practical, affordable tool to measure and communicate their impact to stakeholders and funders — existing solutions were either too expensive or too complex for the sector.",
        solution:
            "We developed a SaaS platform that simplifies impact measurement through intuitive data collection, automated reporting, and visual dashboards — making it easy for organizations of any size to demonstrate their value.",
        impact: [
            "Reduced impact reporting time by 60%",
            "Adopted by multiple social enterprises across Southeast Asia",
            "Automated report generation for stakeholder presentations",
        ],
        techStack: ["Vue.js", "Python", "AWS"],
        featured: false,
    },
];
