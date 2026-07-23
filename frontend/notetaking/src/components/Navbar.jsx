import { Link } from "react-router";
import { PlusIcon } from "lucide-react";

const Navbar = () => {
  return (
    <header className="bg-base-300 border-b border-base-content/10">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        <Link to="/">
          <h1 className="text-3xl font-bold text-primary font-mono tracking-tight">
            NoteTaking
          </h1>
        </Link>
        <Link to="/create" className="btn btn-primary">
          <PlusIcon className="size-5" />
          New Note
        </Link>
      </div>
    </header>
  );
};

export default Navbar;
