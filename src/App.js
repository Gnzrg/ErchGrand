import { Routes, Route } from "react-router-dom";
import PageLayout from "./Components/PageLayout";
import Home from "./Pages/Home";
import Services from "./Pages/Services";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import "./App.css";
import { useState } from "react";
import { userContext } from "./Contexts/UserContext";
import SignIn from "./Pages/SignIn";
function App() {
  const [background, setBackground] = useState("");
  const [login, setLogin] = useState(false);
  const styleObj = {
    backgroundColor: background,
  };
  const handleScroll = (event) => {
    if (event.currentTarget.scrollTop <= 30) {
      setBackground("");
    } else {
      setBackground("white");
    }
  };
  return (
    <userContext.Provider value={{ login, setLogin }}>
      <div
        className="row"
        onScroll={handleScroll}
        style={{ overflow: "scroll", width: "100vw", height: "100vh" }}
      >
        <Routes>
          <Route element={<PageLayout styleOb={styleObj} />}>
            <Route path="/" element={<Home />} />
            <Route path="services" element={<Services />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Route>
        </Routes>
        <Routes>
          <Route path="/signin" element={<SignIn />} />
        </Routes>
      </div>
    </userContext.Provider>
  );
}

export default App;
