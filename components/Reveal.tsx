"use client";
import { motion } from "motion/react";
import { PropsWithChildren } from "react";


export function Reveal({ children, delay = 0 }: PropsWithChildren<{ delay?: number }>) {
    return (
        <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, ease: "easeOut", delay }}
        >
        {children}
        </motion.div>
    );
}