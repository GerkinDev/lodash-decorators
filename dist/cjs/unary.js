"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.unary = exports.Unary = void 0;
var tslib_1 = require("tslib");
var unary_1 = (0, tslib_1.__importDefault)(require("lodash/unary"));
var factory_1 = require("./factory");
var applicators_1 = require("./applicators");
exports.Unary = factory_1.DecoratorFactory.createDecorator(new factory_1.DecoratorConfig(unary_1.default, new applicators_1.PreValueApplicator(), { optionalParams: true }));
exports.unary = exports.Unary;
exports.default = exports.Unary;
//# sourceMappingURL=unary.js.map