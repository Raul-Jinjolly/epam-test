var main =
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("Object.defineProperty(__webpack_exports__, \"__esModule\", { value: true });\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__getusers__ = __webpack_require__(1);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__User__ = __webpack_require__(2);\n\n\n\nObject(__WEBPACK_IMPORTED_MODULE_0__getusers__[\"a\" /* getUsers */])(users => {\n  let wrapper = document.querySelector('#wrapper');\n  let addButton = document.querySelector('#add');\n  let allUsers = document.querySelector('#users');\n  let userPopUp = document.createElement('div');\n  let select = document.querySelector('select');\n\n  addButton.addEventListener('click', function () {\n    addButton.style.display = 'none';\n    select.classList.remove('hidden');\n    allUsers.classList.remove('hidden');\n    users.forEach(function (user, i) {\n      user[i] = new __WEBPACK_IMPORTED_MODULE_1__User__[\"a\" /* User */]();\n      let userDiv = document.createElement('div');\n      userDiv.classList.add('user');\n      userDiv.innerHTML = `<img src=\"${user.picture.medium}\">\n                          <span class=\"info\">see more info</span>\n                          <h2><span>${user.name.title}</span>. ${user.name.first} ${user.name.last}</h2>\n                          <span class=\"gender\">${user.gender}</span>`;\n      allUsers.appendChild(userDiv);\n\n      let template = `<div class=\"ava\"><img src=\"${user.picture.large}\"><h2>${user.name.first} ${user.name.last}</h2>\n                      </div><img src=\"https://image.flaticon.com/icons/svg/1/1193.svg\" class=\"close\">\n                      <p><span>${user.location.city}</span>, ${user.location.state}</p>\n                      <div class=\"contacts\">\n                      <ul class=\"contacts_images\">\n                      <li class=\"phone\"></li><li class=\"email\"></li><li class=\"street\"></li><li class=\"postcode\"></li>\n                      </ul>\n                      <ul class=\"contacts_info\">\n                      <li>${user.phone}</li><li>${user.email}</li><li>${user.location.street}</li><li>${user.location.postcode}</li>\n                      </ul>\n                      </div>`;\n\n      userDiv.querySelector('.info').addEventListener('click', function () {\n        userPopUp.classList.add('user_popup');\n        userPopUp.classList.remove('hidden');\n        userPopUp.innerHTML = template;\n        wrapper.appendChild(userPopUp);\n\n        userPopUp.querySelector('.close').addEventListener('click', function () {\n          userPopUp.classList.add('hidden');\n        });\n      });\n\n      select.addEventListener('change', function () {\n        allUsers.innerHTML = '';\n        if (this.options[this.selectedIndex].value == 'alphabetFirstName') {\n          users.sort(compareFirstName);\n          users.forEach(function (user, i) {\n\n            let userDiv = document.createElement('div');\n            userDiv.classList.add('user');\n            userDiv.innerHTML = `<img src=\"${user.picture.medium}\">\n                          <span class=\"info\">see more info</span>\n                          <h2><span>${user.name.title}</span>. ${user.name.first} ${user.name.last}</h2>\n                          <span class=\"gender\">${user.gender}</span>`;\n            allUsers.appendChild(userDiv);\n\n            userDiv.querySelector('.info').addEventListener('click', function () {\n              userPopUp.classList.add('user_popup');\n              userPopUp.classList.remove('hidden');\n              userPopUp.innerHTML = `<div class=\"ava\"><img src=\"${user.picture.large}\"><h2>${user.name.first} ${user.name.last}</h2>\n                  </div><img src=\"https://image.flaticon.com/icons/svg/1/1193.svg\" class=\"close\">\n                    <p><span>${user.location.city}</span>, ${user.location.state}</p>\n                  <div class=\"contacts\">\n                    <ul class=\"contacts_images\">\n                      <li class=\"phone\"></li><li class=\"email\"></li><li class=\"street\"></li><li class=\"postcode\"></li>\n                    </ul>\n                    <ul class=\"contacts_info\">\n                      <li>${user.phone}</li><li>${user.email}</li><li>${user.location.street}</li><li>${user.location.postcode}</li>\n                    </ul>\n                  </div>`;\n              wrapper.appendChild(userPopUp);\n\n              userPopUp.querySelector('.close').addEventListener('click', function () {\n                userPopUp.classList.add('hidden');\n              });\n            });\n          });\n        }\n        if (this.options[this.selectedIndex].value == 'reverseFirstName') {\n          users.sort(compareFirstName).reverse();\n          users.forEach(function (user, i) {\n\n            let userDiv = document.createElement('div');\n            userDiv.classList.add('user');\n            userDiv.innerHTML = `<img src=\"${user.picture.medium}\">\n                          <span class=\"info\">see more info</span>\n                          <h2><span>${user.name.title}</span>. ${user.name.first} ${user.name.last}</h2>\n                          <span class=\"gender\">${user.gender}</span>`;\n            allUsers.appendChild(userDiv);\n\n            userDiv.querySelector('.info').addEventListener('click', function () {\n              userPopUp.classList.add('user_popup');\n              userPopUp.classList.remove('hidden');\n              userPopUp.innerHTML = `<div class=\"ava\"><img src=\"${user.picture.large}\"><h2>${user.name.first} ${user.name.last}</h2>\n                  </div><img src=\"https://image.flaticon.com/icons/svg/1/1193.svg\" class=\"close\">\n                    <p><span>${user.location.city}</span>, ${user.location.state}</p>\n                  <div class=\"contacts\">\n                    <ul class=\"contacts_images\">\n                      <li class=\"phone\"></li><li class=\"email\"></li><li class=\"street\"></li><li class=\"postcode\"></li>\n                    </ul>\n                    <ul class=\"contacts_info\">\n                      <li>${user.phone}</li><li>${user.email}</li><li>${user.location.street}</li><li>${user.location.postcode}</li>\n                    </ul>\n                  </div>`;\n              wrapper.appendChild(userPopUp);\n\n              userPopUp.querySelector('.close').addEventListener('click', function () {\n                userPopUp.classList.add('hidden');\n              });\n            });\n          });\n        }\n        if (this.options[this.selectedIndex].value == 'alphabetLastName') {\n          users.sort(compareLastName);\n          users.forEach(function (user, i) {\n\n            let userDiv = document.createElement('div');\n            userDiv.classList.add('user');\n            userDiv.innerHTML = `<img src=\"${user.picture.medium}\">\n                          <span class=\"info\">see more info</span>\n                          <h2><span>${user.name.title}</span>. ${user.name.first} ${user.name.last}</h2>\n                          <span class=\"gender\">${user.gender}</span>`;\n            allUsers.appendChild(userDiv);\n\n            userDiv.querySelector('.info').addEventListener('click', function () {\n              userPopUp.classList.add('user_popup');\n              userPopUp.classList.remove('hidden');\n              userPopUp.innerHTML = `<div class=\"ava\"><img src=\"${user.picture.large}\"><h2>${user.name.first} ${user.name.last}</h2>\n                  </div><img src=\"https://image.flaticon.com/icons/svg/1/1193.svg\" class=\"close\">\n                    <p><span>${user.location.city}</span>, ${user.location.state}</p>\n                  <div class=\"contacts\">\n                    <ul class=\"contacts_images\">\n                      <li class=\"phone\"></li><li class=\"email\"></li><li class=\"street\"></li><li class=\"postcode\"></li>\n                    </ul>\n                    <ul class=\"contacts_info\">\n                      <li>${user.phone}</li><li>${user.email}</li><li>${user.location.street}</li><li>${user.location.postcode}</li>\n                    </ul>\n                  </div>`;\n              wrapper.appendChild(userPopUp);\n\n              userPopUp.querySelector('.close').addEventListener('click', function () {\n                userPopUp.classList.add('hidden');\n              });\n            });\n          });\n        }\n        if (this.options[this.selectedIndex].value == 'revesreLastName') {\n          users.sort(compareLastName).reverse();\n          users.forEach(function (user, i) {\n\n            let userDiv = document.createElement('div');\n            userDiv.classList.add('user');\n            userDiv.innerHTML = `<img src=\"${user.picture.medium}\">\n                          <span class=\"info\">see more info</span>\n                          <h2><span>${user.name.title}</span>. ${user.name.first} ${user.name.last}</h2>\n                          <span class=\"gender\">${user.gender}</span>`;\n            allUsers.appendChild(userDiv);\n\n            userDiv.querySelector('.info').addEventListener('click', function () {\n              userPopUp.classList.add('user_popup');\n              userPopUp.classList.remove('hidden');\n              userPopUp.innerHTML = `<div class=\"ava\"><img src=\"${user.picture.large}\"><h2>${user.name.first} ${user.name.last}</h2>\n                  </div><img src=\"https://image.flaticon.com/icons/svg/1/1193.svg\" class=\"close\">\n                    <p><span>${user.location.city}</span>, ${user.location.state}</p>\n                  <div class=\"contacts\">\n                    <ul class=\"contacts_images\">\n                      <li class=\"phone\"></li><li class=\"email\"></li><li class=\"street\"></li><li class=\"postcode\"></li>\n                    </ul>\n                    <ul class=\"contacts_info\">\n                      <li>${user.phone}</li><li>${user.email}</li><li>${user.location.street}</li><li>${user.location.postcode}</li>\n                    </ul>\n                  </div>`;\n              wrapper.appendChild(userPopUp);\n\n              userPopUp.querySelector('.close').addEventListener('click', function () {\n                userPopUp.classList.add('hidden');\n              });\n            });\n          });\n        }\n      });\n    });\n  });\n});\n\nfunction compareFirstName(obj1, obj2) {\n  if (obj1.name.first > obj2.name.first) return 1;\n  if (obj1.name.first < obj2.name.first) return -1;\n}\n\nfunction compareLastName(obj1, obj2) {\n  if (obj1.name.last > obj2.name.last) return 1;\n  if (obj1.name.last < obj2.name.last) return -1;\n}\n\n//////////////////\n// WEBPACK FOOTER\n// ./main.js\n// module id = 0\n// module chunks = 0\n\n//# sourceURL=webpack:///./main.js?");

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony export (immutable) */ __webpack_exports__[\"a\"] = getUsers;\nfunction getUsers(callback) {\n  const USERS_URL = 'https://api.randomuser.me/1.0/?results=50&nat=gb,us&inc=gender,name,location,email,phone,picture';\n  let xhr = new XMLHttpRequest();\n  xhr.open('GET', USERS_URL, true);\n  xhr.send();\n  xhr.addEventListener('readystatechange', function () {\n    if (xhr.readyState !== 4) return;\n    callback(JSON.parse(xhr.responseText).results);\n  });\n}\n\n//////////////////\n// WEBPACK FOOTER\n// ./getusers.js\n// module id = 1\n// module chunks = 0\n\n//# sourceURL=webpack:///./getusers.js?");

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("const USER_URL = `https://api.randomuser.me/1.0/?results=50&nat=gb,us&inc=gender,name,location,email,phone,picture`;\n/* unused harmony export USER_URL */\n\n\nclass User {\n\n    constructor(data) {\n        Object.assign(this, data);\n    }\n\n    capitalize() {\n        this.name.first = this.name.first.charAt(0).toUpperCase() + this.name.first.slice(1);\n        this.name.last = this.name.last.charAt(0).toUpperCase() + this.name.last.slice(1);\n    }\n}\n/* harmony export (immutable) */ __webpack_exports__[\"a\"] = User;\n\n\n//////////////////\n// WEBPACK FOOTER\n// ./User.js\n// module id = 2\n// module chunks = 0\n\n//# sourceURL=webpack:///./User.js?");

/***/ })
/******/ ]);