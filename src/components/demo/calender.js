import React, { useState } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
// import ScrollContainer from "react-indiana-drag-scroll";
// needed for dayClick
import "@fullcalendar/core/main.css";
import "@fullcalendar/daygrid/main.css";
import "@fullcalendar/timegrid/main.css";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Form from "react-bootstrap/Form";

import Moment from "moment";

const Calender = () => {
  // calendarComponentRef = React.createRef();

  let event = [
    { id: 1, title: "Event Now", start: new Date(), note: "I am the best" },
    { id: 2, title: "event 2", date: "2020-12-22", note: "I Like to ...." },
  ];
  const [calendarEvents, setCalendarEvents] = useState(event);
  const [calendarWeekends, setCalendarWeekends] = useState(true);
  const [show, setShow] = useState(false);
  const [date, setDate] = useState("");
  const [title, setTitle] = useState("");
  const [note, setNote] = useState("");
  const [mode, setMode] = useState("add");
  const [viewId, setViewId] = useState(0);
  const [viewTitle, setViewTitle] = useState("");
  const [viewNote, setViewNote] = useState("");
  const [viewDate, setViewDate] = useState("");

  const handleClose = () => setShow(false);

  const save = () => {
    let invoice = {
      id: calendarEvents.length + 1,
      title: title,
      note: note,
      date: date,
    };
    setNote("");
    setCalendarEvents([...calendarEvents, invoice]);
    handleClose();
  };

  const handleEdit = (e) => {
    setMode("edit");

    setTitle(viewTitle);
    setNote(viewNote);
  };

  const addDetail = (e) => {
    setMode("add");
    setDate(Moment(e.date).format("YYYY-MM-DD"));
    setTitle("");
    setNote("");
    setShow(true);
  };

  const showDetail = (vid, vtitle, vnote, vdate) => {
    setViewDate(Moment(vdate).format("YYYY-MM-DD"));
    setMode("view");
    setViewId(vid);
    setViewTitle(vtitle);
    setViewNote(vnote);
    setShow(true);
  };

  // const deleteinvoice = () => {
  //   let calendarEvents1 = calendarEvents;
  //   const UpdatedcalendarEvents = calendarEvents1.filter(
  //     (Event) => Event.id !== viewId
  //   );

  //   setCalendarEvents(UpdatedcalendarEvents);
  //   handleClose();
  // };

  const deleteinvoice = () => {
    setCalendarEvents(calendarEvents.filter((item) => item.id != viewId));
    setTitle("");
    setNote("");
    handleClose();
  };

  const update = () => {
    const updatedTitle = title;
    const updatedNote = note;
    setCalendarEvents(
      calendarEvents.map((x) => {
        if (x.id != viewId) return x;
        return { ...x, title: updatedTitle, note: updatedNote };
      })
    );

    handleClose();
  };

  return (
    <React.Fragment>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>
            {mode === "view"
              ? viewTitle + " on " + viewDate
              : mode === "edit"
              ? "Update for " + " " + viewDate
              : "Add Note for" + " " + date}
          </Modal.Title>
        </Modal.Header>

        {mode === "view" ? (
          <Modal.Body>
            <Row>
              <Col>{viewNote}</Col>
            </Row>
          </Modal.Body>
        ) : (
          <Modal.Body>
            <Row>
              <Col>
                <Form.Label>Title</Form.Label>
                <Form.Control
                  onChange={(e) => {
                    setTitle(e.target.value);
                  }}
                  value={title}
                />
              </Col>
            </Row>
            <Row>
              <Col>
                <Form.Label>Note</Form.Label>
                <Form.Control
                  onChange={(e) => {
                    setNote(e.target.value);
                  }}
                  as="textarea"
                  rows={3}
                  value={note}
                />
              </Col>
            </Row>
          </Modal.Body>
        )}
        <Modal.Footer>
          <Button variant="secondary" size="sm" onClick={handleClose}>
            Close
          </Button>
          {mode === "view" ? (
            <>
              <Button
                variant="primary"
                size="sm"
                onClick={() => {
                  handleEdit();
                }}
              >
                Edit
              </Button>
              <Button
                variant="danger"
                size="sm"
                onClick={() => {
                  deleteinvoice();
                }}
              >
                Delete
              </Button>
            </>
          ) : mode === "add" ? (
            <Button variant="primary" size="sm" onClick={save}>
              Save
            </Button>
          ) : (
            <Button variant="success" size="sm" onClick={update}>
              Update
            </Button>
          )}
        </Modal.Footer>
      </Modal>

      <FullCalendar
        defaultView="dayGridMonth"
        defaultDate={Moment(new Date()).format("YYYY-MM-DD")}
        header={{
          left: "prev,next today",
          center: "title",
          right: "dayGridMonth,timeGridWeek,timeGridDay,listWeek",
        }}
        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
        weekends={calendarWeekends}
        events={calendarEvents ? calendarEvents : ""}
        eventClick={(e) => {
          showDetail(
            e.event.id,
            e.event.title,
            e.event.extendedProps.note,
            e.event.start
          );
        }}
        dateClick={(e) => {
          addDetail(e);
        }}
      />
    </React.Fragment>
  );
};

export default Calender;
