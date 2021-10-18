"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.flow = exports.Flow = void 0;
var tslib_1 = require("tslib");
var flow_1 = (0, tslib_1.__importDefault)(require("lodash/flow"));
var factory_1 = require("./factory");
var applicators_1 = require("./applicators");
var decorator = factory_1.DecoratorFactory.createInstanceDecorator(new factory_1.DecoratorConfig(flow_1.default, new applicators_1.ComposeApplicator({ post: true }), { property: true }));
/**
 * Creates a function that returns the result of invoking the given functions with the this binding of the created function,
 * where each successive invocation is supplied the return value of the previous.
 *
 * @example
 *
 * class MyClass {
 *   name = 'Ted';
 *
 *   @Flow('getName', toUpperCase)
 *   getUpperCaseName: () => string;
 *
 *   getName() {
 *     return this.name;
 *   }
 * }
 *
 * const myClass = new MyClass();
 *
 * myClass.getUpperCaseName(); // => 'TED'
 */
function Flow() {
    var fns = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        fns[_i] = arguments[_i];
    }
    return decorator.apply(void 0, fns);
}
exports.Flow = Flow;
exports.flow = Flow;
exports.default = decorator;
//# sourceMappingURL=flow.js.map