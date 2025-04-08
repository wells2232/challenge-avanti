// @ts-ignore-error
import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";
// @ts-ignore-error
import "@splidejs/react-splide/css";

import ProductCard from "./utils/ProductCard";
import products from "../data/products";
import { ArrowCircleLeft, ArrowCircleRight } from "@phosphor-icons/react";

export default function Caroussel() {
  return (
    <div className="lg:mx-[330px] mt-20 flex flex-col gap-6 p-4 lg:p-0 mb-20">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-semibold text-center">Lançamentos</h2>
        <span className="font-semibold">Ver mais</span>
      </div>

      <Splide
        hasTrack={false}
        options={{
          perPage: 2,
          perMove: 2,
          mediaQuery: "min",
          breakpoints: {
            640: {
              arrows: true,
              perPage: 5,
              gap: "0.5rem",
            },
          },
          gap: "0.9rem",
          snap: "perPage",
          arrows: false,
          wheel: true,
        }}
        className="sample-splide"
      >
        <SplideTrack className="mb-4">
          {products.map((product) => (
            <SplideSlide key={product.id} className="flex justify-center">
              <ProductCard
                id={product.id}
                name={product.name}
                price={product.price}
                priceOffer={product.priceOffer}
                imageUrl={product.imageUrl}
              />
            </SplideSlide>
          ))}
        </SplideTrack>
        <div className="splide__arrows ">
          <button>
            <ArrowCircleLeft
              size={32}
              className="splide__arrow splide__arrow--prev text-[#005CFF]"
              style={{ backgroundColor: "#ffffff", left: "-0.7em", opacity: 1 }}
            />
          </button>
          <button>
            <ArrowCircleRight
              size={32}
              className="splide__arrow splide__arrow--next text-[#005CFF]"
              style={{
                backgroundColor: "#ffffff",
                right: "-0.7em",
                opacity: 1,
              }}
            />
          </button>
        </div>

        <div className="splide__pagination" style={{ bottom: "-0.5em" }}></div>
      </Splide>
    </div>
  );
}
