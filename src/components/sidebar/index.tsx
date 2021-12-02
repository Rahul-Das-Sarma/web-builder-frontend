import React from "react";
import "tailwindcss/tailwind.css";
// @ts-ignore
import { PencilIcon, ArchiveIcon, TemplateIcon } from "@heroicons/react/solid";
interface Props {}

const SideBar = (props: Props) => {
  return (
    <div className="pl-8 pt-6">
      <PencilIcon className="h-5 w-5 text-blue-500" />
      <ArchiveIcon className="h-5 w-5 mt-4 text-blue-500" />
      <TemplateIcon className="h-5 w-5 mt-4 text-blue-500" />
    </div>
  );
};

export default SideBar;
