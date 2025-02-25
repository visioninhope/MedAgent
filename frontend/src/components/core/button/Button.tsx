import React from 'react';
import { ButtonProps } from '@/types/PropTypes';
import '@/styles/additional_styles.css';

const Button: React.FC<ButtonProps> = ({ label, onClick, disabled, variant = 'primary', children }) => {
    const variantClasses = {
        primary: 'bg-primary text-white',
        secondary: 'bg-secondary text-white',
        tertiary: 'bg-tertiary text-white',
        disabled: 'bg-gray-300 text-gray-600 cursor-not-allowed',
    };

    const classes = `button ${disabled ? variantClasses.disabled : variantClasses[variant]}`;

    return (
        <button className={classes} onClick={onClick} disabled={disabled}>
            {children || label}
        </button>
    );
};

export default Button;
