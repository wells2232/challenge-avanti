import {
  Heart,
  HouseLine,
  List,
  ListDashes,
  ShoppingBagOpen,
  ShoppingCart,
  User,
  X,
} from "@phosphor-icons/react";
import SearchBar from "./utils/SearchBar";
import { useState } from "react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState<string>("");

  const handleMenuToggle = () => {
    setIsOpen(!isOpen);
    if (!isOpen) {
      document.body.style.overflow = "hidden"; // Disable scrolling
    } else {
      document.body.style.overflow = "auto"; // Enable scrolling
    }
  };

  const handleSearch = (query: string) => {
    setSearchQuery(query);
  };

  return (
    <div className="flex flex-col ">
      <div className="bg-[#005CFF] py-6 h-10 flex items-center justify-center text-white font-semibold text-sm">
        <p className="text-center px-4 ">
          Ganhe<span className="bg-[#6220C1] mx-0.5"> R$10,00 </span>de desconto
          no seu primeiro pedido. Utilize o cupom DESCONTO10
        </p>
      </div>
      <div className="flex justify-between items-center bg-white py-4 px-4 lg:px-0.5 lg:mx-[330px]">
        <button className="lg:hidden" onClick={() => handleMenuToggle()}>
          {isOpen ? (
            <X size={32} className="text-[#005CFF]" />
          ) : (
            <List size={32} />
          )}
        </button>
        <div className="lg:flex items-center justify-start gap-10 ">
          <img src="images/logo.png" alt="Logo" />
          <div className="hidden lg:flex flex-col items-center justify-center w-1/2 lg:min-w-full lg:flex-1">
            <SearchBar onSearch={(query) => handleSearch(query)} />
            {searchQuery && (
              <div
                className="hidden "
                style={{ display: searchQuery ? "block" : "none" }}
              >
                <span>Você pesquisou por: '{searchQuery}'</span>
              </div>
            )}
          </div>
        </div>

        <div className="flex items-center justify-end gap-6">
          <div className="items-center hidden lg:flex justify-center">
            <img
              src="images/userIcon.svg"
              alt="User Icon"
              width={28}
              className="mr-4 text-[#005CFF]"
            />
            <p className="text-sm font-semibold text-[#333333]">
              Olá,
              <br /> Nome Cliente!
            </p>
          </div>
          <div className="">
            <ShoppingCart size={32} />
          </div>
        </div>
      </div>
      <div className="lg:hidden">
        <SearchBar onSearch={(query) => handleSearch(query)} />
        {searchQuery && (
          <div className="flex items-center justify-center w-full mt-2">
            <span>Você pesquisou por: '{searchQuery}'</span>
          </div>
        )}
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed top-55 left-0 w-full h-screen bg-white z-10 y-100 transition-transform duration-300 lg:hidden ${
          isOpen ? "translate-x-0" : "-translate-x-full "
        }`}
      >
        <div className="flex items-center p-4 gap-6">
          <img src="images/userIcon.svg" alt="userIcon" width={24} />
          <p className="text-lg font-semibold">Olá. Acesse sua Conta</p>
        </div>
        <ul className="border-b border-[#DDDDDD]">
          <li className="flex items-center justify-start p-4 gap-6 ">
            <ListDashes size={24} className="ml-4" />
            <p>Departamentos</p>
          </li>
        </ul>
        <ul className="flex flex-col gap-4 mt-4">
          <li className="flex items-center justify-start p-4 gap-6 ">
            <HouseLine size={24} className="ml-4" />
            <p>Minha Conta</p>
          </li>
          <li className="flex items-center justify-start p-4 gap-6 ">
            <User size={24} className="ml-4" />
            <p>Meus Dados</p>
          </li>
          <li className="flex items-center justify-start p-4 gap-6 ">
            <ShoppingBagOpen size={24} className="ml-4" />
            <p>Meus Pedidos</p>
          </li>
          <li className="flex items-center justify-start p-4 gap-6 ">
            <Heart size={24} className="ml-4" />
            <p>Meus Favoritos</p>
          </li>
        </ul>
      </div>
    </div>
  );
}
