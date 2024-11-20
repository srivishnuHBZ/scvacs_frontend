import React, { useEffect, useState } from "react";
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
import "../assets/scss/ManageVehicleDetails.scss";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  Modal,
  ModalBody,
} from "reactstrap";
import { useSelector, useDispatch } from "react-redux";

import {
  getPasses,
  createPasses,
  updatePasses,
  deletePasses,
  getDeleteLoader,
  getEditLoader,
  myGetLoader
} from "../store/actions/vehiclePassesAction";
import { Spinner } from "reactstrap";

const ManageVehicleDetails = () => {
  const dispatch = useDispatch();
  // const [vehicle, setVehicle] = useState();
  const [NumberPlate, setNumberPlate] = useState("");
  const [ownerName, setOwnerName] = useState("");
  const [address, setAddress] = useState("");
  const [studentId, setStudentId] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [isEdit, setIsEdit] = useState(null);
  const [ModalVisible, setModalVisible] = useState(false);
  const [modalData, setModalData] = useState({});
  const [NumberPlateModal, setNumberPlateModal] = useState("");
  const [OwnerNameModal, setOwnerNameModal] = useState("");
  const [studentIdModal, setStudentIdModal] = useState("");
  const [addressModal, setAddressModal] = useState("");
  const [editId, setEditId] = useState("");
  const [PhoneNumberModal, setPhoneNumberModal] = useState("");
  const [value, setValue] = useState("");
  const [search, setSearch] = useState("");
  const [validId, setvalidId] = useState('');

  const {
    myVehiclePasses,
    myLoaderEdit,
    myLoaderDelete,
    myAddLoader,
    myLoaderUpdate,
    getLoader,
  } = useSelector((state) => state.vehiclePasses);
  // console.log(myLoaderEdit, "MyLoaderEdit");

  useEffect(() => { //call first time without delay
    dispatch(getPasses());
  }, []);
const Secs = 8000;

useEffect(() => {
  const interval = setInterval(() => {
    dispatch(getPasses());
  }, Secs);

  return () => clearInterval(interval); // This represents the unmount function, in which you need to clear your interval to prevent memory leaks.
}, [])

  function handleSubmit(e) {
    e.preventDefault();
    let obj = {
      License_Plate_Number: NumberPlate,
      Owner_Name: ownerName,
      Address_No: address,
      Student_ID: studentId,
      Phone_No: phoneNumber,
    };
    dispatch(
      createPasses(obj)
    );
    setNumberPlate('');
    setOwnerName('');
    setAddress('');
    setStudentId('');
    setModalVisible('');
    setPhoneNumber('');

  }

  //Edit
  const onEditHandler = (item) => {
    setEditId(item.Pass_Number);
    setModalVisible(true);
    setNumberPlateModal(item.License_Plate_Number);
    setOwnerNameModal(item.Owner_Name);
    setAddressModal(item.Address_No);
    setStudentIdModal(item.Student_ID);
    setPhoneNumberModal(item.Phone_No);
  };

  // Modal
  const handleModalVisible = () => {
    setModalVisible(!ModalVisible);
  };

  // On Close Handler
  const onModalCloseHandler = () => {
    setNumberPlate('');
    setOwnerName('');
    setAddress('');
    setStudentId('');
    setModalVisible(false);
  };

  // OnHandleUpdate
  const handleUpdate = (e) => {
    e.preventDefault();
    let update = {
      License_Plate_Number: NumberPlateModal,
      Owner_Name: OwnerNameModal,
      Address_No: addressModal,
      Student_ID: studentIdModal,
      Phone_No: PhoneNumberModal,
    };

    dispatch(updatePasses(update, editId, () => {
          setNumberPlate("");
          setOwnerName("");
          setAddress("");
          setStudentId("");
          setModalVisible(false);
    }));
    
  };

  const onHandleDelete = (item) => {
    setvalidId(item.Pass_Number);
    dispatch(deletePasses(item.Pass_Number));
  };

  return (
    <>
      <Row className="mt-5">
        <Col md={5} sm={12} className="">
          <Card className="w-40 bg-none" id="ManageVehicleDetailsCard1">
            <h3 className="text-center">Add New Vehicle</h3>
            <CardBody className="w-40">
              <Form onSubmit={handleSubmit}>
                <FormGroup row>
                  <Label for="NumberPlate" sm={6}>
                    Vehicle Number Plate:
                  </Label>
                  <Col sm={5}>
                    <Input
                      id="NumberPlate"
                      name="text"
                      type="text"
                      value={NumberPlate}
                      onChange={(e) => setNumberPlate(e.target.value)}
                      required
                    />
                  </Col>
                </FormGroup>
                <FormGroup row>
                  <Label for="ownerName" sm={6}>
                    Owner's Name:
                  </Label>
                  <Col sm={5}>
                    <Input
                      id="ownerName"
                      name="text"
                      type="text"
                      value={ownerName}
                      onChange={(e) => setOwnerName(e.target.value)}
                      required
                    />
                  </Col>
                </FormGroup>
                <FormGroup row>
                  <Label for="student" sm={6}>
                    Student/Staff ID
                  </Label>
                  <Col sm={5}>
                    <Input
                      id="student"
                      name="text"
                      type="text"
                      value={studentId}
                      onChange={(e) => setStudentId(e.target.value)}
                      required
                    />
                  </Col>
                </FormGroup>
                <FormGroup row>
                  <Label for="address" sm={6}>
                    Address/Block No
                  </Label>
                  <Col sm={5}>
                    <Input
                      id="address"
                      name="text"
                      type="text"
                      value={address}
                      onChange={(e) => setAddress(e.target.value)}
                      required
                    />
                  </Col>
                </FormGroup>
                <FormGroup row>
                  <Label for="PhoneNo" sm={6}>
                    Phone No
                  </Label>
                  <Col sm={5}>
                    <Input
                      id="PhoneNo"
                      name="text"
                      type="text"
                      value={phoneNumber}
                      onChange={(e) => setPhoneNumber(e.target.value)}
                      required
                    />
                  </Col>
                </FormGroup>
                <Row>
                  <Col md={3}></Col>
                  <Col md={6}>
                    <Button
                      id="Add_Button"
                      className="btn btn-success text-center"
                      type="submit"
                    >
                      {myAddLoader ? (
                        <Spinner
                          className="d-flex mx-auto align-items-center justify-content-center overflow-hidden"
                          size="sm"
                          color="white"
                        />
                      ) : (
                        "ADD"
                      )}
                    </Button>
                  </Col>
                </Row>
              </Form>
            </CardBody>
          </Card>
        </Col>
        {/* Table Card */}

        <Col md={6} sm={12} className="">
          <br></br>
          <Row className="">
            <Col sm={3}></Col>
            <Col sm={6}>
              <InputGroup id="InputGroup">
                <Input
                  // Style={{ backgroundColor: "white", color: "Black" }}
                  placeholder="Search"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
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
            </Col>
            <Col></Col>
          </Row>

          {/* Cards */}
          <Row>
            <Col>
              <Card
                className="mt-5 w-77 bg-none h-79 mt-13"
                id="ManageVehicleDetailsCard2"
              >
                <CardBody id="CardBody">
                  {myVehiclePasses.length===0 ? (
                    <Spinner
                      className="d-flex mx-auto align-item-center justify-content-center overflow-hidden"
                      size="md"
                      color="primary"
                    />
                  ) : (
                    <Table borderless id="Table">
                      <thead>
                        <tr>
                          <th>OWNER'S NAME</th>
                          <th>NUMBER PLATE</th>
                          <th>EDIT/REMOVE</th>
                        </tr>
                      </thead>
                      <tbody>
                        {myVehiclePasses
                          .filter((temp) => {
                            if (search === "") {
                              return temp;
                            } else if (
                              temp.Owner_Name.toLowerCase().includes(
                                search.toLowerCase()
                              ) ||
                              temp.License_Plate_Number.toLowerCase().includes(
                                search.toLowerCase()
                              )
                            ) {
                              return temp;
                            }
                          })

                          .map((item) => {
                            return (
                              <tr>
                                <td>{item.Owner_Name}</td>
                                <td>{item.License_Plate_Number}</td>
                                <td>
                                  <button
                                    id="table_Edit_Button"
                                    value={isEdit}
                                    onClick={() => onEditHandler(item)}
                                  >
                                    {myLoaderEdit ? (
                                      <Spinner
                                        // className="d-flex mx-auto mt-5 align-items-center justify-content-center overflow-hidden"
                                        size="sm"
                                        color="primary"
                                      />
                                    ) : (
                                      "Edit"
                                    )}
                                  </button>

                                  <button
                                    id="table_Delete_Button"
                                    onClick={() => onHandleDelete(item)}
                                  >
                                    {validId == item.Pass_Number &&
                                    myLoaderDelete ? (
                                      <Spinner
                                        className="d-flex mx-auto align-items-center justify-content-center overflow-hidden"
                                        size="sm"
                                        color="white"
                                      />
                                    ) : (
                                      " Delete"
                                    )}
                                  </button>
                                </td>
                              </tr>
                            );
                          })}
                      </tbody>
                    </Table>
                  )}
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Col>
      </Row>

      <Modal
        isOpen={ModalVisible}
        onRequestClose={onModalCloseHandler}
        toggle={handleModalVisible}
        centered
      >
        <ModalBody>
          <Row className="justify-content-end align-items-end mr-3">
            <Button
              // id="Add_Button"
              className="btn btn-success text-center float-right"
              type="submit"
              onClick={onModalCloseHandler}
            >
              X
            </Button>
          </Row>
          <br />
          <Form onSubmit={handleUpdate}>
            <FormGroup row>
              <Label for="NumberPlate" sm={6}>
                Vehicle Number Plate:
              </Label>

              <Col sm={5}>
                <Input
                  id="NumberPlate"
                  name="text"
                  type="text"
                  value={NumberPlateModal}
                  onChange={(e) => setNumberPlateModal(e.target.value)}
                  required
                />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label for="ownerName" sm={6}>
                Owner's Name:
              </Label>
              <Col sm={5}>
                <Input
                  id="ownerName"
                  name="text"
                  type="text"
                  value={OwnerNameModal}
                  onChange={(e) => setOwnerNameModal(e.target.value)}
                  required
                />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label for="student" sm={6}>
                Student/Staff ID
              </Label>
              <Col sm={5}>
                <Input
                  id="student"
                  name="text"
                  type="text"
                  value={studentIdModal}
                  onChange={(e) => setStudentIdModal(e.target.value)}
                  required
                />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label for="address" sm={6}>
                Address/Block No
              </Label>

              <Col sm={5}>
                <Input
                  id="address"
                  name="text"
                  type="text"
                  value={addressModal}
                  onChange={(e) => setAddressModal(e.target.value)}
                  required
                />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label for="PhoneNo" sm={6}>
                Phone No
              </Label>

              <Col sm={5}>
                <Input
                  id="PhoneNo"
                  name="text"
                  type="text"
                  value={PhoneNumberModal}
                  onChange={(e) => setPhoneNumberModal(e.target.value)}
                  required
                />
              </Col>
            </FormGroup>

            <Button id="" className="btn btn-success text-center" type="submit">
              {myLoaderUpdate ? (
                <Spinner
                  className="d-flex mx-auto align-items-center justify-content-center overflow-hidden"
                  size="sm"
                  color="white"
                />
              ) : (
                "UPDATE"
              )}
            </Button>
          </Form>
        </ModalBody>
      </Modal>
    </>
  );
};

export default ManageVehicleDetails;
