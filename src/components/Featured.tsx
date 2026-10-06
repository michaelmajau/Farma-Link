import React from "react";
import {
  ArrowRight,
  Heart,
  Leaf,
  MapPin,
  Plus,
  Star,
} from "lucide-react";
import { Link } from "react-router-dom";

// Images
import Coffee from "../assets/Coffee.avif";
import Plantains from "../assets/plantain.avif";
import Eggs from "../assets/eggs.avif";
import Tomatoes from "../assets/Tomatoes.avif";

const products = [
  {
    id: 1,
    name: "Ready-to-Brew Coffee",
    price: "KSh 1,500",
    unit: "",
    location: "Meru, Kenya",
    image: Coffee,
    rating: "4.8",
    reviews: 124,
    organic: true,
    link: "/products/coffee",
  },
  {
    id: 2,
    name: "Plantains",
    price: "KSh 700",
    unit: "/kg",
    location: "Tharaka, Kenya",
    image: Plantains,
    rating: "4.9",
    reviews: 89,
    organic: true,
    link: "/products/plantains",
  },
  {
    id: 3,
    name: "Eggs",
    price: "KSh 480",
    unit: "/tray",
    location: "Nairobi, Kenya",
    image: Eggs,
    rating: "5.0",
    reviews: 211,
    organic: false,
    link: "/products/eggs",
  },
  {
    id: 4,
    name: "Fresh Tomatoes",
    price: "KSh 200",
    unit: "/kg",
    location: "Kiambu, Kenya",
    image: Tomatoes,
    rating: "4.7",
    reviews: 176,
    organic: false,
    link: "/products/tomatoes",
  },
];

const Featured = () => {
  return (
    <section className="bg-[#F5F3EA] py-12 sm:py-14 lg:py-16">
      <div className="mx-auto max-w-[1600px] px-5 sm:px-8 lg:px-12">

        {/* Header */}
        <div className="mb-8 flex items-end justify-between sm:mb-10">
          <div>
            <p className="mb-2 text-[11px] font-semibold tracking-[0.18em] text-[#BF7E28] sm:text-xs">
              HAND PICKED
            </p>

            <h2 className="font-serif text-3xl font-semibold tracking-tight text-[#17200D] sm:text-4xl lg:text-[44px]">
              Featured Listings
            </h2>
          </div>

          {/* Desktop See All */}
          <Link
            to="/products"
            className="group hidden items-center gap-2 font-serif text-base font-semibold text-[#286B16] sm:flex"
          >
            <span>See all</span>

            <ArrowRight
              size={18}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </Link>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-4">

          {products.map((product) => (
            <article
              key={product.id}
              className="
                group
                flex h-full flex-col
                overflow-hidden
                rounded-2xl
                border border-[#DDDCD5]
                bg-white
                shadow-sm
                transition-all
                duration-300
                hover:-translate-y-1
                hover:shadow-lg
              "
            >

              {/* Product Image */}
              <div className="relative h-[190px] overflow-hidden sm:h-[200px] lg:h-[215px]">

                <Link to={product.link}>
                  <img
                    src={product.image}
                    alt={product.name}
                    className="
                      h-full w-full
                      object-cover
                      transition-transform
                      duration-500
                      ease-out
                      group-hover:scale-105
                    "
                  />
                </Link>

                {/* Organic Badge */}
                {product.organic && (
                  <div
                    className="
                      absolute left-4 top-4
                      flex items-center gap-1
                      rounded-md
                      bg-[#286B16]
                      px-2.5 py-1
                      text-[10px]
                      font-semibold
                      tracking-wide
                      text-white
                    "
                  >
                    <Leaf size={11} />
                    ORGANIC
                  </div>
                )}

                {/* Favourite Button */}
                <button
                  type="button"
                  aria-label={`Save ${product.name}`}
                  className="
                    absolute right-4 top-4
                    flex h-9 w-9
                    items-center justify-center
                    rounded-full
                    bg-white/90
                    text-gray-500
                    shadow-sm
                    backdrop-blur-sm
                    transition-all
                    duration-200
                    hover:scale-105
                    hover:bg-white
                    hover:text-red-500
                  "
                >
                  <Heart size={17} strokeWidth={1.7} />
                </button>
              </div>

              {/* Product Information */}
              <div className="flex flex-1 flex-col p-4 lg:p-5">

                {/* Name + Price */}
                <div className="flex min-h-[42px] items-start justify-between gap-3">

                  <Link
                    to={product.link}
                    className="min-w-0 flex-1"
                  >
                    <h3
                      className="
                        font-serif
                        text-[16px]
                        font-semibold
                        leading-[1.25]
                        text-[#17200D]
                        transition-colors
                        duration-200
                        hover:text-[#286B16]
                        sm:text-[17px]
                        lg:text-[18px]
                      "
                    >
                      {product.name}
                    </h3>
                  </Link>

                  {/* Price */}
                  <div className="shrink-0 whitespace-nowrap">
                    <span className="font-serif text-[14px] font-bold text-[#286B16] sm:text-[15px]">
                      {product.price}
                    </span>

                    {product.unit && (
                      <span className="ml-1 text-[11px] text-[#7B7465] sm:text-xs">
                        {product.unit}
                      </span>
                    )}
                  </div>
                </div>

                {/* Location */}
                <div className="mt-1.5 flex items-center gap-1.5 text-xs text-[#7B7465] sm:text-[13px]">
                  <MapPin
                    size={14}
                    strokeWidth={1.7}
                    className="shrink-0"
                  />

                  <span>{product.location}</span>
                </div>

                {/* Rating */}
                <div className="mt-2.5 flex items-center gap-2">

                  <div className="flex items-center gap-[1px]">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star
                        key={star}
                        size={13}
                        fill="#F59E0B"
                        stroke="#F59E0B"
                      />
                    ))}
                  </div>

                  <span className="text-xs text-[#7B7465]">
                    {product.rating} ({product.reviews})
                  </span>
                </div>

                {/* Add To Cart */}
                <div className="mt-auto pt-3">
                  <button
                    type="button"
                    onClick={() => {
                      console.log(`Added ${product.name} to cart`);
                    }}
                    className="
                      flex w-full
                      items-center
                      justify-center
                      gap-2
                      rounded-xl
                      bg-[#286B16]
                      px-4
                      py-2.5
                      font-serif
                      text-sm
                      font-semibold
                      text-white
                      transition-all
                      duration-200
                      hover:bg-[#1F5411]
                      active:scale-[0.98]
                      sm:text-[15px]
                    "
                  >
                    <Plus size={17} strokeWidth={1.8} />
                    Add to Cart
                  </button>
                </div>

              </div>
            </article>
          ))}

        </div>

        {/* Mobile See All */}
        <div className="mt-7 flex justify-center sm:hidden">
          <Link
            to="/products"
            className="flex items-center gap-2 font-serif text-base font-semibold text-[#286B16]"
          >
            See all
            <ArrowRight size={17} />
          </Link>
        </div>

      </div>
    </section>
  );
};

export default Featured;