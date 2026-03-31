'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Sun, Moon } from 'lucide-react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isDark, setIsDark] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [activeSection, setActiveSection] = useState('home');

    useEffect(() => {
        const theme = localStorage.getItem('theme') || 'light';
        setIsDark(theme === 'dark');
        document.documentElement.classList.toggle('dark', theme === 'dark');
    }, []);

    // Scroll awareness
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);

            // Active section detection
            const sections = ['home', 'about', 'experience', 'skills', 'projects', 'contact'];
            for (const section of sections.reverse()) {
                const el = document.getElementById(section);
                if (el) {
                    const rect = el.getBoundingClientRect();
                    if (rect.top <= 120) {
                        setActiveSection(section);
                        break;
                    }
                }
            }
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleTheme = () => {
        const newTheme = isDark ? 'light' : 'dark';
        setIsDark(!isDark);
        localStorage.setItem('theme', newTheme);
        document.documentElement.classList.toggle('dark');
    };

    const navItems = [
        { name: 'Início', href: '#home', id: 'home' },
        { name: 'Sobre', href: '#about', id: 'about' },
        { name: 'Projetos', href: '#projects', id: 'projects' },
        { name: 'Habilidades', href: '#skills', id: 'skills' },
    ];

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.6, ease: [0.34, 1.56, 0.64, 1] }}
            className={`fixed top-0 w-full z-50 transition-all duration-300 ${
                isScrolled
                    ? 'bg-orange-50/90 dark:bg-black/90 backdrop-blur-xl shadow-md border-b border-orange-200/50 dark:border-neutral-800/50'
                    : 'bg-transparent'
            }`}
        >
            <div className="container-custom py-4">
                <div className="flex items-center justify-between">
                    {/* Logo */}
                    <motion.a
                        href="#home"
                        whileHover={{ scale: 1.03 }}
                        className="text-lg font-bold tracking-tight"
                    >
                        <span className="gradient-text">IR</span>
                        <span className="text-neutral-400 font-normal ml-0.5">.</span>
                    </motion.a>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center gap-1">
                        {navItems.map((item) => (
                            <a
                                key={item.name}
                                href={item.href}
                                className={`relative px-4 py-2 text-sm font-medium transition-colors rounded-lg ${
                                    activeSection === item.id
                                        ? 'text-orange-600 dark:text-orange-400'
                                        : 'text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-200'
                                }`}
                            >
                                {item.name}
                                {activeSection === item.id && (
                                    <motion.span
                                        layoutId="activeNav"
                                        className="absolute bottom-0 left-2 right-2 h-0.5 bg-orange-500 rounded-full"
                                        transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                                    />
                                )}
                            </a>
                        ))}

                        <div className="w-px h-5 bg-neutral-300 dark:bg-neutral-700 mx-2" />

                        {/* Theme Toggle */}
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={toggleTheme}
                            className="p-2 rounded-lg text-neutral-500 dark:text-neutral-400 hover:bg-orange-100/60 dark:hover:bg-neutral-800/60 transition-colors"
                            aria-label="Alternar tema"
                        >
                            {isDark ? <Sun size={18} /> : <Moon size={18} />}
                        </motion.button>

                        {/* CTA Contact */}
                        <motion.a
                            href="#contact"
                            whileHover={{ scale: 1.04 }}
                            whileTap={{ scale: 0.96 }}
                            className="ml-2 px-5 py-2 text-sm font-semibold text-white bg-gradient-to-r from-orange-500 to-orange-600 rounded-lg hover:shadow-lg hover:shadow-orange-500/20 transition-all"
                        >
                            Contato
                        </motion.a>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden flex items-center gap-2">
                        <motion.button
                            whileTap={{ scale: 0.9 }}
                            onClick={toggleTheme}
                            className="p-2 rounded-lg text-neutral-500 dark:text-neutral-400 hover:bg-orange-100/60 dark:hover:bg-neutral-800/60 transition-colors"
                            aria-label="Alternar tema"
                        >
                            {isDark ? <Sun size={18} /> : <Moon size={18} />}
                        </motion.button>

                        <motion.button
                            whileTap={{ scale: 0.9 }}
                            onClick={() => setIsOpen(!isOpen)}
                            className="p-2 rounded-lg text-neutral-500 dark:text-neutral-400 hover:bg-orange-100/60 dark:hover:bg-neutral-800/60 transition-colors"
                            aria-label="Menu"
                        >
                            {isOpen ? <X size={20} /> : <Menu size={20} />}
                        </motion.button>
                    </div>
                </div>

                {/* Mobile Navigation */}
                <AnimatePresence>
                    {isOpen && (
                        <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.3, ease: 'easeInOut' }}
                            className="md:hidden mt-4 pb-4 border-t border-orange-200/40 dark:border-neutral-800/40"
                        >
                            <div className="flex flex-col gap-1 pt-4">
                                {navItems.map((item, index) => (
                                    <motion.a
                                        key={item.name}
                                        href={item.href}
                                        initial={{ opacity: 0, x: -12 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: index * 0.05 }}
                                        onClick={() => setIsOpen(false)}
                                        className={`px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                                            activeSection === item.id
                                                ? 'text-orange-600 dark:text-orange-400 bg-orange-50 dark:bg-orange-950/20'
                                                : 'text-neutral-600 dark:text-neutral-400 hover:bg-orange-50 dark:hover:bg-neutral-800/40'
                                        }`}
                                    >
                                        {item.name}
                                    </motion.a>
                                ))}
                                <a
                                    href="#contact"
                                    onClick={() => setIsOpen(false)}
                                    className="mt-2 px-4 py-3 text-center text-sm font-semibold text-white bg-gradient-to-r from-orange-500 to-orange-600 rounded-lg"
                                >
                                    Contato
                                </a>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </motion.nav>
    );
};

export default Navbar;
