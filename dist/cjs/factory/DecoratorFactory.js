"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DecoratorFactory = exports.InternalDecoratorFactory = void 0;
var tslib_1 = require("tslib");
var isFunction_1 = (0, tslib_1.__importDefault)(require("lodash/isFunction"));
var common_1 = require("./common");
var utils_1 = require("../utils");
var InternalDecoratorFactory = /** @class */ (function () {
    function InternalDecoratorFactory() {
    }
    InternalDecoratorFactory.prototype.createDecorator = function (config) {
        var _this = this;
        var applicator = config.applicator, optionalParams = config.optionalParams;
        return function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            var params = args;
            var decorator = function (target, name, _descriptor) {
                var descriptor = _this._resolveDescriptor(target, name, _descriptor);
                var value = descriptor.value, get = descriptor.get, set = descriptor.set;
                // If this decorator is being applied after an instance decorator we simply ignore it
                // as we can't apply it correctly.
                if (!common_1.InstanceChainMap.has([target, name])) {
                    if ((0, isFunction_1.default)(value)) {
                        descriptor.value = (0, utils_1.copyMetadata)(applicator.apply({ config: config, target: target, value: value, args: params }), value);
                    }
                    else if ((0, isFunction_1.default)(get) && config.getter) {
                        descriptor.get = (0, utils_1.copyMetadata)(applicator.apply({ config: config, target: target, value: get, args: params }), get);
                    }
                    else if ((0, isFunction_1.default)(set) && config.setter) {
                        descriptor.set = (0, utils_1.copyMetadata)(applicator.apply({ config: config, target: target, value: set, args: params }), set);
                    }
                }
                return descriptor;
            };
            if (optionalParams && utils_1.isMethodOrPropertyDecoratorArgs.apply(void 0, args)) {
                params = [];
                return decorator(args[0], args[1], args[2]);
            }
            return decorator;
        };
    };
    InternalDecoratorFactory.prototype.createInstanceDecorator = function (config) {
        var _this = this;
        var applicator = config.applicator, bound = config.bound, optionalParams = config.optionalParams;
        return function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            var params = args;
            var decorator = function (target, name, _descriptor) {
                var descriptor = _this._resolveDescriptor(target, name, _descriptor);
                var value = descriptor.value, writable = descriptor.writable, enumerable = descriptor.enumerable, configurable = descriptor.configurable, get = descriptor.get, set = descriptor.set;
                var isFirstInstance = !common_1.InstanceChainMap.has([target, name]);
                var chainData = common_1.InstanceChainMap.get([target, name]) || { fns: [], properties: [] };
                var isGetter = isFirstInstance && (0, isFunction_1.default)(get);
                var isSetter = isFirstInstance && (0, isFunction_1.default)(set);
                var isMethod = isFirstInstance && (0, isFunction_1.default)(value);
                var isProperty = isFirstInstance && !isGetter && !isSetter && !isMethod;
                var baseValue = isGetter ? get : isMethod ? value : undefined;
                chainData.properties.push(name);
                chainData.fns.push(function (fn, instance, context) {
                    if (!_this._isApplicable(context, config)) {
                        return fn;
                    }
                    if (bound) {
                        fn = (0, utils_1.bind)(fn, instance);
                    }
                    return (0, utils_1.copyMetadata)(applicator.apply({ args: params, target: target, instance: instance, value: fn, config: config }), fn);
                });
                common_1.InstanceChainMap.set([target, name], chainData);
                if (!isFirstInstance) {
                    return descriptor;
                }
                chainData.isSetter = isSetter;
                chainData.isGetter = isGetter;
                chainData.isMethod = isMethod;
                chainData.isProperty = isProperty;
                var applyChain = function (fn, context, instance) {
                    return chainData.fns.reduce(function (result, next) { return next(result, instance, context); }, fn);
                };
                var applyDecorator = function (instance) {
                    var getter = get || undefined;
                    var setter = set || undefined;
                    if (isGetter || isSetter) {
                        // If we have a getter apply the decorators to the getter and assign it to the instance.
                        if (isGetter) {
                            getter = applyChain(get, { value: get, getter: true }, instance);
                        }
                        if (isSetter) {
                            setter = applyChain(set, { value: set, setter: true }, instance);
                        }
                        Object.defineProperty(instance, name, {
                            enumerable: enumerable,
                            configurable: configurable,
                            get: getter,
                            set: setter
                        });
                    }
                    else if (isMethod || isProperty) {
                        var newFn = isMethod
                            ? applyChain(value, { value: value, method: true }, instance)
                            : applyChain(value, { value: value, property: true }, instance);
                        Object.defineProperty(instance, name, {
                            writable: writable,
                            enumerable: enumerable,
                            configurable: configurable,
                            value: newFn
                        });
                    }
                };
                if (isMethod || isProperty) {
                    delete descriptor.value;
                    delete descriptor.writable;
                }
                descriptor.get = function () {
                    // Check for direct access on the prototype.
                    // MyClass.prototype.fn <-- This should not apply the decorator.
                    if ((0, utils_1.isPrototypeAccess)(this, target)) {
                        return baseValue;
                    }
                    applyDecorator(this);
                    var descriptor2 = Object.getOwnPropertyDescriptor(this, name);
                    if (descriptor2.get) {
                        return descriptor2.get.call(this);
                    }
                    return descriptor2.value;
                };
                descriptor.set = function (value2) {
                    applyDecorator(this);
                    var descriptor2 = Object.getOwnPropertyDescriptor(this, name);
                    if (descriptor2.set) {
                        descriptor2.set.call(this, value2);
                    }
                    else if (isProperty || isMethod) {
                        this[name] = value2;
                    }
                };
                return descriptor;
            };
            if (optionalParams && utils_1.isMethodOrPropertyDecoratorArgs.apply(void 0, args)) {
                params = [];
                return decorator(args[0], args[1], args[2]);
            }
            return decorator;
        };
    };
    InternalDecoratorFactory.prototype._isApplicable = function (context, config) {
        return !Boolean(context.getter && !config.getter
            || context.setter && !config.setter
            || context.method && !config.method
            || context.property && !config.property);
    };
    InternalDecoratorFactory.prototype._resolveDescriptor = function (target, name, descriptor) {
        if (descriptor) {
            return descriptor;
        }
        return Object.getOwnPropertyDescriptor(target, name) || {};
    };
    return InternalDecoratorFactory;
}());
exports.InternalDecoratorFactory = InternalDecoratorFactory;
exports.DecoratorFactory = new InternalDecoratorFactory();
//# sourceMappingURL=DecoratorFactory.js.map