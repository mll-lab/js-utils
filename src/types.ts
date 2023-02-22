/** Recursively optional deep partial type. */
export type DeepPartial<T> = {
  [P in keyof T]?: DeepPartial<T[P]>;
};

/** Either a value or a promise that will resolve to that value. */
export type MaybePromise<T> = T | Promise<T>;

/** Modify a given type, e.g. to make some properties optional. */
export type Modify<T, R> = Pick<T, Exclude<keyof T, keyof R>> & R;

/** The missing counterpart to keyof. */
export type ValueOf<T> = T[keyof T];

/** Add null and undefined to a type. */
export type Maybe<T> = T | null | undefined;

/** Only props that are contained in T but not U. */
type Subtract<T, U> = {
  [P in keyof T]: T[P];
} & {
  [P in keyof U]?: never;
};

/** Only one of both types (exclusively). */
export type Either<T, U> = Subtract<T, U> | Subtract<U, T>;

/** Only the given keys and no others. */
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
