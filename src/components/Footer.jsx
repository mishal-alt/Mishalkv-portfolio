import React from 'react';
import { Github, Linkedin, Mail, Heart } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="py-12 border-t border-white/5">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-center gap-8">
                    <div>
                        <a href="#" className="text-2xl font-bold tracking-tight">
                            Mishal<span className="text-accent">.KV</span>
                        </a>
                        <p className="text-gray-500 mt-2">Crafting digital experiences with passion.</p>
                    </div>

                    <div className="flex gap-6">
                        <a
                            href="https://github.com/mishal-alt"
                            target="_blank"
                            rel="noreferrer"
                            className="p-3 bg-white/5 rounded-full text-gray-400 hover:text-accent hover:bg-white/10 transition-all"
                        >
                            <Github size={20} />
                        </a>
                        <a
                            href="https://www.linkedin.com/in/mishal-kv"
                            target="_blank"
                            rel="noreferrer"
                            className="p-3 bg-white/5 rounded-full text-gray-400 hover:text-accent hover:bg-white/10 transition-all"
                        >
                            <Linkedin size={20} />
                        </a>
                        <a
                            href="mailto:mishalkvmishal@gmail.com"
                            className="p-3 bg-white/5 rounded-full text-gray-400 hover:text-accent hover:bg-white/10 transition-all"
                        >
                            <Mail size={20} />
                        </a>
                    </div>
                </div>

                <div className="mt-12 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
                    <p>© {new Date().getFullYear()} Mishal K.V. All rights reserved.</p>
                    <p className="flex items-center gap-2">
                        Built with React & Tailwind <Heart size={14} className="text-accent fill-accent" />
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
