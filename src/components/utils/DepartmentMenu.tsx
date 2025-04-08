// DepartmentMenu.tsx
import { CaretRight } from "@phosphor-icons/react";
import { useState } from "react";

interface DepartmentMenuProps {
  singleDepartment: boolean;
  departmentIndex: number | null;
}

function DepartmentMenu({
  departmentIndex,
  singleDepartment,
}: DepartmentMenuProps) {
  // State to manage the selected department index
  const [department, setDepartment] = useState<number>(0);

  const handleDepartmentClick = (index: number) => {
    if (!singleDepartment) {
      setDepartment(index);
    } else {
      setDepartment(index);
    }
  };

  return (
    <div className="flex h-[329px] w-[1261px]">
      <div
        className="bg-[#F5F5F5] w-[234px] h-full"
        style={{ display: singleDepartment ? "none" : "block" }}
      >
        <ul
          className="flex flex-col items-start w-full 
                    h-[298px] pl-4 pr-7 mt-5 mb-[11px] gap-3 overflow-y-auto"
        >
          {Array.from({ length: 14 }, (_, index) => (
            <li key={index} className="w-full">
              <button
                className={`flex items-center justify-between w-full h-[19px] transition-colors hover:text-[#005CFF] ${
                  department === index
                    ? " font-bold text-[#005CFF] "
                    : "hover:bg-gray-100"
                }`}
                onClick={() => {
                  handleDepartmentClick(index);
                }}
              >
                <span className="text-sm font-nunito-sans">Departamento</span>
                <CaretRight
                  weight="bold"
                  size={16}
                  className={`transition-transform ${
                    department === index ? "text-[#005CFF]" : "text-gray-600"
                  }`}
                />
              </button>
            </li>
          ))}
        </ul>
      </div>

      <div className="flex flex-1 pt-[18px]">
        {departmentIndex !== null && (
          <div className="flex flex-col items-start gap-4">
            {singleDepartment && (
              <span className=" font-semibold ml-[34px]">
                Departamento {departmentIndex + 1}
              </span>
            )}
            <div className="flex gap-[127px] ml-[34px]">
              <CategoryMenu />
              <CategoryMenu />
              <CategoryMenu />
            </div>
          </div>
        )}
      </div>

      <div className="relative h-[298px] w-[236px] bg-cover bg-center rounded-lg mt-5 bg-[url('images/product_mug_loc.png')]">
        {/* Gradient overlay */}
        <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-white/0 to-black/60 z-0" />

        {/* Content */}
        <div className="relative z-10 flex flex-col pl-[27px] pr-[81px] pt-[43px] pb-[47px] gap-[13px] h-full w-full">
          <p className="font-nunito-sans text-2xl text-left text-white">
            Confira os Produtos{" "}
            <span className="font-bold">Que acabaram De Chegar</span>
          </p>
          <button className="text-white text-left text-xs font-semibold px-[25px] py-2.5 border border-white rounded-lg">
            VER TODOS
          </button>
        </div>
      </div>
    </div>
  );
}

function CategoryMenu() {
  return (
    <div className="flex flex-col items-center w-[63px] h-[236px] flex-1">
      <h3 className="font-bold text-sm text-[#005cff] h-[19px] mb-2">
        Categoria
      </h3>
      <ul className="flex flex-col gap-2">
        {Array.from({ length: 7 }, (_, index) => (
          <li key={index}>
            <button className="text-sm font-nunito-sans text-[#656565] hover:text-[#005CFF] transition-colors text-left">
              Categoria
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default DepartmentMenu;
