import { useState } from "react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 z-50 left-0 w-full px-6 bg-white/80 backdrop-blur-[5px] space-x-4">
      <div className="container px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="#" className="text-3xl font-extrabold  text-red-600">
            WOL
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#" className="hover:text-red-600">
              Home
            </a>
            <a href="#" className="hover:text-red-600">
              About
            </a>
            <a
              href="#"
              className="bg-red-600 text-white px-6 py-3 rounded-full hover:bg-red-700"
            >
              Connect With Us
            </a>
          </nav>

          {/* Mobile Button */}
          <button
            className="md:hidden"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? "✖" : "☰"}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white shadow-lg text-center py-4 space-y-4">
          <a href="#" className="block hover:text-red-600">
            Home
          </a>
          <a href="#" className="block hover:text-red-600">
            About
          </a>
          <a
            href="#"
            className="inline-block bg-red-600 text-white px-6 py-3 rounded-full hover:bg-red-700"
          >
            Connect With Us
          </a>
        </div>
      )}
    </header>
  );
}

export default Navbar;