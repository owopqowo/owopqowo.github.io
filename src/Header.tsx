import { NavLink, Link } from 'react-router';

function Header() {
  return (
    <header className="sticky top-0 z-50 mx-auto flex h-16 max-w-[1400px] items-center justify-between bg-transparent px-4 mix-blend-multiply md:px-10 lg:px-20">
      <Link to="/" className="font-serif text-5xl font-bold text-neutral-800">
        IJ
      </Link>

      <nav>
        <NavLink
          to="/about"
          className={({ isActive }) => `ml-6 font-serif text-2xl ${isActive ? 'text-neutral-800' : 'text-neutral-500'}`}
        >
          About
        </NavLink>
        <NavLink
          to="/project"
          className={({ isActive }) => `ml-6 font-serif text-2xl ${isActive ? 'text-neutral-800' : 'text-neutral-500'}`}
        >
          Project
        </NavLink>
      </nav>
    </header>
  );
}

export default Header;
