/**
 * Extract a message from a caught error.
 *
 * Since you can throw anything in JavaScript,
 * the given error could be of any type.
 */
export function errorMessage(error: unknown): string {
  const message = hasMessage(error) ? error.message : error;

  if (message === undefined) {
    return 'undefined';
  }

  return typeof message === 'string' ? message : JSON.stringify(error);
}

function hasMessage(error: unknown): error is { message: unknown } {
  return typeof error === "object" && error !== null && "message" in error;
}
