import { useEffect } from "react"
import HoverComp from "./HoverComp"
import trophy from "./assets/arsenal-champions.png"

export default function FootballLink() {

    // preload the image so it's cached before the first hover
    useEffect(() => {
        const img = new Image()
        img.src = trophy
    }, [])

    return (
        <HoverComp trigger={
            <a
                href="https://en.wikipedia.org/wiki/Premier_League"
                target="_blank"
                rel="noopener noreferrer"
                className={`underline decoration-[#AEAEAE] underline-offset-[2px] transition-colors duration-150 text-[#707070] hover:text-[#101010]`}
            >
                football
            </a>}
        >
            <div className="w-72 overflow-hidden rounded-2xl bg-white p-1 shadow-card">
                <img
                    src={trophy}
                    alt="Arsenal lifting the Premier League trophy"
                    className="block w-full rounded-xl object-cover"
                />
            </div>
        </HoverComp>
    )
}
