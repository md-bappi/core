import { IoCallSharp } from "react-icons/io5";
import { CiLocationOn } from "react-icons/ci";

const ContactInformation = () => {
  return (
    <div className="contact-info">
      <h2 className="title text-xl text-center w-1/2 mx-auto font-semibold py-10 sm:text-2xl md:text-4xl lg:text-[3.5rem]">
        Contact Information
      </h2>

      <div className="location container mx-auto grid grid-cols-1 gap-4  p-5 md:grid-cols-2 lg:grid-cols-3">
        {/* phone */}
        <div className="phone flex gap-1 bg-gray-900 text-gray-50 py-4 pr-3 rounded-lg  font-semibold">
          <span className=" text-2xl px-3 pt-2 ">
            <IoCallSharp />
          </span>
          <div className=" col-span-3">
            <h2 className="phone-title text-lg">Call us</h2>
            <span className="text-sm">+088-234-6532-789</span>
            <br />
            <span className="text-sm">+088-456-3217-005</span>
          </div>
        </div>

        {/* email */}
        <div className="phone flex gap-1 bg-gray-900 text-gray-50 py-4 pr-3 rounded-lg  font-semibold">
          <span className=" text-2xl px-3 pt-2 ">
            <CiLocationOn />
          </span>
          <div className=" col-span-3">
            <h2 className="phone-title text-lg">Call us</h2>
            <span className="text-sm">+088-234-6532-789</span>
            <br />
            <span className="text-sm">+088-456-3217-005</span>
          </div>
        </div>

        {/* office address */}
        <div className="office-address flex gap-1 bg-gray-900 text-gray-50 py-4 pr-3 rounded-lg  font-semibold">
          <span className=" text-2xl px-3 pt-2 ">
            <CiLocationOn />
          </span>
          <div className=" col-span-3">
            <h2 className="phone-title text-lg">Call us</h2>
            <span className="text-sm">+088-234-6532-789</span>
            <br />
            <span className="text-sm">+088-456-3217-005</span>
          </div>
        </div>
      </div>

      <div className="maps container mx-auto px-3 py-10">
        <iframe
          className=" w-full rounded-lg  border-2 border-gray-900 md:h-56 lg:h-[32rem]"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14607.672517083438!2d90.3509727413358!3d23.7502987611037!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755bf4e2cd67397%3A0x74dd41479cdb0cfb!2sRd%20No%2019%2C%20Dhaka%201205!5e0!3m2!1sen!2sbd!4v1732087146117!5m2!1sen!2sbd"
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
};

export default ContactInformation;
