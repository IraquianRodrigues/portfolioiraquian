'use client';

import { motion } from 'framer-motion';
import { Briefcase, GraduationCap, Calendar } from 'lucide-react';

const Experience = () => {
    const workExperience = [
        {
            company: 'M.S Serviços',
            role: 'Auxiliar de T.I',
            period: 'Atual',
            isCurrent: true,
        },
        {
            company: 'CACIM',
            role: 'Auxiliar de T.I',
            period: '6 meses',
            isCurrent: false,
        },
        {
            company: 'CACIM',
            role: 'Técnico de Laboratório',
            period: '7 anos',
            isCurrent: false,
        },
    ];

    const education = [
        {
            institution: 'Unifacetie',
            course: 'Análise de Sistemas',
            period: '2026 – 2028',
            isCurrent: true,
        },
    ];

    const containerAnim = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
    };

    const cardAnim = {
        hidden: { opacity: 0, x: -16 },
        visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
    };

    return (
        <section id="experience" className="section-padding bg-white dark:bg-neutral-950 relative">
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
                        <span className="section-badge">Trajetória</span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">
                        Minha <span className="gradient-text">Trajetória</span>
                    </h2>
                    <p className="text-base text-neutral-500 dark:text-neutral-400 max-w-lg mx-auto">
                        Experiência profissional e formação acadêmica
                    </p>
                </motion.div>

                <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
                    {/* Work Experience */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.7 }}
                        viewport={{ once: true }}
                    >
                        <div className="flex items-center gap-3 mb-8">
                            <div className="p-2.5 bg-orange-100/80 dark:bg-orange-900/20 rounded-lg">
                                <Briefcase className="text-orange-600 dark:text-orange-400" size={20} />
                            </div>
                            <h3 className="text-xl font-bold text-neutral-900 dark:text-neutral-100">
                                Experiência
                            </h3>
                        </div>

                        <div className="relative">
                            {/* Timeline Line */}
                            <div className="absolute left-[15px] top-3 bottom-3 w-px bg-gradient-to-b from-orange-400 via-orange-300/50 to-transparent dark:from-orange-500 dark:via-orange-800/30 dark:to-transparent" />

                            <motion.div
                                variants={containerAnim}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                className="space-y-6"
                            >
                                {workExperience.map((job) => (
                                    <motion.div
                                        key={`${job.company}-${job.role}`}
                                        variants={cardAnim}
                                        className="relative pl-10 group"
                                    >
                                        {/* Timeline Dot */}
                                        <div className={`absolute left-0 top-2 w-[31px] h-[31px] rounded-full border-[3px] flex items-center justify-center transition-all duration-300 ${
                                            job.isCurrent
                                                ? 'border-orange-500 bg-orange-500'
                                                : 'border-orange-300/50 dark:border-orange-800/50 bg-white dark:bg-neutral-950 group-hover:border-orange-400'
                                        }`}
                                            style={job.isCurrent ? { animation: 'glowPulse 2.5s ease-in-out infinite' } : {}}
                                        >
                                            {job.isCurrent && (
                                                <span className="w-1.5 h-1.5 bg-white rounded-full" />
                                            )}
                                        </div>

                                        {/* Card */}
                                        <motion.div
                                            whileHover={{ x: 4 }}
                                            className={`p-5 rounded-xl border transition-all duration-300 hover:shadow-md ${
                                                job.isCurrent
                                                    ? 'bg-orange-50/50 dark:bg-orange-950/10 border-orange-200/50 dark:border-orange-900/30 border-l-2 border-l-orange-500'
                                                    : 'bg-neutral-50 dark:bg-neutral-900/50 border-neutral-100 dark:border-neutral-800/50 hover:border-orange-200/50 dark:hover:border-orange-900/30'
                                            }`}
                                        >
                                            <div className="flex items-start justify-between gap-3 mb-2">
                                                <div>
                                                    <h4 className="text-base font-semibold text-neutral-900 dark:text-neutral-100">
                                                        {job.role}
                                                    </h4>
                                                    <p className="text-sm text-orange-600 dark:text-orange-400 font-medium">
                                                        {job.company}
                                                    </p>
                                                </div>
                                                {job.isCurrent && (
                                                    <span className="flex items-center gap-1.5 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-300 rounded-full whitespace-nowrap">
                                                        <span className="w-1.5 h-1.5 bg-orange-500 rounded-full animate-pulse" />
                                                        Atual
                                                    </span>
                                                )}
                                            </div>
                                            <div className="flex items-center gap-1.5 text-xs text-neutral-400">
                                                <Calendar size={12} />
                                                <span>{job.period}</span>
                                            </div>
                                        </motion.div>
                                    </motion.div>
                                ))}
                            </motion.div>
                        </div>
                    </motion.div>

                    {/* Education */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.7 }}
                        viewport={{ once: true }}
                    >
                        <div className="flex items-center gap-3 mb-8">
                            <div className="p-2.5 bg-orange-100/80 dark:bg-orange-900/20 rounded-lg">
                                <GraduationCap className="text-orange-600 dark:text-orange-400" size={20} />
                            </div>
                            <h3 className="text-xl font-bold text-neutral-900 dark:text-neutral-100">
                                Formação
                            </h3>
                        </div>

                        <div className="relative">
                            {/* Timeline Line */}
                            <div className="absolute left-[15px] top-3 bottom-3 w-px bg-gradient-to-b from-orange-400 to-transparent dark:from-orange-500 dark:to-transparent" />

                            <motion.div
                                variants={containerAnim}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                className="space-y-6"
                            >
                                {education.map((edu) => (
                                    <motion.div
                                        key={edu.institution}
                                        variants={cardAnim}
                                        className="relative pl-10 group"
                                    >
                                        {/* Timeline Dot */}
                                        <div className={`absolute left-0 top-2 w-[31px] h-[31px] rounded-full border-[3px] flex items-center justify-center transition-all duration-300 ${
                                            edu.isCurrent
                                                ? 'border-orange-500 bg-orange-500'
                                                : 'border-orange-300/50 dark:border-orange-800/50 bg-white dark:bg-neutral-950 group-hover:border-orange-400'
                                        }`}
                                            style={edu.isCurrent ? { animation: 'glowPulse 2.5s ease-in-out infinite' } : {}}
                                        >
                                            {edu.isCurrent && (
                                                <span className="w-1.5 h-1.5 bg-white rounded-full" />
                                            )}
                                        </div>

                                        {/* Card */}
                                        <motion.div
                                            whileHover={{ x: 4 }}
                                            className="p-5 bg-orange-50/50 dark:bg-orange-950/10 rounded-xl border border-orange-200/50 dark:border-orange-900/30 border-l-2 border-l-orange-500 transition-all duration-300 hover:shadow-md"
                                        >
                                            <div className="flex items-start justify-between gap-3 mb-2">
                                                <div>
                                                    <h4 className="text-base font-semibold text-neutral-900 dark:text-neutral-100">
                                                        {edu.course}
                                                    </h4>
                                                    <p className="text-sm text-orange-600 dark:text-orange-400 font-medium">
                                                        {edu.institution}
                                                    </p>
                                                </div>
                                                {edu.isCurrent && (
                                                    <span className="flex items-center gap-1.5 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-300 rounded-full whitespace-nowrap">
                                                        <span className="w-1.5 h-1.5 bg-orange-500 rounded-full animate-pulse" />
                                                        Cursando
                                                    </span>
                                                )}
                                            </div>
                                            <div className="flex items-center gap-1.5 text-xs text-neutral-400">
                                                <Calendar size={12} />
                                                <span>{edu.period}</span>
                                            </div>
                                        </motion.div>
                                    </motion.div>
                                ))}
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Experience;
