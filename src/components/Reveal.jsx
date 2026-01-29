import React, { useEffect, useRef } from "react";
import { motion, useInView, useAnimation, useReducedMotion } from "framer-motion";

export const Reveal = ({ children, width = "100%" }) => {
    const ref = useRef(null);
    // amount: 0.1 ensures it triggers earlier on mobile
    const isInView = useInView(ref, { once: true, amount: 0.1 });
    const shouldReduceMotion = useReducedMotion();

    const mainControls = useAnimation();

    useEffect(() => {
        if (isInView) {
            mainControls.start("visible");
        }
    }, [isInView, mainControls]);

    return (
        <div ref={ref} style={{ position: "relative", width }}>
            <motion.div
                variants={{
                    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 25 },
                    visible: { opacity: 1, y: 0 },
                }}
                initial="hidden"
                animate={mainControls}
                transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
            >
                {children}
            </motion.div>
        </div>
    );
};

export default Reveal;
