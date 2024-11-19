import {
  FaArrowRight,
  FaFacebookF,
  FaInstagramSquare,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer bg-gray-900 w-full">
      <div className="footer-container container mx-auto px-3 py-20 grid grid-cols-1 gap-8 lg:grid-cols-5">
        <div className="footer-left  text-lime-50 text-center flex flex-col gap-4 mb-6 col-span-3 md:gap-8 lg:text-left">
          <h2
            className="footer-title text-3xl font-semibold
          md:text-[5vw] leading-none 2xl:text-[4vw] "
          >
            Let's start a project together
          </h2>

          <p className="desc w-10/12 mx-auto  text-lg font-medium lg:w-11/12 lg:mx-0">
            We work closely with our clients to understand their objectives,
            target audience, and unique needs. We use our creative skills to
            translate these requirements and practical design solutions.
          </p>

          <div className="footer-left-contact ">
            <div className="phone">
              <h2 className=" text-lime-300 text-2xl">Give us a call:</h2>
              <span className="text-xl">(123) 456-7890</span>
            </div>
            <div className="email mt-3">
              <h2 className=" text-lime-300 text-2xl">Send us an email:</h2>
              <span className="text-xl">info@mthemeus.com</span>
            </div>
          </div>

          <div className="social-media flex justify-center gap-1 text-4xl lg:justify-start">
            <span className="border text-gray-50 bg-gray-950 text-2xl size-10 flex justify-center items-center rounded-full">
              <FaTwitter />
            </span>

            <span className="border text-gray-50 bg-gray-950 text-2xl size-10 flex justify-center items-center rounded-full">
              <FaFacebookF />
            </span>

            <span className="border text-gray-50 bg-gray-950 text-2xl size-10 flex justify-center items-center rounded-full">
              <FaInstagramSquare className=" rounded-full" />
            </span>

            <span className="border text-gray-50 bg-gray-950 text-2xl size-10 flex justify-center items-center rounded-full">
              <FaLinkedinIn />
            </span>
          </div>
        </div>

        <form className="footer-right text-lime-50 flex flex-col gap-5  col-span-2">
          <h2 className=" text-2xl font-poppins">Send us a message</h2>

          <input
            type="text"
            placeholder="Your Name"
            className="w-full bg-gray-900 py-4 px-6 border rounded-full outline-none text-xl"
          />

          <input
            type="email"
            placeholder="Your email address"
            className="w-full bg-gray-900 py-4 px-6 border rounded-full outline-none text-xl"
          />

          <input
            type="tel"
            placeholder="+088-234-6849"
            className="w-full bg-gray-900 py-4 px-6 border rounded-full outline-none text-xl"
          />

          <textarea
            placeholder="Write your message here..."
            className="w-full bg-gray-900 py-4 px-6 border rounded-2xl outline-none text-xl"
          ></textarea>

          <button className=" flex justify-between items-center bg-lime-400 text-gray-900  py-4 px-6 text-2xl font-semibold rounded-full">
            Send message
            <span>
              <FaArrowRight />
            </span>
          </button>
        </form>
      </div>

      <hr className=" container mx-auto opacity-20" />

      <div className="copyright text-lime-50 text-center py-8">
        <div className="footer-logo text-4xl mb-3">
          <img
            src="https://i.imgur.com/L0z4HuS.png"
            alt="log-image"
            className=" size-10 lg:w-6 lg:h-6 inline-block mr-2"
          />
          <span className="text-4xl">Core</span>
        </div>

        <p className=" text-base text-lime-50 opacity-70 font-poppins">
          &copy; Copyright {new Date().getFullYear()}, All Rights Reserved by
          Bappy
        </p>
      </div>
    </div>
  );
};

export default Footer;
