let  songindex=0;
let masterplay= document.getElementById('masterplay');
let myprofessbar= document.getElementById('myprofessbar');
let audioElement = new Audio('songs/1.mp3');
let mastersongname=document.getElementById('mastersongname');
let gif = document.getElementById('gif');
let songItem=Array.from(document.getElementsByClassName('songitem'));


let songs = [                                                                                                                   
    { songName : "Warriyo - Mortals(feat.Laura Brehm)" , filePath : "songs/1.mp3" , coverPath: "covers/1.jpg"},
    { songName : "Cielo - Huma Huma " , filePath : "songs/2.mp3" , coverPath: "covers/2.jpg"},
    { songName : "DEAF KEV - Invincible " , filePath : "songs/3.mp3" , coverPath :"covers/3.jpg"},
    { songName : "Different Heaven & EH!DE -My Heart " , filePath : "songs/4.mp3" , coverPath: "covers/4.jpg"},
    { songName : "Janji-Heroes-Tonight-feat-Johnning" , filePath : "songs/5.mp3" , coverPath: "covers/5.jpg"},
    {songName : "Na ja " , filePath :  "songs/6.mp3" , coverPath :"covers/6.jpg"},
    { songName : "Senorita" , filePath : "songs/7.mp3" , coverPath: "covers/7.jpg"},
    { songName : "Thunder" , filePath : "songs/8.mp3" , coverPath: "covers/8.jpg"},
    {songName : "Let me love you" , filePath : "songs/9.mp3" , coverPath :"covers/9.jpg"},
    {songName : "never say never" , filePath : "songs/10.mp3" , coverPath :"covers/10.jpg"}

]
songItem.forEach((element,i) => {
    element.getElementsByTagName("img")[0].src=songs[i].coverPath;
    element.getElementsByClassName("songname")[0].innerText=songs[i].songName;
})
masterplay.addEventListener('click', function()
{
    if(audioElement.paused||audioElement.currentTime<=0)
    {
        audioElement.play();
        masterplay.classList.remove('fa-circle-play');
        masterplay.classList.add('fa-circle-pause');
        gif.style.opacity=1;
       
    }
    else{
        audioElement.pause();
        masterplay.classList.remove('fa-circle-pause');
        masterplay.classList.add('fa-circle-play');
        makeallplays();
        gif.style.opacity=0;
    }
} )


audioElement.addEventListener('timeupdate' ,function(){
    progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
    console.log(progress);
    myprofessbar.value=progress; 
})   

myprofessbar.addEventListener('change',function()
{ 
    audioElement.currentTime=((myprofessbar.value*audioElement.duration)/100);
})

const makeallplays=()=>{
    Array.from(document.getElementsByClassName('songitemplay')).forEach((element)=>{
        element.classList.remove('fa-circle-pause');
        element.classList.add('fa-play-circle')
   
    })
}

Array.from(document.getElementsByClassName('songitemplay')).forEach((element)=>{

    element.addEventListener('click',(e)=>{
        makeallplays();
        songindex=parseInt(e.target.id);
        e.target.classList.remove('fa-circle-play');
        e.target.classList.add('fa-circle-pause');
        audioElement.src=`songs/${songindex+1}.mp3`;
        mastersongname.innerText=songs[songindex].songName;
        audioElement.currentTime=0;
        audioElement.play();
        gif.style.opacity=1;
        masterplay.classList.remove('fa-circle-play');
        masterplay.classList.add('fa-circle-pause');
       



    })
})
document.getElementById('next').addEventListener('click',()=>{
    if(songindex>=9)
    {
        songindex=0;
    }else{
        songindex=songindex+1
    }
    audioElement.src=`songs/${songindex+1}.mp3`;
    mastersongname.innerText=songs[songindex].songName;
        audioElement.currentTime=0;
        audioElement.play();
        masterplay.classList.remove('fa-circle-play');
        masterplay.classList.add('fa-circle-pause');
       
})

document.getElementById('previous').addEventListener('click',()=>{
    if(songindex<=0)
    {
        songindex=-1;
    }else{
        songindex=songindex-1
    }
    audioElement.src=`songs/${songindex+1}.mp3`;
    mastersongname.innerText=songs[songindex].songName;
        audioElement.currentTime=0;
        audioElement.play();
        masterplay.classList.remove('fa-circle-play');
        masterplay.classList.add('fa-circle-pause');
       
})

