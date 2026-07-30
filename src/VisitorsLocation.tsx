import { useState, useEffect } from "react"

type Location = {
    city: string
    country: string
}

function displayLocation(location: Location) {
    if (location.city && location.country) {
        return `${location.city}, ${location.country}`
    }
    if (location.country) {
        return `somewhere in ${location.country}`
    }
    return "somewhere on Earth"
}

export default function VisitorLocation() {
    const [location, setLocation] = useState<Location | null>(null)
    const [error, setError] = useState(false)

    useEffect(() => {
        fetch("https://ipwho.is/")
            .then((res) => res.json())
            .then((data) => {
                setLocation({
                    city: data.city || "",
                    country: data.country || "",
                })
            })
            .catch(() => setError(true))
    }, [])

    if (error) return <span>somewhere on Earth</span>
    if (!location) return <span>…</span>   // loading
    return <span>{displayLocation(location)}</span>
}