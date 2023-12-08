import { callSequentially, mapSequentially } from './promise';

describe('callSequentially', () => {
  it('throws and aborts if callback throws', async () => {
    const foo = 'foo';
    const first = jest.fn().mockImplementation(() => {
      throw new Error(foo);
    });
    const second = jest.fn();

    await expect(async () => {
      await callSequentially([first, second]);
    }).rejects.toThrow(foo);
    expect(first).toHaveBeenCalledTimes(1);
    expect(second).toHaveBeenCalledTimes(0);
  });
});

describe('mapSequentially', () => {
  it('returns empty array', async () => {
    expect(await mapSequentially([], () => Promise.resolve())).toEqual([]);
  });

  it('requires promises', async () => {
    // @ts-expect-error should fail to compile, since it is equivalent to just .map()
    await mapSequentially([], () => 1);
  });

  it('maps values', async () => {
    expect(
      await mapSequentially([1, 2], (value) => Promise.resolve(value * 2)),
    ).toEqual([2, 4]);
  });

  it('throws and aborts if callback throws', async () => {
    const callback = jest
      .fn()
      .mockImplementation((value: string | undefined) => {
        throw new Error(value);
      });

    const foo = 'foo';
    await expect(async () => {
      await mapSequentially([foo, 'bar'], callback);
    }).rejects.toThrow(foo);
    expect(callback).toHaveBeenCalledTimes(1);
  });
});
