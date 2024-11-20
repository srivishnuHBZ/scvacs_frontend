import React, { useState, useEffect } from "react";
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
  Row,
} from "reactstrap";
import { InputGroup, InputGroupAddon, InputGroupText } from "reactstrap";
import "../assets/scss/ViewTimestamp.scss";
import { useSelector, useDispatch } from "react-redux";
import { getHistory, VehicleHistoryLoader } from "../store/actions/vehicleHistoryAction";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
 import { Spinner } from "reactstrap";
import { getPasses } from "../store/actions/vehiclePassesAction";
import moment from "moment";
import { getVehicle } from "../store/actions/vehicleAction";

function ViewTimestamp() {
  const [searchHistory, setSearchHistory] = useState("");
  const [history, setHistory] = useState([]);
  const dispatch = useDispatch();
  const { myVehiclePasses } = useSelector((state) => state.vehiclePasses);
  const { myVehicle, viewVehicleLoader } = useSelector((state) => state.c);
  const { vehicleHistory, vehicleHistoryLoader } = useSelector(
    (state) => state.vehicleHistory
  );

  useEffect(() => {
    dispatch(getHistory());
    dispatch(getPasses());
    dispatch(getVehicle())
  }, []);
  const Secs = 8000;

  useEffect(() => {
    const interval = setInterval(() => {
      dispatch(getHistory());
      dispatch(getPasses());
      dispatch(getVehicle())
    }, Secs);
    return () => clearInterval(interval);
  }, []);
  let tempHistory = vehicleHistory;
  if (myVehiclePasses.length > 0 && vehicleHistory.length > 0 && myVehicle.length > 0) {
    // let tempHistory = vehicleHistory;
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
      }
      if (tempobjvehicle !== undefined) {
        tempHistory[i].Confidence = tempobjvehicle.Confidence;
        // console.log(tempobjvehicle)
      }
      // setHistory(tempHistory)
      // console.log(tempobj)
    }
    // setHistory(tempHistory)
    // console.log(tempHistory)
  }
  // console.log(tempHistory)
  // tempHistory.reverse();
  let reversed;
  if (tempHistory.length > 0)
       reversed = [...tempHistory].reverse();

  // console.log(reversed, "sort");
  // console.log(tempHistory.reverse);
  return (
    <Row className="mt-4">
      <Col md={1}></Col>
      <Col md={10}>
        <Row>
          <InputGroup id="InputGroup_ViewTimeStamp" className="mx-auto">
            <Input
              // Style={{ backgroundColor: "white", color: "Black" }}
              placeholder="Search"
              value={searchHistory}
              onChange={(e) => setSearchHistory(e.target.value)}
            ></Input>
            <InputGroupAddon addonType="append">
              <InputGroupText>
                <i
                  id="search_icon"
                  className="fa fa-search"
                  aria-hidden="true"
                  // style={{ color: "#675cff", fontSize: 18 }}
                ></i>
              </InputGroupText>
            </InputGroupAddon>
          </InputGroup>
        </Row>

        <br />
        <Row>
          <Card className="mt-5 w-100 h-79 mt-13" id="Card_ViewTimestamp">
            <CardBody>
              <Row className="">
                <Col md={1}>
                  <span className="dot d-none d-lg-block d-md-block"></span>
                </Col>
                <Col>
                  <h3 className="text-center">List of Vehicles Entered</h3>
                </Col>
                <Col md={1}>
                  <span className="dot d-none d-lg-block d-md-block"></span>
                </Col>
              </Row>
              <Row>
                <Col md={1}></Col>
                <Col>
                  {tempHistory.length === 0 ? (
                    <Spinner
                      className="d-flex mx-auto align-item-center justify-content-center overflow-hidden"
                      size="md"
                      color="primary"
                    />
                  ) : (
                    <Table borderless>
                      <thead>
                        <tr>
                          <th>OWNER'S NAME</th>
                            <th>NUMBER PLATE</th>
                            <th>Confidence</th>
                          <th>Date & Time</th>
                          <th>PhoneNumber</th>
                        </tr>
                      </thead>

                      <tbody>
                        {reversed
                          .filter((temp) => {
                            if (searchHistory === "") {
                              return temp;
                            } else if (
                              temp.Plate_Number.toLowerCase().includes(
                                searchHistory.toLowerCase()
                              ) ||
                              temp.Stamp.toLowerCase().includes(
                                searchHistory.toLowerCase()
                              ) ||
                              temp?.valid_pass?.Owner_Name.toLowerCase().includes(
                                searchHistory.toLowerCase()
                              ) ||
                              temp?.valid_pass?.Phone_No.toLowerCase().includes(
                                searchHistory.toLowerCase()
                              )
                            ) {
                              return temp;
                            }
                          })

                          .map((item) => {
                            return (
                              <tr>
                                {item?.Owner_Name === undefined ? (
                                  <td>N/A</td>
                                ) : (
                                  <td>{item?.Owner_Name}</td>
                                )}
                                <td>{item.Plate_Number}</td>
                                {item?.Confidence === undefined ? (<td>N/A</td>) : (<td>{item?.Confidence}</td>)}
                                
                                <td>
                                  {moment(item.Stamp).format(
                                    "DD-MM-YYYY h:mm:ss"
                                  )}
                                </td>
                                {item?.Phone_No === undefined ? (
                                  <td>N/A</td>
                                ) : (
                                  <td>{item?.Phone_No}</td>
                                )}
                                {/* </td> */}
                              </tr>
                            );
                          })}
                        
                      </tbody>
                    </Table>
                  )}
                </Col>
                <Col md={1}></Col>
              </Row>
              <Row>
                <Col md={1}>
                  <span className="dot d-none d-lg-block d-md-block"></span>
                </Col>
                <Col></Col>
                <Col md={1}>
                  <span className="dot d-none d-lg-block d-md-block"></span>
                </Col>
              </Row>
            </CardBody>
          </Card>
        </Row>
      </Col>
    </Row>
  );
}

export default ViewTimestamp;
