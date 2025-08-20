"use client";
import { motion, useMotionValue, useTransform } from "motion/react";
import { PropsWithChildren } from "react";


export function TiltCard({ children }: PropsWithChildren) {
    const x = useMotionValue(0);
    const y = useMotionValue(0);
    const rotateX = useTransform(y, [0, 300], [8, -8]);
    const rotateY = useTransform(x, [0, 300], [-8, 8]);
    
    
    return (
        <motion.div
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        onMouseMove={(e) => {
            const rect = (e.target as HTMLElement).getBoundingClientRect();
            x.set(e.clientX - rect.left);
            y.set(e.clientY - rect.top);
        }}
        onMouseLeave={() => {
            x.set(150);
            y.set(150);
        }}
        className="transition-transform will-change-transform"
        >
        {children}
        </motion.div>
    );
}