'use client';

import { motion } from 'framer-motion';
import { Briefcase, GraduationCap, Calendar, MapPin, ChevronRight } from 'lucide-react';

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

    return (
        <section id="experience" className="section-padding bg-white dark:bg-neutral-950">
            <div className="container-custom">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl font-bold mb-4">
                        Minha <span className="gradient-text">Trajetória</span>
                    </h2>
                    <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                        Experiência profissional e formação acadêmica
                    </p>
                </motion.div>

                <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
                    {/* Work Experience */}
                    <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                    >
                        <div className="flex items-center gap-3 mb-8">
                            <div className="p-3 bg-orange-100 dark:bg-orange-900/30 rounded-xl">
                                <Briefcase className="text-orange-600 dark:text-orange-400" size={24} />
                            </div>
                            <h3 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">
                                Experiência
                            </h3>
                        </div>

                        <div className="relative">
                            {/* Timeline Line */}
                            <div className="absolute left-[17px] top-2 bottom-2 w-0.5 bg-gradient-to-b from-orange-400 via-orange-300 to-orange-200 dark:from-orange-500 dark:via-orange-700 dark:to-orange-900" />

                            <div className="space-y-8">
                                {workExperience.map((job, index) => (
                                    <motion.div
                                        key={`${job.company}-${job.role}`}
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        transition={{ duration: 0.5, delay: index * 0.15 }}
                                        viewport={{ once: true }}
                                        className="relative pl-12 group"
                                    >
                                        {/* Timeline Dot */}
                                        <div className={`absolute left-0 top-1 w-[35px] h-[35px] rounded-full border-4 flex items-center justify-center transition-all duration-300 ${
                                            job.isCurrent
                                                ? 'border-orange-500 bg-orange-500 shadow-lg shadow-orange-500/30'
                                                : 'border-orange-300 dark:border-orange-700 bg-white dark:bg-neutral-950 group-hover:border-orange-500 group-hover:bg-orange-50 dark:group-hover:bg-orange-950'
                                        }`}>
                                            {job.isCurrent && (
                                                <span className="w-2 h-2 bg-white rounded-full animate-pulse" />
                                            )}
                                        </div>

                                        {/* Card */}
                                        <motion.div
                                            whileHover={{ x: 4 }}
                                            className="p-5 bg-gray-50 dark:bg-neutral-900 rounded-xl border border-gray-100 dark:border-neutral-800 hover:border-orange-200 dark:hover:border-orange-800 transition-all duration-300 hover:shadow-lg"
                                        >
                                            <div className="flex items-start justify-between mb-2">
                                                <div>
                                                    <h4 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                                                        {job.role}
                                                    </h4>
                                                    <p className="text-orange-600 dark:text-orange-400 font-medium">
                                                        {job.company}
                                                    </p>
                                                </div>
                                                {job.isCurrent && (
                                                    <span className="px-3 py-1 text-xs font-semibold bg-orange-100 dark:bg-orange-900/40 text-orange-700 dark:text-orange-300 rounded-full whitespace-nowrap">
                                                        Atual
                                                    </span>
                                                )}
                                            </div>
                                            <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-500">
                                                <Calendar size={14} />
                                                <span>{job.period}</span>
                                            </div>
                                        </motion.div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </motion.div>

                    {/* Education */}
                    <motion.div
                        initial={{ opacity: 0, x: 40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                    >
                        <div className="flex items-center gap-3 mb-8">
                            <div className="p-3 bg-orange-100 dark:bg-orange-900/30 rounded-xl">
                                <GraduationCap className="text-orange-600 dark:text-orange-400" size={24} />
                            </div>
                            <h3 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">
                                Formação
                            </h3>
                        </div>

                        <div className="relative">
                            {/* Timeline Line */}
                            <div className="absolute left-[17px] top-2 bottom-2 w-0.5 bg-gradient-to-b from-orange-400 to-orange-200 dark:from-orange-500 dark:to-orange-900" />

                            <div className="space-y-8">
                                {education.map((edu, index) => (
                                    <motion.div
                                        key={edu.institution}
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        transition={{ duration: 0.5, delay: index * 0.15 }}
                                        viewport={{ once: true }}
                                        className="relative pl-12 group"
                                    >
                                        {/* Timeline Dot */}
                                        <div className={`absolute left-0 top-1 w-[35px] h-[35px] rounded-full border-4 flex items-center justify-center transition-all duration-300 ${
                                            edu.isCurrent
                                                ? 'border-orange-500 bg-orange-500 shadow-lg shadow-orange-500/30'
                                                : 'border-orange-300 dark:border-orange-700 bg-white dark:bg-neutral-950 group-hover:border-orange-500'
                                        }`}>
                                            {edu.isCurrent && (
                                                <span className="w-2 h-2 bg-white rounded-full animate-pulse" />
                                            )}
                                        </div>

                                        {/* Card */}
                                        <motion.div
                                            whileHover={{ x: 4 }}
                                            className="p-5 bg-gray-50 dark:bg-neutral-900 rounded-xl border border-gray-100 dark:border-neutral-800 hover:border-orange-200 dark:hover:border-orange-800 transition-all duration-300 hover:shadow-lg"
                                        >
                                            <div className="flex items-start justify-between mb-2">
                                                <div>
                                                    <h4 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                                                        {edu.course}
                                                    </h4>
                                                    <p className="text-orange-600 dark:text-orange-400 font-medium">
                                                        {edu.institution}
                                                    </p>
                                                </div>
                                                {edu.isCurrent && (
                                                    <span className="px-3 py-1 text-xs font-semibold bg-orange-100 dark:bg-orange-900/40 text-orange-700 dark:text-orange-300 rounded-full whitespace-nowrap">
                                                        Cursando
                                                    </span>
                                                )}
                                            </div>
                                            <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-500">
                                                <Calendar size={14} />
                                                <span>{edu.period}</span>
                                            </div>
                                        </motion.div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Experience;
