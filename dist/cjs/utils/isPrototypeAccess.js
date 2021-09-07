"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isPrototypeAccess = void 0;
function isPrototypeAccess(context, target) {
    return context === target
        || (context.constructor !== target.constructor
            && Object.getPrototypeOf(context).constructor === target.constructor);
}
exports.isPrototypeAccess = isPrototypeAccess;
//# sourceMappingURL=isPrototypeAccess.js.map