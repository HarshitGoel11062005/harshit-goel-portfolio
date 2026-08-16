import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowDown, DownloadSimple, GithubLogo, LinkedinLogo, EnvelopeSimple } from "@phosphor-icons/react";
import { ParticleField } from "./ParticleField";
import { HERO_BG, RESUME_URL, ROLES, SOCIALS, STATS } from "../data/portfolio";

const Hero = () => {
    const [roleIdx, setRoleIdx] = useState(0);
    useEffect(() => {
        const t = setInterval(() => setRoleIdx((i) => (i + 1) % ROLES.length), 2600);
        return () => clearInterval(t);
    }, []);

    return (
        <section id="top" data-testid="hero-section" className="relative min-h-screen flex items-center overflow-hidden">
            <img src={HERO_BG} alt="" className="absolute inset-0 w-full h-full object-cover opacity-15 [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)]" />
            <div className="absolute inset-0 bg-noise opacity-[0.04] pointer-events-none" />
            <ParticleField className="absolute right-0 top-0 h-full w-full lg:w-1/2 opacity-60" />

            <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 py-32 w-full">
                <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
                    <p className="font-mono text-xs uppercase tracking-[0.3em] text-volt mb-6" data-testid="hero-label">
                        Portfolio — New Delhi, India
                    </p>
                    <h1 data-testid="hero-heading" className="font-sans font-black tracking-tight text-5xl sm:text-6xl lg:text-8xl text-zinc-50 leading-[0.95]">
                        HARSHIT
                        <br />
                        <span className="text-stroke">GOEL</span>
                    </h1>
                    <div className="mt-6 h-10 flex items-center">
                        <AnimatePresence mode="wait">
                            <motion.span
                                key={ROLES[roleIdx]}
                                initial={{ opacity: 0, y: 14 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -14 }}
                                transition={{ duration: 0.35 }}
                                className="font-sans font-bold text-2xl sm:text-3xl text-volt"
                                data-testid="hero-role-text"
                            >
                                {ROLES[roleIdx]}
                            </motion.span>
                        </AnimatePresence>
                    </div>
                    <p className="mt-6 max-w-xl text-base sm:text-lg leading-relaxed text-zinc-400" data-testid="hero-summary">
                        I turn raw data into decisions — from SQL and Power BI dashboards to machine learning
                        models trained on 500,000+ records. B.Tech AI &amp; Data Science, Class of 2027.
                    </p>
                    <div className="mt-10 flex flex-wrap items-center gap-4">
                        <a
                            href="#projects"
                            data-testid="hero-view-projects-button"
                            className="inline-flex items-center gap-2 rounded-full bg-volt px-7 py-3 font-sans font-bold text-obsidian volt-glow hover:bg-cyan-300 transition-colors duration-200"
                        >
                            View Projects <ArrowDown size={18} weight="bold" />
                        </a>
                        <a
                            href={RESUME_URL}
                            download
                            data-testid="hero-download-resume-button"
                            className="inline-flex items-center gap-2 rounded-full border border-white/20 px-7 py-3 font-sans font-bold text-zinc-100 hover:border-volt hover:text-volt transition-colors duration-200"
                        >
                            Download Resume <DownloadSimple size={18} weight="bold" />
                        </a>
                        <div className="flex items-center gap-3 ml-1">
                            <a href={SOCIALS.linkedin} target="_blank" rel="noreferrer" data-testid="hero-linkedin-link" aria-label="LinkedIn" className="p-2.5 rounded-full border border-white/15 text-zinc-400 hover:text-volt hover:border-volt transition-colors duration-200"><LinkedinLogo size={20} /></a>
                            <a href={SOCIALS.github} target="_blank" rel="noreferrer" data-testid="hero-github-link" aria-label="GitHub" className="p-2.5 rounded-full border border-white/15 text-zinc-400 hover:text-volt hover:border-volt transition-colors duration-200"><GithubLogo size={20} /></a>
                            <a href={SOCIALS.email} data-testid="hero-email-link" aria-label="Email" className="p-2.5 rounded-full border border-white/15 text-zinc-400 hover:text-volt hover:border-volt transition-colors duration-200"><EnvelopeSimple size={20} /></a>
                        </div>
                    </div>
                    <div className="mt-16 grid grid-cols-2 sm:grid-cols-4 gap-px bg-white/10 border border-white/10 max-w-2xl" data-testid="hero-stats">
                        {STATS.map((s) => (
                            <div key={s.label} className="bg-obsidian px-5 py-4">
                                <div className="font-sans font-black text-2xl text-zinc-50">{s.value}</div>
                                <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-zinc-500 mt-1">{s.label}</div>
                            </div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
