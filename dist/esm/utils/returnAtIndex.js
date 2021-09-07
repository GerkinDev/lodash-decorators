import { __spreadArray } from "tslib";
/**
 * Creates a function the returns the specific index.
 *
 * @private
 * @export
 * @param {Function} fn
 * @param {number} index
 * @returns {Function}
 */
export function returnAtIndex(fn, index) {
    return function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        fn.call.apply(fn, __spreadArray([this], args, false));
        return args[index];
    };
}
//# sourceMappingURL=returnAtIndex.js.map