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

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var mermaid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mermaid */ \"./node_modules/mermaid/dist/mermaid.esm.min.mjs\");\n\n\nfunction addMermaidStyles() {\n  const mermaidStyles = document.createElement('style');\n\n  mermaidStyles.innerHTML += `\n  /* Any custom mermaid.js scripts will go here. */\n  }`;\n\n  document.getElementsByTagName('head')[0].appendChild(mermaidStyles);\n}\n\nfunction addMermaidScripts() {\n  const mermaidScripts = document.createElement('script');\n  mermaidScripts.type = 'text/javascript';\n  mermaidScripts.text += `\n   /* Any custom mermaid.js scripts will go here. */\n  `;\n  document.getElementsByTagName('head')[0].appendChild(mermaidScripts);\n\n  mermaid__WEBPACK_IMPORTED_MODULE_0__[\"default\"].mermaidAPI.initialize({startOnLoad:false});\n}\n\nasync function createFigures() {\n  // add scripts for figures\n  addMermaidScripts();\n\n  // add styles for figures\n  addMermaidStyles();\n\n  // process every mermaid figure in the document\n  const mermaidFigures = document.querySelectorAll(\".mermaid\");\n  let figureNum = 1;\n  for(const figure of mermaidFigures) {\n    // extract the mermaid source code\n    const mermaidSource = figure.firstChild.textContent;\n    // try rendering the diagram\n    try {\n      await mermaid__WEBPACK_IMPORTED_MODULE_0__[\"default\"].mermaidAPI.render(\n        'diagram-' + figureNum, mermaidSource, (svgCode, bindFunctions) => {\n          const template = document.createElement('template');\n          template.innerHTML = svgCode.trim();\n          figure.parentElement.prepend(template.content.firstChild);\n          figure.remove();\n      });\n      figureNum++;\n    } catch(e) {\n      console.error('respec-mermaid error: Failed to generate figure.',\n        e, mermaidSource);\n      continue;\n    }\n\n    // append the examples\n    //example.after(preJwt);\n  }\n}\n\n// setup exports on window\nwindow.respecMermaid = {\n  createFigures\n}\n\n\n//# sourceURL=webpack://respec-mermaid/./index.js?");

/***/ }),

/***/ "./node_modules/mermaid/dist/mermaid.esm.min.mjs":
/*!*******************************************************!*\
  !*** ./node_modules/mermaid/dist/mermaid.esm.min.mjs ***!
  \*******************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {


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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./index.js");
/******/ 	
/******/ })()
;