import type { ReactElement } from "react";

export interface ButtonProps {
    variant: "primary" | "secondary";
    size: "sm" | "md" | "lg";
    text: string;
    startIcon?: ReactElement;
    endIcon?: ReactElement;
    onClick?: () => void
    fullWidth?: boolean
}

const variantStyles = {
    "primary": "bg-primaryPink text-black hover:bg-rose-400",
    "secondary": "bg-none text-white hover:bg-neutral-900" 
}

const sizeStyles = {
    "sm": "px-4 py-1",
    "md": "px-8 py-2",
    "lg": "px-12 py-3",
}

const defaultStyles = "rounded-md flex gap-1 items-center justify-center cursor-pointer";

export const Button = (props: ButtonProps) => {
    return (
  <button
    type="button" 
    onClick={props.onClick}
    className={`${variantStyles[props.variant]} ${defaultStyles} ${sizeStyles[props.size]} ${props.fullWidth ? " w-full" : " "}`}
  >
    {props.startIcon}
    {props.text}
    {props.endIcon}
  </button>
);
}

