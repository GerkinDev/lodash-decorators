import { __extends, __spreadArray } from "tslib";
import partial from 'lodash/partial';
import { Applicator } from './Applicator';
var PartialedApplicator = /** @class */ (function (_super) {
    __extends(PartialedApplicator, _super);
    function PartialedApplicator() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    PartialedApplicator.prototype.apply = function (_a) {
        var execute = _a.config.execute, value = _a.value, args = _a.args;
        // The `partial` function is over-constrained and generics locks proper use of rest parameter.
        return partial.apply(void 0, __spreadArray([execute, value], args, false));
    };
    return PartialedApplicator;
}(Applicator));
export { PartialedApplicator };
//# sourceMappingURL=PartialedApplicator.js.map