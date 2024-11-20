import { AiOutlineLike } from "react-icons/ai";
import { LiaCommentsSolid } from "react-icons/lia";
import { IoSearch } from "react-icons/io5";

import img1 from "../assets/images/blog/blog1.png";
import img2 from "../assets/images/blog/blog2.png";
import img3 from "../assets/images/blog/blog3.png";
import img4 from "../assets/images/blog/team5.png";
import img5 from "../assets/images/blog/team6.png";
import img6 from "../assets/images/blog/team7.png";

const data = [
  {
    id: 1,
    title: "Learn to Tweet your way into a boardroom",
    description:
      "As a first-generation immigrant, money and networks weren’t given to me. So instead of going through the front door, I tried a back door approach.",
  },
  {
    id: 2,
    title: "Web Development and Design",
    description:
      "Proficiency in web development and design allows you to create and maintain websites for clients. As more businesses and individuals seek an online presence.",
  },
  {
    id: 3,
    title: " Copywriting and Content Creation",
    description:
      "Strong copywriting and content creation skills are essential for creating persuasive, engaging, and valuable content for websites, blogs, marketing materials, and social media.",
  },
  {
    id: 4,
    title: "Digital Product Creation",
    description:
      "Creating digital products like e-books, online courses, webinars, or software can generate substantial income. This skill involves not only product creation but also marketing and selling these digital assets to your target audience.",
  },
  {
    id: 5,
    title: " Sales and Persuasion",
    description:
      "Mastering the art of sales and persuasion can help you sell products or services, whether they are your own or those of other businesses. Understanding consumer. While these skills can help you build a one-person business and increase your income potential, it's changing market trends. Additionally, starting and growing a business often involves more than just one skill, so consider a holistic approach to building your business and wealth.",
  },
];

const recentPost = [
  {
    id: 1,
    img: img1,
    alt: "img1",
    title: "7 businesses for easy money",
  },
  {
    id: 2,
    img: img2,
    alt: "img2",
    title: "My 3 tips for business ideas",
  },
  {
    id: 3,
    img: img3,
    alt: "img3",
    title: "12 Halloween costume ideas",
  },
];

const Blog = () => {
  return (
    <div className="blog container mx-auto px-3 my-10 grid grid-cols-1 gap-5 lg:grid-cols-3 lg:my-20 lg:px-10 ">
      {/* blog */}
      <div className="blog-container lg:col-span-2">
        {/* blogs */}
        <div className="blogs">
          <div className="blogs-hero">
            <img src={img3} alt="img3" className="rounded-2xl w-full" />

            <div className="my-5 flex gap-5 items-center">
              <button className=" border border-gray-600 py-2 px-3 rounded-full  lg:px-4 hover:bg-lime-300 hover:duration-300 hover:border-lime-300">
                Business
              </button>
              <span>
                {new Date().getDate()}-{new Date().getMonth()}-
                {new Date().getFullYear()}
              </span>
            </div>

            <h2 className="title text-2xl font-medium md:text-3xl lg:text-4xl">
              Learn these five high-income skills to build your one-person
              business and get rich
            </h2>
            <p className="my-3 text-lg">
              By definition, most high-value skill stacks can’t be taught in
              schools. If the masses could easily access them, they wouldn’t be
              high-value skills anymore. You would become replaceable. And value
              comes from scarcity. Here’s the skill stack to thrive as a
              one-person business
            </p>
          </div>

          <div className="blogs-items">
            {data.map((item) => (
              <div key={item.id} className=" my-5">
                <h2 className="title text-xl font-semibold py-1">
                  #{item.id}: {item.title}
                </h2>
                <p className="desc text-lg">{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* tags */}
        <div className="tags-container flex flex-col gap-6 py-5">
          <div className="tags flex items-center gap-3">
            <h2 className=" text-2xl font-semibold font-poppins">Tags:</h2>
            <div className="flex flex-col gap-1">
              <button className="py-2 px-4 border border-gray-500 rounded-3xl hover:bg-lime-300 hover:duration-300 hover:border-lime-300">
                Business
              </button>
              <button className="py-2 px-4 border border-gray-500 rounded-3xl hover:bg-lime-300 hover:duration-300 hover:border-lime-300 ">
                Solutions
              </button>
            </div>
          </div>

          <div className="link-comment flex items-center gap-5">
            <span className="flex items-center gap-1">
              <AiOutlineLike className="text-2xl" />
              175
            </span>
            <span className="flex items-center gap-1">
              <LiaCommentsSolid className="text-2xl" />
              23
            </span>
          </div>
        </div>

        {/* comments */}
        <div className="conmments my-5">
          <h2 className="comments-title text-2xl font-poppins font-semibold lg:text-3xl">
            Comments:
          </h2>

          <div className="comments-container pt-5">
            {/* comment 1 */}
            <div className="comments-contents flex flex-col gap-10">
              <div className="comments-content grid grid-cols-5">
                <img
                  src={img4}
                  alt="img1"
                  className="col-span-1 size-20 rounded-full justify-self-center"
                />
                <div className="comments-right col-span-4 ">
                  <div
                    className="comments-right-info flex
                   justify-between items-center mb-3"
                  >
                    <div className="info-left">
                      <h2 className="name text-xl font-semibold">
                        Ricky Smith
                      </h2>
                      <span>
                        {new Date().getDate()}-{new Date().getMonth()}-
                        {new Date().getFullYear()}
                      </span>
                    </div>

                    <span className="font-medium">Reply</span>
                  </div>

                  <p className="comments">
                    It is a long established fact that a reader will be distrac
                    readable content of a page when looking at its layout. The
                    point of using is that it has two.
                  </p>
                </div>
              </div>

              {/* reply comment */}
              <div className="comments-content grid grid-cols-4 ">
                <img
                  src={img5}
                  alt="img1"
                  className="col-span-1 size-12  rounded-full justify-self-end mr-5"
                />
                <div className="comments-right col-span-3 ">
                  <div
                    className="comments-right-info flex
                    justify-between items-center mb-3"
                  >
                    <div className="info-left">
                      <h2 className="name text-xl font-semibold">
                        Ricky Smith
                      </h2>
                      <span>
                        {new Date().getDate()}-{new Date().getMonth()}-
                        {new Date().getFullYear()}
                      </span>
                    </div>

                    <span className="font-medium">Reply</span>
                  </div>

                  <p className="comments">
                    It is a long established fact that a reader will be distrac
                    readable content of a page when looking at its layout. The
                    point of using is that it has two.
                  </p>
                </div>
              </div>
            </div>

            {/* comment 2 */}
            <div className="comments-content mt-5 grid grid-cols-5 lg:mt-10">
              <img
                src={img4}
                alt="img1"
                className="col-span-1 size-20 rounded-full justify-self-center"
              />
              <div className="comments-right col-span-4 ">
                <div
                  className="comments-right-info flex
                   justify-between items-center mb-3"
                >
                  <div className="info-left">
                    <h2 className="name text-xl font-semibold">Ricky Smith</h2>
                    <span>
                      {new Date().getDate()}-{new Date().getMonth()}-
                      {new Date().getFullYear()}
                    </span>
                  </div>

                  <span className="font-medium">Reply</span>
                </div>

                <p className="comments">
                  It is a long established fact that a reader will be distrac
                  readable content of a page when looking at its layout. The
                  point of using is that it has two.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="comment-form">
          <h2 className="title text-2xl font-semibold font-poppins mb-5">
            Leave a comments:
          </h2>
          <form className="p-5 border border-gray-500 rounded-lg text-center lg:text-left">
            <input
              type="text"
              placeholder="Your Name"
              className=" py-3 border-b border-gray-500  outline-none font-poppins w-full"
            />
            <input
              type="email"
              placeholder="Email Address"
              className=" py-3 border-b border-gray-500  outline-none font-poppins w-full"
            />
            <textarea
              placeholder="Write us your comment"
              className=" py-5 border-b border-gray-500  outline-none font-poppins w-full"
            ></textarea>

            <button className=" py-3 px-5 bg-gray-900 text-gray-50 mt-5 rounded-full font-semibold font-poppins lg:py-4 lg:my-6 hover:bg-lime-300 hover:duration-300 hover:border-lime-300 hover:text-gray-900">
              Send Message
            </button>
          </form>
        </div>
      </div>

      {/* category */}
      <div className="categorys lg:col-span-1">
        <div className="search py-2 px-3 border border-gray-500 rounded-full flex justify-between items-center">
          <input
            type="text"
            placeholder="Type keyword here"
            className=" outline-none py-2 pl-3"
          />
          <span className=" size-10 rounded-full bg-gray-900 text-gray-50 text-2xl flex justify-center items-center cursor-pointer duration-300">
            <IoSearch />
          </span>
        </div>

        {/* category */}
        <div className="categoroy  border border-gray-500 rounded-xl mt-5 p-5">
          <h2 className="title text-2xl  font-semibold">Categories</h2>
          <div className="  mt-5 flex flex-col gap-2">
            <h3>Business</h3>
            <h3>Development</h3>
            <h3>Technology</h3>
            <h3>Creative Director</h3>
            <h3>Uncategorized</h3>
          </div>
        </div>

        {/* recent post */}
        <div className="recent-posts my-5 border border-gray-500 rounded-xl p-5">
          <h2 className="title text-2xl font-semibold font-poppins pb-2">
            Recent Posts:
          </h2>
          <div className="recent-posts-container flex flex-col gap-5">
            {recentPost.map((item) => (
              <div>
                <img
                  src={item.img}
                  alt={item.alt}
                  className=" rounded-lg mb-3"
                />
                <span className=" text-base">
                  {new Date().getDate()}-{new Date().getMonth()}-
                  {new Date().getFullYear()}
                </span>
                <h2 className="title text-xl font-semibold font-poppins">
                  {item.title}
                </h2>
              </div>
            ))}
          </div>
        </div>

        {/* tags */}
        <div className="tags border border-gray-500 rounded-lg p-5">
          <h2 className="title text-2xl font-semibold font-poppins">Tags:</h2>
          <div className="grid grid-cols-2 gap-2 mt-5 text-lg text-center ">
            <span className="  p-2 bg-gray-100 rounded-full hover:bg-lime-300 hover:duration-300 hover:border-lime-300 cursor-pointer">
              Marketing
            </span>

            <span className="  p-2 bg-gray-100 rounded-full hover:bg-lime-300 hover:duration-300 hover:border-lime-300 cursor-pointer">
              Business
            </span>

            <span className="  p-2 bg-gray-100 rounded-full hover:bg-lime-300 hover:duration-300 hover:border-lime-300 cursor-pointer">
              Solutions
            </span>

            <span className="  p-2 bg-gray-100 rounded-full hover:bg-lime-300 hover:duration-300 hover:border-lime-300 cursor-pointer">
              Studio
            </span>

            <span className="  p-2 bg-gray-100 rounded-full hover:bg-lime-300 hover:duration-300 hover:border-lime-300 cursor-pointer">
              Brand
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
