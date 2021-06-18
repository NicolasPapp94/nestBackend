import { Products } from './productsDTO';

describe('Products', () => {
  it('should be defined', () => {
    expect(new Products()).toBeDefined();
  });
});
