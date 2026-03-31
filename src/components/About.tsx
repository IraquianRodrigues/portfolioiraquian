'use client';

import { motion, useInView } from 'framer-motion';
import Image from 'next/image';
import { Code, Coffee, Heart, Target } from 'lucide-react';
import { useRef, useEffect, useState } from 'react';

// Count-up animation hook
function useCountUp(end: number, duration: number = 2000, startOnView: boolean = true) {
    const [count, setCount] = useState(0);
    const ref = useRef<HTMLDivElement>(null);
    const isInView = useInView(ref, { once: true });

    useEffect(() => {
        if (!startOnView || !isInView) return;
        let start = 0;
        const increment = end / (duration / 16);
        const timer = setInterval(() => {
            start += increment;
            if (start >= end) {
                setCount(end);
                clearInterval(timer);
            } else {
                setCount(Math.floor(start));
            }
        }, 16);
        return () => clearInterval(timer);
    }, [end, duration, startOnView, isInView]);

    return { count, ref };
}

const About = () => {
    const interests = [
        {
            icon: Code,
            title: 'Desenvolvimento',
            description: 'Soluções inovadoras com código limpo e performático'
        },
        {
            icon: Coffee,
            title: 'Café & Foco',
            description: 'Combustível para sessões intensivas de programação'
        },
        {
            icon: Heart,
            title: 'Família',
            description: 'A motivação para evoluir constantemente'
        },
        {
            icon: Target,
            title: 'Objetivos',
            description: 'Sempre buscando novos desafios e aprendizados'
        }
    ];

    const stats = [
        { value: 2, suffix: '+', label: 'Anos de Experiência' },
        { value: 2, suffix: '+', label: 'Projetos Entregues' },
        { value: 3, suffix: '', label: 'Automações Criadas' },
    ];

    const containerAnim = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
    };

    const childAnim = {
        hidden: { opacity: 0, y: 24 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
    };

    return (
        <section id="about" className="section-padding bg-orange-50 dark:bg-black relative">
            {/* Top divider */}
            <div className="section-divider absolute top-0 left-0 right-0" />

            <div className="container-custom">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <div className="flex justify-center mb-4">
                        <span className="section-badge">Quem sou eu</span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">
                        Sobre <span className="gradient-text">Mim</span>
                    </h2>
                    <p className="text-base text-neutral-500 dark:text-neutral-400 max-w-lg mx-auto">
                        Gestor de automação com foco em N8N e inteligência artificial
                    </p>
                </motion.div>

                {/* Main Content: Photo + Text */}
                <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
                    {/* Photo Collage */}
                    <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                        viewport={{ once: true }}
                        className="relative flex justify-center"
                    >
                        <div className="relative w-full max-w-md">
                            {/* Main Portrait Photo */}
                            <motion.div
                                whileHover={{ scale: 1.02 }}
                                transition={{ duration: 0.4 }}
                                className="relative z-10 rounded-2xl overflow-hidden border-2 border-orange-200/30 dark:border-neutral-800"
                                style={{ aspectRatio: '3/4', boxShadow: 'var(--shadow-xl)' }}
                            >
                                <Image
                                    src="/foto 2.jpeg"
                                    alt="Iraquian Rodrigues"
                                    fill
                                    className="object-cover object-top"
                                    sizes="(max-width: 768px) 100vw, 400px"
                                    priority
                                />
                                {/* Gradient Overlay at bottom */}
                                <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-black/60 to-transparent" />
                                <div className="absolute bottom-5 left-5 right-5">
                                    <p className="text-white text-sm font-semibold tracking-wide">
                                        Iraquian Rodrigues
                                    </p>
                                    <p className="text-orange-300 text-xs tracking-wider mt-0.5">
                                        Gestor de Automação & Dev
                                    </p>
                                </div>
                            </motion.div>

                            {/* Floating Action Photo */}
                            <motion.div
                                initial={{ opacity: 0, scale: 0.85, y: 20 }}
                                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.4 }}
                                viewport={{ once: true }}
                                whileHover={{ scale: 1.04, rotate: -1 }}
                                className="absolute -bottom-6 -right-4 lg:-right-6 z-20 w-44 h-32 md:w-52 md:h-38 rounded-xl overflow-hidden border-2 border-white dark:border-neutral-800"
                                style={{ boxShadow: 'var(--shadow-lg)' }}
                            >
                                <Image
                                    src="/foto.jpeg"
                                    alt="Iraquian codando"
                                    fill
                                    className="object-cover"
                                    sizes="208px"
                                />
                            </motion.div>

                            {/* Decorative Elements */}
                            <motion.div
                                animate={{ rotate: 360 }}
                                transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
                                className="absolute -top-6 -left-6 w-20 h-20 border border-orange-300/20 dark:border-orange-500/10 rounded-full"
                            />
                            <div className="absolute -bottom-3 -left-3 w-28 h-28 bg-gradient-to-br from-orange-200/30 to-orange-400/10 dark:from-orange-500/8 dark:to-transparent rounded-full blur-2xl" />
                            <div className="absolute top-1/4 -right-4 w-2 h-2 bg-orange-400 rounded-full" style={{ animation: 'glowPulse 2s ease-in-out infinite' }} />
                        </div>
                    </motion.div>

                    {/* Text Content */}
                    <motion.div
                        initial={{ opacity: 0, x: 40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                        viewport={{ once: true }}
                        className="space-y-5"
                    >
                        <h3 className="text-2xl font-bold text-neutral-900 dark:text-white">
                            Transformando processos em resultados
                        </h3>

                        <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed">
                            Sou gestor de automação e especialista em N8N, com atuação prática na criação de fluxos inteligentes para captação de leads, atendimento e operação comercial. Desenvolvimento dashboards e plataformas modernas com React, Next.js, Node.js e Tailwind para entregar processos escaláveis, rápidos e orientados a resultado.
                        </p>

                        <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed">
                            Atualmente, meu foco é transformar processos manuais em operações automatizadas, conectando sistemas com N8N e IA para aumentar produtividade, previsibilidade e performance de negócio.
                        </p>

                        <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed">
                            Quando não estou codando, você me encontra explorando novas tecnologias,
                            contribuindo para projetos open source ou compartilhando conhecimento
                            com a comunidade.
                        </p>

                        {/* Quick Stats */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                            viewport={{ once: true }}
                            className="flex gap-6 pt-6 border-t border-orange-200/30 dark:border-neutral-800"
                        >
                            {stats.map((stat) => {
                                const { count, ref } = useCountUp(stat.value);
                                return (
                                    <div key={stat.label} ref={ref} className="text-center">
                                        <p className="text-3xl font-bold gradient-text">
                                            {count}{stat.suffix}
                                        </p>
                                        <p className="text-xs text-neutral-500 mt-1.5 leading-tight">
                                            {stat.label}
                                        </p>
                                    </div>
                                );
                            })}
                        </motion.div>
                    </motion.div>
                </div>

                {/* Interests Grid */}
                <motion.div
                    variants={containerAnim}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="grid grid-cols-2 lg:grid-cols-4 gap-4"
                >
                    {interests.map((interest) => (
                        <motion.div
                            key={interest.title}
                            variants={childAnim}
                            whileHover={{ y: -6 }}
                            className="card-premium p-6 group cursor-default"
                        >
                            <div className="flex items-center gap-3 mb-3">
                                <div className="p-2.5 bg-orange-100/80 dark:bg-orange-900/20 rounded-lg group-hover:bg-orange-200/80 dark:group-hover:bg-orange-900/30 transition-colors">
                                    <interest.icon className="text-orange-600 dark:text-orange-400" size={20} />
                                </div>
                                <h4 className="font-semibold text-sm text-neutral-900 dark:text-neutral-100">
                                    {interest.title}
                                </h4>
                            </div>
                            <p className="text-xs text-neutral-500 dark:text-neutral-400 leading-relaxed">
                                {interest.description}
                            </p>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default About;
