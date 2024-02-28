import React from "react"

const Button = ({ handleClick, children }: any) => {
    console.log('Rendering button - ', children)
    return (
        <button onClick={handleClick}>
            {children}
        </button>
    )
}


export default React.memo(Button)