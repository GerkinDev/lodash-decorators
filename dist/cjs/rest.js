"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.rest = exports.Rest = void 0;
var tslib_1 = require("tslib");
var rest_1 = (0, tslib_1.__importDefault)(require("lodash/rest"));
var factory_1 = require("./factory");
var applicators_1 = require("./applicators");
exports.Rest = factory_1.DecoratorFactory.createDecorator(new factory_1.DecoratorConfig(rest_1.default, new applicators_1.PreValueApplicator(), { optionalParams: true }));
exports.rest = exports.Rest;
exports.default = exports.Rest;
//# sourceMappingURL=rest.js.map