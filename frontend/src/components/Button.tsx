import type { ReactElement } from "react";

export interface ButtonProps {
    variant: "primary" | "secondary";
    size: "sm" | "md" | "lg";
    text: string;
    startIcon?: ReactElement;
    endIcon?: ReactElement;
    onClick: () => void
}

const variantStyles = {
    "primary": "bg-primaryPink text-black",
    "secondary": "bg-black text-white" 
}

const sizeStyles = {
    "sm": "px-4 py-1",
    "md": "px-8 py-2",
    "lg": "px-12 py-3",
}

const defaultStyles = "rounded-md flex gap-1 items-center justify-center"

export const Button = (props: ButtonProps) => {
    return <button className={`${variantStyles [props.variant]} ${defaultStyles} ${sizeStyles[props.size]}`} >
        {props.startIcon}
        {props.text}
        {props.endIcon}
    </button>
}

<Button variant='primary' size='md' text='hello' onClick={() => {}} />