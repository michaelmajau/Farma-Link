import { GiHamburgerMenu } from "react-icons/gi";
import Logo from "../assets/logo1.jpg";
import { RiCloseLargeFill } from "react-icons/ri";
import { useEffect, useState } from "react";
import { LogIn, ShoppingCart } from "lucide-react";
import {Link } from "react-router-dom"
const styles = {
  link: "relative after:absolute after:left-0 after:-bottom-2 after:h-[2px] after:w-0 after:transition-all after:duration-500 hover:after:w-full",
};
const Navbar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [color, setColor]=useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

const changeBackground = () => {
 
  if (window.scrollY>=1){
    setColor(true)
  }else{
    setColor(false)
  }

}
useEffect(() => {
  window.addEventListener("scroll", changeBackground);

  return () => {
    window.removeEventListener("scroll", changeBackground);
  };
}, []);

  return (
   <nav
  className={`fixed top-0 left-0 w-full z-50 flex transition-all duration-300 ${
    color
      ? "bg-white text-black shadow-md"
      : "bg-transparent text-white"
  }`}
>
      <div className="container mx-auto flex items-center justify-between px-4 py-3">

        {/* Logo */}
        <img src={Logo} alt="Logo" className="h-10 w-auto" />

        {/* Desktop menu */}
        <ul className=" absolute left-1/2 hidden -translate-x-1/2 items-center space-x-8 md:flex">
          <li>
            <Link to='Home' className={`${styles.link} ${
              color ? "after:bg-black" : "after:bg-white"
              }`}>
              Home
            </Link>
          </li>

          <li>
           <Link to='Marketplace' className={`${styles.link} ${
              color ? "after:bg-black" : "after:bg-white"
            }`}>
              Marketplace
            </Link>
          </li>

          <li>
            <Link to='Farmers' className={`${styles.link} ${
              color ? "after:bg-black" : "after:bg-white"
              }`}>
              Farmers
            </Link>
          </li>
        </ul>
        <ul className="flex gap-2">
          <li className="">
            <Link to="Cart" className="flex items-center justify-center rounded-full p-3 transition duration-300 hover:bg-[#858981] hover:text-black">
              <ShoppingCart size={18} />
            </Link>
          </li>
        <li
          className={`flex items-center justify-center rounded-xl border px-4 py-1 text-sm font-medium backdrop-blur-sm transition-all duration-300 ${
            color
              ? "border-green-800 bg-green-800 text-white hover:bg-green-900"
              : "border-white/30 bg-white/10 text-white hover:bg-white/20"
          }`}
        >
          <Link
            to="/sign-in"
            className="flex items-center justify-center gap-1.5 whitespace-nowrap"
          >
            <LogIn size={17} />
            <span>Sign in</span>
          </Link>
        </li>
        </ul>

        {/* Mobile menu button */}
        <div className="cursor-pointer md:hidden">
          {isMenuOpen ? (
            <RiCloseLargeFill size={20} onClick={toggleMenu} />
          ) : (
            <GiHamburgerMenu size={20} onClick={toggleMenu} />
          )}
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden px-4 pb-4 ">
          <ul className="flex flex-col space-y-4 text-center">
            <li>
              <a href="#" className={`${styles.link} block`}>
                Home
              </a>
            </li>

            <li>
              <a href="#" className={`${styles.link} block`}>
                Market Place
              </a>
            </li>

            <li>
              <a href="#" className={`${styles.link} block`}>
                Join
              </a>
            </li>

            <li>
              <a href="#" className={`${styles.link} block`}>
                Cart
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav> 
  );
};

export default Navbar;