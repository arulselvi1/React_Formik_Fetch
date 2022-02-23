import { useState, useEffect } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { useParams } from "react-router-dom";
import * as React from "react";
import { useFormik } from "formik";
import { employeeValidationSchema } from "./Createemployee";
import {
  Card,
  CardBody,
  CardFooter,
  Col,
  Container,
  InputGroup,
  Row,
} from "reactstrap";

const API = "https://620a625f92946600171c59ee.mockapi.io";
export function Editemployee() {
  const { empid } = useParams();

  const [employee, setEmployee] = useState(null);
  useEffect(() => {
    fetch(`${API}/employee/${empid}`, {
      method: "GET",
    }) //promise
      .then((data) => data.json()) //Response Object
      .then((mvs) => setEmployee(mvs))
      .catch((err) => console.log(err));
  }, [empid]);
  console.log(employee);
  return (
    <div>{employee ? <Save employee={employee} /> : <h2>Loading</h2>}</div>
  );
}

function Save({ employee }) {
  const history = useHistory();
  const formik = useFormik({
    initialValues: {
      name: employee.name,
      empid: employee.empid,
      age: employee.age,
      address: employee.address,
      department: employee.department,
    },
    validationSchema: employeeValidationSchema,
    onSubmit: (editedDetail) => {
      // console.log("onSubmit", values);
      editEmployee(editedDetail);
    },
  });

  const editEmployee = (editedDetail) => {
    console.log("onSubmit", editedDetail);

    // const editMovie = () => {
    //   const editedMovie = {
    //     name: movieName,
    //     profile: moviePoster,
    //     rating: movieRating,
    //     description: movieDes,
    //     trailer: movieTrailer,
    //   };

    fetch(`${API}/employee/${employee.empid}`, {
      method: "PUT",
      body: JSON.stringify(editedDetail),
      headers: {
        "content-type": "application/json",
      },
    }).then(() => history.push(`/employee`));
  };

  console.log(employee);
  return (
    <div className="app flex-row align-items-center">
      <Container>
        <Row className="justify-content-center">
          <Col md="12" lg="10" xl="8">
            <Card className="mx-4">
              <CardBody className="p-4">
                <form onSubmit={formik.handleSubmit}>
                  <h1>Update Employee</h1>
                  <InputGroup className="mb-4"></InputGroup>
                  <TextField
                    onChange={formik.handleChange}
                    id="empid"
                    name="empid"
                    value={formik.values.empid}
                    onBlur={formik.handleBlur}
                    label="Employee ID"
                    variant="outlined"
                    error={formik.touched.empid && formik.errors.empid}
                    helperText={
                      formik.touched.empid && formik.errors.empid
                        ? formik.errors.empid
                        : ""
                    }
                  />

                  <InputGroup className="mb-4"></InputGroup>
                  <TextField
                    onChange={formik.handleChange}
                    id="name"
                    name="name"
                    value={formik.values.name}
                    onBlur={formik.handleBlur}
                    label="Employee Name"
                    variant="outlined"
                    error={formik.touched.name && formik.errors.name}
                    helperText={
                      formik.touched.name && formik.errors.name
                        ? formik.errors.name
                        : ""
                    }
                  />
                  <InputGroup className="mb-4"></InputGroup>
                  <TextField
                    type="number"
                    onChange={formik.handleChange}
                    id="age"
                    name="age"
                    value={formik.values.age}
                    onBlur={formik.handleBlur}
                    label="Employee Age"
                    variant="outlined"
                    error={formik.touched.age && formik.errors.age}
                    helperText={
                      formik.touched.age && formik.errors.age
                        ? formik.errors.age
                        : ""
                    }
                  />
                  <InputGroup className="mb-4"></InputGroup>
                  <TextField
                    onChange={formik.handleChange}
                    id="address"
                    name="address"
                    value={formik.values.address}
                    onBlur={formik.handleBlur}
                    label="Employee address"
                    variant="outlined"
                    error={formik.touched.address && formik.errors.address}
                    helperText={
                      formik.touched.address && formik.errors.address
                        ? formik.errors.address
                        : ""
                    }
                  />
                  <InputGroup className="mb-4"></InputGroup>
                  <TextField
                    onChange={formik.handleChange}
                    id="department"
                    name="department"
                    value={formik.values.department}
                    onBlur={formik.handleBlur}
                    label="Employee Department"
                    variant="outlined"
                    error={
                      formik.touched.department && formik.errors.department
                    }
                    helperText={
                      formik.touched.department && formik.errors.department
                        ? formik.errors.department
                        : ""
                    }
                  />
                  <br />
                  <CardFooter className="p-4">
                    <br />
                    <Row>
                      <Col xs="12" sm="6">
                        <Button
                          type="submit"
                          variant="contained"
                          className="btn btn-info mb-1"
                          color="success"
                        >
                          Save
                        </Button>
                      </Col>
                      <br />
                      <Col xs="12" sm="6">
                        <Button
                          type="submit"
                          variant="contained"
                          className="btn btn-info mb-1"
                          color="error"
                        >
                          Cancel
                        </Button>
                        <br />
                      </Col>
                    </Row>
                  </CardFooter>
                </form>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
