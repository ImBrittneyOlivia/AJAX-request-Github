$(document).ready(function() {
  $(".fa").hover(function() {
    $(this).toggleClass("icon-large");
  });
});

function loadRepo() {
  const repo = new XMLHttpRequest();
  repo.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      results = JSON.parse(this.responseText);
      for (let i = 0; i < 7; i++) {
        let ul = document.getElementById("repos");
        let li = document.createElement("LI");
        li.className = "list-group-item";
        let a = document.createElement("a");

        li.appendChild(document.createTextNode(results[i].name));
        a.appendChild(li);
        a.setAttribute("href", results[i].html_url);
        ul.appendChild(a);
      }
    }
  };
  repo.open("GET", "https://api.github.com/users/imbrittneyolivia/repos", true);
  repo.send();
}
