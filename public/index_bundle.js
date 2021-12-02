/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./Router.js":
/*!*******************!*\
  !*** ./Router.js ***!
  \*******************/
/***/ ((module) => {

eval("class Router {\r\n  nowPage = \"\";\r\n\r\n  constructor({ pages }) {\r\n    this.app = document.getElementById(\"app\");\r\n\r\n    // 3.페이지가 변경될 때를 감지하여 라우팅을 한다.\r\n    window.onhashchange = () => {\r\n      // 1.라우팅할 전체 페이지를 등록한다.\r\n      this.pages = pages;\r\n      this.nowPage = window.location.hash.replace(\"#\", \"\");\r\n\r\n      const page = this.pages.find((p) => p.path === this.nowPage);\r\n      const Page = page.page;\r\n      const currentPage = new Page({router:this});\r\n\r\n      this.app.innerHTML = '';\r\n      this.app.innerHTML += currentPage.render();\r\n      currentPage.mount();\r\n    };\r\n  }\r\n\r\n  push(pageName){\r\n    window.location.hash = pageName;\r\n  }\r\n\r\n}\r\nmodule.exports = Router;   \r\n\r\n// 라우터를 만들 때 고려할 사항\r\n// 1.라우팅할 전체 페이지를 등록한다.\r\n// 2.전역에서 라우터를 가져와 쉽게 라우팅 할 수 있게 한다.\r\n// 3.페이지가 변경될 때를 감지하여 라우팅을 한다.\r\n\n\n//# sourceURL=webpack://router/./Router.js?");

/***/ }),

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("const MainPage = __webpack_require__(/*! ./pages/MainPage */ \"./pages/MainPage.js\");\r\nconst OtherPage = __webpack_require__(/*! ./pages/OtherPage */ \"./pages/OtherPage.js\");\r\nconst Router = __webpack_require__(/*! ./Router */ \"./Router.js\");\r\n\r\nconst pages = [\r\n  { page: MainPage, path: \"main\" },\r\n  { page: OtherPage, path: \"other\" },\r\n];\r\n\r\nconst router = new Router({ pages });\r\n\n\n//# sourceURL=webpack://router/./index.js?");

/***/ }),

/***/ "./pages/MainPage.js":
/*!***************************!*\
  !*** ./pages/MainPage.js ***!
  \***************************/
/***/ ((module) => {

eval("class MainPage {\r\n  constructor({router}) {\r\n    this.router = router;\r\n  }\r\n\r\n  mount(){\r\n    const button = document.querySelector('.main-button');\r\n    button.addEventListener('click',()=>{\r\n      this.router.push('other')\r\n    })\r\n  }\r\n\r\n  render() {\r\n    return `<span>메인 페이지</span> <button type=\"button\" class=\"main-button\">Other Page</button> `;\r\n  }\r\n}\r\nmodule.exports = MainPage;\r\n\n\n//# sourceURL=webpack://router/./pages/MainPage.js?");

/***/ }),

/***/ "./pages/OtherPage.js":
/*!****************************!*\
  !*** ./pages/OtherPage.js ***!
  \****************************/
/***/ ((module) => {

eval("class OtherPage {\r\n  constructor({ router }) {\r\n    this.router = router;\r\n  }\r\n  mount() {\r\n    const button = document.querySelector(\".other-button\");\r\n    button.addEventListener(\"click\", () => {\r\n      this.router.push(\"main\");\r\n    });\r\n  }\r\n\r\n  render() {\r\n    return `<span>다른 페이지</span> <button type=\"button\" class=\"other-button\">Main Page</button> `;\r\n  }\r\n}\r\nmodule.exports = OtherPage;\r\n\n\n//# sourceURL=webpack://router/./pages/OtherPage.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./index.js");
/******/ 	
/******/ })()
;