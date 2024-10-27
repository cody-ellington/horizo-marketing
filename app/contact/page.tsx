import Link from "next/link";
import { Link as ScrollLink, Element } from "react-scroll";
import Image from "next/image";

const Contact = () => {

  return (
    <>
      {/* NAVIGATION SECTION */}
      <Element
        name="top"
        className="overflow-hidden rounded-[6px] top-5 sticky md:mx-auto z-50 
          xl:w-4/5 2xl:w-[68%] backdrop-blur-xl flex items-center 
          justify-between py-3 px-4 md:px-8 mx-6"
      >
        <Link href={"/"}>
          <Image
            src={"/logo/white-ls.png"}
            alt="Logo"
            width={1000}
            height={1000}
            className="w-20"
          />
        </Link>

        <div className="absolute right-1/2 translate-x-1/2 transform">
          <div className="hidden md:flex gap-x-10 items-center dark:text-gray-200 font-medium text-lg cursor-pointer">
            <Link href={"#showcase"} className="hover:text-blue-600">
              Showcase
            </Link>

            <ScrollLink
              to="services"
              smooth={true}
              className="hover:text-blue-600"
            >
              Services
            </ScrollLink>

            <ScrollLink
              to="process"
              smooth={true}
              className="hover:text-blue-600"
            >
              Process
            </ScrollLink>

            <ScrollLink
              to="guarentees"
              smooth={true}
              className="hover:text-blue-600"
            >
              Guarentees
            </ScrollLink>
          </div>
        </div>

        <div className="flex items-center gap-x-4">
          <Link
            href={"#contact-us"}
            className="py-1 px-6 text-sm hover:bg-[#222482] rounded-3xl border-2 border-black text-black bg-white transition duration-200 hover:shadow-[1px_1px_rgba(0,0,0),2px_2px_rgba(0,0,0),3px_3px_rgba(0,0,0),4px_4px_rgba(0,0,0),5px_5px_0px_0px_rgba(0,0,0)] "
          >
            Contact Us
          </Link>

          {/* <ThemeToggle></ThemeToggle> */}
        </div>
      </Element>
    </>
  );
};

export default Contact;
