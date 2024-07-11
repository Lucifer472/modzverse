"use client";
import { useEffect, useState } from "react";
import { getBlogsForClient } from "@/action/get-blogs";

import textSlice from "@/lib/text-util";

import Image from "next/image";
import Link from "next/link";

export const MiddleArticleBlogs = () => {
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    getBlogsForClient().then((res) => {
      setData(res);
    });
  }, []);

  if (!data) return;

  return (
    <div className="flex items-center justify-center w-full flex-col gap-y-2">
      <h2
        style={{
          fontSize: "16px",
        }}
        className="border-b border-black"
      >
        Related Articles:
      </h2>
      <div className="flex items-center justify-center flex-wrap md:flex-nowrap gap-y-1 gap-x-1 w-full">
        {data.map((d: any) => (
          <Link
            key={d.id}
            href={"/" + d.url}
            className="flex flex-col items-center justify-center gap-y-1 p-1 border border-gray-200 rounded-md shadow-sm w-fit max-w-[49%] xss:max-w-[181px] h-[150px]"
          >
            <figure
              style={{ margin: "0" }}
              className="relative aspect-video w-full max-w-[158px]"
            >
              <Image src={d.img} alt="" style={{ objectFit: "cover" }} fill />
            </figure>
            <h2
              style={{
                fontSize: "12px",
                textAlign: "center",
                lineHeight: "24px",
              }}
            >
              {textSlice(d.title, 35)}
            </h2>
          </Link>
        ))}
      </div>
    </div>
  );
};
