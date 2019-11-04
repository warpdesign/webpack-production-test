# webpack-production-test
webpack appears to be very agressive when running in production mode. For example, the line `dummy.stack;` will be stripped in this the production build of this code:

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

This can be a problem for code being triggered by property access (like custom Error.prepareStackTrace, see [V8 Stacks](https://v8.dev/docs/stack-trace-api)).

The [bindings](https://github.com/TooTallNate/node-bindings/) package [does this](https://github.com/TooTallNate/node-bindings/blob/c8033dcfc04c34397384e23f7399a30e6c13830d/bindings.js#L171-L172) for example.
