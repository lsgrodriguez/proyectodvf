"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _mongoose = _interopRequireDefault(require("mongoose"));

var _bcrypt = _interopRequireDefault(require("bcrypt"));

var schema = _mongoose["default"].Schema;
var accountSchema = new schema({
  user: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  role: {
    type: String,
    "enum": ['admin', 'user'],
    required: true
  },
  gender: {
    type: String,
    "enum": ['H', 'M']
  },
  subscription: {
    type: String,
    "enum": ['30', '60', '120']
  },
  profileImage: {
    type: String
  },
  comments: [{
    type: schema.Types.ObjectId,
    ref: 'comment'
  }]
}, {
  timestamps: true
});

_mongoose["default"].Types.ObjectId.prototype.valueOf = function () {
  return this.toString();
};

accountSchema.pre("save", function (next) {
  var account = this;

  _bcrypt["default"].genSalt(10, function (error, salt) {
    _bcrypt["default"].hash(account.password, salt, function (error, hash) {
      if (error) return next(error);
      account.password = hash;
      next();
    });
  });
});
var _default = accountSchema;
exports["default"] = _default;
//# sourceMappingURL=accountSchema.js.map