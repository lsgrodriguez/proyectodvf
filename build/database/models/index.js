"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.commentModel = exports.musicModel = exports.accountsModel = void 0;

var _mongoose = _interopRequireDefault(require("mongoose"));

var _accountSchema = _interopRequireDefault(require("../schemas/accountSchema"));

var _musicSchema = _interopRequireDefault(require("../schemas/musicSchema"));

var _commentSchema = _interopRequireDefault(require("../schemas/commentSchema"));

var accountsModel = _mongoose["default"].model('account', _accountSchema["default"]);

exports.accountsModel = accountsModel;

var musicModel = _mongoose["default"].model('music', _musicSchema["default"]);

exports.musicModel = musicModel;

var commentModel = _mongoose["default"].model('comment', _commentSchema["default"]);

exports.commentModel = commentModel;
//# sourceMappingURL=index.js.map