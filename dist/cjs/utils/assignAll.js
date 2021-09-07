"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.assignProperty = exports.assignAll = void 0;
var tslib_1 = require("tslib");
var without_1 = (0, tslib_1.__importDefault)(require("lodash/without"));
var attempt_1 = (0, tslib_1.__importDefault)(require("lodash/attempt"));
var isObject_1 = (0, tslib_1.__importDefault)(require("lodash/isObject"));
/**
 * Assigns all properties from an object to another object including non enumerable
 * properties.
 *
 * @export
 * @template T
 * @template U
 * @param {T} to
 * @param {U} from
 * @param {string[]} [excludes=[]]
 * @returns {T}
 */
function assignAll(to, from, excludes) {
    if (excludes === void 0) { excludes = []; }
    var properties = without_1.default.apply(void 0, (0, tslib_1.__spreadArray)([Object.getOwnPropertyNames(from)], excludes, false));
    for (var _i = 0, properties_1 = properties; _i < properties_1.length; _i++) {
        var prop = properties_1[_i];
        (0, attempt_1.default)(assignProperty, to, from, prop);
    }
    return to;
}
exports.assignAll = assignAll;
/**
 * Assigns a property from one object to another while retaining descriptor properties.
 *
 * @export
 * @template T
 * @template U
 * @param {T} to
 * @param {U} from
 * @param {string} prop
 */
function assignProperty(to, from, prop) {
    var descriptor = Object.getOwnPropertyDescriptor(to, prop);
    if (!descriptor || descriptor.configurable) {
        var srcDescriptor = Object.getOwnPropertyDescriptor(from, prop);
        if ((0, isObject_1.default)(srcDescriptor)) {
            Object.defineProperty(to, prop, srcDescriptor);
        }
        else {
            to[prop] = from[prop];
        }
    }
}
exports.assignProperty = assignProperty;
//# sourceMappingURL=assignAll.js.map