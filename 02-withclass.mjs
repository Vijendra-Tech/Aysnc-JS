import fetch from "node-fetch";

class GitHubApiLClient {
  async getUser(handler) {
    const url = `https://api.github.com/users/${handler}`;
    const res = await fetch(url);
    const user = await res.json();
    return user;
  }
}

const client = new GitHubApiLClient();
const user = await client.getUser("vijendra-tech");
console.log(user.name);
console.log(user.location);
