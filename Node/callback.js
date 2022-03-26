//setTimeout(() => {
// console.log("hello");
//}, 10000);

//setInterval(() => {
//  console.log("Hi");
//}, 1000);
//const sayHi = (cb) => {
// cb();
//};

//sayHi(() => {
//  console.log("Hi");
//});
import fetch from "node-fetch";
fetch("https://jsonplaceholder.typicode.com/users")
  .then((data) => data.json())
  .then((users) => console.log(users));
