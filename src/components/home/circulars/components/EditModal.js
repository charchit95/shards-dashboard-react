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

const EditModal = ({ open, handleToggle, marqueeData, handleChange, handleEditMarquee }) => {
  return (
    <Modal size="md" open={open} toggle={handleToggle}>
      <ModalHeader>Edit</ModalHeader>
      <ModalBody>
        <Form>
          <FormGroup>
            <label htmlFor="feText">Text</label>
            <FormInput
              id="feText"
              type="text"
              placeholder="Text"
              name="text"
              value={marqueeData.text}
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
              value={marqueeData.link}
              onChange={handleChange}
            />
          </FormGroup>
        </Form>
      </ModalBody>
      <ModalFooter>
        <Button type="submit" onClick={handleEditMarquee}>
          Edit
        </Button>
        <Button type="button" theme="danger" onClick={handleToggle}>
          Close
        </Button>
      </ModalFooter>
    </Modal>
  );
};

export default EditModal;
