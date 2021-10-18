import { __extends, __spreadArray } from "tslib";
import isFunction from 'lodash/isFunction';
import { Applicator } from './Applicator';
import { resolveFunction } from '../utils';
var PartialValueApplicator = /** @class */ (function (_super) {
    __extends(PartialValueApplicator, _super);
    function PartialValueApplicator() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    PartialValueApplicator.prototype.apply = function (_a) {
        var args = _a.args, target = _a.target, value = _a.value, execute = _a.config.execute;
        return function () {
            var invokeArgs = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                invokeArgs[_i] = arguments[_i];
            }
            var fn = value;
            var argIndex = 0;
            if (!isFunction(fn)) {
                fn = resolveFunction(args[0], this, target);
                argIndex = 1;
            }
            return execute.apply(void 0, __spreadArray([fn], args.slice(argIndex), false)).apply(this, invokeArgs);
        };
    };
    return PartialValueApplicator;
}(Applicator));
export { PartialValueApplicator };
//# sourceMappingURL=PartialValueApplicator.js.map