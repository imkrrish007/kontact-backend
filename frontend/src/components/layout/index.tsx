import { BsPersonFillAdd, BsSearch } from "react-icons/bs";
import Link from "next/link";

const Layout = ({ children, handleSearch, addContactFormToggle }: any) => {
  return (
    <div>
      <header className="text-gray-600 body-font">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <a className="flex title-font font-medium items-center text-gray-100 mb-4 md:mb-0">
            <img className="h-10 w-10 bg-white rounded-lg" src="./logo.svg" alt="logo" />
            <span className="ml-3 text-xl">Kontact</span>
          </a>
          <nav className="md:ml-auto flex items-center gap-4">
            <div className="relative flex items-center w-auto h-9 rounded-lg focus-within:shadow-lg bg-white overflow-hidden">
              <div className="grid place-items-center h-full w-12 text-gray-500">
                <BsSearch />
              </div>

              <input className="peer h-full w-44 outline-none text-sm text-gray-700 pr-2" type="text" id="search" placeholder="Search by name...." onChange={handleSearch} />
            </div>
            <button
              onClick={() => addContactFormToggle(true)}
              className="inline-flex gap-2 items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-lg font-semibold mt-4 md:mt-0"
            >
              <BsPersonFillAdd className="text-xl" />
              Add Contact
            </button>
          </nav>
        </div>
      </header>

      <main>{children}</main>
      <footer className="w-full text-center py-4 bg-gray-800 text-lg tracking-wider">
        <h1>
          Made with ❤️ by{" "}
          <Link href={"https://www.linkedin.com/in/imkrrish/"} target="_blank" className="hover:text-blue-600 underline">
            Krishan Kumar
          </Link>
        </h1>
      </footer>
    </div>
  );
};

export default Layout;
