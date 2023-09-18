import React from "react";
import Sidebar from "../Sidebar";
import "./StaffOverview.css";

const StaffOverview = () => {
  const overviewData = [
    {
      title: "No of students",
      value: 140,
      icon: "",
    },
    {
      title: "Current Cohorts",
      value: 8,
      icon: "",
    },
    {
      title: "Attendance",
      value: 120,
      icon: "",
    },
    {
      title: "Completed Cohorts",
      value: 13,
      icon: "",
    },
  ];

  const taskmanagement = [
    {
      title: "Grade students assignment",
      course: "UI/UX",
      cohort: "Cohort 1",
    },
    {
      title: "Grade students assignment",
      course: "UI/UX",
      cohort: "Cohort 2",
    },
    {
      title: "Grade students assignment",
      course: "UI/UX",
      cohort: "Cohort 3",
    },
    {
      title: "Grade students assignment",
      course: "UI/UX",
      cohort: "Cohort 4",
    },
  ];

  return (
    <div className="overviewArea">
      <div className="overviewHeader">
        <h1>Overview</h1>
      </div>
      <div className="overviewBody">
        <div className="overviewCard">
          {overviewData.map((overview) => (
            <div className="overviewCardContent">
              <h5>{overview.title}</h5>
              <div className="overview-value-icon">
                <h2>{overview.value}</h2>
                <span>{overview.icon}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="taskMangement">
          <div className="taskManagementHeader">
            <h3>Task management</h3>
            <p>See all</p>
          </div>
          <div className="taskManagementBody">
            <div className="taskManagementTasks">
              <div className="taskManagementContent">
                {taskmanagement.map((task) => (
                  <div className="taskManagementText">
                    <h4>{task.title}</h4>
                    {/* <div className="taskManagementContentIcon"></div> */}
                    <div className="taskManagementSubTexts">
                      <span>{task.course}</span> 
                      <span> {task.cohort}</span>
                    </div>
                  </div>
                ))}
              </div>
              <div className="taskManagementIcon"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StaffOverview;
