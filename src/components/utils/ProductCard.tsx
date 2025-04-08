type Product = {
  id: number;
  name: string;
  price: number;
  priceOffer: number;
  imageUrl: string; // Allow className as an optional prop
};

export default function ProductCard(product: Product) {
  return (
    <div className="flex flex-col items-center border border-[#DDDDDD] rounded-lg font-nunito-sans p-2 w-[240px]">
      <div className="absolute top-[7px] left-2 bg-[#00264E] px-[5px] rounded-lg flex items-center justify-center">
        <span className="font-nunito-sans font-bold text-white text-[10px]  leading-[22px]">
          NOVO
        </span>
      </div>
      <img src={product.imageUrl} alt={product.name} className="object-cover" />
      <div className="flex flex-col items-start">
        <h3 className="text-sm font-semibold font-nunito-sans text-[#303030]">
          Lorem ipsum dolor sit amet consectetuer adipiscing elit
        </h3>
        <div className="flex flex-col items-start mt-2 ga-2 w-full">
          <div className="flex gap-3.5 items-start justify-center">
            <div className="flex flex-col items-left">
              <span className="text-xs line-through text-[#303030]">{`R$${product.price}`}</span>
              <span className="text-base font-bold font-nunito-sans">
                {`R$${product.priceOffer.toFixed(2)}`}
              </span>
            </div>
            <div className="py-1 px-2 bg-[#5EC0BE] rounded-sm  flex items-center justify-center">
              <span className="font-nunito-sans text-[11px] font-bold text-center text-white">
                10% OFF
              </span>
            </div>
          </div>

          <span className="text-xs font-nunito-sans">
            Ou em até <span className="font-bold ">10x de R$7,90</span>
          </span>
          <button className="bg-[#005CFF] text-white rounded-lg px-4 py-2 mt-2 hover:bg-[#0044CC] transition duration-300 ease-in-out w-full">
            Comprar
          </button>
        </div>
      </div>
    </div>
  );
}
