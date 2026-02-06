"use client";

import { motion } from "framer-motion";
import { ArrowRight, PlayCircle } from "lucide-react";
import ConversationCard from "./ConversationCard";

export default function Hero() {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black pt-20 pb-20">

            {/* Background Gradients & Glows */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] bg-accent-1/20 rounded-full blur-[100px] opacity-40 mix-blend-screen" />
                <div className="absolute bottom-[-10%] right-[-10%] w-[50vw] h-[50vw] bg-accent-3/20 rounded-full blur-[100px] opacity-30 mix-blend-screen" />
                <div className="absolute top-[20%] left-[50%] -translate-x-1/2 w-[40vw] h-[40vw] bg-blue-600/10 rounded-full blur-[120px] opacity-50" />
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">

                {/* Floating Cards - Positioned absolutely relative to the container */}
                {/* Hidden on mobile/tablet (lg:flex) to keep the layout clean */}
                <div className="absolute inset-0 pointer-events-none">
                    <ConversationCard
                        name="Sarah K."
                        title="Founder at TechStart"
                        quote="Candidates wait 3 weeks for replies while I'm juggling everything."
                        initial="S"
                        position="top-0 left-0 -translate-x-12 translate-y-12"
                        delay={0}
                    />
                    <ConversationCard
                        name="Rahul M."
                        title="Hiring Manager at GrowthCo"
                        quote="Posted on LinkedIn. Got 200 applications. Skimmed 20."
                        initial="R"
                        position="top-12 right-0 translate-x-12"
                        delay={1.5}
                    />
                    <ConversationCard
                        name="Priya S."
                        title="CEO at InnovateLabs"
                        quote="I'm the CEO, product lead, AND now doing HR? Zero time."
                        initial="P"
                        position="bottom-32 left-4 -translate-x-8"
                        delay={0.8}
                    />
                    <ConversationCard
                        name="Amit T."
                        title="Head of HR at ScaleUp"
                        quote="Our best candidate accepted another offer while we were scheduling."
                        initial="A"
                        position="bottom-20 right-4 translate-x-8"
                        delay={2.2}
                    />
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="text-center max-w-4xl mx-auto relative z-20"
                >
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-white/10 mb-8">
                        <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                        <span className="text-sm font-medium text-gray-300">New: AI Auto-Scheduling v2.0</span>
                    </div>

                    <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight text-white mb-8 leading-[1.1]">
                        Every Hire, <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-1 via-blue-400 to-accent-3 animate-gradient-x">
                            Faster and Better
                        </span>
                    </h1>

                    <p className="text-lg sm:text-xl md:text-2xl text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed">
                        Stop losing great candidates to slow, manual hiring processes. Let
                        AI handle the heavy lifting while you focus on building your team.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="w-full sm:w-auto px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white text-lg font-semibold rounded-full shadow-[0_0_20px_rgba(59,130,246,0.5)] transition-all flex items-center justify-center gap-2"
                        >
                            Start Hiring Smarter
                            <ArrowRight className="w-5 h-5" />
                        </motion.button>

                        <motion.button
                            whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.1)" }}
                            whileTap={{ scale: 0.95 }}
                            className="w-full sm:w-auto px-8 py-4 text-white border border-white/20 hover:border-white/40 text-lg font-semibold rounded-full backdrop-blur-sm transition-all flex items-center justify-center gap-2 glass"
                        >
                            <PlayCircle className="w-5 h-5" />
                            See How It Works
                        </motion.button>
                    </div>
                </motion.div>

            </div>
        </section>
    );
}

