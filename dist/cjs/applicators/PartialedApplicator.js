"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PartialedApplicator = void 0;
var tslib_1 = require("tslib");
var partial_1 = (0, tslib_1.__importDefault)(require("lodash/partial"));
var Applicator_1 = require("./Applicator");
var PartialedApplicator = /** @class */ (function (_super) {
    (0, tslib_1.__extends)(PartialedApplicator, _super);
    function PartialedApplicator() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    PartialedApplicator.prototype.apply = function (_a) {
        var execute = _a.config.execute, value = _a.value, args = _a.args;
        // The `partial` function is over-constrained and generics locks proper use of rest parameter.
        return partial_1.default.apply(void 0, (0, tslib_1.__spreadArray)([execute, value], args, false));
    };
    return PartialedApplicator;
}(Applicator_1.Applicator));
exports.PartialedApplicator = PartialedApplicator;
//# sourceMappingURL=PartialedApplicator.js.map