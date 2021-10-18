import partial from 'lodash/partial';
import { DecoratorConfig, DecoratorFactory } from './factory';
import { PartialApplicator } from './applicators';
var decorator = DecoratorFactory.createInstanceDecorator(new DecoratorConfig(partial, new PartialApplicator(), { property: true, method: false }));
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
export function Partial() {
    var partials = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        partials[_i] = arguments[_i];
    }
    return decorator.apply(void 0, partials);
}
export { Partial as partial };
export default decorator;
//# sourceMappingURL=partial.js.map