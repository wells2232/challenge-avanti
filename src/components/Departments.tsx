// Departments.tsx
import { List } from "@phosphor-icons/react";
import { useEffect, useRef, useState } from "react";
import DepartmentMenu from "./utils/DepartmentMenu";

export default function Departments() {
  const [departmentDropdown, setDepartmentDropdown] = useState(false);
  const [department, setDepartment] = useState<number | null>(null);
  const [singleDepartment, setSingleDepartment] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleDepartmentDropdown = () => {
    setDepartmentDropdown(!departmentDropdown);
    setSingleDepartment(false);
  };

  const handleDepartmentClick = (index: number) => {
    setSingleDepartment(!singleDepartment);
    setDepartmentDropdown(false);
    setDepartment(index);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setDepartmentDropdown(false);
        setSingleDepartment(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="hidden lg:flex items-center justify-center container relative">
      <ul className="flex items-center justify-between w-full lg:mx-[330px]">
        <button
          onClick={() => handleDepartmentDropdown()}
          aria-haspopup="true"
          aria-expanded={departmentDropdown}
          style={departmentDropdown ? { color: "#005CFF" } : {}}
          className="flex items-center gap-2 font-semibold hover:text-[#005CFF] transition-colors"
        >
          <List size={24} />
          <span>Todas as categorias</span>
        </button>

        {/* Repeat department buttons */}
        {[...Array(9)].map((_, i) => (
          <button key={i} onClick={() => handleDepartmentClick(i)}>
            <li className="hover:text-[#005CFF] transition-colors">
              Departamento
            </li>
          </button>
        ))}
      </ul>

      {departmentDropdown && (
        <div
          className="absolute top-8 left-50% w-full max-w-screen-xl h-[329px] bg-white shadow-xl z-50 mt-2"
          ref={dropdownRef}
        >
          <DepartmentMenu
            singleDepartment={false}
            departmentIndex={department}
          />
        </div>
      )}
      {singleDepartment && (
        <div
          className="absolute top-8 left-50% w-full max-w-screen-xl h-[329px] bg-white shadow-xl z-50 mt-2"
          ref={dropdownRef}
        >
          <DepartmentMenu singleDepartment departmentIndex={department} />
        </div>
      )}
    </div>
  );
}
