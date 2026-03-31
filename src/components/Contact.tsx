'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, CheckCircle, MessageCircle } from 'lucide-react';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);

    const contactInfo = [
        {
            icon: Mail,
            title: 'Email',
            value: 'iraquianrodrigues2025@gmail.com',
            href: 'mailto:iraquianrodrigues2025@gmail.com'
        },
        {
            icon: Phone,
            title: 'Telefone',
            value: '+55 (84) 99673-5293',
            href: 'tel:+5584996735293'
        },
        {
            icon: MapPin,
            title: 'Localização',
            value: 'Areia Branca, RN - Brasil',
            href: '#'
        }
    ];

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            const response = await fetch("https://formsubmit.co/ajax/iraquianrodrigues2025@gmail.com", {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify({
                    name: formData.name,
                    email: formData.email,
                    subject: formData.subject,
                    message: formData.message,
                })
            });

            if (response.ok) {
                setIsSubmitting(false);
                setIsSubmitted(true);
                setFormData({ name: '', email: '', subject: '', message: '' });
                setTimeout(() => setIsSubmitted(false), 5000);
            } else {
                throw new Error("Erro ao enviar mensagem");
            }
        } catch (error) {
            console.error("Erro no envio do formulário:", error);
            setIsSubmitting(false);
            alert("Ocorreu um erro ao enviar a mensagem. Tente novamente mais tarde.");
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const containerAnim = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
    };

    const childAnim = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
    };

    return (
        <section id="contact" className="section-padding bg-orange-50 dark:bg-black relative">
            <div className="section-divider absolute top-0 left-0 right-0" />

            <div className="container-custom">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <div className="flex justify-center mb-4">
                        <span className="section-badge">Contato</span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">
                        Vamos <span className="gradient-text">Conversar</span>
                    </h2>
                    <p className="text-base text-neutral-500 dark:text-neutral-400 max-w-lg mx-auto">
                        Tem um projeto em mente? Entre em contato e vamos transformá-lo em realidade.
                    </p>
                </motion.div>

                <div className="grid lg:grid-cols-5 gap-10">
                    {/* Contact Information */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.7 }}
                        viewport={{ once: true }}
                        className="lg:col-span-2 space-y-6"
                    >
                        <div>
                            <h3 className="text-xl font-bold mb-3 text-neutral-900 dark:text-white">
                                Informações de Contato
                            </h3>
                            <p className="text-sm text-neutral-500 dark:text-neutral-400 leading-relaxed">
                                Estou sempre aberto a novas oportunidades e projetos interessantes.
                            </p>
                        </div>

                        {/* Contact Info Cards */}
                        <motion.div
                            variants={containerAnim}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            className="space-y-3"
                        >
                            {contactInfo.map((info) => (
                                <motion.a
                                    key={info.title}
                                    href={info.href}
                                    variants={childAnim}
                                    whileHover={{ x: 4 }}
                                    className="flex items-center p-4 card-premium group"
                                >
                                    <div className="p-2.5 bg-orange-100/80 dark:bg-orange-900/20 rounded-lg mr-4 group-hover:bg-orange-200/80 dark:group-hover:bg-orange-900/30 transition-colors">
                                        <info.icon className="text-orange-600 dark:text-orange-400" size={18} />
                                    </div>
                                    <div>
                                        <p className="text-xs text-neutral-400 uppercase tracking-wider font-semibold mb-0.5">
                                            {info.title}
                                        </p>
                                        <p className="text-sm font-medium text-neutral-700 dark:text-neutral-300">
                                            {info.value}
                                        </p>
                                    </div>
                                </motion.a>
                            ))}
                        </motion.div>

                        {/* WhatsApp CTA */}
                        <motion.a
                            href="https://wa.me/5584996735293?text=Olá%20Iraquian!%20Vi%20seu%20portfólio%20e%20gostaria%20de%20conversar."
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            className="flex items-center justify-center gap-2 w-full py-3.5 px-6 rounded-xl bg-[#25D366] hover:bg-[#20BD5A] text-white font-semibold text-sm transition-all hover:shadow-lg hover:shadow-[#25D366]/20"
                        >
                            <MessageCircle size={18} />
                            Chamar no WhatsApp
                        </motion.a>

                        {/* Social Links */}
                        <div>
                            <p className="text-xs text-neutral-400 uppercase tracking-wider font-semibold mb-3">Redes Sociais</p>
                            <div className="flex gap-2">
                                <motion.a
                                    href="https://github.com/IraquianRodrigues"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    whileHover={{ scale: 1.08, y: -2 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="p-3 rounded-xl bg-white dark:bg-neutral-900 border border-orange-200/30 dark:border-neutral-800/50 text-neutral-600 dark:text-neutral-400 hover:text-orange-600 dark:hover:text-orange-400 hover:border-orange-300/50 transition-all hover:shadow-md"
                                    aria-label="GitHub"
                                >
                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                                    </svg>
                                </motion.a>

                                <motion.a
                                    href="https://www.linkedin.com/in/iraquiamrodrigues"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    whileHover={{ scale: 1.08, y: -2 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="p-3 rounded-xl bg-white dark:bg-neutral-900 border border-orange-200/30 dark:border-neutral-800/50 text-neutral-600 dark:text-neutral-400 hover:text-orange-600 dark:hover:text-orange-400 hover:border-orange-300/50 transition-all hover:shadow-md"
                                    aria-label="LinkedIn"
                                >
                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                                    </svg>
                                </motion.a>
                            </div>
                        </div>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.7 }}
                        viewport={{ once: true }}
                        className="lg:col-span-3"
                    >
                        <div className="card-premium p-6 md:p-8">
                            <h3 className="text-lg font-bold mb-6 text-neutral-900 dark:text-white">Envie uma Mensagem</h3>

                            {isSubmitted && (
                                <motion.div
                                    initial={{ opacity: 0, y: -8 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className="mb-6 p-4 bg-emerald-50 dark:bg-emerald-900/20 text-emerald-700 dark:text-emerald-300 rounded-xl flex items-center gap-3 border border-emerald-200/50 dark:border-emerald-800/30"
                                >
                                    <CheckCircle size={18} />
                                    <span className="text-sm font-medium">Mensagem enviada com sucesso! Entrarei em contato em breve.</span>
                                </motion.div>
                            )}

                            <form onSubmit={handleSubmit} className="space-y-5">
                                <div className="grid md:grid-cols-2 gap-5">
                                    <div>
                                        <label htmlFor="name" className="block text-xs font-semibold text-neutral-500 dark:text-neutral-400 uppercase tracking-wider mb-2">
                                            Nome *
                                        </label>
                                        <input
                                            type="text"
                                            id="name"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            required
                                            className="w-full px-4 py-3 text-sm border border-neutral-200 dark:border-neutral-800 rounded-xl focus:ring-2 focus:ring-orange-500/30 focus:border-orange-500 bg-neutral-50 dark:bg-neutral-900/50 text-neutral-900 dark:text-neutral-100 transition-all outline-none placeholder:text-neutral-400"
                                            placeholder="Seu nome"
                                        />
                                    </div>

                                    <div>
                                        <label htmlFor="email" className="block text-xs font-semibold text-neutral-500 dark:text-neutral-400 uppercase tracking-wider mb-2">
                                            Email *
                                        </label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            required
                                            className="w-full px-4 py-3 text-sm border border-neutral-200 dark:border-neutral-800 rounded-xl focus:ring-2 focus:ring-orange-500/30 focus:border-orange-500 bg-neutral-50 dark:bg-neutral-900/50 text-neutral-900 dark:text-neutral-100 transition-all outline-none placeholder:text-neutral-400"
                                            placeholder="seu@email.com"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label htmlFor="subject" className="block text-xs font-semibold text-neutral-500 dark:text-neutral-400 uppercase tracking-wider mb-2">
                                        Assunto *
                                    </label>
                                    <input
                                        type="text"
                                        id="subject"
                                        name="subject"
                                        value={formData.subject}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-3 text-sm border border-neutral-200 dark:border-neutral-800 rounded-xl focus:ring-2 focus:ring-orange-500/30 focus:border-orange-500 bg-neutral-50 dark:bg-neutral-900/50 text-neutral-900 dark:text-neutral-100 transition-all outline-none placeholder:text-neutral-400"
                                        placeholder="Assunto da mensagem"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="message" className="block text-xs font-semibold text-neutral-500 dark:text-neutral-400 uppercase tracking-wider mb-2">
                                        Mensagem *
                                    </label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        required
                                        rows={5}
                                        className="w-full px-4 py-3 text-sm border border-neutral-200 dark:border-neutral-800 rounded-xl focus:ring-2 focus:ring-orange-500/30 focus:border-orange-500 bg-neutral-50 dark:bg-neutral-900/50 text-neutral-900 dark:text-neutral-100 transition-all outline-none resize-none placeholder:text-neutral-400"
                                        placeholder="Conte-me sobre seu projeto..."
                                    />
                                </div>

                                <motion.button
                                    type="submit"
                                    disabled={isSubmitting}
                                    whileHover={{ scale: 1.01 }}
                                    whileTap={{ scale: 0.99 }}
                                    className="button-primary w-full disabled:opacity-50 disabled:cursor-not-allowed"
                                >
                                    {isSubmitting ? (
                                        <>
                                            <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                                            Enviando...
                                        </>
                                    ) : (
                                        <>
                                            <Send size={16} />
                                            Enviar Mensagem
                                        </>
                                    )}
                                </motion.button>
                            </form>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
