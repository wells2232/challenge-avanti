export default function Featured() {
  return (
    <>
      <div className="flex mt-4 items-center lg:justify-center  bg-[#E7E7EA]">
        <img
          src="images/featured.png"
          alt="featured"
          className="opacity-100 mix-blend-darken lg:hidden"
        />
        <img
          src="images/featured_desktop.png"
          alt="featured"
          className="hidden opacity-100 mix-blend-darken lg:block"
        />
        <div className="font-nunito relative right-4 lg:right-10 items-start bg-[#E7E7EA] lg:flex lg:flex-col lg:items-center lg:gap-6 lg:pr-16">
          <div className="flex flex-col text-4xl text-center text-black lg:text-8xl lg:flex-row lg:gap-0.5">
            <span className="font-extrabold lg:font-bold">SUPER</span>
            <span className="font-light">SALE</span>
          </div>

          <div className="flex flex-col items-center gap-2">
            <div>
              <span className="text-xs lg:hidden font-bold text-[#005CFF]">
                SELECTED ITEMS UP TO
              </span>
              <span className="text-xl hidden lg:block font-bold tracking text-[#005CFF] font-nunito">
                ITENS SELECIONADOS COM ATÉ
              </span>
            </div>

            <h1 className="text-4xl text-[#005CFF] font-bold font-nunito">
              50%OFF
            </h1>
          </div>
        </div>
      </div>
    </>
  );
}
