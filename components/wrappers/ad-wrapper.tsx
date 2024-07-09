"use client";
import { useEffect } from "react";
import { usePathname } from "next/navigation";
import Script from "next/script";

export const AdsWrapper = ({
  id,
  label,
  size,
  divSize,
}: {
  id: string;
  label: string;
  size: googletag.GeneralSize;
  divSize?: { x: number; y: number };
}) => {
  const pathname = usePathname();

  // window.googletag = window.googletag || { cmd: [] };

  // useEffect(() => {
  //   let sl: googletag.Slot | null;

  //   googletag.cmd.push(function () {
  //     sl = googletag.defineSlot(label, size, id);
  //     if (sl !== null) {
  //       sl.addService(googletag.pubads());
  //     }
  //     // googletag.pubads().enableSingleRequest();
  //     googletag.enableServices();

  //     googletag.pubads().addEventListener("slotOnload", (e) => {
  //       if (sl === e.slot) {
  //         console.log("Ads Loaded");
  //       } else {
  //         console.log(e.slot);
  //         console.log("Ad Was Not loaded :" + e.slot.getSlotElementId());
  //       }
  //     });
  //     googletag.display(id);
  //   });
  //   return () => {
  //     if (googletag && sl !== null) {
  //       googletag.cmd.push(function () {
  //         googletag.destroySlots([sl as googletag.Slot]);
  //       });
  //     }
  //   };
  // }, [pathname, id, label, size]);

  useEffect(() => {
    var ads = document.getElementsByClassName("adsbygoogle").length;
    for (var i = 0; i < ads; i++) {
      try {
        // @ts-ignore
        (window.adsbygoogle = window.adsbygoogle || []).push({});
      } catch (e) {
        console.log(e);
      }
    }
  }, [pathname]);

  return (
    <div className="text-center w-full mx-auto">
      <span className="text-[10px]">SPONSORED</span>
      <ins
        className="adsbygoogle"
        style={{
          display: "block",
          // minWidth: divSize ? divSize.x : "336px",
          // minHeight: divSize ? divSize.y : "280px",
        }}
        data-ad-client="ca-pub-3776330853847527"
        data-ad-slot={id.toString()}
        data-ad-format="auto"
        data-full-width-responsive="true"
      ></ins>
    </div>
  );
};
