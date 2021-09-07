import { LodashDecorator, ResolvableFunction } from './factory';
declare const decorator: import("./factory").GenericDecorator;
export declare function Rearg(indexes: ResolvableFunction | number | number[], ...args: (number | number[])[]): LodashDecorator;
export { Rearg as rearg };
export default decorator;
