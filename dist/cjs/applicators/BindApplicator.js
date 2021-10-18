"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BindApplicator = void 0;
var tslib_1 = require("tslib");
var Applicator_1 = require("./Applicator");
var BindApplicator = /** @class */ (function (_super) {
    (0, tslib_1.__extends)(BindApplicator, _super);
    function BindApplicator() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    BindApplicator.prototype.apply = function (_a) {
        var value = _a.value, execute = _a.config.execute, args = _a.args, instance = _a.instance;
        if (!instance) {
            return value;
        }
        return execute.apply(void 0, (0, tslib_1.__spreadArray)([value, instance], args, false));
    };
    return BindApplicator;
}(Applicator_1.Applicator));
exports.BindApplicator = BindApplicator;
//# sourceMappingURL=BindApplicator.js.map