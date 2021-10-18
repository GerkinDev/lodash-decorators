import { __extends, __spreadArray } from "tslib";
import { Applicator } from './Applicator';
import { resolveFunction } from '../utils';
var PartialApplicator = /** @class */ (function (_super) {
    __extends(PartialApplicator, _super);
    function PartialApplicator() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    PartialApplicator.prototype.apply = function (_a) {
        var args = _a.args, target = _a.target, execute = _a.config.execute;
        return function () {
            var invokeArgs = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                invokeArgs[_i] = arguments[_i];
            }
            return execute.apply(void 0, __spreadArray([resolveFunction(args[0], this, target)], args.slice(1), false)).apply(this, invokeArgs);
        };
    };
    return PartialApplicator;
}(Applicator));
export { PartialApplicator };
//# sourceMappingURL=PartialApplicator.js.map