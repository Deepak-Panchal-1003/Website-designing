"use client";

import {
  FaTwitter,
  FaLinkedin,
  FaFacebook,
} from "react-icons/fa";

import Link from "next/link";
import Swipercomponent from "./components/Swiper";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="w-full overflow-x-hidden">
      <main className="w-full min-h-screen">
        <Swipercomponent />

        <section className="max-w-6xl mx-auto px-6 py-16">
          <h2 className="text-6xl font-bold text-center mb-8">
            What We Do
          </h2>

          <p className="text-xl text-gray-700 text-center leading-8 mb-12">
            Djt Corporation focuses on maintaining a strong core of people and
            outstanding teamwork which plays a significant role in shaping the
            destiny of our great nation. Djt Corp. has managed to deal with
            variations on large scale and overcome challenging situations in a
            successful way. A focused vision, innovative spirit, and enthusiastic
            employees are the mantras behind the success of Djt Corp.
          </p>

          {/* Cards Section */}
          <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Card 1 */}
            <div className="bg-white shadow-lg rounded-lg p-6 border w-full">
              <h3 className="text-2xl font-bold mb-4">
                DJT Retailers Pvt Ltd
              </h3>
              <p className="text-gray-600 text-xl mb-6">
                To constantly evolve and shape itself to become the most customer
                focused retailer in the world, DJT Retailers Pvt Ltd started its
                journey in 2017 with a mission of releasing a billion dreams and
                developing a retail ecosystem that seamlessly integrates online
                and offline shopping experiences into customers' daily lives.
              </p>
              <button className="text-blue-600 font-semibold hover:text-blue-800">
                Know More →
              </button>
            </div>

            {/* Card 2 */}
            <div className="bg-white shadow-lg rounded-lg p-6 border w-full">
              <h3 className="text-2xl font-bold mb-4">
                DJT Financial Services
              </h3>
              <p className="text-gray-600 text-xl mb-6">
                DJT Retailers focuses on understanding your business needs and
                requirements. We are more than a loan provider, offering special
                assistance and customized business loans to support your evolving
                financial needs and help maximize profitability.
              </p>
              <button className="text-blue-600 font-semibold hover:text-blue-800">
                Know More →
              </button>
            </div>

            {/* Card 3 */}
            <div className="bg-white shadow-lg rounded-lg p-6 border w-full">
              <h3 className="text-2xl font-bold mb-4">
                House of Believe
              </h3>
              <p className="text-gray-600 text-xl mb-6">
                At House of Believe, we believe fashion is not just about
                clothing but about expressing ourselves, feeling confident in
                what we wear, and embracing our unique style. Since 2021, we
                have developed trending Gen-Z fashion collections that allow
                people to express their individuality.
              </p>
              <button className="text-blue-600 font-semibold hover:text-blue-800">
                Know More →
              </button>
            </div>

            {/* Card 4 */}
            <div className="bg-white shadow-lg rounded-lg p-6 border w-full">
              <h3 className="text-2xl font-bold mb-4">
                DJT Microfinance
              </h3>
              <p className="text-gray-600 text-xl mb-6">
                DJT Microfinance, an RBI-registered NBFC-MFI, provides essential
                microfinance services to low-income households. We are committed
                to empowering communities through accessible microfinance
                solutions.
              </p>
              <button className="text-blue-600 font-semibold hover:text-blue-800">
                Know More →
              </button>
            </div>
          </section>
        </section>

       
      </main>
    </div>
  );
}