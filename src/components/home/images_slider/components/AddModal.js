import React from "react";
import {
  Button,
  Form,
  FormGroup,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader
} from "shards-react";

const AddModal = ({ open, handleToggle, handleChange, handleAddMarquee, isFilePicked, selectedFile }) => {
  return (
    <Modal size="md" open={open} toggle={handleToggle}>
      <ModalHeader>Add</ModalHeader>
      <ModalBody>
        <Form>
          <FormGroup>
            <label htmlFor="feLink">Image</label>
            <div className="custom-file mb-3">
              <input type="file" className="custom-file-input" id="feLink" onChange={handleChange} />
              <label className="custom-file-label" htmlFor="feLink" >
                Choose file...
              </label>
            </div>
            {isFilePicked && (
              <img src={selectedFile} alt="selected-file" />
            )}
          </FormGroup>
        </Form>
      </ModalBody>
      <ModalFooter>
        <Button type="submit" onClick={handleAddMarquee}>
          Add
        </Button>
        <Button type="button" theme="danger" onClick={handleToggle}>
          Close
        </Button>
      </ModalFooter>
    </Modal>
  );
};

export default AddModal;
