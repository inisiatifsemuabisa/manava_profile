import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Container from "@/components/ui/Container";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import { caseStudies } from "@/content/case-studies";

type Props = {
    params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
    return caseStudies.map((cs) => ({
        slug: cs.slug,
    }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { slug } = await params;
    const cs = caseStudies.find((c) => c.slug === slug);
    if (!cs) return {};
    return {
        title: `${cs.title} — ${cs.client}`,
        description: cs.problem.slice(0, 160),
    };
}

export default async function CaseStudyDetailPage({ params }: Props) {
    const { slug } = await params;
    const cs = caseStudies.find((c) => c.slug === slug);
    if (!cs) notFound();

    return (
        <>
            {/* Header */}
            <section className="section-padding bg-brand-surface-dark text-[var(--color-text-on-dark)] relative overflow-hidden">
                <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
                    <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-brand-accent/10 blur-3xl" />
                </div>
                <Container className="relative">
                    <div className="max-w-3xl mx-auto text-center">
                        <div className="flex items-center justify-center gap-3 mb-6">
                            <Badge variant="accent">{cs.category}</Badge>
                        </div>
                        <h1 className="mb-3">{cs.title}</h1>
                        <p className="text-xl text-[var(--color-text-on-dark-muted)]">{cs.client}</p>
                    </div>
                </Container>
            </section>

            {/* Problem → Solution → Impact */}
            <section className="section-padding">
                <Container>
                    <div className="max-w-3xl mx-auto space-y-16">
                        {/* Problem */}
                        <div>
                            <p className="text-sm font-semibold uppercase tracking-widest text-brand-accent mb-3">
                                The Problem
                            </p>
                            <p className="text-lg text-[var(--color-text-secondary)] leading-relaxed">
                                {cs.problem}
                            </p>
                        </div>

                        {/* Solution */}
                        <div>
                            <p className="text-sm font-semibold uppercase tracking-widest text-brand-accent mb-3">
                                Our Solution
                            </p>
                            <p className="text-lg text-[var(--color-text-secondary)] leading-relaxed">
                                {cs.solution}
                            </p>
                        </div>

                        {/* Impact */}
                        <div>
                            <p className="text-sm font-semibold uppercase tracking-widest text-brand-accent mb-3">
                                The Impact
                            </p>
                            <ul className="space-y-3">
                                {cs.impact.map((item) => (
                                    <li key={item} className="flex items-start gap-3 text-lg text-[var(--color-text-secondary)]">
                                        <svg
                                            className="w-6 h-6 text-brand-accent mt-0.5 shrink-0"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            strokeWidth={2}
                                        >
                                            <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                                        </svg>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Tech Stack */}
                        {cs.techStack && cs.techStack.length > 0 && (
                            <div>
                                <p className="text-sm font-semibold uppercase tracking-widest text-[var(--color-text-muted)] mb-3">
                                    Technology Stack
                                </p>
                                <div className="flex flex-wrap gap-2">
                                    {cs.techStack.map((tech) => (
                                        <Badge key={tech}>{tech}</Badge>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>
                </Container>
            </section>

            {/* CTA */}
            <section className="section-padding bg-brand-surface-alt text-center">
                <Container>
                    <h2 className="mb-4">Have a similar challenge?</h2>
                    <p className="text-lg text-[var(--color-text-secondary)] max-w-xl mx-auto mb-8">
                        Let&apos;s talk about how we can help your organization achieve the same kind of impact.
                    </p>
                    <div className="flex items-center justify-center gap-4">
                        <Button href="/contact/" size="lg">
                            Talk to Us
                        </Button>
                        <Button href="/case-studies/" variant="secondary" size="lg">
                            More Case Studies
                        </Button>
                    </div>
                </Container>
            </section>
        </>
    );
}
