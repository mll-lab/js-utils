/**
 * Round up to the nearest step.
 */
export function ceil(value: number, step: number): number {
  const inverse = 1.0 / step;

  return Math.ceil(value * inverse) / inverse;
}

export function isZeroish(value: number, precision: number = 0.001): boolean {
  return Math.abs(value) < precision;
}
