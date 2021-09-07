import isFunction from 'lodash/isFunction';
import { InstanceChainMap } from './factory';
import { Bind } from './bind';
/**
 * Binds methods of an object to the object itself, overwriting the existing method.
 *
 * @export
 * @param {string[]} [methods=[]]
 * @returns {ClassDecorator}
 * @example
 *
 * @BindAll()
 * class MyClass {
 *   bound() {
 *     return this;
 *   }
 *
 *   unbound() {
 *     return this;
 *   }
 * }
 *
 * const myClass = new MyClass();
 *
 * myClass.bound.call(null); // => MyClass {}
 * myClass.unbound.call(null); // => MyClass {}
 */
export function BindAll(methods) {
    if (methods === void 0) { methods = []; }
    return function (target) {
        bindAllMethods(target, methods);
    };
}
function bindAllMethods(target, methods) {
    if (methods === void 0) { methods = []; }
    var targetProto = target.prototype;
    var proto = target.prototype;
    var boundKeys = [];
    while (proto && proto !== Object.prototype) {
        for (var _i = 0, _a = Object.getOwnPropertyNames(proto); _i < _a.length; _i++) {
            var key = _a[_i];
            var include = methods.length ? methods.indexOf(key) !== -1 : true;
            var descriptor = Object.getOwnPropertyDescriptor(proto, key);
            if (descriptor && include && key !== 'constructor') {
                // If this property is a getter and it's NOT an instance decorated
                // method, ignore it. Instance decorators are getters until first accessed.
                if (descriptor.get) {
                    var chainData = InstanceChainMap.get([proto, key]);
                    if (!chainData || !chainData.isMethod) {
                        continue;
                    }
                }
                if (isFunction(proto[key]) && boundKeys.indexOf(key) === -1) {
                    Object.defineProperty(targetProto, key, Bind(proto, key, descriptor));
                    boundKeys.push(key);
                }
            }
        }
        proto = Object.getPrototypeOf(proto);
    }
}
export { BindAll as bindAll };
export default BindAll;
//# sourceMappingURL=bindAll.js.map