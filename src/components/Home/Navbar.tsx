import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-transparent backdrop-blur-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-lg font-semibold text-white">Catasp</span>
          </Link>

          <Link href={"/signin"}>
            <button className="flex gap-3 cursor-pointer text-white font-semibold bg-gradient-to-r from-gray-800 to-black px-10 py-2 rounded-full border border-gray-600 hover:scale-105 duration-200 hover:text-gray-200 hover:border-gray-800 hover:from-black hover:to-gray-900">
              Login
            </button>
          </Link>
        </div>
      </div>
    </nav>
  );
}
