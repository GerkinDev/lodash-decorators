import throttle from 'lodash/throttle';
import { DecoratorConfig, DecoratorFactory } from './factory';
import { PreValueApplicator } from './applicators';
var decorator = DecoratorFactory.createDecorator(new DecoratorConfig(throttle, new PreValueApplicator(), { setter: true }));
export function ThrottleAll(wait, options) {
    return decorator(wait, options);
}
export { ThrottleAll as throttleAll };
export default decorator;
//# sourceMappingURL=throttleAll.js.map