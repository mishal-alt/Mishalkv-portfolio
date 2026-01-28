import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, ArrowUpRight } from 'lucide-react';
import { SiReact, SiTailwindcss, SiJavascript, SiHtml5, SiCss3, SiBootstrap, SiMongodb, SiExpress, SiNodedotjs } from 'react-icons/si';

const projects = [
    {
        title: 'SoleNXT',
        category: 'E-commerce Platform',
        description: 'A comprehensive MERN fullstack application featuring a premium sneaker store with advanced filtering, secure cart logic, and a high-performance backend.',
        tech: [
            { name: 'MongoDB', icon: <SiMongodb className="text-[#47A248]" /> },
            { name: 'Express', icon: <SiExpress className="text-white" /> },
            { name: 'React', icon: <SiReact className="text-[#61DAFB]" /> },
            { name: 'Node.js', icon: <SiNodedotjs className="text-[#339933]" /> },
            { name: 'Tailwind', icon: <SiTailwindcss className="text-[#06B6D4]" /> }
        ],
        live: 'https://solenxt.vercel.app/',
        github: 'https://github.com/mishal-alt/solenxt',
        image: '/images/solenxt-mockup.png'
    },
    {
        title: 'Mishal Portfolio',
        category: 'Personal Showcase',
        description: 'A cutting-edge MERN stack portfolio featuring glassmorphism, smooth animations, and a highly responsive design.',
        tech: [
            { name: 'React', icon: <SiReact className="text-[#61DAFB]" /> },
            { name: 'Tailwind', icon: <SiTailwindcss className="text-[#06B6D4]" /> },
            { name: 'Framer', icon: <SiJavascript className="text-[#F7DF1E]" /> }
        ],
        live: 'https://mishalkv.netlify.app/',
        github: 'https://github.com/mishal-alt/Mishalkv-portfolio',
        image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1200'
    },
    {
        title: 'Lumina Bites',
        category: 'Restaurant Experience',
        description: 'A premium, mobile-first restaurant menu platform designed for seamless QR-code access. Features an elegant UI, dynamic category filtering, and high-performance asset loading.',
        tech: [
            { name: 'React', icon: <SiReact className="text-[#61DAFB]" /> },
            { name: 'Tailwind', icon: <SiTailwindcss className="text-[#06B6D4]" /> },
            { name: 'JavaScript', icon: <SiJavascript className="text-[#F7DF1E]" /> }
        ],
        live: 'https://mishal-alt.github.io/Lumina-Bites-restaurant-menu-/',
        github: 'https://github.com/mishal-alt/Lumina-Bites-restaurant-menu-',
        image: '/images/lumina-bites-mockup.png'
    },
    {
        title: 'W3Schools Clone',
        category: 'Educational UI',
        description: 'A pixel-perfect recreation of the W3Schools learning interface with functional navigation and documentation layouts.',
        tech: [
            { name: 'HTML5', icon: <SiHtml5 className="text-[#E34F26]" /> },
            { name: 'CSS3', icon: <SiCss3 className="text-[#1572B6]" /> },
            { name: 'JS', icon: <SiJavascript className="text-[#F7DF1E]" /> }
        ],
        live: '#',
        github: 'https://github.com/mishal-alt',
        image: 'https://images.unsplash.com/photo-1587620962725-abab7fe55159?auto=format&fit=crop&q=80&w=1200'
    }
];

const Projects = () => {
    return (
        <section id="projects" className="py-24 relative overflow-hidden">
            <div className="container mx-auto px-6">
                <div className="flex flex-col items-center mb-20 text-center">
                    <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
                        Featured <span className="text-accent">Projects</span>
                    </h2>
                    <div className="h-1.5 w-24 bg-gradient-to-r from-accent to-blue-500 rounded-full" />
                    <p className="mt-6 text-gray-400 max-w-2xl text-lg">
                        Delivering high-performance digital experiences through custom full-stack solutions and modern design principles.
                    </p>
                </div>

                <div className="grid grid-cols-1 gap-20">
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.title}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: index * 0.1 }}
                            className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 items-center`}
                        >
                            {/* Project Image Panel */}
                            <div className="w-full lg:w-3/5 group relative">
                                <div className="absolute -inset-4 bg-accent/20 rounded-[2rem] blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                                <div className="relative overflow-hidden rounded-[2rem] glass p-2">
                                    <div className="overflow-hidden rounded-[1.5rem] aspect-[16/9]">
                                        <img
                                            src={project.image}
                                            alt={project.title}
                                            className={`w-full h-full object-cover grayscale-[0.3] group-hover:grayscale-0 transition-all duration-700 ${project.title === 'SoleNXT'
                                                ? 'scale-[1.5] group-hover:scale-[1.6] object-center'
                                                : 'group-hover:scale-110'
                                                }`}
                                        />
                                        {/* Overlay on hover */}
                                        <div className="absolute inset-0 bg-bg-deep/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-6">
                                            <a href={project.live} target="_blank" rel="noreferrer" className="p-4 bg-accent text-black rounded-full hover:scale-110 transition-transform">
                                                <ExternalLink size={24} />
                                            </a>
                                            <a href={project.github} target="_blank" rel="noreferrer" className="p-4 bg-white text-black rounded-full hover:scale-110 transition-transform">
                                                <Github size={24} />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Project Info Panel */}
                            <div className="w-full lg:w-2/5 space-y-6">
                                <div className="space-y-2">
                                    <p className="text-accent font-bold tracking-[0.2em] uppercase text-sm">{project.category}</p>
                                    <h3 className="text-3xl md:text-4xl font-extrabold text-white">{project.title}</h3>
                                </div>

                                <p className="text-gray-400 text-lg leading-relaxed">
                                    {project.description}
                                </p>

                                <div className="flex flex-wrap gap-4 pt-2">
                                    {project.tech.map((t) => (
                                        <div key={t.name} className="flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-xl text-sm font-medium">
                                            {t.icon}
                                            <span className="text-gray-300">{t.name}</span>
                                        </div>
                                    ))}
                                </div>

                                <div className="pt-6">
                                    <a
                                        href={project.live}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="inline-flex items-center gap-2 text-white font-bold group hover:text-accent transition-colors text-lg"
                                    >
                                        Case Study
                                        <ArrowUpRight size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Call to Action */}
                <div className="mt-32 flex justify-center">
                    <motion.a
                        href="https://github.com/mishal-alt"
                        target="_blank"
                        rel="noreferrer"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="px-10 py-4 glass border-accent/30 hover:border-accent text-white font-bold rounded-2xl flex items-center gap-3 group transition-all"
                    >
                        Explore All Repositories
                        <Github className="group-hover:rotate-12 transition-transform" />
                    </motion.a>
                </div>
            </div>
        </section>
    );
};

export default Projects;
