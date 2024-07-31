import logo from "../../assets/logo.png";

function Header() {
  return (
    <header className="flex mx-32 py-10 justify-between bg-white">
      <div className="flex justify-center items-center">
        <img src={logo} alt="logo" />
        <div className="text-lg font-semibold px-4">Emigrate</div>
      </div>
      <div className="flex justify-center items-center">
        <button className="px-8 py-3 rounded-md font-semibold bg-white text-emigrate-blue">
          Sign In
        </button>
        <button className="px-8 py-3 rounded-md  font-semibold bg-emigrate-blue text-white">
          Sign Up
        </button>
      </div>
    </header>
  );
}

export default Header;
