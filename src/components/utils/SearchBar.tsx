import { MagnifyingGlass } from "@phosphor-icons/react";

export default function SearchBar({
  onSearch,
}: {
  onSearch: (query: string) => void;
}) {
  const handleSearch = (query: string) => {
    // prevent default behavior of form submission

    onSearch(query);
    console.log(query);
    // Clear input field after search
  };

  return (
    <div className="flex items-center justify-between h-10 px-4 mx-auto max-w-[360px] border rounded-lg lg:min-w-[594px] lg:w-full border-[#DDDDDD]">
      <input
        type="text"
        className="w-full text-black font-semibold outline-none"
        placeholder="Digite aqui o que você procura"
        onKeyUp={(event) => {
          if (event.key === "Enter") {
            const query = (event.target as HTMLInputElement).value;
            handleSearch(query);
          }
        }}
      />
      <button
        onClick={() => {
          // Handle search button click
          const input = document.querySelector("input") as HTMLInputElement;
          const query = input.value;
          handleSearch(query);
          input.value = ""; // Clear input field after search
        }}
      >
        <MagnifyingGlass size={28} />
      </button>
    </div>
  );
}
