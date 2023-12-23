import Hero from "../components/Hero";
import About from "../components/About";
import Projects from "../components/Projects";
import Interest from "../components/Interest";

const Home = () => {
   const conetent = (
      <div className="home__main">
         <Hero />
         <About />
         <Projects />
         <Interest />
      </div>
   );
   return conetent;
};

export default Home;
