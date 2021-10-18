import { expect } from 'chai';

import { Once } from './once';

describe('once', () => {
  it('should invoke the method only once', () => {
    let calls = 0;

    class MyClass {
      @Once()
      fn() {
        calls++;
      }
    }

    const myClass = new MyClass();
    const myClass2 = new MyClass();

    myClass.fn();
    myClass.fn();
    myClass.fn();

    expect(calls, 'single class').to.equal(1);

    myClass2.fn();
    myClass2.fn();
    myClass2.fn();

    expect(calls, 'multiple class').to.equal(2);
  });
  it('should invoke the getter only once', () => {
    let calls = 0;

    class MyClass {
      @Once()
      get prop() {
        return calls++;
      }
    }

    const myClass = new MyClass();
    const myClass2 = new MyClass();

    myClass.prop;
    myClass.prop;
    myClass.prop;

    expect(calls, 'single class').to.equal(1);

    myClass2.prop;
    myClass2.prop;
    myClass2.prop;

    expect(calls, 'multiple class').to.equal(2);
  });
});