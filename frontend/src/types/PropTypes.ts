// Core/Button props
export type ButtonProps = {
  label?: string;
  onClick?: () => void;
  children?: React.ReactNode;
  disabled?: boolean;
};

// Composite/Modal props
export type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  description?: string;
};
