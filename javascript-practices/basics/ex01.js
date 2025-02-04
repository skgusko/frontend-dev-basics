console.log("============[01] 기본타입, primitive type");
var u;
var i = 10;
var s = "hello world";
var b = true;

console.log("u: " + typeof(u));
console.log("i: " + typeof(i));
console.log("s: " + typeof(s));
console.log("b: " + typeof(b));

console.log("============[02.01] 객체타입: object");
var i = new Number(10);
var s = new String("c");
var b = new Boolean(true);
var o = {};
var a  = [];
var n = null;

console.log("i: " + typeof(i) + (i instanceof(Number)));
console.log("s: " + typeof(s) + (s instanceof(String)));
console.log("b: " + typeof(b) + (b instanceof(Boolean)));
console.log("o: " + typeof(o) + (o instanceof(Object)));
console.log("a: " + typeof(a) + (a instanceof(Array)));
console.log("n: " + typeof(n));

console.log("============[02.02] 객체타입: function");

function f1() {
}
var f2 = function() {
}
var f3 = new Function();

console.log("f1: " + typeof(f1));
console.log("f2: " + typeof(f3));
console.log("f3: " + typeof(f2));

console.log("============[06] 기본타입과 유사객체");

var b1 = true; // 기본 타입 (Primitive Type)
var b2 = new Boolean(false); // Boolean 객체 (Wrapper Object)

console.log(b1.valueOf()); // true
console.log(b2.valueOf()); // false - console.log(new Boolean(b2).valueOf())