export function pluralize<TSingular, TPlural>(
  amount: number,
  singular: TSingular,
  plural: TPlural,
): TSingular | TPlural {
  if (amount === 1) {
    return singular;
  }

  return plural;
}
