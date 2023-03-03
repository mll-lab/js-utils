import { pick as lodashPick } from 'lodash';

/**
 * A version of lodash.pick() that forces the strict signature.
 *
 * lodash.pick({}, 'dummy') -> ok
 * pick({}, 'dummy') -> error
 */
export function pick<T extends object, K extends keyof T>(
  object: T,
  ...props: Array<K>
): Pick<T, K> {
  return lodashPick(object, props);
}
