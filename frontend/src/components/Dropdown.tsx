import { useState, type ReactElement } from "react";



export interface DropdownProps {
  label: string;
  options: string[];
  onSelect: (option: string) => void;
  variant?: "primary" | "secondary";
  size?: "sm" | "md" | "lg";
  startIcon?: ReactElement;
  endIcon?: ReactElement;
  fullWidth?: boolean;
}

const variantStyles = {
  primary: "bg-primaryPink text-black",
  secondary: "text-white border-[#181818] border-y-2",
};

const sizeStyles = {
  sm: "px-4 py-1 text-sm",
  md: "px-4 py-2 text-base",
  lg: "px-12 py-3 text-lg",
};

const defaultButtonStyles =
  " flex gap-1 items-center justify-between cursor-pointer relative";

const dropdownMenuStyles =
  "absolute mt-1 z-10 bg-neutral-950/95 text-[#858585] shadow-lg w-full overflow-hidden";

export const Dropdown = ({
  label,
  options,
  onSelect,
  variant = "primary",
  size = "md",
  startIcon,
  endIcon,
  fullWidth,
}: DropdownProps) => {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState(label);

  const toggle = () => setOpen(!open);

  const handleSelect = (option: string) => {
    setSelected(option);
    onSelect(option);
    setOpen(false);
  };

  return (
    <div className={`relative ${fullWidth ? "w-full" : "w-max"}`}>
      <button
        type="button"
        onClick={toggle}
        className={`${variantStyles[variant]} ${defaultButtonStyles} ${sizeStyles[size]} ${fullWidth ? "w-full" : ""}`}
      >
        <span className="flex items-center gap-2">
          {startIcon}
          {selected}
        </span>
        {endIcon ?? <span>▼</span>}
      </button>

      {open && (
        <ul className={dropdownMenuStyles}>
          {options.map((option) => (
            <li
              key={option}
              onClick={() => handleSelect(option)}
              className="px-4 py-2 hover:bg-gray-900 cursor-pointer"
            >
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
