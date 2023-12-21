import Hero from "../components/Hero";
import About from "../components/About";
import Projects from "../components/Projects";
const Home = () => {
   const conetent = (
      <div className="home__main">
         <Hero />
         <About />
         <Projects />
      </div>
   );
   return conetent;
};

export default Home;
