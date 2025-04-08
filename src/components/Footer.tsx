import {
  CaretDown,
  FacebookLogo,
  InstagramLogo,
  LineVertical,
  TiktokLogo,
  YoutubeLogo,
} from "@phosphor-icons/react";

export default function Footer() {
  return (
    <div className=" bg-[#F5F5F5] pt-10 flex flex-col items-center gap-10 lg:gap-16">
      <div className="lg:flex lg:items-start lg:justify-between lg:w-fit w-full gap-36">
        <Socials />
        <div className=" w-full border-y mt-4 lg:mt-0 border-[#DDDDDD] lg:border-none lg:flex lg:gap-28">
          <FooterItem title="Institucional" />
          <FooterItem title="Central de ajuda" />
          <FooterItem title="Atendimento" />
        </div>
      </div>

      <div
        className="flex flex-col items-center gap-5
      lg:flex-row"
      >
        <div className="flex items-center justify-center gap-8">
          <img src="images/icons/amex.svg" alt="amex" />
          <img src="images/icons/mastercard.svg" alt="mastercard" />
          <img src="images/icons/visa.svg" alt="visa" />
          <img src="images/icons/hipercard.svg" alt="hipercard" />
          <img src="images/icons/elo.svg" alt="elo" />
        </div>
        <div className="flex items-center justify-center gap-8">
          <img src="images/icons/b.svg" alt="dinners club" />
          <img src="images/icons/paypal.svg" alt="paypal" />
          <img src="images/icons/pix.svg" alt="pix" />
          <img src="images/icons/boleto.svg" alt="boleto" />
        </div>
      </div>
      <div className="flex flex-col items-center gap-5 lg:w-full">
        <div className="pt-10 px-4 lg:px-[423px] pb-4 space-y-10 flex-flex-col lg:w-full items-center justify-center bg-white">
          <p className="text-xs font-nunito-sans text-[#303030] text-center leading-5 lg:hidden">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
            nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
            volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci.
          </p>
          <p className="hidden text-xs leading-5 font-nunito-sans text-[#303030] lg:block text-center ">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
            nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
            volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation
            ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo
            consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate
            velit esse molestie consequat, vel illum dolore eu feugiat nulla
            facilisis at vero eros et accumsan et iusto odio dignissim qui
            blandit praesent luptatum zzril delenit augue duis dolore te feugait
            nulla facilisi.
          </p>

          <div className="flex items-center justify-center gap-6">
            <img src="images/icons/lets-encrypt.svg" alt="let's encrypt" />
            <img src="images/icons/vtex-pci.svg" alt="vtex pci" />
            <LineVertical size={20} color="#DDDDDD" weight="bold" />
            <img src="images/icons/logo.svg" alt="avanti" />
            <img src="images/icons/vtex-logo.svg" alt="Vtex" />
          </div>
        </div>
      </div>
    </div>
  );
}

function FooterItem({ title }: { title: string }) {
  return (
    <div
      className="flex md:flex-col items-center lg:items-start
     lg:justify-start lg:gap-2.5 justify-between p-4 lg:p-0 border-b
      border-[#DDDDDD] lg:border-none"
    >
      <h5 className="font-nunito-sans text-base font-bold">{title}</h5>
      <div className="hidden flex-col lg:flex lg:flex-col lg:text-sm font-nunito-sans lg:leading-7 text-[#303030]">
        {title === "Institucional" && (
          <div className="flex flex-col gap-1">
            <h5>Sobre Nós</h5>
            <h5>Nossas Lojas</h5>
            <h5>Privacidade e Segurança</h5>
            <h5>Termos e Condições</h5>
          </div>
        )}
        {title === "Central de ajuda" && (
          <div className="flex flex-col gap-1">
            <h5>Fale Conosco</h5>
            <h5>Frete e Entrega</h5>
            <h5>Trocas e Devoluções</h5>
            <h5>Formas de Pagamento</h5>
            <h5>FAQ</h5>
          </div>
        )}
        {title === "Atendimento" && (
          <div className="flex flex-col gap-1">
            <h5>
              <span className="font-bold">Telefone: </span>(00) 1234-5678
            </h5>
            <h5>
              <span className="font-bold">E-mail: </span>exemplo@exemplo.com.br
            </h5>
            <h5 className="text-xs font-bold">Horário de atendimento:</h5>
            <h5 className="text-xs leading-6">
              Segunda a Sábado: 07h00 às 23h00
            </h5>
            <h5 className="text-xs leading-6">
              Domingos e Feriados: 07h00 às 21h00
            </h5>
          </div>
        )}
      </div>
      <button className="lg:hidden">
        <CaretDown size={16} color="#005CFF" weight="bold" />
      </button>
    </div>
  );
}

function Socials() {
  return (
    <div className="flex flex-col items-center gap-10 lg:items-start">
      <img src="images/logo.png" alt="logo" />
      <div className="flex gap-10 items-center justify-center ">
        <InstagramLogo size={19} color="#005CFF" />
        <FacebookLogo size={22} color="#005CFF" />
        <YoutubeLogo size={26} color="#005CFF" />
        <TiktokLogo height={21} width={18.2} fill="#005CFF" weight="fill" />
      </div>
    </div>
  );
}
