'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const Skills = () => {
    const sectionRef = useRef(null);
    const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

    const skillCategories = [
        {
            title: 'Frontend',
            skills: [
                { name: 'React', level: 85 },
                { name: 'Next.js', level: 80 },
                { name: 'TypeScript', level: 65 },
                { name: 'JavaScript', level: 70 },
                { name: 'HTML/CSS', level: 90 },
                { name: 'Tailwind CSS', level: 75 },
            ]
        },
        {
            title: 'Backend',
            skills: [
                { name: 'Node.js', level: 65 },
                { name: 'PostgreSQL', level: 60 },
                { name: 'REST APIs', level: 70 },
            ]
        },
        {
            title: 'Ferramentas',
            skills: [
                { name: 'Git', level: 80 },
                { name: 'VS Code', level: 95 },
                { name: 'N8N', level: 85 },
            ]
        }
    ];

    const containerAnim = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
    };

    const cardAnim = {
        hidden: { opacity: 0, y: 32 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
    };

    return (
        <section id="skills" className="section-padding bg-orange-50 dark:bg-black relative" ref={sectionRef}>
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
                        <span className="section-badge">Tech Stack</span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">
                        Minhas <span className="gradient-text">Habilidades</span>
                    </h2>
                    <p className="text-base text-neutral-500 dark:text-neutral-400 max-w-lg mx-auto">
                        Tecnologias e ferramentas que utilizo para criar soluções de impacto
                    </p>
                </motion.div>

                {/* Skill Categories */}
                <motion.div
                    variants={containerAnim}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="grid md:grid-cols-3 gap-6"
                >
                    {skillCategories.map((category) => (
                        <motion.div
                            key={category.title}
                            variants={cardAnim}
                            className="card-premium p-6"
                        >
                            <h3 className="text-lg font-bold mb-6 text-center text-neutral-900 dark:text-neutral-100">
                                {category.title}
                            </h3>

                            <div className="space-y-5">
                                {category.skills.map((skill, skillIndex) => (
                                    <div key={skill.name}>
                                        <div className="flex justify-between items-center mb-2">
                                            <span className="text-sm font-medium text-neutral-700 dark:text-neutral-300">
                                                {skill.name}
                                            </span>
                                            <span className="text-xs font-semibold text-orange-600 dark:text-orange-400 tabular-nums">
                                                {skill.level}%
                                            </span>
                                        </div>
                                        {/* Progress Bar */}
                                        <div className="w-full h-1.5 bg-neutral-100 dark:bg-neutral-800 rounded-full overflow-hidden">
                                            <motion.div
                                                className="h-full rounded-full bg-gradient-to-r from-orange-400 to-orange-600"
                                                initial={{ width: 0 }}
                                                animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
                                                transition={{
                                                    duration: 1.2,
                                                    delay: skillIndex * 0.1,
                                                    ease: [0.22, 1, 0.36, 1],
                                                }}
                                            />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Skills;
