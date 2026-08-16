import { motion } from "framer-motion";
import { ArrowSquareOut, DownloadSimple, FilePdf } from "@phosphor-icons/react";
import { PAPERS } from "../data/portfolio";

const Research = () => (
    <section id="research" data-testid="research-section" className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-28">
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.7 }} className="flex flex-wrap items-end justify-between gap-6 mb-14">
                <div>
                    <p className="font-mono text-xs uppercase tracking-[0.3em] text-volt mb-4">04 — Research</p>
                    <h2 className="font-sans font-black tracking-tight text-4xl sm:text-5xl text-zinc-50">Published papers.</h2>
                </div>
                <p className="font-mono text-xs uppercase tracking-[0.2em] text-zinc-500" data-testid="research-count">
                    Peer-reviewed / IJPREMS
                </p>
            </motion.div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6" data-testid="research-grid">
                {PAPERS.map((p, i) => (
                    <motion.article
                        key={p.slug}
                        initial={{ opacity: 0, y: 28 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-60px" }}
                        transition={{ duration: 0.55, delay: i * 0.12 }}
                        className="group relative bg-panel border border-volt/30 p-8 hover:border-volt hover:-translate-y-1 transition-[border-color,transform] duration-300 flex flex-col"
                        data-testid={`paper-card-${p.slug}`}
                    >
                        <div className="flex items-start justify-between gap-4 mb-5">
                            <div className="p-3 border border-volt/40 text-volt"><FilePdf size={26} /></div>
                            <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-volt border border-volt/40 rounded-full px-3 py-1">{p.date}</span>
                        </div>
                        <h3 className="font-sans font-bold text-xl text-zinc-50 leading-snug mb-3">{p.title}</h3>
                        <p className="font-mono text-[11px] uppercase tracking-[0.15em] text-volt mb-1" data-testid={`paper-authors-${p.slug}`}>{p.authors}</p>
                        <p className="text-xs text-zinc-500 mb-4">{p.journal}</p>
                        <p className="text-sm leading-relaxed text-zinc-400 flex-1">{p.abstract}</p>
                        <div className="flex flex-wrap items-center gap-3 mt-7">
                            <a
                                href={p.file}
                                target="_blank"
                                rel="noreferrer"
                                data-testid={`paper-read-${p.slug}`}
                                className="inline-flex items-center gap-2 rounded-full bg-volt px-5 py-2.5 text-xs font-sans font-bold text-obsidian volt-glow hover:bg-cyan-300 transition-colors duration-200"
                            >
                                Read Paper <ArrowSquareOut size={14} weight="bold" />
                            </a>
                            <a
                                href={p.file}
                                download
                                data-testid={`paper-download-${p.slug}`}
                                className="inline-flex items-center gap-2 rounded-full border border-white/15 px-5 py-2.5 text-xs font-sans font-bold text-zinc-300 hover:border-volt hover:text-volt transition-colors duration-200"
                            >
                                <DownloadSimple size={14} weight="bold" /> PDF
                            </a>
                            <a
                                href={p.doi}
                                target="_blank"
                                rel="noreferrer"
                                data-testid={`paper-doi-${p.slug}`}
                                className="font-mono text-[10px] uppercase tracking-[0.15em] text-zinc-500 hover:text-volt transition-colors duration-200"
                            >
                                {p.doi.replace("https://www.doi.org/", "DOI: ")}
                            </a>
                        </div>
                    </motion.article>
                ))}
            </div>
        </div>
    </section>
);

export default Research;
