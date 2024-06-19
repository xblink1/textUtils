import "./App.css";
import Navbar from "./component/Navbar";
import TextForm from "./component/TextForm";
// import About from "./component/About";
import { useState } from "react";
import Alert from "./component/Alert";

// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Routes,
//   Link
// } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const  showAlert = ( message, type )=> {
    setAlert({
      msg:message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
  }, 1500);
  }


  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#2a2c2c";
      showAlert("Dark mode has been enabled", "warning");

      document.title = "TextUtils - Dark Mode";
    } 
    else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enabled", "success")

      document.title = "TextUtils - light Mode";
    }
  };
  return (
    <>
    {/* <Router> */}
      <Navbar mode={mode} toggleMode={toggleMode} aboutText="About" />
      <Alert alert={alert} />
      <div className="container">
        {/* <Routes>
          <Route exact path="/about" element={<About />} />
          <Route exact
            path="/" 
            element={ */}
              <TextForm
                showAlert={showAlert}
                title="Enter the text to analyze"
                mode={mode}
              />
            {/* } 
          />
        </Routes> */}
        {/* <About /> */}
      </div>
    {/* </Router> */}
    </>
  );
}

export default App;

// import "./App.css";
// import TextForm from "./component/TextForm.js";
// import Navbar from "./component/Navbar.js";

// function App() {

//   return (
//     <>
//       <Navbar logo="Joker" />
//       <TextForm />
//     </>
//   );
// }

// export default App;
