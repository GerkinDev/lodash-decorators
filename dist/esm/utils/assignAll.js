import { __spreadArray } from "tslib";
import without from 'lodash/without';
import attempt from 'lodash/attempt';
import isObject from 'lodash/isObject';
/**
 * Assigns all properties from an object to another object including non enumerable
 * properties.
 *
 * @export
 * @template T
 * @template U
 * @param {T} to
 * @param {U} from
 * @param {string[]} [excludes=[]]
 * @returns {T}
 */
export function assignAll(to, from, excludes) {
    if (excludes === void 0) { excludes = []; }
    var properties = without.apply(void 0, __spreadArray([Object.getOwnPropertyNames(from)], excludes, false));
    for (var _i = 0, properties_1 = properties; _i < properties_1.length; _i++) {
        var prop = properties_1[_i];
        attempt(assignProperty, to, from, prop);
    }
    return to;
}
/**
 * Assigns a property from one object to another while retaining descriptor properties.
 *
 * @export
 * @template T
 * @template U
 * @param {T} to
 * @param {U} from
 * @param {string} prop
 */
export function assignProperty(to, from, prop) {
    var descriptor = Object.getOwnPropertyDescriptor(to, prop);
    if (!descriptor || descriptor.configurable) {
        var srcDescriptor = Object.getOwnPropertyDescriptor(from, prop);
        if (isObject(srcDescriptor)) {
            Object.defineProperty(to, prop, srcDescriptor);
        }
        else {
            to[prop] = from[prop];
        }
    }
}
//# sourceMappingURL=assignAll.js.map