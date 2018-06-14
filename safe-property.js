module.export = (arr, path, defaultValue) => {
  let obj = arr[path[0]];
  for (let i = 1; i < path.length && obj; i++) {
    obj = obj[path[i]];
  }
  return obj || defaultValue;
}
