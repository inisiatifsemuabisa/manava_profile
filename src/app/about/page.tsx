import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";

export const metadata: Metadata = {
    title: "About",
    description:
        "10Labs (Manava Collective) — learn about our philosophy, team approach, and what drives us to engineer solutions that empower people.",
};

const stats = [
    { value: "34+", label: "Projects Delivered" },
    { value: "50+", label: "Clients Served" },
    { value: "125+", label: "Team Members" },
];

const values = [
    {
        title: "Innovation",
        desc: "We push boundaries and embrace new technologies to deliver cutting-edge solutions.",
        icon: (
            <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 0 0 1.5-.189m-1.5.189a6.01 6.01 0 0 1-1.5-.189m3.75 7.478a12.06 12.06 0 0 1-4.5 0m3.75 2.383a14.406 14.406 0 0 1-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 1 0-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />
            </svg>
        ),
    },
    {
        title: "Quality",
        desc: "We never compromise on quality. Every line of code is built to last and perform.",
        icon: (
            <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z" />
            </svg>
        ),
    },
    {
        title: "Collaboration",
        desc: "We work as a team with our clients, fostering open communication and partnerships.",
        icon: (
            <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z" />
            </svg>
        ),
    },
    {
        title: "Integrity",
        desc: "We operate with honesty and transparency in every engagement we undertake.",
        icon: (
            <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
            </svg>
        ),
    },
    {
        title: "Adaptability",
        desc: "We stay agile and responsive to changes, ensuring our solutions evolve with your needs.",
        icon: (
            <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182" />
            </svg>
        ),
    },
    {
        title: "Impact",
        desc: "We measure success by the real-world impact our solutions create for our clients.",
        icon: (
            <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 0 0 6 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0 1 18 16.5h-2.25m-7.5 0h7.5m-7.5 0-1 3m8.5-3 1 3m0 0 .5 1.5m-.5-1.5h-9.5m0 0-.5 1.5m.75-9 3-3 2.148 2.148A12.061 12.061 0 0 1 16.5 7.605" />
            </svg>
        ),
    },
];

export default function AboutPage() {
    return (
        <>
            {/* Hero */}
            <section className="section-padding bg-black text-white relative overflow-hidden">
                <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
                    <div className="absolute -top-40 -right-40 w-[500px] h-[500px] rounded-full bg-brand-accent/8 blur-[120px]" />
                    <div className="absolute -bottom-40 -left-40 w-[400px] h-[400px] rounded-full bg-brand-gradient-end/5 blur-[100px]" />
                </div>
                <Container className="relative">
                    <div className="max-w-4xl mx-auto text-center">
                        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-accent mb-6">
                            About Us
                        </p>
                        <h1>
                            Technology That Moves You Forward.
                        </h1>
                        <p className="mt-6 text-xl text-white/50 leading-relaxed">
                            10Labs is part of Manava Collective (Yayasan Penghubung Kebaikan) — a group that believes technology should empower, not complicate.
                        </p>
                    </div>
                </Container>
            </section>

            {/* Stats */}
            <section className="py-16 bg-[#0a0a0a] border-y border-white/5">
                <Container>
                    <div className="grid grid-cols-3 gap-8 max-w-3xl mx-auto text-center">
                        {stats.map((stat) => (
                            <div key={stat.label}>
                                <p className="text-4xl md:text-5xl font-bold text-brand-accent mb-2">{stat.value}</p>
                                <p className="text-sm text-white/40 uppercase tracking-wider">{stat.label}</p>
                            </div>
                        ))}
                    </div>
                </Container>
            </section>

            {/* We Are 10Labs */}
            <section className="section-padding bg-black">
                <Container>
                    <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
                        <div>
                            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-accent mb-3">
                                Who We Are
                            </p>
                            <h2 className="mb-6">We Are 10Labs</h2>
                            <div className="space-y-4">
                                <p className="text-[var(--color-text-secondary)] text-lg leading-relaxed">
                                    <strong className="text-white">10</strong> represents completeness — the full spectrum of what it takes to deliver meaningful technology: strategy, design, engineering, and people.
                                </p>
                                <p className="text-[var(--color-text-secondary)] text-lg leading-relaxed">
                                    <strong className="text-white">Labs</strong> reflects our approach — experimental, hands-on, and always learning. We treat every project as a lab where solutions are discovered through practice, not theory alone.
                                </p>
                            </div>
                            <ul className="mt-6 space-y-3">
                                {["Full-stack technology expertise", "Agile and iterative approach", "People-first mindset"].map((point) => (
                                    <li key={point} className="flex items-center gap-3 text-white/80">
                                        <svg className="w-5 h-5 text-brand-accent shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                            <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                                        </svg>
                                        {point}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="relative">
                            <div className="aspect-square rounded-2xl bg-gradient-to-br from-brand-accent/10 to-brand-gradient-end/5 border border-white/10 flex items-center justify-center">
                                <div className="text-center">
                                    <span className="text-8xl font-black gradient-text">10</span>
                                    <p className="text-2xl font-bold text-white mt-2">Labs</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </Container>
            </section>

            {/* What We Truly Stand For */}
            <section className="section-padding bg-[#0a0a0a]">
                <Container>
                    <SectionHeading
                        label="Our Values"
                        title="What we truly stand for"
                    />
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
                        {values.map((value) => (
                            <div key={value.title} className="rounded-2xl border border-white/10 bg-[#121212] p-6 text-center hover:border-brand-accent/30 transition-all duration-300">
                                <div className="w-14 h-14 rounded-xl bg-brand-accent/10 text-brand-accent flex items-center justify-center mx-auto mb-4">
                                    {value.icon}
                                </div>
                                <h3 className="text-lg mb-2">{value.title}</h3>
                                <p className="text-[var(--color-text-secondary)] text-sm leading-relaxed">
                                    {value.desc}
                                </p>
                            </div>
                        ))}
                    </div>
                </Container>
            </section>

            {/* Manava Collective */}
            <section className="section-padding bg-black">
                <Container>
                    <div className="max-w-3xl mx-auto text-center">
                        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-accent mb-3">
                            Part of Something Bigger
                        </p>
                        <h2 className="mb-6">Manava Collective</h2>
                        <p className="text-[var(--color-text-secondary)] text-lg leading-relaxed mb-4">
                            10Labs operates under <strong className="text-white">Yayasan Penghubung Kebaikan</strong> (Manava Collective) — a foundation dedicated to connecting good intentions with effective action.
                        </p>
                        <p className="text-[var(--color-text-secondary)] text-lg leading-relaxed mb-8">
                            Through 10Labs, we channel technology expertise to help organizations — from startups to social enterprises — build solutions that create lasting value.
                        </p>
                        <Button href="/contact/" size="lg">
                            Work With Us
                        </Button>
                    </div>
                </Container>
            </section>
        </>
    );
}
