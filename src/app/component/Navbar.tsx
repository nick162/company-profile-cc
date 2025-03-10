import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Navbar = () => {
  return (
    <nav className="bg-transparent absolute top-0 left-0 w-full z-50">
      <div className="container mx-auto px-6 lg:px-16 py-4 flex justify-between items-center">
        {/* Logo */}
        <a
          className="text-white text-2xl font-bold flex items-center gap-2"
          href="/"
        >
          ☕ COFFEE MANTAN
        </a>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6 text-white font-medium">
          <li>
            <a href="/" className={`hover:text-[#ed494f]`}>
              Home
            </a>
          </li>
          <li>
            <a href="/about" className="hover:text-[#ed494f]">
              About
            </a>
          </li>
          <li>
            <a href="/menu" className="hover:text-[#ed494f]">
              Produk
            </a>
          </li>
          <li>
            <a href="/team" className="hover:text-[#ed494f]">
              Teams
            </a>
          </li>
        </ul>
        <Button
          variant="outline"
          className="border-purple hidden text-black ml-2 md:block hover:text-[#b6895b]"
        >
          <a href="#footer">Contact</a>
        </Button>
        <DropdownMenu>
          <DropdownMenuTrigger className="block md:hidden">
            <a
              href="#"
              id="menu"
              className="hover:text-[#b6895b] text-white md:hidden"
            >
              <Menu />{" "}
            </a>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuLabel>
              <a href="/" className={`hover:text-[#b6895b]`}>
                Home
              </a>
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <a href="/about" className="hover:text-[#b6895b]">
                About
              </a>
            </DropdownMenuItem>
            <DropdownMenuItem>
              {" "}
              <a href="/menu" className="hover:text-[#b6895b] ">
                Produk
              </a>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <a href="/team" className="hover:text-[#b6895b]">
                Teams
              </a>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </nav>
  );
};

export default Navbar;
