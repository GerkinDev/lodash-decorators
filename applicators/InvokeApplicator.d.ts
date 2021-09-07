import { Applicator, ApplicateOptions } from './Applicator';
export declare class InvokeApplicator extends Applicator {
    apply({ args, config: { execute }, value }: ApplicateOptions): any;
}
