"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function PlatformMarquee() {
    const logos = [
        "LinkedIn", "Naukri.com", "Indeed", "AngelList", "Instahyre",
        "Wellfound", "IIMJobs", "Glassdoor", "Monster India", "Cutshort"
    ];

    // Duplicating for infinite loop
    const duplicatedLogos = [...logos, ...logos];

    return (
        <section className="py-12 bg-white dark:bg-black border-b border-gray-100 dark:border-gray-800">
            <div className="text-center mb-10">
                <h3 className="text-lg font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-widest">
                    Post Once, Reach Everywhere
                </h3>
            </div>

            <div className="relative flex overflow-x-hidden group">
                <motion.div
                    className="flex whitespace-nowrap gap-16 animate-marquee"
                    animate={{ x: [0, -1000] }}
                    transition={{
                        x: {
                            repeat: Infinity,
                            repeatType: "loop",
                            duration: 20,
                            ease: "linear",
                        },
                    }}
                >
                    {duplicatedLogos.map((logo, index) => (
                        <div key={index} className="flex items-center justify-center min-w-[200px]">
                            <span className="text-2xl font-bold text-gray-300 hover:text-gray-600 dark:text-gray-700 dark:hover:text-gray-400 transition-colors cursor-default">
                                {logo}
                            </span>
                        </div>
                    ))}
                </motion.div>

                {/* Fade edges */}
                <div className="absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-white dark:from-black to-transparent z-10" />
                <div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-white dark:from-black to-transparent z-10" />
            </div>
        </section>
    );
}
