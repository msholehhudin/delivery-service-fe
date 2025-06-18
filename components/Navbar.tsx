import { Moon } from "lucide-react";
import Link from "next/link";
import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

const Navbar = () => {
  return (
    <nav className="p-4 flex items-center justify-between border border-red-500">
      {/* LEFT */}
      Collapse button test 1 w{/* RIGHT */}
      <div className="flex items-center gap-4">
        <Link href={"/"}>Dashboard</Link>
        <Moon />
        <Avatar>
          <AvatarImage src="https://avatars.githubusercontent.com/u/44259963?u=e6abdcfce6f55fbe6df2c5a8762a4a6516cb0bcb&v=4&size=64" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </div>
    </nav>
  );
};

export default Navbar;
