import Banner from "./components/Banner";
import Caroussel from "./components/Caroussel";
import Departments from "./components/Departments";
import Featured from "./components/Featured";
import Footer from "./components/Footer";
import Header from "./components/Header";
import ProductMug from "./components/ProductMug";
import ProductMugLoc from "./components/ProductMugLoc";
import StatusBar from "./components/utils/StatusBar";

function App() {
  return (
    <div className="h-screen">
      <header>
        <StatusBar />
        <Header />
      </header>
      <main>
        <Departments />
        <Featured />
        <Caroussel />
        <ProductMug />
        <ProductMugLoc />
        <ProductMug />
        <div className="hidden lg:block">
          <Caroussel />
        </div>
        <Banner />
        <div className="mt-14 mb-10 px-4 lg:mx-[330px] lg:px-0">
          <h3 className="text-base text-center font-bold font-nunito-sans">
            Cadastre-se na nossa{" "}
            <span className="text-[#005CFF]">newsletter</span>
          </h3>
          <div className="bg-[#F5F5F5] lg:bg-[#DEDEDE] rounded-lg mt-4">
            <form
              action="submit"
              className="flex flex-col gap-4 items-center  justify-center px-4 py-10
              lg:flex-row "
            >
              <input
                type="text"
                placeholder="Digite seu nome"
                className="w-full rounded-lg bg-white p-3.5
                lg:w-[280px]"
              />
              <input
                type="text"
                placeholder="Digite seu e-mail"
                className="w-full rounded-lg bg-white p-3.5
                lg:w-[280px]"
              />
              <div className="flex items-center gap-2">
                <input type="checkbox" />
                <label
                  htmlFor="checkbox"
                  className="font-nunito-sans text-xs font-bold text-[#656565]
                
                  "
                >
                  Estou de acordo com a{" "}
                  <a href="" className="underline">
                    Política de Privacidade
                  </a>
                </label>
              </div>
              <button
                type="submit"
                className="bg-[#005CFF] w-full py-3.5 rounded-lg text-white
                lg:w-fit lg:px-6"
              >
                Cadastrar
              </button>
            </form>
          </div>
        </div>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
