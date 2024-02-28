import { TextField as MUITextField, TextFieldProps } from "@mui/material"

const TextField = ({ variant, ...rest }: TextFieldProps) => {
    return (
        <MUITextField id={`${variant}-basic`} label={variant} variant={variant} {...rest} />
    )
}

export default TextField;