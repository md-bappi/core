import Hero from "../components/Hero";
import Projects from "../components/Projects";
import Services from "../components/Services";
import WorkingProcess from "../components/WorkingProcess";

const Home = () => {
  return (
    <div className="home">
      <Hero />
      <Services />
      {/* <Projects /> */}
      <WorkingProcess />
    </div>
  );
};

export default Home;
