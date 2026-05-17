import { Link } from "react-router";
import { Logo } from "../assets/index";
import SearchInput from "../components/SearchInput";
import UserControls from "../components/UserControls";

const Header = () => {
  return (
    <nav className="sticky top-0 z-50 w-full border-b border-zinc-800 bg-[#0F0F0F]/95 shadow-[0_1px_20px_rgba(0,0,0,0.25)] backdrop-blur-sm">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between gap-4 px-4 py-3">
        <Link to="/" className="flex items-center gap-2">
          <img src={Logo} alt="Logo" className="h-6 w-auto" />
          <h2 className="text-2xl font-semibold text-white">YouTube</h2>
        </Link>

        <div className="flex flex-1 justify-center px-4">
          <SearchInput />
        </div>

        <UserControls />
      </div>
    </nav>
  );
};

export default Header;
