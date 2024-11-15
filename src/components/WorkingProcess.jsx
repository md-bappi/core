import { FaArrowDown } from "react-icons/fa";

const WorkingProcess = () => {
  return (
    <div className="process grid grid-cols-1 gap-12 px-3 my-8 md:grid-cols-5 lg:my-20 lg:px-8">
      <div className="process-left sm:w-8/12 mx-auto md:col-span-3 md:w-full">
        <h2 className="title text-4xl font-semibold text-center mb-6 lg:text-[4vw] leading-tight">
          Our high-quality working processes
        </h2>
        <div className="desc text-center text-medium px-5 md:text-justify lg:text-xl ">
          <p className=" mb-2">
            We focus at every stage on effective communication and collaboration
            between the client and ensuring that the final design meets the
            client s objectives and expectations.
          </p>
          <p>
            It is important to note that these are simplified steps, and the
            actual work process may vary depending on the complexity of the
            project.
          </p>
        </div>
      </div>

      <div className="process-right flex flex-col items-start gap-3 md:col-span-2">
        <div className="flex justify-between items-center border-2 border-gray-950 rounded-2xl p-3 w-full sm:py-4">
          <h2 className="text-xl font-semibold">O1/Project idea</h2>
          <span className=" text-xl">
            <FaArrowDown />
          </span>
        </div>

        <div className="flex justify-between items-center border-2 border-gray-950 rounded-2xl p-3 w-full sm:py-4">
          <h2 className="text-xl font-semibold">O2/Brainstoriming</h2>
          <span className=" text-xl">
            <FaArrowDown />
          </span>
        </div>

        <div className="flex justify-between items-center border-2 border-gray-950 rounded-2xl p-3 w-full sm:py-4">
          <h2 className="text-xl font-semibold">O3/Launch</h2>
          <span className=" text-xl">
            <FaArrowDown />
          </span>
        </div>
      </div>
    </div>
  );
};

export default WorkingProcess;
