import { __spreadArray } from "tslib";
import assign from 'lodash/assign';
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
export function Mixin() {
    var srcs = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        srcs[_i] = arguments[_i];
    }
    return (function (target) {
        assign.apply(void 0, __spreadArray([target.prototype], srcs, false));
        return target;
    });
}
export { Mixin as mixin };
export default Mixin;
//# sourceMappingURL=mixin.js.map