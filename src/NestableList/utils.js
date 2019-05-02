export const getDepth = (item, childrenProperty) => {
  // returns depth of item and children
  let depth = 0;

  if (item[childrenProperty]) {
    item[childrenProperty].forEach(d => {
      const tmpDepth = getDepth(d, childrenProperty);

      if (tmpDepth > depth) {
        depth = tmpDepth;
      }
    });
  }

  return depth + 1;
};

export const getValuesByKey = (data, key, childrenProp) => {
  const values = [data[key]];
  if (data[childrenProp]) {
    data[childrenProp].forEach(item => {
      values.push(...getValuesByKey(item, key, childrenProp));
    });
  }

  return values;
};
