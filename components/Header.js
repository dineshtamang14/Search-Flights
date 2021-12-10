import Cloud from "./Cloud";

function Header() {
    return (
      <header className="bg-blue-300">
        <Cloud />
        <nav className="flex justify-between ml-3 mr-3">
          <div className="flex">
            <img
            className="pl-2 mr-2"
              src="https://jacksflightclub.com/assets/img/flags/uk.svg"
              alt="img"
            />
            <select id="items" className="bg-transparent">
              <option value="india">India</option>
              <option value="USA">USA</option>
              <option value="europe">EU</option>
            </select>
          </div>
          <button className="p-2 text-blue-600 ml-2 border-none rounded-md outline-none bg-white hover:bg-gray-200">
            Login
          </button>
        </nav>
        <div className="flex justify-center">
          <img
            className="h-20 mt-3"
            src="https://img.icons8.com/external-kiranshastry-lineal-color-kiranshastry/64/000000/external-departures-airport-kiranshastry-lineal-color-kiranshastry.png"
          />
        </div>
      </header>
    );
}

export default Header;
