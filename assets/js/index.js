window.addEventListener("load",init);

let songsArr = [];

function init(){

    fetchSongsSrv();
}

function fetchSongsSrv(){
    let promise = fetch("https://raw.githubusercontent.com/Naveen120/Naveen120/master/music.json");
    promise.then((res)=>{
        res.json().then((obj)=>{
            obj["songList"].forEach((songobj)=>{
                let song = new Song(songobj.song_id,songobj.song_name,songobj.song_url,songobj.song_thumb);
                songsArr.push(song);
            })
            carousalTraverse(0,8);
            traversingTopChartCarousal(8,12);
            traversingNewReleaseCarousal(12,16);
            traversingTrendingSongCarousal(16,20);
            traversingGaanaSongCarousal(20,24);
            traversingEditorPicksCarousal(24,28);
        }).catch(err=>{
            console.log(err);
        })
    }).catch(err=>{
        console.log(err);
    })
}

function fetchIdOnClick(){
    let id = getId(this.id);
    playSong(id.url);
}

function getId(id){
    return songsArr.find((song)=>{
        return song.id == id;
    })
}

function playSong(url){
    let audio = document.getElementById("audio");
    audio.src = url;
    audio.play();
}

