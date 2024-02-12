import React from "react";
import Link from "next/link";


const Navbar = () => {
  return (
    <>
      <div className="w-full h-20 bg-yellow-500 sticky top-0">
        <div className="container mx-auto px-4 h-full">
          <div className="flex justify-between items-center h-full">
            <nav>
            <ul className="hidden md:flex gap-x-6 text-yellow-950  display: flex  font-bold ">
            <section>
            <span>
           <Link href="/">
            <svg width="100" height="30" viewBox="0 0 100 200" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M100 0C155.247 0 200 44.7531 200 100C200 155.247 155.247 200 100 200C44.7531 200 0 155.247 0 100C0 44.7531 44.7531 0 100 0Z" fill="url(#paint0_linear_1413_113281)"/>
            <path d="M70.1852 59.506H66.9753C60.9259 59.506 57.5926 63.0863 57.5926 70.185V104.629C57.5926 113.518 54.6913 116.605 47.9629 116.605C42.6543 116.605 38.3333 114.197 34.9382 109.815C34.6296 109.383 27.6543 112.839 27.6543 121.296C27.6543 130.494 35.9259 136.111 51.2963 136.111C70 136.111 79.8148 126.358 79.8148 104.938V70.185C79.8148 63.0863 76.4815 59.506 70.1852 59.506ZM148.148 76.1727C129.259 76.1727 116.728 88.148 116.728 105.988C116.728 123.827 128.827 136.049 147.839 136.049C166.852 136.049 179.136 124.321 179.136 106.111C179.136 87.9011 166.852 76.1727 148.21 76.1727H148.148ZM147.901 120C140.556 120 135.494 114.629 135.494 106.852C135.494 99.0739 140.679 93.827 147.901 93.827C155.123 93.827 160.309 99.2591 160.309 106.975C160.309 114.691 155 120 147.901 120ZM100.432 78.9505H98.1481C92.4691 78.9505 88.2098 81.6048 88.2098 89.6912V126.605C88.2098 134.815 92.4074 137.346 98.395 137.346H100.679C106.358 137.346 110.37 134.568 110.37 126.605V89.6912C110.37 81.4196 106.42 78.9505 100.432 78.9505ZM99.5061 50.9258C92.3457 50.9258 87.9012 54.9381 87.9012 61.2962C87.9012 67.6542 92.5308 71.7282 99.8765 71.7282C107.222 71.7282 111.481 67.7159 111.481 61.2962C111.481 54.8764 106.852 50.9258 99.5061 50.9258Z" fill="white"/>
            <defs>
            <linearGradient id="paint0_linear_1413_113281" x1="0" y1="0" x2="200" y2="200" gradientUnits="userSpaceOnUse">
            <stop offset="0.15" stop-color="#F2BE75"/>
            <stop offset="0.85" stop-color="#E0A039"/>
            </linearGradient>
            </defs>
            </svg>
            </Link>
            </span>
            </section>
              <li className="hover:underline decoration-1" >
                <Link href="/">
                  <p>Our Business</p>
                  
                </Link>
                
              </li>
              <li className="hover:underline decoration-1 ">
                <Link href="/">
                  <p>Investor Relations</p>
                </Link>
              </li>
              <li className="hover:underline decoration-1 ">
                <Link href="/">
                  <p>Our Company</p>
                </Link>
              </li>
              <li className="hover:underline decoration-1 ">
                <Link href="/">
                  <p>Careers</p>
                </Link>
              </li>
              <li className="hover:underline decoration-1">
                <Link href="/">
                  <p>Contact Us</p>
                </Link>
              </li>
            </ul>
           </nav>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;