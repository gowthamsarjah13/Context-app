// import React, { useState } from "react";
import { createContext, useContext, useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
// import EditUser from './editUser';
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import EditUser from "./editUser";
import { AppContext, AppState } from "../App";

function Data() {
  const { person, SetPerson} = AppState();

  const history = useHistory();

  const deleteuser = (ids) => {
    const anotherList = person.filter((val, idx) => val.id !== ids);
    SetPerson(anotherList);
  };

  const viewUser = (ind) => {
    const alterList = person.filter((val) => val.id === ind);
    SetPerson(alterList);
  };

  const passingvalue = (e) => {
    console.log(e.target.value);
    history.push("/edit/user");
  };

  return (
    <div className="cardparent">
      {person.map((value, index) => (
        <Card key={index}>
          <Card.Header className="chf">
            {" "}
            <h2>{value.name}</h2>{" "}
          </Card.Header>
          <Card.Body className="Cbody">
            <h4>Id: {value.id}</h4>
            <h4>Email: {value.email}</h4>
            <h4>Gender: {value.Gender}</h4>
            <h4>Phone: {value.phone}</h4>
            <h4>Qualification: {value.qualification}</h4>
          </Card.Body>
          <Card.Footer className="chf">
            <Button
              className="footbtn"
              value={value.id}
              onClick={passingvalue}
              variant="primary"
            >
              Edit
            </Button>

            <Button
              className="footbtn"
              onClick={() => viewUser(value.id)}
              variant="success"
            >
              View
            </Button>

            <Button
              className="footbtn"
              onClick={() => deleteuser(value.id)}
              variant="danger"
            >
              Delete
            </Button>
          </Card.Footer>
        </Card>
      ))}
   </div>
  );
}

export default Data;
