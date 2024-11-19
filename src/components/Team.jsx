import {
  FaFacebookF,
  FaInstagramSquare,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";
import img1 from "../assets/images/team/team1.png";
import img2 from "../assets/images/team/team2.png";
import img3 from "../assets/images/team/team3.png";
import img4 from "../assets/images/team/team4.png";

const Team = () => {
  return (
    <div className="team xl:my-10">
      <h2 className="title  text-4xl font-semibold text-center my-16 px-2 lg:text-[4vw] leading-tight sm:my-16">
        We have a team of creative people
      </h2>

      <div className="team-container container mx-auto px-3 grid grid-cols-1 md:grid-cols-2 md:gap-8 md:px-0 lg:grid-cols-4 lg:px-3">
        <div className="team-content">
          <div className=" relative">
            <img
              src={img1}
              alt="Andrew Mark Image"
              className=" border-2 border-gray-950 rounded-xl w-full"
            />

            <div className="social-media flex gap-1 text-4xl  absolute bottom-8 left-1/2 -translate-x-1/2 ">
              <span className=" border text-gray-50 bg-gray-950 text-2xl size-10 flex justify-center items-center rounded-full">
                <FaTwitter />
              </span>

              <span className=" border text-gray-50 bg-gray-950 text-2xl size-10 flex justify-center items-center rounded-full">
                <FaFacebookF />
              </span>

              <span className=" border text-gray-50 bg-gray-950 text-2xl size-10 flex justify-center items-center rounded-full">
                <FaInstagramSquare className=" rounded-full" />
              </span>

              <span className="border text-gray-50 bg-gray-950 text-2xl size-10 flex justify-center items-center rounded-full">
                <FaLinkedinIn />
              </span>
            </div>
          </div>

          <h2 className="team-content-title flex flex-col items-center my-4">
            <span className=" text-3xl font-semibold">Andrew Mark</span>
            <span className="text-xl">Creative Director</span>
          </h2>
        </div>

        <div className="team-content">
          <div className=" relative">
            <img
              src={img2}
              alt="Jact Taylor image"
              className=" border-2 border-gray-950 rounded-xl w-full"
            />

            <div className="social-media flex gap-1 text-4xl  absolute bottom-8 left-1/2 -translate-x-1/2 ">
              <span className=" border text-gray-50 bg-gray-950 text-2xl size-10 flex justify-center items-center rounded-full">
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
          <h2 className="team-content-title flex flex-col items-center my-4">
            <span className=" text-3xl font-semibold">Jact Taylor</span>
            <span className="text-xl">Senior Designer</span>
          </h2>
        </div>

        <div className="team-content">
          <div className="relative">
            <img
              src={img3}
              alt="Martine Joy image"
              className=" border-2 border-gray-950 rounded-xl w-full"
            />

            <div className="social-media flex gap-1 text-4xl  absolute bottom-8 left-1/2 -translate-x-1/2 ">
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

          <h2 className="team-content-title flex flex-col items-center my-4">
            <span className=" text-3xl font-semibold">Martine Joy</span>
            <span className="text-xl">Project Manager</span>
          </h2>
        </div>

        <div className="team-content">
          <div className=" relative">
            <img
              src={img4}
              alt="Adam Straw"
              className=" border-2 border-gray-950 rounded-xl w-full"
            />

            <div className="social-media flex gap-1 text-4xl  absolute bottom-8 left-1/2 -translate-x-1/2 ">
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
          <h2 className="team-content-title flex flex-col items-center my-4">
            <span className=" text-3xl font-semibold">Adam Straw</span>
            <span className="text-xl">Web Developer</span>
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Team;
