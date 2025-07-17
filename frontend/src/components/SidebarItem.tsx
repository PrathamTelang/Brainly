import type { ReactElement } from "react";

export function SidebarItem({text,icon,bgColor}: {
  text: string;
  icon: ReactElement;
  bgColor?: string;
}) {
  return (
    <div className={`flex gap-2 items-center px-2 py-4 my-4 cursor-pointer rounded hover:scale-105 hover:shadow-lg transform transition-transform  ${bgColor}`}>
      {icon}
      {text}
    </div>
  );
}
