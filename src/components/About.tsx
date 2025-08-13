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
        <section id="about" className="section-padding bg-gray-50 dark:bg-gray-800">
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
                        Desenvolvedor apaixonado por tecnologia e inovação
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
                            Sou um desenvolvedor Full Stack em início de carreira, motivado por criar experiências digitais funcionais e agradáveis. Tenho contato e venho aprendendo tecnologias modernas como React, Next.js, TypeScript e Node.js, sempre buscando evoluir minhas habilidades e explorar novas soluções. Meu objetivo é crescer como profissional enquanto contribuo para projetos de forma colaborativa e criativa.
                        </p>

                        <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                            Atualmente, estou focado em desenvolvimento web e mobile, criando
                            aplicações escaláveis e performáticas. Acredito que a tecnologia
                            deve ser acessível e útil para todos.
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
                                className="card-hover p-6 bg-white dark:bg-gray-700 rounded-xl shadow-lg"
                            >
                                <div className="flex items-center mb-4">
                                    <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-lg mr-4">
                                        <interest.icon className="text-blue-600 dark:text-blue-400" size={24} />
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