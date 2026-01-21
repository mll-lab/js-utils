/**
 * Extract a message from a caught error.
 *
 * Since you can throw anything in JavaScript,
 * the given error could be of any type.
 */
export function errorMessage(error: unknown): string {
  const message = hasMessage(error) ? error.message : error;

  // eslint-disable-next-line @mll-lab/prefer-loose-nullish-equality -- intentionally distinguish null and undefined
  if (message === undefined) {
    return 'undefined';
  }

  return typeof message === 'string' ? message : JSON.stringify(error);
}

function hasMessage(error: unknown): error is { message: unknown } {
  return error != null && typeof error === 'object' && 'message' in error;
}
