# safe-property
Ultra-light way to safely access your nested objects properties.

```javascript
let property = require('safe-property');

let obj = {
  a: {
    b: {
      d: [
        { x: true },
        {
          y: {
            x: false
          }
        }
      ]
    },
    c: {
      value: 123
    }
  }
}

console.log(property(obj, ['a', 'c', 'value']));
// 123
console.log(property(obj, 'a.c.value'));
// 123
console.log(property(obj, 'a.b.d.1.y'));
// { x: false }
console.log(property(obj, 'a.b.z'));
// undefined
console.log(property(obj, 'a.b.z', 'your princess is in another castle'));
// your princess is in another castle
```
