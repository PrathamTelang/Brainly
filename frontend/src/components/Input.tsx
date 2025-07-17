export function Input({onChange, placeholder}: {placeholder:string; onChange: () => void}) {
    return <div>
        <input placeholder={placeholder} type={"text"} className="h-14 w-full px-4 py-2 text-white border-[#181818] border-y-2 my-2 " onChange={onChange} />
    </div>
}