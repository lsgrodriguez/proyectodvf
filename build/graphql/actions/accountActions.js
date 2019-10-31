"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.loginAccountAction = exports.showAccounts = exports.findAccountAction = exports.updateAccountAction = exports.addAccountAction = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));

var _models = require("../../database/models");

var _bcrypt = _interopRequireDefault(require("bcrypt"));

//Esto sirve para agregar expiracion a los token...
Date.prototype.addDays = function (days) {
  var date = new Date(this.valueOf());
  date.setDate(date.getDate() + days);
  return date;
};

var createToken = function createToken(userData) {
  var exp = new Date().addDays(5).getTime();
  var payload = {
    _id: userData.id,
    email: userData.email,
    user: userData.user,
    exp: exp
  };

  var token = _jsonwebtoken["default"].sign(payload, process.env.JWT);

  return token;
};

var addAccountAction =
/*#__PURE__*/
function () {
  var _ref = (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee(accountData) {
    var newAccount, token;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return _models.accountsModel.create(accountData);

          case 3:
            newAccount = _context.sent;
            console.log(newAccount);
            token = createToken(newAccount);
            return _context.abrupt("return", {
              token: token
            });

          case 9:
            _context.prev = 9;
            _context.t0 = _context["catch"](0);
            console.log("TCL: error", _context.t0);

          case 12:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 9]]);
  }));

  return function addAccountAction(_x) {
    return _ref.apply(this, arguments);
  };
}();

exports.addAccountAction = addAccountAction;

var updateAccountAction =
/*#__PURE__*/
function () {
  var _ref2 = (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee2(filter, update) {
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            _context2.next = 3;
            return _models.accountsModel.findOneAndUpdate(filter, update, {
              "new": true
            });

          case 3:
            return _context2.abrupt("return", _context2.sent);

          case 6:
            _context2.prev = 6;
            _context2.t0 = _context2["catch"](0);
            console.log("TCL: updateAccountAction -> error", _context2.t0);

          case 9:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[0, 6]]);
  }));

  return function updateAccountAction(_x2, _x3) {
    return _ref2.apply(this, arguments);
  };
}();

exports.updateAccountAction = updateAccountAction;

var showAccounts =
/*#__PURE__*/
function () {
  var _ref3 = (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee3() {
    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.prev = 0;
            _context3.next = 3;
            return _models.accountsModel.find().populate('comments');

          case 3:
            return _context3.abrupt("return", _context3.sent);

          case 6:
            _context3.prev = 6;
            _context3.t0 = _context3["catch"](0);
            console.log("TCL: showAccounts -> error", _context3.t0);

          case 9:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, null, [[0, 6]]);
  }));

  return function showAccounts() {
    return _ref3.apply(this, arguments);
  };
}();

exports.showAccounts = showAccounts;

var findAccountAction =
/*#__PURE__*/
function () {
  var _ref4 = (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee4(filter) {
    return _regenerator["default"].wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.prev = 0;
            _context4.next = 3;
            return _models.accountsModel.findOne(filter);

          case 3:
            return _context4.abrupt("return", _context4.sent);

          case 6:
            _context4.prev = 6;
            _context4.t0 = _context4["catch"](0);
            console.log("TCL: findAccountAction -> error", _context4.t0);

          case 9:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4, null, [[0, 6]]);
  }));

  return function findAccountAction(_x4) {
    return _ref4.apply(this, arguments);
  };
}();

exports.findAccountAction = findAccountAction;

var loginAccountAction =
/*#__PURE__*/
function () {
  var _ref5 = (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee5(email, password) {
    var filter, account, valid, token;
    return _regenerator["default"].wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            _context5.prev = 0;
            filter = {
              email: email
            };
            _context5.prev = 2;
            _context5.next = 5;
            return findAccountAction(filter);

          case 5:
            account = _context5.sent;
            _context5.next = 8;
            return _bcrypt["default"].compare(password, account.password);

          case 8:
            valid = _context5.sent;

            if (!valid) {
              _context5.next = 12;
              break;
            }

            token = createToken(account);
            return _context5.abrupt("return", {
              token: token
            });

          case 12:
            _context5.next = 17;
            break;

          case 14:
            _context5.prev = 14;
            _context5.t0 = _context5["catch"](2);
            return _context5.abrupt("return", _context5.t0);

          case 17:
            _context5.next = 22;
            break;

          case 19:
            _context5.prev = 19;
            _context5.t1 = _context5["catch"](0);
            console.log("TCL: loginAccountAction -> error", _context5.t1);

          case 22:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5, null, [[0, 19], [2, 14]]);
  }));

  return function loginAccountAction(_x5, _x6) {
    return _ref5.apply(this, arguments);
  };
}();

exports.loginAccountAction = loginAccountAction;
//# sourceMappingURL=accountActions.js.map