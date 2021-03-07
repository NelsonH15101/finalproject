// get global vars
let loadbox = document.querySelector(".loadbox");
let pager = document.querySelector("ul.pagination");
// on page load tasks
document.addEventListener("DOMContentLoaded", () => {
  fadeOut(loadbox);
  countArticles();
})

// event listeners

// AJAX Requests: #1: count total articles #2: get article(s)
function countArticles() {
  let xhr = new XMLHttpRequest();
  xhr.open(
    "GET",
    "https://jsonplaceholder.typicode.com/posts",
    true
  );
  xhr.onload = function() {
    if(this.status == 200) {
      let results = JSON.parse(this.responseText);
      outputPager(results.length);
    }
  }
  xhr.send();
}

// helper function
  // output pagination
  function outputPager(count) {
    let numpages = Math.ceil(count/12);
    let output = "";
    for (let i = 0; i < numpages; i++) {
      output += '<li class="page-item"><a class="page-link" href="posts?num=' + i + '">' + (i + 1)+ '</a></li>';
    }
    pager.firstElementChild.insertAdjacentHTML("afterend", output);
  }

  //fade out el
