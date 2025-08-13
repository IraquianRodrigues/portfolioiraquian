'use client';

import { motion } from 'framer-motion';
import { ExternalLink, Github, ArrowRight } from 'lucide-react';

const Projects = () => {
    const projects = [
        {
            title: 'AgendiFy',
            description: 'Plataforma completa de agendamentos de serviços de estética, pagamentos e painel administrativo.',
            image: '/portfolio.png',
            technologies: ['React', 'Next.js', 'TypeScript', 'Stripe', 'PostgreSQL', 'Tailwind'],
            liveUrl: 'https://agendify-rho.vercel.app',
            githubUrl: 'https://github.com/IraquianRodrigues/agendify',
            featured: true
        },
        {
            title: 'Landing Page Doula',
            description: 'landing page de doula que fiz para a minha esposa.',
            image: '/doula.png',
            technologies: ['React', 'Next.js', 'TypeScript', 'Tailwind'],
            liveUrl: 'https://cynthianicole.vercel.app',
            githubUrl: 'https://github.com/IraquianRodrigues/cynthianicole',
            featured: true
        },
        {
            title: 'Linktree peça+açai',
            description: 'Linktree para a loja peça+açai',
            image: '/acai.png',
            technologies: ['Next.js', 'TypeScript', 'Framer Motion', 'Tailwind CSS'],
            liveUrl: 'https://linktree-alpha-sand.vercel.app',
            githubUrl: 'https://github.com/IraquianRodrigues/linktree',
            featured: false
        }
    ];

    return (
        <section id="projects" className="section-padding bg-gray-50 dark:bg-gray-800">
            <div className="container-custom">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl font-bold mb-4">
                        Meus <span className="gradient-text">Projetos</span>
                    </h2>
                    <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                        Alguns dos projetos que desenvolvi para demonstrar minhas habilidades
                    </p>
                </motion.div>

                {/* Featured Projects */}
                <div className="mb-16">
                    <h3 className="text-2xl font-semibold mb-8 text-center">
                        Projetos <span className="gradient-text">Destaque</span>
                    </h3>

                    <div className="grid lg:grid-cols-2 gap-8">
                        {projects.filter(p => p.featured).map((project, index) => (
                            <motion.div
                                key={project.title}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: index * 0.2 }}
                                viewport={{ once: true }}
                                className="card-hover bg-white dark:bg-gray-700 rounded-xl overflow-hidden shadow-lg"
                            >
                                <div className="h-48 bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center overflow-hidden">
                                    {project.image && project.image !== '/api/placeholder/400/250' ? (
                                        <img
                                            src={project.image}
                                            alt={`${project.title} screenshot`}
                                            className="w-full h-full object-cover"
                                        />
                                    ) : (
                                        <span className="text-white text-lg font-medium">Imagem do Projeto</span>
                                    )}
                                </div>

                                <div className="p-6">
                                    <h4 className="text-xl font-semibold mb-3 text-gray-900 dark:text-gray-100">
                                        {project.title}
                                    </h4>

                                    <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                                        {project.description}
                                    </p>

                                    <div className="flex flex-wrap gap-2 mb-6">
                                        {project.technologies.map((tech) => (
                                            <span
                                                key={tech}
                                                className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full text-sm"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>

                                    <div className="flex gap-4">
                                        <motion.a
                                            href={project.liveUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            whileHover={{ scale: 1.05 }}
                                            whileTap={{ scale: 0.95 }}
                                            className="button-primary flex items-center gap-2 text-sm"
                                        >
                                            <ExternalLink size={16} />
                                            Ver Projeto
                                        </motion.a>

                                        <motion.a
                                            href={project.githubUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            whileHover={{ scale: 1.05 }}
                                            whileTap={{ scale: 0.95 }}
                                            className="button-secondary flex items-center gap-2 text-sm"
                                        >
                                            <Github size={16} />
                                            Código
                                        </motion.a>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* All Projects Grid */}
                <div>
                    <h3 className="text-2xl font-semibold mb-8 text-center">
                        Todos os <span className="gradient-text">Projetos</span>
                    </h3>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {projects.map((project, index) => (
                            <motion.div
                                key={project.title}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className="card-hover bg-white dark:bg-gray-700 rounded-xl overflow-hidden shadow-lg"
                            >
                                <div className="h-40 bg-gradient-to-br from-green-500 to-blue-600 flex items-center justify-center overflow-hidden">
                                    {project.image && project.image !== '/api/placeholder/400/250' ? (
                                        <img
                                            src={project.image}
                                            alt={`${project.title} screenshot`}
                                            className="w-full h-full object-cover"
                                        />
                                    ) : (
                                        <span className="text-white text-sm font-medium">Imagem do Projeto</span>
                                    )}
                                </div>

                                <div className="p-4">
                                    <h4 className="text-lg font-semibold mb-2 text-gray-900 dark:text-gray-100">
                                        {project.title}
                                    </h4>

                                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-3 line-clamp-2">
                                        {project.description}
                                    </p>

                                    <div className="flex flex-wrap gap-1 mb-4">
                                        {project.technologies.slice(0, 3).map((tech) => (
                                            <span
                                                key={tech}
                                                className="px-2 py-1 bg-gray-100 dark:bg-gray-600 text-gray-700 dark:text-gray-300 rounded text-xs"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                        {project.technologies.length > 3 && (
                                            <span className="px-2 py-1 bg-gray-100 dark:bg-gray-600 text-gray-700 dark:text-gray-300 rounded text-xs">
                                                +{project.technologies.length - 3}
                                            </span>
                                        )}
                                    </div>

                                    <div className="flex gap-2">
                                        <motion.a
                                            href={project.liveUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            whileHover={{ scale: 1.05 }}
                                            whileTap={{ scale: 0.95 }}
                                            className="flex-1 button-primary text-center text-sm py-2"
                                        >
                                            Ver Projeto
                                        </motion.a>

                                        <motion.a
                                            href={project.githubUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            whileHover={{ scale: 1.05 }}
                                            whileTap={{ scale: 0.95 }}
                                            className="flex-1 button-secondary text-center text-sm py-2"
                                        >
                                            Código
                                        </motion.a>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>


            </div>
        </section>
    );
};

export default Projects; 