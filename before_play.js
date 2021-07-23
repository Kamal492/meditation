/*function openPlayer(event) {
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
 //document.location.href = url;
 console.log(url);
 //window.open(url, "_self");
 //console.log(url);
}*/
var ele = document.getElementsByClassName('cards-div');
for(i=0;i<ele.length;i++){
  ele[i].addEventListener("click", function(event){
    var music_id = event.currentTarget.id;
    var name = music_id.split('-')[0];
    var id = music_id.split('-')[1];
    url = "play.html?name="+name+"&id="+id;
    //console.log(url);
    document.location.href = url;
    });
}
