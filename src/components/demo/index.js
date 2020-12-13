import Calender from "./calender";
import Note from "./note";

import React, { useState } from "react";

import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";

const Demo = () => {
  const [key, setKey] = useState("note");
  return (
    <>
      <Tabs activeKey={key} onSelect={(k) => setKey(k)}>
        <Tab eventKey="note" title="Note">
          <Note />
        </Tab>
        <Tab eventKey="calender" title="Calender">
          <Calender />
        </Tab>
      </Tabs>
    </>
  );
};

export default Demo;
