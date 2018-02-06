// const app = "I don't do much.";

const token = '4aee8d34c93c9dd2fe2b47a62c3e438dbb1e5d96'
fetch('https://api.github.com/olegchursin/repos', {
  headers: {
    Authorization: `token ${token}`
  }
}).then(res => res.json()).then(json => console.log(json));
