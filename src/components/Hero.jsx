import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, MapPin, Download } from 'lucide-react';

const Hero = () => {
    return (
        <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
            {/* Background Glows */}
            <div className="absolute top-1/4 -left-20 w-96 h-96 bg-accent/20 rounded-full blur-[120px] -z-10" />
            <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-blue-600/10 rounded-full blur-[120px] -z-10" />

            <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 border border-accent/20 text-accent text-sm font-medium mb-6">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
                        </span>
                        Available for new opportunities
                    </div>

                    <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
                        Hi, I'm <span className="text-accent">Mishal K.V</span>
                    </h1>
                    <p className="text-xl md:text-2xl text-gray-400 mb-8 max-w-lg">
                        A passionate <span className="text-white font-medium">MERN Stack Developer</span> specialized in building robust full-stack applications with sleek, modern interfaces.
                    </p>

                    <div className="flex flex-wrap gap-4">
                        <a href="#projects" className="btn-primary">
                            View Projects <ArrowRight size={18} />
                        </a>
                        <a href="#contact" className="btn-outline">
                            Contact Me
                        </a>
                    </div>

                    <div className="mt-12 flex items-center gap-6 text-gray-400 text-sm">
                        <div className="flex items-center gap-2">
                            <MapPin size={16} className="text-accent" />
                            Kottakkal, Kerala, India
                        </div>
                        <button
                            onClick={() => window.open('/resume.pdf', '_blank')}
                            className="flex items-center gap-2 hover:text-white transition-colors cursor-pointer"
                        >
                            <Download size={16} className="text-accent" />
                            Download Resume
                        </button>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, delay: 0.2 }}
                    className="relative hidden md:flex justify-center"
                >
                    <div className="relative z-10 w-full max-w-[380px] aspect-[4/5] rounded-3xl overflow-hidden glass p-1">
                        <div className="w-full h-full rounded-2xl overflow-hidden border border-white/5 bg-bg-deep">
                            <img
                                src="/images/mishal-hero.jpg"
                                alt="Mishal K.V"
                                className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-700"
                            />
                        </div>
                    </div>
                    {/* Decorative elements */}
                    <div className="absolute top-0 right-1/2 translate-x-[200px] -translate-y-4 w-24 h-24 border-t-2 border-r-2 border-accent/20 rounded-tr-3xl" />
                    <div className="absolute bottom-0 left-1/2 -translate-x-[200px] translate-y-4 w-24 h-24 border-b-2 border-l-2 border-accent/20 rounded-bl-3xl" />
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
