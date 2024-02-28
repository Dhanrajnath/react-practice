import React, { useEffect, useState } from "react";

export type ButtonProps = {
    variant: 'primary' | 'secondary';
    children: string;
} & Omit<React.ComponentProps<'button'>, 'children'>

export const CustomizedButton = ({ variant, children, ...rest }: ButtonProps) => {
    const [id, setId] = useState(0)
    useEffect(() => { console.log('component mount'); })
    useEffect(() => {
        console.log('component update');

        return () => {
            console.log('component unmount');
        }
    }, [id])
    return (
        <button className={`class-with-${variant}`} {...rest} onClick={() => { setId(id + 1) }}>
            {children} {id}
        </button>
    )
}
