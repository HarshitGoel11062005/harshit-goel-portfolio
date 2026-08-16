import { useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import { toast } from "sonner";
import { EnvelopeSimple, MapPin, PaperPlaneTilt, Phone } from "@phosphor-icons/react";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Textarea } from "../components/ui/textarea";
import { CONTACT, SOCIALS } from "../data/portfolio";

const API = `${process.env.REACT_APP_BACKEND_URL}/api`;

const Contact = () => {
    const [form, setForm] = useState({ name: "", email: "", message: "" });
    const [sending, setSending] = useState(false);

    const submit = async (e) => {
        e.preventDefault();
        setSending(true);
        try {
            await axios.post(`${API}/contact`, form);
            toast.success("Message sent — Harshit will get back to you soon.");
            setForm({ name: "", email: "", message: "" });
        } catch {
            toast.error("Could not send your message. Please try again or email directly.");
        } finally {
            setSending(false);
        }
    };

    return (
        <section id="contact" data-testid="contact-section" className="border-t border-white/10">
            <div className="max-w-7xl mx-auto px-6 lg:px-12 py-28 grid lg:grid-cols-2 gap-16">
                <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.7 }}>
                    <p className="font-mono text-xs uppercase tracking-[0.3em] text-volt mb-4">07 — Contact</p>
                    <h2 className="font-sans font-black tracking-tight text-5xl sm:text-6xl text-zinc-50 leading-[0.95]">
                        Let's<br />talk<span className="text-volt">.</span>
                    </h2>
                    <p className="mt-6 max-w-md text-base leading-relaxed text-zinc-400">
                        Open to data analyst and ML internships, freelance dashboard work and research
                        collaborations. Drop a message — I usually reply within a day.
                    </p>
                    <div className="mt-10 space-y-4" data-testid="contact-details">
                        <a href={SOCIALS.email} data-testid="contact-email-link" className="flex items-center gap-4 text-zinc-300 hover:text-volt transition-colors duration-200">
                            <EnvelopeSimple size={20} className="text-volt" /> {CONTACT.email}
                        </a>
                        <a href={SOCIALS.phone} data-testid="contact-phone-link" className="flex items-center gap-4 text-zinc-300 hover:text-volt transition-colors duration-200">
                            <Phone size={20} className="text-volt" /> {CONTACT.phone}
                        </a>
                        <div className="flex items-center gap-4 text-zinc-300" data-testid="contact-location">
                            <MapPin size={20} className="text-volt" /> {CONTACT.location}
                        </div>
                    </div>
                </motion.div>

                <motion.form
                    onSubmit={submit}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-80px" }}
                    transition={{ duration: 0.7, delay: 0.15 }}
                    className="bg-panel border border-white/10 p-8 space-y-5"
                    data-testid="contact-form"
                >
                    <div>
                        <label htmlFor="contact-name" className="font-mono text-[11px] uppercase tracking-[0.2em] text-zinc-500 block mb-2">Name</label>
                        <Input id="contact-name" data-testid="contact-name-input" required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} placeholder="Your name" className="bg-obsidian border-white/15 text-zinc-100 focus-visible:ring-volt" />
                    </div>
                    <div>
                        <label htmlFor="contact-email" className="font-mono text-[11px] uppercase tracking-[0.2em] text-zinc-500 block mb-2">Email</label>
                        <Input id="contact-email" type="email" data-testid="contact-email-input" required value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} placeholder="you@company.com" className="bg-obsidian border-white/15 text-zinc-100 focus-visible:ring-volt" />
                    </div>
                    <div>
                        <label htmlFor="contact-message" className="font-mono text-[11px] uppercase tracking-[0.2em] text-zinc-500 block mb-2">Message</label>
                        <Textarea id="contact-message" data-testid="contact-message-input" required rows={5} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} placeholder="Tell me about the opportunity..." className="bg-obsidian border-white/15 text-zinc-100 focus-visible:ring-volt" />
                    </div>
                    <Button type="submit" disabled={sending} data-testid="contact-submit-button" className="w-full rounded-full bg-volt text-obsidian font-sans font-bold hover:bg-cyan-300 volt-glow">
                        {sending ? "Sending..." : "Send Message"} <PaperPlaneTilt size={16} weight="bold" className="ml-2" />
                    </Button>
                </motion.form>
            </div>
        </section>
    );
};

export default Contact;
