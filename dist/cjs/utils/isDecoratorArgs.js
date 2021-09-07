"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isMethodOrPropertyDecoratorArgs = void 0;
var tslib_1 = require("tslib");
var isObject_1 = (0, tslib_1.__importDefault)(require("lodash/isObject"));
var isFunction_1 = (0, tslib_1.__importDefault)(require("lodash/isFunction"));
var isString_1 = (0, tslib_1.__importDefault)(require("lodash/isString"));
function isMethodOrPropertyDecoratorArgs() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    return args.length >= 2
        && (0, isObject_1.default)(args[0])
        && (0, isString_1.default)(args[1])
        && (0, isFunction_1.default)(args[0].constructor)
        && args[0].constructor.prototype === args[0];
}
exports.isMethodOrPropertyDecoratorArgs = isMethodOrPropertyDecoratorArgs;
//# sourceMappingURL=isDecoratorArgs.js.map