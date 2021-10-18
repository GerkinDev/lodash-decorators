import { ResolvableFunction, LodashMethodDecorator } from './factory';
declare const decorator: import("./factory").GenericDecorator;
export declare function Wrap(fnToWrap?: ResolvableFunction): LodashMethodDecorator;
export { Wrap as wrap };
export default decorator;
