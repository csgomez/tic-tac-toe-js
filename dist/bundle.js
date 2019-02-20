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
/******/ 	return __webpack_require__(__webpack_require__.s = "./js/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./js/controller.js":
/*!**************************!*\
  !*** ./js/controller.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Controller; });\nclass Controller {\n  constructor(model, view) {\n    this.model = model;\n    this.view = view;\n\n    view.bindHandleClick(this.handleCellClick.bind(this));\n  }\n\n  start() {\n    console.log('The tic-tac-toe app has started!');\n    this.view.setCurrentPlayerView(this.model.players[0].symbol);\n  }\n\n  handleCellClick(cellIndex) {\n    this.model.makeMove(cellIndex, this.view.renderMove.bind(this.view));\n    this.model.checkForEndState(cellIndex, this.view.renderEndState.bind(this.view));\n  }\n\n}\n\n\n//# sourceURL=webpack:///./js/controller.js?");

/***/ }),

/***/ "./js/helpers.js":
/*!***********************!*\
  !*** ./js/helpers.js ***!
  \***********************/
/*! exports provided: qs, qsa, onClick, cellToRowColumn, areEqual */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"qs\", function() { return qs; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"qsa\", function() { return qsa; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"onClick\", function() { return onClick; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"cellToRowColumn\", function() { return cellToRowColumn; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"areEqual\", function() { return areEqual; });\nconst qs = (selector, scope) => {\n  return (scope || document).querySelector(selector);\n};\n\nconst qsa = (selector, scope) => {\n  return (scope || document).querySelectorAll(selector);\n};\n\nconst onClick = (target, handler) => {\n  target.addEventListener('click', handler);\n};\n\nconst cellToRowColumn = cellIndex => {\n  return [cellIndex % 3, Math.floor(cellIndex / 3)];\n};\n\nconst areEqual = (cellOne, cellTwo, cellThree) => {\n  return (cellOne === cellTwo) && (cellTwo === cellThree);\n};\n\n\n//# sourceURL=webpack:///./js/helpers.js?");

/***/ }),

/***/ "./js/index.js":
/*!*********************!*\
  !*** ./js/index.js ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _controller__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./controller */ \"./js/controller.js\");\n/* harmony import */ var _model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./model */ \"./js/model.js\");\n/* harmony import */ var _view__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./view */ \"./js/view.js\");\n\n\n\n\nconst model = new _model__WEBPACK_IMPORTED_MODULE_1__[\"default\"]();\nconst view = new _view__WEBPACK_IMPORTED_MODULE_2__[\"default\"]();\n\nconst controller = new _controller__WEBPACK_IMPORTED_MODULE_0__[\"default\"](model, view);\n\nwindow.addEventListener('load', () => {\n  controller.start();\n});\n\n\n//# sourceURL=webpack:///./js/index.js?");

/***/ }),

/***/ "./js/model.js":
/*!*********************!*\
  !*** ./js/model.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Model; });\n/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helpers */ \"./js/helpers.js\");\n\n\nconst EMPTY = '__EMPTY__';\n\nconst playerX = {\n  symbol: 'X'\n};\n\nconst playerO = {\n  symbol: 'O'\n};\n\nclass Model {\n  constructor() {\n    this.board = [\n      [ EMPTY, EMPTY, EMPTY ],\n      [ EMPTY, EMPTY, EMPTY ],\n      [ EMPTY, EMPTY, EMPTY ],\n    ];\n    this.players = [ playerX, playerO ];\n    this.moveCount = 0;\n    this.currentPlayer = null;\n    this.currentMove = null;\n    this.currentMoveRow = null;\n    this.currentMoveColumn = null;\n  }\n\n  makeMove(cellIndex, callback) {\n    this.currentMove = cellIndex;\n\n    this.updateCurrentPlayer();\n    this.updateCurrentRowColumn();\n    this.updateBoardState();\n    this.moveCount++;\n\n    callback(cellIndex, this.currentPlayer.symbol, this.nextPlayer.symbol);\n  }\n\n  updateCurrentPlayer() {\n    this.currentPlayer = this.players[this.moveCount % 2];\n  }\n\n  updateCurrentRowColumn() {\n    this.currentMoveRow = this.currentMove % 3;\n    this.currentMoveColumn = Math.floor(this.currentMove / 3);\n  }\n\n  updateBoardState() {\n    this.board[this.currentMoveRow][this.currentMoveColumn] = this.currentPlayer.symbol;\n  }\n\n  get nextPlayer() {\n    return (this.currentPlayer === playerX) ? playerX : playerO;\n  }\n\n  // the callback renders the given end state of the board\n  checkForEndState(moveIndex, callback) {\n    if (this.isRowEqual) {\n      callback('winner', 'row', this.currentMoveRow);\n    } else if (this.isColumnEqual) {\n      callback('winner', 'column', this.currentMoveColumn);\n    } else if (this.isLTRDiagonalEqual) {\n      callback('winner', 'diagonal', 0);\n    } else if (this.isRTLDiagonalEqual) {\n      callback('winner', 'diagonal', 1)\n    } else if (this.moveCount === 9) {\n      callback('stalemate');\n    }\n  }\n\n  get isRowEqual() {\n    return Object(_helpers__WEBPACK_IMPORTED_MODULE_0__[\"areEqual\"])(\n        this.board[this.currentMoveRow][0],\n        this.board[this.currentMoveRow][1],\n        this.board[this.currentMoveRow][2]\n    );\n  }\n\n  get isColumnEqual() {\n    return Object(_helpers__WEBPACK_IMPORTED_MODULE_0__[\"areEqual\"])(\n        this.board[0][this.currentMoveColumn],\n        this.board[1][this.currentMoveColumn],\n        this.board[2][this.currentMoveColumn]\n    );\n  }\n\n  get isLTRDiagonalEqual() {\n    return this.isMoveOnLTRDiagonal && Object(_helpers__WEBPACK_IMPORTED_MODULE_0__[\"areEqual\"])(this.board[0][0], this.board[1][1], this.board[2][2]);\n  }\n\n  get isRTLDiagonalEqual() {\n    return this.isMoveOnRTLDiagonal && Object(_helpers__WEBPACK_IMPORTED_MODULE_0__[\"areEqual\"])(this.board[0][2], this.board[1][1], this.board[2][0]);\n  }\n\n  get isMoveOnLTRDiagonal() {\n    return (this.currentMove === 0) || (this.currentMove === 4) || (this.currentMove === 8);\n  }\n\n  get isMoveOnRTLDiagonal() {\n    return (this.currentMove === 2) || (this.currentMove === 4) || (this.currentMove === 6);\n  }\n\n  isDiagonalEqual(moveIndex) {\n    // only odd-numbered indexes are in diagonals\n    if (moveIndex % 2 !== 0) {\n      return false;\n    }\n\n    // the center cell is within both diagonals\n    if (moveIndex === 4) {\n      return Object(_helpers__WEBPACK_IMPORTED_MODULE_0__[\"areEqual\"])(this.board[0][0], this.board[1][1], this.board[2][2])\n    }\n\n    // top-left to bottom-right\n    if (moveIndex === 0 || moveIndex === 4 || moveIndex === 8) {\n      return Object(_helpers__WEBPACK_IMPORTED_MODULE_0__[\"areEqual\"])(this.board[0][0], this.board[1][1], this.board[2][2]);\n    }\n\n    // top-right to bottom-left\n    if (moveIndex === 2 || moveIndex === 4 || moveIndex === 6) {\n      return Object(_helpers__WEBPACK_IMPORTED_MODULE_0__[\"areEqual\"])(this.board[0][2], this.board[1][1], this.board[2][0]);\n    }\n  }\n}\n\n\n//# sourceURL=webpack:///./js/model.js?");

/***/ }),

/***/ "./js/view.js":
/*!********************!*\
  !*** ./js/view.js ***!
  \********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return View; });\n/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helpers */ \"./js/helpers.js\");\n\n\nclass View {\n  constructor() {\n    this.board = Object(_helpers__WEBPACK_IMPORTED_MODULE_0__[\"qs\"])('#board');\n    this.cells = Object(_helpers__WEBPACK_IMPORTED_MODULE_0__[\"qsa\"])('.cell');\n    this.currentPlayerView = Object(_helpers__WEBPACK_IMPORTED_MODULE_0__[\"qs\"])('#current_player');\n  }\n\n  bindHandleClick(handler) {\n    for (let cellIndex = 0; cellIndex < this.cells.length; cellIndex++) {\n      Object(_helpers__WEBPACK_IMPORTED_MODULE_0__[\"onClick\"])(this.cells[cellIndex], () => {\n        handler(cellIndex);\n      })\n    }\n  }\n\n  setCurrentPlayerView(playerSymbol) {\n    this.currentPlayerView.textContent = playerSymbol;\n  }\n\n  renderMove(cellIndex, playerSymbol, nextPlayerSymbol) {\n    this.cells[cellIndex].textContent = playerSymbol;\n    this.setCurrentPlayerView(nextPlayerSymbol);\n  }\n\n  // state - { 'winner' , 'stalemate' }\n  // winCondition - { 'row' , 'column' , 'diagonal' }\n  // winValue - { 'rowNum' , 'columnNum' , '0 - ltr || 1 - rtl' }\n  renderEndState(state, winCondition, winValue) {\n    if (state === 'winner') {\n      if (winCondition === 'row') {\n        this.renderRowWin(winValue);\n      } else if (winCondition === 'column') {\n        this.renderColumnWin(winValue);\n      } else if (winCondition === 'diagonal') {\n        this.renderDiagonalWin(winValue);\n      }\n    } else if (state === 'stalemate') {\n      this.renderStalemate();\n    }\n  }\n\n  renderRowWin(rowNum) {\n    console.log(`ROW ${rowNum} HAS WON`);\n  }\n\n  renderColumnWin(columnNum) {\n    console.log(`COLUMN ${columnNum} HAS WON`);\n  }\n\n  // 0 - top left to bottom right\n  // 1 - top right to bottom left\n  renderDiagonalWin(diagonalNum) {\n    if (diagonalNum === 0) {\n      console.log('TOP LEFT TO BOTTOM RIGHT HAS WON');\n    } else {\n      console.log('TOP RIGHT TO BOTTOM LEFT HAS WON');\n    }\n  }\n\n\n  renderStalemate() {\n    console.log('STALEMATE HAS OCCURRED!');\n  }\n}\n\n\n//# sourceURL=webpack:///./js/view.js?");

/***/ })

/******/ });