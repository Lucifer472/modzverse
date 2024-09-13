"use client";

import { useEffect } from "react";

export const MgAd2 = () => {
  useEffect(() => {
    (function (w: any, q: any) {
      w[q] = w[q] || [];
      w[q].push(["_mgc.load"]);
    })(window, "_mgq");
  }, []);

  return <div data-type="_mgwidget" data-widget-id="1670046"></div>;
};
