import { ButtonProps, Button as MUIButton } from '@mui/material';

interface IButtonProps extends ButtonProps { }

const Button = ({ children, ...rest }: IButtonProps) => {
    return (
        <MUIButton {...rest}>{children}</MUIButton>
    )
}

export default Button