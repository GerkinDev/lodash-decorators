import { Applicator } from '../applicators';
export interface DecoratorConfigOptions {
    bound?: boolean;
    setter?: boolean;
    getter?: boolean;
    property?: boolean;
    method?: boolean;
    optionalParams?: boolean;
}
export declare class DecoratorConfig {
    readonly execute: Function;
    readonly applicator: Applicator;
    readonly options: DecoratorConfigOptions;
    constructor(execute: Function, applicator: Applicator, options?: DecoratorConfigOptions);
    get bound(): boolean;
    get setter(): boolean;
    get getter(): boolean;
    get property(): boolean;
    get method(): boolean;
    get optionalParams(): boolean;
}
