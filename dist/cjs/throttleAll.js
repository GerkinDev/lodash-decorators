"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.throttleAll = exports.ThrottleAll = void 0;
var tslib_1 = require("tslib");
var throttle_1 = (0, tslib_1.__importDefault)(require("lodash/throttle"));
var factory_1 = require("./factory");
var applicators_1 = require("./applicators");
var decorator = factory_1.DecoratorFactory.createDecorator(new factory_1.DecoratorConfig(throttle_1.default, new applicators_1.PreValueApplicator(), { setter: true }));
function ThrottleAll(wait, options) {
    return decorator(wait, options);
}
exports.ThrottleAll = ThrottleAll;
exports.throttleAll = ThrottleAll;
exports.default = decorator;
//# sourceMappingURL=throttleAll.js.map