import { __extends, __spreadArray } from "tslib";
import { Applicator } from './Applicator';
var PreValueApplicator = /** @class */ (function (_super) {
    __extends(PreValueApplicator, _super);
    function PreValueApplicator() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    PreValueApplicator.prototype.apply = function (_a) {
        var value = _a.value, execute = _a.config.execute, args = _a.args;
        return execute.apply(void 0, __spreadArray([value], args, false));
    };
    return PreValueApplicator;
}(Applicator));
export { PreValueApplicator };
//# sourceMappingURL=PreValueApplicator.js.map