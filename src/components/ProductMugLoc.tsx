import { MapPin } from "@phosphor-icons/react";

export default function ProductMugLoc() {
  return (
    <div className="lg:w-full bg-[#DEDEDE] lg:h-[819px] lg:flex lg:justify-center lg:items-center lg:mx-auto lg:mt-[55px]">
      <div className=" py-7 px-5 mt-6 lg:mt-0 lg:gap-[50px] space-y-5 lg:space-y-0 lg:flex lg:flex-row-reverse lg:mx-auto lg:w-[1177px] lg:p-0 lg:items-center lg:justify-center">
        <div className="lg:flex lg:h-[728px]">
          <img
            src="images/product_mug_loc.png"
            alt="mug"
            className=" h-full lg:w-[652px]"
          />
        </div>

        <div className="lg:w-[476px] lg:h-[567px] lg:flex lg:flex-col lg:justify-center lg:items-center lg:gap-[50px] lg:px-0">
          <h1 className="font-nunito text-xl font-bold text-center lg:text-3xl">
            LOREM IPSUM
          </h1>

          <div className="flex flex-col items-center gap-5 lg:gap-[50px]">
            <LocationParagraph />
            <LocationParagraph />
            <LocationParagraph />
          </div>
        </div>
      </div>
    </div>
  );
}

function LocationParagraph() {
  return (
    <div className="flex items-center gap-3.5 lg:gap-5">
      <div className=" bg-[#005CFF] w-[60px] h-[60px] lg:h-[90px] lg:w-[90px] aspect-square rounded-full flex items-center justify-center">
        <MapPin className="size-[30px] lg:size-[45px]" color="white" />
      </div>
      <p className="font-nunito text-xs text-left tracking-wider lg:text-lg">
        Aenean massa. Cum sociis natoque penatibus et magnis dis parturient
        montes, nascetur ridiculus mus. Donec quam felis, ultricies nec,
        pellentesque eu, pretium quis, sem.
      </p>
    </div>
  );
}
