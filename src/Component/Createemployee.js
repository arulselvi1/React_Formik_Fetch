import React from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import {
  Card,
  CardBody,
  CardFooter,
  Col,
  Container,
  InputGroup,
  Row,
} from "reactstrap";

import { useFormik } from "formik";
import * as yup from "yup";

const API = "https://620a625f92946600171c59ee.mockapi.io";

export const employeeValidationSchema = yup.object({
  name: yup.string().required("Fill the name blank").min(3),
  // empid: yup
  //   .string()
  //   .required("Fill the employee id")
  //   .min(3, "Need a longer ID"),
  age: yup.number().required("Fill the age").min(20).max(100),
  address: yup.string().required("Fill the address").min(10),
  department: yup.string().required("Fill the department").min(2),
});

export function Createemployee() {
  const formik = useFormik({
    initialValues: {
      // empid: "",
      name: "",
      age: "",
      address: "",
      department: "",
    },
    validationSchema: employeeValidationSchema,
    onSubmit: (newEmp) => {
      // console.log("onSubmit", values);
      Insertemployee(newEmp);
    },
  });

  const history = useHistory();

  const Insertemployee = (newEmp) => {
    console.log("onSubmit", newEmp);

    fetch(`${API}/employee/`, {
      method: "POST",
      body: JSON.stringify(newEmp),
      headers: {
        "Content-Type": "application/json",
      },
    }).then(() => history.push("/employee"));
  };

  return (
    <div className="app flex-row align-items-center">
      <Container>
        <Row className="justify-content-center">
          <Col md="12" lg="10" xl="8">
            <Card className="mx-4">
              <CardBody className="p-4">
                <form onSubmit={formik.handleSubmit}>
                  <h1>Register</h1>
                  <InputGroup className="mb-4"></InputGroup>
                  <br />
                  {/* <TextField
                    onChange={formik.handleChange}
                    id="empid"
                    name="empid"
                    placeholder="Employee ID"
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
                  /> */}

                  <InputGroup className="mb-4"></InputGroup>
                  <br />
                  <TextField
                    onChange={formik.handleChange}
                    id="name"
                    name="name"
                    placeholder="Employee Name"
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
                  <br />
                  <TextField
                    type="number"
                    onChange={formik.handleChange}
                    id="age"
                    name="age"
                    placeholder="Employee Age"
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
                  <br />
                  <TextField
                    onChange={formik.handleChange}
                    id="address"
                    name="address"
                    placeholder="Employee Address"
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
                  <br />
                  <TextField
                    onChange={formik.handleChange}
                    id="department"
                    name="department"
                    placeholder="Department"
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
                    <Row>
                      <Col xs="12" sm="6">
                        <br />
                        <Button
                          type="submit"
                          variant="contained"
                          className="btn btn-info mb-1"
                        >
                          Add Employee
                        </Button>
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
