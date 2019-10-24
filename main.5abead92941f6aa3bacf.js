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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _normalize_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./normalize.css */ \"./src/normalize.css\");\n/* harmony import */ var _normalize_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_normalize_css__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _main_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./main.scss */ \"./src/main.scss\");\n/* harmony import */ var _main_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_main_scss__WEBPACK_IMPORTED_MODULE_1__);\n\n\n$(document).ready(function () {\n  //VIEWPORT WIdTH CHECK\n  function viewport() {\n    var e = window,\n        a = 'inner';\n\n    if (!('innerWidth' in window)) {\n      a = 'client';\n      e = document.documentElement || document.body;\n    }\n\n    return {\n      width: e[a + 'Width'],\n      height: e[a + 'Height']\n    };\n  } //var windowWidth = viewport().width; \n  //ONCLICK NAV\n\n\n  var navigation = new function Navi() {\n    var _this = this;\n\n    this.menu = $(\".menuBars\"); //JQuery show menu on click - adds class to show ovelay, or deletes it to hide overlay\n\n    this.showMenu = function () {\n      _this.menu.click(function () {\n        this.menu = $(\".menuBars\");\n        this.overlay = $(\".overlay\");\n        this.nav = $(\".navList\");\n        this.bars = this.menu[0].children;\n        this.liItems = this.nav[0].children;\n\n        if (this.overlay.hasClass(\"overlay--open\")) {\n          this.menu.removeClass(\"menuBars--open\");\n          this.overlay.removeClass(\"overlay--open\");\n\n          for (var i = 0; i < this.bars.length; i++) {\n            this.bars[i].classList.remove(\"menuBars__bar\" + (i + 1) + \"--open\");\n          }\n\n          ;\n\n          for (var _i = 0; _i < this.liItems.length; _i++) {\n            this.liItems[_i].classList.remove(\"navList__item--visible\");\n          }\n\n          ;\n        } else {\n          this.menu.addClass(\"menuBars--open\");\n          this.overlay.addClass(\"overlay--open\");\n\n          for (var _i2 = 0; _i2 < this.bars.length; _i2++) {\n            this.bars[_i2].classList.add(\"menuBars__bar\" + (_i2 + 1) + \"--open\");\n          }\n\n          ;\n\n          for (var _i3 = 0; _i3 < this.liItems.length; _i3++) {\n            this.liItems[_i3].classList.add(\"navList__item--visible\");\n          }\n\n          ;\n        }\n\n        ;\n      });\n    }; //scrolls site when arrows on the bottom of each section are clicked or when item in menu is clicked\n\n\n    this.scroller = function () {\n      $('.scrollText__anchor, .navList__item__anchor').click(function (evt) {\n        this.menu = $(\".menuBars\");\n        this.overlay = $(\".overlay\");\n        this.bars = this.menu[0].children;\n        evt.preventDefault();\n        $(\"html, body\").animate({\n          \"scrollTop\": $($.attr(this, \"href\")).offset().top\n        }, 500); //if overlay is visible - hide it\n\n        if (this.overlay.hasClass(\"overlay--open\")) {\n          this.menu.removeClass(\"menuBars--open\");\n          this.overlay.removeClass(\"overlay--open\");\n        }\n\n        for (var i = 0; i < this.bars.length; i++) {\n          this.bars[i].classList.remove(\"menuBars__bar\" + (i + 1) + \"--open\");\n        }\n\n        ;\n      });\n    };\n  }();\n  navigation.showMenu();\n  navigation.scroller(); //ABOUT ME SLIDE IN\n\n  var showMe = new function MakeItAppear() {\n    //checks if item is visible\n    this.visibilityCheck = function ($) {\n      $.fn.visible = function (partial) {\n        var $t = $(this),\n            $w = $(window),\n            viewTop = $w.scrollTop(),\n            viewBottom = viewTop + $w.height(),\n            _top = $t.offset().top,\n            _bottom = _top + $t.height(),\n            compareTop = partial === true ? _bottom : _top,\n            compareBottom = partial === true ? _top : _bottom;\n\n        return compareBottom <= viewBottom && compareTop >= viewTop;\n      };\n    }(jQuery); //if item is visible - apply class\n\n\n    this.showMeItems = $(window).scroll(function (event) {\n      this.modules = $(\".aboutSection__qImg, .aboutSection__lImg, .aboutSection__heading, .aboutSection__article\");\n      this.aboutSection = $(\".aboutSection\");\n      this.portfolio = $(\".portfolioSection\");\n      this.portfolioItems = $(\".portfolioItem\");\n\n      if (aboutSection.visible(true)) {\n        modules.each(function (i, el) {\n          var el = $(el);\n\n          if (i === 0) {\n            el.addClass(\"aboutSection__qImg--questionMarkComeIn\");\n          } else if (i === 1) {\n            el.addClass(\"aboutSection__lImg--lampBlinkStart\");\n          } else if (i === 2) {\n            el.addClass(\"aboutSection__heading--headingComeIn\");\n          } else if (i === 3) {\n            el.addClass(\"aboutSection__article--paragraphComeIn\");\n          }\n        });\n      }\n\n      if (portfolio.visible(true)) {\n        portfolioItems.addClass(\"portfolioItem--visible\");\n      }\n\n      ;\n    });\n  }(); //SKILLS SLIDER\n\n  var slidesData = [{\n    name: \"html5\",\n    src: \"assets/images/html5.png\",\n    alt: \"HTML5 icon\"\n  }, {\n    name: \"CSS3\",\n    src: \"assets/images/css32.png\",\n    alt: \"CSS3 icon\"\n  }, {\n    name: \"JS\",\n    src: \"assets/images/javascript_logo.png\",\n    alt: \"JS icon\"\n  }, {\n    name: \"JQuery\",\n    src: \"assets/images/jquery.png\",\n    alt: \"JQUery icon\"\n  }, {\n    name: \"SASS\",\n    src: \"assets/images/sass.png\",\n    alt: \"SASS icon\"\n  }, {\n    name: \"Boostrap\",\n    src: \"assets/images/bootstrap.png\",\n    alt: \"Bootstrap icon\"\n  }, {\n    name: \"Git\",\n    src: \"assets/images/git.png\",\n    alt: \"Git icon\"\n  }, {\n    name: \"PSD\",\n    src: \"assets/images/psd.png\",\n    alt: \"PSD icon\"\n  }, {\n    name: \"React\",\n    src: \"assets/images/react.png\",\n    alt: \"React icon\"\n  }];\n  var arrowsData = [{\n    name: \"slider__leftArrow\",\n    src: \"assets/images/arrowDownWhite.png\",\n    alt: \"leftArrow\",\n    style: \"transform: rotate(90deg)\"\n  }, {\n    name: \"slider__rightArrow\",\n    src: \"assets/images/arrowDownWhite.png\",\n    alt: \"rightArrow\",\n    style: \"transform: rotate(-90deg)\"\n  }]; //constructor function for slider Carousel\n\n  function Carousel(slides, arrows, parrentClass) {\n    var _this2 = this;\n\n    //slides\n    this.slidesData = slides; //arrows for slider\n\n    this.arrowsData = arrows; //slides for Slides list\n\n    this.slidesData2 = this.slidesData.slice(); //getting parent element\n\n    this.skills = document.getElementsByClassName(parrentClass)[0]; //creating slider container\n\n    this.slider = document.createElement(\"div\");\n    this.slider.className = \"slider\"; //appending slider container to the site\n\n    this.skills.appendChild(this.slider); //creating container for slides\n\n    this.slidesContainer = document.createElement(\"div\");\n    this.slidesContainer.className = \"slider__container\"; //appending slides container to the place on the page\n\n    this.slider.appendChild(this.slidesContainer); //creating SlidesList\n\n    this.slidesBar = document.createElement(\"div\");\n    this.slidesBar.className = \"slider__bar\"; //function creating slides\n\n    this.createSlides = function (list, clName) {\n      return list.map(function (x, i) {\n        var slide = document.createElement(\"img\");\n        slide.src = x.src;\n        slide.alt = x.alt;\n        slide.setAttribute(\"key\", i);\n        slide.className = clName;\n        return slide;\n      });\n    }; //the same as above with arrows\n\n\n    this.createArrows = function (arrows) {\n      return arrows.map(function (x) {\n        var arrow = document.createElement(\"img\");\n        arrow.src = x.src;\n        arrow.className = x.name;\n        arrow.alt = x.alt;\n        arrow.style = x.style;\n        return arrow;\n      });\n    }; //add style to active slide on slidebar\n\n\n    this.sideBarActive = function (action) {\n      var el = _this2.slidesBar.childNodes[_this2.visibleSlide];\n\n      if (action === \"act\") {\n        el.classList.add(\"slider__bar__img--active\");\n      } else if (action === \"dis\") {\n        el.classList.remove(\"slider__bar__img--active\");\n      }\n    }; //slidechange onclick\n\n\n    this.slideChange = function (e) {\n      var el = e.target;\n\n      if (el.className === \"slider__leftArrow\" && _this2.visibleSlide > 0) {\n        _this2.sideBarActive(\"dis\");\n\n        _this2.visibleSlide--;\n\n        _this2.slideSwap(_this2.visibleSlide);\n      } else if (el.className === \"slider__rightArrow\" && _this2.visibleSlide < _this2.slides.length - 1) {\n        _this2.sideBarActive(\"dis\");\n\n        _this2.visibleSlide++;\n\n        _this2.slideSwap(_this2.visibleSlide);\n      } else if (el.hasAttribute(\"key\")) {\n        _this2.sideBarActive(\"dis\");\n\n        _this2.visibleSlide = el.getAttribute(\"key\");\n\n        _this2.slideSwap(_this2.visibleSlide);\n      }\n\n      ;\n\n      _this2.sideBarActive(\"act\");\n    }; //swap the slides\n\n\n    this.slideSwap = function (slide) {\n      var currentSlide = _this2.slidesContainer.childNodes[1];\n\n      var currentSlideNr = _this2.slidesContainer.childNodes[1].getAttribute(\"key\");\n\n      var styleLeft = \"transform: translate(-200px, 0); opacity: 0;  transition: all .2s\";\n      var styleRight = \"transform: translate(200px, 0); opacity: 0; transition: all .2s\";\n      var styleCentered = \"transform: translate(0px, 0); opacity: 1; transition: all .2s\";\n\n      if (slide < currentSlideNr) {\n        currentSlide.style = styleRight;\n        setTimeout(function () {\n          _this2.slidesContainer.removeChild(currentSlide);\n        }, 200);\n        setTimeout(function () {\n          _this2.slidesContainer.insertBefore(_this2.slides[_this2.visibleSlide], _this2.slidesContainer.childNodes[1]);\n\n          currentSlide = _this2.slidesContainer.childNodes[1];\n          currentSlide.style = styleLeft;\n        }, 200);\n        setTimeout(function () {\n          currentSlide.style = styleCentered;\n        }, 220);\n      } else if (slide > currentSlideNr) {\n        currentSlide.style = \"transform: translate(-200px, 0); opacity: 0; transition: all .2s\";\n        setTimeout(function () {\n          _this2.slidesContainer.removeChild(currentSlide);\n        }, 200);\n        setTimeout(function () {\n          _this2.slidesContainer.insertBefore(_this2.slides[_this2.visibleSlide], _this2.slidesContainer.childNodes[1]);\n\n          currentSlide = _this2.slidesContainer.childNodes[1];\n          currentSlide.style = \"transform: translate(200px, 0); opacity: 0;  transition: all .2s\";\n        }, 200);\n        setTimeout(function () {\n          currentSlide.style = \"transform: translate(0px, 0); opacity: 1; transition: all .2s\";\n        }, 220);\n      }\n    }; //creating actual slides\n\n\n    this.slides = this.createSlides(this.slidesData, \"slider__slide\");\n    this.slides2 = this.createSlides(this.slidesData2, \"slider__bar__img\"); //the same as above with arrows\n\n    this.arrows = this.createArrows(this.arrowsData); //appending items to SlideBar\n\n    this.slides2.forEach(function (x, i) {\n      _this2.slidesBar.appendChild(x);\n    }); //appending items to slidesContainer\n\n    this.slidesContainer.appendChild(this.arrows[0]);\n    this.slidesContainer.appendChild(this.slides[0]);\n    this.slidesContainer.appendChild(this.arrows[1]); //appending item to sliderContainer\n\n    this.slider.appendChild(this.slidesBar);\n    this.arrowsDOM = document.querySelectorAll(\".slider__leftArrow, .slider__rightArrow\");\n    this.visibleSlide = 0;\n    this.arrowsDOM.forEach(function (x) {\n      return addEventListener(\"click\", _this2.slideChange);\n    });\n    this.slidesBar.childNodes.forEach(function (x) {\n      return addEventListener(\"click\", _this2.slideChange);\n    });\n    this.sideBarActive(\"act\");\n    this.slidesContainer.childNodes[1].style.webkitTransition = \"all 1s\";\n    this.slidesContainer.childNodes[1].style = \"transform: translate(0, 0); opacity: 1; transition: all .2s\";\n  }\n\n  ;\n  var sliderApp = new Carousel(slidesData, arrowsData, \"skillsSection\");\n});\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/main.scss":
/*!***********************!*\
  !*** ./src/main.scss ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/main.scss?");

/***/ }),

/***/ "./src/normalize.css":
/*!***************************!*\
  !*** ./src/normalize.css ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/normalize.css?");

/***/ })

/******/ });