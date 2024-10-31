import { Modal, ModalBody, ModalHeader } from "reactstrap";
import "./ViewClientProfileModal.css";
const ViewClientProfileModal = ({ modal, closeModal, profile }) => {
  return (
    <Modal isOpen={modal} toggle={closeModal} centered>
      <ModalHeader toggle={closeModal}>Client Profile</ModalHeader>
      <ModalBody>
        <div className="information">
          <img className="avatar" src={profile.avatar} alt={profile.name} />
          <span className="name">{profile.name}</span>
          <span className="address">Address: {profile.address}</span>
          <span className="phone">Phone: {profile.phoneNumber}</span>
        </div>
      </ModalBody>
    </Modal>
  );
};

export default ViewClientProfileModal;
