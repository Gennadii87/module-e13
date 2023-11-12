/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/math.js":
/*!*********************!*\
  !*** ./src/math.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   multiply: () => (/* binding */ multiply),
/* harmony export */   sum: () => (/* binding */ sum)
/* harmony export */ });
// eslint-disable-next-line
var sum = (a, b) => a + b;

const PI = 3.14;

// eslint-disable-next-line
const multiply = (a) => a * PI;

/***/ }),

/***/ "./src/toggleOutput.js":
/*!*****************************!*\
  !*** ./src/toggleOutput.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   toggleOutput: () => (/* binding */ toggleOutput)
/* harmony export */ });
// toggleOutput.js

function toggleOutput() {
    var outputElement = document.getElementById('output');
    var button = document.querySelector('.btn1');
    
    if (outputElement.style.display === 'none' || outputElement.style.display === '') {
        outputElement.style.display = 'block';
        button.innerText = 'Скрыть код';
    } else {
        outputElement.style.display = 'none';
        button.innerText = 'Посмотреть код';
    }
}

// Глобальная переменная, в которую мы помещаем функцию
window.toggleOutput = toggleOutput;





/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _math__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./math */ "./src/math.js");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _toggleOutput__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./toggleOutput */ "./src/toggleOutput.js");



 

const multiply = (a) => a * 8;

document.addEventListener('DOMContentLoaded', function () {
    // Этот код выполнится после полной загрузки DOM

    // Выводим данные в элемент
    var outputElement = document.getElementById('output');
    outputElement.innerHTML =
        'ES6, module !<br>' +
        'sum from math= ' + _math__WEBPACK_IMPORTED_MODULE_0__.sum(32, 11) + '<br>' +
        'multiply from index.js = ' + multiply(0.9) + '<br>' +
        'multiply from math = ' + _math__WEBPACK_IMPORTED_MODULE_0__.multiply(3) + '<br>';

    // Вызываем функцию toggleOutput при загрузке DOM
    (0,_toggleOutput__WEBPACK_IMPORTED_MODULE_2__.toggleOutput)();
});

// document.addEventListener('DOMContentLoaded', function () {
//     const outputElement = document.getElementById('output_json'); 
//     const fetchDataButton = document.getElementById('fetchDataButton');

//     fetchDataButton.addEventListener('click', function () {
//         // fetch для получения данных из JSON-сервера
//         fetch('http://localhost:3000/contacts') 
//             .then(response => response.json())
//             .then(data => {
//                 // После успешного получения данных
//                 outputElement.textContent = JSON.stringify(data, null, 2);
//             })
//             .catch(error => {
//                 console.error('Ошибка при получении данных:', error);
//                 outputElement.textContent = 'Произошла ошибка при получении данных.';
//             });
//     });
// });
document.addEventListener('DOMContentLoaded', function () {
    const outputElement = document.getElementById('output_json');
    const fetchDataButton = document.getElementById('fetchDataButton');

    fetchDataButton.addEventListener('click', function () {
        // fetch для получения данных из JSON-сервера
        fetch('http://localhost:3000/contacts') 
            .then(response => response.json())
            .then(data => {
                // После успешного получения данных
                const formattedData = data.map(contact => (
                    `{
                        "id": ${contact.id},
                        "name": "${contact.name}",
                        "email": "${contact.email}",
                        "phone": "${contact.phone}"
                    }`
                ));

                // Объединяем массив строк в одну строку с переносами строк
                outputElement.innerHTML = `<pre>${formattedData.join(',\n')}</pre>`;
            })
            .catch(error => {
                console.error('Ошибка при получении данных:', error);
                outputElement.textContent = 'Произошла ошибка при получении данных.';
            });
    });
});

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDTzs7Ozs7Ozs7Ozs7Ozs7QUNOUDtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ25CQTs7Ozs7OztVQ0FBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7OztBQ05BO0FBQytCO0FBQ1Y7QUFDeUI7QUFDOUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0QkFBNEIsc0NBQVE7QUFDcEM7QUFDQSxrQ0FBa0MsMkNBQWE7QUFDL0M7QUFDQTtBQUNBLElBQUksMkRBQVk7QUFDaEIsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQjtBQUNoQjtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0I7QUFDaEIsUUFBUTtBQUNSLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQ0FBZ0MsV0FBVztBQUMzQyxtQ0FBbUMsYUFBYTtBQUNoRCxvQ0FBb0MsY0FBYztBQUNsRCxvQ0FBb0MsY0FBYztBQUNsRCxxQkFBcUI7QUFDckI7QUFDQTtBQUNBO0FBQ0Esa0RBQWtELDBCQUEwQjtBQUM1RSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiLEtBQUs7QUFDTCxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2VicGFjay8uL3NyYy9tYXRoLmpzIiwid2VicGFjazovL3dlYnBhY2svLi9zcmMvdG9nZ2xlT3V0cHV0LmpzIiwid2VicGFjazovL3dlYnBhY2svLi9zcmMvc3R5bGUuY3NzP2ZjYzEiLCJ3ZWJwYWNrOi8vd2VicGFjay93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly93ZWJwYWNrL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly93ZWJwYWNrL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vd2VicGFjay93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3dlYnBhY2svLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lXHJcbmV4cG9ydCB2YXIgc3VtID0gKGEsIGIpID0+IGEgKyBiO1xyXG5cclxuY29uc3QgUEkgPSAzLjE0O1xyXG5cclxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lXHJcbmV4cG9ydCBjb25zdCBtdWx0aXBseSA9IChhKSA9PiBhICogUEk7IiwiLy8gdG9nZ2xlT3V0cHV0LmpzXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gdG9nZ2xlT3V0cHV0KCkge1xyXG4gICAgdmFyIG91dHB1dEVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnb3V0cHV0Jyk7XHJcbiAgICB2YXIgYnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJ0bjEnKTtcclxuICAgIFxyXG4gICAgaWYgKG91dHB1dEVsZW1lbnQuc3R5bGUuZGlzcGxheSA9PT0gJ25vbmUnIHx8IG91dHB1dEVsZW1lbnQuc3R5bGUuZGlzcGxheSA9PT0gJycpIHtcclxuICAgICAgICBvdXRwdXRFbGVtZW50LnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xyXG4gICAgICAgIGJ1dHRvbi5pbm5lclRleHQgPSAn0KHQutGA0YvRgtGMINC60L7QtCc7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIG91dHB1dEVsZW1lbnQuc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICAgICAgICBidXR0b24uaW5uZXJUZXh0ID0gJ9Cf0L7RgdC80L7RgtGA0LXRgtGMINC60L7QtCc7XHJcbiAgICB9XHJcbn1cclxuXHJcbi8vINCT0LvQvtCx0LDQu9GM0L3QsNGPINC/0LXRgNC10LzQtdC90L3QsNGPLCDQsiDQutC+0YLQvtGA0YPRjiDQvNGLINC/0L7QvNC10YnQsNC10Lwg0YTRg9C90LrRhtC40Y5cclxud2luZG93LnRvZ2dsZU91dHB1dCA9IHRvZ2dsZU91dHB1dDtcclxuXHJcblxyXG5cclxuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJcclxuaW1wb3J0ICogYXMgbWF0aCBmcm9tICcuL21hdGgnO1xyXG5pbXBvcnQgJy4vc3R5bGUuY3NzJztcclxuaW1wb3J0IHsgdG9nZ2xlT3V0cHV0IH0gZnJvbSAnLi90b2dnbGVPdXRwdXQnOyBcclxuXHJcbmNvbnN0IG11bHRpcGx5ID0gKGEpID0+IGEgKiA4O1xyXG5cclxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsIGZ1bmN0aW9uICgpIHtcclxuICAgIC8vINCt0YLQvtGCINC60L7QtCDQstGL0L/QvtC70L3QuNGC0YHRjyDQv9C+0YHQu9C1INC/0L7Qu9C90L7QuSDQt9Cw0LPRgNGD0LfQutC4IERPTVxyXG5cclxuICAgIC8vINCS0YvQstC+0LTQuNC8INC00LDQvdC90YvQtSDQsiDRjdC70LXQvNC10L3RglxyXG4gICAgdmFyIG91dHB1dEVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnb3V0cHV0Jyk7XHJcbiAgICBvdXRwdXRFbGVtZW50LmlubmVySFRNTCA9XHJcbiAgICAgICAgJ0VTNiwgbW9kdWxlICE8YnI+JyArXHJcbiAgICAgICAgJ3N1bSBmcm9tIG1hdGg9ICcgKyBtYXRoLnN1bSgzMiwgMTEpICsgJzxicj4nICtcclxuICAgICAgICAnbXVsdGlwbHkgZnJvbSBpbmRleC5qcyA9ICcgKyBtdWx0aXBseSgwLjkpICsgJzxicj4nICtcclxuICAgICAgICAnbXVsdGlwbHkgZnJvbSBtYXRoID0gJyArIG1hdGgubXVsdGlwbHkoMykgKyAnPGJyPic7XHJcblxyXG4gICAgLy8g0JLRi9C30YvQstCw0LXQvCDRhNGD0L3QutGG0LjRjiB0b2dnbGVPdXRwdXQg0L/RgNC4INC30LDQs9GA0YPQt9C60LUgRE9NXHJcbiAgICB0b2dnbGVPdXRwdXQoKTtcclxufSk7XHJcblxyXG4vLyBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgZnVuY3Rpb24gKCkge1xyXG4vLyAgICAgY29uc3Qgb3V0cHV0RWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdvdXRwdXRfanNvbicpOyBcclxuLy8gICAgIGNvbnN0IGZldGNoRGF0YUJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdmZXRjaERhdGFCdXR0b24nKTtcclxuXHJcbi8vICAgICBmZXRjaERhdGFCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoKSB7XHJcbi8vICAgICAgICAgLy8gZmV0Y2gg0LTQu9GPINC/0L7Qu9GD0YfQtdC90LjRjyDQtNCw0L3QvdGL0YUg0LjQtyBKU09OLdGB0LXRgNCy0LXRgNCwXHJcbi8vICAgICAgICAgZmV0Y2goJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9jb250YWN0cycpIFxyXG4vLyAgICAgICAgICAgICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXHJcbi8vICAgICAgICAgICAgIC50aGVuKGRhdGEgPT4ge1xyXG4vLyAgICAgICAgICAgICAgICAgLy8g0J/QvtGB0LvQtSDRg9GB0L/QtdGI0L3QvtCz0L4g0L/QvtC70YPRh9C10L3QuNGPINC00LDQvdC90YvRhVxyXG4vLyAgICAgICAgICAgICAgICAgb3V0cHV0RWxlbWVudC50ZXh0Q29udGVudCA9IEpTT04uc3RyaW5naWZ5KGRhdGEsIG51bGwsIDIpO1xyXG4vLyAgICAgICAgICAgICB9KVxyXG4vLyAgICAgICAgICAgICAuY2F0Y2goZXJyb3IgPT4ge1xyXG4vLyAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcign0J7RiNC40LHQutCwINC/0YDQuCDQv9C+0LvRg9GH0LXQvdC40Lgg0LTQsNC90L3Ri9GFOicsIGVycm9yKTtcclxuLy8gICAgICAgICAgICAgICAgIG91dHB1dEVsZW1lbnQudGV4dENvbnRlbnQgPSAn0J/RgNC+0LjQt9C+0YjQu9CwINC+0YjQuNCx0LrQsCDQv9GA0Lgg0L/QvtC70YPRh9C10L3QuNC4INC00LDQvdC90YvRhS4nO1xyXG4vLyAgICAgICAgICAgICB9KTtcclxuLy8gICAgIH0pO1xyXG4vLyB9KTtcclxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsIGZ1bmN0aW9uICgpIHtcclxuICAgIGNvbnN0IG91dHB1dEVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnb3V0cHV0X2pzb24nKTtcclxuICAgIGNvbnN0IGZldGNoRGF0YUJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdmZXRjaERhdGFCdXR0b24nKTtcclxuXHJcbiAgICBmZXRjaERhdGFCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgLy8gZmV0Y2gg0LTQu9GPINC/0L7Qu9GD0YfQtdC90LjRjyDQtNCw0L3QvdGL0YUg0LjQtyBKU09OLdGB0LXRgNCy0LXRgNCwXHJcbiAgICAgICAgZmV0Y2goJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9jb250YWN0cycpIFxyXG4gICAgICAgICAgICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXHJcbiAgICAgICAgICAgIC50aGVuKGRhdGEgPT4ge1xyXG4gICAgICAgICAgICAgICAgLy8g0J/QvtGB0LvQtSDRg9GB0L/QtdGI0L3QvtCz0L4g0L/QvtC70YPRh9C10L3QuNGPINC00LDQvdC90YvRhVxyXG4gICAgICAgICAgICAgICAgY29uc3QgZm9ybWF0dGVkRGF0YSA9IGRhdGEubWFwKGNvbnRhY3QgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgIGB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiaWRcIjogJHtjb250YWN0LmlkfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiJHtjb250YWN0Lm5hbWV9XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiZW1haWxcIjogXCIke2NvbnRhY3QuZW1haWx9XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwicGhvbmVcIjogXCIke2NvbnRhY3QucGhvbmV9XCJcclxuICAgICAgICAgICAgICAgICAgICB9YFxyXG4gICAgICAgICAgICAgICAgKSk7XHJcblxyXG4gICAgICAgICAgICAgICAgLy8g0J7QsdGK0LXQtNC40L3Rj9C10Lwg0LzQsNGB0YHQuNCyINGB0YLRgNC+0Log0LIg0L7QtNC90YMg0YHRgtGA0L7QutGDINGBINC/0LXRgNC10L3QvtGB0LDQvNC4INGB0YLRgNC+0LpcclxuICAgICAgICAgICAgICAgIG91dHB1dEVsZW1lbnQuaW5uZXJIVE1MID0gYDxwcmU+JHtmb3JtYXR0ZWREYXRhLmpvaW4oJyxcXG4nKX08L3ByZT5gO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAuY2F0Y2goZXJyb3IgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcign0J7RiNC40LHQutCwINC/0YDQuCDQv9C+0LvRg9GH0LXQvdC40Lgg0LTQsNC90L3Ri9GFOicsIGVycm9yKTtcclxuICAgICAgICAgICAgICAgIG91dHB1dEVsZW1lbnQudGV4dENvbnRlbnQgPSAn0J/RgNC+0LjQt9C+0YjQu9CwINC+0YjQuNCx0LrQsCDQv9GA0Lgg0L/QvtC70YPRh9C10L3QuNC4INC00LDQvdC90YvRhS4nO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgIH0pO1xyXG59KTtcclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9