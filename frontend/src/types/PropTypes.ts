import React from "react";

// Core/Button props
export interface ButtonProps {
    label?: string;
    onClick?: () => void;
    disabled?: boolean;
    variant?: 'primary' | 'secondary' | 'tertiary';
    children?: React.ReactNode;
}


// Composite/Modal props
export type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  description?: string;
};
