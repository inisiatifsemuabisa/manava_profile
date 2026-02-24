"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { navigation, siteConfig } from "@/content/site";
import MobileNav from "./MobileNav";

export default function Header() {
    const [mobileOpen, setMobileOpen] = useState(false);
    const pathname = usePathname();

    return (
        <header className="fixed top-0 left-0 right-0 z-50 border-b border-brand-border bg-white/80 backdrop-blur-xl">
            <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 lg:px-8">
                {/* Logo */}
                <Link href="/" className="flex items-center gap-2 group">
                    <span className="text-xl font-bold tracking-tight text-brand-primary group-hover:text-brand-accent transition-colors duration-200">
                        {siteConfig.name}
                    </span>
                </Link>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex items-center gap-1" aria-label="Main navigation">
                    {navigation.map((item) => {
                        const isActive = pathname === item.href || pathname === item.href.slice(0, -1);
                        return (
                            <Link
                                key={item.href}
                                href={item.href}
                                className={`px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200 ${isActive
                                        ? "text-brand-accent bg-brand-accent/5"
                                        : "text-[var(--color-text-secondary)] hover:text-brand-primary hover:bg-brand-surface-alt"
                                    }`}
                            >
                                {item.label}
                            </Link>
                        );
                    })}
                    <Link
                        href="/contact/"
                        className="ml-2 px-5 py-2 text-sm font-semibold text-white bg-brand-accent hover:bg-brand-accent-hover rounded-lg transition-all duration-200 shadow-sm hover:shadow-md"
                    >
                        Talk to Us
                    </Link>
                </nav>

                {/* Mobile Hamburger */}
                <button
                    type="button"
                    className="md:hidden flex flex-col justify-center items-center w-10 h-10 rounded-lg hover:bg-brand-surface-alt transition-colors"
                    onClick={() => setMobileOpen(true)}
                    aria-label="Open menu"
                >
                    <span className="block w-5 h-0.5 bg-brand-primary mb-1" />
                    <span className="block w-5 h-0.5 bg-brand-primary mb-1" />
                    <span className="block w-3.5 h-0.5 bg-brand-primary" />
                </button>
            </div>

            {/* Mobile Navigation Drawer */}
            <MobileNav open={mobileOpen} onClose={() => setMobileOpen(false)} />
        </header>
    );
}
