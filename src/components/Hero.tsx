'use client';

import { motion } from 'framer-motion';
import { Download, Github, Linkedin, Mail } from 'lucide-react';

const Hero = () => {
    const particles = [
        { left: '8%', top: '15%', size: 8, duration: 7, delay: 0, color: 'bg-orange-500/40' },
        { left: '18%', top: '75%', size: 6, duration: 9, delay: 1, color: 'bg-black/30 dark:bg-orange-400/30' },
        { left: '30%', top: '25%', size: 10, duration: 8, delay: 0.5, color: 'bg-orange-400/35' },
        { left: '42%', top: '65%', size: 7, duration: 10, delay: 1.5, color: 'bg-black/25 dark:bg-orange-300/25' },
        { left: '56%', top: '18%', size: 9, duration: 7.5, delay: 0.8, color: 'bg-orange-500/45' },
        { left: '67%', top: '72%', size: 6, duration: 9.5, delay: 2.2, color: 'bg-black/30 dark:bg-orange-400/30' },
        { left: '78%', top: '35%', size: 8, duration: 8.5, delay: 1.1, color: 'bg-orange-400/35' },
        { left: '88%', top: '80%', size: 11, duration: 10.5, delay: 0.2, color: 'bg-black/25 dark:bg-orange-300/25' }
    ];

    const socialLinks = [
        {
            name: 'GitHub',
            icon: Github,
            href: 'https://github.com/IraquianRodrigues',
            color: 'hover:text-gray-700 dark:hover:text-gray-300'
        },
        {
            name: 'LinkedIn',
            icon: Linkedin,
            href: 'https://www.linkedin.com/in/iraquiamrodrigues',
            color: 'hover:text-blue-600'
        },
        {
            name: 'Email',
            icon: Mail,
            href: 'mailto:iraquianrodrigues@hotmail.com',
            color: 'hover:text-red-600'
        }
    ];

    return (
        <section id="home" className="relative overflow-hidden min-h-screen flex items-center justify-center section-padding pt-20">
            <div className="absolute inset-0 pointer-events-none">
                {particles.map((particle, index) => (
                    <motion.span
                        key={index}
                        className={`absolute rounded-full ${particle.color}`}
                        style={{
                            left: particle.left,
                            top: particle.top,
                            width: particle.size,
                            height: particle.size
                        }}
                        animate={{ y: [0, -28, 0], x: [0, 10, -10, 0], opacity: [0.2, 0.8, 0.2] }}
                        transition={{ duration: particle.duration, delay: particle.delay, repeat: Infinity, ease: 'easeInOut' }}
                    />
                ))}
            </div>
            <div className="container-custom text-center relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="max-w-4xl mx-auto"
                >
                    {/* Greeting */}
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className="text-lg text-gray-600 dark:text-gray-400 mb-4"
                    >
                        Olá, eu sou
                    </motion.p>

                    {/* Name */}
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                        className="text-5xl md:text-7xl font-bold mb-6"
                    >
                        <span className="gradient-text">Iraquian Rodrigues</span>
                    </motion.h1>

                    {/* Title */}
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6 }}
                        className="text-2xl md:text-3xl text-gray-700 dark:text-gray-300 mb-8"
                    >
                        Gestor de Automação e Especialista em N8N
                    </motion.h2>

                    {/* Description */}
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.8 }}
                        className="text-lg text-gray-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed"
                    >
                        Lidero projetos de automação inteligente com N8N e IA para captação de leads,
                        atendimento e eficiência operacional em negócios digitais.
                    </motion.p>

                    {/* CTA Buttons */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1 }}
                        className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
                    >
                        <motion.a
                            href="#contact"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="button-primary flex items-center gap-2"
                        >
                            Entre em Contato
                        </motion.a>

                        <motion.a
                            href="/Iraquian_Rodrigues_CV.pdf%20(1).pdf"
                            download="Iraquian_Rodrigues_CV.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="button-secondary flex items-center gap-2"
                        >
                            <Download size={20} />
                            Baixar CV
                        </motion.a>
                    </motion.div>

                    {/* Social Links */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1.2 }}
                        className="flex justify-center items-center space-x-6 mb-20"
                    >
                        {socialLinks.map((social, index) => (
                            <motion.a
                                key={social.name}
                                href={social.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                whileHover={{ scale: 1.2, y: -2 }}
                                whileTap={{ scale: 0.9 }}
                                transition={{ delay: 1.4 + index * 0.1 }}
                                className={`p-3 rounded-full bg-gray-100 dark:bg-gray-800 transition-colors ${social.color}`}
                            >
                                <social.icon size={24} />
                            </motion.a>
                        ))}
                    </motion.div>
                </motion.div>

                {/* Scroll Indicator */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 2 }}
                    className="absolute bottom-6 left-1/2 transform -translate-x-1/2"
                >
                    <motion.div
                        animate={{ y: [0, 10, 0] }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className="w-6 h-10 border-2 border-gray-400 dark:border-gray-600 rounded-full flex justify-center"
                    >
                        <motion.div
                            animate={{ y: [0, 12, 0] }}
                            transition={{ duration: 2, repeat: Infinity }}
                            className="w-1 h-3 bg-gray-400 dark:bg-gray-600 rounded-full mt-2"
                        />
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero; 
