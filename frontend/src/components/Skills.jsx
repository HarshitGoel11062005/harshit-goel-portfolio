import { motion } from "framer-motion";
import Marquee from "react-fast-marquee";
import { SKILL_GROUPS, SKILL_TICKER } from "../data/portfolio";

const Skills = () => (
    <section id="skills" data-testid="skills-section" className="border-t border-white/10">
        <div className="border-b border-white/10 py-5 overflow-hidden">
            <Marquee speed={45} gradient={false} data-testid="skills-marquee">
                {SKILL_TICKER.map((s) => (
                    <span key={s} className="mx-8 font-mono text-sm uppercase tracking-[0.25em] text-zinc-500">
                        {s} <span className="text-volt ml-8">/</span>
                    </span>
                ))}
            </Marquee>
        </div>
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-28">
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.7 }}>
                <p className="font-mono text-xs uppercase tracking-[0.3em] text-volt mb-4">02 — Skills</p>
                <h2 className="font-sans font-black tracking-tight text-4xl sm:text-5xl text-zinc-50 mb-14">The toolbox.</h2>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4" data-testid="skills-grid">
                {SKILL_GROUPS.map((g, i) => (
                    <motion.div
                        key={g.title}
                        initial={{ opacity: 0, y: 24 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-60px" }}
                        transition={{ duration: 0.55, delay: i * 0.08 }}
                        className={`bg-panel border border-white/10 p-7 hover:border-volt/50 transition-colors duration-300 ${g.span}`}
                        data-testid={`skill-group-${g.title.toLowerCase().replace(/[^a-z]+/g, "-")}`}
                    >
                        <h3 className="font-mono text-xs uppercase tracking-[0.25em] text-volt mb-5">{g.title}</h3>
                        <div className="flex flex-wrap gap-2">
                            {g.items.map((item) => (
                                <span key={item} className="rounded-full border border-white/15 px-4 py-1.5 text-sm text-zinc-300 hover:border-volt hover:text-volt transition-colors duration-200">
                                    {item}
                                </span>
                            ))}
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    </section>
);

export default Skills;
