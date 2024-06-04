import { Slide, ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import { useState } from "react";
import Modal from "./Components/Modal";
import Popup1 from "./Components/Popup1";

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
        <h2>Let&#39;s Explore REACT TOASTIFY</h2>
        <div className="button-container">
          <button onClick={handleToast}>Toast</button>
          <button onClick={() => setIsPopup1Open(!isPopup1Open)}>
            Popup 1
          </button>
        </div>
        <div>
          <p>Trying out different types of toasts</p>
          <div className="button-container">
            <button onClick={() => toast("Wow so easy !")}>Toast</button>
            <button onClick={() => toast.info("Wow so easy !")}>Info</button>
            <button onClick={() => toast.warn("Wow so easy !")}>Warn</button>
            <button onClick={() => toast.success("Wow so easy !")}>
              Success
            </button>
            <button onClick={() => toast.error("Wow so easy !")}>Error</button>
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
