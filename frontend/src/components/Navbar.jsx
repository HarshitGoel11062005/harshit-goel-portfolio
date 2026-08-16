import { useEffect, useState } from "react";
import { DownloadSimple, List, X } from "@phosphor-icons/react";
import { NAV_LINKS, RESUME_URL } from "../data/portfolio";

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [open, setOpen] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 24);
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return (
        <header
            data-testid="navbar"
            className={`fixed top-0 left-0 right-0 z-50 transition-[background-color,box-shadow] duration-300 ${
                scrolled ? "bg-obsidian/85 backdrop-blur-xl border-b border-white/10" : "bg-transparent"
            }`}
        >
            <div className="max-w-7xl mx-auto px-6 lg:px-12 h-16 flex items-center justify-between">
                <a href="#top" data-testid="nav-logo" className="font-sans font-black text-xl tracking-tight text-zinc-50">
                    HG<span className="text-volt">.</span>
                </a>
                <nav className="hidden md:flex items-center gap-8">
                    {NAV_LINKS.map((l) => (
                        <a
                            key={l.label}
                            href={l.href}
                            data-testid={`nav-link-${l.label.toLowerCase()}`}
                            className="font-mono text-xs uppercase tracking-[0.2em] text-zinc-400 hover:text-volt transition-colors duration-200"
                        >
                            {l.label}
                        </a>
                    ))}
                </nav>
                <div className="flex items-center gap-3">
                    <a
                        href={RESUME_URL}
                        download
                        data-testid="nav-resume-button"
                        className="hidden sm:inline-flex items-center gap-2 rounded-full bg-volt px-5 py-2 font-sans font-bold text-sm text-obsidian volt-glow hover:bg-cyan-300 transition-colors duration-200"
                    >
                        <DownloadSimple size={16} weight="bold" /> Resume
                    </a>
                    <button
                        data-testid="nav-menu-toggle"
                        onClick={() => setOpen(!open)}
                        className="md:hidden text-zinc-200 p-2"
                        aria-label="Toggle menu"
                    >
                        {open ? <X size={22} /> : <List size={22} />}
                    </button>
                </div>
            </div>
            {open && (
                <nav className="md:hidden bg-obsidian/95 backdrop-blur-xl border-b border-white/10 px-6 py-4 flex flex-col gap-4" data-testid="nav-mobile-menu">
                    {NAV_LINKS.map((l) => (
                        <a
                            key={l.label}
                            href={l.href}
                            onClick={() => setOpen(false)}
                            className="font-mono text-xs uppercase tracking-[0.2em] text-zinc-300"
                        >
                            {l.label}
                        </a>
                    ))}
                </nav>
            )}
        </header>
    );
};

export default Navbar;
