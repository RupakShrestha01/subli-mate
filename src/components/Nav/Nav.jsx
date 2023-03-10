import React, { useState, useEffect } from 'react';
import logo from '../../assets/image/icons/logo.svg';
const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [navbar, setNavbar] = useState(false);
  const changeBackground = () => {
    console.log(window.scrollY);
    if (window.scrollY >= 66) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };
  useEffect(() => {
    changeBackground();

    window.addEventListener('scroll', changeBackground);
  });
  return (
    <nav
      className={
        navbar
          ? 'px-4 py-6 mx-auto lg:py-2 sm:max-w-xl md:max-w-full lg:max-w-screen-2xl md:px-24 lg:px-8 w-full transition ease-in-out  duration-500 fixed bg-black z-50'
          : 'px-4 py-6 mx-auto lg:py-2 sm:max-w-xl md:max-w-full lg:max-w-screen-2xl md:px-24 lg:px-8'
      }
    >
      <div class=" relative flex items-center justify-between lg:justify-center lg:space-x-16 ">
        <ul class=" flex items-center hidden space-x-8 lg:flex">
          <li>
            <a
              href="#home"
              aria-label="Our product"
              title="Our product"
              class="font-medium tracking-wide text-white transition-colors duration-200 hover:text-gray-300"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#service"
              aria-label="Our product"
              title="Our product"
              class="font-medium tracking-wide text-white transition-colors duration-200 hover:text-gray-300"
            >
              Services
            </a>
          </li>
          <li>
            <a
              href="#product"
              aria-label="Product pricing"
              title="Product pricing"
              class="font-medium tracking-wide text-white transition-colors duration-200 hover:text-gray-300"
            >
              Product
            </a>
          </li>
        </ul>
        <a
          href="/"
          aria-label="Sublimate"
          title="Sublimate"
          class="inline-flex items-center"
        >
          <img src={logo} class="w-16 h-16 shadow-xl rounded-full" alt="logo" />
        </a>
        <ul class="flex items-center hidden space-x-8 lg:flex">
          <li>
            <a
              href="#client"
              aria-label="About us"
              title="About us"
              class="font-medium tracking-wide text-white transition-colors duration-200 hover:text-gray-300"
            >
              Our Client
            </a>
          </li>
          <li>
            <a
              href="/"
              aria-label="Sign in"
              title="Sign in"
              class="font-medium tracking-wide text-white transition-colors duration-200 hover:text-gray-300"
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#contact"
              aria-label="Sign up"
              title="Sign up"
              class="font-medium tracking-wide text-white transition-colors duration-200 hover:text-gray-300"
            >
              Contact us
            </a>
          </li>
        </ul>
        <div class="lg:hidden">
          <button
            aria-label="Open Menu"
            title="Open Menu"
            class="p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline hover:bg-deep-purple-50 focus:bg-deep-purple-50"
            onClick={() => setIsMenuOpen(true)}
          >
            <svg class="w-5 text-white" viewBox="0 0 24 24">
              <path
                fill="currentColor"
                d="M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z"
              />
              <path
                fill="currentColor"
                d="M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z"
              />
              <path
                fill="currentColor"
                d="M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z"
              />
            </svg>
          </button>
          {isMenuOpen && (
            <div class="absolute top-0 left-0 w-full  z-50">
              <div class="p-5 bg-white border rounded shadow-sm">
                <div class="flex items-center justify-between mb-4">
                  <div>
                    <a
                      href="/"
                      aria-label="Company"
                      title="Company"
                      class="inline-flex items-center"
                    >
                      <img
                        src={logo}
                        class="w-16 h-16 shadow-xl rounded-full"
                        alt="logo"
                      />
                    </a>
                  </div>
                  <div>
                    <button
                      aria-label="Close Menu"
                      title="Close Menu"
                      class="p-2 -mt-2 -mr-2 transition duration-200 rounded hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <svg class="w-5 text-gray-600" viewBox="0 0 24 24">
                        <path
                          fill="currentColor"
                          d="M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
                <nav>
                  <ul class="space-y-4">
                    <li>
                      <a
                        href="#home"
                        aria-label="Our product"
                        title="Our product"
                        class="font-medium tracking-wide text-black transition-colors duration-200 hover:text-gray-300"
                      >
                        Home
                      </a>
                    </li>
                    <li>
                      <a
                        href="#service"
                        aria-label="Our product"
                        title="Our product"
                        class="font-medium tracking-wide text-black transition-colors duration-200 hover:text-gray-300"
                      >
                        Service
                      </a>
                    </li>
                    <li>
                      <a
                        href="#client"
                        aria-label="Product pricing"
                        title="Product pricing"
                        class="font-medium tracking-wide text-black transition-colors duration-200 hover:text-gray-300"
                      >
                        Our Clients
                      </a>
                    </li>
                    <li>
                      <a
                        href="/"
                        aria-label="About us"
                        title="About us"
                        class="font-medium tracking-wide text-black transition-colors duration-200 hover:text-gray-300"
                      >
                        About
                      </a>
                    </li>
                    <li>
                      <a
                        href="#contact"
                        aria-label="Sign in"
                        title="Sign in"
                        class="font-medium tracking-wide text-black transition-colors duration-200 hover:text-gray-300"
                      >
                        Contact
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Nav;
