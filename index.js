const token = "817dc497ad9f63895575f57a6f2025601dfce6c3";

var list = document.createElement('ol')

fetch('https://api.github.com/user/repos', {
  headers: {
    Authorization: `token ${token}`
  }
}).then(res => res.json()).then(json => json.forEach(ele => list.innerHTML += `<li>${ele.name}</li>`));


document.getElementById('main').append(list)
