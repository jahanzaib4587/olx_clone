import { FiberPinRounded } from "@material-ui/icons";
import React from "react";
import Modal from "react-bootstrap/Modal";
import "./categories.css";
import { Container, Row, Col, Button } from "react-bootstrap";
function Categories(props) {
  return (
    // aria-labelledby="contained-modal-title-vcenter"
    <Modal {...props} aria-labelledby="contained-modal-title-vcenter" size="lg">
      <Modal.Body className="show-grid">
        <Row>
          <Col xs={6} md={3} lg={3}>
            <h6>Vehicles</h6>
            <a>Cars</a>
            <br></br>
            <a>Cars on Installments</a>
            <br></br>
            <a>Cars Accessories</a>
            <br></br>
            <a>Saare aarts</a>
            <br></br>
            <a>Buses, Vans & Trucks</a>
            <br></br>
            <a>Rickshaw & Chingchi</a>
            <br></br>
            <a>Other Vehicles</a>
            <br></br>
            <a>Boats</a>
            <br></br>
            <a>Tractors & Trailers</a>
            <br></br>
            <br></br>
            {/* Second */}

            <h6>Mobiles</h6>
            <a>Cars</a>
            <br></br>
            <a>Tablets</a>
            <br></br>
            <a>Cars Accessories</a>
            <br></br>
            <a>Accessories</a>
            <br></br>
            <a>Mobile Phones</a>

            <br></br>
            <br></br>

            {/* Third */}
            <h6> Electronics & Home Appliances</h6>
            <a>Computers & Accessories</a>
            <br></br>
            <a>TV - Video - Audio</a>
            <br></br>
            <a>Cameras & Accessories</a>
            <br></br>
            <a>Games & Entertainment</a>
            <br></br>
            <a>Other Home Appliances</a>
            <br></br>
            <a>Generators, UPS & Power Solutions</a>
            <br></br>
            <a>Kitchen Appliances</a>
            <br></br>
            <a>AC & Coolers</a>
            <br></br>
            <a>Fridges & Freezers</a>
            <a>Washing Machines & Dryers</a>
            <br></br>
            <br></br>
          </Col>
          <Col xs={6} md={4} lg={3}>
            <h6>Animals</h6>
            <a>Fish & Aquariums</a>
            <br></br>
            <a>Birds</a>
            <br></br>
            <a>Hens & Aseel</a>
            <br></br>
            <a>Cats</a>
            <br></br>
            <a>Dogs</a>
            <br></br>
            <a>Livestock</a>
            <br></br>
            <a>Horses</a>
            <br></br>
            <a>Pet Food & Accessories</a>
            <br></br>
            <a>Other Animals</a>
            <br></br>
            <br></br>

            <h6>Vehicles</h6>
            <a>Cars</a>
            <br></br>
            <a>Cars on Installments</a>
            <br></br>
            <a>Cars Accessories</a>
            <br></br>
            <a>Saare aarts</a>
            <br></br>
            <a>Buses, Vans & Trucks</a>
            <br></br>
            <a>Rickshaw & Chingchi</a>
            <br></br>
            <a>Other Vehicles</a>
            <br></br>
            <a>Boats</a>
            <br></br>
            <a>Tractors & Trailers</a>
            <br></br>
            <br></br>
            {/* Second */}
            <h6>Vehicles</h6>
            <a>Cars</a>
            <br></br>
            <a>Cars on Installments</a>
            <br></br>
            <a>Cars Accessories</a>
            <br></br>
            <a>Saare aarts</a>
            <br></br>
            <a>Buses, Vans & Trucks</a>
            <br></br>
            <a>Rickshaw & Chingchi</a>
            <br></br>
            <a>Other Vehicles</a>
            <br></br>
            <a>Boats</a>
            <br></br>
            <a>Tractors & Trailers</a>
            <br></br>
            <br></br>
          </Col>
          <Col xs={6} md={4} lg={3}>
            <h6> Fashion & Beauty</h6>
            <a> Accessories</a>
            <br></br>
            <a>Footwear</a>
            <br></br>
            <a>Jewellery</a>
            <br></br>
            <a>Make Up</a>
            <br></br>
            <a>Skin & Hair</a>
            <br></br>
            <a>Wedding</a>
            <br></br>
            <a>Lawn & Pret</a>
            <br></br>
            <a>Couture</a>
            <br></br>
            <a>Other Fashion</a>

            <br></br>
            <br></br>

            {/* Second */}
            <h6>Vehicles</h6>
            <a>Cars</a>
            <br></br>
            <a>Cars on Installments</a>
            <br></br>
            <a>Cars Accessories</a>
            <br></br>
            <a>Saare aarts</a>
            <br></br>
            <a>Buses, Vans & Trucks</a>
            <br></br>
            <a>Rickshaw & Chingchi</a>
            <br></br>
            <a>Other Vehicles</a>
            <br></br>
            <a>Boats</a>
            <br></br>
            <a>Tractors & Trailers</a>
            <br></br>
            <br></br>

            {/* Third */}
            <h6>Vehicles</h6>
            <a>Cars</a>
            <br></br>
            <a>Cars on Installments</a>
            <br></br>
            <a>Cars Accessories</a>
            <br></br>
            <a>Saare aarts</a>
            <br></br>
            <a>Buses, Vans & Trucks</a>
            <br></br>
            <a>Rickshaw & Chingchi</a>
            <br></br>
            <a>Other Vehicles</a>
            <br></br>
            <a>Boats</a>
            <br></br>
            <a>Tractors & Trailers</a>
            <br></br>
            <br></br>
          </Col>
          <Col xs={6} md={4} lg={3}>
            <h6>Services</h6>
            <a>Education & Classes</a>
            <br></br>
            <a>Travel & Visa</a>
            <br></br>
            <a>Drivers & Taxi</a>
            <br></br>
            <a>Web Development</a>
            <br></br>
            <a>Other Services</a>
            <br></br>
            <a>Movers & Packers</a>
            <br></br>
            <a>Home & Office Repair</a>
            <br></br>
            <a>Catering & Restaurant</a>
            <br></br>
            <a>Farm & Fresh Food</a>
            <br></br>
            <a>Electronics & Computer Repair</a>
            <br></br>
            <a>Event Services</a>
            <br></br>
            <a>Health & Beauty</a>
            <br></br>
            <a>Maids & Domestic Help</a>
            <br></br>
            <br></br>

            {/* Second */}
            <h6>Books</h6>
            <a>Sports & Hobbies</a>
            <br></br>
            <a>Books & Magazines</a>
            <br></br>
            <a>Musical Instruments</a>
            <br></br>
            <a>Sports Equipment</a>
            <br></br>
            <a>Gym & Fitness</a>
            <br></br>
            <a>Other Hobbies </a>
            <br></br>

            <br></br>

            {/* Third */}
            <h6>Vehicles</h6>
            <a>Cars</a>
            <br></br>
            <a>Cars on Installments</a>
            <br></br>
            <a>Cars Accessories</a>
            <br></br>
            <a>Saare aarts</a>
            <br></br>
            <a>Buses, Vans & Trucks</a>
            <br></br>
            <a>Rickshaw & Chingchi</a>
            <br></br>
            <a>Other Vehicles</a>
            <br></br>
            <a>Boats</a>
            <br></br>
            <a>Tractors & Trailers</a>
            <br></br>
            <br></br>
          </Col>
        </Row>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default Categories;
