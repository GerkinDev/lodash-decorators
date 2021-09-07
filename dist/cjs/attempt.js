"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.attempt = exports.Attempt = void 0;
var tslib_1 = require("tslib");
var attempt_1 = (0, tslib_1.__importDefault)(require("lodash/attempt"));
var partial_1 = (0, tslib_1.__importDefault)(require("lodash/partial"));
var factory_1 = require("./factory");
var applicators_1 = require("./applicators");
var attemptFn = function (fn) { return (0, partial_1.default)(attempt_1.default, fn); };
/**
 * Attempts to invoke func, returning either the result or the caught error object. Any additional arguments are provided to func when it's invoked.
 *
 * @param {...*} [args] The arguments to invoke func with.
 * @example
 *
 * class MyClass {
 *   @Attempt()
 *   fn(value) {
 *     if (typeof value === 'number') {
 *       return value
 *     }
 *
 *     throw new Error();
 *   }
 * }
 *
 * const myClass = new MyClass();
 *
 * myClass.fn(10); // => 10;
 * myClass.fn(null); // => Error
 */
exports.Attempt = factory_1.DecoratorFactory.createDecorator(new factory_1.DecoratorConfig(attemptFn, new applicators_1.PreValueApplicator(), {
    optionalParams: true
}));
exports.attempt = exports.Attempt;
exports.default = exports.Attempt;
//# sourceMappingURL=attempt.js.map