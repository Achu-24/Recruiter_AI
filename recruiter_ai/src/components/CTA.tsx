"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function CTA() {
    return (
        <section className="relative py-24 px-4 overflow-hidden bg-black selection:bg-blue-500/30">

            {/* Background Gradient Mesh */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-accent-1/20 rounded-full blur-[120px] mix-blend-screen opacity-20" />
                <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-accent-3/20 rounded-full blur-[120px] mix-blend-screen opacity-20" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-900/10 rounded-full blur-[100px] opacity-30" />
            </div>

            {/* Floating Particles Animation */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
                {[...Array(6)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute w-2 h-2 bg-blue-400 rounded-full opacity-20"
                        initial={{
                            x: Math.random() * 100 + "%",
                            y: Math.random() * 100 + "%",
                            scale: Math.random() * 0.5 + 0.5,
                        }}
                        animate={{
                            y: [null, Math.random() * -100 - 50],
                            opacity: [0.2, 0.5, 0],
                        }}
                        transition={{
                            duration: Math.random() * 10 + 10,
                            repeat: Infinity,
                            ease: "linear",
                            delay: Math.random() * 5,
                        }}
                    />
                ))}
            </div>

            <div className="max-w-5xl mx-auto relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="w-full relative rounded-3xl overflow-hidden glass p-8 md:p-16 text-center border border-white/10 shadow-2xl"
                >
                    {/* Inner Glow */}
                    <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent pointer-events-none" />

                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight relative z-10">
                        Ready to Hire <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-1 to-accent-2">Better, Faster?</span>
                    </h2>

                    <p className="text-lg md:text-xl text-gray-300 mb-10 max-w-2xl mx-auto relative z-10 leading-relaxed">
                        Join 500+ companies hiring smarter with AI. <br className="hidden md:block" />
                        Start your free trial today and transform your workflow.
                    </p>

                    <div className="flex flex-col sm:flex-row justify-center gap-4 relative z-10">
                        <motion.button
                            whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(59, 130, 246, 0.4)" }}
                            whileTap={{ scale: 0.95 }}
                            className="px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white rounded-full font-bold text-lg transition-all shadow-lg shadow-blue-900/20"
                        >
                            Start Free Trial
                        </motion.button>

                        <motion.button
                            whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.05)" }}
                            whileTap={{ scale: 0.95 }}
                            className="px-8 py-4 text-white border border-white/20 rounded-full font-bold text-lg hover:border-white/40 transition-all flex items-center justify-center gap-2"
                        >
                            Schedule Demo <ArrowRight size={20} />
                        </motion.button>
                    </div>

                    <p className="mt-8 text-sm text-gray-500 font-medium relative z-10 flex flex-wrap justify-center gap-x-4 gap-y-2">
                        <span>✓ No credit card required</span>
                        <span className="hidden sm:inline">•</span>
                        <span>✓ Setup in 5 minutes</span>
                        <span className="hidden sm:inline">•</span>
                        <span>✓ Cancel anytime</span>
                    </p>

                </motion.div>
            </div>
        </section>
    );
}
