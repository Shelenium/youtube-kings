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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
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
/******/ 	return __webpack_require__(__webpack_require__.s = 11);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = appear;
function appear(id) {
  	var str = document.getElementById(id);
  		if (str.classList.contains('noDisplay')) {
    		str.classList.remove('noDisplay');
  	}
}

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = boxesOnPage;
function boxesOnPage() {
  	var n = Math.floor(window.innerWidth / 350);
  	if (n == 0) {
    	n = 1;
  	}
  	if (n > 4) {
  		n = 4;
  	}
  	return n;
}

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = createBox;
function createBox() {
  	var boxDiv = document.createElement('div');
  	boxDiv.id = 'boxDiv';

  	var boxImage = document.createElement('img');
  	var boxTitle = document.createElement('h2');
  	var boxA = document.createElement('a');
  	boxTitle.appendChild(boxA);
  	var boxAuthor = document.createElement('h3');
  	var boxData = document.createElement('p');
  	var boxStat = document.createElement('ul');
  		for (var i = 0; i < 3; i++) {
    		var boxLi = document.createElement('li');
    		var boxI = document.createElement('i');
    		boxLi.appendChild(boxI);
    		boxStat.appendChild(boxLi);
  		}
  	var boxDescr = document.createElement('p');
  	boxDiv.appendChild(boxImage);
  	boxDiv.appendChild(boxTitle);
  	boxDiv.appendChild(boxAuthor);
  	boxDiv.appendChild(boxData);
  	boxDiv.appendChild(boxStat);
  	boxDiv.appendChild(boxDescr);
  	document.getElementById('containerDiv').appendChild(boxDiv);
  	var boxDivEl = document.getElementById('boxDiv');
  	boxDivEl.classList.add('boxDiv');
  	boxDivEl.getElementsByTagName('img')[0].classList.add('boxImage');
  	boxDivEl.getElementsByTagName('p')[0].classList.add('boxData');
  	boxDivEl.getElementsByTagName('ul')[0].classList.add('boxStat', 'fa-ul');
  	boxDivEl.getElementsByTagName('p')[1].classList.add('boxDescr');
  	boxDivEl.getElementsByTagName('i')[0].classList.add('fa-li', 'fa', 'fa-eye');
  	boxDivEl.getElementsByTagName('i')[1].classList.add('fa-li', 'fa', 'fa-thumbs-o-up');
  	boxDivEl.getElementsByTagName('i')[2].classList.add('fa-li', 'fa', 'fa-thumbs-o-down');
}


/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = createNode;

function createNode(tag,text){
	var elem = document.createElement(tag);
	elem.appendChild(text);
	return elem;
}

/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = createPaging;
function createPaging(check) {
	if (!check) {
  		var paging = document.createElement('ul');
  		var pagingH6 = document.createElement('h6');
  		var pagingSpan = document.createElement('span');
  		pagingSpan.id = 'pagingSpan';
 			for (var i = 0; i < 3; i++) {
    			var pagingLi = document.createElement('li');
    			var pagingI = document.createElement('i');
    				if (i % 2 == 0) {
      					pagingLi.appendChild(pagingI);
    				} else {
     					pagingLi.appendChild(pagingH6);
     					pagingLi.appendChild(pagingSpan);
    				}
    			paging.appendChild(pagingLi);
  			}
  		var SearchEl = document.getElementById('stringSearch');
  		SearchEl.appendChild(paging);
  		SearchEl.getElementsByTagName('ul')[0].classList.add('paging', 'fa-ul');
  		SearchEl.getElementsByTagName('i')[0].classList.add('fa', 'fa-arrow-left');
  		SearchEl.getElementsByTagName('i')[1].classList.add('fa', 'fa-arrow-right');
  		var iLeft = SearchEl.getElementsByTagName('li')[0];
  		iLeft.id = 'iLeft';
  		var iRight = SearchEl.getElementsByTagName('li')[2];
  		iRight.id = 'iRight';
	}
}

/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = deleteElem;
function deleteElem(id) {
	if (document.getElementById(id)) {
	document.getElementById(id).outerHTML = '';
	delete document.getElementById(id);
	}
}

/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = firstActiveDiv;
function firstActiveDiv() {
  	var coll = document.getElementsByClassName('active');
  	if (coll[0]) { 
  		var idNumber = coll[0].id;
  		return (idNumber.slice(6) - 0); 
	} else { 
		return (-1); 
	}
}

/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = make;
function make(id,func) {
	var elemId = document.getElementById(id);
 	if (elemId.classList.contains('disabled')) {
		elemId.classList.remove('disabled');
    	elemId.addEventListener('click', func);
  	}
}

/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = makeDisable;
function makeDisable(id,func) {
	var elemId = document.getElementById(id);
	if (elemId) {
	  	if (!elemId.classList.contains('disabled')) {
	    	elemId.classList.add('disabled');
	    	elemId.removeEventListener('click', func);
	  	}
	}
}

/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = showActiveBox;
function showActiveBox(start, amount) {
  	for (var i = start; i < start + amount; i++) {
    	var active = document.getElementById('boxDiv' + i);
    	if (active) {
    		active.classList.add('active');
    	}
  	}
}

/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = timespanToHumanString;
function timespanToHumanString(startDate, endDate) {
  	var inter = new Date(endDate) - new Date(startDate);
  	var mess = '';
  	var minute = 60000,
    hour = 3600000,
    day = 86400000,
    month = 2628000000,
    year = 3.1536e+10;

  switch (true) {
    case inter <= 45000:
      mess = 'a few seconds ago';
      break;
    case inter <= 90000:
      mess = 'a minute ago';
      break;
    case inter <= 2700000:
      mess = -Math.round(-inter / minute) + ' minutes ago';
      break;
    case inter <= 5400000:
      mess = 'an hour ago';
      break;
    case inter <= 79200000:
      mess = -Math.round(-inter / hour) + ' hours ago';
      break;
    case inter <= 129600000:
      mess = 'a day ago';
      break;
    case inter <= 2160000000:
      mess = -Math.round(-inter / day) + ' days ago';
      break;
    case inter <= 3888000000:
      mess = 'a month ago';
      break;
    case inter <= 2.9808e+10:
      mess = -Math.round(-inter / month) + ' months ago';
      break;
    case inter <= 4.7088e+10:
      mess = 'a year ago';
      break;
    case inter > 4.7088e+10:
      mess = Math.round(inter / year) + ' years ago';
      break;

  }

  return mess;
}

/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__timespanToHumanString__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__deleteElem__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__boxesOnPage__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__appear__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__createPaging__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__createNode__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__makeDisable__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__createBox__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__make__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__showActiveBox__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__firstActiveDiv__ = __webpack_require__(6);
var startBoxNumber = 0;
var currentStart = 0;
var boxLoadAmount = 15;
var endBoxNumber = 15;
var totalAmount;
var likeAmount = [],
  dislikeAmount = [],
  viewAmount = [];
var stat;
var boxAmount;
var nextTokenP;
var video;
var str, str1, str2;
var pagingCreate = false;
var finishPage = false;
var firstRight = true;
var input = '';
var startX, startY, finishX, finishY;

//----------------------- create page -----------------------------//
startPage();



function startPage() { // creating main elements on page
  	var mainDiv = document.createElement('div');
  	var titleNode = document.createTextNode("Youtube kings");
  	var title = document.createElement('h1');
  	var formSearch = document.createElement('form');
  	var input = document.createElement('input');
  	var stringSearch = document.createElement('div');

  	mainDiv.id = 'mainDiv';
  	stringSearch.id = 'stringSearch';
  	title.appendChild(titleNode);
  	mainDiv.appendChild(title);
  	input.id = 'inputSearch';
  	input.name = 'inputSearch';
  	input.type = 'text';
  	formSearch.action = 'javascript:void(-1)';

  	input.placeholder = 'I am looking for...';
  	formSearch.id = 'formSearch';
  	formSearch.appendChild(input);
  	mainDiv.appendChild(formSearch);
  	document.getElementsByTagName('body')[0].appendChild(mainDiv);
  	document.getElementById('mainDiv').appendChild(stringSearch);
  	document.getElementsByTagName('div')[0].classList.add('main-div');

  	input.onchange = prevent; 
  	window.onresize = resize;
}


function prevent(e) { // 
  	e.preventDefault();
  	startBoxNumber = 0;
  	currentStart = 0;
  	boxLoadAmount = 15;
  	endBoxNumber = 15;
 
  	finishPage = false;
  	firstRight = true;

  	likeAmount = [], dislikeAmount = [], viewAmount = [];
  	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__deleteElem__["a" /* default */])('containerDiv');
  	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__deleteElem__["a" /* default */])('topH5string');
  	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__deleteElem__["a" /* default */])('topH5paging');
  
  	document.getElementById('inputSearch').blur();
  	init(); // set key for request
}

function init() {
  	gapi.client.setApiKey("AIzaSyDsORwX58-BfLOXHNY67u1IJS9kjgBMizA");
  	gapi.client.load('youtube', 'v3', function() {
    	createContainer(); // create conteiner for youtube box
    	makeRequest(); // send first request 
  	});
}

function onTop() {
  	var str1 = document.createTextNode('Results for "' + input + '". Page ' + document.getElementsByTagName('h6')[0].innerHTML + ' from ' + Math.ceil(totalAmount/__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__boxesOnPage__["a" /* default */])()));
  	var str2 = document.createTextNode('Hi, Stranger! It is page ' + document.getElementsByTagName('h6')[0].innerHTML + ' from ' + Math.ceil(totalAmount/__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__boxesOnPage__["a" /* default */])()));
  	var topH5string = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__createNode__["a" /* default */])('h5',str1);
  	var topH5paging = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__createNode__["a" /* default */])('h5',str2);
  	topH5string.id = 'topH5string';
  	topH5paging.id = 'topH5paging';
  	document.getElementById('stringSearch').appendChild(topH5string);
  	document.getElementById('pagingSpan').appendChild(topH5paging);
};

function onFinish() {
  	allBoxNoAction();
  	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__makeDisable__["a" /* default */])('iRight', goRight);
  	var str = document.createTextNode(':( ' + ' There is no result for the "' + input + '".');
  	var finish = document.createElement('h4');
  	finish.appendChild(str);
  	finish.id = 'finish';
  	document.getElementById('mainDiv').appendChild(finish);
};



function makeRequest() {
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__deleteElem__["a" /* default */])('finish')
  	endBoxNumber = startBoxNumber + boxLoadAmount;
  	input = document.getElementById('inputSearch').value;
  		if (input != '') {
    		var request = gapi.client.youtube.search.list({
      			q: encodeURIComponent(input).replace(/%20/g, "+"),
      			part: 'snippet',
      			type: 'video',
      			maxResults: boxLoadAmount
    		});

		    request.execute(function(response) {
		      	video = response.result.items;
		      	totalAmount = response.result.pageInfo.totalResults;
		       		if (totalAmount < boxLoadAmount) {
		       		//	finishPage = true;
		       			endBoxNumber = totalAmount;
		      		}
		      		if (totalAmount == 0) {
		      			finishPage = true;
		      			onFinish();
		      		}
		      		if (totalAmount < __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__boxesOnPage__["a" /* default */])()) {
		      			finishPage = true;
		      		}
		      	nextTokenP = response.result.nextPageToken;
		      	str = '';
		      	for (var i = startBoxNumber; i < endBoxNumber; i++) {
		        	str = str + ', ' + response.result.items[i].id.videoId;
		      	}

			    Stat(function() {
			      	if (finishPage) {
			      		boxAmount = endBoxNumber%__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__boxesOnPage__["a" /* default */])(); 
			      	} else {
			      		boxAmount = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__boxesOnPage__["a" /* default */])();
			      	}
			        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_9__showActiveBox__["a" /* default */])(currentStart, boxAmount);
			        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__createPaging__["a" /* default */])(pagingCreate);
              pagingCreate = true;
			        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__makeDisable__["a" /* default */])('iLeft', goLeft);
			        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__makeDisable__["a" /* default */])('iRight', goRight);
			        	if (!finishPage) { 
			        		__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_8__make__["a" /* default */])('iRight', goRight);
			    		}
			        updatePaging();
			        onTop();
			     });

		    }); //end request.execute

  		} //end if (input_val != '')
} //end makeRequest
     
function Stat(callback) {
    var requestStat = gapi.client.youtube.videos.list({
        part: 'statistics',
        id: str
    });

    requestStat.execute(function(response) {
        stat = response.result.items;
        	for (var i = startBoxNumber; i < endBoxNumber; i++) {
            	fillBox(i, video, stat);
          	}
          callback();
    });

}
      
function takeNextPage() {
    endBoxNumber = startBoxNumber + boxLoadAmount;
      	if (endBoxNumber >= totalAmount) {
      		endBoxNumber = totalAmount;
      	}

	  	if (input != '') {
	        var request = gapi.client.youtube.search.list({
	          	q: encodeURIComponent(input).replace(/%20/g, "+"),
	          	part: 'snippet',
	          	type: 'video',
	          	pageToken: nextTokenP,
	          	maxResults: boxLoadAmount
	        });

	        request.execute(function(response) {
	          	video = response.result.items;
	          	nextTokenP = response.result.nextPageToken;
	  		  		if (video.length < boxLoadAmount) {
	  		  	 		endBoxNumber -= boxLoadAmount-video.length;
	  		  		}
	          	str = '';
	          	for (var i = startBoxNumber; i < endBoxNumber; i++) {
	            	str = str + ', ' + response.result.items[i%15].id.videoId;
	          	}

		        Stat(function() {
		        	boxAmount = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__boxesOnPage__["a" /* default */])();
		        	updatePaging();
		      	});

	        });
	    }
}



function goRight() {
  	boxAmount = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__boxesOnPage__["a" /* default */])();
  	currentStart += boxAmount;
  	if (currentStart+boxAmount > totalAmount) {
		finishPage = true;
		__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__makeDisable__["a" /* default */])('iRight', goRight);
		boxAmount = totalAmount-currentStart;		
	}
  	if ((firstRight)&&(nextTokenP)) { 
  		startBoxNumber += boxLoadAmount;
  		takeNextPage(); 
  		firstRight = false;
  	}
  	if (document.getElementById('boxDiv'+ currentStart)) {
  		allBoxNoAction();
  		__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_9__showActiveBox__["a" /* default */])(currentStart, boxAmount);
  		var check = currentStart + boxLoadAmount;
 
		 if (check >= endBoxNumber) { 
		  	firstRight = true; 
		 }
  			updatePaging();
  			__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_8__make__["a" /* default */])('iLeft', goLeft);
	}
}

function goLeft() {
  	boxAmount = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__boxesOnPage__["a" /* default */])();
  	if (currentStart < boxAmount) {
    	currentStart = 0;
  	} else {
    	currentStart -= boxAmount;
  	}

	 allBoxNoAction();
	 __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_9__showActiveBox__["a" /* default */])(currentStart, boxAmount);
	 updatePaging();
	 __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_8__make__["a" /* default */])('iRight', goRight);

	if (currentStart == 0) {
		 __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__makeDisable__["a" /* default */])('iLeft', goLeft);
	}
}

function allBoxNoAction() {
  	var el = document.getElementsByClassName('boxDiv');
  	for (var i = 0; i < el.length; i++) {
    	if (el[i].classList.contains('active')) {
      		el[i].classList.remove('active');
    	}
  	}
}


function resize() {
  	var number = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_10__firstActiveDiv__["a" /* default */])();
  	allBoxNoAction();
  	boxAmount = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__boxesOnPage__["a" /* default */])();
  		if (number >= 0) {
			__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_9__showActiveBox__["a" /* default */])(number, boxAmount);
  		}
  	updatePaging();
}

function fillBox(i, video, stat) {

  	function attrPush(arg) {
    	var val = document.createTextNode(arg) || '';
    	boxStatNode.push(val);
  	}
  
  	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_7__createBox__["a" /* default */])();
  	document.getElementById('boxDiv').id = 'boxDiv' + i;
  	var divI = document.getElementById('boxDiv' + i);
  	divI.getElementsByClassName('boxImage')[0].src = video[i%15].snippet.thumbnails.medium.url;
  	var boxTitleNode = document.createTextNode(video[i%15].snippet.title);
  	divI.getElementsByTagName('a')[0].appendChild(boxTitleNode);
  	divI.getElementsByTagName('a')[0].href = 'https://www.youtube.com/watch?v=' + video[i%15].id.videoId;
  	divI.getElementsByTagName('a')[0].target = '_blank';
  	var boxAuthorNode = document.createTextNode(video[i%15].snippet.channelTitle);
  	var boxDescrNode = document.createTextNode(video[i%15].snippet.description);
  	var boxDataNode = document.createTextNode(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__timespanToHumanString__["a" /* default */])(video[i%15].snippet.publishedAt, new Date()));
  	var boxStatNode = [];

  	attrPush(stat[i%15].statistics.viewCount);
  	attrPush(stat[i%15].statistics.likeCount);
  	attrPush(stat[i%15].statistics.dislikeCount);

  	for (var j = 0; j < 3; j++) {
    	divI.getElementsByTagName('li')[j].appendChild(boxStatNode[j]);
  	}

  	divI.getElementsByTagName('h3')[0].appendChild(boxAuthorNode);
  	divI.getElementsByClassName('boxData')[0].appendChild(boxDataNode);
  	divI.getElementsByClassName('boxDescr')[0].appendChild(boxDescrNode);
}


function createContainer() {
  	var containerDiv = document.createElement('div');
  	containerDiv.id = 'containerDiv';
  	document.getElementsByTagName('body')[0].appendChild(containerDiv);
  	document.getElementById('containerDiv').classList.add('containerDiv');
  	
  	var htmlEl = document.getElementsByTagName('html')[0];
	addMultipleListeners(htmlEl, 'mousedown touchstart', swipeStart);
	addMultipleListeners(htmlEl, 'mousemove touchmove', swipeMove);
	addMultipleListeners(htmlEl, 'mouseup touchend', swipeEnd);
}


function updatePaging() {
  	if (document.getElementById('stringSearch')) { 
  		__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__appear__["a" /* default */])('stringSearch'); 
  	}
  	var number = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_10__firstActiveDiv__["a" /* default */])();
  		if (number < 0) { 
  			number = 0; 
  		}
  	boxAmount = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__boxesOnPage__["a" /* default */])();
  	var numberPage = Math.ceil(number / boxAmount)+1;
  	document.getElementsByTagName('h6')[0].innerHTML = numberPage;
  		if ((document.getElementsByTagName('h5')[0])&&(document.getElementsByTagName('h5')[1])) {
  			str1 = 'Results for "' + input + '". Page ' + numberPage + ' from ' + Math.ceil(totalAmount/__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__boxesOnPage__["a" /* default */])());
  			str2 = 'Nice to see you again! It is page ' + document.getElementsByTagName('h6')[0].innerHTML + ' from ' + Math.ceil(totalAmount/__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__boxesOnPage__["a" /* default */])());
        document.getElementsByTagName('h5')[0].innerHTML = str2;
  			document.getElementsByTagName('h5')[1].innerHTML = str1;
		}
}
















//----------------------   DetectSwipe   ---------------------------//


	var touchStartCoords =  {'x':-1, 'y':-1}, // X and Y coordinates on mousedown or touchstart events.
    touchEndCoords = {'x':-1, 'y':-1},// X and Y coordinates on mouseup or touchend events.
    direction = 'undefined',// Swipe direction
    minDistanceXAxis = 20,// Min distance on mousemove or touchmove on the X axis
    maxDistanceYAxis = 20,// Max distance on mousemove or touchmove on the Y axis
    maxAllowedTime = 1000,// Max allowed time between swipeStart and swipeEnd
    startTime = 0,// Time on swipeStart
    elapsedTime = 0,// Elapsed time between swipeStart and swipeEnd
    targetElement = document.getElementById('el');// Element to delegate

function swipeStart(e) {
  e = e ? e : window.event;
  e = ('changedTouches' in e)?e.changedTouches[0] : e;
  touchStartCoords = {'x':e.pageX, 'y':e.pageY};
  startTime = new Date().getTime();
}

function swipeMove(e){
  e = e ? e : window.event;
  e.preventDefault();
}

function swipeEnd(e) {
  e = e ? e : window.event;
  e = ('changedTouches' in e)?e.changedTouches[0] : e;
  touchEndCoords = {'x':e.pageX - touchStartCoords.x, 'y':e.pageY - touchStartCoords.y};
  elapsedTime = new Date().getTime() - startTime;
  if (elapsedTime <= maxAllowedTime){
    if (Math.abs(touchEndCoords.x) >= minDistanceXAxis && Math.abs(touchEndCoords.y) <= maxDistanceYAxis){
      direction = (touchEndCoords.x < 0)? 'left' : 'right';
      switch(direction){
        case 'left':
          goRight();
          break;
        case 'right':
          goLeft();
          break;
      }
    }
  }
}

function addMultipleListeners(el, s, fn) {
  var evts = s.split(' ');
  for (var i=0, iLen=evts.length; i<iLen; i++) {
    el.addEventListener(evts[i], fn, false);
  }
}







/***/ })
/******/ ]);