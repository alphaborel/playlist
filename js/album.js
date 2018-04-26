const albumShelf = document.getElementById('albumShelf');
const albumSelect = document.getElementById('albumSelect');
const clearBtn = document.getElementById('clearBtn');
const submit = document.getElementById('submitBtn');

document.addEventListener("DOMContentLoaded", function() {
  fetch("https://lit-fortress-6467.herokuapp.com/object")

    .then(function(response) {
      return response.json();
    })
    .then(function(myJson) {
      var albums = myJson;

      //create and append albums to the web page
      for (let i = 0; i < albums.results.length; i++) {

        var div = document.createElement("div");
        var image = document.createElement("img");

        image.src = `./images/${albums.results[i].cover_art}`;
        div.classList.add("miniAlbum");
        div.id = `${i}`;

        div.appendChild(image);
        albumShelf.appendChild(div);
        div.addEventListener("click", playClick);
      } // end loop

      function playClick(e) {
        albumSelect.innerHTML += `<p>${albums.results[this.id].artist}:${albums.results[this.id].title}</p></br>`;
      };

    }); //end fetch call

  // clear the user input
  clearBtn.addEventListener("click", function() {
    albumSelect.innerHTML = '';
  }); //end clearBtn function

  //submit user selected items to somewhere else
  submit.addEventListener("click", function() {
    var test = document.querySelectorAll(".albumInfo p");
    fetch("https://lit-fortress-6467.herokuapp.com/post", {
        method: 'post',
        headers: {
          "Content-type": "application/x-www-form-urlencoded; charset=UTF-8"
        },
        body: 'test'
      })
      .then(function(data) {
        console.log('Request succeeded with JSON response', data);
      })
      .catch(function(error) {
        console.log('Request failed', error);
      });
  }); //end submitBtn function

}); //end page load event listener
