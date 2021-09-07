"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostValueApplicator = void 0;
var tslib_1 = require("tslib");
var Applicator_1 = require("./Applicator");
var PostValueApplicator = /** @class */ (function (_super) {
    (0, tslib_1.__extends)(PostValueApplicator, _super);
    function PostValueApplicator() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    PostValueApplicator.prototype.apply = function (_a) {
        var execute = _a.config.execute, args = _a.args, value = _a.value;
        return execute.apply(void 0, (0, tslib_1.__spreadArray)((0, tslib_1.__spreadArray)([], args, false), [value], false));
    };
    return PostValueApplicator;
}(Applicator_1.Applicator));
exports.PostValueApplicator = PostValueApplicator;
//# sourceMappingURL=PostValueApplicator.js.map