import fetch from "node-fetch";

async function getGithhubUserName(handler) {
  const url = `https://api.github.com/users/${handler}`;
  const res = await fetch(url);
  const body = await res.json();
  if (res.status !== 200) {
    throw Error(body.message);
  }
  return body;
}

// const user = await getGithhubUserName("vijendra-tech-01").catch((err) => {
//   console.log(`Error: ${err.message}`);
// });
// console.log(user);
// // console.log(user.location);

//wrap in try catch
async function showUser(handle) {
  try {
    const user = await getGithhubUserName(handle);
    console.log(user.name);
    console.log(user.location);
  } catch (error) {
    console.log(`Error: ${error.message}`);
  }
}

showUser("vijendra-tech-1");
