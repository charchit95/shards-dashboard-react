import React from "react";
import {
  Button,
  Form,
  FormGroup,
  FormInput,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader
} from "shards-react";

const AddModal = ({ open, handleToggle, handleChange, handleAddMarquee, addData }) => {
  return (
    <Modal size="md" open={open} toggle={handleToggle}>
      <ModalHeader>Add</ModalHeader>
      <ModalBody>
        <Form>
          <FormGroup>
            <label htmlFor="feText">Text</label>
            <FormInput
              id="feText"
              type="text"
              placeholder="Text"
              name="text"
              value={addData.text}
              onChange={handleChange}
            />
          </FormGroup>
          <FormGroup>
            <label htmlFor="feLink">Link</label>
            <FormInput
              id="feLink"
              type="text"
              placeholder="Link"
              name="link"
              value={addData.link}
              onChange={handleChange}
            />
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
