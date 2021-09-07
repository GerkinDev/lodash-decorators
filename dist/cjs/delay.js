"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.delay = exports.Delay = void 0;
var tslib_1 = require("tslib");
var delay_1 = (0, tslib_1.__importDefault)(require("lodash/delay"));
var factory_1 = require("./factory");
var applicators_1 = require("./applicators");
var decorator = factory_1.DecoratorFactory.createDecorator(new factory_1.DecoratorConfig(function (value, wait) {
    var args = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        args[_i - 2] = arguments[_i];
    }
    return function () {
        var invokeArgs = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            invokeArgs[_i] = arguments[_i];
        }
        return delay_1.default.apply(void 0, (0, tslib_1.__spreadArray)((0, tslib_1.__spreadArray)([value.bind(this), wait], invokeArgs, false), args, false));
    };
}, new applicators_1.PreValueApplicator(), { setter: true }));
/**
 * Invokes func after wait milliseconds. Any additional arguments are provided to func when it's invoked.
 *
 * @param {number} wait The number of milliseconds to delay invocation.
 * @param {...*} [args] Additional arguments to invoke the function with
 * @example
 *
 * class MyClass {
 *   value = 100;
 *
 *   @Delay(20)
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
 * }, 30);
 */
function Delay(wait) {
    var args = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        args[_i - 1] = arguments[_i];
    }
    return decorator.apply(void 0, (0, tslib_1.__spreadArray)([wait], args, false));
}
exports.Delay = Delay;
exports.delay = Delay;
exports.default = decorator;
//# sourceMappingURL=delay.js.map