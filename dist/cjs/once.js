"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.once = exports.Once = void 0;
var tslib_1 = require("tslib");
var once_1 = (0, tslib_1.__importDefault)(require("lodash/once"));
var factory_1 = require("./factory");
var applicators_1 = require("./applicators");
/**
 * Creates a function that is restricted to invoking func once. Repeat calls to the function return the value of the first invocation.
 *
 * @example
 * class MyClass {
 *   value: number = 0;
 *
 *   @Once()
 *   fn(): number {
 *     return ++this.value;
 *   }
 * }
 *
 * const myClass = new MyClass();
 *
 * myClass.fn(); //=> 1
 * myClass.fn(); //=> 1
 * myClass.fn(); //=> 1
 */
exports.Once = factory_1.DecoratorFactory.createInstanceDecorator(new factory_1.DecoratorConfig(once_1.default, new applicators_1.PreValueApplicator(), { setter: true, getter: true, optionalParams: true }));
exports.once = exports.Once;
exports.default = exports.Once;
//# sourceMappingURL=once.js.map