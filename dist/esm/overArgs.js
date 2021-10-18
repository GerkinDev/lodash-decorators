import overArgs from 'lodash/overArgs';
import { DecoratorConfig, DecoratorFactory } from './factory';
import { PreValueApplicator } from './applicators';
var decorator = DecoratorFactory.createDecorator(new DecoratorConfig(overArgs, new PreValueApplicator(), { setter: true }));
/**
 * Creates a function that invokes func with its arguments transformed.
 *
 * @export
 * @param {...Function[]} transforms
 * @returns {LodashMethodDecorator}
 * @example
 * class MyClass {
 *   @OverArgs(_.castArray)
 *   fn(list) {
 *     return list;
 *   }
 * }
 *
 * const myClass = new MyClass();
 *
 * myClass.fn([ 1 ]); //=> [ 1 ];
 * myClass.fn(1); //=> [ 1 ];
 */
export function OverArgs() {
    var transforms = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        transforms[_i] = arguments[_i];
    }
    return decorator.apply(void 0, transforms);
}
export { OverArgs as overArgs };
export default decorator;
//# sourceMappingURL=overArgs.js.map