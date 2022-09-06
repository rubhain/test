import axios from "axios";

export const getData = async (userId) => {
  const getUser = await axios(
    "https://jsonplaceholder.typicode.com/users/" + userId
  );

  const getPosts = await axios(
    "https://jsonplaceholder.typicode.com/posts?userId=" + userId
  );

  return { getUser, getPosts };
};

console.log(await getData(1));
