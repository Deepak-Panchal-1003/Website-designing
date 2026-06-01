// export default function ContactUs() {
//   return (
//     <div>
//      <section className="py-20 px-10">
    
//             <h2 className="text-4xl font-bold text-center mb-12">
//               Contact Us
//             </h2>
    
//             <form className="max-w-2xl mx-auto space-y-6">
//               <label>Name*</label>
//               <input
//                 type="text"
//                 className="w-full border-2 border-gray-500 p-3 rounded-lg"
//               />
//               <label>Email*</label>
//               <input
//                 type="email"
//                 className="w-full border-2 border-gray-500 p-3 rounded-lg"
//               />
//               <label>Type a Question*</label>
//               <textarea
//                 rows={5}
//                 className="w-full border-2 border-gray-500  p-3 rounded-lg"
//               ></textarea>
    
//               <button className="bg-gray-900 text-white px-78 py-3 rounded-lg hover:bg-gray-700">
//                 Register
//               </button>
    
//             </form>
    
//           </section>

//           <section>
   
//     <div className="flex flex-col-4 gap-10 px-6 py-8 xmax-w-sm rounded-lg overflow-hidden shadow-lg border bg-white m-10">
      

//       <div className="p-6 " >
//         <h2 className="text-2xl font-bold mb-2">
//           Card Title
//         </h2>

//         <p className="text-gray-600 mb-4 " >
//           This is a simple card component 
//           built using Next.js and
//           Tailwind CSS.
//         </p>

//         <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
//           Read More
//         </button>
//       </div>

//       <div className="p-6">
//         <h2 className="text-2xl font-bold mb-2">
//           Card Title
//         </h2>

//         <p className="text-gray-600 mb-4 " >
//           This is a simple card component 
//           built using Next.js and
//           Tailwind CSS.
//         </p>

//         <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
//           Read More
//         </button>
//       </div>

//       <div className="p-6">
//         <h2 className="text-2xl font-bold mb-2">
//           Card Title
//         </h2>

//         <p className="text-gray-600 mb-4 " >
//           This is a simple card component 
//           built using Next.js and
//           Tailwind CSS.
//         </p>

//         <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
//           Read More
//         </button>
//       </div>

//       <div className="p-6">
//         <h2 className="text-2xl font-bold mb-2">
//           Card Title
//         </h2>

//         <p className="text-gray-600 mb-4 " >
//           This is a simple card component 
//           built using Next.js and
//           Tailwind CSS.
//         </p>

//         <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
//           Read More
//         </button>
//       </div>
//     </div>
// </section>
           
//         </div>
//   );
// }


"use client";

import Link from "next/link";
import useEmblaCarousel from "embla-carousel-react";
import { useEffect } from "react";

export default function ContactUs() {
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
    <div>
      {/* Contact Form */}
      <div className="w-screen items-center flex justify-center">
      <section className="py-10 px-6 bg-white border-2  border-gray-500 m-10 w-[50rem]">
        <h2 className="text-4xl font-bold text-center mb-12">
          Contact Us
        </h2>

        <form className="max-w-2xl mx-auto space-y-6">
          <div>
            <label className="block mb-2 font-medium">
              Name*
            </label>

            <input
              type="text"
              className="w-full border-2  border-gray-500 p-3 rounded-lg"
            />
          </div>

          <div>
            <label className="block mb-2 font-medium">
              Email*
            </label>

            <input
              type="email"
              className="w-full border-2  border-gray-500 p-3 rounded-lg"
            />
          </div>

          <div>
            <label className="block mb-2 font-medium">
              Type a Question*
            </label>

            <textarea
              rows={5}
              className="w-full border-2  border-gray-500 p-3 rounded-lg"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-gray-900 text-white py-3 rounded-lg hover:bg-gray-700"
          >
            Register
          </button>
        </form>
      </section>
      </div>

      {/* Auto Scrolling Carousel */}
      <section className="py-16">
        <h2 className="text-4xl font-bold text-center mb-10">
          Featured News
        </h2>

        <div className="max-w-7xl mx-auto overflow-hidden" ref={emblaRef}>
          <div className="flex">

            {/* Card 1 */}
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

            {/* Card 2 */}
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

            {/* Card 3 */}
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

            {/* Card 4 */}
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

            {/* Card 5 */}
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
    </div>
  );
}