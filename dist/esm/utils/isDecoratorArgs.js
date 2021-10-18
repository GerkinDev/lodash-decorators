import isObject from 'lodash/isObject';
import isFunction from 'lodash/isFunction';
import isString from 'lodash/isString';
export function isMethodOrPropertyDecoratorArgs() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    return args.length >= 2
        && isObject(args[0])
        && isString(args[1])
        && isFunction(args[0].constructor)
        && args[0].constructor.prototype === args[0];
}
//# sourceMappingURL=isDecoratorArgs.js.map