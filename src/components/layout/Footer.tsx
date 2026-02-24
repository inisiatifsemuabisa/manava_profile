import Link from "next/link";
import { siteConfig, footerLinks } from "@/content/site";

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-brand-surface-dark text-[var(--color-text-on-dark)]">
            <div className="mx-auto max-w-7xl px-6 lg:px-8 py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                    {/* Brand Column */}
                    <div className="lg:col-span-2">
                        <Link href="/" className="text-2xl font-bold tracking-tight">
                            {siteConfig.name}
                        </Link>
                        <p className="mt-4 text-base text-[var(--color-text-on-dark-muted)] max-w-md leading-relaxed">
                            {siteConfig.heroDescription}
                        </p>
                    </div>

                    {/* Services */}
                    <div>
                        <h4 className="text-sm font-semibold uppercase tracking-wider text-[var(--color-text-on-dark-muted)] mb-4">
                            Services
                        </h4>
                        <ul className="space-y-3">
                            {footerLinks.services.map((link) => (
                                <li key={link.href}>
                                    <Link
                                        href={link.href}
                                        className="text-sm text-[var(--color-text-on-dark)] hover:text-brand-accent-light transition-colors duration-200"
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Company */}
                    <div>
                        <h4 className="text-sm font-semibold uppercase tracking-wider text-[var(--color-text-on-dark-muted)] mb-4">
                            Company
                        </h4>
                        <ul className="space-y-3">
                            {footerLinks.company.map((link) => (
                                <li key={link.href}>
                                    <Link
                                        href={link.href}
                                        className="text-sm text-[var(--color-text-on-dark)] hover:text-brand-accent-light transition-colors duration-200"
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="mt-16 pt-8 border-t border-brand-border-dark flex flex-col md:flex-row items-center justify-between gap-4">
                    <p className="text-sm text-[var(--color-text-on-dark-muted)]">
                        © {currentYear} {siteConfig.legalName}. All rights reserved.
                    </p>
                    <p className="text-sm text-[var(--color-text-on-dark-muted)]">
                        {siteConfig.address.street}
                    </p>
                </div>
            </div>
        </footer>
    );
}
