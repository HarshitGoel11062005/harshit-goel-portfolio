import { motion } from "framer-motion";
import { DownloadSimple, GithubLogo } from "@phosphor-icons/react";
import { PROJECTS } from "../data/portfolio";

const ProjectCard = ({ p, i }) => (
    <motion.article
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.55, delay: (i % 3) * 0.1 }}
        className="group bg-panel border border-white/10 overflow-hidden hover:border-volt/50 hover:-translate-y-1 transition-[border-color,transform] duration-300 flex flex-col"
        data-testid={`project-card-${p.slug}`}
    >
        <div className="relative h-44 overflow-hidden">
            <img src={p.image} alt={p.title} loading="lazy" className="w-full h-full object-cover opacity-70 group-hover:opacity-100 group-hover:scale-105 transition-[opacity,transform] duration-500" />
            <span className={`absolute top-3 left-3 font-mono text-[10px] uppercase tracking-[0.2em] px-3 py-1 rounded-full ${p.type === "Power BI" ? "bg-volt text-obsidian" : "bg-royal text-white"}`}>
                {p.type}
            </span>
        </div>
        <div className="p-6 flex flex-col flex-1">
            <h3 className="font-sans font-bold text-xl text-zinc-50 mb-2">{p.title}</h3>
            <p className="text-sm leading-relaxed text-zinc-400 flex-1">{p.description}</p>
            <div className="flex flex-wrap gap-2 mt-4">
                {p.tech.map((t) => (
                    <span key={t} className="font-mono text-[10px] uppercase tracking-[0.15em] text-zinc-500 border border-white/10 rounded-full px-3 py-1">{t}</span>
                ))}
            </div>
            <div className="flex items-center gap-3 mt-6">
                <a
                    href={p.file}
                    download
                    data-testid={`project-download-${p.slug}`}
                    className="inline-flex items-center gap-2 rounded-full border border-volt/60 px-4 py-2 text-xs font-sans font-bold text-volt hover:bg-volt hover:text-obsidian transition-colors duration-200"
                >
                    <DownloadSimple size={14} weight="bold" /> {p.fileLabel}
                </a>
                {p.github && (
                    <a href={p.github} target="_blank" rel="noreferrer" data-testid={`project-github-${p.slug}`} className="inline-flex items-center gap-2 rounded-full border border-white/15 px-4 py-2 text-xs font-sans font-bold text-zinc-300 hover:border-volt hover:text-volt transition-colors duration-200">
                        <GithubLogo size={14} /> GitHub
                    </a>
                )}
            </div>
        </div>
    </motion.article>
);

const Projects = () => (
    <section id="projects" data-testid="projects-section" className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-28">
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.7 }} className="flex flex-wrap items-end justify-between gap-6 mb-14">
                <div>
                    <p className="font-mono text-xs uppercase tracking-[0.3em] text-volt mb-4">03 — Projects</p>
                    <h2 className="font-sans font-black tracking-tight text-4xl sm:text-5xl text-zinc-50">Selected work.</h2>
                </div>
                <p className="font-mono text-xs uppercase tracking-[0.2em] text-zinc-500" data-testid="projects-count">
                    5 Power BI dashboards / 3 ML notebooks
                </p>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {PROJECTS.map((p, i) => (
                    <ProjectCard key={p.slug} p={p} i={i} />
                ))}
            </div>
        </div>
    </section>
);

export default Projects;
