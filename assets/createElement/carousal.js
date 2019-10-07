function carousalTraverse(numStart,numEnd){
    for(i=numStart;i<numEnd;i++){
        carousal(songsArr[i]);
    }
}

function carousal(song){
    let cardGroup = document.getElementById("card-group");
    let div = document.createElement("div");
    let img1 = document.createElement("img");

    img1.height = "180";
    img1.src = song.img;
    div.id = song.id;
    div.className = "card ml-4";
    img1.className = "card-img-top";

    cardGroup.appendChild(div);
    div.appendChild(img1);
    div.addEventListener('click',fetchIdOnClick);
}