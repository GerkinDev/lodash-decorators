import flowRight from 'lodash/flowRight';
import { DecoratorConfig, DecoratorFactory } from './factory';
import { ComposeApplicator } from './applicators';
var decorator = DecoratorFactory.createInstanceDecorator(new DecoratorConfig(flowRight, new ComposeApplicator({ post: false }), { property: true }));
/**
 * Creates a function that returns the result of invoking the given functions with the this binding of the created function,
 * where each successive invocation is supplied the return value of the previous.
 *
 * @example
 *
 * class MyClass {
 *   name = 'Ted';
 *
 *   @FlowRight(toUpperCase, 'getName')
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
export function FlowRight() {
    var fns = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        fns[_i] = arguments[_i];
    }
    return decorator.apply(void 0, fns);
}
export { FlowRight as flowRight };
export default decorator;
//# sourceMappingURL=flowRight.js.map