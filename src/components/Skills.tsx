'use client';

import { motion } from 'framer-motion';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Frontend',
      skills: [
        { name: 'React', level: 'Intermediário' },
        { name: 'Next.js', level: 'Intermediário' },
        { name: 'TypeScript', level: 'Intermediário' },
        { name: 'JavaScript', level: 'Intermediário' },
        { name: 'HTML/CSS', level: 'Avançado' },
        { name: 'Tailwind CSS', level: 'Intermediário' }
      ]
    },
    {
      title: 'Backend',
      skills: [
        { name: 'Node.js', level: 'Intermediário' },
        { name: 'PostgreSQL', level: 'Intermediário' },
        { name: 'REST APIs', level: 'Intermediário' },
      ]
    },
    {
      title: 'Ferramentas',
      skills: [
        { name: 'Git', level: 'Avançado' },
        { name: 'VS Code', level: 'Expert' },
      ]
    }
  ];

  const getLevelColor = (level: string) => {
    switch (level) {
      case 'Iniciante':
        return 'bg-blue-500';
      case 'Intermediário':
        return 'bg-purple-500';
      case 'Avançado':
        return 'bg-orange-500';
      case 'Expert':
        return 'bg-green-500';
      default:
        return 'bg-gray-500';
    }
  };

  const getLevelBadge = (level: string) => {
    return (
      <span className={`px-3 py-1 rounded-full text-xs font-medium text-white ${getLevelColor(level)}`}>
        {level}
      </span>
    );
  };

  return (
    <section id="skills" className="section-padding">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">
            Minhas <span className="gradient-text">Habilidades</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Tecnologias e ferramentas que utilizo para criar soluções incríveis
          </p>
        </motion.div>

        {/* Skill Categories */}
        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: categoryIndex * 0.2 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg"
            >
              <h3 className="text-xl font-semibold mb-6 text-center">
                {category.title}
              </h3>

              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: categoryIndex * 0.2 + skillIndex * 0.1 }}
                    viewport={{ once: true }}
                    className="flex justify-between items-center p-3 bg-gray-50 dark:bg-gray-700 rounded-lg"
                  >
                    <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                      {skill.name}
                    </span>
                    {getLevelBadge(skill.level)}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills; 