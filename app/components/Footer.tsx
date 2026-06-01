import React from "react";
import { FaTwitter, FaLinkedin, FaFacebook } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-cyan-50 p-6 ">

  
      <div className="grid md:grid-cols-4 gap-10 border-b pb-10 m-10 ">

       
        <div>
          <h1 className="text-5xl font-serif font-bold text-gray-800">
            DJT
          </h1>

          <p className="text-xl mt-2 text-gray-700">
            Corporation & Investments
          </p>

          <div className="mt-10 space-y-6 text-xl text-gray-800">
            <p>info@djtcorp.in</p>
            <p>0120 - 6846200</p>
          </div>
        </div>

       
        <div>
          <h2 className="text-2xl font-semibold mb-6">
            About
          </h2>

          <ul className="space-y-4 text-xl  text-gray-800">
            <li>Our Values</li>
             <li>Our Culture</li>
            <li>Management Team</li>
            <li>Our Businesses</li>
             
          </ul>
        </div>

       
        <div className="pt-14">
          <p className="text-xl text-gray-800">
            Contact Us
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-6">
            General
          </h2>

          <ul className="space-y-4 text-xl text-gray-800">
            <li>Terms & Conditions</li>
            <li>Privacy Policy</li>
            <li>Careers</li>
          </ul>

          <div className="flex gap-6 mt-10 text-4xl">
            <FaTwitter className="text-sky-500 cursor-pointer" />
            <FaLinkedin className="text-blue-700 cursor-pointer" />
            <FaFacebook className="text-blue-600 cursor-pointer" />
          </div>
        </div>
      </div>

    
      <div className="grid md:grid-cols-2 gap-10 m-10">

        <div className="space-y-6 text-xl text-gray-800">
          <p>© 2024. All Rights Reserved.</p>
          <p>CIN: U66020UP2017PTC092043</p>
        </div>

        <div className="bg-white p-8 text-lg leading-6 text-gray-800 shadow-sm  mb-10" >
          <p>
           Disclaimer : This site is provided by DJT on an "as is" and "as available" basis. DJT makes no representations or warranties of any kind, express or implied, as to the operation of this site or the information, content, materials, or products included on this site. You expressly agree that your use of this site is at your sole risk. Nothing stated on this website shall demine to be solicitated on any account by DJT. To the full extent permissible by applicable law, DJT disclaims all warranties, express or implied, including, but not limited to, implied warranties of merchantability and fitness for a particular purpose. DJT does not warrant that this site, its servers, or e-mail sent from DJT are free of viruses or other harmful components. DJT will not be liable for any damages of any kind arising from the use of this site, including, but not limited to direct, indirect, incidental, punitive, and consequential damages.
          </p>
        </div>

      </div>

    </footer>
  );
};

export default Footer; 