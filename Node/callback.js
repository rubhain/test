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

//fetch("https://jsonplaceholder.typicode.com/users/1")
//  .then((data) => data.json())
//  .then((users) => {
//    console.log("Users loaded", users);

//    fetch("https://jsonplaceholder.typicode.com/posts/1")
//      .then((data) => data.json())
//      .then((posts) => {
//        console.log("Loaded 1", posts);

//       fetch("https://jsonplaceholder.typicode.com/posts/2")
//          .then((data) => data.json())
//          .then((data) => console.log("post 2", data));
//      });
//  });

(async () => {
  const users = await (
    await fetch("https://jsonplaceholder.typicode.com/users")
  ).json();

  const post1 = await (
    await fetch("https://jsonplaceholder.typicode.com/posts/1")
  ).json();

  const post2 = await (
    await fetch("https://jsonplaceholder.typicode.com/posts/2")
  ).json();

  console.log("users", users);
  console.log("post1", post1);
  console.log("post2", post2);
})();

//exercise
