import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import CaseStudyCard from "@/components/ui/CaseStudyCard";
import { caseStudies } from "@/content/case-studies";

export const metadata: Metadata = {
    title: "Projects",
    description:
        "Real stories of how 10Labs helped organizations solve technology challenges — from digital platforms to impact measurement tools.",
};

export default function CaseStudiesPage() {
    return (
        <>
            {/* Hero */}
            <section className="section-padding bg-black text-white relative overflow-hidden">
                <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
                    <div className="absolute -top-40 -left-40 w-[500px] h-[500px] rounded-full bg-brand-accent/8 blur-[120px]" />
                </div>
                <Container className="relative">
                    <div className="max-w-3xl mx-auto text-center">
                        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-accent mb-6">
                            Projects
                        </p>
                        <h1>Stories worth telling</h1>
                        <p className="mt-6 text-xl text-white/50 leading-relaxed">
                            Every project starts with a real problem. Here&apos;s how we helped turn challenges into meaningful outcomes.
                        </p>
                    </div>
                </Container>
            </section>

            {/* Case Studies Grid */}
            <section className="section-padding bg-[#0a0a0a]">
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
