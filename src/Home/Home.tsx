import React from "react";
import { Link } from "react-router-dom";
import "../index.scss";

const Home = () => {
  return (
    <div className="d-flex flex-column align-items-center py-5">
      <h5 className="text-green mb-5 fw-bold">
        謝京澔 Hsieh,Ching-Hao 國泰測驗提交
      </h5>
      <Link className="link-btn px-5 py-2 mb-5" to="/js-test">
        JS-Test
      </Link>
      <Link className="link-btn px-5 py-2" to="/date-picker">
        Date-Picker-Test
      </Link>
    </div>
  );
};

export default Home;
