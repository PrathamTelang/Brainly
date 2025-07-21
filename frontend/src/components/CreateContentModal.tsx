import { useRef } from "react";
import { CrossIcon } from "../icons/CrossIcon";
import { Button } from "./Button";
import { Input } from "./Input";

export function CreateContentModal({open, onClose}) {
    const titleRef = useRef<HTMLInputElement>(null);
    const linkRef = useRef<HTMLInputElement>(null);

    function addContent() {
        const title = titleRef.current?.value;
        const link = linkRef.current?.value;
    }

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
                        <Input reference={titleRef} placeholder={"Title"} />
                        <Input reference={linkRef} placeholder={"Link"} />
                        </div>
                        <div className="flex justify-center mt-4">
                            <Button 
                            variant="primary" 
                            text="Submit" 
                            size="lg"
                            fullWidth={true} 
                            onClick={addContent} 
                            />
                        </div>
                    </div>
            </div>
        }
    </div>
}

