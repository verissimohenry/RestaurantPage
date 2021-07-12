/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
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

eval("__webpack_require__.r(__webpack_exports__);\nObject(function webpackMissingModule() { var e = new Error(\"Cannot find module '../style/style.css'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }());\n\n\nconst homeInner = __webpack_require__(Object(function webpackMissingModule() { var e = new Error(\"Cannot find module './home'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }()));\nconst menuInner = __webpack_require__(Object(function webpackMissingModule() { var e = new Error(\"Cannot find module './menu'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }()));\nconst contactInner = __webpack_require__(Object(function webpackMissingModule() { var e = new Error(\"Cannot find module './contact'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }()));\n\nconst content = document.getElementById('content');\nconst contentChild = document.createElement('div');\nfunction navBar() {\n  const nav = document.createElement('nav');\n  const ul = document.createElement('ul');\n  const li1 = document.createElement('li');\n  const li2 = document.createElement('li');\n  const li3 = document.createElement('li');\n  const a1 = document.createElement('a');\n  const a2 = document.createElement('a');\n  const a3 = document.createElement('a');\n  li1.classList.add('list-item');\n  a1.innerHTML = 'Home';\n  a1.id = 'home';\n  li2.classList.add('list-item');\n  a2.innerHTML = 'Menu';\n  a2.id = 'menu';\n  li3.classList.add('list-item');\n  a3.innerHTML = 'Contact';\n  a3.id = 'contact';\n  a1.href = '#';\n  a2.href = '#';\n  a3.href = '#';\n  li1.appendChild(a1);\n  li2.appendChild(a2);\n  li3.appendChild(a3);\n  ul.appendChild(li1);\n  ul.appendChild(li2);\n  ul.appendChild(li3);\n  nav.appendChild(ul);\n  content.appendChild(nav);\n  content.appendChild(contentChild);\n}\nnavBar();\nconst home = document.getElementById('home');\nconst contact = document.getElementById('contact');\nconst menu = document.getElementById('menu');\nconst homeContent = document.createElement('div');\nconst menuContent = document.createElement('div');\nconst contactContent = document.createElement('div');\nfunction homePage() {\n  if (contentChild.childNodes[0]) {\n    contentChild.removeChild(contentChild.childNodes[0]);\n  }\n  contentChild.appendChild(homeContent);\n\n  homeContent.innerHTML = homeInner;\n}\nfunction menuPage() {\n  if (contentChild.childNodes[0]) {\n    contentChild.removeChild(contentChild.childNodes[0]);\n  }\n  contentChild.appendChild(menuContent);\n  menuContent.innerHTML = menuInner;\n}\nfunction contactPage() {\n  if (contentChild.childNodes[0]) {\n    contentChild.removeChild(contentChild.childNodes[0]);\n  }\n  contentChild.appendChild(contactContent);\n  contactContent.innerHTML = contactInner;\n}\n\nhomePage();\nhome.addEventListener('click', homePage);\ncontact.addEventListener('click', contactPage);\nmenu.addEventListener('click', menuPage);\n\n\n//# sourceURL=webpack://restaurantpage/./src/index.js?");

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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;