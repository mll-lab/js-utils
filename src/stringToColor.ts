function hashCode(string: string): number {
  let hash = 0;
  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < string.length; i++) {
    // eslint-disable-next-line no-bitwise
    hash = string.charCodeAt(i) + ((hash << 5) - hash);
  }

  return hash;
}

function hashToHslaColor(hash: number, opacity: number): string {
  const h = range(hash, 0, 360);
  const s = range(hash, 50, 100);
  const l = range(hash, 20, 50);
  const a = opacity.toString();

  // https://developer.mozilla.org/en-US/docs/Web/CSS/color_value/hsl#values
  return `hsla(${h}, ${s}%, ${l}%, ${a})`;
}

function range(hash: number, min: number, max: number): number {
  const diff = max - min;
  const x = ((hash % diff) + diff) % diff;

  return x + min;
}

export type StringToHslaColorOptions = { opacity?: number };

/**
 * Provides a hsla color value for use in CSS, based on the contents of the given string.
 *
 * See https://developer.mozilla.org/en-US/docs/Web/CSS/color_value/hsl.
 *
 * @example stringToHslaColor('test') becomes 'hsla(58, 98%, 48%, 1)' (yellow)
 *
 * This function tries to provide a good spread of colors for different inputs.
 * However, it does not guarantee uniqueness - think of it like hashing.
 * It is pure, meaning that the result is only dependent on the inputs.
 */
export function stringToHslaColor(
  string: string,
  { opacity = 1 }: StringToHslaColorOptions = {},
): string {
  return hashToHslaColor(hashCode(string), opacity);
}
