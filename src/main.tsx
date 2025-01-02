import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.scss"; // 其他全局樣式
import App from "./App.tsx";
import dayjs from "dayjs";
import timezone from "dayjs/plugin/timezone";
import isSameOrBefore from "dayjs/plugin/isSameOrBefore";
import isSameOrAfter from "dayjs/plugin/isSameOrAfter";
import isBetween from "dayjs/plugin/isBetween";
import "dayjs/locale/zh-tw";

dayjs.extend(timezone);
dayjs.extend(isSameOrBefore);
dayjs.extend(isSameOrAfter);
dayjs.extend(isBetween);
dayjs.locale("zh-tw");
dayjs.tz.setDefault("Asia/Taipei");

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
