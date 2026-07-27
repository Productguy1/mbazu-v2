// usePreloadImage.js
import { useEffect } from "react"

export function usePreloadImage(src) {
    useEffect(() => {
        const img = new Image()
        img.src = src
    }, [src])
}