const outBtn = document.getElementById('nextPageBtn');
const albumOne = document.getElementById('album1');
const albumTwo = document.getElementById('album2');
const albumThree = document.getElementById('album3');

document.addEventListener("DOMContentLoaded", function() {
  fetch("https://lit-fortress-6467.herokuapp.com/object")

    .then(function(response) {
      return response.json();
    })
    .then(function(myJson) {
      var albums = myJson;
      let albLength = albums.results.length;

      //the starting point for the random number generator
      let min = 0;

      function getRandomInt(min, albLength) {

        let random = new Set([]);
        for (let i = 0; random.size <= 2; i++) {
          max = Math.floor(albLength);
          random.add(Math.floor(Math.random() * (max - min)) + min);
        } // end loop
        let randomArr = Array.from(random);

        var image1 = document.createElement("img");

        image1.src = `./images/${albums.results[randomArr[0]].cover_art}`;
        albumOne.appendChild(image1);

        var image2 = document.createElement("img");
        image2.src = `./images/${albums.results[randomArr[1]].cover_art}`;
        albumTwo.appendChild(image2);

        var image3 = document.createElement("img");
        image3.src = `./images/${albums.results[randomArr[2]].cover_art}`;
        albumThree.appendChild(image3);

      }; // end getRandomInt function
      getRandomInt(min, albLength);

    }); //end fetch call
}); //end page load event listener

// click to the next page
outBtn.addEventListener("click", function() {
  window.open('album.html', '_blank');
})
