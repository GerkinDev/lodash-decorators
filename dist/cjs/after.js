"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.after = exports.After = void 0;
var tslib_1 = require("tslib");
var after_1 = (0, tslib_1.__importDefault)(require("lodash/after"));
var factory_1 = require("./factory");
var applicators_1 = require("./applicators");
var decorator = factory_1.DecoratorFactory.createInstanceDecorator(new factory_1.DecoratorConfig(after_1.default, new applicators_1.PostValueApplicator(), { setter: true }));
/**
 * The opposite of Before. This method creates a function that invokes once it's called n or more times.
 *
 * @param {number} n The number of calls before the function is invoked.
 * @example
 *
 * class MyClass {
 *   @After(2)
 *   fn() {
 *     return 10;
 *   }
 * }
 *
 * const myClass = new MyClass();
 *
 * myClass.fn(); // => undefined
 * myClass.fn(); // => 10
 */
function After(n) {
    return decorator(n);
}
exports.After = After;
exports.after = After;
exports.default = decorator;
//# sourceMappingURL=after.js.map