"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.overArgs = exports.OverArgs = void 0;
var tslib_1 = require("tslib");
var overArgs_1 = (0, tslib_1.__importDefault)(require("lodash/overArgs"));
var factory_1 = require("./factory");
var applicators_1 = require("./applicators");
var decorator = factory_1.DecoratorFactory.createDecorator(new factory_1.DecoratorConfig(overArgs_1.default, new applicators_1.PreValueApplicator(), { setter: true }));
/**
 * Creates a function that invokes func with its arguments transformed.
 *
 * @export
 * @param {...Function[]} transforms
 * @returns {LodashMethodDecorator}
 * @example
 * class MyClass {
 *   @OverArgs(_.castArray)
 *   fn(list) {
 *     return list;
 *   }
 * }
 *
 * const myClass = new MyClass();
 *
 * myClass.fn([ 1 ]); //=> [ 1 ];
 * myClass.fn(1); //=> [ 1 ];
 */
function OverArgs() {
    var transforms = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        transforms[_i] = arguments[_i];
    }
    return decorator.apply(void 0, transforms);
}
exports.OverArgs = OverArgs;
exports.overArgs = OverArgs;
exports.default = decorator;
//# sourceMappingURL=overArgs.js.map