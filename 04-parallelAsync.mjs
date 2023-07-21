import fetch from "node-fetch";

async function fetchDetailsFromGithub(endpoint) {
  const url = `https://api.github.com${endpoint}`;
  const response = await fetch(url);
  return response.json();
}

async function showUserAndRepo(handle) {
  // these calls are sequential calls
  //   const user = await fetchDetailsFromGithub(`/users/${handle}`);
  //   const repos = await fetchDetailsFromGithub(`/users/${handle}/repos`);

  //to make parallel
  //   const userPromise = fetchDetailsFromGithub(`/users/${handle}`);
  //   const reposPromise = fetchDetailsFromGithub(`/users/${handle}/repos`);
  //   const user = await userPromise;
  //   const repos = await reposPromise;

  //Or other option by using promise.all() - better readibility
  const [user, repos] = await Promise.all([
    fetchDetailsFromGithub(`/users/${handle}`),
    fetchDetailsFromGithub(`/users/${handle}/repos`),
  ]);

  console.log(user.name);
  console.log(`${repos.length} repos`);
}

showUserAndRepo("vijendra-tech");
