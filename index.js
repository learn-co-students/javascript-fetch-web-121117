const token = '1acf1da9e5c577374c5155d31b5631aa1845318c'
fetch('https://api.github.com/user/repos', {
  headers: {
    Authorization: `token ${token}`
  }
}).then(res => res.json()).then(json => console.log(json));