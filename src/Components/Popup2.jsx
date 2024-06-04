import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// eslint-disable-next-line react/prop-types
const Popup2 = ({ setIsPopup2Close }) => {
  const handleToast = () => {
    toast.success("Successfully toastified from popup 2!", {
      position: "top-left",
      onClose: setIsPopup2Close,
    });
  };
  return (
    <>
      <div className="modal">
        <div className="modal-body">
          <div className="button-container">
            <button onClick={handleToast}>Toast</button>
            <button onClick={setIsPopup2Close}>Close popup 2</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Popup2;
