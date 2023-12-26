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
function App() {
   const PrivateRoute = ({ element, redirectTo }) => {
      return false ? element : <Navigate to={redirectTo} replace state={{}} />;
   };

   return (
      <Routes>
         <Route path="/" element={<Layout />}>
            <Route path="/login" element={<ModalComponent />} />
            <Route index path="/" element={<Home />} />
            <Route path="/About" element={<About />} />
            <Route path="/Blogs" element={<Blogs />} />
            <Route path="/Contact" element={<Contact />} />
            {/* <Route element={<ModalComponent />}>
               <Route index path="/Admin" element={<Admin />} />
            </Route> */}
            <Route path="/Blogs/:blogId" element={<Blog />} />
            {/* <PrivateRoute
               path="/Admin"
               element={<Admin />}
               redirectTo="/login"
            /> */}
            <Route path="/login" element={<ModalComponent />} />

            <Route
               path="/Admin"
               element={
                  <PrivateRoute element={<Admin />} redirectTo="/login" />
               }
            />
         </Route>
      </Routes>
   );
}

export default App;
