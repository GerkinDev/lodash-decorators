import forOwn from 'lodash/forOwn';
/**
 * Used to copy over meta data from function to function.
 * If meta data is attached to a function. This can get lost
 * when wrapping functions. This tries to persist that.
 *
 * @private
 */
export function copyMetadata(to, from) {
    forOwn(from, function (value, key) { return to[key] = value; });
    return to;
}
//# sourceMappingURL=copyMetaData.js.map