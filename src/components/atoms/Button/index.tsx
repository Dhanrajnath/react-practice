import { Button, ButtonProps, styled } from "@mui/material";
import theme from "../../../utils/theme";


const StyledButton = styled(Button)(theme.typography.button);


export const MUIButton = ({
    children,
    ...rest
}: ButtonProps) => {
    return (
        <StyledButton
            {...rest}
        >
            {children}
        </StyledButton>
    )
}