import fetch from "node-fetch";

// function getGithhubUserName(handler) {
//   const url = `https://api.github.com/users/${handler}`;
//   fetch(url)
//     .then((res) => res.json())
//     .then((user) => {
//       console.log(user.name);
//       console.log(user.location);
//     });
// }

//convert to Async function
async function getGithhubUserName(handler) {
  const url = `https://api.github.com/users/${handler}`;
  const res = await fetch(url);
  const user = await res.json();
  //   console.log(user.name);
  //   console.log(user.location);
  return user;
}

// getGithhubUserName("vijendra-tech").then((user) => {
//   console.log(user.name);
//   console.log(user.location);
// });

//in latets verison of node >16, await can be used without async function
const user = await getGithhubUserName("vijendra-tech");
console.log(user.name);
console.log(user.location);
