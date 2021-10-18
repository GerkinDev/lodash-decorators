import unary from 'lodash/unary';
import { DecoratorConfig, DecoratorFactory } from './factory';
import { PreValueApplicator } from './applicators';
export var Unary = DecoratorFactory.createDecorator(new DecoratorConfig(unary, new PreValueApplicator(), { optionalParams: true }));
export { Unary as unary };
export default Unary;
//# sourceMappingURL=unary.js.map