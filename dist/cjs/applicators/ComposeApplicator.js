"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ComposeApplicator = void 0;
var tslib_1 = require("tslib");
var identity_1 = (0, tslib_1.__importDefault)(require("lodash/identity"));
var Applicator_1 = require("./Applicator");
var utils_1 = require("../utils");
var ComposeApplicator = /** @class */ (function (_super) {
    (0, tslib_1.__extends)(ComposeApplicator, _super);
    function ComposeApplicator(_config) {
        if (_config === void 0) { _config = {}; }
        var _this = _super.call(this) || this;
        _this._config = _config;
        return _this;
    }
    Object.defineProperty(ComposeApplicator.prototype, "post", {
        get: function () {
            return this._config.post === true;
        },
        enumerable: false,
        configurable: true
    });
    ComposeApplicator.prototype.apply = function (_a) {
        var execute = _a.config.execute, _b = _a.value, value = _b === void 0 ? identity_1.default : _b, args = _a.args, target = _a.target;
        var applicator = this;
        return function () {
            var _this = this;
            var invokeArgs = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                invokeArgs[_i] = arguments[_i];
            }
            var _args = (0, tslib_1.__spreadArray)([], args.map(function (method) { return (0, utils_1.resolveFunction)(method, _this, target); }), true);
            if (applicator.post) {
                _args.push(value);
            }
            else {
                _args.unshift(value);
            }
            return execute.apply(void 0, _args).apply(this, invokeArgs);
        };
    };
    return ComposeApplicator;
}(Applicator_1.Applicator));
exports.ComposeApplicator = ComposeApplicator;
//# sourceMappingURL=ComposeApplicator.js.map