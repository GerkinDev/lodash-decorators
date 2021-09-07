import spread from 'lodash/spread';
import { DecoratorConfig, DecoratorFactory } from './factory';
import { PreValueApplicator } from './applicators';
export var Spread = DecoratorFactory.createDecorator(new DecoratorConfig(spread, new PreValueApplicator(), { optionalParams: true }));
export { Spread as spread };
export default Spread;
//# sourceMappingURL=spread.js.map