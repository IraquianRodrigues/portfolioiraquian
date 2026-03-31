'use client';

import { motion } from 'framer-motion';
import { ExternalLink, Github, KeyRound } from 'lucide-react';

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
            technologies: ['Next.js', 'Node.js', 'React', 'Tailwind', 'N8N', 'IA', 'WhatsApp'],
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
            technologies: ['Next.js', 'React', 'Node.js', 'Tailwind', 'N8N', 'IA'],
            liveUrl: 'https://automateai.workflown8n.com.br/',
            featured: true,
            premium: true
        }
    ];

    const containerAnim = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
    };

    const cardAnim = {
        hidden: { opacity: 0, y: 32 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
    };

    return (
        <section id="projects" className="section-padding bg-white dark:bg-neutral-950 relative">
            <div className="section-divider absolute top-0 left-0 right-0" />

            <div className="container-custom">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <div className="flex justify-center mb-4">
                        <span className="section-badge">Portfólio</span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">
                        Meus <span className="gradient-text">Projetos</span>
                    </h2>
                    <p className="text-base text-neutral-500 dark:text-neutral-400 max-w-lg mx-auto">
                        Soluções reais com automação, N8N e IA que geram resultado
                    </p>
                </motion.div>

                <motion.div
                    variants={containerAnim}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="grid lg:grid-cols-2 gap-6"
                >
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.title}
                            variants={cardAnim}
                            className={`card-premium group ${index === projects.length - 1 && projects.length % 2 !== 0 ? 'lg:col-span-2 lg:max-w-2xl lg:mx-auto' : ''}`}
                        >
                            {/* Image */}
                            <div className="relative h-52 overflow-hidden">
                                {project.images && project.images.length > 1 ? (
                                    <div className="grid grid-cols-2 w-full h-full">
                                        {project.images.slice(0, 2).map((image, imageIndex) => (
                                            <div key={`${project.title}-${imageIndex}`} className="relative overflow-hidden">
                                                <img
                                                    src={image}
                                                    alt={`${project.title} screenshot ${imageIndex + 1}`}
                                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                                />
                                            </div>
                                        ))}
                                    </div>
                                ) : project.image ? (
                                    <img
                                        src={project.image}
                                        alt={`${project.title} screenshot`}
                                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                    />
                                ) : (
                                    <div className="w-full h-full bg-gradient-to-br from-orange-500 to-neutral-900 flex items-center justify-center">
                                        <span className="text-white/60 text-sm">Preview</span>
                                    </div>
                                )}

                                {/* Premium Badge */}
                                {project.premium && (
                                    <div className="absolute top-3 left-3">
                                        <span
                                            className="px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-white rounded-md"
                                            style={{
                                                background: 'linear-gradient(135deg, #f97316, #ea580c)',
                                                backgroundSize: '200% 100%',
                                                animation: 'shimmer 3s linear infinite',
                                            }}
                                        >
                                            Premium
                                        </span>
                                    </div>
                                )}

                                {/* Overlay on hover */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                            </div>

                            {/* Content */}
                            <div className="p-6">
                                <h4 className="text-lg font-bold mb-2 text-neutral-900 dark:text-neutral-100">
                                    {project.title}
                                </h4>

                                <p className="text-sm text-neutral-500 dark:text-neutral-400 mb-4 leading-relaxed line-clamp-2">
                                    {project.description}
                                </p>

                                {/* Tech Tags */}
                                <div className="flex flex-wrap gap-1.5 mb-5">
                                    {project.technologies.map((tech) => (
                                        <span
                                            key={tech}
                                            className="px-2.5 py-1 text-[11px] font-medium bg-orange-50 dark:bg-orange-950/20 text-orange-700 dark:text-orange-400 rounded-md border border-orange-200/30 dark:border-orange-900/20"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>

                                {/* Demo Access */}
                                {project.demoAccess && (
                                    <div className="mb-5 p-3.5 rounded-lg bg-neutral-50 dark:bg-neutral-900/50 border border-neutral-100 dark:border-neutral-800/50">
                                        <div className="flex items-center gap-2 mb-2">
                                            <KeyRound size={13} className="text-orange-500" />
                                            <span className="text-xs font-semibold text-neutral-700 dark:text-neutral-300 uppercase tracking-wider">
                                                Acesso Demo
                                            </span>
                                        </div>
                                        <div className="grid grid-cols-2 gap-2 text-xs">
                                            <div>
                                                <span className="text-neutral-400">Login: </span>
                                                <span className="font-mono font-semibold text-neutral-700 dark:text-neutral-300">
                                                    {project.demoAccess.login}
                                                </span>
                                            </div>
                                            <div>
                                                <span className="text-neutral-400">Senha: </span>
                                                <span className="font-mono font-semibold text-neutral-700 dark:text-neutral-300">
                                                    {project.demoAccess.senha}
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                )}

                                {/* Actions */}
                                <div className="flex gap-3">
                                    {project.liveUrl && (
                                        <motion.a
                                            href={project.liveUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            whileHover={{ scale: 1.03 }}
                                            whileTap={{ scale: 0.97 }}
                                            className="button-primary text-sm py-2.5 px-5 flex-1 text-center"
                                        >
                                            <ExternalLink size={15} />
                                            Ver Projeto
                                        </motion.a>
                                    )}

                                    {project.githubUrl && (
                                        <motion.a
                                            href={project.githubUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            whileHover={{ scale: 1.03 }}
                                            whileTap={{ scale: 0.97 }}
                                            className="button-secondary text-sm py-2.5 px-5 flex-1 text-center"
                                        >
                                            <Github size={15} />
                                            Código
                                        </motion.a>
                                    )}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Projects;
