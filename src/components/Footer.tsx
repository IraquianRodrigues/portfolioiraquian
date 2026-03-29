'use client';

import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-black text-white">
            <div className="container-custom section-padding">
                <div className="grid md:grid-cols-3 gap-8 mb-8">
                    {/* Brand */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="space-y-4"
                    >
                        <h3 className="text-2xl font-bold gradient-text">Iraquian Rodrigues</h3>
                        <p className="text-neutral-400 leading-relaxed">
                            Desenvolvedor Full Stack apaixonado por criar experiências digitais
                            incríveis e soluções inovadoras.
                        </p>
                    </motion.div>

                    {/* Quick Links */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="space-y-4"
                    >
                        <h4 className="text-lg font-semibold">Links Rápidos</h4>
                        <ul className="space-y-2">
                            <li>
                                <a href="#home" className="text-neutral-400 hover:text-orange-400 transition-colors">
                                    Início
                                </a>
                            </li>
                            <li>
                                <a href="#about" className="text-neutral-400 hover:text-orange-400 transition-colors">
                                    Sobre
                                </a>
                            </li>
                            <li>
                                <a href="#projects" className="text-neutral-400 hover:text-orange-400 transition-colors">
                                    Projetos
                                </a>
                            </li>
                            <li>
                                <a href="#skills" className="text-neutral-400 hover:text-orange-400 transition-colors">
                                    Habilidades
                                </a>
                            </li>
                            <li>
                                <a href="#contact" className="text-neutral-400 hover:text-orange-400 transition-colors">
                                    Contato
                                </a>
                            </li>
                        </ul>
                    </motion.div>

                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        viewport={{ once: true }}
                        className="space-y-4"
                    >
                        <h4 className="text-lg font-semibold">Contato</h4>
                        <div className="space-y-2 text-neutral-400">
                            <p>iraquianrodrigues2025@gmail.com</p>
                            <p>(84) 99673-5293</p>
                            <p>Areia Branca, RN - Brasil</p>
                        </div>
                    </motion.div>
                </div>

                {/* Bottom Bar */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    viewport={{ once: true }}
                    className="border-t border-neutral-800 pt-8 flex flex-col md:flex-row justify-between items-center"
                >
                    <p className="text-neutral-400 text-sm">
                        © {currentYear} Iraquian Rodrigues. Todos os direitos reservados.
                    </p>

                    <div className="flex items-center gap-2 text-neutral-400 text-sm mt-4 md:mt-0">
                        <span>Feito com</span>
                        <Heart size={16} className="text-orange-500" />
                        <span>em React & Next.js</span>
                    </div>
                </motion.div>
            </div>
        </footer>
    );
};

export default Footer; 
