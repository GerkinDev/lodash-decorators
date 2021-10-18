import { copyMetadata } from './copyMetaData';
/**
 * Binds a function and copies metadata.
 *
 * @private
 * @export
 * @param {Function} fn
 * @param {*} context
 * @returns {Function}
 */
export function bind(fn, context) {
    return copyMetadata(fn.bind(context), fn);
}
//# sourceMappingURL=bind.js.map