import memoize from 'lodash/memoize';
import { DecoratorConfig, DecoratorFactory } from './factory';
import { MemoizeApplicator } from './applicators';
/**
 * Memoizes a function on the prototype instead of the instance. All instances of the class use the same memoize cache.
 *
 * @param {Function} [resolver] Optional resolver
 */
export var MemoizeAll = DecoratorFactory.createDecorator(new DecoratorConfig(memoize, new MemoizeApplicator(), { optionalParams: true }));
export { MemoizeAll as memoizeAll };
export default MemoizeAll;
//# sourceMappingURL=memoizeAll.js.map