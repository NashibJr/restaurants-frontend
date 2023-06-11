import React from "react";
import Alert from "../components/alert.js";
import Button from "../components/button.js";
import Modal from "./modal.js";

const DeleteModal = ({ onDeleteRestaurant, message }) => {
  return (
    <Modal title="Comfirm delete" modalId="deleteRestaurantModal">
      {message ? (
        <Alert message={message} />
      ) : (
        <div>
          <p data-testid="delete">Are you sure you want to delete?</p>
          <div className="d-flex">
            <button
              type="button"
              data-bs-dismiss="modal"
              aria-label="Close"
              className="btn btn-secondary w-100"
            >
              Cancel
            </button>
            <span className="m-1"></span>
            <Button label="Yes" onClickEvent={onDeleteRestaurant} />
          </div>
        </div>
      )}
    </Modal>
  );
};

export default DeleteModal;
