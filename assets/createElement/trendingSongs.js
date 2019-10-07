function traversingTrendingSongCarousal(numStart,numEnd){
    for(i=numStart;i<numEnd;i++){
        createTrendingSongCarousal(songsArr[i]);
    }
}

function createTrendingSongCarousal(song){
    let cardGroup = document.getElementById("card-group-three");
    let div = document.createElement("div");
    let img1 = document.createElement("img");
    let div1 = document.createElement("div");
    let h5 = document.createElement("h5");

    img1.height = "180";
    img1.src = song.img;
    div.id = song.id;
    h5.innerHTML = song.name;
    div.className = "card ml-4";
    img1.className = "card-img-top";
    div1.className = "card-body";
    h5.className = "card-title"

    cardGroup.appendChild(div);
    div.appendChild(img1);
    div.appendChild(div1);
    div1.appendChild(h5);
    div.addEventListener('click',fetchIdOnClick);
}