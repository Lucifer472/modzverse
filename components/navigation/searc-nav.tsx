"use client";

import { category } from "@/constant";
import { useNavStore } from "@/state";
import { useEffect } from "react";
import { Button } from "../ui/button";
import Link from "next/link";

const SearchNav = () => {
  const toggle = useNavStore((state) => state.toggle);

  useEffect(() => {
    toggle(false);

    return () => toggle(true);
  }, [toggle]);
  return (
    <div className="py-8 w-full mt-[200px] flex flex-col items-center justify-center sm:mt-0">
      <h2 className="py-6 text-5xl md:text-7xl font-medium text-center w-full">
        <span className="text-[#a03131]">Mod</span>Verse <br />
        <p className="text-xs font-light">Find It Fast, Find It Right</p>
      </h2>
      <div className="w-full max-w-[650px] mx-auto">
        <div className="gcse-search"></div>
      </div>
      <div className="pt-12 flex items-center justify-center gap-4 flex-wrap">
        {category.map((c) => (
          <Button
            key={c.label}
            variant={"secondary"}
            className="text-sm md:text-xl sm:w-[200px] font-[400] md:w-[280px]"
            asChild
          >
            <Link href={c.link}>{c.label}</Link>
          </Button>
        ))}
      </div>
    </div>
  );
};

export default SearchNav;
