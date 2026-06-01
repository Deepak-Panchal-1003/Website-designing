import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="w-full bg-[#f3f3f3] border-b border-gray-300">
      <div className="max-w-7xl mx-auto px-4 lg:px-12 py-4">
        
        {/* Logo */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          
          <Link href="/" className="flex flex-col leading-none">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-slate-700">
              DJT<sup className="text-sm">TM</sup>
            </h1>

            <span className="text-xs sm:text-sm text-slate-700">
              Corporation & Investments
            </span>
          </Link>

          {/* Navigation */}
          <ul className="flex flex-col md:flex-row md:items-center gap-3 md:gap-6 lg:gap-8 text-sm lg:text-base">
            <li>
              <Link href="/our-values" className="hover:underline">
                Our Values
              </Link>
            </li>

            <li>
              <Link href="/our-culture" className="hover:underline">
                Our Culture
              </Link>
            </li>

            <li>
              <Link href="/management-team" className="hover:underline">
                Management Team
              </Link>
            </li>

           <li className="relative group">
  <button className="hover:underline">
    Our Business
  </button>

  <ul className="absolute left-0 top-full hidden group-hover:block bg-white shadow-lg rounded-md min-w-[220px] z-50">
    <li>
      <Link
        href="/our-business/retailers"
        className="block px-4 py-3 hover:bg-gray-100"
      >
        DJT Retailers
      </Link>
    </li>

    <li>
      <Link
        href="/our-business/financial-services"
        className="block px-4 py-3 hover:bg-gray-100"
      >
        Financial Services
      </Link>
    </li>

    <li>
      <Link
        href="/our-business/house-of-believe"
        className="block px-4 py-3 hover:bg-gray-100"
      >
        House of Believe
      </Link>
    </li>

    <li>
      <Link
        href="/our-business/microfinance"
        className="block px-4 py-3 hover:bg-gray-100"
      >
        Microfinance
      </Link>
    </li>
  </ul>
</li>

            <li>
              <Link href="/careers" className="hover:underline">
                Careers
              </Link>
            </li>

            <li>
              <Link
                href="/contact-us"
                className="font-semibold underline underline-offset-4"
              >
                Contact Us
              </Link>
            </li>
          </ul>

        </div>
      </div>
    </nav>
  );
}