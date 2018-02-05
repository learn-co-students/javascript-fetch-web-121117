const app = "I don't do much.";

const token = 'a46c00b94a2d070882bc8efd025843c882c0ddfd'

fetch('https://api.github.com/user/repos', {
  headers: {
    Authorization: `token ${token}`
  }
}).then(res => res.json()).then(json => console.log(json));
