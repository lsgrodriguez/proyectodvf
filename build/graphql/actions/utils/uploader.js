"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.storeUpload = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _cloudinary = _interopRequireDefault(require("cloudinary"));

var storeUpload =
/*#__PURE__*/
function () {
  var _ref = (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee(stream, resourceType) {
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _cloudinary["default"].config({
              cloud_name: process.env.CD_CLOUD_NAME,
              api_key: process.env.CD_API_KEY,
              api_secret: process.env.CD_API_SECRET
            });

            return _context.abrupt("return", new Promise(function (resolve, reject) {
              var buffer = _cloudinary["default"].v2.uploader.upload_stream({
                resource_type: resourceType
              }, function (err, result) {
                if (err) reject(err);
                resolve(result);
              });

              stream.pipe(buffer);
            }));

          case 2:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function storeUpload(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

exports.storeUpload = storeUpload;
//# sourceMappingURL=uploader.js.map