import Hero from "../components/HomePage/Hero";
import About from "../components/HomePage/About";
import Projects from "../components/HomePage/Projects";
import Interest from "../components/HomePage/Interest";
import { useGetUserInfoQuery } from "../features/userInfoApiSlice";
import Loading from "../config/Loading";
const Home = () => {
   const { currentData, isFetching, isSuccess, isError, error } =
      useGetUserInfoQuery(undefined, {
         pollingInterval: 60000,
         refetchOnFocus: true,
         refetchOnMountOrArgChange: true,
      });
   // console.log(currentData);
   let content;
   if (isFetching && !currentData) content = <Loading />;
   if (isError) {
      content = <p>{error?.currentData?.message}</p>;
   }
   if (isSuccess) {
      content = (
         <div className="home__main">
            <Hero />
            <About />
            <Projects />
            <Interest />
         </div>
      );
   }
   return content;
};

export default Home;
