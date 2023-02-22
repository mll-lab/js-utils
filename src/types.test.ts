import {
  DeepPartial,
  Either,
  Exact,
  Maybe,
  MaybePromise,
  Modify,
  ValueOf,
} from './types';

type Bar = {
  baz: number;
};

type Obj = {
  foo: string;
  bar: Bar;
};

// DeepPartial
export const allowsAssigningEmptyObjectToDeepPartial: DeepPartial<Obj> = {};

// MaybePromise
export async function acceptsMaybePromise(
  v: MaybePromise<number>,
): Promise<number> {
  const resolved = await v;
  return resolved * 2;
}

// Modify
export const modifiedType: Modify<Obj, { foo: number }> = {
  foo: 2,
  bar: { baz: 3 },
};

// ValueOf
export function acceptsValueOf(v: ValueOf<Obj>): string | Bar {
  return v;
}

// Maybe
export const maybeAllowsNull: Maybe<number> = null;
export const maybeAllowsUndefined: Maybe<number> = undefined;
export const maybeAllowsT: Maybe<number> = 1;
// @ts-expect-error intentionally wrong
export const maybeDoesNotAllowOtherType: Maybe<number> = 'string';

// Either
type BarOrObj = Either<Bar, Obj>;
export const onlyFoo: BarOrObj = { foo: 'asdf', bar: { baz: 2 } };
export const onlyBar: BarOrObj = { baz: 2 };
// @ts-expect-error intentionally wrong
export const both: BarOrObj = { foo: 'asdf', bar: { baz: 2 }, baz: 3 };
// @ts-expect-error intentionally wrong
export const none: BarOrObj = {};

// Exact
type ExactlyBar = Exact<Bar>;
export const exactlyBar: ExactlyBar = { baz: 3 };
// @ts-expect-error intentionally wrong
export const lessThanBar: ExactlyBar = {};
// @ts-expect-error intentionally wrong
export const moreThanBar: ExactlyBar = {};
