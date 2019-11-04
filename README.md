# webpack-production-test
webpack appears to be very agressive when running in production mode. For example, the line `dummy.stack;` will be stripped in this code.
This can be a problem for code being triggered by property access (like custom Error.prepareStackTrace, see [V8 Stacks](https://v8.dev/docs/stack-trace-api)).

```js
function addStack(obj) {
    obj.stack = "hey!";
}
let dummy = {};
addStack(dummy);
console.log('before');
dummy.stack;
console.log('after');
```
