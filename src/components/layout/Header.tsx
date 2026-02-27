"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { navigation } from "@/content/site";
import MobileNav from "./MobileNav";
import Logo from "@/components/ui/Logo";

export default function Header() {
    const [mobileOpen, setMobileOpen] = useState(false);
    const pathname = usePathname();

    return (
        <header className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-black/60 backdrop-blur-xl">
            <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 lg:px-8">
                {/* Logo */}
                <Link href="/" className="flex items-center">
                    <Logo size="md" />
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
                                    ? "text-brand-accent"
                                    : "text-white/70 hover:text-white"
                                    }`}
                            >
                                {item.label}
                            </Link>
                        );
                    })}
                    <Link
                        href="/contact/"
                        className="ml-2 px-5 py-2 text-sm font-semibold text-white bg-brand-accent hover:bg-brand-accent-hover rounded-lg transition-all duration-200 shadow-sm hover:shadow-md hover:shadow-brand-accent/20"
                    >
                        Contact Us
                    </Link>
                </nav>

                {/* Mobile Hamburger */}
                <button
                    type="button"
                    className="md:hidden flex flex-col justify-center items-center w-10 h-10 rounded-lg hover:bg-white/10 transition-colors"
                    onClick={() => setMobileOpen(true)}
                    aria-label="Open menu"
                >
                    <span className="block w-5 h-0.5 bg-white mb-1" />
                    <span className="block w-5 h-0.5 bg-white mb-1" />
                    <span className="block w-3.5 h-0.5 bg-white" />
                </button>
            </div>

            {/* Mobile Navigation Drawer */}
            <MobileNav open={mobileOpen} onClose={() => setMobileOpen(false)} />
        </header>
    );
}
