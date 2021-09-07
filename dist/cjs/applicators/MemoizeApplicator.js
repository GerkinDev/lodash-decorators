"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MemoizeApplicator = void 0;
var tslib_1 = require("tslib");
var isFunction_1 = (0, tslib_1.__importDefault)(require("lodash/isFunction"));
var isObjectLike_1 = (0, tslib_1.__importDefault)(require("lodash/isObjectLike"));
var Applicator_1 = require("./Applicator");
var utils_1 = require("../utils");
var MemoizeApplicator = /** @class */ (function (_super) {
    (0, tslib_1.__extends)(MemoizeApplicator, _super);
    function MemoizeApplicator() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MemoizeApplicator.prototype.apply = function (_a) {
        var value = _a.value, instance = _a.instance, execute = _a.config.execute, arg = _a.args[0], target = _a.target;
        var resolver = (0, utils_1.resolveFunction)((0, isFunction_1.default)(arg) ? arg : (0, isObjectLike_1.default)(arg) ? arg.resolver : arg, instance, target, false);
        if (resolver && instance) {
            resolver = resolver.bind(instance);
        }
        var memoized = resolver ? execute(value, resolver) : execute(value);
        if ((0, isObjectLike_1.default)(arg)) {
            var cache = arg.cache, type = arg.type;
            if (cache) {
                memoized.cache = cache;
            }
            else if ((0, isFunction_1.default)(type)) {
                memoized.cache = new type();
            }
        }
        return memoized;
    };
    return MemoizeApplicator;
}(Applicator_1.Applicator));
exports.MemoizeApplicator = MemoizeApplicator;
//# sourceMappingURL=MemoizeApplicator.js.map