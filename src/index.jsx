// 浏览器兼容
// import "react-app-polyfill/stable";
// import "react-app-polyfill/ie11";
// import "react-app-polyfill/ie9";

import React from "react";
import ReactDOM from "react-dom/client";
import { ConfigProvider } from "antd";
import zhCN from "antd/locale/zh_CN";
import "dayjs/locale/zh-cn";
import "@/index.less";
import App from "./App";
import store from "./store";
import StoreContext from "./storeContext";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <ConfigProvider locale={zhCN}>
      <StoreContext.Provider value={store}>
        <App />
      </StoreContext.Provider>
    </ConfigProvider>
  </>
);

// 测试代理
// fetch("/jian/subscriptions/recommended_collections")
//   .then((res) => res.json())
//   .then((res) => console.log(res));
// fetch("/zhi/news/latest")
//   .then((res) => res.json())
//   .then((res) => console.log(res));
