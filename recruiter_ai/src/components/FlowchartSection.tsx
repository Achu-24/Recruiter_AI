"use client";

import { motion } from "framer-motion";
import { Check, X, Mail, Calendar, Video, UserCheck, Clock, FileText, ArrowDown } from "lucide-react";
import React from "react";

// Types for our Flowchart Nodes
type NodeType = "start" | "process" | "decision" | "action" | "end";

interface FlowNode {
    id: string;
    type: NodeType;
    label: string;
    subLabel?: string;
    icon?: React.ReactNode;
    branch?: {
        yes: FlowNode[];
        no: FlowNode[];
    };
}

interface FlowchartProps {
    title: string;
    description: string;
    nodes: FlowNode[];
    highlight: string;
}

const FlowchartCard = ({ title, description, nodes, highlight }: FlowchartProps) => {
    return (
        <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-xl border border-gray-100 dark:border-gray-800 overflow-hidden flex flex-col h-full">
            <div className="p-6 border-b border-gray-100 dark:border-gray-800 bg-gray-50 dark:bg-gray-800/50">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{title}</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">{description}</p>
            </div>

            <div className="p-6 bg-blue-50/50 dark:bg-blue-900/10 flex-grow relative overflow-hidden">
                {/* Background Grid Pattern */}
                <div className="absolute inset-0 grid grid-cols-[repeat(20,minmax(0,1fr))] opacity-[0.03] pointer-events-none">
                    {/* Simple CSS grid pattern ideally, but keeping it clean for now */}
                </div>

                <div className="flex flex-col items-center space-y-4">
                    {nodes.map((node, idx) => (
                        <FlowNodeItem key={node.id} node={node} index={idx} />
                    ))}
                </div>
            </div>

            <div className="p-4 bg-accent-1/20 border-t border-blue-100 dark:border-blue-900 dark:bg-blue-900/30">
                <p className="text-sm font-semibold text-blue-700 dark:text-blue-300 text-center">
                    ⚡ {highlight}
                </p>
            </div>
        </div>
    );
};

const FlowNodeItem = ({ node, index }: { node: FlowNode; index: number }) => {
    const isLast = false; // Simplified logic, usually we'd check length

    const variants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { delay: index * 0.2, duration: 0.5 } }
    };

    return (
        <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={variants}
            className="relative flex flex-col items-center z-10 w-full"
        >
            {/* Connector Line (Top) */}
            {index > 0 && (
                <div className="h-6 w-0.5 bg-gray-300 dark:bg-gray-600 mb-1" />
            )}

            {/* Node Content */}
            <div className={`
        relative z-10 flex items-center gap-3 px-4 py-3 rounded-lg shadow-sm border text-sm font-medium w-full max-w-[280px]
        ${node.type === 'start' ? 'bg-green-50 border-green-200 text-green-800 dark:bg-green-900/20 dark:border-green-800 dark:text-green-300 rounded-full justify-center' : ''}
        ${node.type === 'process' ? 'bg-white border-gray-200 text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-200' : ''}
        ${node.type === 'decision' ? 'bg-accent-2/20 border-accent-2 text-purple-900 dark:bg-purple-900/20 dark:border-purple-800 dark:text-purple-200 transform rotate-0' : ''}
        ${node.type === 'action' ? 'bg-blue-50 border-blue-200 text-blue-800 dark:bg-blue-900/20 dark:border-blue-800 dark:text-blue-300' : ''}
      `}>
                {node.icon && <span className="text-current opacity-70">{node.icon}</span>}

                <div className="flex-1">
                    {node.label}
                    {node.subLabel && <div className="text-xs opacity-60 font-normal">{node.subLabel}</div>}
                </div>

                {node.type === 'decision' && (
                    <div className="absolute -right-16 top-1/2 -translate-y-1/2 text-xs text-gray-400 font-mono hidden md:block">
                        YES →
                    </div>
                )}
            </div>

            {/* Connector Arrow (Bottom) - if not last */}
            {/* (Simplified: logic handled by top connector of next item) */}
        </motion.div>
    );
}

export default function FlowchartSection() {
    // Data for Flowcharts
    const flow1: FlowNode[] = [
        { id: "1", type: "start", label: "New Application", icon: <FileText size={16} /> },
        { id: "2", type: "process", label: "AI Resume Screening", subLabel: "Ranks top 20%", icon: <UserCheck size={16} /> },
        { id: "3", type: "decision", label: "Score > 75%?", icon: <Check size={16} /> },
        { id: "4", type: "action", label: "Auto-schedule Interview", subLabel: "Via calendar link", icon: <Calendar size={16} /> },
        { id: "5", type: "end", label: "Interview Scheduled", icon: <Clock size={16} /> },
    ];

    const flow2: FlowNode[] = [
        { id: "1", type: "start", label: "Round 1: AI Video", icon: <Video size={16} /> },
        { id: "2", type: "process", label: "AI Scores Responses", subLabel: "Custom rubric", icon: <FileText size={16} /> },
        { id: "3", type: "decision", label: "Score > 80%?", icon: <Check size={16} /> },
        { id: "4", type: "action", label: "Hiring Manager Review", icon: <UserCheck size={16} /> },
        { id: "5", type: "end", label: "Offer Sent", icon: <Mail size={16} /> },
    ];

    const flow3: FlowNode[] = [
        { id: "1", type: "start", label: "Candidate Rejected", subLabel: "Score 60-74%", icon: <X size={16} /> },
        { id: "2", type: "process", label: "Add to 'Future Talent'", icon: <FileText size={16} /> },
        { id: "3", type: "process", label: "Wait 3 Months", icon: <Clock size={16} /> },
        { id: "4", type: "decision", label: "New Position Open?", icon: <Check size={16} /> },
        { id: "5", type: "action", label: "Send Re-engagement", icon: <Mail size={16} /> },
    ];

    return (
        <section className="py-24 bg-white dark:bg-black" id="features">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
                        AI Recruiting Software That Works <br />
                        <span className="text-primary">Like Your Own HR Team</span>
                    </h2>
                    <p className="text-xl text-gray-500 max-w-2xl mx-auto">
                        Build custom hiring workflows in minutes. No coding required.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    <FlowchartCard
                        title="Screening & Scheduling"
                        description="Automate the top of your funnel."
                        nodes={flow1}
                        highlight="Screen 250+ applications in minutes"
                    />
                    <FlowchartCard
                        title="Interview Automation"
                        description="Streamline technical rounds."
                        nodes={flow2}
                        highlight="Reduce time-to-hire by 70%"
                    />
                    <FlowchartCard
                        title="Passive Engagement"
                        description="Never lose a good candidate."
                        nodes={flow3}
                        highlight="Build a talent pipeline automatically"
                    />
                </div>
            </div>
        </section>
    );
}
