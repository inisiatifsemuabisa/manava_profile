import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import CaseStudyCard from "@/components/ui/CaseStudyCard";
import { caseStudies } from "@/content/case-studies";

export const metadata: Metadata = {
    title: "Case Studies",
    description:
        "Real stories of how 10Labs helped organizations solve technology challenges — from digital platforms to impact measurement tools.",
};

export default function CaseStudiesPage() {
    return (
        <>
            {/* Hero */}
            <section className="section-padding bg-brand-surface-dark text-[var(--color-text-on-dark)] relative overflow-hidden">
                <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
                    <div className="absolute -top-40 -left-40 w-96 h-96 rounded-full bg-brand-gradient-end/10 blur-3xl" />
                </div>
                <Container className="relative">
                    <div className="max-w-3xl mx-auto text-center">
                        <p className="text-sm font-semibold uppercase tracking-widest text-brand-accent-light mb-6">
                            Case Studies
                        </p>
                        <h1>Stories worth telling</h1>
                        <p className="mt-6 text-xl text-[var(--color-text-on-dark-muted)] leading-relaxed">
                            Every project starts with a real problem. Here&apos;s how we helped turn challenges into meaningful outcomes.
                        </p>
                    </div>
                </Container>
            </section>

            {/* Case Studies Grid */}
            <section className="section-padding">
                <Container>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {caseStudies.map((cs, index) => (
                            <CaseStudyCard key={cs.slug} caseStudy={cs} index={index} />
                        ))}
                    </div>
                </Container>
            </section>
        </>
    );
}
