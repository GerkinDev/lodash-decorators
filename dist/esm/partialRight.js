import partialRight from 'lodash/partialRight';
import { DecoratorConfig, DecoratorFactory } from './factory';
import { PartialApplicator } from './applicators';
var decorator = DecoratorFactory.createInstanceDecorator(new DecoratorConfig(partialRight, new PartialApplicator(), { property: true, method: false }));
export function PartialRight() {
    var partials = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        partials[_i] = arguments[_i];
    }
    return decorator.apply(void 0, partials);
}
export { PartialRight as partialRight };
export default decorator;
//# sourceMappingURL=partialRight.js.map