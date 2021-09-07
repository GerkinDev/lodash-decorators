"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.returnAtIndex = void 0;
var tslib_1 = require("tslib");
/**
 * Creates a function the returns the specific index.
 *
 * @private
 * @export
 * @param {Function} fn
 * @param {number} index
 * @returns {Function}
 */
function returnAtIndex(fn, index) {
    return function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        fn.call.apply(fn, (0, tslib_1.__spreadArray)([this], args, false));
        return args[index];
    };
}
exports.returnAtIndex = returnAtIndex;
//# sourceMappingURL=returnAtIndex.js.map