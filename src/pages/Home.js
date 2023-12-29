import Hero from "../components/HomePage/Hero";
import About from "../components/HomePage/About";
import Projects from "../components/HomePage/Projects";
import Interest from "../components/HomePage/Interest";
import { useGetUserInfoQuery } from "../features/userInfoApiSlice";
import Loading from "../config/Loading";
const Home = () => {
   const {
      data: userInfo,
      isLoading,
      isSuccess,
      isError,
      error,
   } = useGetUserInfoQuery("userInfoList", {
      pollingInterval: 60000,
      refetchOnFocus: true,
      refetchOnMountOrArgChange: true,
   });
   let content;
   if (isLoading) content = <Loading />;
   if (isError) {
      content = <p>{error?.data?.message}</p>;
   }
   if (isSuccess) {
      content = (
         <div className="home__main">
            <Hero id={userInfo?.ids[0]} />
            <About />
            <Projects />
            <Interest />
         </div>
      );
   }
   return content;
};

export default Home;
