"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PreValueApplicator = void 0;
var tslib_1 = require("tslib");
var Applicator_1 = require("./Applicator");
var PreValueApplicator = /** @class */ (function (_super) {
    (0, tslib_1.__extends)(PreValueApplicator, _super);
    function PreValueApplicator() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    PreValueApplicator.prototype.apply = function (_a) {
        var value = _a.value, execute = _a.config.execute, args = _a.args;
        return execute.apply(void 0, (0, tslib_1.__spreadArray)([value], args, false));
    };
    return PreValueApplicator;
}(Applicator_1.Applicator));
exports.PreValueApplicator = PreValueApplicator;
//# sourceMappingURL=PreValueApplicator.js.map