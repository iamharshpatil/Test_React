import Navigation from "./assets/components/Navigation";
import Wapper from "./assets/utils/Wapper";
import { useState } from "react";
import Footer from "./assets/components/Footer";

const App = () => {
  return (
    <>
      <Wapper>
        <Navigation />
      </Wapper>
      
      <Wapper>
        <Footer />
      </Wapper>
    </>
  );
};

export default App;
