import { __extends, __spreadArray } from "tslib";
import { Applicator } from './Applicator';
var PostValueApplicator = /** @class */ (function (_super) {
    __extends(PostValueApplicator, _super);
    function PostValueApplicator() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    PostValueApplicator.prototype.apply = function (_a) {
        var execute = _a.config.execute, args = _a.args, value = _a.value;
        return execute.apply(void 0, __spreadArray(__spreadArray([], args, false), [value], false));
    };
    return PostValueApplicator;
}(Applicator));
export { PostValueApplicator };
//# sourceMappingURL=PostValueApplicator.js.map