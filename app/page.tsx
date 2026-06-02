"use client";

import {
  FaTwitter,
  FaLinkedin,
  FaFacebook,
} from "react-icons/fa";

import Link from "next/link";
import Image from 'next/image';
import Swipercomponent from "./components/Swiper";
import Footer from "./components/Footer";
import useEmblaCarousel from "embla-carousel-react";
import { useEffect } from "react";

export default function Home() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
  });

  useEffect(() => {
    if (!emblaApi) return;

    const interval = setInterval(() => {
      emblaApi.scrollNext();
    }, 3000);

    return () => clearInterval(interval);
  }, [emblaApi]); 
  return (
    <div className="w-full overflow-x-hidden">
      <main className="w-full min-h-screen">
        <Swipercomponent />

  {/* Whats We DO */}

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

          <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
           
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

  {/* About Our MD */}
<article className="flex flex-col lg:flex-row w-full bg-gray-200 p-3">

  <div className="w-full lg:w-1/2">
    <div className="m-5">
      <h1 className="text-2xl md:text-4xl font-bold text-left mb-5">
        Our Speaker-MD
      </h1>

      <Image
        src="/img1.jpg"
        alt="DJT Corporation"
        width={1200}
        height={150}
        className="w-full border-4 border-white"
      />

      <div className="bg-white py-3">
        <h1 className="text-center text-2xl font-bold">
          Mr. Akash Anand
        </h1>

        <h2 className="text-center text-xl">
          Managing Director, DJT Corporation & Investment
        </h2>
      </div>
    </div>
  </div>

  
  <div className="w-full lg:w-1/2 flex flex-col justify-center">
    <p className="text-gray-900 text-base md:text-lg lg:text-xl text-right px-6 md:px-10 mb-6">
      A first-generation entrepreneur, Akash Anand started his
      journey with a dream of making daily household available
      to everyone and serving the Indian nation. With this vision,
      he launched his own brands, Retail Networks, Finserv,
      Indotech & Insurance, and invested heavily in creating
      the country's leading consumption ecosystem.
    </p>

    <p className="text-gray-900 text-base md:text-lg lg:text-xl text-right px-6 md:px-10">
      He embodies the organization’s credo, 'Innovation beyond
      Imagination' and considers Indianness at the core value
      driving the organization. Akash earned a Graduation Degree
      in Business Management from Plymouth University, England.
      He also earned a Diploma in Finance from City University
      London. Akash provides overall leadership to DJT Group and
      spends his time in strengthening the Parent Brand amongst
      entrepreneurs, company management, financiers, and
      stakeholders.
    </p>
  </div>

</article>

  {/* Introduction to DJT */}

<article className="flex flex-col lg:flex-row w-full  p-3">

  <div className="w-full lg:w-1/2">
    <div className="m-10 ml-10">
      <h1 className="text-xl md:text-6xl font-bold text-left mb-8">
       Introducing DJT Corp
      </h1>

       <h1 className="text-xl md:text-5xl font-bold text-left mb-10">
        Shoulders you can rely upon
      </h1>

      <Image
        src="/img8.png"
        alt="DJT Corporation"
        width={1200}
        height={150}
        className="w-full "
      />
    </div>
  </div>


  <div className="w-full lg:w-1/2 flex flex-col justify-center m-5">
    <p className="text-black text-base  md:text-lg lg:text-3xl text-right px-6 md:px-10">
    Djt’s mission is to develop a retail ecosystem which will seamlessly
     integrate online and offline shopping experience in customers daily 
     lives which displays the impact the company expects to have on the lives of its customers. It particularly emphasizes the extent of satisfaction by innovating new avenues with the help of technology which indeed makes the life easier for the community which includes stress free shopping 
    experience and that would position it as a coveted marketing place.
    </p>
  </div>
</article>

  {/* DJT Values  */}

 <section className="max-w-6xl mx-auto px-6 py-16 ">
          <h2 className="text-4xl font-bold text-left mb-8">
           DJT Values
          </h2>

          <p className="text-xl text-gray-700 text-left leading-8 mb-12">
            Focusing on values and objectives, we build long 
            lasting relationships with our team based upon mutual respect, 
            trust, and common interest.
          </p>

          <section className="grid grid-cols-1 md:grid-cols-2 gap-10">
           
            <div className="bg-white shadow-lg rounded-lg p-6 border w-full">
              <h3 className="text-2xl font-bold mb-4">
                Respect
              </h3>
              <p className="text-gray-600 text-xl mb-6">
                Being mindful of the sensibilities of and extending courtesy,
                 transparency, and dignity to all our stakeholders at all times.
              </p>
            
            </div>

            <div className="bg-white shadow-lg rounded-lg p-6 border w-full">
              <h3 className="text-2xl font-bold mb-4">
              Collaboration
              </h3>
              <p className="text-gray-600 text-xl mb-6">
                Build relationships with all our stakeholders based upon mutual trust, 
                respect, and common interests, consistent with our values and objectives.
              </p>
              
            </div>

            <div className="bg-white shadow-lg rounded-lg p-6 border w-full">
              <h3 className="text-2xl font-bold mb-4">
                Perseverance
              </h3>
              <p className="text-gray-600 text-xl mb-6">
                Always face challenges and adversity with courage and commitment, 
                consistent with our values, never losing sight of our objectives.
              </p>
              
            </div>

            <div className="bg-white shadow-lg rounded-lg p-6 border w-full">
              <h3 className="text-2xl font-bold mb-4">
                Excellence
              </h3>
              <p className="text-gray-600 text-xl mb-6">
                Consistently strive to set high standards and benchmarks in all that we do every day,
                 consistent with the expectations of all our stakeholders.
              </p>
              
            </div>
          </section>
        </section>

  {/* DJT Values  */}

<section className="py-16">
        <h2 className="text-4xl font-bold text-center mb-10">
          Featured News
        </h2>

        <div className="max-w-7xl mx-auto overflow-hidden" ref={emblaRef}>
          <div className="flex">

        
            <div className="flex-[0_0_33.333%] px-4">
              <div className="h-80 bg-white rounded-xl border-2  border-gray-500 shadow-lg flex items-center justify-center text-center p-6">
                <Link
                  href="https://retail.economictimes.indiatimes.com/"
                  target="_blank"
                  className="text-black text-3xl font-bold"
                >
                  Retail Economic Times
                </Link>
              </div>
            </div>

        
            <div className="flex-[0_0_33.333%] px-4">
              <div className="h-80 bg-white rounded-xl border-2  border-gray-500 shadow-lg flex items-center justify-center text-center p-6">
                <Link
                  href="https://www.theweek.in/"
                  target="_blank"
                  className="text-black text-3xl font-bold"
                >
                  The Week
                </Link>
              </div>
            </div>

         
            <div className="flex-[0_0_33.333%] px-4">
              <div className="h-80 bg-white rounded-xl border-2  border-gray-500 shadow-lg flex items-center justify-center text-center p-6">
                <Link
                  href="https://timesofindia.indiatimes.com/"
                  target="_blank"
                  className="text-black text-3xl font-bold"
                >
                  Times of India
                </Link>
              </div>
            </div>

            <div className="flex-[0_0_33.333%] px-4">
              <div className="h-80 bg-white rounded-xl border-2  border-gray-500 shadow-lg flex items-center justify-center text-center p-6">
                <Link
                  href="https://retail.economictimes.indiatimes.com/"
                  target="_blank"
                  className="text-black text-3xl font-bold"
                >
                  Retail Economic Times
                </Link>
              </div>
            </div>

          
           <div className="flex-[0_0_33.333%] px-4">
              <div className="h-80 bg-white rounded-xl border-2  border-gray-500 shadow-lg flex items-center justify-center text-center p-6">
                <Link
                  href="https://www.theweek.in/"
                  target="_blank"
                  className="text-black text-3xl font-bold"
                >
                  The Week
                </Link>
              </div>
            </div>

            <div className="flex-[0_0_33.333%] px-4">
              <div className="h-80 bg-white rounded-xl border-2  border-gray-500 shadow-lg flex items-center justify-center text-center p-6">
                <Link
                  href="https://timesofindia.indiatimes.com/"
                  target="_blank"
                  className="text-black text-3xl font-bold"
                >
                  Times of India
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      
      </main>

      
    </div>
  );
}