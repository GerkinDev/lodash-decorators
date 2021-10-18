"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InvokeApplicator = void 0;
var tslib_1 = require("tslib");
var Applicator_1 = require("./Applicator");
var InvokeApplicator = /** @class */ (function (_super) {
    (0, tslib_1.__extends)(InvokeApplicator, _super);
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
            return execute.apply(void 0, (0, tslib_1.__spreadArray)((0, tslib_1.__spreadArray)([value.bind(this)], invokeArgs, false), args, false));
        };
    };
    return InvokeApplicator;
}(Applicator_1.Applicator));
exports.InvokeApplicator = InvokeApplicator;
//# sourceMappingURL=InvokeApplicator.js.map