const app = "I don't do much.";
const token = "76648598ec8f4a8df20d0d40ab25f7d46b0977f0"

fetch('https://api.github.com/user/repos', {
  headers: {
    Authorization: `token ${token}`
  }
}).then(res => res.json()).then(json => console.log(json));
