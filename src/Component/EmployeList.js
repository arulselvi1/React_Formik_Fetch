import React, { useEffect, useState } from "react";
import { Card, CardBody, CardHeader, Col, Row, Table } from "reactstrap";
import DeleteIcon from "@mui/icons-material/Delete";
import IconButton from "@mui/material/IconButton";
import EditIcon from "@mui/icons-material/Edit";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
// const API = "https://my-json-server.typicode.com/arulselvi1/APIREAD";

const API = "https://620a625f92946600171c59ee.mockapi.io";
export function EmployeList() {
  const [empdata, setEmpData] = useState([]);
  const history = useHistory();
  const getEmp = () => {
    fetch(`${API}/employee`, {
      method: "GET",
    }) // promise
      .then((data) => data.json()) // Response object
      .then((mvs) => setEmpData(mvs));
  };
  useEffect(() => {
    getEmp();
  }, []);

  const deleteEmp = (empid) => {
    fetch(`${API}/employee/${empid}`, {
      method: "DELETE",
    }).then(() => getEmp());
  };

  return (
    <div className="animated fadeIn">
      <Row>
        <Col>
          <Card>
            <CardHeader>
              <i className="fa fa-align-justify"></i> Employee List
            </CardHeader>
            <CardBody>
              <Table hover bordered striped responsive size="sm">
                <thead>
                  <tr>
                    <th>Employee ID</th>
                    <th>Name</th>
                    <th>Age</th>
                    <th>Address</th>
                    <th>Department</th>
                  </tr>
                </thead>
                <tbody>
                  {empdata.map((user, idx) => (
                    <TableRow key={user.empid}>
                      <TableCell>{user.empid}</TableCell>
                      <TableCell>{user.name}</TableCell>
                      <TableCell>{user.age}</TableCell>
                      <TableCell>{user.address}</TableCell>
                      <TableCell>{user.department}</TableCell>
                      <TableCell align="center">
                        <IconButton
                          style={{ marginLeft: "auto" }}
                          onClick={() => deleteEmp(user.empid)}
                          aria-label="delete"
                          color="error"
                        >
                          <DeleteIcon />
                        </IconButton>

                        <IconButton
                          onClick={() => history.push(`/edit/${user.empid}`)}
                          aria-label="edit"
                          color="secondary"
                        >
                          <EditIcon />
                        </IconButton>
                      </TableCell>
                    </TableRow>
                  ))}
                </tbody>
              </Table>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </div>
  );
}
