"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.copyMetadata = void 0;
var tslib_1 = require("tslib");
var forOwn_1 = (0, tslib_1.__importDefault)(require("lodash/forOwn"));
/**
 * Used to copy over meta data from function to function.
 * If meta data is attached to a function. This can get lost
 * when wrapping functions. This tries to persist that.
 *
 * @private
 */
function copyMetadata(to, from) {
    (0, forOwn_1.default)(from, function (value, key) { return to[key] = value; });
    return to;
}
exports.copyMetadata = copyMetadata;
//# sourceMappingURL=copyMetaData.js.map