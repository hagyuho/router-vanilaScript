const MainPage = require("./pages/MainPage");
const OtherPage = require("./pages/OtherPage");
const Router = require("./Router");

// 1.라우팅할 전체 페이지를 등록한다.
const pages = [
  { page: MainPage, path: "main" },
  { page: OtherPage, path: "other" },
];

// 2.전역에서 라우터를 가져와 쉽게 라우팅 할 수 있게 한다.
const router = new Router({ pages });
