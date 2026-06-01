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

import useEmblaCarousel from "embla-carousel-react";

export default function ContactUs() {
  const [emblaRef] = useEmblaCarousel({ loop: true });

  return (
    <div className="max-w-6xl mx-auto p-10">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex">
          
          {/* Slide 1 */}
          <div className="flex-[0_0_100%] px-4">
            <div className="bg-white shadow-lg rounded-xl p-6 text-center">
              <h2 className="text-2xl font-bold mb-2">Card 1</h2>
              <p className="text-gray-600">
                This is the first card inside the carousel.
              </p>
            </div>
          </div>

          {/* Slide 2 */}
          <div className="flex-[0_0_100%] px-4">
            <div className="bg-white shadow-lg rounded-xl p-6 text-center">
              <h2 className="text-2xl font-bold mb-2">Card 2</h2>
              <p className="text-gray-600">
                This is the second card inside the carousel.
              </p>
            </div>
          </div>

          {/* Slide 3 */}
          <div className="flex-[0_0_100%] px-4">
            <div className="bg-white shadow-lg rounded-xl p-6 text-center">
              <h2 className="text-2xl font-bold mb-2">Card 3</h2>
              <p className="text-gray-600">
                This is the third card inside the carousel.
              </p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
} 