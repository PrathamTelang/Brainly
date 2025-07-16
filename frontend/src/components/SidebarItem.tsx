import type { ReactElement } from "react";

export function SidebarItem({text,icon,bgColor}: {
  text: string;
  icon: ReactElement;
  bgColor?: string;
}) {
  return (
    <div className={`flex gap-2 items-center px-2 py-4 my-4 cursor-pointer rounded ${bgColor}`}>
      {icon}
      {text}
    </div>
  );
}
