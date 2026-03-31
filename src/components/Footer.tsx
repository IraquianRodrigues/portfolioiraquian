'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart, ArrowUp } from 'lucide-react';

const Footer = () => {
    const currentYear = new Date().getFullYear();
    const [showBackToTop, setShowBackToTop] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setShowBackToTop(window.scrollY > 600);
        };
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <>
            {/* CTA Section before footer */}
            <section className="py-20 px-4 bg-gradient-to-b from-orange-50 to-white dark:from-black dark:to-neutral-950 relative">
                <div className="section-divider absolute top-0 left-0 right-0" />
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                    viewport={{ once: true }}
                    className="max-w-2xl mx-auto text-center"
                >
                    <h3 className="text-3xl md:text-4xl font-bold mb-4 text-neutral-900 dark:text-white">
                        Vamos construir algo <span className="gradient-text">incrível</span> juntos?
                    </h3>
                    <p className="text-neutral-500 dark:text-neutral-400 mb-8 text-sm leading-relaxed">
                        Estou disponível para projetos de automação, desenvolvimento web e soluções com IA.
                    </p>
                    <motion.a
                        href="#contact"
                        whileHover={{ scale: 1.04 }}
                        whileTap={{ scale: 0.96 }}
                        className="button-primary text-base px-8 py-4"
                    >
                        Iniciar Conversa
                    </motion.a>
                </motion.div>
            </section>

            {/* Footer */}
            <footer className="bg-neutral-950 border-t border-neutral-800/50">
                <div className="container-custom section-padding py-16">
                    <div className="grid md:grid-cols-3 gap-10 mb-10">
                        {/* Brand */}
                        <motion.div
                            initial={{ opacity: 0, y: 16 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true }}
                            className="space-y-4"
                        >
                            <h3 className="text-xl font-bold">
                                <span className="gradient-text">IR</span>
                                <span className="text-neutral-600 font-normal ml-0.5">.</span>
                            </h3>
                            <p className="text-neutral-500 text-sm leading-relaxed">
                                Gestor de automação apaixonado por criar soluções inteligentes
                                com N8N e IA para escalar negócios digitais.
                            </p>
                        </motion.div>

                        {/* Quick Links */}
                        <motion.div
                            initial={{ opacity: 0, y: 16 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                            viewport={{ once: true }}
                            className="space-y-4"
                        >
                            <h4 className="text-xs font-semibold text-neutral-400 uppercase tracking-widest">
                                Navegação
                            </h4>
                            <ul className="space-y-2.5">
                                {[
                                    { name: 'Início', href: '#home' },
                                    { name: 'Sobre', href: '#about' },
                                    { name: 'Projetos', href: '#projects' },
                                    { name: 'Habilidades', href: '#skills' },
                                    { name: 'Contato', href: '#contact' },
                                ].map((link) => (
                                    <li key={link.name}>
                                        <a
                                            href={link.href}
                                            className="text-neutral-500 hover:text-orange-400 transition-colors text-sm"
                                        >
                                            {link.name}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>

                        {/* Contact Info */}
                        <motion.div
                            initial={{ opacity: 0, y: 16 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            viewport={{ once: true }}
                            className="space-y-4"
                        >
                            <h4 className="text-xs font-semibold text-neutral-400 uppercase tracking-widest">
                                Contato
                            </h4>
                            <div className="space-y-2.5 text-sm text-neutral-500">
                                <p className="hover:text-orange-400 transition-colors">
                                    <a href="mailto:iraquianrodrigues2025@gmail.com">
                                        iraquianrodrigues2025@gmail.com
                                    </a>
                                </p>
                                <p className="hover:text-orange-400 transition-colors">
                                    <a href="tel:+5584996735293">(84) 99673-5293</a>
                                </p>
                                <p>Areia Branca, RN - Brasil</p>
                            </div>
                        </motion.div>
                    </div>

                    {/* Bottom Bar */}
                    <div className="border-t border-neutral-800/50 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                        <p className="text-neutral-600 text-xs">
                            © {currentYear} Iraquian Rodrigues. Todos os direitos reservados.
                        </p>

                        <div className="flex items-center gap-1.5 text-neutral-600 text-xs">
                            <span>Feito com</span>
                            <Heart size={12} className="text-orange-500" fill="currentColor" />
                            <span>em React & Next.js</span>
                        </div>
                    </div>
                </div>
            </footer>

            {/* Back to Top */}
            <AnimatePresence>
                {showBackToTop && (
                    <motion.button
                        initial={{ opacity: 0, y: 20, scale: 0.8 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 20, scale: 0.8 }}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={scrollToTop}
                        className="fixed bottom-6 right-6 z-50 p-3 rounded-xl bg-orange-500 hover:bg-orange-600 text-white shadow-lg shadow-orange-500/25 transition-colors"
                        aria-label="Voltar ao topo"
                    >
                        <ArrowUp size={18} />
                    </motion.button>
                )}
            </AnimatePresence>
        </>
    );
};

export default Footer;
