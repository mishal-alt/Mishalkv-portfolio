import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Send, Copy, Check, MapPin, Phone } from 'lucide-react';

const Contact = () => {
    const [copied, setCopied] = useState(false);

    const copyEmail = () => {
        navigator.clipboard.writeText('mishalkvmishal@gmail.com');
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <section id="contact" className="py-24 bg-white/[0.01]">
            <div className="container mx-auto px-6">
                <div className="max-w-6xl mx-auto">
                    <div className="grid lg:grid-cols-2 gap-10 lg:gap-16">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center lg:text-left">
                                Let's <span className="text-accent">Connect</span>
                            </h2>
                            <p className="text-gray-400 text-base md:text-lg mb-10 text-center lg:text-left max-w-2xl mx-auto lg:mx-0">
                                I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
                            </p>

                            <div className="flex flex-col gap-4 items-center lg:items-start">
                                <div className="flex items-center gap-4 md:gap-6 glass p-4 rounded-2xl w-full max-w-md">
                                    <div className="p-3 bg-accent/10 rounded-xl text-accent shrink-0">
                                        <Mail size={20} className="md:w-6 md:h-6" />
                                    </div>
                                    <div className="min-w-0 flex-1">
                                        <p className="text-xs text-gray-500">Email Me</p>
                                        <p className="font-semibold text-sm md:text-base truncate">mishalkvmishal@gmail.com</p>
                                    </div>
                                    <button
                                        onClick={copyEmail}
                                        className="p-2 hover:bg-white/5 rounded-lg transition-colors text-gray-400 hover:text-white shrink-0"
                                        title="Copy Email"
                                    >
                                        {copied ? <Check size={18} className="text-green-500" /> : <Copy size={18} />}
                                    </button>
                                </div>

                                <div className="flex items-center gap-4 md:gap-6 glass p-4 rounded-2xl w-full max-w-md">
                                    <div className="p-3 bg-accent/10 rounded-xl text-accent shrink-0">
                                        <Phone size={20} className="md:w-6 md:h-6" />
                                    </div>
                                    <div className="flex-1">
                                        <p className="text-xs text-gray-500">Call Me</p>
                                        <p className="font-semibold text-sm md:text-base">+91 7907385046</p>
                                    </div>
                                </div>

                                <div className="flex items-center gap-4 md:gap-6 glass p-4 rounded-2xl w-full max-w-md">
                                    <div className="p-3 bg-accent/10 rounded-xl text-accent shrink-0">
                                        <MapPin size={20} className="md:w-6 md:h-6" />
                                    </div>
                                    <div className="flex-1">
                                        <p className="text-xs text-gray-500">Location</p>
                                        <p className="font-semibold text-sm md:text-base">Kottakkal, Kerala, India</p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="mt-10 lg:mt-0"
                        >
                            <form className="glass p-6 md:p-10 rounded-3xl space-y-6" onSubmit={(e) => e.preventDefault()}>
                                <div className="grid md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label className="text-sm font-medium text-gray-400">Your Name</label>
                                        <input
                                            type="text"
                                            className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-accent transition-colors"
                                            placeholder="John Doe"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-medium text-gray-400">Your Email</label>
                                        <input
                                            type="email"
                                            className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-accent transition-colors"
                                            placeholder="john@example.com"
                                        />
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-gray-400">Message</label>
                                    <textarea
                                        rows="4"
                                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-accent transition-colors resize-none"
                                        placeholder="Tell me about your project..."
                                    ></textarea>
                                </div>
                                <button className="btn-primary w-full justify-center group">
                                    Send Message
                                    <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                                </button>
                            </form>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
