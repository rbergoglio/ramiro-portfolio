"use client";
import { motion, useScroll } from "motion/react";


export function ScrollProgress() {
    const { scrollYProgress } = useScroll();
    return (
        <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-[hsl(var(--brand))] z-50"
        style={{ scaleX: scrollYProgress, transformOrigin: "0%" }}
        />
    );
}