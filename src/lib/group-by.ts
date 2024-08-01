export const groupBy = <T, K>(
  arr: T[],
  keyGetter: (item: T) => K
): Map<K, T[]> => {
  const map = new Map();
  arr.forEach((item) => {
    const key = keyGetter(item);
    const collection = map.get(key);
    if (!collection) {
      map.set(key, [item]);
    } else {
      collection.push(item);
    }
  });

  return map;
};
