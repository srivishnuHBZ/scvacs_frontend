import React, { useState } from "react";
import "../../src/assets/scss/index.scss";
// import "../assets/scss/index.css";
// import ManageVehicleDetails from "../components/ManageVehicleDetails";
import ManageVehicleDetails from "../components/ManageVehicleDetails";
// import { BrowserRouter as Router, Link } from "react-router-dom";
import ViewVehicleDetails from "../components/ViewVehicleDetails";
import ViewTimestamp from "../components/ViewTimestamp";
import UMS from "../assets/img/ums.png";


import {
  Container,
  MDBCol,
  MDBIcon,
  Row,
  Col,
  Table,
  Card,
  Nav,
  NavItem,
  NavLink,
  Form,
  FormInput,
  FormGroup,
  Label,
  Input,
  FormText,
  Button,
  CardBody,
  Navbar
} from "reactstrap";

const Dashboard = () => {
  const [tab, setTab] = useState("1");
  
  return (
    <>
      <Container fluid className="mt-10">
        <Row>
          <Col className="bg-none mt-50">
            <div className="d-flex ml-auto justify-content-between mt-4">
              <h3 id="text-main">
              <div className="navbar-brand">
                <img
                  src={UMS}
                  width="250"
                  height="100"
                  className="d-inline-block align-top"
                  alt="UMS"
                />
              </div>
              </h3>

              <h1 id="text-main2" style={{fontSize: "6vh"}}>
                <span className="text-primary"> SCVACS</span>
                <span className="text-danger"> DASHBOARD</span>
              </h1>
            </div>
          </Col>
        </Row>
        <Row className="d-flex ">
          <Col className="bg-none">
            <button
              className={tab === "1" ? "tabbutton-active" : "tabbutton"}
              onClick={() => setTab("1")}
            >
              View Vehicle Details{" "}
            </button>
          </Col>

          <Col className="bg-none">
            <button
              className={tab === "2" ? "tabbutton-active" : "tabbutton"}
              onClick={() => setTab("2")}
            >
              Manage Vehicle Details
            </button>
          </Col>
          <Col className="bg-none">
            <button
              className={tab === "3" ? "tabbutton-active" : "tabbutton"}
              onClick={() => setTab("3")}
            >
              View Timestamp
            </button>
          </Col>
        </Row>
        {tab === "1" ? <ViewVehicleDetails /> : ""}
        {tab === "2" ? <ManageVehicleDetails /> : ""}
        {tab === "3" ? <ViewTimestamp /> : ""}

        {/* <div>
          <input type="text" placeholder="search" />
          <i className="bi bi-search"></i>
        </div> 
        <br /> */}
        {/* <Card>
          <CardBody>
            <Form>
              <FormGroup row>
                <Label for="exampleText" sm={2}>
                  Name:
                </Label>
                <Col sm={10}>
                  <Input id="exampleText" name="text" type="text" />
                </Col>
              </FormGroup>
              <FormGroup row>
                <Label for="exampleText" sm={2}>
                  Name:
                </Label>
                <Col sm={10}>
                  <Input id="exampleText" name="text" type="text" />
                </Col>
              </FormGroup>
              <Button>Submit</Button>
            </Form>
          </CardBody>
        </Card> */}
        {/* <Table>
          <thead>
            <tr>
              <th>#</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Username</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>Jacob</td>
              <td>Thornton</td>
              <td>@fat</td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td>Larry</td>
              <td>the Bird</td>
              <td>@twitter</td>
            </tr>
          </tbody>
        </Table> */}
      </Container>
      {/* Form */}
    </>
  );
};

export default Dashboard;
