export default function Banner() {
  return (
    <div
      className="w-full h-[449px] lg:h-[660px] bg-[url(../images/quartobanner.png)] lg:bg-[url(../images/quartobanner_desktop.png)]
           flex items-center justify-center "
    >
      <div className="bg-[#005CFF] w-full text-center py-[18px]">
        <span className="text-white font-semibold  text-base font-nunito">
          Entre em contato conosco e verifique a disponibilidade para sua
          região!
        </span>
      </div>
    </div>
  );
}
