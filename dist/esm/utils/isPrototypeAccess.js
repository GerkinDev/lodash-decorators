export function isPrototypeAccess(context, target) {
    return context === target
        || (context.constructor !== target.constructor
            && Object.getPrototypeOf(context).constructor === target.constructor);
}
//# sourceMappingURL=isPrototypeAccess.js.map