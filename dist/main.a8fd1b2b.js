// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"iMte":[function(require,module,exports) {

},{}],"BQVr":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var EventBus = /*#__PURE__*/function () {
  function EventBus() {
    _classCallCheck(this, EventBus);
  }

  _createClass(EventBus, [{
    key: "on",
    value: function on(eventName, fn) {
      return window.addEventListener(eventName, fn);
    }
  }, {
    key: "off",
    value: function off(eventName, fn) {
      return window.removeEventListener(eventName, fn);
    }
  }, {
    key: "trigger",
    value: function trigger(eventName) {
      var ev = new CustomEvent(eventName);
      return window.dispatchEvent(ev);
    }
  }]);

  return EventBus;
}();

var _default = EventBus;
exports.default = _default;
},{}],"wYwp":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _EventBus2 = _interopRequireDefault(require("./EventBus"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var Model = /*#__PURE__*/function (_EventBus) {
  _inherits(Model, _EventBus);

  var _super = _createSuper(Model);

  function Model(options) {
    var _this;

    _classCallCheck(this, Model);

    _this = _super.call(this);
    Object.assign(_assertThisInitialized(_this), options);
    return _this;
  }

  _createClass(Model, [{
    key: "update",
    value: function update() {
      console && console.error() && console.error('你还没有实现update');
    }
  }]);

  return Model;
}(_EventBus2.default);

var _default = Model;
exports.default = _default;
},{"./EventBus":"BQVr"}],"SFHW":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _EventBus2 = _interopRequireDefault(require("./EventBus"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var View = /*#__PURE__*/function (_EventBus) {
  _inherits(View, _EventBus);

  var _super = _createSuper(View);

  function View(options) {
    var _this;

    _classCallCheck(this, View);

    _this = _super.call(this);
    Object.assign(_assertThisInitialized(_this), options);
    _this.el = document.querySelector(_this.el);

    _this.render(_this.data);

    _this.autoBindEvents();

    _this.on('m:updated', function () {
      _this.render(_this.data);
    });

    return _this;
  }

  _createClass(View, [{
    key: "autoBindEvents",
    value: function autoBindEvents() {
      var _this2 = this;

      var _loop = function _loop(key) {
        var value = _this2[_this2.events[key]];
        var index = key.indexOf(' ');
        var part1 = key.slice(0, index);
        var part2 = key.slice(index + 1);

        _this2.el.addEventListener(part1, function (e) {
          Array.from(document.querySelectorAll(part2)).indexOf(e.target) !== -1 && value(e);
        });
      };

      for (var key in this.events) {
        _loop(key);
      }
    }
  }, {
    key: "createNode",
    value: function createNode(html) {
      var wrap = document.createElement('template');
      wrap.innerHTML = html;
      return wrap.content.firstElementChild;
    }
  }]);

  return View;
}(_EventBus2.default);

var _default = View;
exports.default = _default;
},{"./EventBus":"BQVr"}],"qOER":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("./app1.css");

var _Model = _interopRequireDefault(require("../base/Model"));

var _View = _interopRequireDefault(require("../base/View"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var m = new _Model.default({
  data: {
    n: parseFloat(localStorage.getItem('n')) || 100
  },
  update: function update(data) {
    Object.assign(this.data, data);
    this.trigger('m:updated');
    localStorage.setItem('n', this.data.n.toString());
  }
});

var init = function init(el) {
  new _View.default({
    el: el,
    data: m.data,
    html: "\n            <div>\n                <div id=\"num\">{{n}}</div>\n                <div id=\"btnList\">\n                    <button id=\"add1\">+1</button>\n                    <button id=\"minus1\">-1</button>\n                    <button id=\"mul2\">*2</button>\n                    <button id=\"div2\">\xF72</button>\n                </div>\n            </div>\n        ",
    render: function render() {
      this.el.innerHTML = '';
      this.el.append(this.createNode(this.html.replace('{{n}}', this.data.n)));
    },
    events: {
      'click #add1': 'add1',
      'click #minus1': 'minus1',
      'click #mul2': 'mul2',
      'click #div2': 'div2'
    },
    add1: function add1() {
      m.update({
        n: m.data.n + 1
      });
      console.log('add');
    },
    minus1: function minus1() {
      m.update({
        n: m.data.n - 1
      });
      console.log('minus');
    },
    mul2: function mul2() {
      m.update({
        n: m.data.n * 2
      });
      console.log('mul');
    },
    div2: function div2() {
      m.update({
        n: m.data.n / 2
      });
      console.log('div');
    }
  });
};

var _default = init;
exports.default = _default;
},{"./app1.css":"iMte","../base/Model":"wYwp","../base/View":"SFHW"}],"BKpD":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("./app2.css");

var _Model = _interopRequireDefault(require("../base/Model"));

var _View = _interopRequireDefault(require("../base/View"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var m = new _Model.default({
  data: {
    index: parseInt(localStorage.getItem('index')) || 0
  },
  update: function update(data) {
    Object.assign(this.data, data);
    this.trigger('m:updated');
    localStorage.setItem('index', this.data.index.toString());
  }
});

var init = function init(el) {
  new _View.default({
    el: el,
    data: m.data,
    html: function html(index) {
      return "\n                <div>\n                    <div id=\"topbar\">\n                        <div class=\"".concat(index === 0 ? 'selected' : '', "\" data-index=\"0\">PAGE 1</div>\n                        <div class=\"").concat(index === 1 ? 'selected' : '', "\" data-index=\"1\">PAGE 2</div>\n                    </div>\n                    <div id=\"view\">\n                        <div class=\"").concat(index === 0 ? 'active' : '', "\">This is page 1 !\nWelcome!</div>\n                        <div class=\"").concat(index === 1 ? 'active' : '', "\">This is page 2 !\nNice to meet you!</div>\n                    </div>\n                </div>\n            ");
    },
    render: function render() {
      this.el.innerHTML = '';
      this.el.append(this.createNode(this.html(this.data.index)));
    },
    events: {
      'click #topbar > div': 'switch'
    },
    switch: function _switch(e) {
      console.log(e.target.dataset.index);
      m.update({
        index: parseInt(e.target.dataset.index)
      });
    }
  });
};

var _default = init;
exports.default = _default;
},{"./app2.css":"iMte","../base/Model":"wYwp","../base/View":"SFHW"}],"YvIC":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("./app3.css");

var _Model = _interopRequireDefault(require("../base/Model"));

var _View = _interopRequireDefault(require("../base/View"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var m = new _Model.default({
  data: {
    flag: localStorage.getItem('flag') || 'no'
  },
  update: function update(data) {
    Object.assign(this.data, data);
    localStorage.setItem('flag', this.data.flag);
  }
});

var init = function init(el) {
  new _View.default({
    el: el,
    data: m.data,
    html: function html(flag) {
      return "\n                <div>\n                    <div class=\"".concat(flag === 'no' ? '' : 'moved', "\" id=\"rect\"></div>\n                </div>\n            ");
    },
    render: function render() {
      this.el.innerHTML = '';
      this.el.append(this.createNode(this.html(this.data.flag)));
    },
    events: {
      'click #rect': 'move'
    },
    move: function move() {
      m.update({
        flag: m.data.flag === 'no' ? 'yes' : 'no'
      });
      m.data.flag === 'no' ? document.querySelector('#rect').className = '' : document.querySelector('#rect').className = 'moved';
    }
  });
};

var _default = init;
exports.default = _default;
},{"./app3.css":"iMte","../base/Model":"wYwp","../base/View":"SFHW"}],"Hakh":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("./app4.css");

var _View = _interopRequireDefault(require("../base/View"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var init = function init(el) {
  new _View.default({
    el: el,
    data: {},
    html: "\n            <div>\n                <div id=\"circle\"></div>\n            </div>\n        ",
    render: function render() {
      this.el.innerHTML = '';
      this.el.append(this.createNode(this.html));
    }
  });
};

var _default = init;
exports.default = _default;
},{"./app4.css":"iMte","../base/View":"SFHW"}],"epB2":[function(require,module,exports) {
"use strict";

require("./style.css");

var _app = _interopRequireDefault(require("./app/app1"));

var _app2 = _interopRequireDefault(require("./app/app2"));

var _app3 = _interopRequireDefault(require("./app/app3"));

var _app4 = _interopRequireDefault(require("./app/app4"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _app.default)('#app1');
(0, _app2.default)('#app2');
(0, _app3.default)('#app3');
(0, _app4.default)('#app4');
},{"./style.css":"iMte","./app/app1":"qOER","./app/app2":"BKpD","./app/app3":"YvIC","./app/app4":"Hakh"}]},{},["epB2"], null)
//# sourceMappingURL=main.a8fd1b2b.js.map