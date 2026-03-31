'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Download, Github, Linkedin, Mail, ArrowDown, Sparkles } from 'lucide-react';

const TITLES = [
    'Gestor de Automação',
    'Especialista em N8N',
    'Desenvolvedor Full Stack',
    'Criador de Soluções com IA',
];

const Hero = () => {
    const [titleIndex, setTitleIndex] = useState(0);
    const [displayText, setDisplayText] = useState('');
    const [isDeleting, setIsDeleting] = useState(false);

    // Typing effect
    useEffect(() => {
        const currentTitle = TITLES[titleIndex];
        let timeout: NodeJS.Timeout;

        if (!isDeleting) {
            if (displayText.length < currentTitle.length) {
                timeout = setTimeout(() => {
                    setDisplayText(currentTitle.slice(0, displayText.length + 1));
                }, 60);
            } else {
                timeout = setTimeout(() => setIsDeleting(true), 2000);
            }
        } else {
            if (displayText.length > 0) {
                timeout = setTimeout(() => {
                    setDisplayText(currentTitle.slice(0, displayText.length - 1));
                }, 30);
            } else {
                setIsDeleting(false);
                setTitleIndex((prev) => (prev + 1) % TITLES.length);
            }
        }

        return () => clearTimeout(timeout);
    }, [displayText, isDeleting, titleIndex]);

    const socialLinks = [
        {
            name: 'GitHub',
            icon: Github,
            href: 'https://github.com/IraquianRodrigues',
        },
        {
            name: 'LinkedIn',
            icon: Linkedin,
            href: 'https://www.linkedin.com/in/iraquiamrodrigues',
        },
        {
            name: 'Email',
            icon: Mail,
            href: 'mailto:iraquianrodrigues@hotmail.com',
        },
    ];

    const containerAnim = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.12, delayChildren: 0.2 },
        },
    };

    const childAnim = {
        hidden: { opacity: 0, y: 32 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
    };

    return (
        <section id="home" className="relative overflow-hidden min-h-screen flex items-center justify-center section-padding pt-28">
            {/* Background Dot Grid */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
                <div
                    className="absolute inset-0 opacity-[0.04] dark:opacity-[0.06]"
                    style={{
                        backgroundImage: 'radial-gradient(circle, currentColor 1px, transparent 1px)',
                        backgroundSize: '32px 32px',
                    }}
                />
                {/* Radial glow */}
                <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-orange-400/8 dark:bg-orange-500/5 rounded-full blur-[120px]" />
                <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-orange-300/6 dark:bg-orange-600/4 rounded-full blur-[100px]" />
            </div>

            <motion.div
                variants={containerAnim}
                initial="hidden"
                animate="visible"
                className="container-custom text-center relative z-10 max-w-4xl mx-auto"
            >
                {/* Status Badge */}
                <motion.div variants={childAnim} className="flex justify-center mb-8">
                    <div className="section-badge" style={{ animation: 'glowPulse 3s ease-in-out infinite' }}>
                        <Sparkles size={14} />
                        <span>Disponível para projetos</span>
                    </div>
                </motion.div>

                {/* Name */}
                <motion.h1
                    variants={childAnim}
                    className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6"
                >
                    <span className="gradient-text">Iraquian</span>
                    <br className="sm:hidden" />
                    <span className="text-neutral-900 dark:text-white"> Rodrigues</span>
                </motion.h1>

                {/* Typing Title */}
                <motion.div variants={childAnim} className="h-10 mb-8 flex items-center justify-center">
                    <span className="text-xl md:text-2xl text-neutral-600 dark:text-neutral-400 font-medium">
                        {displayText}
                    </span>
                    <span
                        className="inline-block w-0.5 h-6 bg-orange-500 ml-1 rounded-full"
                        style={{ animation: 'blink 0.8s step-end infinite' }}
                    />
                </motion.div>

                {/* Description */}
                <motion.p
                    variants={childAnim}
                    className="text-base md:text-lg text-neutral-500 dark:text-neutral-400 mb-12 max-w-xl mx-auto leading-relaxed"
                >
                    Lidero projetos de automação inteligente com N8N e IA para captação de leads,
                    atendimento e eficiência operacional em negócios digitais.
                </motion.p>

                {/* CTA Buttons */}
                <motion.div variants={childAnim} className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-14">
                    <motion.a
                        href="#contact"
                        whileHover={{ scale: 1.04 }}
                        whileTap={{ scale: 0.96 }}
                        className="button-primary"
                    >
                        Entre em Contato
                    </motion.a>

                    <motion.a
                        href="/Iraquian_Rodrigues_CV.pdf%20(1).pdf"
                        download="Iraquian_Rodrigues_CV.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.04 }}
                        whileTap={{ scale: 0.96 }}
                        className="button-secondary"
                    >
                        <Download size={18} />
                        Baixar CV
                    </motion.a>
                </motion.div>

                {/* Social Links */}
                <motion.div variants={childAnim} className="flex justify-center items-center gap-3 mb-16">
                    {socialLinks.map((social) => (
                        <motion.a
                            key={social.name}
                            href={social.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.12, y: -3 }}
                            whileTap={{ scale: 0.9 }}
                            className="group relative p-3 rounded-xl bg-white/60 dark:bg-neutral-900/60 border border-orange-200/30 dark:border-neutral-800/50 text-neutral-500 dark:text-neutral-400 hover:text-orange-600 dark:hover:text-orange-400 hover:border-orange-300/50 dark:hover:border-orange-800/50 transition-all hover:shadow-md"
                            aria-label={social.name}
                        >
                            <social.icon size={20} />
                            {/* Tooltip */}
                            <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 px-2 py-0.5 text-xs font-medium bg-neutral-900 dark:bg-neutral-100 text-white dark:text-neutral-900 rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap">
                                {social.name}
                            </span>
                        </motion.a>
                    ))}
                </motion.div>
            </motion.div>

            {/* Scroll Indicator */}
            <motion.a
                href="#about"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2.5 }}
                className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-neutral-400 dark:text-neutral-600 hover:text-orange-500 dark:hover:text-orange-400 transition-colors"
                aria-label="Rolar para baixo"
            >
                <span className="text-xs font-medium uppercase tracking-widest">Scroll</span>
                <motion.div
                    animate={{ y: [0, 6, 0] }}
                    transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
                >
                    <ArrowDown size={16} />
                </motion.div>
            </motion.a>
        </section>
    );
};

export default Hero;
