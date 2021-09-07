import ary from 'lodash/ary';
import { DecoratorConfig, DecoratorFactory } from './factory';
import { PreValueApplicator } from './applicators';
var decorator = DecoratorFactory.createDecorator(new DecoratorConfig(ary, new PreValueApplicator()));
/**
 * Creates a function that invokes func, with up to n arguments, ignoring any additional arguments.
 *
 * @param {number} n The arity cap.
 * @example
 *
 * class MyClass {
 *   @Ary(1)
 *   fn(...args) {
 *     return args;
 *   }
 * }
 *
 * const myClass = new MyClass();
 *
 * myClass.fn(1, 2, 3, 4); // => [ 1 ]
 */
export function Ary(n) {
    return decorator(n);
}
export { Ary as ary };
export default decorator;
//# sourceMappingURL=ary.js.map