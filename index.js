fetch("https://api.github.com/repos/jquery/jquery/commits")
  .then(res => res.json())
  .then(json => console.log(json));
