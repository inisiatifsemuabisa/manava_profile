import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";

export const metadata: Metadata = {
    title: "About",
    description:
        "10Labs (Manava Collective) — learn about our philosophy, team approach, and what drives us to engineer solutions that empower people.",
};

export default function AboutPage() {
    return (
        <>
            {/* Hero */}
            <section className="section-padding bg-brand-surface-dark text-[var(--color-text-on-dark)] relative overflow-hidden">
                <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
                    <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-brand-accent/10 blur-3xl" />
                    <div className="absolute -bottom-40 -left-40 w-96 h-96 rounded-full bg-brand-gradient-end/10 blur-3xl" />
                </div>
                <Container className="relative">
                    <div className="max-w-3xl mx-auto text-center">
                        <p className="text-sm font-semibold uppercase tracking-widest text-brand-accent-light mb-6">
                            About Us
                        </p>
                        <h1>
                            We build technology that <span className="gradient-text">serves people</span>
                        </h1>
                        <p className="mt-6 text-xl text-[var(--color-text-on-dark-muted)] leading-relaxed">
                            10Labs is part of Manava Collective (Yayasan Penghubung Kebaikan) — a group that believes technology should empower, not complicate.
                        </p>
                    </div>
                </Container>
            </section>

            {/* Philosophy Detail */}
            <section className="section-padding">
                <Container>
                    <div className="max-w-3xl mx-auto">
                        <SectionHeading
                            title="The 10 & Labs philosophy"
                            align="left"
                        />
                        <div className="space-y-8">
                            <div>
                                <h3 className="mb-3">
                                    <span className="gradient-text text-2xl font-bold">10</span> — Completeness
                                </h3>
                                <p className="text-[var(--color-text-secondary)] text-lg leading-relaxed">
                                    The number 10 represents wholeness. We don&apos;t just write code — we bring the full picture: understanding the business, designing the experience, building the system, and enabling the team to sustain it.
                                </p>
                            </div>
                            <div>
                                <h3 className="mb-3">
                                    <span className="gradient-text text-2xl font-bold">Labs</span> — Experimentation
                                </h3>
                                <p className="text-[var(--color-text-secondary)] text-lg leading-relaxed">
                                    Every engagement is a lab. We experiment with approaches, prototype fast, validate assumptions, and iterate toward the right solution. Labs means we&apos;re always learning, always improving.
                                </p>
                            </div>
                        </div>
                    </div>
                </Container>
            </section>

            {/* Values */}
            <section className="section-padding bg-brand-surface-alt">
                <Container>
                    <SectionHeading
                        label="What Drives Us"
                        title="Our values in practice"
                    />
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
                        {[
                            {
                                title: "Clarity over complexity",
                                desc: "We choose simple, well-understood solutions over clever, hard-to-maintain ones.",
                            },
                            {
                                title: "People before process",
                                desc: "Tools and frameworks serve people — not the other way around. We build for the humans who use and maintain what we create.",
                            },
                            {
                                title: "Real over ideal",
                                desc: "We work within constraints, not against them. The best solution is one that actually ships and creates impact.",
                            },
                            {
                                title: "Ownership mindset",
                                desc: "We treat every project as if it's our own — because the quality of our work reflects who we are.",
                            },
                            {
                                title: "Continuous learning",
                                desc: "Technology evolves fast. We stay sharp through practice, sharing, and building things that challenge us.",
                            },
                            {
                                title: "Impact measurement",
                                desc: "We care about outcomes, not output. Every project should be able to answer: what changed because of this?",
                            },
                        ].map((value) => (
                            <div key={value.title} className="text-center">
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
            <section className="section-padding">
                <Container>
                    <div className="max-w-3xl mx-auto text-center">
                        <p className="text-sm font-semibold uppercase tracking-widest text-brand-accent mb-3">
                            Part of Something Bigger
                        </p>
                        <h2 className="mb-6">Manava Collective</h2>
                        <p className="text-[var(--color-text-secondary)] text-lg leading-relaxed mb-4">
                            10Labs operates under <strong className="text-brand-primary">Yayasan Penghubung Kebaikan</strong> (Manava Collective) — a foundation dedicated to connecting good intentions with effective action.
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
