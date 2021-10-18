"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.memoizeAll = exports.MemoizeAll = void 0;
var tslib_1 = require("tslib");
var memoize_1 = (0, tslib_1.__importDefault)(require("lodash/memoize"));
var factory_1 = require("./factory");
var applicators_1 = require("./applicators");
/**
 * Memoizes a function on the prototype instead of the instance. All instances of the class use the same memoize cache.
 *
 * @param {Function} [resolver] Optional resolver
 */
exports.MemoizeAll = factory_1.DecoratorFactory.createDecorator(new factory_1.DecoratorConfig(memoize_1.default, new applicators_1.MemoizeApplicator(), { optionalParams: true }));
exports.memoizeAll = exports.MemoizeAll;
exports.default = exports.MemoizeAll;
//# sourceMappingURL=memoizeAll.js.map