import React from 'react';
import { ButtonProps } from '@/types/PropTypes';
import '@/styles/additional_styles.css';

const Button: React.FC<ButtonProps> = ({ label, onClick, disabled, variant = 'primary', children }) => {
    const baseClasses = 'px-4 py-2 rounded-md font-medium transition-all';
    const variantClasses = {
        primary: 'bg-primary text-white hover:brightness-110 active:brightness-75',
        secondary: 'bg-secondary text-white hover:brightness-110 active:brightness-75',
        tertiary: 'bg-tertiary text-white hover:brightness-110 active:brightness-75',
        disabled: 'bg-gray-300 text-gray-600 cursor-not-allowed',
    };

    const classes = `${baseClasses} ${disabled ? variantClasses.disabled : variantClasses[variant]}`;

    return (
        <button className={classes} onClick={onClick} disabled={disabled}>
            {children || label}
        </button>
    );
};

export default Button;
