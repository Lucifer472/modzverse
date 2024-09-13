"use client";

import { useEffect } from "react";

export const MgAd1 = () => {
  useEffect(() => {
    // This will load the widget when the component mounts
    (function (w: any, q: any) {
      w[q] = w[q] || [];
      w[q].push(["_mgc.load"]);
    })(window, "_mgq");
  }, []);

  return <div data-type="_mgwidget" data-widget-id="1669637"></div>;
};
