const app = "I don't do much.";

// 238a0a3678571aea70f9142d05c2e22b77a2ca1a
const token = "238a0a3678571aea70f9142d05c2e22b77a2ca1a";
fetch("https://api.github.com/user/repos", {
  headers: {
    Authorization: `token ${token}`
  }
})
  .then(res => res.json())
  .then(json => console.log(json));
