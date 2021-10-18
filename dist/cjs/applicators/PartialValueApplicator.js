"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PartialValueApplicator = void 0;
var tslib_1 = require("tslib");
var isFunction_1 = (0, tslib_1.__importDefault)(require("lodash/isFunction"));
var Applicator_1 = require("./Applicator");
var utils_1 = require("../utils");
var PartialValueApplicator = /** @class */ (function (_super) {
    (0, tslib_1.__extends)(PartialValueApplicator, _super);
    function PartialValueApplicator() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    PartialValueApplicator.prototype.apply = function (_a) {
        var args = _a.args, target = _a.target, value = _a.value, execute = _a.config.execute;
        return function () {
            var invokeArgs = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                invokeArgs[_i] = arguments[_i];
            }
            var fn = value;
            var argIndex = 0;
            if (!(0, isFunction_1.default)(fn)) {
                fn = (0, utils_1.resolveFunction)(args[0], this, target);
                argIndex = 1;
            }
            return execute.apply(void 0, (0, tslib_1.__spreadArray)([fn], args.slice(argIndex), false)).apply(this, invokeArgs);
        };
    };
    return PartialValueApplicator;
}(Applicator_1.Applicator));
exports.PartialValueApplicator = PartialValueApplicator;
//# sourceMappingURL=PartialValueApplicator.js.map