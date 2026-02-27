import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import { siteConfig } from "@/content/site";

export const metadata: Metadata = {
    title: "Contact",
    description:
        "Get in touch with 10Labs — whether you need consulting, a product build, team augmentation, or training. Let's start a conversation.",
};

const contactInfo = [
    {
        title: "Email",
        detail: siteConfig.contactEmail,
        icon: (
            <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
            </svg>
        ),
    },
    {
        title: "Phone",
        detail: siteConfig.contactPhone,
        icon: (
            <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
            </svg>
        ),
    },
    {
        title: "Office",
        detail: siteConfig.address.street,
        icon: (
            <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
            </svg>
        ),
    },
];

export default function ContactPage() {
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
                            Contact
                        </p>
                        <h1>
                            Contact Our Tech Team.
                        </h1>
                        <p className="mt-6 text-xl text-white/50 leading-relaxed">
                            Tell us about your project, challenge, or idea — we&apos;ll get back to you within 1–2 business days.
                        </p>
                    </div>
                </Container>
            </section>

            {/* Contact Info Cards */}
            <section className="py-12 bg-[#0a0a0a] border-y border-white/5">
                <Container>
                    <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
                        {contactInfo.map((info) => (
                            <div
                                key={info.title}
                                className="rounded-2xl border border-white/10 bg-[#121212] p-6 text-center hover:border-brand-accent/30 transition-all duration-300"
                            >
                                <div className="w-14 h-14 rounded-xl bg-brand-accent/10 text-brand-accent flex items-center justify-center mx-auto mb-4">
                                    {info.icon}
                                </div>
                                <h4 className="text-sm font-semibold uppercase tracking-wider text-white/40 mb-2">
                                    {info.title}
                                </h4>
                                <p className="text-white font-medium">{info.detail}</p>
                            </div>
                        ))}
                    </div>
                </Container>
            </section>

            {/* Contact Form */}
            <section className="section-padding bg-black">
                <Container>
                    <div className="max-w-2xl mx-auto">
                        <div className="text-center mb-12">
                            <h2 className="mb-4">Send Us a Message</h2>
                            <p className="text-[var(--color-text-secondary)]">
                                Fill out the form below and our team will get back to you shortly.
                            </p>
                        </div>

                        <form className="space-y-6">
                            <div className="grid sm:grid-cols-2 gap-6">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium text-white/60 mb-2">
                                        Name
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        placeholder="Your name"
                                        className="w-full px-4 py-3 rounded-lg bg-[#121212] border border-white/10 text-white placeholder:text-white/30 focus:border-brand-accent focus:ring-1 focus:ring-brand-accent outline-none transition-all"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-white/60 mb-2">
                                        Email
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        placeholder="you@company.com"
                                        className="w-full px-4 py-3 rounded-lg bg-[#121212] border border-white/10 text-white placeholder:text-white/30 focus:border-brand-accent focus:ring-1 focus:ring-brand-accent outline-none transition-all"
                                    />
                                </div>
                            </div>
                            <div>
                                <label htmlFor="subject" className="block text-sm font-medium text-white/60 mb-2">
                                    Subject
                                </label>
                                <input
                                    type="text"
                                    id="subject"
                                    name="subject"
                                    placeholder="How can we help?"
                                    className="w-full px-4 py-3 rounded-lg bg-[#121212] border border-white/10 text-white placeholder:text-white/30 focus:border-brand-accent focus:ring-1 focus:ring-brand-accent outline-none transition-all"
                                />
                            </div>
                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-white/60 mb-2">
                                    Message
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    rows={5}
                                    placeholder="Tell us about your project or challenge..."
                                    className="w-full px-4 py-3 rounded-lg bg-[#121212] border border-white/10 text-white placeholder:text-white/30 focus:border-brand-accent focus:ring-1 focus:ring-brand-accent outline-none transition-all resize-none"
                                />
                            </div>
                            <Button size="lg" className="w-full">
                                Send Message
                            </Button>
                        </form>
                    </div>

                    {/* Company Info */}
                    <div className="mt-16 text-center">
                        <p className="text-sm text-white/30 mb-2">
                            {siteConfig.legalName}
                        </p>
                        <p className="text-sm text-white/30">
                            {siteConfig.address.street}
                        </p>
                    </div>
                </Container>
            </section>
        </>
    );
}
