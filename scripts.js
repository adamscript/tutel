const tutelImg = document.getElementById("tutelImg");
const tutelFrame = document.getElementById("tutelFrame");
const soundOnBtn = document.getElementById("soundOnBtn");
const soundIcon = document.getElementById("soundIcon");

fetch('https://api.giphy.com/v1/gifs/search?api_key=0ANoPGmxervsKE4FhYQGH7iPPlKc7xlL&q=turtle', {mode: 'cors'})
    .then(function(response) {
      return response.json();
    })
    .then(function(response) {
      tutelImg.src = response.data[Math.floor(Math.random() * response.data.length)].images.original.url;
      console.log(response);
    });

function playMusic(){
    const tutelSong = document.createElement("IFRAME");
    tutelSong.width = "560";
    tutelSong.height = "315";
    tutelSong.src = "https://www.youtube.com/embed/b4t49LpC30I?controls=0&amp;start=3&autoplay=1";
    tutelSong.allow = "autoplay";
    tutelSong.hidden = true;
    document.querySelector("body").appendChild(tutelSong);

    soundOnBtn.hidden = true;
    soundIcon.hidden = false;

    console.log("tuteeel")
};