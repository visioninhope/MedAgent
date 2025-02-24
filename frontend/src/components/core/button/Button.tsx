import {ButtonProps} from "@/types/PropTypes";

export function Button({ label, onClick, children }: ButtonProps) {
  return (
    <button
      className={`inline-flex items-center justify-center gap-2 
                  bg-blue-500 text-white px-4 py-2 rounded 
                  hover:bg-blue-600 ${!label ? 'p-2' : ''}`}
      onClick={onClick}
    >
      {label && <span>{label}</span>}
      {children}
    </button>
  );
}
