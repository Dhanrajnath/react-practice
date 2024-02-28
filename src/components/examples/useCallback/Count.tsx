import React from "react"

type CountProps = {
    text: string
    count: number
}
const Count = ({ text, count }: CountProps) => {
    console.log(`Rendering ${text}`)
    return <div>{text} - {count}</div>
}

export default React.memo(Count)