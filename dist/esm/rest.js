import rest from 'lodash/rest';
import { DecoratorConfig, DecoratorFactory } from './factory';
import { PreValueApplicator } from './applicators';
export var Rest = DecoratorFactory.createDecorator(new DecoratorConfig(rest, new PreValueApplicator(), { optionalParams: true }));
export { Rest as rest };
export default Rest;
//# sourceMappingURL=rest.js.map