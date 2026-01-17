import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Briefcase, GraduationCap, Code } from 'lucide-react';

const About = () => {
    return (
        <section id="about" className="py-24 relative">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="max-w-6xl mx-auto"
                >
                    <div className="flex flex-col items-center mb-16">
                        <h2 className="text-4xl font-bold tracking-tight">
                            Personal <span className="text-accent">Background</span>
                        </h2>
                        <div className="h-1 w-20 bg-accent mt-4 rounded-full" />
                    </div>

                    <div className="grid lg:grid-cols-12 gap-12">
                        {/* Left Side: Story & Details */}
                        <div className="lg:col-span-7 space-y-8">
                            <div className="glass p-8 rounded-3xl relative overflow-hidden group">
                                <div className="absolute top-0 left-0 w-2 h-full bg-accent opacity-50" />
                                <h3 className="text-2xl font-bold mb-6 text-white flex items-center gap-3">
                                    <Code className="text-accent" /> My Story
                                </h3>
                                <div className="space-y-4 text-gray-400 leading-relaxed text-lg">
                                    <p>
                                        I am <span className="text-white font-semibold">Mishal K.V</span>, a motivated MERN Stack Developer based in Kerala. I have a deep passion for creating IMPACTFUL digital solutions that solve real-world problems.
                                    </p>
                                    <p>
                                        My expertise lies in building complete web ecosystems using <span className="text-accent font-medium">MongoDB, Express.js, React.js, and Node.js</span>. I focus on writing high-performance, clean code that is both scalable and maintainable.
                                    </p>
                                    <p>
                                        I thrive in collaborative environments and am constantly pushing myself to stay updated with the latest industry standards in UI/UX and Full-stack architecture.
                                    </p>
                                </div>
                            </div>

                            <div className="grid sm:grid-cols-2 gap-4 text-sm">
                                {[
                                    { icon: <MapPin size={18} />, label: 'Location', value: 'Kerala, India' },
                                    { icon: <Briefcase size={18} />, label: 'Experience', value: 'Associate at Bridgeon' },
                                    { icon: <GraduationCap size={18} />, label: 'Education', value: 'Computer Science' },
                                    { icon: <Code size={18} />, label: 'Tech Stack', value: 'MERN Specialization' },
                                ].map((item, i) => (
                                    <div key={i} className="glass p-5 rounded-2xl flex items-center gap-4 group hover:bg-white/5 transition-colors">
                                        <div className="p-3 bg-accent/10 rounded-xl text-accent group-hover:bg-accent group-hover:text-black transition-all">
                                            {item.icon}
                                        </div>
                                        <div>
                                            <p className="text-gray-500 font-medium">{item.label}</p>
                                            <p className="text-white font-semibold">{item.value}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Right Side: Visuals */}
                        <div className="lg:col-span-5 grid grid-cols-1 gap-6">
                            <motion.div
                                whileHover={{ scale: 1.02 }}
                                className="rounded-3xl overflow-hidden glass p-1 h-64 shadow-22xl"
                            >
                                <img
                                    src="/images/mishal-presenting.jpg"
                                    alt="Mishal Presenting"
                                    className="w-full h-full object-cover object-[center_75%] rounded-2xl grayscale hover:grayscale-0 transition-all duration-700"
                                />
                            </motion.div>
                            <motion.div
                                whileHover={{ scale: 1.02 }}
                                className="rounded-3xl overflow-hidden glass p-1 h-64 shadow-22xl"
                            >
                                <img
                                    src="/images/mishal-office.jpg"
                                    alt="At Office"
                                    className="w-full h-full object-cover object-[center_75%] rounded-2xl grayscale hover:grayscale-0 transition-all duration-700"
                                />
                            </motion.div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default About;
