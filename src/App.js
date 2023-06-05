import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Mainpage from "./components/mainpage";
import { Route, Switch } from "react-router-dom";
import Data from "./components/Data";
import AddUserDetails from "./components/AddUser";
import React, { createContext, useContext, useState } from "react";
import EditUser from "./components/editUser";
import Teacher from "./components/teachers";
import AddTeacherDetails from "./components/AddTeacher";

export const AppContext = createContext();

function App() {
  const userData = [
    {
      id: 101,
      name: "Dravid",
      email: "dravid@gmail.com",
      Gender: "Male",
      phone: "86******31",
      qualification: "B.tech",
    },
    {
      id: 102,
      name: "Sachin",
      email: "sachin@gmail.com",
      Gender: "Male",
      phone: "86******31",
      qualification: "B.tech",
    },
    {
      id: 103,
      name: "Sehwag",
      email: "sehwag@gmail.com",
      Gender: "Male",
      phone: "86******31",
      qualification: "B.tech",
    },
    {
      id: 104,
      name: "Gambhir",
      email: "gambhir@gmail.com",
      Gender: "Male",
      phone: "86******31",
      qualification: "B.tech",
    },
    {
      id: 105,
      name: "Zaheer",
      email: "Zaheer@gmail.com",
      Gender: "Male",
      phone: "86******31",
      qualification: "B.tech",
    },
    {
      id: 106,
      name: "Yuvaraj",
      email: "yuvaraj@gmail.com",
      Gender: "Male",
      phone: "86******31",
      qualification: "B.tech",
    },
  ];
  const [person, SetPerson] = useState(userData);

  const teacher = [
    {
      id: 201,
      name: "Dravid",
      subject: "Princple",
      email: "dravid@gmail.com",
      Gender: "Male",
      phone: "86******31",
      qualification: "B.tech",
    },
    {
      id: 202,
      name: "Sachin",
      subject: "HeadMaster",
      email: "sachin@gmail.com",
      Gender: "Male",
      phone: "86******31",
      qualification: "B.tech",
    },
    {
      id: 203,
      name: "Sehwag",
      subject: "PT",
      email: "sehwag@gmail.com",
      Gender: "Male",
      phone: "86******31",
      qualification: "B.tech",
    },
    {
      id: 204,
      name: "Gambhir",
      subject: "Correspondence",
      email: "gambhir@gmail.com",
      Gender: "Male",
      phone: "86******31",
      qualification: "B.tech",
    },
    {
      id: 205,
      name: "Zaheer",
      subject: "modern science",
      email: "Zaheer@gmail.com",
      Gender: "Male",
      phone: "86******31",
      qualification: "B.tech",
    },
    {
      id: 106,
      name: "Yuvaraj",
      subject: "Biology",
      email: "yuvaraj@gmail.com",
      Gender: "Male",
      phone: "86******31",
      qualification: "B.tech",
    },
  ];

  const [lecturer, SetLecturer] = useState(teacher);


  return (
    <div className="App">
      <AppContext.Provider
        value={{
          person,
          SetPerson,
          lecturer,
          SetLecturer
        }}
      >
        <Switch>
          <Route exact path="/">
            <Mainpage
              userDetail="User Details"
              contentstyle="contentparent"
              children={<Data />}
            />
          </Route>
          <Route path="/add/user">
            <Mainpage userDetail="Add User" children={<AddUserDetails />} />
          </Route>

          <Route path="/edit/user">
            <Mainpage userDetail="Edit User" children={<EditUser />} />
          </Route>

          <Route path="/teacher">
            <Mainpage userDetail="Teacher Details" children={<Teacher/>} />
          </Route>

          <Route path="/add/teacher">
            <Mainpage userDetail="Add Teacher" children={<AddTeacherDetails/>}/>
          </Route>

          <Route path="**">
            <h1>404 Page not found</h1>
          </Route>
        </Switch>
      </AppContext.Provider>
    </div>
  );
}

export const AppState = () => {
  return useContext(AppContext);
};

export default App;
