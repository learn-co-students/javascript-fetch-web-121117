const app = "I don't do much.";

const token = '8d81c656f37c83a32997632d280c57bf06499a70'
fetch('https://api.github.com/user/repos', {
  headers: {
    Authorization: `token ${token}`
  }
}).then(res => res.json()).then(json => console.log(json));
