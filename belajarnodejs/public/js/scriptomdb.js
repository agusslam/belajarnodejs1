function omdb2(){
    document.querySelector('.text-articles h6').style.fontSize = "24px";
    document.querySelector('.text-articles h6').style.fontWeight = "600";
    document.querySelector('#navbar').style.backgroundColor = "#6CBE5E";
    document.querySelector('.box-image img').style.filter = "brightness(50%)";
    document.querySelector('.box-image img').src="public/img/bannermovie.jpg";
    document.querySelector('.tittle-h1-banner').innerHTML = "All Movie Here";
    document.querySelector('.tittle-h1-banner').style.color = "#FFFFFF";
    document.querySelector('.description-p-banner').innerHTML = "Enjoy the movie";
    document.querySelector('.description-p-banner').style.color = "#FFFFFF";

    const film = document.querySelector('.wrapper-box-omdb');
    const ulAmbil = document.querySelector(".ulpaging");

    const showListMovie = (params) => {
        fetch('http://www.omdbapi.com/?apikey=54ece844&s=' + params + '')
            .then(function(response){
                // console.log(response.json())
                return response.json();
             })
            .then(function(result){
                let data = result
                for (let i=0 ; i < data.Search.length ; i++){
                // console.log(data.Search[i])

                //kondisi jika tidak ada poster
                let poster = ""                    
                if(data.Search[i].Poster == "N/A"){
                    poster = "assets/img/poster.jpg"
                }else {
                    poster = data.Search[i].Poster
                }

                //masukkan data div
                film.innerHTML += ` 
                    <div class="col-sm-12 col-md-4 wrapper-box-detail-omdb">             
                        <div class="wrapper-box-list-omdb" id="id${i}">
                            <div class="img-class-omdb">
                                <img class="img-prod-omdb rounded" src="`+ poster +`">
                            </div>                
                            <div class="tittle-class-omdb text-center"> 
                                <a href="detailomdb.html?id=${data.Search[i].imdbID}">
                                    <p class="link-tittle">`+ data.Search[i].Title + `</p>
                                </a>  
                            </div>
                        </div>             
                        <div class="wrapper-box-list-newdet" style="display:none;" id="iddet${i}">            
                            <div class="detail-tittle text-center">
                            <button type="button" class="btn btn-detail-product">Detail</button>
                            </div>
                        </div> 
                    </div>
                `
            }


        //pasang angka paging
        const movie = document.querySelector(".wrapper-box-omdb").children;
        const maxShow = 6;
        var indexShow=1;
        var indexShowNew=1;
        const pagingShow = Math.ceil(data.Search.length/maxShow)        
        // console.log(movie)
        for(let i=0 ; i<pagingShow ; i++){
            ulAmbil.innerHTML += `
                <li class="paging cli-${i+1}" id="idli${i+1}"><a class="aklas${i+1}" href="#">${i+1}</a></li>
            `;
        }

        //show movie
        function showItems() {
            for(let i=0;i<data.Search.length; i++){        
                movie[i].classList.remove("show");
                movie[i].classList.add("hide");  
                if(i>=(indexShowNew*maxShow)-maxShow && i<indexShowNew*maxShow){
                //  console.log("ini " + indexShowNew);
                //  console.log(i);
                 movie[i].classList.remove("hide");
                 movie[i].classList.add("show");
               }
            }        
        }    
        showItems();

        for(let i=1 ; i<=pagingShow ; i++){
            let selectli = document.querySelector("#idli" + i);      
            // let selecta = document.querySelector(".aklas" + i); 
            // selecta.classList.add("active");     
            document.querySelector(".aklas1").classList.add("active");
            function klikPage(i){
                selectli.addEventListener("click", function(){
                    // alert("kamu klik halaman " + (i+1))
                    indexShowNew = indexShow + (i-1); 
                    check(i);
                    showItems();
                })
            }
            klikPage(i)
        }
    
        function check(params){
            document.querySelector(".active").classList.remove("active"); 
            let selecta = document.querySelector(".aklas" + params);
            if(params == indexShowNew){
                selecta.classList.add("active");
            }
        }
    })
    .catch(function(error){
        console.log(error)
    })
    }

    //Kondisi saat inputtext kosong    
    let inputText = document.querySelector("#search").value
    console.log("inputnya adalah " + inputText)
    if(inputText == ""){
        console.log("null")
        showListMovie("batman")
    } 
    
    //kondisi jika tombol dklik
    let klikcari = document.querySelector("#searchAgain");
    klikcari.addEventListener("click", function(){
        let getText = document.querySelector("#search").value
        if(getText){
            film.innerHTML = ''
            ulAmbil.innerHTML = ''
            showListMovie(getText)
        }else {
            film.innerHTML = ''
            showListMovie("2021")
        }
        
    })
}

function detail2(){
    document.querySelector('#navbar').style.backgroundColor = "#6CBE5E";

    const urlSearchParams = new URLSearchParams(window.location.search);
    const params = Object.fromEntries(urlSearchParams.entries());
    // console.log(params.id)
    const ambilClasJudul = document.querySelector(".judul")
    const ambilClasRating = document.querySelector(".rating")
    const ambilClasImage = document.querySelector(".image-poster")
    const ambilClasUl = document.querySelector(".genre-list-ul")
    const ambilClasdesc = document.querySelector(".desc-list")
    const ambilClasStar = document.querySelector(".stars")        


    fetch('http://www.omdbapi.com/?apikey=54ece844&s&i=' + params.id + '&plot=full')
        .then(function(response){
            // console.log(response.json())
            return response.json();
        })
        .then(function(result){
            let data = result
            // console.log(data)

            //olah runtime
            var datRun = ""
            if(data.Runtime == "N/A"){
                datRun = "0 Min"
            }else {
                datRun = data.Runtime
            }

            //masukkan judul
            ambilClasJudul.innerHTML = `
                <h2>${data.Title}</h2>
                <p>${data.Type} - ${data.Year} - `+ datRun +`</p>
            `

            //olah rating
            var datRat = ""
            if(data.imdbRating == "N/A"){
                datRat = "0"
            }else {
                datRat = data.imdbRating
            }

            //olah votes            
            let votes = data.imdbVotes 
            var vote = ""
            // console.log("votenya "+votes.length)
            if(votes == "N/A"){
                vote = 0
            }else if(votes.length <= 3){
                vote = votes
            }else if(votes.length = 5){
                vote = (votes.substring(0, 1)) + "K"
            }else if(votes.length = 6){
                vote = (votes.substring(0, 2)) + "K"
            }else if(votes.length = 7){
                vote = (votes.substring(0, 3)) + "K"
            }else if(votes.length = 9){
                vote = (votes.substring(0, 1)) + "M"
            }else if(votes.length = 10){
                vote = (votes.substring(0, 2)) + "M"
            }        

            //masukkan rating
            ambilClasRating.innerHTML = `
                <div class="wrapper-rating">
                    <p>IMDb RATING</p>
                    <div class="wrapper-star">
                        <i class="fas fa-star fa-2x text-warning"></i>
                        <h3>`+datRat+`</h3>
                    </div>  
                </div>
                <div class="wrapper-votes">
                    <p>VOTES</p>
                    <h3 class="text-info">`+vote+`</h3>
                </div> 
            
            `

            //olah poster
            let posterDet = ""
            if(data.Poster == "N/A"){
                posterDet = "assets/img/poster.jpg"
            }else {
                posterDet = data.Poster
            }
            ambilClasImage.innerHTML = `
                    <img src="`+ posterDet +`" alt="">
            `

            //olah genre
            const coba2 = data.Genre.split(",")
            // console.log(coba2.length)
            for(let i=0 ; i<coba2.length ; i++){
                ambilClasUl.innerHTML += `
                <li class="box-genre">`+ coba2[i] +`</li>
            `
            }

            //masukkan desc
            ambilClasdesc.innerHTML = `
                <p>${data.Plot}</p>
            
            `

            //masukkan artis
            ambilClasStar.innerHTML = `
                <p class="stars-tittle">Stars</p>
                <p class="stars-name text-info">${data.Actors}</p>                
            `
            
            //masukkan title
            const tittle = data.Title;
            const coba = tittle.split(" ")
            related(coba[0])

            //fetch related
            function related(params){
                console.log("paramku " + params)
                fetch('http://www.omdbapi.com/?apikey=54ece844&s='+params+'')
                .then(function(response){
                // console.log(response.json())
                    return response.json();
                }).then(function(result){
                    let relatedKu = result
                    // console.log(relatedKu)
                    let ambilClasCardMovie = document.querySelector(".card-movie")    
                    // console.log(data)
                    let poster = ""                    
                        for(let i=0 ; i<relatedKu.Search.length ; i++){
                            if(relatedKu.Search[i].Poster == "N/A"){
                                poster = "assets/img/poster.jpg"
                            }else {
                                poster = relatedKu.Search[i].Poster
                            }
                            console.log(poster)
                            ambilClasCardMovie.innerHTML += `
                                <div class="col-md-4 card-list">
                                    <div class="card-image">
                                        <img src="`+ poster +`">
                                        <a class="link-tittle" href="detailomdb.html?id=${relatedKu.Search[i].imdbID}">
                                            <p>${relatedKu.Search[i].Title}</p>
                                        </a>                                            
                                    </div>
                                </div>
                            ` 
                        }

                    //pasang angka paging
                    const movie = document.querySelector(".card-movie").children;
                    const ulAmbil = document.querySelector(".ulpaging");
                    const maxShow = 3;
                    var indexShow=1;
                    var indexShowNew=1;
                    const pagingShow = Math.ceil(relatedKu.Search.length/maxShow)        
                    // console.log(pagingShow)
                    for(let i=0 ; i<pagingShow ; i++){
                        ulAmbil.innerHTML += `
                            <li class="paging cli-${i+1}" id="idli${i+1}"><a class="aklas${i+1}" href="#">${i+1}</a></li>
                        `;
                    }

                    //show movie
                    function showItems() {
                        for(let i=0;i<relatedKu.Search.length; i++){        
                            movie[i].classList.remove("show");
                            movie[i].classList.add("hide");  
                            if(i>=(indexShowNew*maxShow)-maxShow && i<indexShowNew*maxShow){
                            //  console.log("ini " + indexShowNew);
                            //  console.log(i);
                            movie[i].classList.remove("hide");
                            movie[i].classList.add("show");
                        }
                        }        
                    }    
                    showItems();

                    for(let i=1 ; i<=pagingShow ; i++){
                        let selectli = document.querySelector("#idli" + i);      
                        // let selecta = document.querySelector(".aklas" + i); 
                        // selecta.classList.add("active");     
                        document.querySelector(".aklas1").classList.add("active");
                        function klikPage(i){
                            selectli.addEventListener("click", function(){
                                // alert("kamu klik halaman " + (i+1))
                                indexShowNew = indexShow + (i-1); 
                                check(i);
                                showItems();
                            })
                        }
                        klikPage(i)
                    }
                
                    function check(params){
                        document.querySelector(".active").classList.remove("active"); 
                        let selecta = document.querySelector(".aklas" + params);
                        if(params == indexShowNew){
                            selecta.classList.add("active");
                        }
                    }
                })
                .catch(function(error){
                console.log(error)
                })
                }
    })
    .catch(function(error){
        console.log(error)
    })
}

