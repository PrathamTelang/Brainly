interface InputProps {
    placeholder: string;
    reference?: any
}

export function Input({placeholder, reference}: InputProps) {
    return <div>
        <input ref={reference} placeholder={placeholder} type={"text"} className="h-14 w-full px-4 py-2 text-white border-[#181818] border-y-2 my-2" />
    </div>
}