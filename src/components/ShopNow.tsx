import React from "react";
import { ArrowRight } from "lucide-react";

import Vegetables from "../assets/Vegetablec.avif";
import Grains from "../assets/Grains.avif";
import Flowers from "../assets/Roses.jpg";
import Fruits from "../assets/Fruits.avif";
import Dairy from "../assets/Dairy.avif";

const ShopNow = () => {
  return (
    <section className="bg-[#E8E2D0] px-10 py-20">

      {/* Header */}
      <div className="flex items-end justify-between mb-10">
        <div>
          <h1 className="text-[#BF7E28] text-xs font-semibold">
            SHOP BY CATEGORY
          </h1>

          <p className="font-serif text-4xl font-bold leading-[1.05] tracking-[-1px] text-[#17200D] mt-3">
            What's in
            <br />
            season now?
          </p>
        </div>

        <a
          href="#categories"
          className="font-serif text-xl text-[#286B16] hover:underline flex gap-1 font-bold items-center"
        >
          All categories
          <ArrowRight size={18} />
        </a>
      </div>

      {/* Categories */}
      <div
        id="categories"
        className="grid grid-cols-4 grid-rows-2 gap-5 h-[380px]"
      >

        {/* Vegetables */}
        <div className="group relative col-span-2 row-span-2 overflow-hidden rounded-3xl">
          <img
            src={Vegetables}
            alt="Vegetables"
            className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-110"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

          <div className="absolute bottom-8 left-8 text-white">
            <h2 className="font-serif text-2xl font-semibold">
              Vegetables
            </h2>
          </div>
        </div>

        {/* Flowers */}
        <div className="group relative overflow-hidden rounded-3xl">
          <img
            src={Flowers}
            alt="Flowers"
            className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-110"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

          <h2 className="font-serif text-xl text-white absolute bottom-3 left-5">
            Flowers
          </h2>
        </div>

        {/* Grains */}
        <div className="group relative overflow-hidden rounded-3xl">
          <img
            src={Grains}
            alt="Grains"
            className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-110"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

          <h2 className="font-serif text-xl text-white absolute bottom-3 left-5">
            Grains
          </h2>
        </div>

        {/* Fruits */}
        <div className="group relative overflow-hidden rounded-3xl">
          <img
            src={Fruits}
            alt="Fruits"
            className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-110"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

          <h2 className="font-serif text-xl text-white absolute bottom-3 left-5">
            Fruits
          </h2>
        </div>

        {/* Dairy */}
        <div className="group relative overflow-hidden rounded-3xl">
          <img
            src={Dairy}
            alt="Dairy and Eggs"
            className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-110"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

          <h2 className="font-serif text-xl text-white absolute bottom-3 left-5">
            Dairy & Eggs
          </h2>
        </div>

      </div>
    </section>
  );
};

export default ShopNow;