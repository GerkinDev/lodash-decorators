import negate from 'lodash/negate';
import { DecoratorConfig, DecoratorFactory } from './factory';
import { PartialValueApplicator } from './applicators';
/**
 * Negates a functions result or, when used on a property, creates a function that
 * negates the result of a provided function.
 *
 * @param {ResolvableFunction} [fn] A resolvable function.
 * @example
 * class MyClass {
 *   @Negate('fn')
 *   fn2: () => boolean;
 *
 *   fn(): boolean {
 *     return true;
 *   }
 * }
 *
 * const myClass = new MyClass();
 *
 * myClass.fn2(); //=> false
 */
export var Negate = DecoratorFactory.createInstanceDecorator(new DecoratorConfig(negate, new PartialValueApplicator(), { property: true, optionalParams: true }));
export { Negate as negate };
export default Negate;
//# sourceMappingURL=negate.js.map