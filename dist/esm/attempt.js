import attempt from 'lodash/attempt';
import partial from 'lodash/partial';
import { DecoratorConfig, DecoratorFactory } from './factory';
import { PreValueApplicator } from './applicators';
var attemptFn = function (fn) { return partial(attempt, fn); };
/**
 * Attempts to invoke func, returning either the result or the caught error object. Any additional arguments are provided to func when it's invoked.
 *
 * @param {...*} [args] The arguments to invoke func with.
 * @example
 *
 * class MyClass {
 *   @Attempt()
 *   fn(value) {
 *     if (typeof value === 'number') {
 *       return value
 *     }
 *
 *     throw new Error();
 *   }
 * }
 *
 * const myClass = new MyClass();
 *
 * myClass.fn(10); // => 10;
 * myClass.fn(null); // => Error
 */
export var Attempt = DecoratorFactory.createDecorator(new DecoratorConfig(attemptFn, new PreValueApplicator(), {
    optionalParams: true
}));
export { Attempt as attempt };
export default Attempt;
//# sourceMappingURL=attempt.js.map