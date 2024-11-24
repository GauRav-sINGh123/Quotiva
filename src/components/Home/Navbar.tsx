import Link from "next/link"
import Image from "next/image"

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-transparent backdrop-blur-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-lg font-semibold text-white">Catasp</span>
          </Link>
          
          <Link
            href={'/api/auth/signin'}
           
          >
            <button  className="bg-white text-gray-900 px-6 py-2 rounded-full font-medium hover:opacity-90 transition-opacity">
            Sign In →
            </button>
           
          </Link>
        </div>
      </div>
    </nav>
  )
}

