"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _mongoose = _interopRequireDefault(require("mongoose"));

var schema = _mongoose["default"].Schema;
var musicSchema = new schema({
  title: {
    type: String,
    required: true
  },
  format: {
    type: String,
    required: true
  },
  path: {
    type: String,
    required: true
  }
});

_mongoose["default"].Types.ObjectId.prototype.valueOf = function () {
  return this.toString();
};

var _default = musicSchema;
exports["default"] = _default;
//# sourceMappingURL=musicSchema.js.map