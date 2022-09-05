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
import axios from "axios";

// fetch("https://jsonplaceholder.typicode.com/users/1")
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

// (async () => {
//   const { data: users } = await axios(
//     "https://jsonplaceholder.typicode.com/users"
//   );
//   const { data: post1 } = await axios(
//     "https://jsonplaceholder.typicode.com/posts/1"
//   );
//   const { data: post2 } = await axios(
//     "https://jsonplaceholder.typicode.com/posts/2"
//   );

//   console.log("users", users);
//   console.log("post1", post1);
//   console.log("post2", post2);
// })();

const getCommnets = () => {
  return new Promise((resolve, reject) => {
    console.log("comments");
  });
};

getCommnets().then(() => console.log("end"));
