'use client';

import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Pagination, Navigation, Autoplay } from 'swiper/modules';

const SwiperComponent = () => {
  return (
    <div className="mt-6 w-full">
     <Swiper
  spaceBetween={20}
  slidesPerView={1}
  navigation
  pagination={{ clickable: true }}
  loop
  autoplay={{
    delay: 3000,
    disableOnInteraction: false,
  }}
  modules={[Pagination, Navigation, Autoplay]}
  className="w-[95%] mx-auto rounded-lg overflow-hidden"
>
 
  <SwiperSlide>
    <div className="relative">
      <Image
        src="/img1.jpg"
        alt="DJT Corporation"
        width={1400}
        height={600}
        className="w-full h-[550px] object-cover"
      />
      <div className="absolute inset-0 bg-black/50 flex flex-col justify-center items-center text-white text-center px-6">
        <h1 className="text-5xl font-bold mb-4">
          Welcome to DJT Corporation
        </h1>
        <p className="text-xl max-w-3xl">
          Building strong businesses through innovation, leadership, and excellence.
        </p>
      </div>
    </div>
  </SwiperSlide>

  
  <SwiperSlide>
    <div className="relative">
      <Image
        src="/img2.jpg"
        alt="Our Vision"
        width={1400}
        height={600}
        className="w-full h-[550px] object-cover"
      />
      <div className="absolute inset-0 bg-black/50 flex flex-col justify-center items-center text-white text-center px-6">
        <h1 className="text-5xl font-bold mb-4">
          Our Vision
        </h1>
        <p className="text-xl max-w-3xl">
          Empowering communities and businesses through sustainable growth.
        </p>
      </div>
    </div>
  </SwiperSlide>

 
  <SwiperSlide>
    <div className="relative">
      <Image
        src="/img3.jpg"
        alt="Innovation"
        width={1400}
        height={600}
        className="w-full h-[550px] object-cover"
      />
      <div className="absolute inset-0 bg-black/50 flex flex-col justify-center items-center text-white text-center px-6">
        <h1 className="text-5xl font-bold mb-4">
          Innovation Beyond Limits
        </h1>
        <p className="text-xl max-w-3xl">
          Creating opportunities through technology, creativity, and teamwork.
        </p>
      </div>
    </div>
  </SwiperSlide>

 
  <SwiperSlide>
    <div className="relative">
      <Image
        src="/img4.jpg"
        alt="Investments"
        width={1400}
        height={600}
        className="w-full h-[550px] object-cover"
      />
      <div className="absolute inset-0 bg-black/50 flex flex-col justify-center items-center text-white text-center px-6">
        <h1 className="text-5xl font-bold mb-4">
          Strategic Investments
        </h1>
        <p className="text-xl max-w-3xl">
          Driving long-term value through smart investment decisions.
        </p>
      </div>
    </div>
  </SwiperSlide>

  <SwiperSlide>
    <div className="relative">
      <Image
        src="/img5.jpg"
        alt="Teamwork"
        width={1400}
        height={600}
        className="w-full h-[550px] object-cover"
      />
      <div className="absolute inset-0 bg-black/50 flex flex-col justify-center items-center text-white text-center px-6">
        <h1 className="text-5xl font-bold mb-4">
          Strength Through Teamwork
        </h1>
        <p className="text-xl max-w-3xl">
          Our people are the foundation of our continued success.
        </p>
      </div>
    </div>
  </SwiperSlide>

 
  <SwiperSlide>
    <div className="relative">
      <Image
        src="/img6.jpg"
        alt="Future Growth"
        width={1400}
        height={600}
        className="w-full h-[550px] object-cover"
      />
      <div className="absolute inset-0 bg-black/50 flex flex-col justify-center items-center text-white text-center px-6">
        <h1 className="text-5xl font-bold mb-4">
          Shaping the Future
        </h1>
        <p className="text-xl max-w-3xl">
          Together, we create opportunities that inspire progress and growth.
        </p>
      </div>
    </div>
  </SwiperSlide>
</Swiper>
    </div>
  );
};

export default SwiperComponent;