/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";
import Widget from "../../components/widget/Widget";
import { useState, useEffect } from "react";
import Axios from "axios";
import { CgClose } from "react-icons/cg";
import Backdrop from "@mui/material/Backdrop";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import { MdAddBox } from "react-icons/md";
import AForm from "../../components/form/AForm";

const Dashboard = () => {
  const [tData, setTData] = useState([]);
  const [cData, setCData] = useState([]);
  const [sData, setSData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const getStudent = () => {
    Axios.get("/?getallstudents")
      .then((response) => {
        setSData(response?.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const getTeacher = () => {
    if (loading) {
      Axios.get("/?getallteachers")
        .then((response) => {
          setTData(response?.data);
          setLoading(false);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };
  const getCourse = () => {
    if (loading) {
      Axios.get("/?getAllcourse")
        .then((response) => {
          setCData(response?.data);
          setLoading(false);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  useEffect(() => {
    getTeacher();
    getCourse();
    getStudent();
  }, []);
  return (
    <div className="flex">
      <Sidebar />
      <div className="homeContainer flex-1">
        <Navbar />
        <hr className="mx-2 mb-3" />
        <div className="flex justify-center items-center">
          <div className="widgets grid lg:grid-cols-3 mx-8 gap-8 md:grid-cols-1 mt-10">
            <Widget type="students" student={sData.length} />
            <Widget type="teachers" teacher={tData.length} />
            <Widget type="officers" />
            <Widget type="courses" course={cData.length} />
            <Widget type="semesters" />
            <div className="widget flex flex-col gap-y-10 px-4 py-3 border shadow-hblue rounded-lg shadow-lg">
              <div className="top gap-y-2 flex flex-col ">
                <div className="title text-center text-gray-500 text-3xl px-1">
                  ASSIGN TEACHERS
                  <br />
                  TO COURSES
                </div>
                <div className="counter text-gray-600 text-lg p-1"></div>
              </div>
              <div className="bottom w-full flex flex-col rounded-lg bg-hblue justify-center items-center">
                <div>
                  <button
                    className="text-xl flex items-center align-middle rounded-lg py-2 px-6"
                    onClick={handleOpen}
                  >
                    <MdAddBox /> <span className="mr-2"></span> Assign courses
                  </button>
                  <Modal
                    aria-labelledby="transition-modal-title"
                    aria-describedby="transition-modal-description"
                    open={open}
                    onClose={handleClose}
                    closeAfterTransition
                    BackdropComponent={Backdrop}
                    BackdropProps={{
                      timeout: 500,
                    }}
                  >
                    <Fade in={open}>
                      <div className="modal relative -translate-1/2 border rounded-xl shadow-xl bg-white p-12">
                        <button
                          id="close"
                          className="absolute top-5 right-5"
                          onClick={handleClose}
                        >
                          <CgClose />
                        </button>
                        <div id="transition-modal-description">
                          <AForm teacher={tData} loading={loading} course={cData} />
                        </div>
                      </div>
                    </Fade>
                  </Modal>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
