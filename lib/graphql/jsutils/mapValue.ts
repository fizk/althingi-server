import type { ObjMap, ReadOnlyObjMap } from './ObjMap.ts';

/**
 * Creates an object map with the same keys as `map` and values generated by
 * running each value of `map` thru `fn`.
 */
export function mapValue<T, V>(
  map: ReadOnlyObjMap<T>,
  fn: (value: T, key: string) => V,
): ObjMap<V> {
  const result = Object.create(null);

  for (const key of Object.keys(map)) {
    result[key] = fn(map[key], key);
  }
  return result;
}
