import throttle from 'lodash/throttle';
import { DecoratorConfig, DecoratorFactory } from './factory';
import { PreValueApplicator } from './applicators';
export var Throttle = DecoratorFactory.createInstanceDecorator(new DecoratorConfig(throttle, new PreValueApplicator(), { setter: true, getter: true, optionalParams: true }));
export var ThrottleGetter = DecoratorFactory.createInstanceDecorator(new DecoratorConfig(throttle, new PreValueApplicator(), { getter: true, optionalParams: true }));
export var ThrottleSetter = DecoratorFactory.createInstanceDecorator(new DecoratorConfig(throttle, new PreValueApplicator(), { setter: true, optionalParams: true }));
export { Throttle as throttle };
export { ThrottleGetter as throttleGetter };
export { ThrottleSetter as throttleSetter };
export default Throttle;
//# sourceMappingURL=throttle.js.map