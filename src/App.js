import { Route, Routes } from "react-router-dom";
import { Navigate } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Blogs from "./components/BlogPage/Blogs";
import ModalComponent from "./components/Modal";
import Admin from "./components/Admin";
import Blog from "./pages/Blog";
import Prefetch from "./config/Prefetch";
function App() {
   const PrivateRoute = ({ element, redirectTo }) => {
      return true ? element : <Navigate to={redirectTo} replace state={{}} />;
   };

   return (
      <Routes>
         <Route path="/" element={<Layout />}>
            {/* <Route element={<Prefetch />}> */}
            <Route path="/login" element={<ModalComponent />} />
            <Route index path="/" element={<Home />} />
            <Route path="/About" element={<About />} />
            <Route path="/Blogs" element={<Blogs />} />
            <Route path="/Contact" element={<Contact />} />
            <Route path="/Blogs/:blogId" element={<Blog />} />
            <Route path="/login" element={<ModalComponent />} />
            <Route
               path="/:adminId"
               element={
                  <PrivateRoute element={<Admin />} redirectTo="/login" />
               }
            />
            {/* </Route> */}
            {/* <Route path="/Admin" element={<Admin />} /> */}
         </Route>
      </Routes>
   );
}

export default App;
