import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap } from 'lucide-react';

const education = [
    {
        title: 'Higher Secondary Education – Computer Science',
        institution: 'PKMMHSS, Malappuram, Kerala',
        period: 'Jun 2023 – Apr 2025'
    },
    {
        title: 'SSLC / High School Education',
        institution: 'KHMHSS, Malappuram, Kerala',
        period: 'Jun 2020 – Apr 2023'
    }
];

const Education = () => {
    return (
        <section className="py-24">
            <div className="container mx-auto px-6">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-3xl font-bold mb-12 flex items-center gap-4">
                        <GraduationCap className="text-accent" size={32} />
                        Education
                    </h2>

                    <div className="grid gap-6">
                        {education.map((edu, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="glass p-6 rounded-2xl border-l-4 border-l-accent"
                            >
                                <span className="text-sm text-accent font-medium">{edu.period}</span>
                                <h3 className="text-xl font-bold mt-1 mb-2">{edu.title}</h3>
                                <p className="text-gray-400">{edu.institution}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Education;
