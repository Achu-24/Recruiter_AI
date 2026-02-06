"use client";

import { motion } from "framer-motion";

interface ConversationCardProps {
    name: string;
    title: string;
    quote: string;
    initial: string;
    position: string; // Tailwind classes for absolute positioning
    delay?: number;
}

export default function ConversationCard({
    name,
    title,
    quote,
    initial,
    position,
    delay = 0,
}: ConversationCardProps) {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{
                opacity: 1,
                scale: 1,
                y: [0, -10, 0]
            }}
            transition={{
                y: {
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: delay, // Offset float animation
                },
                opacity: { duration: 0.8, delay: delay * 0.5 },
                scale: { duration: 0.8, delay: delay * 0.5 }
            }}
            className={`absolute hidden lg:flex flex-row items-start gap-4 p-5 rounded-2xl w-80 glass shadow-2xl z-20 ${position}`}
        >
            <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gradient-to-br from-accent-1 to-blue-500 flex items-center justify-center text-white font-bold text-sm shadow-inner">
                {initial}
            </div>
            <div>
                <p className="text-sm text-gray-200 font-medium leading-relaxed mb-2">
                    "{quote}"
                </p>
                <div className="flex flex-col">
                    <span className="text-xs font-bold text-white">{name}</span>
                    <span className="text-[10px] text-gray-400 uppercase tracking-wider">{title}</span>
                </div>
            </div>
        </motion.div>
    );
}
