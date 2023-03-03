import { pick as lodashPick } from 'lodash';

import { pick } from './pick';

describe('pick', () => {
  it('picks a prop', () => {
    expect(pick({ foo: 1, bar: 2 }, 'foo')).toEqual({ foo: 1 });
  });

  it('typescript fails on unknown prop', () => {
    // @ts-expect-error wrong on purpose
    expect(pick({ foo: 1 }, 'bar')).toEqual({});
    // we can remove our overwrite if this fails to compile in a future version of lodash
    expect(lodashPick({ foo: 1 }, 'bar')).toEqual({});
  });
});
