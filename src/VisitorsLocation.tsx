import type { Location } from "./types"

function displayLocation(location: Location) {
    if (location.city && location.country) {
        return `${location.city}, ${location.country}`
    }
    if (location.country) {
        return `somewhere in ${location.country}`
    }
    return "somewhere on Earth"
}

type VisitorLocationProps = {
    location: Location | null
    error: boolean
}

export default function VisitorLocation({ location, error }: VisitorLocationProps) {

    if (error) return <span>somewhere on Earth</span>
    if (!location) return <span>…</span>   // loading
    return <span>{displayLocation(location)}</span>
}