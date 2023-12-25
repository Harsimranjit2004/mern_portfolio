import { Route, Routes } from "react-router-dom";

import Layout from "./components/Layout";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import About from "./pages/About";
function App() {
   return (
      <Routes>
         <Route path="/" element={<Layout />}>
            <Route index path="/" element={<Home />} />
            <Route path="/About" element={<About />} />
            <Route path="/Contact" element={<Contact />} />
         </Route>
      </Routes>
   );
}

export default App;
