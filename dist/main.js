/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _visible__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);


(()=>{

    const next = () => {
        const currentElement = document.querySelector(".visible");
        console.log(currentElement)
        if (currentElement.nextElementSibling.classList.contains("img")){
            Object(_visible__WEBPACK_IMPORTED_MODULE_0__["left"])(currentElement)
            Object(_visible__WEBPACK_IMPORTED_MODULE_0__["visible"])(currentElement.nextElementSibling);
        }
    }

    const previous = () => {
        const currentElement = document.querySelector(".visible");
        console.log(currentElement)
        if (currentElement.previousElementSibling.classList.contains("img")){
            Object(_visible__WEBPACK_IMPORTED_MODULE_0__["right"])(currentElement)
            Object(_visible__WEBPACK_IMPORTED_MODULE_0__["visible"])(currentElement.previousElementSibling);
            console.log(currentElement);
        }
    }

    const btns = document.querySelectorAll(".btn");
    btns.forEach(btn=>{
        btn.addEventListener("click",()=>{
            const playerName = btn.getAttribute("for");
            const playerElement = document.querySelector("."+playerName);
            Object(_visible__WEBPACK_IMPORTED_MODULE_0__["visible"])(playerElement)
            let previousElement = playerElement.previousElementSibling;
            while (previousElement) {
                Object(_visible__WEBPACK_IMPORTED_MODULE_0__["left"])(previousElement)
                previousElement = previousElement.previousElementSibling;
            }
            let nextElement = playerElement.nextElementSibling;
            while (nextElement) {
                if (nextElement.classList.contains("img")){
                    Object(_visible__WEBPACK_IMPORTED_MODULE_0__["right"])(nextElement)
                }
                nextElement = nextElement.nextElementSibling;
            }
        })
    });
    const arrows = document.querySelector(".arrows").querySelectorAll("div");
    arrows.forEach(arrow=>{
        if (arrow.classList.contains("left-arrow")){
            arrow.addEventListener("click",()=>{
                previous();
            });

        } else if(arrow.classList.contains("right-arrow")) {
            arrow.addEventListener("click",()=>{
                next();
            });
        }
    })
})();

(()=>{
    const icons = [document.querySelector(".icon"),document.querySelector("#icon")]
    const menu = document.querySelector(".menu");
    const slideShowAfter = document.querySelector(".blur")
    console.log(slideShowAfter)
    icons.forEach(icon=>{
        icon.addEventListener("click",()=>{
            menu.classList.toggle("menu-hidden");
            slideShowAfter.classList.toggle("opaque");
        })
    })
})();

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "visible", function() { return visible; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "left", function() { return left; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "right", function() { return right; });

const visible = (element) => {
    element.classList.remove("left")
    element.classList.remove("right")
    element.classList.add("visible")
}

const left = (element) => {
    element.classList.remove("visible")
    element.classList.remove("right")
    element.classList.add("left")
}

const right = (element) => {
    element.classList.remove("left")
    element.classList.remove("visible")
    element.classList.add("right")
}



/***/ })
/******/ ]);