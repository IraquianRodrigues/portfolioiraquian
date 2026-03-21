'use client';

import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

type Project = {
    title: string;
    description: string;
    image?: string;
    images?: string[];
    technologies: string[];
    liveUrl?: string;
    githubUrl?: string;
    featured: boolean;
    premium?: boolean;
    demoAccess?: {
        login: string;
        senha: string;
    };
};

const Projects = () => {
    const projects: Project[] = [
        {
            title: 'CRM Profissional com N8N + IA',
            description: 'Projeto premium de CRM com automações inteligentes, fluxos no N8N e recursos de IA para acelerar atendimento e operação comercial.',
            images: ['/tela%20login.png', '/tela%20deashboard.png'],
            technologies: ['Next.js', 'TypeScript', 'N8N', 'IA', 'Automação', 'CRM'],
            liveUrl: 'https://odontovida.workflown8n.com.br/',
            featured: true,
            premium: true,
            demoAccess: {
                login: 'demo@demo.com.br',
                senha: '12345678'
            }
        },
        {
            title: 'CRM Suporte WPP com N8N + IA',
            description: 'CRM premium para suporte via WhatsApp com captação de leads automatizada por N8N e IA, com dashboard completo para operação comercial.',
            images: ['/tela%20login%201%20wpp.png', '/tela%20login%20wpp.png'],
            technologies: ['Next.js', 'Node.js', 'React', 'Tailwind CSS', 'N8N', 'IA', 'WhatsApp'],
            liveUrl: 'https://dashboard-leads-eta.vercel.app/',
            featured: true,
            premium: true,
            demoAccess: {
                login: 'demo@demo.com.br',
                senha: '12345678'
            }
        },
        {
            title: 'Site da Empresa de Automação',
            description: 'Site institucional premium da minha empresa de automação, destacando soluções com N8N e IA para geração de eficiência e escala.',
            image: '/site.png',
            technologies: ['Next.js', 'React', 'Node.js', 'Tailwind CSS', 'N8N', 'IA', 'Automação'],
            liveUrl: 'https://automateai.workflown8n.com.br/',
            featured: true,
            premium: true
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
                        {projects.filter((project) => project.featured).map((project, index) => (
                            <motion.div
                                key={project.title}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: index * 0.2 }}
                                viewport={{ once: true }}
                                className="card-hover bg-white dark:bg-gray-700 rounded-xl overflow-hidden shadow-lg"
                            >
                                <div className="h-48 bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center overflow-hidden">
                                    {project.images && project.images.length > 1 ? (
                                        <div className="grid grid-cols-2 w-full h-full">
                                            {project.images.slice(0, 2).map((image, imageIndex) => (
                                                <img
                                                    key={`${project.title}-${imageIndex}`}
                                                    src={image}
                                                    alt={`${project.title} screenshot ${imageIndex + 1}`}
                                                    className="w-full h-full object-cover"
                                                />
                                            ))}
                                        </div>
                                    ) : project.image && project.image !== '/api/placeholder/400/250' ? (
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
                                    {project.premium && (
                                        <span className="inline-block mb-3 px-3 py-1 bg-amber-100 dark:bg-amber-900/40 text-amber-700 dark:text-amber-300 rounded-full text-xs font-semibold">
                                            PROJETO PREMIUM
                                        </span>
                                    )}
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

                                    {project.demoAccess && (
                                        <div className="mb-6 p-4 rounded-lg bg-emerald-50 dark:bg-emerald-900/20 border border-emerald-200 dark:border-emerald-900/40">
                                            <p className="text-sm font-semibold text-emerald-700 dark:text-emerald-300 mb-2">
                                                Acesso Demo
                                            </p>
                                            <p className="text-sm text-gray-700 dark:text-gray-300">
                                                Login: <span className="font-semibold">{project.demoAccess.login}</span>
                                            </p>
                                            <p className="text-sm text-gray-700 dark:text-gray-300">
                                                Senha: <span className="font-semibold">{project.demoAccess.senha}</span>
                                            </p>
                                        </div>
                                    )}

                                    <div className="flex gap-4">
                                        {project.liveUrl && (
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
                                        )}

                                        {project.githubUrl && (
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
                                        )}
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
                                    {(project.image || project.images?.[0]) && (project.image || project.images?.[0]) !== '/api/placeholder/400/250' ? (
                                        <img
                                            src={project.image || project.images?.[0]}
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
                                        {project.liveUrl && (
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
                                        )}

                                        {project.githubUrl && (
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
                                        )}
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
