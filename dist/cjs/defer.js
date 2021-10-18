"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.defer = exports.Defer = void 0;
var tslib_1 = require("tslib");
var defer_1 = (0, tslib_1.__importDefault)(require("lodash/defer"));
var factory_1 = require("./factory");
var applicators_1 = require("./applicators");
/**
 * Defers invoking the func until the current call stack has cleared. Any additional arguments are provided to func when it's invoked.
 *
 * @param {...*} [args] Additional arguments to invoke the function with
 * @example
 *
 * class MyClass {
 *   value = 100;
 *
 *   @Defer()
 *   add(a) {
 *     this.value += a;
 *   }
 * }
 *
 * const myClass = new MyClass();
 *
 * myClass.add(10);
 *
 * myClass.value; // => 100;
 *
 * setTimeout(() => {
 *   myClass.value; // => 110;
 * }, 0);
 */
exports.Defer = factory_1.DecoratorFactory.createDecorator(new factory_1.DecoratorConfig(defer_1.default, new applicators_1.InvokeApplicator(), { setter: true, optionalParams: true }));
exports.defer = exports.Defer;
exports.default = exports.Defer;
//# sourceMappingURL=defer.js.map