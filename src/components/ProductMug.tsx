export default function ProductMug() {
  return (
    <div className="flex flex-col mt-[7px] lg:mt-[46px] items-center  lg:flex-row lg:justify-center lg:gap-10 lg:mx-[371.5px]">
      <div className="lg:flex lg:bg-[#C2C2C2] lg:h-[747px] lg:w-[652px]">
        <img
          src="/images/product_mug.png"
          alt="avanti mug"
          className="object-contain"
        />
      </div>

      <div className="mt-9 space-y-6 text-left tracking-wider lg:w-[487px] px-4 lg:px-0">
        <h1 className="font-nunito text-2xl font-bold lg:text-3xl">
          LOREM IPSUM
        </h1>
        <p className="font-nunito text-sm font-normal lg:hidden">
          Aenean massa. Cum sociis natoque penatibus et magnis dis parturient
          montes, nascetur ridiculus mus. Donec quam felis, ultricies nec,
          pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.
        </p>
        <p className="font-nunito text-lg font-normal hidden lg:block">
          Duis consectetur metus nec lacus auctor dignissim. Mauris vitae
          finibus dui. Mauris laoreet lacus ut eleifend viverra. Cras efficitur
          volutpat dui, in lobortis metus lacinia sit amet. Sed lacinia pharetra
          magna, vel pulvinar ligula hendrerit a. Maecenas fringilla porttitor
          tortor eget lacinia. Donec sollicitudin euismod orci, auctor fringilla
          magna consequat interdum. Fusce sagittis elit a libero commodo egestas
          efficitur id augue.
        </p>
        <p className="font-nunito text-sm font-normal lg:hidden">
          Cras dignissim est et pellentesque tincidunt. Praesent bibendum quis
          velit a aliquam. Ut vestibulum turpis eget mi iaculis ullamcorper.
          Curabitur nec metus sed tortor sollicitudin porta nec eu enim. Ut
          fermentum scelerisque tortor mollis volutpat. Mauris iaculis magna
          nisl, vel porttitor augue placerat et.
        </p>
        <p className="font-nunito text-lg font-normal hidden lg:block">
          Duis consectetur metus nec lacus auctor dignissim. Mauris vitae
          finibus dui. Mauris laoreet lacus ut eleifend viverra. Cras efficitur
          volutpat dui, in lobortis metus lacinia sit amet. Sed lacinia pharetra
          magna, vel pulvinar ligula hendrerit a. Maecenas fringilla porttitor
          tortor eget lacinia. Donec sollicitudin euismod orci, auctor fringilla
          magna consequat interdum. Fusce sagittis elit a libero commodo egestas
          efficitur id augue.
        </p>
      </div>
    </div>
  );
}
