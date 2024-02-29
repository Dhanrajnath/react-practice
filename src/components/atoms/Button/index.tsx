import React, { MouseEventHandler } from "react";
import { Button, ButtonProps, styled } from "@mui/material";

export interface IButtonProps extends ButtonProps {
    size?: 'small' | 'medium' | 'large';
    variant?: 'text' | 'contained' | 'outlined';
    startIcon?: React.ReactNode;
    endIcon?: React.ReactNode;
    children?: React.ReactNode;
}

const StyledButton = styled(Button)({
    fontSize: '14px',
    fontWeight: 600,
    fontStyle: 'normal',
    lineHeight: '21px',
    letterSpacing: '0.8px',
    textTransform: 'none',
    borderRadius: '4px',
});


export const MUIButton = ({
    size,
    variant,
    startIcon,
    endIcon,
    children,
    ...rest
}: IButtonProps) => {
    return (
        <StyledButton
            size={size}
            variant={variant}
            startIcon={startIcon}
            endIcon={endIcon}
            {...rest}
        >
            {children}
        </StyledButton>
    )
}