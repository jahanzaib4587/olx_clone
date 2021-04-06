import { FiberPinRounded } from "@material-ui/icons";
import React from "react";
import Modal from "react-bootstrap/Modal";
import "./categories.css";
import { Container, Row, Col, Button } from "react-bootstrap";
import Category_Component from "./Category_Component";
function Categories(props) {
  const a = [1, 2, 3, 4, 5, 6, 7, 8];
  const val = a.map((v) => {
    return <Category_Component title={v}></Category_Component>;

    console.log(v);
  });
  return (
    // aria-labelledby="contained-modal-title-vcenter"
    <Modal {...props} aria-labelledby="contained-modal-title-vcenter" size="lg">
      <Modal.Body className="show-grid">
        <Row>{val}</Row>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default Categories;
