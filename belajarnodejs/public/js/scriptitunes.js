const music = document.querySelector('.content-music');

showListMusic = (params) => {
    fetch('https://itunes.apple.com/search?term='+ params + '&media=music')
    .then(function(response){
    // console.log(response.json())
    return response.json();
        })
        .finally(document.querySelector(".loader").style.display = "block")
        .then(function(result){   
            document.querySelector(".loader").style.display = "none"
            let data = result
            for (let i=1 ; i < data.results.length ; i++){
                    // console.log(data.results[i].collectionPrice)
                    if( (data.results[i].wrapperType == "track") && (data.results[i].collectionPrice = 2.99) ){
                        // console.log(data.results[i])
                        music.innerHTML += `
                        <div class="row list-music-detail">
                            <div class="col-md-1 image-icon">
                                <img src="${data.results[i].artworkUrl60}">
                            </div>   
                            <div class="col-md-10 tittle-detail">
                                <div class="wrapper-tittle-detail">
                                    <h5>${data.results[i].trackName}</h5>
                                    <p class="artist-name">${data.results[i].artistName}</p>
                                    <p class="collection-name">${data.results[i].collectionName}</p>
                                </div>                        
                            </div>
                            <div class="col-md-1 play-icon">
                                <i id="iconplay${i}" class="tombol fas fa-play-circle fa-lg"></i>
                            </div>  
                        </div>  
                    `
                    }                
                }
            
            //saat tombol play di klik
            for(let i=1 ; i < data.results.length ; i++) {               
                let selectli = document.querySelector("#iconplay" + i);                 
                function klikPlay(i){
                    selectli.addEventListener("click", function(){
                        let nowPlay = (i)
                        ubahAll()
                        showPlayer(data.results[i].previewUrl, data.results[i].trackName, data.results[i].artistName, nowPlay)
                        selectli.setAttribute("class", "tombol fas fa-wave-square fa-lg");                    
                    })
                }
                klikPlay(i)
            }
    
            //ubah semua class tombol kembali ke icon semula
            function ubahAll(){
                let x = document.querySelectorAll(".tombol");
                for(let i=0;i<x.length;i++){
                    x[i].setAttribute("class", "tombol fas fa-play-circle fa-lg")
                }
            } 
            
            let player = document.querySelector(".player-music")
            
            function showPlayer(a, b, c, d){ 
                // console.log(d)
                player.style.display = "block"
                player.innerHTML = `
                <div class="col-md-12 close-player">
                    <div class="row head-play">
                        <div class="col-md-8 title-play">
                            ${b} - ${c}            
                        </div>
                        <div class="col-md-3 time-show">
                            <span id="current-time"></span><span>&nbsp&nbsp/&nbsp&nbsp</span><span id="duration"></span> 
                        </div>
                        <div class="col-md-1"><i class="fas fa-times"></i></div>
                    </div>
                    
                                 
                </div>
                <div class="col-md-12 player-id">
                    <div class="row playid">
                        <audio autoplay id="myAudio">
                        <source src="${a}" type="audio/mpeg">
                        </audio>                                               
                        <div class="col-md-4 playbtn">
                            <i class="fas fa-step-backward fa-lg circle2" id="playback"></i>
                        </div>
                        <div class="col-md-4 playbtn">
                            <i class="fas fa-play fa-2x circle" style="display: none;" id="play"></i>
                            <i class="fas fa-pause fa-2x circle" id="paused"></i>
                        </div>
                        <div class="col-md-4 playbtn" id="playnext"><i class="fas fa-step-forward fa-lg circle2"></i></div>                        
                    </div>                    
                </div>
                <div class="col-md-12 progress-bar">
                    <canvas id="canvas" width="500" height="10"></canvas>
                </div>                
                `
                // <div class="col-md-12 player-id">
                    // <audio controls autoplay id="myAudio">
                    //     <source src="${params}" type="audio/mpeg">
                    // </audio>
                // </div>

                var canvasWidth = 500
                var audioEl = document.getElementById("myAudio")
                var canvas = document.getElementById("canvas").getContext('2d')
                // var ctrl = document.getElementById('audioControl')
                
                audioEl.addEventListener('loadedmetadata', function() {
                    var duration = audioEl.duration
                    var currentTime = audioEl.currentTime
                    document.getElementById("duration").innerHTML = convertElapsedTime(duration)
                    document.getElementById("current-time").innerHTML = convertElapsedTime(currentTime)
                    canvas.fillRect(0, 0, canvasWidth, 50);
                  });
                  
                audioEl.addEventListener('timeupdate', updateBar)
                  function updateBar() {
                    canvas.clearRect(0, 0, canvasWidth, 50)
                    canvas.fillStyle = "#000";
                    canvas.fillRect(0, 0, canvasWidth, 50)
                    
                    var currentTime = audioEl.currentTime
                    var duration = audioEl.duration
                    
                    if (currentTime === duration) {
                      ctrl.innerHTML = "Play"
                    }
                    
                    document.getElementById("current-time").innerHTML = convertElapsedTime(currentTime)
                    
                    var percentage = currentTime / duration
                    var progress = (canvasWidth * percentage)
                    canvas.fillStyle = "#FF0000"
                    canvas.fillRect(0, 0, progress, 50)
                  }
                  
                  function convertElapsedTime(inputSeconds) {
                    var seconds = Math.floor(inputSeconds % 60)
                    if (seconds < 10) {
                      seconds = "0" + seconds
                    }
                    var minutes = Math.floor(inputSeconds / 60)
                    return minutes + ":" + seconds
                  }

                                
                let audioID = document.querySelector("#myAudio")
                let klikPlay = document.querySelector("#play")
                klikPlay.addEventListener("click", function(){
                    audioID.play()
                    klikPlay.setAttribute("class", "fas fa-play fa-2x circle")
                    klikPlay.style.display = "none"
                    klikPause.style.display = "block"                    
                })

                let klikPause = document.querySelector("#paused")
                klikPause.addEventListener("click", function(){
                    audioID.pause()
                    klikPause.setAttribute("class", "fas fa-pause fa-2x circle")
                    klikPause.style.display = "none"
                    klikPlay.style.display = "block"
                })

                let klikNext = document.querySelector("#playnext")
                klikNext.addEventListener('click', function(){
                    let nextPlay = (d+1)
                    let selectli = document.querySelector("#iconplay" + (d+1)); 
                    ubahAll()
                    showPlayer(data.results[d+1].previewUrl, data.results[d+1].trackName, data.results[d+1].artistName, nextPlay)
                    selectli.setAttribute("class", "tombol fas fa-wave-square fa-lg"); 
                    
                })

                let klikBack = document.querySelector("#playback")
                klikBack.addEventListener('click', function(){
                    let backPlay = (d-1)
                    let selectli = document.querySelector("#iconplay" + (d-1)); 
                    ubahAll()
                    showPlayer(data.results[d-1].previewUrl, data.results[d-1].trackName, data.results[d-1].artistName, backPlay)
                    selectli.setAttribute("class", "tombol fas fa-wave-square fa-lg"); 
                    
                })

                let closePlayer = document.querySelector(".close-player")
                closePlayer.addEventListener("click",function(){
                    player.style.display = "none"
                    audioID.pause()
                })
            }
            
    })
    .catch(function(error){
        console.log(error)
    })
}


//saat load pertama
let enterInput = document.querySelector(".input-search")
let valueInput = enterInput.value
    if(valueInput == ""){
        // console.log("null")
        showListMusic("bruno")
    }

//saat input di enter
enterInput.addEventListener("keyup", function(event){
    if(event.keyCode == 13){  
        let getText = enterInput.value  
        // alert(getText) 
        music.innerHTML = ''   
        showListMusic(getText)
    }
})






