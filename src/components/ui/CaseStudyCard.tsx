import Link from "next/link";
import Card from "@/components/ui/Card";
import Badge from "@/components/ui/Badge";
import type { CaseStudy } from "@/content/case-studies";

type CaseStudyCardProps = {
    caseStudy: CaseStudy;
    index?: number;
};

export default function CaseStudyCard({ caseStudy, index = 0 }: CaseStudyCardProps) {
    return (
        <Link href={`/case-studies/${caseStudy.slug}/`} className="block group">
            <Card
                className={`h-full opacity-0 animate-fade-in-up animation-delay-${(index + 1) * 100}`}
            >
                <div className="flex flex-col h-full">
                    <div className="flex items-center gap-2 mb-4">
                        <Badge variant="accent">{caseStudy.category}</Badge>
                    </div>
                    <h3 className="mb-1 group-hover:text-brand-accent transition-colors duration-200">
                        {caseStudy.title}
                    </h3>
                    <p className="text-sm font-medium text-[var(--color-text-muted)] mb-3">
                        {caseStudy.client}
                    </p>
                    <p className="text-[var(--color-text-secondary)] text-sm leading-relaxed line-clamp-3 flex-1">
                        {caseStudy.problem}
                    </p>
                    <div className="mt-4 pt-4 border-t border-brand-border">
                        <span className="inline-flex items-center gap-1 text-sm font-semibold text-brand-accent group-hover:gap-2 transition-all duration-200">
                            View case study
                            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                            </svg>
                        </span>
                    </div>
                </div>
            </Card>
        </Link>
    );
}
