"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.resolveFunction = void 0;
var tslib_1 = require("tslib");
var isFunction_1 = (0, tslib_1.__importDefault)(require("lodash/isFunction"));
var isString_1 = (0, tslib_1.__importDefault)(require("lodash/isString"));
var log_1 = require("./log");
/**
 * Resolves a function on the current target object. It first will
 * try and resolve on the context object, then the target object,
 * then an error will be thrown if the method can not be resolved.
 *
 * @private
 * @param {Function|string} method The method or method name.
 * @param {Object} [context] The context object to resolve from.
 * @param {Object} [target] The target object to resolve from.
 * @returns {Function} The resolved function.
 */
function resolveFunction(method, context, target, throwNotFound) {
    if (throwNotFound === void 0) { throwNotFound = true; }
    if ((0, isFunction_1.default)(method)) {
        return method;
    }
    else if ((0, isString_1.default)(method)) {
        if (context && (0, isFunction_1.default)(context[method])) {
            return context[method];
        }
        else if (target && (0, isFunction_1.default)(target[method])) {
            return target[method];
        }
    }
    if (throwNotFound) {
        throw new ReferenceError((0, log_1.log)("Can not resolve method " + method + " on any target Objects"));
    }
}
exports.resolveFunction = resolveFunction;
//# sourceMappingURL=resolveFunction.js.map