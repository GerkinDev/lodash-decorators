import { DecoratorConfig, DecoratorFactory } from './factory';
import { PreValueApplicator } from './applicators';
import { returnAtIndex } from './utils';
/**
 * Returns the first argument from the function regardless of
 * the decorated functions return value.
 */
export var Tap = DecoratorFactory.createDecorator(new DecoratorConfig(function (fn) { return returnAtIndex(fn, 0); }, new PreValueApplicator(), { optionalParams: true }));
export { Tap as tap };
export default Tap;
//# sourceMappingURL=tap.js.map