import { sortBy } from 'lodash';

/**
 * Sorts an array according to the order of the elements in a given recipe array.
 * If recipe arrays doesn't consist of distinct values, error is thrown as no valid sorting order is given.
 *
 * @example array to sort [Dec, Jan, Mar]
 *          sort by recipe [Jan, Feb, Mar, Apr, May, Jun, Jul, Aug, Sep, Oct, Nov, Dec]
 *          returns sorted array [Jan, Mar, Dec]
 */
export function sortByCustomOrder<T extends string | number>(
  subject: Array<T>,
  recipe: Array<T>,
): Array<T> {
  if (new Set(recipe).size !== recipe.length) {
    throw new Error(
      'Recipe array must only consist of distinct values in order to define a valid order.',
    );
  }

  return sortBy(subject, (value) => recipe.indexOf(value));
}
