import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import { siteConfig } from "@/content/site";

export const metadata: Metadata = {
    title: "Contact",
    description:
        "Get in touch with 10Labs — whether you need consulting, a product build, team augmentation, or training. Let's start a conversation.",
};

export default function ContactPage() {
    return (
        <>
            {/* Hero */}
            <section className="section-padding bg-brand-surface-dark text-[var(--color-text-on-dark)]">
                <Container>
                    <div className="max-w-3xl">
                        <p className="text-sm font-semibold uppercase tracking-widest text-brand-accent-light mb-6">
                            Contact
                        </p>
                        <h1>
                            Let&apos;s <span className="gradient-text">start a conversation</span>
                        </h1>
                        <p className="mt-6 text-xl text-[var(--color-text-on-dark-muted)] leading-relaxed">
                            Tell us about your project, challenge, or idea — we&apos;ll get back to you within 1–2 business days.
                        </p>
                    </div>
                </Container>
            </section>

            {/* Contact Options */}
            <section className="section-padding">
                <Container>
                    <div className="grid md:grid-cols-2 gap-12 lg:gap-16 max-w-5xl mx-auto">
                        {/* Business Inquiry */}
                        <div className="flex flex-col p-8 rounded-2xl border border-brand-border bg-white hover:border-brand-accent/30 hover:shadow-lg transition-all duration-300">
                            <div className="w-14 h-14 rounded-xl bg-brand-accent/10 text-brand-accent flex items-center justify-center mb-6">
                                <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 0 0 .75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 0 0-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0 1 12 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 0 1-.673-.38m0 0A2.18 2.18 0 0 1 3 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 0 1 3.413-.387m7.5 0V5.25A2.25 2.25 0 0 0 13.5 3h-3a2.25 2.25 0 0 0-2.25 2.25v.894m7.5 0a48.667 48.667 0 0 0-7.5 0M12 12.75h.008v.008H12v-.008Z" />
                                </svg>
                            </div>
                            <h3 className="mb-2">Business Inquiry</h3>
                            <p className="text-[var(--color-text-secondary)] mb-6 leading-relaxed flex-1">
                                Looking for technology consulting, product engineering, or team outsourcing? Share your project details with us.
                            </p>
                            <Button
                                href={siteConfig.typeformUrl}
                                size="lg"
                                className="w-full"
                            >
                                Submit Business Inquiry
                            </Button>
                        </div>

                        {/* Training Inquiry */}
                        <div className="flex flex-col p-8 rounded-2xl border border-brand-border bg-white hover:border-brand-accent/30 hover:shadow-lg transition-all duration-300">
                            <div className="w-14 h-14 rounded-xl bg-brand-gradient-end/10 text-[var(--color-gradient-end)] flex items-center justify-center mb-6">
                                <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.627 48.627 0 0 1 12 20.904a48.627 48.627 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15v-3.75m0 0h10.5" />
                                </svg>
                            </div>
                            <h3 className="mb-2">Training Inquiry</h3>
                            <p className="text-[var(--color-text-secondary)] mb-6 leading-relaxed flex-1">
                                Want to upskill your team with hands-on, project-based training? Tell us about your team and goals.
                            </p>
                            <Button
                                href={siteConfig.typeformUrl}
                                variant="outline"
                                size="lg"
                                className="w-full"
                            >
                                Submit Training Inquiry
                            </Button>
                        </div>
                    </div>

                    {/* Company Info */}
                    <div className="mt-16 text-center">
                        <p className="text-sm text-[var(--color-text-muted)] mb-2">
                            {siteConfig.legalName}
                        </p>
                        <p className="text-sm text-[var(--color-text-muted)]">
                            {siteConfig.address.street}
                        </p>
                    </div>
                </Container>
            </section>
        </>
    );
}
