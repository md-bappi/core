import img1 from "../assets/images/icons/ui-ux-design.png";
import img2 from "../assets/images/icons/grahic-design.png";
import img3 from "../assets/images/icons/web-design.png";
import img4 from "../assets/images/icons/motion-graphic.png";
import { FaArrowRight } from "react-icons/fa6";
import { Link } from "react-router-dom";

const data = [
  {
    id: 1,
    icon: img1,
    alt: "ui/ux-design-image",
    title: "UI/UX Design",
    description:
      "focusing on user interface (UI) and user experience (UX) designenhance the usability and accessibility of digital products & app.",
  },
  {
    id: 2,
    icon: img2,
    alt: "web-design-image",
    title: "Graphic Design",
    description:
      "Creating visual elements such as logos, branding materials, page layout techniques, brochures, & other marketing collateral.",
  },
  {
    id: 3,
    icon: img3,
    alt: "graphic-design-image",
    title: "WebDesign",
    description:
      "Designing and developing websites to ensure they are visually look and appealing, user-friendly, and functional your website",
  },
  {
    id: 4,
    icon: img4,
    alt: "graphic-design-image",
    title: "Motion Graphics",
    description:
      "Creating animate graphics, videos for various purposes, including marketing and entertainment. To help sell a product of service.",
  },
];

const Services = () => {
  return (
    <div className="services my-[5vw] w-full ">
      <h2 className="title text-center w-10/12 mx-auto text-3xl font-semibold font-poppins md:w-1/3 md:text-[4xl] mb-6 lg:text-[3vw] leading-tight">
        We provide effective design solutions
      </h2>

      <div className="services-container px-3 flex flex-col items-center gap-8 mt-6 lg:flex-row ">
        {data.map((item) => (
          <div
            key={item.id}
            className="container mx-auto w-full h-fu border-2 border-gray-950 rounded-2xl p-5 flex flex-col items-start gap-5 "
          >
            <img src={item.icon} alt={item.alt} className=" size-12" />
            <h3 className="service-title font-semibold text-2xl">
              {item.title}
            </h3>
            <p className="desc text-gray-800 text-lg font-base ">
              {item.description}
            </p>
            <Link to="/contact" className=" text-2xl">
              <FaArrowRight />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
