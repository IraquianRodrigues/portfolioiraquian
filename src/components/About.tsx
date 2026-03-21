'use client';

import { motion } from 'framer-motion';
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

                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Text Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
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


                    </motion.div>

                    {/* Interests Grid */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="grid grid-cols-2 gap-6"
                    >
                        {interests.map((interest, index) => (
                            <motion.div
                                key={interest.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                viewport={{ once: true }}
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
            </div>
        </section>
    );
};

export default About; 
