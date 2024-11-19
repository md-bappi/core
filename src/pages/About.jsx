import bgImg from "../assets/images/about/video-bg.png";
import img1 from "../assets/images/about/story1.png";
import img2 from "../assets/images/about/story2.png";
import img3 from "../assets/images/about/story3.png";
import img4 from "../assets/images/about/story4.png";

const About = () => {
  return (
    <div className="about">
      {/* about experience */}
      <div className="about-experience lg:flex lg:flex-col container mx-auto">
        <div className="working-exp-title grid grid-cols-1 gap-4 text-center py-5 lg:grid-cols-3 lg:gap-10 lg:py-16 lg:text-left">
          <h2 className="title text-4xl font-semibold w-10/12 mx-auto mt-5 md:text-[3rem] lg:col-span-2 lg:leading-tight ">
            We make your business stand out
          </h2>

          <p className="desc text-medium text-lg py-5 lg:col-span-1 lg:text-2xl">
            We work closely with our clients to know their objectives, target
            audience, unique needs, and practical design solutions.
          </p>
        </div>

        <div className="working-exp-image px-3 grid grid-cols-1 gap-5 lg:grid-cols-3">
          <img
            src={bgImg}
            alt="bg-image"
            className=" rounded-2xl border-[5px] border-gray-900 col-span-2"
          />

          <div
            className="working-exp-animation bg-gray-900 text-lime-50 text-center py-10 text-xl flex flex-col gap-5 rounded-2xl col-span-1
          "
          >
            <div className="flex flex-col">
              <span className=" text-4xl font-semibold text-lime-400">15+</span>
              <span className="font-semibold">Years of experience</span>
            </div>

            <hr className="w-9/12 mx-auto opacity-20" />

            <div className="flex flex-col">
              <span className="text-4xl font-semibold text-lime-400">120k</span>
              <span className=" font-semibold">Successfull projects</span>
            </div>

            <hr className=" w-9/12 mx-auto opacity-20" />

            <div className="flex flex-col">
              <span className=" text-4xl font-semibold text-lime-400">
                100%
              </span>
              <span className=" font-semibold">Client satisfaction rate</span>
            </div>
          </div>
        </div>
      </div>

      {/* story */}
      <div className="about-story">
        <div className="story-title px-3">
          <h2 className="title text-4xl font-semibold w-10/12 text-center mx-auto my-5 md:text-[3rem] md:leading-tight lg:w-1/2 lg:text-[3.5rem] lg:pt-10">
            We think our story is worth sharing with you
          </h2>
          <p className="desc text-center py-5 text-lg md:w-10/12 mx-auto lg:w-1/2 lg:pb-10 lg:text-xl">
            Established in 2008, we began as a small but ambitious team. We
            understood the importance of creative and tech-savvy solutions to
            help businesses succeed in the ever-changing digital landscape.
          </p>
        </div>

        <div className="story-image container mx-auto grid grid-cols-1 gap-5 px-3 lg:grid-cols-3">
          <img
            src={img1}
            alt="story image 1"
            className="border-[3px] border-gray-900 rounded-xl w-full lg:col-span-2"
          />
          <img
            src={img2}
            alt="story image 2"
            className="border-[3px] border-gray-900 rounded-xl w-full lg:col-span-1 "
          />
          <img
            src={img3}
            alt="story image 3"
            className="border-[3px] border-gray-900 rounded-xl w-full col-span-1"
          />
          <img
            src={img4}
            alt="story image 4"
            className="border-[3px] border-gray-900 rounded-xl w-full  col-span-2"
          />
        </div>
      </div>

      {/* vision */}
      <div className="about-vision container mx-auto px-3 flex flex-col gap-6 py-6 md:flex-row md:gap-10 lg:py-16">
        <div className="vision-left">
          <h2 className="title text-3xl font-semibold mb-6">Our core vision</h2>
          <p className="desc text-lg pb-3">
            Empowering businesses to create impactful and visually stunning
            brand experiences that captivate audiences and drive success in the
            digital age.
          </p>
          <p className="desc text-lg">
            Our team consists of experienced designers, developers. We have a
            wide variety of skills and backgrounds, allowing us to tackle
            projects of all sizes and complexities. We believe in the power of
            imagination and innovation.
          </p>
        </div>
        <div className="vision-right">
          <h2 className="title text-3xl font-semibold mb-6">
            Our main mission
          </h2>
          <p className="desc text-lg mb-3">
            Our mission is to collaborate with businesses of all sizes, from
            startups to established brands, to provide innovative and creative
            design solutions.
          </p>
          <p className="desc">
            We are committed to creating designs that inspire, connect & our
            clients in the marketplace. Our focus is on understanding. Our
            clients' unique needs and delivery designs that not only meet but
            exceed their expectations.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
