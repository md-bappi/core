import Hero from "../components/Hero";
import Projects from "../components/Projects";
import Reviews from "../components/Reviews";
import Services from "../components/Services";
import Team from "../components/Team";
import WorkingProcess from "../components/WorkingProcess";

const Home = () => {
  return (
    <div className="home">
      <Hero />
      <Services />
      <WorkingProcess />
      <Reviews />
      <Team />
    </div>
  );
};

export default Home;
