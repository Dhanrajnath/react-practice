import TextField, { BaseTextFieldProps } from '@mui/material/TextField';
import { useState } from "react";
import { IconButton } from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";

export interface IMUITextFieldProps extends BaseTextFieldProps {
    type?: 'text' | 'password';
    required?: boolean;
    variant?: "filled" | "standard" | "outlined";
    label?: string;
    placeholder?: string;
    onChange?: React.ChangeEventHandler<HTMLTextAreaElement | HTMLInputElement>;
    handleChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    validate?: (value: string) => boolean;
    error?: boolean;
    showPassword?: boolean;
    togglePasswordVisibility?: () => void;
}

const MUITextField = ({
    type = 'text',
    required = false,
    variant = "outlined",
    label,
    placeholder,
    onChange,
    handleChange,
    validate,
    error,
    showPassword = false,
    togglePasswordVisibility,
    ...rest
}: IMUITextFieldProps) => {
    return (
        <TextField
            required={required}
            variant={variant}
            label={label}
            id={`${variant}-${label}`}
            placeholder={placeholder}
            onChange={handleChange}
            type={type === 'password' && !showPassword ? 'password' : 'text'}
            error={error}
            InputProps={{
                endAdornment: type === 'password' && (
                    <IconButton
                        edge="end"
                        onClick={togglePasswordVisibility}
                    >
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                )
            }}
            {...rest}
        />
    )
}

export default MUITextField