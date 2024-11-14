const Hero = () => {
  return (
    <div className="hero p-2 flex flex-col justify-center items-center gap-10 bg-gray-50">
      <div className=" hero-title text-[10vh] font-bold text-center leading-tight font-poppins my-[11vh] md:text-[10vh] md:my-0 md:mt-[19vh] lg:text-[11vh]">
        <h1 className="">Start your business</h1>
        <h1>growth journey with us</h1>
      </div>

      <p className="hero-des container text-lg font-medium w-11/12 text-center">
        We believe in the power of innovation and are passionate about helping
        startups thrive. As a startup company, we are a dynamic and innovative
        organization that provides comprehensive support, guidance and resources
        to early stage startups.
      </p>

      <div className="hero-button flex flex-col items-center gap-8 sm:flex-row">
        <button className=" bg-orange-500 text-gray-50  py-4 px-6 font-semibold text-xl rounded">
          Get In Touch
        </button>
        <button className="py-4 px-6 font-semibold text-xl border-2 border-gray-900 rounded">
          Explore Our Services
        </button>
      </div>
    </div>
  );
};

export default Hero;
