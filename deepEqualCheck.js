/**
This utility will return true if deep equal of two values are same , otherwise return false
Constraints:
  1. Values are always JSON serializable, meant types are either object, array, boolean, number, strings
  2. There is no cyclic reference inside any value.
**/

export default function deepEqual(valueA, valueB) {
  const type1 = typeof valueA;
  const type2 = typeof valueB;

  if (type1 !== type2) return false;

  if (Array.isArray(valueA) && !Array.isArray(valueB)) return false;
  if (!Array.isArray(valueA) && Array.isArray(valueB)) return false;

  switch (type1) {
    case "number":
      return valueA === valueB;
    case "string":
      return valueA === valueB;
    case "boolean":
      return valueA === valueB;

    case "object": {
      if (Array.isArray(valueA)) {
        if (valueA.length !== valueB.length) return false;
        for(let i = 0; i<valueA.length; i++) {
          if (!deepEqual(valueA[i], valueB?.[i])) return false;
        }
        return true;
      } else if(valueA !== null || valueB !== null) {
        const keysA = Object.keys(valueA);
        const keysB = Object.keys(valueB);
        if (keysA.length !== keysB.length)
          return false;
        for(let i = 0; i<keysA.length; i++) {
          if (!deepEqual(valueA?.[keysA[i]], valueB?.[keysA[i]])) {
            return false;
          }
        }

        return true;
      } else {
        return valueA === valueB;
      }
    }

    default:
      return valueA === valueB;
  }
}

