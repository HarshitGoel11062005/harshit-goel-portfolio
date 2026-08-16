import { motion } from "framer-motion";

const About = () => (
    <section id="about" data-testid="about-section" className="relative border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-28 grid md:grid-cols-12 gap-10">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.7 }}
                className="md:col-span-4"
            >
                <p className="font-mono text-xs uppercase tracking-[0.3em] text-volt mb-4">01 — About</p>
                <h2 className="font-sans font-black tracking-tight text-4xl sm:text-5xl text-zinc-50">
                    Data in,<br />insight out.
                </h2>
            </motion.div>
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.7, delay: 0.15 }}
                className="md:col-span-8 space-y-6 text-base sm:text-lg leading-relaxed text-zinc-400"
                data-testid="about-text"
            >
                <p>
                    I'm a data analyst with hands-on experience across <span className="text-zinc-100">SQL, Power BI and Python</span>,
                    focused on turning raw data into actionable business insight. I've built analytics and machine
                    learning projects across sports, entertainment, energy and financial fraud — working with datasets
                    from thousands to <span className="text-zinc-100">500,000+ records</span>.
                </p>
                <p>
                    My toolkit spans data cleaning, exploratory analysis, statistical modeling and interactive
                    dashboard development. I've also authored <span className="text-zinc-100">three peer-reviewed research papers</span> in
                    AI and ML, and I'm currently pursuing a B.Tech in Artificial Intelligence &amp; Data Science
                    with a <span className="text-volt font-medium">9.33 CGPA</span>.
                </p>
            </motion.div>
        </div>
    </section>
);

export default About;
