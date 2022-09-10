import { useState } from "react";
import { About, Hero, Navbar } from "./Components";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <About />
    </div>
  );
}

export default App;
