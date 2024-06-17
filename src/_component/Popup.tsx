"use client";

import React from "react";
import Calendar from "./Calendar";
import { usePopupStore } from "@/stores/Popup";

const Popup = () => {
  const popup = usePopupStore((state) => state.popup);

  return popup ? (
    <section className="fixed flex justify-center overflow-scroll inset-0 z-50 bg-black/60">
      <Calendar classname="absolute h-fit top-1/2 -translate-y-1/2 p-8" />
    </section>
  ) : (
    <></>
  );
};

export default Popup;
