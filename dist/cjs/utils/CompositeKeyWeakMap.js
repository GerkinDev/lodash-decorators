"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CompositeKeyWeakMap = void 0;
var tslib_1 = require("tslib");
var isUndefined_1 = (0, tslib_1.__importDefault)(require("lodash/isUndefined"));
/**
 * A map for weakly holding nested references.
 *
 * @private
 * @export
 * @class CompositeKeyWeakMap
 * @template T
 */
var CompositeKeyWeakMap = /** @class */ (function () {
    function CompositeKeyWeakMap() {
        this._weakMap = new WeakMap();
    }
    CompositeKeyWeakMap.prototype.set = function (keys, value) {
        var map = this._weakMap;
        for (var i = 0, len = keys.length - 1; i < len; i++) {
            var key = keys[i];
            var next = map.get(key);
            if (!next) {
                next = new Map();
                map.set(key, next);
            }
            map = next;
        }
        map.set(keys[keys.length - 1], value);
    };
    CompositeKeyWeakMap.prototype.get = function (keys) {
        var next = this._weakMap;
        for (var i = 0, len = keys.length; i < len; i++) {
            next = next.get(keys[i]);
            if ((0, isUndefined_1.default)(next)) {
                break;
            }
        }
        return next;
    };
    CompositeKeyWeakMap.prototype.has = function (keys) {
        return !(0, isUndefined_1.default)(this.get(keys));
    };
    return CompositeKeyWeakMap;
}());
exports.CompositeKeyWeakMap = CompositeKeyWeakMap;
//# sourceMappingURL=CompositeKeyWeakMap.js.map