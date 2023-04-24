import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import AllRoutes from "./components/routes/AllRoutes";
import Footer from "./components/Footer/Footer";
import { CircularProgress } from "@chakra-ui/react";
import { useState, useEffect } from "react";
function App() {
  const [data, setData] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setData(true);
    }, 2000);
  }, []);
  return (
    <div className="App">
      {data ? (
        <>
          <Navbar />
          <AllRoutes />
          <Footer />
        </>
      ) : (
        <>
          <CircularProgress className="circle" isIndeterminate color='green.300' />
          <h2>Loading...</h2>
        </>
      )}
    </div>
  );
}

export default App;
