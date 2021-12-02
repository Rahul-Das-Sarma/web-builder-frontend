import React from "react";
import "tailwindcss/tailwind.css";
interface Props {}

const TopBar = (props: Props) => {
  return (
    <div className="bg-#fafafa w-100% h-14 pl-8 pt-3 shadow-sm">
      <h1 className="text-xl font-semibold">Web Builder</h1>
    </div>
  );
};

export default TopBar;
