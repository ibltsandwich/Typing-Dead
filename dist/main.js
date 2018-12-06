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

/***/ "./src/dictionary.js":
/*!***************************!*\
  !*** ./src/dictionary.js ***!
  \***************************/
/*! exports provided: randomWord */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"randomWord\", function() { return randomWord; });\nconst words = [\"ability\", \"able\", \"about\", \"above\", \"accept\", \"according\", \"account\", \"across\",\n  \"act\", \"action\", \"activity\", \"actually\", \"add\", \"address\",\n  \"admit\", \"adult\", \"affect\", \"after\", \"again\", \"against\", \"age\", \"agency\",\n  \"agent\", \"ago\", \"agree\", \"agreement\", \"ahead\", \"air\", \"all\", \"allow\", \"almost\",\n  \"alone\", \"along\", \"already\", \"also\", \"although\", \"always\", \"American\", \"among\",\n  \"amount\", \"analysis\", \"and\", \"animal\", \"another\", \"answer\", \"any\", \"anyone\",\n  \"anything\", \"appear\", \"apply\", \"approach\", \"area\", \"argue\", \"arm\", \"around\",\n  \"arrive\", \"art\", \"article\", \"artist\", \"ask\", \"assume\", \"attack\",\n  \"attention\", \"attorney\", \"audience\", \"author\", \"authority\", \"available\",\n  \"avoid\", \"away\", \"baby\", \"back\", \"bad\", \"bag\", \"ball\", \"bank\", \"bar\", \"base\",\n  \"be\", \"beat\", \"beautiful\", \"because\", \"become\", \"bed\", \"before\", \"begin\",\n  \"behavior\", \"behind\", \"believe\", \"benefit\", \"best\", \"better\", \"between\",\n  \"beyond\", \"big\", \"bill\", \"billion\", \"bit\", \"black\", \"blood\", \"blue\", \"board\",\n  \"body\", \"book\", \"born\", \"both\", \"box\", \"boy\", \"break\", \"bring\", \"brother\",\n  \"budget\", \"build\", \"building\", \"business\", \"but\", \"buy\", \"call\",\n  \"camera\", \"campaign\", \"can\", \"cancer\", \"candidate\", \"capital\", \"car\",\n  \"card\", \"care\", \"career\", \"carry\", \"case\", \"catch\", \"cause\", \"cell\", \"center\",\n  \"central\", \"century\", \"certain\", \"certainly\", \"chair\", \"challenge\", \"chance\",\n  \"change\", \"character\", \"charge\", \"check\", \"child\", \"choice\", \"choose\", \"church\",\n  \"citizen\", \"city\", \"civil\", \"claim\", \"class\", \"clear\", \"clearly\", \"close\",\n  \"coach\", \"cold\", \"collection\", \"college\", \"color\", \"come\", \"commercial\",\n  \"common\", \"community\", \"company\", \"compare\", \"computer\", \"concern\",\n  \"condition\", \"conference\", \"Congress\", \"consider\", \"consumer\", \"contain\",\n  \"continue\", \"control\", \"cost\", \"could\", \"country\", \"couple\", \"course\",\n  \"court\", \"cover\", \"create\", \"crime\", \"cultural\", \"culture\", \"cup\", \"current\",\n  \"customer\", \"cut\", \"dark\", \"data\", \"daughter\", \"day\", \"dead\", \"deal\", \"death\",\n  \"debate\", \"decade\", \"decide\", \"decision\", \"deep\", \"defense\", \"degree\",\n  \"democratic\", \"describe\", \"design\", \"despite\", \"detail\",\n  \"determine\", \"develop\", \"development\", \"die\", \"difference\", \"different\",\n  \"difficult\", \"dinner\", \"direction\", \"director\", \"discover\", \"discuss\",\n  \"discussion\", \"disease\", \"do\", \"doctor\", \"dog\", \"door\", \"down\", \"draw\",\n  \"dream\", \"drive\", \"drop\", \"drug\", \"during\", \"each\", \"early\", \"east\", \"easy\",\n  \"eat\", \"economic\", \"economy\", \"edge\", \"education\", \"effect\", \"effort\", \"eight\",\n  \"either\", \"election\", \"else\", \"employee\", \"end\", \"energy\", \"enjoy\", \"enough\",\n  \"enter\", \"entire\", \"environment\", \"environmental\", \"especially\", \"establish\",\n  \"even\", \"evening\", \"event\", \"ever\", \"every\", \"everybody\", \"everyone\",\n  \"everything\", \"evidence\", \"exactly\", \"example\", \"executive\", \"exist\",\n  \"expect\", \"experience\", \"expert\", \"explain\", \"eye\", \"face\", \"fact\", \"factor\",\n  \"fail\", \"fall\", \"family\", \"far\", \"fast\", \"father\", \"fear\", \"federal\", \"feel\",\n  \"feeling\", \"few\", \"field\", \"fight\", \"figure\", \"fill\", \"film\", \"final\",\n  \"finally\", \"financial\", \"find\", \"fine\", \"finger\", \"finish\", \"fire\", \"firm\",\n  \"first\", \"fish\", \"five\", \"floor\", \"fly\", \"focus\", \"follow\", \"food\", \"foot\",\n  \"for\", \"force\", \"foreign\", \"forget\", \"form\", \"former\", \"forward\", \"four\",\n  \"free\", \"friend\", \"from\", \"front\", \"full\", \"fund\", \"future\", \"game\", \"garden\",\n  \"gas\", \"general\", \"generation\", \"get\", \"girl\", \"give\", \"glass\", \"go\", \"goal\",\n  \"good\", \"government\", \"great\", \"green\", \"ground\", \"group\", \"grow\", \"growth\",\n  \"guess\", \"gun\", \"guy\", \"hair\", \"half\", \"hand\", \"hang\", \"happen\", \"happy\", \"hard\",\n  \"have\", \"he\", \"head\", \"health\", \"hear\", \"heart\", \"heat\", \"heavy\", \"help\", \"her\",\n  \"here\", \"herself\", \"high\", \"him\", \"himself\", \"his\", \"history\", \"hit\", \"hold\",\n  \"home\", \"hope\", \"hospital\", \"hot\", \"hotel\", \"hour\", \"house\", \"how\", \"however\",\n  \"huge\", \"human\", \"hundred\", \"husband\", \"idea\", \"identify\", \"image\",\n  \"imagine\", \"impact\", \"important\", \"improve\", \"include\", \"including\",\n  \"increase\", \"indeed\", \"indicate\", \"individual\", \"industry\", \"information\",\n  \"inside\", \"instead\", \"institution\", \"interest\", \"interesting\", \"international\",\n  \"interview\", \"into\", \"investment\", \"involve\", \"issue\", \"it\", \"item\", \"its\",\n  \"itself\", \"job\", \"join\", \"just\", \"keep\", \"key\", \"kid\", \"kill\", \"kind\", \"kitchen\",\n  \"know\", \"knowledge\", \"land\", \"language\", \"large\", \"last\", \"late\", \"later\",\n  \"laugh\", \"law\", \"lawyer\", \"lay\", \"lead\", \"leader\", \"learn\", \"least\", \"leave\",\n  \"left\", \"leg\", \"legal\", \"less\", \"let\", \"letter\", \"level\", \"lie\", \"life\", \"light\",\n  \"like\", \"likely\", \"line\", \"list\", \"listen\", \"little\", \"live\", \"local\", \"long\",\n  \"look\", \"lose\", \"loss\", \"lot\", \"love\", \"low\", \"machine\", \"magazine\", \"main\",\n  \"maintain\", \"major\", \"majority\", \"make\", \"man\", \"manage\", \"management\",\n  \"manager\", \"many\", \"market\", \"marriage\", \"material\", \"matter\", \"may\", \"maybe\",\n  \"mean\", \"measure\", \"media\", \"medical\", \"meet\", \"meeting\", \"member\",\n  \"memory\", \"mention\", \"message\", \"method\", \"middle\", \"might\", \"military\",\n  \"million\", \"mind\", \"minute\", \"miss\", \"mission\", \"model\", \"modern\", \"moment\",\n  \"money\", \"month\", \"more\", \"morning\", \"most\", \"mother\", \"mouth\", \"move\",\n  \"movement\", \"movie\", \"much\", \"music\", \"must\", \"myself\",\n  \"name\", \"nation\", \"national\", \"natural\", \"nature\", \"near\", \"nearly\",\n  \"necessary\", \"need\", \"network\", \"never\", \"new\", \"news\", \"newspaper\", \"next\",\n  \"nice\", \"night\", \"none\", \"nor\", \"north\", \"not\", \"note\", \"nothing\",\n  \"notice\", \"now\", \"number\", \"occur\", \"off\", \"offer\", \"office\",\n  \"officer\", \"official\", \"often\", \"oil\", \"old\", \"once\", \"one\",\n  \"only\", \"onto\", \"open\", \"operation\", \"opportunity\", \"option\", \"order\",\n  \"organization\", \"other\", \"others\", \"our\", \"out\", \"outside\", \"over\", \"own\",\n  \"owner\", \"page\", \"pain\", \"painting\", \"paper\", \"parent\", \"part\", \"participant\",\n  \"particular\", \"particularly\", \"partner\", \"party\", \"pass\", \"past\", \"patient\",\n  \"pattern\", \"pay\", \"peace\", \"people\", \"per\", \"perform\", \"performance\",\n  \"perhaps\", \"period\", \"person\", \"personal\", \"phone\", \"physical\", \"pick\",\n  \"picture\", \"piece\", \"place\", \"plan\", \"plant\", \"play\", \"player\", \"point\",\n  \"police\", \"policy\", \"political\", \"politics\", \"poor\", \"popular\", \"population\",\n  \"position\", \"positive\", \"possible\", \"power\", \"practice\", \"prepare\", \"present\",\n  \"president\", \"pressure\", \"pretty\", \"prevent\", \"price\", \"private\", \"probably\",\n  \"problem\", \"process\", \"produce\", \"product\", \"production\", \"professional\",\n  \"professor\", \"program\", \"project\", \"property\", \"protect\", \"prove\", \"provide\",\n  \"public\", \"pull\", \"purpose\", \"push\", \"put\", \"quality\", \"question\", \"quickly\",\n  \"quite\", \"race\", \"radio\", \"raise\", \"range\", \"rate\", \"rather\", \"reach\", \"read\",\n  \"ready\", \"real\", \"reality\", \"realize\", \"really\", \"reason\", \"receive\", \"recent\",\n  \"recently\", \"recognize\", \"record\", \"red\", \"reduce\", \"reflect\", \"region\",\n  \"relate\", \"relationship\", \"religious\", \"remain\", \"remember\", \"remove\",\n  \"report\", \"represent\", \"require\", \"research\", \"resource\",\n  \"respond\", \"response\", \"rest\", \"result\", \"return\", \"reveal\",\n  \"rich\", \"right\", \"rise\", \"risk\", \"road\", \"rock\", \"role\", \"room\", \"rule\",\n  \"run\", \"safe\", \"same\", \"save\", \"say\", \"scene\", \"school\", \"science\",\n  \"scientist\", \"score\", \"sea\", \"season\", \"seat\", \"second\", \"section\",\n  \"security\", \"see\", \"seek\", \"seem\", \"sell\", \"send\", \"senior\", \"sense\",\n  \"series\", \"serious\", \"serve\", \"service\", \"set\", \"seven\", \"several\",\n  \"shake\", \"share\", \"she\", \"shoot\", \"short\", \"shot\", \"should\", \"shoulder\",\n  \"show\", \"side\", \"sign\", \"significant\", \"similar\", \"simple\", \"simply\",\n  \"since\", \"sing\", \"single\", \"sister\", \"sit\", \"site\", \"situation\", \"six\",\n  \"size\", \"skill\", \"skin\", \"small\", \"smile\", \"so\", \"social\", \"society\",\n  \"soldier\", \"some\", \"somebody\", \"someone\", \"something\", \"sometimes\",\n  \"son\", \"song\", \"soon\", \"sort\", \"sound\", \"source\", \"south\", \"southern\",\n  \"space\", \"speak\", \"special\", \"specific\", \"speech\", \"spend\", \"sport\",\n  \"spring\", \"staff\", \"stage\", \"stand\", \"standard\", \"star\", \"start\",\n  \"state\", \"statement\", \"station\", \"stay\", \"step\", \"still\", \"stock\",\n  \"stop\", \"store\", \"story\", \"strategy\", \"street\", \"strong\", \"structure\",\n  \"student\", \"study\", \"stuff\", \"style\", \"subject\", \"success\",\n  \"successful\", \"such\", \"suddenly\", \"suffer\", \"suggest\", \"summer\",\n  \"support\", \"sure\", \"surface\", \"system\", \"table\", \"take\", \"talk\",\n  \"task\", \"tax\", \"teach\", \"teacher\", \"team\", \"technology\", \"television\",\n  \"tell\", \"ten\", \"tend\", \"term\", \"test\", \"than\", \"thank\", \"that\", \"the\",\n  \"their\", \"them\", \"themselves\", \"then\", \"theory\", \"there\", \"these\", \"they\",\n  \"thing\", \"think\", \"third\", \"this\", \"those\", \"though\", \"thought\",\n  \"thousand\", \"threat\", \"three\", \"through\", \"throughout\", \"throw\",\n  \"thus\", \"time\", \"today\", \"together\", \"tonight\", \"too\", \"top\",\n  \"total\", \"tough\", \"toward\", \"town\", \"trade\", \"traditional\", \"training\",\n  \"travel\", \"treat\", \"treatment\", \"tree\", \"trial\", \"trip\", \"trouble\",\n  \"true\", \"truth\", \"try\", \"turn\", \"two\", \"type\", \"under\",\n  \"understand\", \"unit\", \"until\", \"upon\", \"use\", \"usually\",\n  \"value\", \"various\", \"very\", \"victim\", \"view\", \"violence\", \"visit\",\n  \"voice\", \"vote\", \"wait\", \"walk\", \"wall\", \"want\", \"war\", \"watch\",\n  \"water\", \"way\", \"we\", \"weapon\", \"wear\", \"week\", \"weight\", \"well\",\n  \"west\", \"western\", \"what\", \"whatever\", \"when\", \"where\", \"whether\",\n  \"which\", \"while\", \"white\", \"who\", \"whole\", \"whom\", \"whose\", \"why\",\n  \"wide\", \"wife\", \"will\", \"win\", \"wind\", \"window\", \"wish\", \"with\",\n  \"within\", \"without\", \"woman\", \"wonder\", \"word\", \"work\", \"worker\",\n  \"world\", \"worry\", \"would\", \"write\", \"writer\", \"wrong\", \"yard\", \"yeah\",\n  \"year\", \"yes\", \"yet\", \"you\", \"young\", \"your\", \"yourself\",\n  \"abode\", \"access\"]\n\nconst randomWord = () => {\n  const randomIdx = Math.floor(Math.random() * words.length)\n  return words[randomIdx]\n}\n\n\n//# sourceURL=webpack:///./src/dictionary.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _zombie__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./zombie */ \"./src/zombie.js\");\n/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./player */ \"./src/player.js\");\n/* harmony import */ var _dictionary__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dictionary */ \"./src/dictionary.js\");\n/* harmony import */ var _start_screen__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./start_screen */ \"./src/start_screen.js\");\n\n\n\n\n\n\ndocument.addEventListener('DOMContentLoaded', () => {\n  const canvas = document.getElementById(\"canvas\");\n  const ctx = canvas.getContext(\"2d\");\n  const input = document.getElementById('typing-form');\n  const wordList = document.getElementById('word-list');\n  let zombies = {};\n  let dx = 3.5;\n  let dy = 0;\n  let health = 100;\n  let zombieCount = 0;\n  let counter = 0;\n  let round = 1;\n  let alive = true;\n  let killCount = 0;\n  let timer = 0;\n  let a = 0;\n  let b = 0;\n  \n  function spawnZombies() {\n    let x = -100;\n    let y = Math.floor(Math.random() * (canvas.height-150)) + 50;\n    \n    for (let zomb in zombies) {\n      if (zombies[zomb].x <= 150) {\n        while (y < zombies[zomb].y + 100 && y > zombies[zomb].y - 100) {\n          y = Math.floor(Math.random() * (canvas.height-150)) + 50;\n        }\n      }\n    }\n    let randomSpawn = Math.floor(Math.random() * 5) + (45 - round);\n    if (counter % randomSpawn === 0) {\n      zombies[`zombie${zombieCount}`] = new _zombie__WEBPACK_IMPORTED_MODULE_0__[\"default\"](ctx, Object(_dictionary__WEBPACK_IMPORTED_MODULE_2__[\"randomWord\"])(), x, y, dy, alive);\n      zombieCount += 1;\n    }\n  }\n  \n  function renderGame() {\n    setTimeout(function () {\n      ctx.clearRect(0, 0, canvas.width, canvas.height);\n      let request = requestAnimationFrame(renderGame);\n      spawnZombies();\n      Object(_player__WEBPACK_IMPORTED_MODULE_1__[\"drawWordList\"])(zombies);\n      Object(_player__WEBPACK_IMPORTED_MODULE_1__[\"drawWPM\"])(ctx, timer, killCount);\n      \n      for (let zomb in zombies) {\n        let { x } = zombies[zomb];\n        if (zombies[zomb].alive) {\n          zombies[zomb].draw()\n          if (x < canvas.width - 200) {\n            if (zombies[zomb].x > 350) {\n              if (zombies[zomb].y < canvas.height / 2) {\n                zombies[zomb].dy = 2;\n              } else if (zombies[zomb].y > canvas.height / 2) {\n                zombies[zomb].dy = -2;\n              } else {\n                zombies[zomb].dy = 0;\n              }\n            }\n            zombies[zomb].x += dx;\n            zombies[zomb].y += zombies[zomb].dy;\n            zombies[zomb].shift += 100.75;\n            if (zombies[zomb].shift >= 1155) {\n              zombies[zomb].shift = 0;\n            }\n            Object.values(zombies).forEach((zombie, idx) => {\n              if (idx < parseInt(zomb.slice(6))+3 && idx > parseInt(zomb.slice(6))) {\n                if (zombies[zomb].x >= 20) {\n                  if (zombies[zomb].y < zombie.y && zombies[zomb].y > zombie.y - 30) {\n                    zombies[zomb].dy = -1;\n                  } else if (zombies[zomb].y <= zombie.y + 30 && zombies[zomb].y >= zombie.y) {\n                    zombies[zomb].dy = 1;\n                  } else if (zombies[zomb].y === zombie.y) {\n                    zombies[zomb].dy = 1;\n                  } else {\n                    zombies[zomb].dy = 0;\n                  }\n                }\n              }\n            })\n          } else if (health > 0) {\n            health -= .1\n          }\n        } else {\n          zombies[zomb].drawDead();\n          zombies[zomb].deadShift += 97;\n          if (zombies[zomb].deadShift >= 1250) {\n            zombies[zomb].deadShift = 1254;\n          }\n        }\n      }\n\n      for (let zomb in zombies) {\n        if (zombies[zomb].alive) {\n          zombies[zomb].drawText()\n        } else {\n          \n        }\n      }\n\n      if (counter % 1000 === 0) {\n        round += 1\n      }\n      counter += 10;\n\n      Object(_player__WEBPACK_IMPORTED_MODULE_1__[\"drawKillCount\"])(ctx, killCount);\n      if (health > 0) {\n        Object(_player__WEBPACK_IMPORTED_MODULE_1__[\"drawHealth\"])(ctx, health);\n        Object(_player__WEBPACK_IMPORTED_MODULE_1__[\"drawPlayer\"])(ctx);\n      } else if (health <= 0) {\n        health = 0;\n        Object(_player__WEBPACK_IMPORTED_MODULE_1__[\"drawHealth\"])(ctx, health);\n        // clearInterval(window.intervalId);\n        cancelAnimationFrame(request)\n        gameOver();\n      }\n    }, 1000 / 12);\n  }\n\n  \n  input.addEventListener('input', startTimer);\n  function startTimer(e) {\n    if (e.target.value.length === 1) {\n      a = Date.now();\n    }\n  }\n\n  input.addEventListener('keyup', handleZombie);\n  function handleZombie(e) {\n    if (e.keyCode === 13 || e.keyCode === 32) {\n      input.value = input.value.trim();\n      for (let zomb in zombies) {\n        if (input.value === zombies[zomb].word) {\n          killCount += 1;\n          zombies[zomb].word = \"\"\n          zombies[zomb].alive = false;\n          break;\n        }\n      }\n      input.value = \"\";\n      b = Date.now();\n      timer += (b-a)/1000;\n    } else {\n      null\n    }\n  }\n\n  function resetGame () {\n    zombies = {};\n    dx = 3.5;\n    dy = 0;\n    health = 100;\n    zombieCount = 0;\n    counter = 0;\n    round = 1;\n    alive = true;\n    killCount = 0;\n    timer = 0;\n  }\n\n  function gameOver() {\n    canvas.className = \"start-screen\";\n    Object(_start_screen__WEBPACK_IMPORTED_MODULE_3__[\"drawStartScreen\"])(ctx);\n    wordList.style.display = \"none\";\n    input.value = \"\";\n    input.disabled = true;\n    canvas.addEventListener('click', startGame)\n  }\n\n  function startGame(e) {\n    canvas.removeEventListener('click', startGame)\n    resetGame();\n    clearInterval(window.startInterval);\n    canvas.className = \"game-screen\";\n    // window.intervalId = setInterval(renderGame, 100);\n    requestAnimationFrame(renderGame)\n    input.disabled = false;\n    input.focus();\n    wordList.style.display = \"block\";\n  }\n  let startCounter = 0;\n  let titlepos = -60;\n  function titleDrop() {\n    ctx.clearRect(0, 0, canvas.width, canvas.height);\n    Object(_start_screen__WEBPACK_IMPORTED_MODULE_3__[\"drawStartScreen\"])(ctx, canvas);\n    titlepos += 5;\n    if (titlepos >= 140) {\n      titlepos = 140;\n      counter += .5;\n      if (counter % 10 <= 7) {\n        Object(_start_screen__WEBPACK_IMPORTED_MODULE_3__[\"drawStartClick\"])(ctx);\n      } else {\n        null;\n      }\n      canvas.addEventListener('click', startGame)\n    }\n    Object(_start_screen__WEBPACK_IMPORTED_MODULE_3__[\"drawTitle\"])(ctx, titlepos);\n  }\n  if (canvas.className === \"start-screen\") {\n    Object(_start_screen__WEBPACK_IMPORTED_MODULE_3__[\"drawStartScreen\"])(ctx, canvas);\n    window.startInterval = setInterval(titleDrop, 70);\n    // canvas.addEventListener('click', startGame)\n  }\n})\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/player.js":
/*!***********************!*\
  !*** ./src/player.js ***!
  \***********************/
/*! exports provided: drawPlayer, drawHealth, drawKillCount, drawWordList, drawWPM */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"drawPlayer\", function() { return drawPlayer; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"drawHealth\", function() { return drawHealth; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"drawKillCount\", function() { return drawKillCount; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"drawWordList\", function() { return drawWordList; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"drawWPM\", function() { return drawWPM; });\n\nconst drawPlayer = (ctx) => {\n  ctx.beginPath();\n  ctx.rect(canvas.width - 150, canvas.height / 2, 35, 70);\n  ctx.fillStyle = \"#7FFF00\";\n  ctx.fill();\n  ctx.closePath();\n}\n\nconst drawHealth = (ctx, health) => {\n  ctx.beginPath();\n  ctx.fillStyle = \"white\";\n  ctx.font = 'bold 18px \"Roboto Slab\"';\n  ctx.fillText(\"Health: \" + Math.floor(health).toString(), canvas.width - 120, 50);\n  ctx.fill();\n  ctx.closePath();\n}\n\nconst drawKillCount = (ctx, killCount) => {\n  ctx.beginPath();\n  ctx.fillStyle = \"white\";\n  ctx.font = 'bold 18px \"Roboto Slab\"';\n  ctx.fillText(\"Kills: \" + killCount.toString(), canvas.width - 210, 50);\n  ctx.fill();\n  ctx.closePath();\n}\n\nconst drawWordList = (zombies) => {\n  let list = document.getElementById(\"word-list\");\n  list.innerHTML = \"\";\n  Object.values(zombies).forEach(zombie => {\n    if (zombie.x >= 0) {\n      if (zombie.word.length > 0 && list.children.length < 10) {\n        list.insertAdjacentHTML(\"beforeend\", `<li>${zombie.word}</li>`);\n      }\n    }\n  })\n}\n\nconst drawWPM = (ctx, timer, kills) => {\n  ctx.beginPath();\n  ctx.fillStyle = \"white\";\n  ctx.font = 'bold 18px \"Roboto Slab\"';\n  ctx.fillText(\"WPM: \" + (kills/(timer/60)).toFixed(2), 460, 50);\n  ctx.fill();\n  ctx.closePath();\n}\n\n//# sourceURL=webpack:///./src/player.js?");

/***/ }),

/***/ "./src/start_screen.js":
/*!*****************************!*\
  !*** ./src/start_screen.js ***!
  \*****************************/
/*! exports provided: drawStartScreen, drawTitle, drawStartClick */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"drawStartScreen\", function() { return drawStartScreen; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"drawTitle\", function() { return drawTitle; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"drawStartClick\", function() { return drawStartClick; });\n// class StartScreen {\n//   constructor(ctx) {\n//     this.ctx = ctx;\n//   }\n\n  const drawStartScreen = (ctx, canvas) => {\n    ctx.beginPath();\n      ctx.rect(0, 0, canvas.width, canvas.height);\n      ctx.fillStyle = \"rgba(0, 0, 0, 0.8)\";\n      ctx.fill();\n    ctx.closePath();\n  }\n\n  const drawTitle = (ctx, y) => {\n    ctx.beginPath();\n      ctx.fillStyle = \"rgba(255, 255, 255, 0.95)\";\n      ctx.font = 'bold 72px \"Roboto Slab\"';\n      ctx.fillText(\"Typing Dead\", (canvas.width/2)-215, y);\n      ctx.fill();\n    ctx.closePath();\n  }\n\n  const drawStartClick = (ctx) => {\n    ctx.beginPath();\n      ctx.fillStyle = \"rgba(255, 255, 255, 0.95)\";\n      ctx.font = 'bold 36px \"Roboto Slab\"';\n      ctx.fillText(\"Click to Start\", (canvas.width / 2) - 110, 270);\n      ctx.fill();\n    ctx.closePath();\n  }\n// }\n\n//# sourceURL=webpack:///./src/start_screen.js?");

/***/ }),

/***/ "./src/zombie.js":
/*!***********************!*\
  !*** ./src/zombie.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nclass Zombie {\n  constructor(ctx, word, x, y, dy, alive){\n    this.ctx = ctx;\n    this.word = word;\n    this.x = x;\n    this.y = y;\n    this.dy = dy;\n    this.shift = 0;\n    this.deadShift = 575;\n    this.alive = alive;\n  }\n  \n  draw () {\n    const zombieImg = new Image();\n    zombieImg.src = \"../Typing-Dead/assets/zombie.png\";\n    this.ctx.drawImage(zombieImg, \n                        this.shift, 88, \n                        50, 90, \n                        this.x, this.y,\n                        50, 90);\n  }\n\n  drawDead () {\n    const zombieImg = new Image();\n    zombieImg.src = \"../Typing-Dead/assets/zombie.png\";\n    this.ctx.drawImage(zombieImg,\n      this.deadShift, 270,\n      50, 90,\n      this.x, this.y,\n      50, 90);\n  }\n\n  drawText () {\n    this.ctx.beginPath();\n      this.ctx.fillStyle = \"rgba(255, 255, 255, 0.95)\";\n      this.ctx.font = 'bold 18px \"Roboto Slab\"';\n      this.ctx.fillText(this.word, this.x, this.y - 7);\n      this.ctx.fill();\n    this.ctx.closePath();\n  }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Zombie);\n\n//# sourceURL=webpack:///./src/zombie.js?");

/***/ })

/******/ });