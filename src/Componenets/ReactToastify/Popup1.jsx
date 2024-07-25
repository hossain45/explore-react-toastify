import { Slide, ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Modal from "./../Modal/Modal";
import Popup2 from "./Popup2";
import { useState } from "react";

// eslint-disable-next-line react/prop-types
const Popup1 = ({ setIsPopup1Close }) => {
   const [isPopup2Open, setIsPopup2Open] = useState(false);

   const setIsPopup2Close = () => {
     setIsPopup2Open(false);
   };
  const handleToast = () => {
    toast.success("Successfully toastified from popup 1!", {
      position: "bottom-right", // overriding ToastContainer configuration
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
      <div className="modal">
        <div className="modal-body">
          <div className="button-container">
            <button onClick={() => setIsPopup2Open(!isPopup2Open)}>
              open popup 2
            </button>
            <button onClick={handleToast}>Toast</button>
            <button onClick={setIsPopup1Close}>Close popup 1</button>
          </div>
        </div>
      </div>
      <Modal
        openModal={isPopup2Open}
        modalComponent={<Popup2 setIsPopup2Close={setIsPopup2Close} />}
      />
    </>
  );
};

export default Popup1;
