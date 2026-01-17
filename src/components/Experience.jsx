import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar } from 'lucide-react';

const experiences = [
    {
        role: 'MERN Stack Developer',
        company: 'Self / Personal Projects',
        period: 'Jan 2025 - Present',
        description: [
            'Architected and built full-stack MERN applications (MongoDB, Express, React, Node.js) with scalable backends.',
            'Developed RESTful APIs and managed database schemas with MongoDB/Mongoose.',
            'Implemented secure authentication and state management using Redux Toolkit.',
            'Styled mobile-first, high-performance user interfaces using Tailwind CSS and Framer Motion.'
        ]
    },
    {
        role: 'Full-Stack Developer Intern',
        company: 'Learning & Practice',
        period: 'Mar 2023 – Dec 2024',
        description: [
            'Created small-scale front-end and full-stack apps to master core MERN concepts.',
            'Collaborated on improving responsive design layouts and component-driven architecture.',
            'Managed code versions using Git/GitHub and deployed projects on Netlify and Vercel.'
        ]
    }
];

const Experience = () => {
    return (
        <section id="experience" className="py-24">
            <div className="container mx-auto px-6">
                <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center">Professional Journey</h2>

                <div className="max-w-4xl mx-auto space-y-12">
                    {experiences.map((exp, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="relative pl-8 md:pl-0"
                        >
                            {/* Timeline line for mobile */}
                            <div className="absolute left-0 top-0 bottom-0 w-px bg-accent/20 md:hidden" />

                            <div className="flex flex-col md:flex-row gap-8 items-start">
                                <div className="md:w-1/3 pt-2">
                                    <div className="flex items-center gap-3 text-accent font-medium mb-2">
                                        <Calendar size={18} />
                                        {exp.period}
                                    </div>
                                    <div className="flex items-center gap-3 text-gray-400">
                                        <Briefcase size={18} />
                                        {exp.company}
                                    </div>
                                </div>

                                <div className="md:w-2/3 glass p-8 rounded-2xl relative overflow-hidden group">
                                    <div className="absolute top-0 right-0 w-32 h-32 bg-accent/5 rounded-full -translate-y-16 translate-x-16 blur-3xl group-hover:bg-accent/10 transition-colors" />

                                    <h3 className="text-xl font-bold mb-4 text-white">{exp.role}</h3>
                                    <ul className="space-y-3">
                                        {exp.description.map((item, i) => (
                                            <li key={i} className="flex gap-3 text-gray-400 items-start">
                                                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
                                                <span>{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;
