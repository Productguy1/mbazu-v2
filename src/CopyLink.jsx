import { useState } from "react"
import { motion, AnimatePresence } from "motion/react"
import HoverComp from "./HoverComp"

export default function CopyEmail() {
    const [copied, setCopied] = useState(false)

    return (
        <HoverComp trigger={
            <button
                onClick={() => {
                    navigator.clipboard.writeText("hey@mbazu.com")
                    setCopied(true)
                }}
                onMouseLeave={() => setCopied(false)}
                className={`cursor-pointer underline decoration-[#AEAEAE] underline-offset-[2px] transition-colors duration-150 text-[#707070] hover:text-[#101010]`}
            >
                hey@mbazu.com
            </button>}
        >
            <div className="w-fit rounded-[10px] bg-white p-1.5 shadow-card">
                <span className="relative block overflow-hidden whitespace-nowrap">
                    <AnimatePresence mode="popLayout" initial={false}>
                        <motion.span
                            key={copied ? "copied" : "click"}
                            initial={{ y: "100%" }}
                            animate={{ y: 0 }}
                            exit={{ y: "-100%" }}
                            transition={{ type: "spring", stiffness: 500, damping: 40 }}
                            className={`inline-block text-center ${copied ? "text-[#008000]" : "text-[#101010]"}`}
                        >
                            {copied ? "copied" : "click to copy"}
                        </motion.span>
                    </AnimatePresence>
                </span>
            </div>
        </HoverComp>
    )
}


