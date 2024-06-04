
// eslint-disable-next-line react/prop-types
const Modal = ({ openModal, modalComponent }) => {
  return <>{openModal && <div>{modalComponent}</div>}</>;
};

export default Modal;
