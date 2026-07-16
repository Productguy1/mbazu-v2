import { useEffect, useState } from "react"

export default function Clock() {
    const [now, setNow] = useState(new Date())

    useEffect(() => {
        const id = setInterval(() => { setNow(new Date()) }, 1000)
        return () => clearInterval(id)
    }, [])

    return <span>
        {now.toLocaleTimeString("en-GB", {
            timeZone: "Europe/London",
            hour: "numeric",
            minute: "2-digit",
            hour12: true
        })
            .replace(" ", "")
        }
    </span>
}