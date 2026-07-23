import { useState } from "react"
import { motion, AnimatePresence } from "motion/react"

export default function HoverComp({ trigger, children }) {
    const [hovered, setHovered] = useState(false)

    return (
        <span
            className="relative inline-block"
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
        >
            {trigger}
            <AnimatePresence>
                {hovered && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.97, x: "-50%" }}
                        animate={{ opacity: 1, scale: 1, x: "-50%" }}
                        exit={{ opacity: 0, scale: 0.97, x: "-50%" }}
                        transition={{ type: "spring", stiffness: 500, damping: 40 }}
                        className="absolute bottom-full left-1/2 pb-2"
                    >
                        {children}
                    </motion.div>
                )}
            </AnimatePresence>
        </span>
    )
}
