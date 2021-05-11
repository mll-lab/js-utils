import { words } from './string';

/**
 * @example 'addressLine1' => 'Address Line 1'
 */
export function toCapitalizedWords(name: string): string {
  return words(name).map(capitalizeWord).join(' ');
}

export function capitalizeWord(word: string): string {
  return word.charAt(0).toUpperCase() + word.substring(1);
}
