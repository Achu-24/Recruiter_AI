"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

const faqs = [
    { q: "How does AI screening work?", a: "RecruiterAI uses advanced NLP to analyze resumes against your job descriptions, ranking candidates based on skills, experience, and cultural fit." },
    { q: "Does RecruiterAI integrate with our existing ATS?", a: "Yes! We integrate seamlessly with Greenhouse, Lever, Ashby, and most major ATS platforms via one-click API sync." },
    { q: "What's the pricing structure?", a: "We offer flexible tiered pricing based on your hiring volume. Start with our free trial to see the value first." },
    { q: "How long does setup take?", a: "You can be up and running in less than 10 minutes. Just connect your email and job board accounts." },
    { q: "Is candidate data secure?", a: "Absolutely. We are SOC2 Type II compliant and encrypt all data at rest and in transit." },
];

export default function FAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    return (
        <section className="py-24 bg-gray-50 dark:bg-gray-900/50" id="faq">
            <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white mb-12 text-center">
                    Frequently Asked Questions
                </h2>

                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <div key={index} className="bg-white dark:bg-gray-900 rounded-xl border border-gray-100 dark:border-gray-800 overflow-hidden">
                            <button
                                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                className="w-full flex items-center justify-between p-6 text-left"
                            >
                                <span className="text-lg font-medium text-gray-900 dark:text-white">{faq.q}</span>
                                {openIndex === index ? (
                                    <Minus className="text-primary flex-shrink-0" />
                                ) : (
                                    <Plus className="text-gray-400 flex-shrink-0" />
                                )}
                            </button>

                            <AnimatePresence>
                                {openIndex === index && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        className="overflow-hidden"
                                    >
                                        <div className="p-6 pt-0 text-gray-600 dark:text-gray-400 leading-relaxed">
                                            {faq.a}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
