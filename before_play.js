function openPlayer(event) {
  sessionStorage.setItem("med_id", event.target.id);
  meditation_id = sessionStorage.getItem("med_id");
  console.log(meditation_id);
   window.open("play.html","_self")
}
