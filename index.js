const app = "I don't do much.";

let xhr = new XMLHttpRequest();
fetch('https://api.github.com/user/repos').
  then(res => res.json()).
  then(json => console.log(json))
