/* eslint-disable react/prop-types */

const Modal = ({ openModal, modalComponent }) => {
  return <>{openModal && <div>{modalComponent}</div>}</>;
};

export default Modal;
