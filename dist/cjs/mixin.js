"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mixin = exports.Mixin = void 0;
var tslib_1 = require("tslib");
var assign_1 = (0, tslib_1.__importDefault)(require("lodash/assign"));
/**
 * Mixins an object into the classes prototype.
 *
 * @export
 * @param {...Object[]} srcs
 * @returns {ClassDecorator}
 * @example
 *
 * const myMixin = {
 *   blorg: () => 'blorg!'
 * }
 *
 * @Mixin(myMixin)
 * class MyClass {}
 *
 * const myClass = new MyClass();
 *
 * myClass.blorg(); // => 'blorg!'
 */
function Mixin() {
    var srcs = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        srcs[_i] = arguments[_i];
    }
    return (function (target) {
        assign_1.default.apply(void 0, (0, tslib_1.__spreadArray)([target.prototype], srcs, false));
        return target;
    });
}
exports.Mixin = Mixin;
exports.mixin = Mixin;
exports.default = Mixin;
//# sourceMappingURL=mixin.js.map