import { MdOutlineQuestionMark } from "react-icons/md";

const data = [
  {
    id: 1,
    title: "What services does agency offer?",
    description:
      "Clients often seek to understand the range of design services an agency provides, such as graphic design, web design, branding.",
  },
  {
    id: 2,
    title: "What is your design process like?",
    description:
      "Explaining the design agency's process from initial concept to final delivery helps clients understand what to expect.",
  },
  {
    id: 3,
    title: "How much does design work cost?",
    description:
      "The cost of our design services varies depending on the scope of the project. We provide customized quotes after discussing requirements.",
  },
  {
    id: 4,
    title: "What's your design process like?",
    description:
      "Our design process typically involves discovery, concept development, design, revisions based on feedback, and finalization.",
  },
  {
    id: 5,
    title: "How do you handle user feedback?",
    description:
      "We value client feedback and work closely with you to make sure user happy with the final design. We offer a specific number of revisions.",
  },
  {
    id: 6,
    title: "Can we see samples of your work?",
    description:
      "Yes, we're proud to showcase a portfolio of our previous projects. You can find examples of our work on our website or view our portfolio.",
  },
];

const Faqs = () => {
  return (
    <div className="faqs mt-10">
      <h2
        className="title text-center text-3xl font-semibold w-10/12 mx-auto md:text-4xl lg:text-[3.5rem]
      "
      >
        These FAQs helpclients learn about us
      </h2>

      <div className="faqs-container px-3 container mx-auto grid grid-cols-1 gap-6 py-10 lg:grid-cols-2 lg:py-16">
        {data.map((item) => (
          <div className="faqs-content grid grid-cols-8" key={item.id}>
            <span className="icons col-span-1 flex justify-center pt-2">
              <MdOutlineQuestionMark className=" size-6 p-1 bg-lime-400 rounded-full" />
            </span>

            <div className="details col-span-7">
              <h2 className="title text-xl font-semibold pb-2 md:text-2xl ">
                {item.title}
              </h2>
              <p className="details-desc">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Faqs;
