import { EnvelopeSimple, GithubLogo, LinkedinLogo, Phone } from "@phosphor-icons/react";
import { SOCIALS } from "../data/portfolio";

const Footer = () => (
    <footer data-testid="footer" className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-10 flex flex-wrap items-center justify-between gap-6">
            <p className="font-sans font-black text-lg text-zinc-50">HG<span className="text-volt">.</span></p>
            <div className="flex items-center gap-3">
                <a href={SOCIALS.linkedin} target="_blank" rel="noreferrer" data-testid="footer-linkedin-link" aria-label="LinkedIn" className="p-2.5 rounded-full border border-white/15 text-zinc-400 hover:text-volt hover:border-volt transition-colors duration-200"><LinkedinLogo size={18} /></a>
                <a href={SOCIALS.github} target="_blank" rel="noreferrer" data-testid="footer-github-link" aria-label="GitHub" className="p-2.5 rounded-full border border-white/15 text-zinc-400 hover:text-volt hover:border-volt transition-colors duration-200"><GithubLogo size={18} /></a>
                <a href={SOCIALS.email} data-testid="footer-email-link" aria-label="Email" className="p-2.5 rounded-full border border-white/15 text-zinc-400 hover:text-volt hover:border-volt transition-colors duration-200"><EnvelopeSimple size={18} /></a>
                <a href={SOCIALS.phone} data-testid="footer-phone-link" aria-label="Phone" className="p-2.5 rounded-full border border-white/15 text-zinc-400 hover:text-volt hover:border-volt transition-colors duration-200"><Phone size={18} /></a>
            </div>
            <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-zinc-500" data-testid="footer-copy">
                © 2026 Harshit Goel — New Delhi, India
            </p>
        </div>
    </footer>
);

export default Footer;
