import { useState } from "react"
import { motion, AnimatePresence } from "motion/react"
import avatar from "./assets/hover-avatar.png"

function XLink() {
    const [hovered, setHovered] = useState(false)

    return (
        <span
            className="relative inline-block"
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
        >
            <a
                href="https://x.com/TheProductGuy__"
                target="_blank"
                rel="noopener noreferrer"
                className={`underline decoration-[#AEAEAE] underline-offset-[2px] transition-colors duration-150 ${hovered ? "text-[#101010]" : "text-[#707070]"}`}
            >
                X/Twitter
            </a>

            <AnimatePresence>
                {hovered && (
                    <motion.div
                        initial={{
                            opacity: 0,
                            scale: 0.97,
                            x: "-50%",
                        }}
                        animate={{
                            opacity: 1,
                            scale: 1,
                            x: "-50%",
                        }}
                        exit={{
                            opacity: 0,
                            scale: 0.97,
                            x: "-50%",
                        }}
                        transition={{ type: "spring", stiffness: 500, damping: 40 }}
                        className="absolute bottom-full left-1/2 pb-2"
                    >
                        <div className="w-72 rounded-xl bg-white p-4 shadow-card">
                            <div className="flex items-center gap-2.5">
                                <img src={avatar} className="h-11 w-11 rounded-full object-cover shrink-0" />

                                <div className="min-w-0">
                                    <p className="text-sm flex items-center gap-1 font-medium text-[#101010]">
                                        Dan
                                        <span className="text-[#1d9bf0]" aria-label="Verified">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 12 12" fill="none">
                                                <g clip-path="url(#clip0_12880_3840)">
                                                    <path d="M4.02899 1.39967C4.72447 -0.318735 7.15007 -0.339941 7.87544 1.36608C9.58239 0.642812 11.3124 2.34291 10.619 4.06223C12.3374 4.75771 12.3586 7.18331 10.6526 7.90868C11.3759 9.61563 9.67578 11.3456 7.95645 10.6523C7.26098 12.3707 4.83538 12.3919 4.11 10.6858C2.40319 11.4091 0.673065 9.70901 1.36656 7.98969C-0.351971 7.29408 -0.373177 4.86861 1.33298 4.14324C0.609576 2.43629 2.30967 0.706169 4.02899 1.39967Z" fill="#0096F1" />
                                                    <path d="M5.28959 8.46826L3.14258 6.3568L3.88152 5.60469L5.24217 6.94295L7.91606 3.96216L8.70111 4.66685L5.28959 8.46826Z" fill="white" />
                                                </g>
                                                <defs>
                                                    <clipPath id="clip0_12880_3840">
                                                        <rect width="12" height="12" fill="white" />
                                                    </clipPath>
                                                </defs>
                                            </svg>
                                        </span>
                                    </p>

                                    <p className="text-sm text-[#707070] truncate">
                                        @TheProductGuy__
                                    </p>
                                </div>
                            </div>

                            <p className="mt-3 text-sm text-[#262626] leading-[22px]">
                                cracked designer + engineer —
                                founder{" "}
                                <a
                                    href="https://www.shapeslab.design/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-[#0F89DC] hover:underline"
                                >
                                    shapeslab.design
                                </a>
                            </p>

                            <div className="mt-3 flex items-center gap-4 text-sm">
                                <span className="text-[#2E2E2E]">
                                    <span className="font-medium tracking-[-0.2px]">860</span>{" "}
                                    <span className="text-[#707070]">Following</span>
                                </span>
                                <span className="text-[#2E2E2E]">
                                    <span className="font-medium tracking-[-0.2px]">2,702</span>{" "}
                                    <span className="text-[#707070]">Followers</span>
                                </span>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </span>
    )
}

export default XLink
