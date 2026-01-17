import React from 'react';
import { motion } from 'framer-motion';
import { Languages, Heart, Zap } from 'lucide-react';

const AdditionalInfo = () => {
    return (
        <section className="py-24 bg-white/[0.01]">
            <div className="container mx-auto px-6">
                <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="glass p-8 rounded-3xl"
                    >
                        <div className="flex items-center gap-4 mb-6">
                            <div className="p-3 bg-accent/10 rounded-xl text-accent">
                                <Languages size={24} />
                            </div>
                            <h3 className="text-xl font-bold">Languages</h3>
                        </div>
                        <div className="space-y-4">
                            <div>
                                <div className="flex justify-between mb-1">
                                    <span className="font-medium">English</span>
                                    <span className="text-gray-500">Professional</span>
                                </div>
                                <div className="w-full bg-white/5 h-1 rounded-full">
                                    <div className="bg-accent h-full w-[85%] rounded-full" />
                                </div>
                            </div>
                            <div>
                                <div className="flex justify-between mb-1">
                                    <span className="font-medium">Malayalam</span>
                                    <span className="text-gray-500">Native</span>
                                </div>
                                <div className="w-full bg-white/5 h-1 rounded-full">
                                    <div className="bg-accent h-full w-[100%] rounded-full" />
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="glass p-8 rounded-3xl"
                    >
                        <div className="flex items-center gap-4 mb-6">
                            <div className="p-3 bg-accent/10 rounded-xl text-accent">
                                <Heart size={24} />
                            </div>
                            <h3 className="text-xl font-bold">Hobbies & Interests</h3>
                        </div>
                        <ul className="space-y-4">
                            <li className="flex items-center gap-3 text-gray-400">
                                <Zap size={16} className="text-accent" />
                                Building small web projects
                            </li>
                            <li className="flex items-center gap-3 text-gray-400">
                                <Zap size={16} className="text-accent" />
                                Learning new front-end frameworks
                            </li>
                            <li className="flex items-center gap-3 text-gray-400">
                                <Zap size={16} className="text-accent" />
                                Solving complex coding problems
                            </li>
                        </ul>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default AdditionalInfo;
