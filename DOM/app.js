let multimedia = document.getElementById("media");

let image = document.createElement("img");
image.src = "https://img.magnific.com/free-photo/closeup-scarlet-macaw-from-side-view-scarlet-macaw-closeup-head_488145-3540.jpg?semt=ais_hybrid&w=740&q=80";
image.alt = "Scarlet Macaw";
image.style.width = "300px";

let song = document.createElement("audio");
song.src = "./sample-audio.mp3";
song.controls = true;


let video = document.createElement("video");
video.src = "./sample-video.mp4";
video.controls = true;
video.style.width = "300px";

multimedia.append(image, song, video);
