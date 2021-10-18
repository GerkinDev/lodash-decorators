"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.partial = exports.Partial = void 0;
var tslib_1 = require("tslib");
var partial_1 = (0, tslib_1.__importDefault)(require("lodash/partial"));
var factory_1 = require("./factory");
var applicators_1 = require("./applicators");
var decorator = factory_1.DecoratorFactory.createInstanceDecorator(new factory_1.DecoratorConfig(partial_1.default, new applicators_1.PartialApplicator(), { property: true, method: false }));
/**
 * Partially applies arguments to a function.
 *
 * @export
 * @param {...any[]} partials
 * @returns {PropertyDecorator}
 * @example
 * class MyClass {
 *   lastName: string = 'Schmo';
 *
 *   @Partial('fn', 'Joe')
 *   fn2: () => string;
 *
 *   fn(name: string): string {
 *     return `${name} ${this.lastName}`;
 *   }
 * }
 *
 * const myClass = new MyClass();
 *
 * myClass.fn2(); //=> 'Joe Schmo'
 */
function Partial() {
    var partials = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        partials[_i] = arguments[_i];
    }
    return decorator.apply(void 0, partials);
}
exports.Partial = Partial;
exports.partial = Partial;
exports.default = decorator;
//# sourceMappingURL=partial.js.map