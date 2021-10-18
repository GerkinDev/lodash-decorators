"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.rearg = exports.Rearg = void 0;
var tslib_1 = require("tslib");
var rearg_1 = (0, tslib_1.__importDefault)(require("lodash/rearg"));
var factory_1 = require("./factory");
var applicators_1 = require("./applicators");
var decorator = factory_1.DecoratorFactory.createInstanceDecorator(new factory_1.DecoratorConfig(rearg_1.default, new applicators_1.PartialValueApplicator(), { property: true }));
function Rearg(indexes) {
    var args = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        args[_i - 1] = arguments[_i];
    }
    return decorator.apply(void 0, (0, tslib_1.__spreadArray)([indexes], args, false));
}
exports.Rearg = Rearg;
exports.rearg = Rearg;
exports.default = decorator;
//# sourceMappingURL=rearg.js.map