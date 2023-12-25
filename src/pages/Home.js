import Hero from "../components/HomePage/Hero";
import About from "../components/HomePage/About";
import Projects from "../components/HomePage/Projects";
import Interest from "../components/HomePage/Interest";

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
