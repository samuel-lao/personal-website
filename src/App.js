import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import { Helmet } from "react-helmet";

import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";

function App() {
  return (
    <>
    {/* for later when i want to add dark mode */}
      {/* <Helmet>
        <style>{'body { background-color: red; }'}</style>
      </Helmet> */}
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
      </BrowserRouter>
    </>

  );
}

export default App;
