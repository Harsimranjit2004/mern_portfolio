import { Route, Routes } from "react-router-dom";
import { Navigate } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Blogs from "./components/BlogPage/Blogs";
import Login from "./components/auth/Login";
import Admin from "./components/Admin";
import Blog from "./pages/Blog";
import { useSelector } from "react-redux";
// import updateProject from "./components/HomePage/updateProject";
// import UpdateProject from "./components/HomePage/UpdateProject"
import UpdateProject from "./components/HomePage/UpdateProject";
function App() {
   const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
   const PrivateRoute = ({ element, redirectTo }) => {
      return isAuthenticated ? (
         element
      ) : (
         <Navigate to={redirectTo} replace state={{}} />
      );
   };

   return (
      <Routes>
         <Route path="/" element={<Layout />}>
            {/* <Route element={<Prefetch />}> */}
            <Route path="/login" element={<Login />} />
            <Route index path="/" element={<Home />} />
            <Route path="/About" element={<About />} />
            <Route path="/Blogs" element={<Blogs />} />
            <Route path="/Contact" element={<Contact />} />
            <Route path="/Blogs/:blogId" element={<Blog />} />
            <Route path="/login" element={<Login />} />
            <Route path="/updateproject" element={<UpdateProject />} />
            <Route
               path="/admin"
               element={
                  <PrivateRoute element={<Admin />} redirectTo="/login" />
               }
            />
         </Route>
      </Routes>
   );
}

export default App;
