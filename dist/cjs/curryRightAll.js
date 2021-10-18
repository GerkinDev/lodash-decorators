"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.curryRightAll = exports.CurryRightAll = void 0;
var tslib_1 = require("tslib");
var curryRight_1 = (0, tslib_1.__importDefault)(require("lodash/curryRight"));
var factory_1 = require("./factory");
var applicators_1 = require("./applicators");
/**
 * This method is like _.curry except that arguments are applied to func in the manner of _.partialRight instead of _.partial.
 * The arity of func may be specified if func.length is not sufficient.
 * The original function is bound to the instance. If the method is needed to call in a different context use `CurryAll`.
 *
 * The _.curryRight.placeholder value, which defaults to _ in monolithic builds, may be used as a placeholder for provided arguments.
 *
 * Note: This method doesn't set the "length" property of curried functions.
 *
 * @param {number} [arity] The arity of func.
 * @example
 *
 * class MyClass {
 *   @CurryRightAll()
 *   add(a, b) {
 *     return (a + b);
 *   }
 * }
 *
 * const myClass = new MyClass();
 *
 * const add5 = myClass.add(5);
 *
 * add5AndMultiply(10); // => 15
 */
exports.CurryRightAll = factory_1.DecoratorFactory.createDecorator(new factory_1.DecoratorConfig(curryRight_1.default, new applicators_1.PreValueApplicator(), { optionalParams: true }));
exports.curryRightAll = exports.CurryRightAll;
exports.default = exports.CurryRightAll;
//# sourceMappingURL=curryRightAll.js.map