import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Home from "./Home/Home";
import JsTest from "./JsTest/JsTest";
import DatePicker from "./DatePicker/DatePicker";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="js-test" element={<JsTest />} />
          <Route path="date-picker" element={<DatePicker />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
