import { __extends } from "tslib";
import isFunction from 'lodash/isFunction';
import isObjectLike from 'lodash/isObjectLike';
import { Applicator } from './Applicator';
import { resolveFunction } from '../utils';
var MemoizeApplicator = /** @class */ (function (_super) {
    __extends(MemoizeApplicator, _super);
    function MemoizeApplicator() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MemoizeApplicator.prototype.apply = function (_a) {
        var value = _a.value, instance = _a.instance, execute = _a.config.execute, arg = _a.args[0], target = _a.target;
        var resolver = resolveFunction(isFunction(arg) ? arg : isObjectLike(arg) ? arg.resolver : arg, instance, target, false);
        if (resolver && instance) {
            resolver = resolver.bind(instance);
        }
        var memoized = resolver ? execute(value, resolver) : execute(value);
        if (isObjectLike(arg)) {
            var cache = arg.cache, type = arg.type;
            if (cache) {
                memoized.cache = cache;
            }
            else if (isFunction(type)) {
                memoized.cache = new type();
            }
        }
        return memoized;
    };
    return MemoizeApplicator;
}(Applicator));
export { MemoizeApplicator };
//# sourceMappingURL=MemoizeApplicator.js.map