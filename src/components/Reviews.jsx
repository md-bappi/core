import img1 from "../assets/images/reviews/t_thumb1.png";
import img2 from "../assets/images/reviews/t_thumb2.png";
import img3 from "../assets/images/reviews/t_thumb3.png";
import img4 from "../assets/images/reviews/t_thumb4.png";
import { FaStar } from "react-icons/fa";

const Reviews = () => {
  return (
    <div className="reviews my-8 px-3">
      <h2 className="title text-4xl font-semibold text-center mb-6 lg:text-[4vw] leading-tight sm:my-16">
        Clients are always satisfied with us
      </h2>

      <div className="review-container container mx-auto grid grid-cols-1 justify-start gap-6 md:grid-cols-2">
        <div className="review border-2 border-gray-950 rounded-xl p-6 flex flex-col justify-start gap-4">
          <span className="flex text-4xl">
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
          </span>

          <h2 className="review-title text-3xl font-medium  leading-8">
            Super customer service!
          </h2>

          <p className="review-desc text-gray-900">
            Excellent customer service and I was really impressed and happy with
            my purchase especially as it was a last minute order which got to me
            in time, and when it arrived I was very happy with the design and
            size and so was the recipient.
          </p>

          <div className=" flex items-center gap-2">
            <img
              src={img1}
              alt="first-image"
              className=" size-10 rounded-full"
            />
            <h2 className="flex flex-col leading-5 ">
              <span>William Jack</span> <span>Founder@XYZ</span>
            </h2>
          </div>
        </div>

        <div className="review  border-2 border-gray-950 rounded-xl p-6 flex flex-col justify-start gap-4">
          <span className="flex text-4xl">
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
          </span>

          <h2 className="review-title text-3xl font-medium  leading-8">
            Exceptional creativity and vision
          </h2>

          <p className="review-desc  text-gray-900">
            Working Mthemeus was a game-changer for our brand. Their exceptional
            creativity & vision breathed new life into our visual. The logo they
            perfectly captures our essence & has become instantly recognizable.
            We couldn't be happier the results!
          </p>

          <div className=" flex items-center gap-2">
            <img
              src={img2}
              alt="second-image"
              className=" size-10 rounded-full"
            />
            <h2 className="flex flex-col leading-5 ">
              <span>Smith Align</span>
              <span>Businessman</span>
            </h2>
          </div>
        </div>

        <div className="review  border-2 border-gray-950 rounded-xl p-6 flex flex-col justify-start gap-4">
          <span className="flex text-4xl">
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
          </span>

          <h2 className="review-title text-3xl font-medium  leading-8">
            Innovative and professional
          </h2>

          <p className="review-desc  text-gray-900">
            I can't say enough good things about them. Their team is not only
            incredibly talented but also highly professional. They listened to
            our ideas and brought to life in ways we couldn't have imagined.
            Their innovative approach and dedication to our project.
          </p>

          <div className=" flex items-center gap-2">
            <img
              src={img3}
              alt="third-image"
              className=" size-10 rounded-full"
            />
            <h2 className="flex flex-col leading-5 ">
              <span>Smith Align</span>
              <span> Milano Joe</span>
            </h2>
          </div>
        </div>

        <div className="review  border-2 border-gray-950 rounded-xl p-6 flex flex-col justify-start gap-4">
          <span className="flex text-4xl">
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
          </span>

          <h2 className="review-title text-3xl font-medium  leading-8">
            Transformed our brand
          </h2>

          <p className="review-desc  text-gray-900">
            Our partnership with Mthemeus transformed our brand from ordinary to
            extraordinary. Their branding expertise and design work elevated our
            marketing materials to a whole new level. Our customers have taken
            notice, and boost in brand recognition.
          </p>

          <div className=" flex items-center gap-2">
            <img
              src={img4}
              alt="four-image1"
              className=" size-10 rounded-full"
            />
            <h2 className="flex flex-col leading-5 ">
              <span>Danial Mark </span>
              <span>Marketing Director</span>
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
