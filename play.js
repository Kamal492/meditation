// Select all the elements in the HTML page
// and assign them to a variable

let track_name = document.querySelector(".track-name");


let playpause_btn = document.querySelector(".playpause-track");

let seek_slider = document.querySelector(".seek_slider");
let volume_slider = document.querySelector(".volume_slider");
let curr_time = document.querySelector(".current-time");
let total_duration = document.querySelector(".total-duration");

// Specify globally used values
let isPlaying = false;
let updateTimer;

// Create the audio element for the player
let curr_track = document.createElement('audio');

// Define the list of tracks that have to be played
/*let track_list = [
  {
    name: "Basic 1",
    path: "Basics 1.mp3"
  },
  {
    name: "Basic 2",
    path: "Basics 2.mp3"
  },
  {
    name: "Basic 3",
    path: "Basics 3.mp3"
  },
{
  name: "Basic 4",
  path: "Basics 4.mp3"
},
];*/
function load_track(song_name,path){
  clearInterval(updateTimer);
  resetValues();
  document.getElementsByClassName("track-name")[0].innerHTML=song_name;
  curr_track.src = path;
  curr_track.load();
  updateTimer = setInterval(seekUpdate, 1000);
}
function resetValues() {
  curr_time.textContent = "00:00";
  total_duration.textContent = "00:00";
  seek_slider.value = 0;
}
function playpauseTrack() {

  if (!isPlaying) playTrack();
  else pauseTrack();
}

function playTrack() {
  // Play the loaded track
  curr_track.play();
  isPlaying = true;

  // Replace icon with the pause icon
  playpause_btn.innerHTML = '<i class="fa fa-pause-circle fa-5x"></i>';
}

function pauseTrack() {
  // Pause the loaded track
  curr_track.pause();
  isPlaying = false;

  playpause_btn.innerHTML = '<i class="fa fa-play-circle fa-5x"></i>';;
}

function seekTo() {

  seekto = curr_track.duration * (seek_slider.value / 100);

  curr_track.currentTime = seekto;
}

function setVolume() {

  curr_track.volume = volume_slider.value / 100;
}
function seekUpdate() {
  let seekPosition = 0;

  // Check if the current track duration is a legible number
  if (!isNaN(curr_track.duration)) {
    seekPosition = curr_track.currentTime * (100 / curr_track.duration);
    seek_slider.value = seekPosition;

    // Calculate the time left and the total duration
    let currentMinutes = Math.floor(curr_track.currentTime / 60);
    let currentSeconds = Math.floor(curr_track.currentTime - currentMinutes * 60);
    let durationMinutes = Math.floor(curr_track.duration / 60);
    let durationSeconds = Math.floor(curr_track.duration - durationMinutes * 60);

    // Add a zero to the single digit time values
    if (currentSeconds < 10) { currentSeconds = "0" + currentSeconds; }
    if (durationSeconds < 10) { durationSeconds = "0" + durationSeconds; }
    if (currentMinutes < 10) { currentMinutes = "0" + currentMinutes; }
    if (durationMinutes < 10) { durationMinutes = "0" + durationMinutes; }

    // Display the updated duration
    curr_time.textContent = currentMinutes + ":" + currentSeconds;
    total_duration.textContent = durationMinutes + ":" + durationSeconds;
  }
}
/*meditation_id = sessionStorage.getItem("med_id");
//switch(meditation_id) {
  case "basic-1":
    // code block
    m_id = 0;
    break;
  case "basic-2":
    // code block
    m_id = 1;
    break;
    case "basic-3":
      // code block
      m_id = 2;
      break;
    case "basic-4":
        // code block
        m_id = 3;
      break;
}
load_track(m_id);*/
window.onload = function(){
  var url = document.location.href,
  params = url.split('?')[1].split('&');
  var name = params[0].split('=')[1];
  var id = params[1].split('=')[1];
  var song_name = name+" "+id;
  var path = name+" "+id+".mp3";
  //console.log(path);
  load_track(song_name, path);
}
