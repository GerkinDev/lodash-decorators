import { LodashDecorator } from './common';
import { DecoratorConfig } from './DecoratorConfig';
export declare type GenericDecorator = (...args: any[]) => LodashDecorator;
export declare class InternalDecoratorFactory {
    createDecorator(config: DecoratorConfig): GenericDecorator;
    createInstanceDecorator(config: DecoratorConfig): GenericDecorator;
    private _isApplicable;
    private _resolveDescriptor;
}
export declare const DecoratorFactory: InternalDecoratorFactory;
