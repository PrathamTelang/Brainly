import { TwitterIcon } from "../icons/TwitterIcon";
import { YoutubeIcon } from "../icons/YoutubeIcon";
import { SidebarItem } from "./SidebarItem";

export function Sidebar () {
    return <div className="h-screen w-72 fixed left-0 top-0 p-4">
        <h1 className="text-3xl text-primaryPink mt-3">
            SECOND BRAIN
        </h1>
        <div className="pt-8 ">
            <SidebarItem text="Twitter" icon={<TwitterIcon size="lg"/>} bgColor="bg-[#00E599]" />
            <SidebarItem text="Youtube" icon={<YoutubeIcon size="lg"/>} bgColor="bg-[#FFD91A]" />
            <SidebarItem text="Document" icon={<TwitterIcon size="lg"/>} bgColor="bg-[#FF7733]" />
            <SidebarItem text="Links" icon={<YoutubeIcon size="lg"/>} bgColor="bg-[#FF3366]" />
            <SidebarItem text="Tags" icon={<TwitterIcon size="lg"/>} bgColor="bg-[#A54CFE]" />
            
        </div>
    </div>
}