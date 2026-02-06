"use client";

import { motion } from "framer-motion";

export default function ImpactMetrics() {
    const metrics = [
        { label: "Screening Speed", value: "10x", desc: "Faster than manual", height: 80, color: "bg-blue-500" },
        { label: "Time-to-Hire", value: "70%", desc: "Reduction in days", height: 70, color: "bg-indigo-500" },
        { label: "Interview Cap.", value: "25x", desc: "More candidates", height: 90, color: "bg-violet-500" },
        { label: "Completion", value: "95%", desc: "Application rate", height: 95, color: "bg-purple-500" },
        { label: "Quality", value: "89%", desc: "Better candidates", height: 85, color: "bg-fuchsia-500" },
        { label: "Cost", value: "80%", desc: "Lower spend", height: 75, color: "bg-pink-500" },
    ];

    return (
        <section className="py-24 bg-gray-50 dark:bg-gray-900 border-y border-gray-100 dark:border-gray-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col lg:flex-row items-center gap-16">

                    {/* Text Content */}
                    <div className="lg:w-1/3">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
                            The <span className="text-primary">RecruiterAI</span> Advantage
                        </h2>
                        <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
                            Metrics that matter. We don't just automate tasks; we drastically improve your hiring outcomes.
                        </p>
                        <ul className="space-y-4">
                            {["Faster Screening", "Lower Costs", "Better Hires"].map((item, i) => (
                                <li key={i} className="flex items-center gap-3 text-gray-700 dark:text-gray-200">
                                    <div className="w-6 h-6 rounded-full bg-green-100 dark:bg-green-900 flex items-center justify-center text-green-600 dark:text-green-400">
                                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                                    </div>
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Chart */}
                    <div className="lg:w-2/3 w-full h-80 flex items-end justify-between gap-2 md:gap-4 px-4">
                        {metrics.map((m, index) => (
                            <div key={index} className="flex flex-col items-center justify-end h-full w-full group">
                                <div className="mb-2 text-center opacity-0 group-hover:opacity-100 transition-opacity absolute -mt-16 bg-black text-white text-xs py-1 px-2 rounded pointer-events-none z-10 w-24">
                                    {m.desc}
                                </div>

                                <span className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-2">{m.value}</span>

                                <motion.div
                                    initial={{ height: 0 }}
                                    whileInView={{ height: `${m.height}%` }}
                                    transition={{ duration: 1, delay: index * 0.1, ease: "easeOut" }}
                                    viewport={{ once: true }}
                                    className={`w-full rounded-t-xl opacity-90 hover:opacity-100 transition-opacity ${m.color}`}
                                />

                                <span className="text-xs md:text-sm font-medium text-gray-500 dark:text-gray-400 mt-4 text-center h-10 flex items-start justify-center">
                                    {m.label}
                                </span>
                            </div>
                        ))}
                    </div>

                </div>
            </div>
        </section>
    );
}
