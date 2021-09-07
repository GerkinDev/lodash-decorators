import { __spreadArray } from "tslib";
import { assignAll } from './assignAll';
var PROPERTY_EXCLUDES = [
    'length',
    'name',
    'arguments',
    'called',
    'prototype'
];
/**
 * Wraps a constructor in a wrapper function and copies all static properties
 * and methods to the new constructor.
 *
 * @export
 * @param {Function} Ctor
 * @param {(Ctor: Function, ...args: any[]) => any} wrapper
 * @returns {Function}
 */
export function wrapConstructor(Ctor, wrapper) {
    function ConstructorWrapper() {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        return wrapper.call.apply(wrapper, __spreadArray([this, Ctor], args, false));
    }
    ConstructorWrapper.prototype = Ctor.prototype;
    Object.defineProperty(ConstructorWrapper, 'name', {
        // These values should coincide with the default descriptor values for `name`.
        configurable: true,
        enumerable: false,
        value: Ctor.name,
        writable: false
    });
    return assignAll(ConstructorWrapper, Ctor, PROPERTY_EXCLUDES);
}
//# sourceMappingURL=wrapConstructor.js.map