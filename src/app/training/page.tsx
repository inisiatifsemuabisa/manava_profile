import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";

export const metadata: Metadata = {
    title: "Training",
    description:
        "Upskill your team through hands-on training programs rooted in real project needs — not generic courseware.",
};

const trainingTopics = [
    {
        title: "Web Development Fundamentals",
        description: "Modern HTML, CSS, JavaScript, and React — built around real-world projects your team actually needs.",
        audience: "Junior to mid-level engineers",
    },
    {
        title: "Full-Stack Engineering",
        description: "End-to-end application development including API design, database architecture, and deployment pipelines.",
        audience: "Mid-level engineers",
    },
    {
        title: "QA & Testing Automation",
        description: "Practical testing strategies including unit testing, integration testing, and end-to-end automation with Playwright.",
        audience: "QA engineers & developers",
    },
    {
        title: "DevOps & Cloud Infrastructure",
        description: "CI/CD pipelines, containerization, monitoring, and cloud deployment — hands-on with real infrastructure.",
        audience: "Engineers & ops teams",
    },
    {
        title: "Technical Leadership",
        description: "Architecture decision-making, code review practices, mentoring, and engineering team management.",
        audience: "Senior engineers & tech leads",
    },
    {
        title: "Custom Curriculum",
        description: "Don't see what you need? We design tailored programs based on your team's specific challenges and technology stack.",
        audience: "Any team",
    },
];

export default function TrainingPage() {
    return (
        <>
            {/* Hero */}
            <section className="section-padding bg-brand-surface-dark text-[var(--color-text-on-dark)] relative overflow-hidden">
                <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
                    <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-brand-accent/10 blur-3xl" />
                </div>
                <Container className="relative">
                    <SectionHeading
                        label="Training"
                        title="Learn by building real things"
                        description="Our training programs are rooted in actual project needs — your team walks away with skills they can apply immediately."
                        dark
                    />
                </Container>
            </section>

            {/* How We Train */}
            <section className="section-padding">
                <Container>
                    <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center mb-16">
                        <div>
                            <p className="text-sm font-semibold uppercase tracking-widest text-brand-accent mb-3">
                                Our Approach
                            </p>
                            <h2 className="mb-6">How we train</h2>
                            <div className="space-y-4">
                                <p className="text-[var(--color-text-secondary)] text-lg leading-relaxed">
                                    We don&apos;t believe in slide decks and toy examples. Every training session is built around a real challenge — ideally one from your own backlog.
                                </p>
                                <p className="text-[var(--color-text-secondary)] text-lg leading-relaxed">
                                    Participants learn by doing: writing real code, reviewing real PRs, deploying to real environments. The result? Skills that stick, because they were earned through practice.
                                </p>
                            </div>
                        </div>
                        <div className="space-y-4">
                            {["Discovery call to understand needs", "Custom curriculum design", "Hands-on workshops (2–5 days)", "Follow-up mentoring & code review"].map((step, i) => (
                                <div key={step} className="flex items-center gap-4 p-4 rounded-xl bg-brand-surface-alt border border-brand-border">
                                    <span className="w-10 h-10 rounded-lg bg-brand-accent text-white flex items-center justify-center font-bold text-sm shrink-0">
                                        {i + 1}
                                    </span>
                                    <span className="text-[var(--color-text-primary)] font-medium">{step}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </Container>
            </section>

            {/* Training Topics */}
            <section className="section-padding bg-brand-surface-alt">
                <Container>
                    <SectionHeading
                        label="Topics"
                        title="What we can cover"
                        description="Here are some of the areas we specialize in — but we're always open to designing something new."
                    />
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {trainingTopics.map((topic, index) => (
                            <Card key={topic.title} className={`opacity-0 animate-fade-in-up animation-delay-${(index % 3 + 1) * 100}`}>
                                <h3 className="mb-2 text-lg">{topic.title}</h3>
                                <p className="text-[var(--color-text-secondary)] text-sm leading-relaxed mb-4">
                                    {topic.description}
                                </p>
                                <p className="text-xs font-medium text-[var(--color-text-muted)] uppercase tracking-wider">
                                    For: {topic.audience}
                                </p>
                            </Card>
                        ))}
                    </div>
                </Container>
            </section>

            {/* CTA */}
            <section className="section-padding bg-brand-surface-dark text-[var(--color-text-on-dark)] text-center">
                <Container>
                    <h2 className="mb-4">Ready to upskill your team?</h2>
                    <p className="text-lg text-[var(--color-text-on-dark-muted)] max-w-xl mx-auto mb-8">
                        Tell us about your team and goals — we&apos;ll design a program that fits.
                    </p>
                    <Button href="/contact/" size="lg">
                        Start a Conversation
                    </Button>
                </Container>
            </section>
        </>
    );
}
