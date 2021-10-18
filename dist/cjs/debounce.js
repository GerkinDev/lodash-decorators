"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.debounce = exports.Debounce = void 0;
var tslib_1 = require("tslib");
var debounce_1 = (0, tslib_1.__importDefault)(require("lodash/debounce"));
var factory_1 = require("./factory");
var applicators_1 = require("./applicators");
var decorator = factory_1.DecoratorFactory.createInstanceDecorator(new factory_1.DecoratorConfig(debounce_1.default, new applicators_1.PreValueApplicator(), { setter: true }));
/**
 * Creates a debounced function that delays invoking func until after wait milliseconds have elapsed since the last time the debounced function was invoked.
 * The debounced function comes with a cancel method to cancel delayed func invocations and a flush method to immediately invoke them.
 * Provide options to indicate whether func should be invoked on the leading and/or trailing edge of the wait timeout. The func is invoked with the last arguments provided to the debounced function.
 * Subsequent calls to the debounced function return the result of the last func invocation.
 *
 * Note: If leading and trailing options are true, func is invoked on the trailing edge of the timeout only if the debounced function is invoked more than once during the wait timeout.
 *
 * If wait is 0 and leading is false, func invocation is deferred until to the next tick, similar to setTimeout with a timeout of 0.
 *
 * @param {number} [wait=0] The number in milliseconds to delay.
 * @param {DebounceOptions} [options] The options object.
 * @example
 *
 * class MyClass {
 *   value = 100;
 *
 *   @Debounce(10)
 *   add(a) {
 *     this.value += a;
 *   }
 * }
 *
 * const myClass = new MyClass();
 *
 * myClass.add(10);
 * myClass.add(50);
 * myClass.add(20);
 *
 * myClass.value; // => 100;
 *
 * setTimeout(() => {
 *   myClass.value; // => 120;
 * }, 11);
 */
function Debounce(wait, options) {
    return decorator(wait, options);
}
exports.Debounce = Debounce;
exports.debounce = Debounce;
exports.default = decorator;
//# sourceMappingURL=debounce.js.map