import React from "react";

// Core/Button props
export interface ButtonProps {
    label?: string;
    onClick?: () => void;
    disabled?: boolean;
    variant?: 'primary' | 'secondary' | 'tertiary';
    children?: React.ReactNode;
}

// Core/Link props
export interface LinkProps {
    href: string;
    label?: string;
    external?: boolean;
    children?: React.ReactNode;
}

// Core/Stack props
export interface StackProps {
    direction?: 'vertical' | 'horizontal';
    spacing?: string;
    wrap?: boolean;
    align?: 'start' | 'center' | 'end' | 'stretch';
    justify?: 'start' | 'center' | 'between' | 'around' | 'end';
    children: React.ReactNode;
    className?: string;
}

// Composite/Modal props
export type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  description?: string;
};
