import React from "react";
import "./JsTest.scss";
import Q1_1 from "../assets/answer/Q1-1.jpg";
import Q1_2 from "../assets/answer/Q1-2.jpg";
import Q2 from "../assets/answer/Q2.jpg";
import Qes2 from "../assets/question/Q2.png";
import Q3 from "../assets/answer/Q3.jpg";
import Q4 from "../assets/answer/Q4.jpg";
import Q5 from "../assets/answer/Q5.jpg";
import Qes5_1 from "../assets/question/Q5-1.png";
import Qes5_2 from "../assets/question/Q5-2.png";
import Q6 from "../assets/answer/Q6.jpg";

const JsTest = () => {
  return (
    <section className="w-100 d-flex flex-column justify-content-center align-items-center">
      <div className="w-80 d-flex flex-column justify-content-center align-items-center py-5">
        <p className="fs-5 fw-bold text-center">
          ** All following exams please using Javascript only **
        </p>
        {/* 1-1 */}
        <p className="w-100 fs-3">1.</p>
        <p className="mb-3">
          {`/**
            There is an array, each item has such format:
            {firstName: 'xxx', lastName: 'xxx', customerID: 'xxx', note: 'xxx',
            profession: ‘xxx’}
            lastName, note can be empty, customerID can only be a set of digital
            numbers.
            profession can only have ‘student’, ‘freelancer’, ‘productOwner’,
            ‘engineer’ or ‘systemAnalytics’.
        **/`}
        </p>
        <h5 className="mb-3">
          Q1. Please follow the principle (‘firstName’ + ‘lastName’ +
          ‘customerID’) to sort this array and print it out.
        </h5>
        <div className="bg-white rounded w-100 p-3 mb-5">
          <img src={Q1_1} alt="Q1-1" style={{ width: "100%" }} />
        </div>
        {/* 1-2 */}
        <p className="mb-3">
          {`/**
            Q2. Please sort by ‘profession’ to follow the principle.
            (‘systemAnalytics’ > ‘engineer’ > ‘productOwner’ > ‘freelancer’ >
            ‘student’’)
            **/
           `}
        </p>
        <div className="bg-white rounded w-100 p-3 mb-5">
          <img src={Q1_2} alt="Q1-2" style={{ width: "100%" }} />
        </div>
        {/* 2 */}
        <p className="w-100 fs-3">2.</p>
        <p className="mb-3">
          <img src={Qes2} alt="qes2" style={{ width: "80%" }} />
        </p>
        <div className="bg-white rounded w-100 p-3 mb-5">
          <img src={Q2} alt="Q2" style={{ width: "100%" }} />
        </div>
        {/* 3 */}
        <p className="w-100 fs-3">3.</p>
        <p className="mb-3">
          {`/**
            Please write down a function is used to create an array of unique values.
            Example:
            let items = [1, 1, 1, 5, 2, 3, 4, 3, 3, 3, 3, 3, 3, 7, 8, 5, 4, 9, 0, 1,
            3, 2, 6, 7, 5, 4, 4, 7, 8, 8, 0, 1, 2, 3, 1];
            output: [1, 5, 2, 3, 4, 7, 8, 9, 0, 6]
            **/
           `}
        </p>
        <div className="bg-white rounded w-100 p-3 mb-5">
          <img src={Q3} alt="Q3" style={{ width: "100%" }} />
        </div>
        {/* 4 */}
        <p className="w-100 fs-3">4.</p>
        <p className="mb-3">
          {`/** Can you explain about Interface and Enum, and where will you be using,
            please make some examples. **/
        `}
        </p>
        <div className="bg-white rounded w-100 p-3 mb-5">
          <img src={Q4} alt="Q4" style={{ width: "100%" }} />
        </div>
        {/* 5 */}
        <p className="w-100 fs-3">5.</p>
        <p className="mb-3">
          <img src={Qes5_1} alt="qes5-1" style={{ width: "50%" }} />
          <img src={Qes5_2} alt="qes5-2" style={{ width: "50%" }} />
        </p>
        <div className="bg-white rounded w-100 p-3 mb-5">
          <img src={Q5} alt="Q5" style={{ width: "100%" }} />
        </div>
        {/* 6 */}
        <p className="w-100 fs-3">6.</p>
        <p className="mb-3">
          {`/** Please write the sample code to debounce handleOnChange 
          (Do not use any 3th party libs other than react)  **/
        `}
        </p>
        <div className="bg-white rounded w-100 p-3 mb-5">
          <img src={Q6} alt="Q6" style={{ width: "100%" }} />
        </div>
      </div>
    </section>
  );
};

export default JsTest;
