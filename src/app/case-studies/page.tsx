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
            <section className="section-padding bg-brand-surface-alt">
                <Container>
                    <SectionHeading
                        label="Case Studies"
                        title="Stories worth telling"
                        description="Every project starts with a real problem. Here's how we helped turn challenges into meaningful outcomes."
                    />
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
