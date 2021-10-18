import { __extends } from "tslib";
import { Applicator } from './Applicator';
import { resolveFunction } from '../utils';
var WrapApplicator = /** @class */ (function (_super) {
    __extends(WrapApplicator, _super);
    function WrapApplicator() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    WrapApplicator.prototype.apply = function (_a) {
        var args = _a.args, execute = _a.config.execute, target = _a.target, value = _a.value;
        return function () {
            var invokeArgs = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                invokeArgs[_i] = arguments[_i];
            }
            return execute(resolveFunction(args[0], this, target), value).apply(this, invokeArgs);
        };
    };
    return WrapApplicator;
}(Applicator));
export { WrapApplicator };
//# sourceMappingURL=WrapApplicator.js.map