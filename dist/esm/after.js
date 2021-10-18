import after from 'lodash/after';
import { DecoratorConfig, DecoratorFactory } from './factory';
import { PostValueApplicator } from './applicators';
var decorator = DecoratorFactory.createInstanceDecorator(new DecoratorConfig(after, new PostValueApplicator(), { setter: true }));
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
export function After(n) {
    return decorator(n);
}
export { After as after };
export default decorator;
//# sourceMappingURL=after.js.map