import { cleanup } from "@testing-library/react"
import { useEffect, useState } from "react"

export type ContainerProps = {
    styles: React.CSSProperties
}
export const Container = (props: ContainerProps) => {
    // { border: '1px solid black', padding: '1rem' }
    const [time, setTime] = useState(new Date().toLocaleTimeString())

    useEffect(() => {
        var timer = setInterval(() => setTime(new Date().toLocaleTimeString()), 1000)
        return () => {
            clearInterval(timer)
        }
    }, [])

    return (
        <div style={props.styles}>
            {time}
        </div>
    )
}