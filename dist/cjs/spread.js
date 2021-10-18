"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.spread = exports.Spread = void 0;
var tslib_1 = require("tslib");
var spread_1 = (0, tslib_1.__importDefault)(require("lodash/spread"));
var factory_1 = require("./factory");
var applicators_1 = require("./applicators");
exports.Spread = factory_1.DecoratorFactory.createDecorator(new factory_1.DecoratorConfig(spread_1.default, new applicators_1.PreValueApplicator(), { optionalParams: true }));
exports.spread = exports.Spread;
exports.default = exports.Spread;
//# sourceMappingURL=spread.js.map