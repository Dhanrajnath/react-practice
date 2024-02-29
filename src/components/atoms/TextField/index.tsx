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
    validate?: (value: string) => boolean;
}

const MUITextField = ({
    type = 'text',
    required = false,
    variant = "outlined",
    label,
    placeholder,
    onChange,
    validate,
    ...rest
}: IMUITextFieldProps) => {
    const [value, setValue] = useState('');
    const [error, setError] = useState(false);
    const [showPassword, setShowPassword] = useState(false);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const newValue = event.target.value;
        setValue(newValue);
        if (validate && !validate(newValue)) {
            setError(true);
        } else {
            setError(false);
        }
        if (onChange) {
            onChange(event);
        }
    };

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

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