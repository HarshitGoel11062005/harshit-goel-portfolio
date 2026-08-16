import { motion } from "framer-motion";
import { GraduationCap } from "@phosphor-icons/react";
import { EDUCATION } from "../data/portfolio";

const Education = () => (
    <section id="education" data-testid="education-section" className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-28 grid md:grid-cols-12 gap-10">
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.7 }} className="md:col-span-4">
                <p className="font-mono text-xs uppercase tracking-[0.3em] text-volt mb-4">05 — Education</p>
                <h2 className="font-sans font-black tracking-tight text-4xl sm:text-5xl text-zinc-50">The foundation.</h2>
            </motion.div>
            <div className="md:col-span-8 space-y-px bg-white/10 border border-white/10" data-testid="education-timeline">
                {EDUCATION.map((e, i) => (
                    <motion.div
                        key={e.degree}
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-60px" }}
                        transition={{ duration: 0.55, delay: i * 0.12 }}
                        className="bg-obsidian p-7 flex flex-wrap items-start gap-5 hover:bg-panel transition-colors duration-300"
                        data-testid={`education-item-${i}`}
                    >
                        <div className="p-3 border border-volt/40 text-volt"><GraduationCap size={24} /></div>
                        <div className="flex-1 min-w-[220px]">
                            <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-volt mb-1">{e.period}</p>
                            <h3 className="font-sans font-bold text-lg text-zinc-50">{e.degree}</h3>
                            <p className="text-sm text-zinc-400 mt-1">{e.institution}</p>
                        </div>
                        <span className="font-sans font-black text-xl text-volt">{e.score}</span>
                    </motion.div>
                ))}
            </div>
        </div>
    </section>
);

export default Education;
