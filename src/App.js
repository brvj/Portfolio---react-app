import {BrowserRouter, Routes, Route} from "react-router-dom";
import AboutPage from "./pages/AboutPage";
import WorkPage from "./pages/WorkPage";
import ContactPage from "./pages/ContactPage";

function App() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path ="/about" element={<AboutPage/>} exact/>
            <Route path="/work" element={<WorkPage/>} exact/>
            <Route path="/contact" element={<ContactPage/>} exact/>
        </Routes>
    </BrowserRouter>
  );
}

export default App;
