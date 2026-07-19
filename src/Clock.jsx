import { useEffect, useState } from "react"
import { motion, AnimatePresence, useReducedMotion } from "motion/react"

function Digit({ char }) {
    const reduce = useReducedMotion()
    return (
        <span
            aria-hidden="true"
            className="relative inline-block overflow-hidden"
        >
            <AnimatePresence mode="popLayout">
                <motion.span
                    key={char}
                    initial={{ y: "100%" }}
                    animate={{ y: 0 }}
                    exit={{ y: "-100%" }}
                    transition={{ type: "spring", stiffness: 200, damping: 30 }}
                    className="inline-block"
                >
                    {char}
                </motion.span>
            </AnimatePresence>
        </span>
    )
}

export default function Clock() {
    const [now, setNow] = useState(new Date())

    useEffect(() => {
        const id = setInterval(() => setNow(new Date()), 1000)
        return () => clearInterval(id)
    }, [])

    const parts = new Intl.DateTimeFormat("en-GB", {
        timeZone: "Europe/London",
        hour: "numeric",
        minute: "2-digit",
        hour12: true,
    }).formatToParts(now)

    const getPart = (type) => parts.find((p) => p.type === type)?.value ?? ""

    const hour = getPart("hour")
    const minute = getPart("minute")
    const meridiem = getPart("dayPeriod")

    const time = `${hour}:${minute}${meridiem}`

    return (
        <span
            aria-label={`${time} in London, UK`}
            className="inline-flex items-baseline"
        >
            {hour.split("").map((char, i) => (
                <Digit key={`h${i}`} char={char} />
            ))}
            <span aria-hidden="true">:</span>
            {minute.split("").map((char, i) => (
                <Digit key={`m${i}`} char={char} />
            ))}
            <span aria-hidden="true">{meridiem}</span>
        </span>
    )
}
