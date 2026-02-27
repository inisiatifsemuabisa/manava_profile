import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import { services } from "@/content/services";

export const metadata: Metadata = {
    title: "Services",
    description:
        "Technology consulting, product engineering, team outsourcing, and hands-on training — explore how 10Labs can help your organization.",
};

export default function ServicesPage() {
    return (
        <>
            {/* Hero */}
            <section className="section-padding bg-black text-white relative overflow-hidden">
                <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
                    <div className="absolute -top-40 -right-40 w-[500px] h-[500px] rounded-full bg-brand-accent/8 blur-[120px]" />
                </div>
                <Container className="relative">
                    <div className="max-w-3xl mx-auto text-center">
                        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-accent mb-6">
                            Services
                        </p>
                        <h1>What we bring to the table</h1>
                        <p className="mt-6 text-xl text-white/50 leading-relaxed">
                            From strategic advisory to hands-on engineering — we help organizations navigate technology with confidence.
                        </p>
                    </div>
                </Container>
            </section>

            {/* Service Detail Sections */}
            {services.map((service, index) => (
                <section
                    key={service.id}
                    id={service.id}
                    className={`section-padding ${index % 2 === 0 ? "bg-[#0a0a0a]" : "bg-black"}`}
                >
                    <Container>
                        <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-start">
                            <div>
                                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-accent mb-3">
                                    {String(index + 1).padStart(2, "0")}
                                </p>
                                <h2 className="mb-4">{service.title}</h2>
                                <p className="text-[var(--color-text-secondary)] text-lg leading-relaxed">
                                    {service.description}
                                </p>
                            </div>
                            <Card hover={false}>
                                <h4 className="mb-4 text-white/40 uppercase tracking-wider text-xs font-semibold">
                                    Key Areas
                                </h4>
                                <ul className="space-y-3">
                                    {service.highlights.map((highlight) => (
                                        <li
                                            key={highlight}
                                            className="flex items-start gap-3 text-[var(--color-text-secondary)]"
                                        >
                                            <svg
                                                className="w-5 h-5 text-brand-accent mt-0.5 shrink-0"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                stroke="currentColor"
                                                strokeWidth={2}
                                            >
                                                <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                                            </svg>
                                            {highlight}
                                        </li>
                                    ))}
                                </ul>
                            </Card>
                        </div>
                    </Container>
                </section>
            ))}

            {/* CTA */}
            <section className="section-padding bg-brand-accent text-white text-center">
                <Container>
                    <h2 className="mb-4 text-white">Not sure where to start?</h2>
                    <p className="text-lg text-white/80 max-w-xl mx-auto mb-8">
                        Tell us about your challenge and we&apos;ll help you figure out the right approach — no commitment required.
                    </p>
                    <Button href="/contact/" size="lg" variant="inverted">
                        Start a Conversation
                    </Button>
                </Container>
            </section>
        </>
    );
}
