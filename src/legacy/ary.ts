import { DecoratorFactory, LodashMethodDecorator } from './factory';
import config from '../configs/ary';

const decorator = DecoratorFactory.legacy.createDecorator(config);

/**
 * Creates a function that invokes func, with up to n arguments, ignoring any additional arguments.
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
export function Ary(n: number): LodashMethodDecorator {
  return decorator(n);
}
export { Ary as ary };
export default decorator;