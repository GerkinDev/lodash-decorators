import { __extends, __spreadArray } from "tslib";
import { Applicator } from './Applicator';
var InvokeApplicator = /** @class */ (function (_super) {
    __extends(InvokeApplicator, _super);
    function InvokeApplicator() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    InvokeApplicator.prototype.apply = function (_a) {
        var args = _a.args, execute = _a.config.execute, value = _a.value;
        return function () {
            var invokeArgs = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                invokeArgs[_i] = arguments[_i];
            }
            return execute.apply(void 0, __spreadArray(__spreadArray([value.bind(this)], invokeArgs, false), args, false));
        };
    };
    return InvokeApplicator;
}(Applicator));
export { InvokeApplicator };
//# sourceMappingURL=InvokeApplicator.js.map