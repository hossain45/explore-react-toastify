import "./App.css";
import { useState } from "react";
import Modal from "./Componenets/Modal/Modal";
import Popup1 from "./Componenets/ReactToastify/Popup1";
import { Slide, ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [isPopup1Open, setIsPopup1Open] = useState(false);

  const setIsPopup1Close = () => {
    setIsPopup1Open(false);
  };
  const handleToast = () => {
    toast.success("Successfully toastified!", {
      position: "top-right", // overriding ToastContainer configuration
    });
  };

  return (
    <>
      <ToastContainer
        position="top-center"
        autoClose={1500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
        transition={Slide}
      />
      <div className="App">
        <h1>Welcome to WebCraft With Hossain</h1>
        <div className="container">
          <h2>Let&#39;s Explore State management in REACT</h2>
          <h3>We will use useState then useReducer then REDUX</h3>
          <div className="centered-flex-box">
            <button className="primary-btn text-counter">-</button>
            <p className="text-counter">0</p>
            <button className="primary-btn text-counter">+</button>
          </div>
          <button className="primary-btn">Reset</button>
        </div>
        <div className="container">
          <h2>Explore REACT TOASTIFY</h2>
          <div className="button-container">
            <button className="primary-btn" onClick={handleToast}>
              Toast
            </button>
            <button
              className="primary-btn"
              onClick={() => setIsPopup1Open(!isPopup1Open)}
            >
              Popup 1
            </button>
          </div>
          <p>Trying out different types of toasts</p>
          <div className="button-container">
            <button
              className="primary-btn"
              onClick={() => toast("Wow so easy !")}
            >
              Toast
            </button>
            <button
              className="primary-btn"
              onClick={() => toast.info("Wow so easy !")}
            >
              Info
            </button>
            <button
              className="primary-btn"
              onClick={() => toast.warn("Wow so easy !")}
            >
              Warn
            </button>
            <button
              className="primary-btn"
              onClick={() => toast.success("Wow so easy !")}
            >
              Success
            </button>
            <button
              className="primary-btn"
              onClick={() => toast.error("Wow so easy !")}
            >
              Error
            </button>
          </div>
        </div>
      </div>
      <Modal
        openModal={isPopup1Open}
        modalComponent={<Popup1 setIsPopup1Close={setIsPopup1Close} />}
      />
    </>
  );
}

export default App;
