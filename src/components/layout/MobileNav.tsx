"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { navigation } from "@/content/site";
import Logo from "@/components/ui/Logo";

type MobileNavProps = {
    open: boolean;
    onClose: () => void;
};

export default function MobileNav({ open, onClose }: MobileNavProps) {
    const pathname = usePathname();

    return (
        <>
            {/* Backdrop */}
            <div
                className={`fixed inset-0 z-40 bg-black/60 backdrop-blur-sm transition-opacity duration-300 md:hidden ${open ? "opacity-100" : "opacity-0 pointer-events-none"
                    }`}
                onClick={onClose}
                aria-hidden="true"
            />

            {/* Drawer */}
            <div
                className={`fixed top-0 right-0 z-50 h-full w-80 max-w-[85vw] bg-[#121212] shadow-2xl transition-transform duration-300 ease-out md:hidden ${open ? "translate-x-0" : "translate-x-full"
                    }`}
                role="dialog"
                aria-modal="true"
                aria-label="Mobile navigation"
            >
                {/* Close button */}
                <div className="flex items-center justify-between p-6 border-b border-white/10">
                    <Logo size="sm" />
                    <button
                        type="button"
                        onClick={onClose}
                        className="w-10 h-10 flex items-center justify-center rounded-lg hover:bg-white/10 transition-colors"
                        aria-label="Close menu"
                    >
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="white" strokeWidth="2">
                            <line x1="4" y1="4" x2="16" y2="16" />
                            <line x1="16" y1="4" x2="4" y2="16" />
                        </svg>
                    </button>
                </div>

                {/* Nav links */}
                <nav className="flex flex-col p-6 gap-1">
                    {navigation.map((item) => {
                        const isActive = pathname === item.href || pathname === item.href.slice(0, -1);
                        return (
                            <Link
                                key={item.href}
                                href={item.href}
                                onClick={onClose}
                                className={`px-4 py-3 text-base font-medium rounded-lg transition-all duration-200 ${isActive
                                    ? "text-brand-accent bg-brand-accent/10"
                                    : "text-white/70 hover:text-white hover:bg-white/5"
                                    }`}
                            >
                                {item.label}
                            </Link>
                        );
                    })}
                </nav>

                {/* CTA */}
                <div className="absolute bottom-0 left-0 right-0 p-6 border-t border-white/10">
                    <Link
                        href="/contact/"
                        onClick={onClose}
                        className="flex items-center justify-center w-full px-6 py-3 text-base font-semibold text-white bg-brand-accent hover:bg-brand-accent-hover rounded-lg transition-all duration-200"
                    >
                        Contact Us
                    </Link>
                </div>
            </div>
        </>
    );
}
