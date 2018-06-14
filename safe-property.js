module.exports = (arr, path, defaultValue) => {
  if (typeof path === 'string' || path instanceof String) {
    path = path.split('.').map((p) => {
      return p.trim();
    })
  }
  let obj = arr[path[0]];
  for (let i = 1; i < path.length && obj; i++) {
    obj = obj[path[i]];
  }
  return obj || defaultValue;
}
