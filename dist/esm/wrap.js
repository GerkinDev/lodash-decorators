import wrap from 'lodash/wrap';
import { DecoratorConfig, DecoratorFactory } from './factory';
import { WrapApplicator } from './applicators';
var decorator = DecoratorFactory.createDecorator(new DecoratorConfig(wrap, new WrapApplicator()));
export function Wrap(fnToWrap) {
    return decorator(fnToWrap);
}
export { Wrap as wrap };
export default decorator;
//# sourceMappingURL=wrap.js.map