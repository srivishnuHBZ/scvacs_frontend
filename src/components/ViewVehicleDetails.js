import React, { useEffect } from "react";
import {
  Card,
  Form,
  FormGroup,
  Label,
  CardBody,
  Col,
  Input,
  Button,
  Table,
  Row
} from "reactstrap";
import "../assets/scss/ViewVehicleDetails.scss";
import { useSelector, useDispatch } from "react-redux";
import { getVehicle, ViewVehicleLoader } from "../store/actions/vehicleAction";
import { getPasses } from "../store/actions/vehiclePassesAction";
import { Spinner } from "reactstrap";
import Denied from "../assets/img/denied.gif";
import Approved from "../assets/img/approved.gif";
import { getHistory } from "../store/actions/vehicleHistoryAction";


const ViewVehicleDetails = () => {
  const dispatch = useDispatch();

  const { myVehicle, viewVehicleLoader } = useSelector((state) => state.c);
  const { myVehiclePasses } = useSelector((state) => state.vehiclePasses);
  const { vehicleHistory, vehicleHistoryLoader } = useSelector(
    (state) => state.vehicleHistory
  );

  useEffect(() => {
    dispatch(getHistory());
    dispatch(getVehicle());
    dispatch(getPasses());
  }, []);

  const Secs = 4000;

  useEffect(() => {
    const interval = setInterval(() => {
      dispatch(getPasses());
      dispatch(getHistory());
      dispatch(getVehicle());
    }, Secs);

    return () => clearInterval(interval);
  }, [])



  //  var lengthOfLastIndex = myVehiclePasses[myVehiclePasses.length - 1];
  // var LastIndexOfmyVehicle = myVehicle[myVehicle.length - 1];
  // var LastIndexOfHistory = vehicleHistory[vehicleHistory.length - 1];

  let tempHistory = vehicleHistory
  if (myVehicle.length > 0 && vehicleHistory.length > 0 && vehicleHistory.length > 0) {

    for (let i = 0; i < vehicleHistory.length; i++) {
      let tempobj = myVehiclePasses.find(
        (x) => x.License_Plate_Number === vehicleHistory[i].Plate_Number
      );
      let tempobjvehicle = myVehicle.find(
        (x) => x.License_Plate_Number === vehicleHistory[i].Plate_Number
      );
      if (tempobj !== undefined) {
        tempHistory[i].Owner_Name = tempobj.Owner_Name;
        tempHistory[i].Phone_No = tempobj.Phone_No;
        tempHistory[i].Student_ID = tempobj.Student_ID;
        tempHistory[i].Address_No = tempobj.Address_No;
      }
      if (tempobjvehicle !== undefined) {
        tempHistory[i].Confidence = tempobjvehicle.Confidence;

      }

    }

  }

  let LastIndexOftempHistory = tempHistory[tempHistory.length - 1];
  // console.log(LastIndexOftempHistory, "History");

  return (
    <>
      <Row>
        <Col sm={12} md={5} className="">
          {LastIndexOftempHistory?.Owner_Name == undefined ? (
            <h3 className="pt-50 bg-none text-center mx-auto images_h3">
              <img
                src={Denied}
                className="d-inline-block mx-auto"
                width="250"
                height="300"
                alt="Denied"
              />
            </h3>
          ) : (
            <h3 className="pt-50 bg-none text-center mx-auto images_h3">
              <img
                src={Approved}
                className="d-inline-block mx-auto"
                alt="Approved"
              />
            </h3>
          )}
        </Col>
        <Col sm={12} md={6}>
          <Card className="mt-5   h-79 mt-13" id="Card_viewVehicalDetails">
            <CardBody className="w-99">
              <h3 className="text-center">Vehicle Details</h3>
              <Form>
                {tempHistory.length === 0 ? (
                  <Spinner
                    className="d-flex mx-auto mt-5 align-items-center justify-content-center overflow-hidden"
                    size="sm"
                    color="primary"
                  />
                ) : (
                  <>
                    <FormGroup row>
                      <Label for="exampleText" sm={3}>
                        Number Plate:
                      </Label>
                      <Col sm={8}>
                        <Input
                          id="exampleText"
                          name="text"
                          type="text"
                          value={LastIndexOftempHistory.Plate_Number}
                        />
                      </Col>
                    </FormGroup>
                    <FormGroup row>
                      <Label for="exampleText" sm={3}>
                        Owner's Name:
                      </Label>
                      <Col sm={8}>
                        <Input
                          id="exampleText"
                          name="text"
                          type="text"
                          value={
                            LastIndexOftempHistory?.Owner_Name === undefined
                              ? "N/A"
                              : LastIndexOftempHistory?.Owner_Name
                          }
                        />
                      </Col>
                    </FormGroup>
                    <FormGroup row>
                      <Label for="exampleText" sm={3}>
                        Student/Staff ID
                      </Label>
                      <Col sm={8}>
                        <Input
                          id="exampleText"
                          name="text"
                          type="text"
                          value={
                            LastIndexOftempHistory?.Student_ID === undefined
                              ? "N/A"
                              : LastIndexOftempHistory?.Student_ID
                          }
                        />
                      </Col>
                    </FormGroup>
                    <FormGroup row>
                      <Label for="exampleText" sm={3}>
                        Address/Block No
                      </Label>
                      <Col sm={8}>
                        <Input
                          id="exampleText"
                          name="text"
                          type="text"
                          value={
                            LastIndexOftempHistory?.Address_No === undefined
                              ? "N/A"
                              : LastIndexOftempHistory?.Address_No
                          }
                        />
                      </Col>
                    </FormGroup>
                    <FormGroup row>
                      <Label for="exampleText" sm={3}>
                        Phone Number
                      </Label>
                      <Col sm={8}>
                        <Input
                          id="exampleText"
                          name="text"
                          type="text"
                          value={
                            LastIndexOftempHistory?.Phone_No === undefined
                              ? "N/A"
                              : LastIndexOftempHistory?.Phone_No
                          }
                        />
                      </Col>
                    </FormGroup>
                    <FormGroup row>
                      <Label for="exampleText" sm={3}>
                        Confidence
                      </Label>
                      <Col sm={8}>
                        <Input
                          id="exampleText"
                          name="text"
                          type="text"
                          value={
                            LastIndexOftempHistory?.Confidence == undefined
                              ? "N/A"
                              : LastIndexOftempHistory?.Confidence
                          }
                        />
                      </Col>
                    </FormGroup>
                  </>
                )}
              </Form>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default ViewVehicleDetails;
