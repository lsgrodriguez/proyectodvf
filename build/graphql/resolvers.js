"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _accountActions = require("./actions/accountActions");

var _musicActions = require("./actions/musicActions");

var _commentActions = require("./actions/commentActions");

var _uploader = require("./actions/utils/uploader");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var accounts = [{
  user: 'lrodriguez',
  email: 'lrodriguez@sysvirtuales.com',
  gender: 'H'
}, {
  user: 'anerenee',
  email: 'anarenee@sysvirtuales.com',
  gender: 'M'
}, {
  user: 'develop',
  email: 'development@sysvirtuales.com',
  gender: 'H'
}, {
  user: 'marketing',
  email: 'marketing@sysvirtuales.com',
  gender: 'H'
}];
var resolvers = {
  Query: {
    accounts: function accounts() {
      return (0, _accountActions.showAccounts)();
    },
    music: function music() {
      return (0, _musicActions.showMusic)();
    }
  },
  Mutation: {
    addAccount: function () {
      var _addAccount = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee(parent, data, context, info) {
        var _ref, createReadStream, stream, _ref2, url, userInfo;

        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                _context.next = 3;
                return data.data.profileImage;

              case 3:
                _ref = _context.sent;
                createReadStream = _ref.createReadStream;
                stream = createReadStream();
                _context.next = 8;
                return (0, _uploader.storeUpload)(stream, 'image');

              case 8:
                _ref2 = _context.sent;
                url = _ref2.url;
                // registra usario
                userInfo = _objectSpread({}, data.data, {
                  profileImage: url
                });
                _context.next = 13;
                return (0, _accountActions.addAccountAction)(userInfo);

              case 13:
                return _context.abrupt("return", _context.sent);

              case 16:
                _context.prev = 16;
                _context.t0 = _context["catch"](0);
                console.log("TCL: error", _context.t0);

              case 19:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[0, 16]]);
      }));

      function addAccount(_x, _x2, _x3, _x4) {
        return _addAccount.apply(this, arguments);
      }

      return addAccount;
    }(),
    loginAccount: function () {
      var _loginAccount = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee2(parent, data, context, info) {
        var email, password;
        return _regenerator["default"].wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.prev = 0;
                email = data.email, password = data.password;
                _context2.next = 4;
                return (0, _accountActions.loginAccountAction)(email, password);

              case 4:
                return _context2.abrupt("return", _context2.sent);

              case 7:
                _context2.prev = 7;
                _context2.t0 = _context2["catch"](0);
                console.log("TCL: error", _context2.t0);

              case 10:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, null, [[0, 7]]);
      }));

      function loginAccount(_x5, _x6, _x7, _x8) {
        return _loginAccount.apply(this, arguments);
      }

      return loginAccount;
    }(),
    addMusic: function () {
      var _addMusic = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee3(parent, data, context, info) {
        var musicData, _ref3, createReadStream, stream, _ref4, url, musicInfo;

        return _regenerator["default"].wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.prev = 0;
                // sube el archivo
                musicData = data.musicData;
                _context3.next = 4;
                return musicData.path;

              case 4:
                _ref3 = _context3.sent;
                createReadStream = _ref3.createReadStream;
                stream = createReadStream();
                _context3.next = 9;
                return (0, _uploader.storeUpload)(stream, 'video');

              case 9:
                _ref4 = _context3.sent;
                url = _ref4.url;
                musicInfo = _objectSpread({}, musicData, {
                  path: url
                });
                _context3.next = 14;
                return (0, _musicActions.addMusicAction)(musicInfo);

              case 14:
                return _context3.abrupt("return", _context3.sent);

              case 17:
                _context3.prev = 17;
                _context3.t0 = _context3["catch"](0);
                console.log("TCL: addMusic error", _context3.t0);

              case 20:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, null, [[0, 17]]);
      }));

      function addMusic(_x9, _x10, _x11, _x12) {
        return _addMusic.apply(this, arguments);
      }

      return addMusic;
    }(),
    addComment: function () {
      var _addComment = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee4(parent, data, context, info) {
        var commentData, user, newComment, filter, update;
        return _regenerator["default"].wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.prev = 0;
                commentData = data.commentData;
                user = context.user;
                _context4.next = 5;
                return (0, _commentActions.addCommentAction)(commentData, user._id);

              case 5:
                newComment = _context4.sent;
                filter = {
                  _id: user._id
                };
                update = {
                  $push: {
                    comments: newComment._id
                  }
                };
                _context4.next = 10;
                return (0, _accountActions.updateAccountAction)(filter, update);

              case 10:
                return _context4.abrupt("return", newComment);

              case 13:
                _context4.prev = 13;
                _context4.t0 = _context4["catch"](0);
                console.log("TCL: addComment error", _context4.t0);

              case 16:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, null, [[0, 13]]);
      }));

      function addComment(_x13, _x14, _x15, _x16) {
        return _addComment.apply(this, arguments);
      }

      return addComment;
    }()
  }
};
var _default = resolvers;
exports["default"] = _default;
//# sourceMappingURL=resolvers.js.map