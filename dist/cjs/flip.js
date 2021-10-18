"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.flip = exports.Flip = void 0;
var tslib_1 = require("tslib");
var flip_1 = (0, tslib_1.__importDefault)(require("lodash/flip"));
var factory_1 = require("./factory");
var applicators_1 = require("./applicators");
var decorator = factory_1.DecoratorFactory.createInstanceDecorator(new factory_1.DecoratorConfig(flip_1.default, new applicators_1.PartialValueApplicator(), { property: true }));
/**
 * Creates a function that invokes func with arguments reversed. Honestly, there is probably not much
 * use for this decorator but maybe you will find one?
 *
 * @example
 *
 * class MyClass {
 *   value = 100;
 *
 *   @Flip('fn')
 *   fn2: (b: number, a: string) => [ number, string ];
 *
 *   fn(a: string, b: number): [ string, number ] {
 *     return [ a, b ];
 *   }
 * }
 *
 * const myClass = new MyClass();
 *
 * myClass.fn2(10, '20'); // => [ '20', 10 ]
 */
function Flip(fn) {
    return decorator(fn);
}
exports.Flip = Flip;
exports.flip = Flip;
exports.default = decorator;
//# sourceMappingURL=flip.js.map