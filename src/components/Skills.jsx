import React from 'react';
import { motion } from 'framer-motion';
import {
    SiMongodb,
    SiExpress,
    SiReact,
    SiNodedotjs,
    SiJavascript,
    SiRedux,
    SiTailwindcss,
    SiHtml5,
    SiCss3,
    SiGit,
    SiBootstrap,
    SiPostman
} from 'react-icons/si';

const skills = [
    { name: 'MongoDB', icon: <SiMongodb size={32} color="#47A248" /> },
    { name: 'Express.js', icon: <SiExpress size={32} color="#FFFFFF" /> },
    { name: 'React.js', icon: <SiReact size={32} color="#61DAFB" /> },
    { name: 'Node.js', icon: <SiNodedotjs size={32} color="#339933" /> },
    { name: 'JavaScript', icon: <SiJavascript size={32} color="#F7DF1E" /> },
    { name: 'Redux', icon: <SiRedux size={32} color="#764ABC" /> },
    { name: 'Tailwind CSS', icon: <SiTailwindcss size={32} color="#06B6D4" /> },
    { name: 'HTML5', icon: <SiHtml5 size={32} color="#E34F26" /> },
    { name: 'CSS3', icon: <SiCss3 size={32} color="#1572B6" /> },
    { name: 'Git & GitHub', icon: <SiGit size={32} color="#F05032" /> },
    { name: 'Bootstrap', icon: <SiBootstrap size={32} color="#7952B3" /> },
    { name: 'REST APIs', icon: <SiPostman size={32} color="#FF6C37" /> }
];

const Skills = () => {
    return (
        <section id="skills" className="py-24 bg-white/[0.01]">
            <div className="container mx-auto px-6">
                <div className="flex flex-col items-center mb-16 text-center">
                    <h2 className="text-4xl font-bold tracking-tight">
                        Technical <span className="text-accent">Ecosystem</span>
                    </h2>
                    <div className="h-1 w-20 bg-accent mt-4 rounded-full" />
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 max-w-5xl mx-auto">
                    {skills.map((skill, index) => (
                        <motion.div
                            key={skill.name}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            whileHover={{ y: -5, scale: 1.02 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.05 }}
                            className="glass group p-6 rounded-2xl flex flex-col items-center justify-center gap-4 border border-white/5 hover:border-accent/30 transition-all duration-300 relative overflow-hidden text-center"
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

                            <div className="p-4 bg-white/5 rounded-2xl transform transition-all duration-300 relative z-10 shadow-lg">
                                {skill.icon}
                            </div>

                            <h3 className="font-bold text-sm md:text-base text-white tracking-wide relative z-10">
                                {skill.name}
                            </h3>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
