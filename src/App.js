import React, { useState } from "react";
import "./App.css";
import { Switch, Route, useHistory } from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Button from "@mui/material/Button";
import { Notfound } from "./Notfound";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import Paper from "@mui/material/Paper";
import { EmpLoginForm } from "./EmpLoginForm";
import { Createemployee } from "./Component/Createemployee";
import { EmployeList } from "./Component/EmployeList";
import { Editemployee } from "./Component/Editemployee";

function App() {
  const employee_details = [
    {
      empid: "101",
      name: "John",
      age: "30",
      address: "no.9, Fellmisg street, US",
      department: "IT",
    },
    {
      empid: "102",
      name: "Mary",
      age: "23",
      address: "no.493,California, US",
      department: "Accounts",
    },
    {
      empid: "103",
      name: "Nelson",
      age: "32",
      address: "no.949,Atlanta, US",
      department: "IT",
    },
  ];
  const [emp, setemp] = useState(employee_details);
  const [mode, setMode] = useState("dark");
  const history = useHistory();
  const theme = createTheme({
    palette: {
      mode: mode,
    },
  });
  return (
    <ThemeProvider theme={theme}>
      <Paper style={{ borderRadius: "0px", minHeight: "100vh" }} elevation={3}>
        <div className="App">
          <AppBar position="static">
            <Toolbar>
              <Button color="inherit" onClick={() => history.push("/")}>
                Home
              </Button>
              <Button color="inherit" onClick={() => history.push("/employee")}>
                Employee List
              </Button>
              <Button color="inherit" onClick={() => history.push("/add")}>
                Add Employees
              </Button>

              <Button
                color="inherit"
                style={{ marginLeft: "auto" }}
                startIcon={
                  mode === "dark" ? <Brightness7Icon /> : <Brightness4Icon />
                }
                onClick={() => setMode(mode === "light" ? "dark" : "light")}
              >
                {mode === "light" ? "dark" : "light"} mode
              </Button>
            </Toolbar>
          </AppBar>

          <Switch>
            {/* Each route is case, eg. - case '/about': */}
            <Route exact path="/">
              <EmpLoginForm />
            </Route>
            <Route path="/employee">
              <EmployeList />
            </Route>
            <Route path="/add">
              <Createemployee />
            </Route>
            <Route path="/edit/:empid" exact>
              <Editemployee />
            </Route>

            {/* Match url display the below component */}

            <Route path="**">
              <Notfound />
            </Route>
          </Switch>
        </div>
      </Paper>
    </ThemeProvider>
  );
}

export default App;
