import { motion } from "framer-motion";
import { Article, Certificate } from "@phosphor-icons/react";
import { CERTIFICATIONS } from "../data/portfolio";

const Certifications = () => (
    <section id="certifications" data-testid="certifications-section" className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-28">
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.7 }}>
                <p className="font-mono text-xs uppercase tracking-[0.3em] text-volt mb-4">06 — Recognition</p>
                <h2 className="font-sans font-black tracking-tight text-4xl sm:text-5xl text-zinc-50 mb-14">Proof of work.</h2>
            </motion.div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4" data-testid="certifications-grid">
                {CERTIFICATIONS.map((c, i) => (
                    <motion.div
                        key={c.title}
                        initial={{ opacity: 0, y: 24 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-60px" }}
                        transition={{ duration: 0.55, delay: i * 0.08 }}
                        className={`relative p-7 border transition-colors duration-300 ${
                            c.highlight
                                ? "bg-panel border-volt/60 volt-glow"
                                : "bg-panel border-white/10 hover:border-volt/40"
                        }`}
                        data-testid={`certification-${c.title.toLowerCase().replace(/[^a-z]+/g, "-")}`}
                    >
                        {c.highlight ? <Article size={28} className="text-volt mb-5" /> : <Certificate size={28} className="text-zinc-500 mb-5" />}
                        <h3 className="font-sans font-bold text-lg text-zinc-50 mb-2">{c.title}</h3>
                        <p className="text-sm leading-relaxed text-zinc-400">{c.detail}</p>
                        {c.highlight && (
                            <a href="#research" data-testid="certification-view-papers-link" className="inline-block mt-4 font-mono text-[10px] uppercase tracking-[0.2em] text-volt hover:text-cyan-300 transition-colors duration-200">
                                View papers
                            </a>
                        )}
                        {c.highlight && (
                            <span className="absolute top-4 right-4 font-mono text-[9px] uppercase tracking-[0.2em] text-volt border border-volt/50 rounded-full px-2.5 py-1">
                                Highlight
                            </span>
                        )}
                    </motion.div>
                ))}
            </div>
        </div>
    </section>
);

export default Certifications;
