/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _pages_main_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pages/main.js */ \"./src/pages/main.js\");\n/* harmony import */ var _pages_menu_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages/menu.js */ \"./src/pages/menu.js\");\n/* harmony import */ var _pages_about_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/about.js */ \"./src/pages/about.js\");\n\n\n\n\nconst picoCss = document.createElement(\"link\");\npicoCss.rel = \"stylesheet\";\npicoCss.href = \"https://cdn.jsdelivr.net/npm/@picocss/pico@2/css/pico.min.css\";\ndocument.head.appendChild(picoCss);\n\n\nfunction changePage(page, url = \"test\"){\n    const newPage = page;\n    const newUrl = url;\n    return () => {\n        contentDiv.innerHTML = \"\";\n        contentDiv.append(newPage);\n        // window.history.replaceState(null, document.title, newUrl);\n    }\n}\n\nconst contentDiv = document.getElementById(\"content\");\nconst homeButton = document.getElementById(\"home-button\");\nconst homeAction = changePage(_pages_main_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"], \"home\");\nconst menuButton = document.getElementById(\"menu-button\");\nconst menuAction = changePage(_pages_menu_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"], \"menu\");\nconst aboutButton = document.getElementById(\"about-button\");\nconst aboutAction = changePage(_pages_about_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"], \"about\");\n\ncontentDiv.append(_pages_main_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\n\n\nhomeButton.addEventListener(\"click\", homeAction);\nmenuButton.addEventListener(\"click\", menuAction);\naboutButton.addEventListener(\"click\", aboutAction);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMiLCJtYXBwaW5ncyI6Ijs7OztBQUF1QztBQUNBO0FBQ0U7O0FBRXpDO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLDhCQUE4QixzREFBUTtBQUN0QztBQUNBLDhCQUE4QixzREFBUTtBQUN0QztBQUNBLCtCQUErQix1REFBUzs7QUFFeEMsa0JBQWtCLHNEQUFROzs7QUFHMUI7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzP2I2MzUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IG1haW5QYWdlIGZyb20gXCIuL3BhZ2VzL21haW4uanNcIjtcbmltcG9ydCBtZW51UGFnZSBmcm9tIFwiLi9wYWdlcy9tZW51LmpzXCI7XG5pbXBvcnQgYWJvdXRQYWdlIGZyb20gXCIuL3BhZ2VzL2Fib3V0LmpzXCI7XG5cbmNvbnN0IHBpY29Dc3MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlua1wiKTtcbnBpY29Dc3MucmVsID0gXCJzdHlsZXNoZWV0XCI7XG5waWNvQ3NzLmhyZWYgPSBcImh0dHBzOi8vY2RuLmpzZGVsaXZyLm5ldC9ucG0vQHBpY29jc3MvcGljb0AyL2Nzcy9waWNvLm1pbi5jc3NcIjtcbmRvY3VtZW50LmhlYWQuYXBwZW5kQ2hpbGQocGljb0Nzcyk7XG5cblxuZnVuY3Rpb24gY2hhbmdlUGFnZShwYWdlLCB1cmwgPSBcInRlc3RcIil7XG4gICAgY29uc3QgbmV3UGFnZSA9IHBhZ2U7XG4gICAgY29uc3QgbmV3VXJsID0gdXJsO1xuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICAgIGNvbnRlbnREaXYuaW5uZXJIVE1MID0gXCJcIjtcbiAgICAgICAgY29udGVudERpdi5hcHBlbmQobmV3UGFnZSk7XG4gICAgICAgIC8vIHdpbmRvdy5oaXN0b3J5LnJlcGxhY2VTdGF0ZShudWxsLCBkb2N1bWVudC50aXRsZSwgbmV3VXJsKTtcbiAgICB9XG59XG5cbmNvbnN0IGNvbnRlbnREaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvbnRlbnRcIik7XG5jb25zdCBob21lQnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJob21lLWJ1dHRvblwiKTtcbmNvbnN0IGhvbWVBY3Rpb24gPSBjaGFuZ2VQYWdlKG1haW5QYWdlLCBcImhvbWVcIik7XG5jb25zdCBtZW51QnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtZW51LWJ1dHRvblwiKTtcbmNvbnN0IG1lbnVBY3Rpb24gPSBjaGFuZ2VQYWdlKG1lbnVQYWdlLCBcIm1lbnVcIik7XG5jb25zdCBhYm91dEJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYWJvdXQtYnV0dG9uXCIpO1xuY29uc3QgYWJvdXRBY3Rpb24gPSBjaGFuZ2VQYWdlKGFib3V0UGFnZSwgXCJhYm91dFwiKTtcblxuY29udGVudERpdi5hcHBlbmQobWFpblBhZ2UpO1xuXG5cbmhvbWVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGhvbWVBY3Rpb24pO1xubWVudUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgbWVudUFjdGlvbik7XG5hYm91dEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgYWJvdXRBY3Rpb24pO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./src/pages/about.js":
/*!****************************!*\
  !*** ./src/pages/about.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst container = document.createElement(\"div\");\nconst text = document.createElement(\"p\");\ntext.innerHTML = \"our mission is to serve all our customers with a smile on our face!\";\n\ncontainer.appendChild(text);\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (container);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvYWJvdXQuanMiLCJtYXBwaW5ncyI6Ijs7OztBQUFBO0FBQ0E7QUFDQTs7QUFFQTs7O0FBR0EsaUVBQWUsU0FBUyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9wYWdlcy9hYm91dC5qcz9kZDcxIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5jb25zdCB0ZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG50ZXh0LmlubmVySFRNTCA9IFwib3VyIG1pc3Npb24gaXMgdG8gc2VydmUgYWxsIG91ciBjdXN0b21lcnMgd2l0aCBhIHNtaWxlIG9uIG91ciBmYWNlIVwiO1xuXG5jb250YWluZXIuYXBwZW5kQ2hpbGQodGV4dCk7XG5cblxuZXhwb3J0IGRlZmF1bHQgY29udGFpbmVyOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/about.js\n");

/***/ }),

/***/ "./src/pages/main.js":
/*!***************************!*\
  !*** ./src/pages/main.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _mountain_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../mountain.png */ \"./src/mountain.png\");\n\n\nconst container = document.createElement(\"div\");\nconst h1 = document.createElement(\"h1\");\nh1.innerHTML = \"Hello there~!\";\nconst text = document.createElement(\"p\");\ntext.innerHTML = \"We live to serve (lol). Peak Hours 12 noon - 2pm\";\nconst img = new Image();\nimg.src = _mountain_png__WEBPACK_IMPORTED_MODULE_0__;\n\ncontainer.append(h1);\ncontainer.append(text);\ncontainer.append(img);\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (container);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvbWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUEwQzs7QUFFMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVSwwQ0FBVzs7QUFFckI7QUFDQTtBQUNBOztBQUVBLGlFQUFlLFNBQVMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvbWFpbi5qcz9lYTY3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBidXJnZXJJbWFnZSBmcm9tICcuLi9tb3VudGFpbi5wbmcnO1xuXG5jb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuY29uc3QgaDEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDFcIik7XG5oMS5pbm5lckhUTUwgPSBcIkhlbGxvIHRoZXJlfiFcIjtcbmNvbnN0IHRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbnRleHQuaW5uZXJIVE1MID0gXCJXZSBsaXZlIHRvIHNlcnZlIChsb2wpLiBQZWFrIEhvdXJzIDEyIG5vb24gLSAycG1cIjtcbmNvbnN0IGltZyA9IG5ldyBJbWFnZSgpO1xuaW1nLnNyYyA9IGJ1cmdlckltYWdlO1xuXG5jb250YWluZXIuYXBwZW5kKGgxKTtcbmNvbnRhaW5lci5hcHBlbmQodGV4dCk7XG5jb250YWluZXIuYXBwZW5kKGltZyk7XG5cbmV4cG9ydCBkZWZhdWx0IGNvbnRhaW5lcjsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/main.js\n");

/***/ }),

/***/ "./src/pages/menu.js":
/*!***************************!*\
  !*** ./src/pages/menu.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst container = document.createElement(\"div\");\nconst list = document.createElement(\"ol\");\nconst burger = document.createElement(\"li\");\nconst fries = document.createElement(\"li\");\nconst shake = document.createElement(\"li\");\n\nburger.innerHTML = \"burger\";\nfries.innerHTML = \"fries\";\nshake.innerHTML = \"shake\";\n\nlist.append(burger);\nlist.append(fries);\nlist.append(shake);\n\ncontainer.append(list);\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (container);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvbWVudS5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOzs7QUFHQSxpRUFBZSxTQUFTIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL3BhZ2VzL21lbnUuanM/OGFkNiJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuY29uc3QgbGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJvbFwiKTtcbmNvbnN0IGJ1cmdlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcbmNvbnN0IGZyaWVzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xuY29uc3Qgc2hha2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XG5cbmJ1cmdlci5pbm5lckhUTUwgPSBcImJ1cmdlclwiO1xuZnJpZXMuaW5uZXJIVE1MID0gXCJmcmllc1wiO1xuc2hha2UuaW5uZXJIVE1MID0gXCJzaGFrZVwiO1xuXG5saXN0LmFwcGVuZChidXJnZXIpO1xubGlzdC5hcHBlbmQoZnJpZXMpO1xubGlzdC5hcHBlbmQoc2hha2UpO1xuXG5jb250YWluZXIuYXBwZW5kKGxpc3QpO1xuXG5cbmV4cG9ydCBkZWZhdWx0IGNvbnRhaW5lcjsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/menu.js\n");

/***/ }),

/***/ "./src/mountain.png":
/*!**************************!*\
  !*** ./src/mountain.png ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "1c4037e9fb40cdd32e68.png";

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
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript && document.currentScript.tagName.toUpperCase() === 'SCRIPT')
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;