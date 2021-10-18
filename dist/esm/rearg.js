import { __spreadArray } from "tslib";
import rearg from 'lodash/rearg';
import { DecoratorConfig, DecoratorFactory } from './factory';
import { PartialValueApplicator } from './applicators';
var decorator = DecoratorFactory.createInstanceDecorator(new DecoratorConfig(rearg, new PartialValueApplicator(), { property: true }));
export function Rearg(indexes) {
    var args = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        args[_i - 1] = arguments[_i];
    }
    return decorator.apply(void 0, __spreadArray([indexes], args, false));
}
export { Rearg as rearg };
export default decorator;
//# sourceMappingURL=rearg.js.map