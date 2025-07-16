import { CrossIcon } from "../icons/CrossIcon";
import { Button } from "./Button";

export function CreateContentModal({open, onClose}) {

    return <div>
        {open && 
            <div onClick={onClose} className="w-screen h-screen fixed ">
                    <div 
                    onClick={(e) => e.stopPropagation()} 
                    className=" bg-neutral-950/95 fixed top-4 right-4 h-80 w-lg rounded-2xl border-[#181818] border-2 p-4">
                        <div className="flex justify-between text-white ">
                            <h1 className="text-primaryPink text-2xl">Add Content</h1>
                            <div onClick={onClose} className="cursor-pointer">
                                <CrossIcon/>
                            </div>
                        </div>
                        <div className="mt-2 ">
                        <Input placeholder={"Title"} />
                        <Input placeholder={"Link"} />
                        </div>
                        <div className="flex justify-center mt-4">
                            <Button 
                            variant="primary" 
                            text="Submit" 
                            size="lg" 
                            onClick={() => {}}
                            />
                        </div>
                    </div>
                    
            </div>
        }
    </div>
}

function Input({onChange, placeholder}: {onChange: () => void}) {
    return <div>
        <input placeholder={placeholder} type={"text"} className="h-14 w-full px-4 py-2 text-white border-[#181818] border-y-2 my-2 " onChange={onChange} />
    </div>
}