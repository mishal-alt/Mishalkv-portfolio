import React from 'react';
import { GitHubCalendar } from 'react-github-calendar';
import { motion } from 'framer-motion';
import { Github } from 'lucide-react';

const GithubContributions = () => {
    const calendarTheme = {
        light: ['#161b22', '#0e4429', '#006d32', '#26a641', '#39d353'],
        dark: ['#161b22', '#004455', '#007799', '#00aacc', '#00d2ff'],
    };

    return (
        <section className="py-24 bg-white/[0.01]">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="max-w-5xl mx-auto"
                >
                    <div className="flex flex-col items-center mb-16 text-center">
                        <h2 className="text-4xl font-bold tracking-tight flex items-center gap-4">
                            GitHub <span className="text-accent">Contributions</span>
                        </h2>
                        <div className="h-1 w-20 bg-accent mt-4 rounded-full" />
                        <p className="text-gray-400 mt-6 max-w-2xl">
                            My coding activity and contribution history on GitHub.
                        </p>
                    </div>

                    <div className="glass p-8 rounded-3xl overflow-hidden flex flex-col items-center justify-center border border-white/10">
                        <div className="w-full overflow-x-auto flex justify-center py-6 custom-scrollbar">
                            <div className="min-w-fit px-4">
                                <GitHubCalendar
                                    username="mishal-alt"
                                    fontSize={14}
                                    blockSize={14}
                                    blockMargin={5}
                                    theme={calendarTheme}
                                    colorScheme='dark'
                                />
                            </div>
                        </div>

                        <div className="mt-8 flex flex-wrap justify-center gap-6 text-sm text-gray-400 font-medium">
                            <div className="flex items-center gap-2">
                                <div className="w-3 h-3 rounded-sm bg-[#161b22]" />
                                <span>No code</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <div className="w-3 h-3 rounded-sm bg-[#004455]" />
                                <span>Developing</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <div className="w-3 h-3 rounded-sm bg-[#007799]" />
                                <span>Coding</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <div className="w-3 h-3 rounded-sm bg-[#00aacc]" />
                                <span>Consistent</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <div className="w-3 h-3 rounded-sm bg-[#00d2ff]" />
                                <span>Productive</span>
                            </div>
                        </div>

                        <div className="mt-8">
                            <a
                                href="https://github.com/mishal-alt"
                                target="_blank"
                                rel="noreferrer"
                                className="flex items-center gap-2 text-accent hover:text-white transition-colors font-medium border border-accent/20 px-6 py-2 rounded-full hover:bg-accent/10"
                            >
                                <Github size={18} />
                                View Full Profile
                            </a>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default GithubContributions;
