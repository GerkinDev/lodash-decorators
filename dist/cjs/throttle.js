"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.throttleSetter = exports.throttleGetter = exports.throttle = exports.ThrottleSetter = exports.ThrottleGetter = exports.Throttle = void 0;
var tslib_1 = require("tslib");
var throttle_1 = (0, tslib_1.__importDefault)(require("lodash/throttle"));
var factory_1 = require("./factory");
var applicators_1 = require("./applicators");
exports.Throttle = factory_1.DecoratorFactory.createInstanceDecorator(new factory_1.DecoratorConfig(throttle_1.default, new applicators_1.PreValueApplicator(), { setter: true, getter: true, optionalParams: true }));
exports.throttle = exports.Throttle;
exports.ThrottleGetter = factory_1.DecoratorFactory.createInstanceDecorator(new factory_1.DecoratorConfig(throttle_1.default, new applicators_1.PreValueApplicator(), { getter: true, optionalParams: true }));
exports.throttleGetter = exports.ThrottleGetter;
exports.ThrottleSetter = factory_1.DecoratorFactory.createInstanceDecorator(new factory_1.DecoratorConfig(throttle_1.default, new applicators_1.PreValueApplicator(), { setter: true, optionalParams: true }));
exports.throttleSetter = exports.ThrottleSetter;
exports.default = exports.Throttle;
//# sourceMappingURL=throttle.js.map