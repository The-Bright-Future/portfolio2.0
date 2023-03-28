import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from '../../../Assctes/logo.png';


const Header = () => {
 const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
     <nav className="relative z-10">
      <div className="py-2 fixed mx-auto bg-[#080f2d6e] md:py-4 md:px-[4%] w-full px-[4%]">
        <div className="relative flex items-center justify-between">
          <Link to="/"><img src={logo} alt="" /></Link>
          <ul className=" items-center hidden space-x-8 lg:flex ">
            <li className="font-medium tracking-wide text-gray-100 transition-colors duration-200 hover:text-teal-accent-400 relative">
                <NavLink
                    to="/"
                    className={({ isActive, isPending }) =>
                        isPending ? "text-red-400" : isActive ? "text-[#00d5ff] after:absolute after:left-0 after:right-0 after:bottom-[-10px] after:h-[4px] after:w-[20px] after:mx-auto after:rounded-full  after:bg-[#00bfff]" : ""
                    }
                    >
                    Home
                    </NavLink>
            </li>
              <li className="font-medium tracking-wide text-gray-100 transition-colors duration-200 hover:text-teal-accent-400 relative">
                <NavLink
                    to="/about"
                    className={({ isActive, isPending }) =>
                        isPending ? "text-red-400" : isActive ? "text-[#00d5ff] after:absolute after:left-0 after:right-0 after:bottom-[-10px] after:h-[4px] after:w-[20px] after:mx-auto after:rounded-full  after:bg-[#00bfff]" : ""
                    }
                    >
                    About us
                    </NavLink>
            </li>
              <li className="font-medium tracking-wide text-gray-100 transition-colors duration-200 hover:text-teal-accent-400 relative">
                <NavLink
                    to="/project"
                    className={({ isActive, isPending }) =>
                        isPending ? "text-red-400" : isActive ? "text-[#00d5ff] after:absolute after:left-0 after:right-0 after:bottom-[-10px] after:h-[4px] after:w-[20px] after:mx-auto after:rounded-full  after:bg-[#00bfff]" : ""
                    }
                    >
                    Project
                    </NavLink>
            </li>
              <li className="font-medium tracking-wide text-gray-100 transition-colors duration-200 hover:text-teal-accent-400 relative">
                <NavLink
                    to="/service"
                    className={({ isActive, isPending }) =>
                        isPending ? "text-red-400" : isActive ? "text-[#00d5ff] after:absolute after:left-0 after:right-0 after:bottom-[-10px] after:h-[4px] after:w-[20px] after:mx-auto after:rounded-full  after:bg-[#00bfff]" : ""
                    }
                    >
                    Service
                    </NavLink>
            </li>
              <li className="font-medium tracking-wide text-gray-100 transition-colors duration-200 hover:text-teal-accent-400 relative">
                <NavLink
                    to="/technology"
                    className={({ isActive, isPending }) =>
                        isPending ? "text-red-400" : isActive ? "text-[#00d5ff] after:absolute after:left-0 after:right-0 after:bottom-[-10px] after:h-[4px] after:w-[20px] after:mx-auto after:rounded-full  after:bg-[#00bfff]" : ""
                    }
                    >
                    Technology
                    </NavLink>
            </li>
              <li className="font-medium tracking-wide text-gray-100 transition-colors duration-200 hover:text-teal-accent-400 relative">
                <NavLink
                    to="/review"
                    className={({ isActive, isPending }) =>
                        isPending ? "text-red-400" : isActive ? "text-[#00d5ff] after:absolute after:left-0 after:right-0 after:bottom-[-10px] after:h-[4px] after:w-[20px] after:mx-auto after:rounded-full  after:bg-[#00bfff]" : ""
                    }
                    >
                    Review
                    </NavLink>
            </li>
           
            <li>
              <Link to="/joinUs"
                className="inline-flex bg-[#418CD2] items-center justify-center py-2 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
                aria-label="Sign up"
                title="Sign up"
              >
                Join us
              </Link>
            </li>
          </ul>
          <div className="lg:hidden">
             {/* onClick={() => setIsMenuOpen(!isMenuOpen)} */}
             <label  className="bg-[#19192d48] w-[50px] h-[40px] rounded-lg swap swap-rotate">
                <input onClick={() => setIsMenuOpen(!isMenuOpen)}  className='opacity-[0] ' type="checkbox" />
                <svg className="swap-off  fill-current" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 512 512"><path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z"/></svg>
                <svg className="swap-on fill-current" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 512 512"><polygon points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49"/></svg>
                </label>
            {isMenuOpen && (
              <div className="fixed duration-200 h-screen top-[60px] left-0 w-full overflow-hidden bg-[#00000084]">
                  <div className={`${isMenuOpen ? 'opacity-[100%]' : 'opacity-[0]'} bg-[#161f2a]  duration-200 h-full w-[320px]`}>
                        <ul className="p-2">
                          <li className="font-medium mt-300 h-[40px] flex items-center rounded overflow-hidden px-2 racking-wide text-gray-100 transition-colors duration-200 hover:text-teal-accent-400 relative ">
                              <NavLink
                                  to="/"
                                  className={({ isActive, isPending }) =>
                                      isPending ? "text-red-400" : isActive ? "absolute top-0 left bottom-0 flex items-center rounded px-3 h-full w-full bg-[#1796f034]" : ""
                                  }
                                  >
                                  Home
                                  </NavLink>
                          </li>
                            <li className="font-medium mt-3 h-[40px] flex items-center rounded overflow-hidden px-2 tracking-wide text-gray-100 transition-colors duration-200 hover:text-teal-accent-400 relative ">
                              <NavLink
                                  to="/about"
                                  className={({ isActive, isPending }) =>
                                      isPending ? "text-red-400" : isActive ? "absolute top-0 left-0 bottom-0 flex items-center px-3 h-full w-full bg-[#1795F0]" : ""
                                  }
                                  >
                                  About us
                                  </NavLink>
                          </li>
                            <li className="font-medium mt-3 h-[40px] flex items-center rounded overflow-hidden px-2 tracking-wide text-gray-100 transition-colors duration-200 hover:text-teal-accent-400 relative ">
                              <NavLink
                                  to="/project"
                                  className={({ isActive, isPending }) =>
                                      isPending ? "text-red-400" : isActive ? "absolute top-0 left-0 bottom-0 flex items-center px-3 h-full w-full bg-[#1795F0]" : ""
                                  }
                                  >
                                  Project
                                  </NavLink>
                          </li>
                            <li className="font-medium mt-3 h-[40px] flex items-center rounded overflow-hidden px-2 tracking-wide text-gray-100 transition-colors duration-200 hover:text-teal-accent-400 relative ">
                              <NavLink
                                  to="/service"
                                  className={({ isActive, isPending }) =>
                                      isPending ? "text-red-400" : isActive ? "absolute top-0 left-0 bottom-0 flex items-center px-3 h-full w-full bg-[#1795F0]" : ""
                                  }
                                  >
                                  Service
                                  </NavLink>
                          </li>
                            <li className="font-medium mt-3 h-[40px] flex items-center rounded overflow-hidden px-2 tracking-wide text-gray-100 transition-colors duration-200 hover:text-teal-accent-400 relative ">
                              <NavLink
                                  to="/technology"
                                  className={({ isActive, isPending }) =>
                                      isPending ? "text-red-400" : isActive ? "absolute top-0 left-0 bottom-0 flex items-center px-3 h-full w-full bg-[#1795F0]" : ""
                                  }
                                  >
                                  Technology
                                  </NavLink>
                          </li>
                            <li className="font-medium mt-3 h-[40px] flex items-center rounded overflow-hidden px-2 tracking-wide text-gray-100 transition-colors duration-200 hover:text-teal-accent-400 relative ">
                              <NavLink
                                  to="/review"
                                  className={({ isActive, isPending }) =>
                                      isPending ? "text-red-400" : isActive ? "absolute top-0 left-0 bottom-0 flex items-center px-3 h-full w-full bg-[#1795F0]" : ""
                                  }
                                  >
                                  Review
                                  </NavLink>
                          </li>
                        
                          <li>
                            <Link to="/joinUs"
                              className="inline-flex bg-[#418CD2] items-center justify-center py-2 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
                              aria-label="Sign up"
                              title="Sign up"
                            >
                              Join us
                            </Link>
                          </li>
                        </ul>
                  </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;