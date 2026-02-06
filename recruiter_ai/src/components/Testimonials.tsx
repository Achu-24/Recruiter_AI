"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";

export default function Testimonials() {
    const testimonials = [
        {
            quote: "We went from 6 weeks to hire a developer to just 10 days. RecruiterAI handled everything from screening to scheduling.",
            name: "Rahul Mehta",
            role: "Founder, TechStart Solutions",
            color: "bg-blue-50 dark:bg-blue-900/20",
        },
        {
            quote: "The automated screening is accurate. I don't read resumes anymore, I just interview the top 5 candidates RecruiterAI finds.",
            name: "Sarah Jenkins",
            role: "VP HR, NextGen Corp",
            color: "bg-indigo-50 dark:bg-indigo-900/20",
        },
        {
            quote: "It's like having a 24/7 recruiting team. We filled 3 positions in a week without sending a single manual email.",
            name: "Amit Patel",
            role: "CTO, GrowFast Inc",
            color: "bg-purple-50 dark:bg-purple-900/20",
        },
    ];

    return (
        <section className="py-24 bg-white dark:bg-black" id="testimonials">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
                        Trusted by Founders & HR Leaders
                    </h2>
                    <p className="text-xl text-gray-500 max-w-2xl mx-auto">
                        See why 500+ companies switched to AI-driven hiring.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {testimonials.map((t, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.2, duration: 0.5 }}
                            className={`p-8 rounded-2xl ${t.color} border border-transparent hover:border-blue-200 transition-colors dark:border-gray-800 dark:hover:border-blue-800`}
                        >
                            <div className="flex gap-1 text-yellow-500 mb-6">
                                {[...Array(5)].map((_, i) => <Star key={i} size={18} fill="currentColor" />)}
                            </div>
                            <p className="text-lg text-gray-800 dark:text-gray-200 mb-6 italic">
                                "{t.quote}"
                            </p>
                            <div>
                                <p className="font-bold text-gray-900 dark:text-white">{t.name}</p>
                                <p className="text-sm text-gray-600 dark:text-gray-400">{t.role}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
