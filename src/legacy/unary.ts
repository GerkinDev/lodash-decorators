import { DecoratorFactory, BiTypedMethodDecorator } from './factory';
import config from '../configs/unary';

export const Unary = DecoratorFactory.legacy.createDecorator(
  config
) as BiTypedMethodDecorator;
export { Unary as unary };
export default Unary;