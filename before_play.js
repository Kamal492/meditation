function openPlayer(event) {
//  sessionStorage.setItem("med_id", event.target.id);
//  meditation_id = sessionStorage.getItem("med_id");
//  console.log(meditation_id);
//   window.open("play.html","_self")
 var music_id = event.target.id;
 var name = music_id.split('-')[0];
 var id = music_id.split('-')[1];
 //console.log(name);
 //console.log(id);
 url = "play.html?name="+name+"&id="+id;
 document.location.href = url;
 //console.log(url);
}
