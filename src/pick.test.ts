import { pick } from './pick';

describe('pick', () => {
  it('picks a prop', () => {
    expect(pick({ foo: 1, bar: 2 }, 'foo')).toEqual({ foo: 1 });
  });

  it('typescript fails on unknown prop', () => {
    // @ts-expect-error wrong on purpose
    expect(pick({ foo: 1 }, 'bar')).toEqual({});
  });
});
