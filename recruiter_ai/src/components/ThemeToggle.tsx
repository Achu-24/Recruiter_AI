"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export function ThemeToggle() {
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return (
            <div className="w-[68px] h-[36px] rounded-full bg-gray-200 dark:bg-white/10 border border-transparent dark:border-white/10" />
        );
    }

    const isDark = theme === "dark";

    return (
        <button
            onClick={() => setTheme(isDark ? "light" : "dark")}
            className={`
        relative w-[68px] h-[36px] rounded-full p-1 transition-all duration-500
        ${isDark
                    ? "bg-white/10 border border-white/10 shadow-[inner_0_2px_10px_rgba(0,0,0,0.5)]"
                    : "bg-[#F3F4F6] border border-gray-200 shadow-inner"
                }
        focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500/50
        group cursor-pointer overflow-hidden
      `}
            aria-label="Toggle theme"
        >
            {/* Background Gradient Glow (Subtle Animation) */}
            <div
                className={`absolute inset-0 transition-opacity duration-500 pointer-events-none ${isDark ? "opacity-100" : "opacity-0"
                    }`}
                style={{
                    background:
                        "radial-gradient(circle at 75% 50%, rgba(177, 151, 252, 0.15), transparent 60%)",
                }}
            />
            <div
                className={`absolute inset-0 transition-opacity duration-500 pointer-events-none ${!isDark ? "opacity-100" : "opacity-0"
                    }`}
                style={{
                    background:
                        "radial-gradient(circle at 25% 50%, rgba(165, 216, 255, 0.4), transparent 60%)",
                }}
            />

            {/* Track Icons */}
            <div className="absolute inset-0 flex items-center justify-between px-2.5 pointer-events-none z-0">
                <Sun
                    size={16}
                    className={`transition-colors duration-300 ${!isDark ? "text-yellow-600" : "text-gray-500/50"
                        }`}
                />
                <Moon
                    size={16}
                    className={`transition-colors duration-300 ${isDark ? "text-blue-200" : "text-gray-400"
                        }`}
                />
            </div>

            {/* Sliding Knob */}
            <motion.div
                className="relative w-7 h-7 rounded-full bg-white shadow-[0_2px_8px_rgba(0,0,0,0.15)] z-10 flex items-center justify-center"
                initial={false}
                animate={{
                    x: isDark ? 32 : 0,
                }}
                transition={{
                    type: "spring",
                    stiffness: 400,
                    damping: 25,
                }}
            >
                {/* Glow Effect behind Knob (Active State) */}
                <motion.div
                    className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-40 transition-opacity duration-300 blur-md"
                    style={{
                        background: isDark ? "#B197FC" : "#A5D8FF"
                    }}
                />

                {/* Tiny Center Dot (Optional Premium Detail) */}
                <div className={`w-1.5 h-1.5 rounded-full transition-colors duration-300 ${isDark ? "bg-[#737373]" : "bg-[#D0BCFF]"}`} />
            </motion.div>
        </button>
    );
}
