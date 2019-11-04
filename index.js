function addStack(obj) {
    obj.stack = "hey!";
}
let dummy = {};
addStack(dummy);
console.log('before');
dummy.stack;
console.log('after');