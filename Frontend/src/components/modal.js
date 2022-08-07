import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Map from "./Map";
class Example extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <>
        <Modal
          show={this.props.show}
          onHide={() => this.props.setShow(false)}
          dialogClassName="modal-90w"
          fullscreen={true}
          aria-labelledby="example-custom-modal-styling-title"
        >
          <Modal.Header closeButton>
            <Modal.Title id="example-custom-modal-styling-title">
              {this.props.isEmpty ? (
                <h1>No Animal Found With This Name</h1>
              ) : (
                this.props.animalName
              )}
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {!this.props.isEmpty && (
              <Map AnimalList={this.props.AnimalLocation} />
            )}
          </Modal.Body>
        </Modal>
      </>
    );
  }
}

export default Example;
