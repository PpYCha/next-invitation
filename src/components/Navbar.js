import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="bg-white border-gray-100 max-w-screen-xl md:flex  justify-between mx-auto p-4">
      <div className="flex justify-between items-center">
        <Link
          href="/"
          className="font-bold uppercase p-4 border-b border-gray-200 hover:text-gray-700 transform hover:scale-110"
        >
          Diasan S. Diaz III
        </Link>
        <div class="px-4 cursor-pointer md:hidden" id="burger">
          <svg
            class="w-6"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </div>
      </div>

      <ul className="md:flex flex-row text-sm mt-6  hidden" id="menu">
        <li className="py-1 text-gray-700 font-bold">
          <Link href="/" className="px-4">
            Home
          </Link>
        </li>
        <li className="py-1">
          <Link href="/about" className="px-4">
            About
          </Link>
        </li>
        <li className="py-1">
          <Link href="/contact" className="px-4">
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
