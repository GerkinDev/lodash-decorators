import { Applicator, ApplicateOptions } from './Applicator';
export declare class ComposeApplicator extends Applicator {
    private _config;
    constructor(_config?: {
        post?: boolean;
    });
    get post(): boolean;
    apply({ config: { execute }, value, args, target }: ApplicateOptions): any;
}
