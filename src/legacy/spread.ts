import { DecoratorFactory, BiTypedMethodDecorator1 } from './factory';
import config from '../configs/spread';

export const Spread = DecoratorFactory.legacy.createDecorator(
  config
) as BiTypedMethodDecorator1<number>;
export { Spread as spread };
export default Spread;