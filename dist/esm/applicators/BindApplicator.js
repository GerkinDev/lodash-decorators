import { __extends, __spreadArray } from "tslib";
import { Applicator } from './Applicator';
var BindApplicator = /** @class */ (function (_super) {
    __extends(BindApplicator, _super);
    function BindApplicator() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    BindApplicator.prototype.apply = function (_a) {
        var value = _a.value, execute = _a.config.execute, args = _a.args, instance = _a.instance;
        if (!instance) {
            return value;
        }
        return execute.apply(void 0, __spreadArray([value, instance], args, false));
    };
    return BindApplicator;
}(Applicator));
export { BindApplicator };
//# sourceMappingURL=BindApplicator.js.map