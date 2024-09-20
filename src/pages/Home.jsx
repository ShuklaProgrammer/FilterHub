import ItemLists from "@/components/mycomponents/ItemLists"; // imported from mycomponents
import SearchInput from "@/components/mycomponents/SearchInput"; // imported from mycomponents
import React from "react";

import { FaFilter } from "react-icons/fa";

import { Moon, Sun } from "lucide-react";

// imported button from button
import { Button } from "@/components/ui/button";
// imported dropdown menu from shadcn
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useTheme } from "@/components/theme-provider"; // shadcn component

const Home = () => {
  const { setTheme } = useTheme();
  return (
    <section className="flex items-center justify-center my-4">
      <main className="sm:w-[80%] w-[90%] rounded-lg space-y-5">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" size="icon">
              <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
              <span className="sr-only">Toggle theme</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem onClick={() => setTheme("light")}>
              Light
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => setTheme("dark")}>
              Dark
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => setTheme("system")}>
              System
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
        <div className="flex items-center justify-center">
          <h1 className="text-red-600 font-semibold text-4xl flex items-center">
            <FaFilter />
            FilterHub
          </h1>
        </div>
        <div className="flex justify-center">
          <SearchInput />
        </div>
        <ItemLists />
      </main>
    </section>
  );
};

export default Home;
