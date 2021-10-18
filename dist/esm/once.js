import once from 'lodash/once';
import { DecoratorConfig, DecoratorFactory } from './factory';
import { PreValueApplicator } from './applicators';
/**
 * Creates a function that is restricted to invoking func once. Repeat calls to the function return the value of the first invocation.
 *
 * @example
 * class MyClass {
 *   value: number = 0;
 *
 *   @Once()
 *   fn(): number {
 *     return ++this.value;
 *   }
 * }
 *
 * const myClass = new MyClass();
 *
 * myClass.fn(); //=> 1
 * myClass.fn(); //=> 1
 * myClass.fn(); //=> 1
 */
export var Once = DecoratorFactory.createInstanceDecorator(new DecoratorConfig(once, new PreValueApplicator(), { setter: true, getter: true, optionalParams: true }));
export { Once as once };
export default Once;
//# sourceMappingURL=once.js.map