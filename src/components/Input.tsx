export type InputProps = {
    value: string;
    handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}
export const Input = (props: InputProps) => {
    // return <input type="text" value={props.value} onChange={props.handleChange} />
    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        console.log(event);
        console.log(event.target.value);

    }
    return <input type="text" value={props.value} onChange={handleInputChange} />
}