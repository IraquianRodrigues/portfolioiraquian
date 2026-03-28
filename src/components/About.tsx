'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Code, Coffee, Heart, Target } from 'lucide-react';

const About = () => {
    const interests = [
        {
            icon: Code,
            title: 'Desenvolvimento',
            description: 'Apaixonado por criar soluções inovadoras e código limpo'
        },
        {
            icon: Coffee,
            title: 'Café',
            description: 'O combustível essencial para qualquer programador'
        },
        {
            icon: Heart,
            title: 'Família',
            description: 'O que me motiva a ser melhor todos os dias'
        },
        {
            icon: Target,
            title: 'Objetivos',
            description: 'Sempre buscando novos desafios e aprendizados'
        }
    ];

    return (
        <section id="about" className="section-padding bg-orange-50 dark:bg-black">
            <div className="container-custom">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl font-bold mb-4">
                        Sobre <span className="gradient-text">Mim</span>
                    </h2>
                    <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                        Gestor de automação com foco em N8N e inteligência artificial
                    </p>
                </motion.div>

                {/* Main Content: Photo + Text */}
                <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
                    {/* Photo Collage */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="relative flex justify-center"
                    >
                        <div className="relative w-full max-w-md">
                            {/* Main Portrait Photo */}
                            <motion.div
                                whileHover={{ scale: 1.02 }}
                                transition={{ duration: 0.3 }}
                                className="relative z-10 rounded-2xl overflow-hidden shadow-2xl border-4 border-white dark:border-neutral-800"
                                style={{ aspectRatio: '3/4' }}
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
                                <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-black/50 to-transparent" />
                                <div className="absolute bottom-4 left-4 right-4">
                                    <p className="text-white text-sm font-medium tracking-wide uppercase opacity-90">
                                        Iraquian Rodrigues
                                    </p>
                                    <p className="text-orange-300 text-xs tracking-wider">
                                        Gestor de Automação & Dev
                                    </p>
                                </div>
                            </motion.div>

                            {/* Floating Action Photo - overlapping bottom-right */}
                            <motion.div
                                initial={{ opacity: 0, scale: 0.8, y: 20 }}
                                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.4 }}
                                viewport={{ once: true }}
                                whileHover={{ scale: 1.05, rotate: -1 }}
                                className="absolute -bottom-8 -right-4 lg:-right-8 z-20 w-48 h-36 md:w-56 md:h-40 rounded-xl overflow-hidden shadow-xl border-4 border-white dark:border-neutral-800"
                            >
                                <Image
                                    src="/foto.jpeg"
                                    alt="Iraquian codando"
                                    fill
                                    className="object-cover"
                                    sizes="224px"
                                />
                                {/* Subtle gradient */}
                                <div className="absolute inset-0 bg-gradient-to-tr from-orange-500/10 to-transparent" />
                            </motion.div>

                            {/* Decorative Elements */}
                            <motion.div
                                animate={{ rotate: 360 }}
                                transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                                className="absolute -top-6 -left-6 w-24 h-24 border-2 border-orange-300/30 dark:border-orange-500/20 rounded-full"
                            />
                            <motion.div
                                animate={{ rotate: -360 }}
                                transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
                                className="absolute -top-3 -left-3 w-16 h-16 border-2 border-dashed border-orange-400/20 dark:border-orange-400/15 rounded-full"
                            />
                            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-gradient-to-br from-orange-200/40 to-orange-400/20 dark:from-orange-500/10 dark:to-orange-700/5 rounded-full blur-xl" />
                            <div className="absolute top-1/4 -right-6 w-3 h-3 bg-orange-400 rounded-full animate-pulse" />
                            <div className="absolute top-1/2 -left-4 w-2 h-2 bg-orange-300 rounded-full animate-pulse" style={{ animationDelay: '1s' }} />
                        </div>
                    </motion.div>

                    {/* Text Content */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="space-y-6"
                    >
                        <h3 className="text-2xl font-semibold mb-4">
                            Olá! 👋
                        </h3>

                        <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                            Sou gestor de automação e especialista em N8N, com atuação prática na criação de fluxos inteligentes para captação de leads, atendimento e operação comercial. Desenvolvimento dashboards e plataformas modernas com React, Next.js, Node.js e Tailwind para entregar processos escaláveis, rápidos e orientados a resultado.
                        </p>

                        <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                            Atualmente, meu foco é transformar processos manuais em operações automatizadas, conectando sistemas com N8N e IA para aumentar produtividade, previsibilidade e performance de negócio.
                        </p>

                        <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
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
                            className="flex gap-8 pt-4"
                        >
                            {[
                                { value: '2+', label: 'Anos de Experiência' },
                                { value: '2+', label: 'Projetos Entregues' },
                                { value: '3', label: 'Automações Criadas' }
                            ].map((stat) => (
                                <div key={stat.label} className="text-center">
                                    <p className="text-3xl font-bold gradient-text">{stat.value}</p>
                                    <p className="text-xs text-gray-500 dark:text-gray-500 mt-1">{stat.label}</p>
                                </div>
                            ))}
                        </motion.div>
                    </motion.div>
                </div>

                {/* Interests Grid */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="grid grid-cols-2 lg:grid-cols-4 gap-6"
                >
                    {interests.map((interest, index) => (
                        <motion.div
                            key={interest.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            whileHover={{ y: -5, scale: 1.02 }}
                            className="card-hover p-6 bg-white dark:bg-neutral-900 rounded-xl shadow-lg border border-orange-100 dark:border-neutral-800"
                        >
                            <div className="flex items-center mb-4">
                                <div className="p-3 bg-orange-100 dark:bg-orange-900/30 rounded-lg mr-4">
                                    <interest.icon className="text-orange-600 dark:text-orange-400" size={24} />
                                </div>
                                <h4 className="font-semibold text-gray-900 dark:text-gray-100">
                                    {interest.title}
                                </h4>
                            </div>
                            <p className="text-sm text-gray-600 dark:text-gray-400">
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
