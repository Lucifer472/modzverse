import { create } from "zustand";

interface useNavStoreProps {
  isShow: boolean;
  toggle: (b: boolean) => void;
}

export const useNavStore = create<useNavStoreProps>((set) => ({
  isShow: true,
  toggle: (b) => set({ isShow: b }),
}));

interface useAdStateProp {
  adCode: {
    label: string;
    id: string;
    size: googletag.GeneralSize;
  }[];
  setAdCode: (
    code: {
      label: string;
      id: string;
      size: googletag.GeneralSize;
    }[]
  ) => void;
}

export const useAdState = create<useAdStateProp>((set) => ({
  adCode: [
    {
      label: "/23060189646/N5",
      id: "3355809270",
      size: [336, 280],
    },
    {
      label: "/23060189646/N6",
      id: "6798324945",
      size: [336, 280],
    },
    {
      label: "/23060189646/N7",
      id: "9799813250",
      size: [336, 280],
    },
    {
      label: "/23060189646/N8",
      id: "2052034379",
      size: [336, 280],
    },
    {
      label: "/23060189646/MSG_5_336X280",
      id: "9830277345",
      size: [336, 280],
    },
    {
      label: "/22725519965/106",
      id: "8430948652",
      size: [336, 280],
    },
  ],
  setAdCode: (code) => set({ adCode: code }),
}));
