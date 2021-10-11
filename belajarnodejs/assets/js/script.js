//Script For latihan1.html
function latihan3(){

document.querySelector('.text-articles h6').style.fontSize = "24px";
document.querySelector('.text-articles h6').style.fontWeight = "600";
document.querySelector('#navbar').style.backgroundColor = "#6CBE5E";
document.querySelector('.box-image img').style.filter = "brightness(50%)";
document.querySelector('.box-image img').src="assets/img/pexels-vlada-karpovich-4451739 1.jpg";
document.querySelector('.tittle-h1-banner').innerHTML = "All Products Here";
document.querySelector('.tittle-h1-banner').style.color = "#FFFFFF";
document.querySelector('.description-p-banner').innerHTML = "We brings our best product to you";
document.querySelector('.description-p-banner').style.color = "#FFFFFF";

const product = document.querySelector('.wrapper-box-new');

    for(let i=0 ; i<dataProduct.length ; i++){
        product.innerHTML += `
        <div class="col-sm-12 col-md-4 wrapper-box-detail-new">             
            <div class="wrapper-box-list-new" id="id${i}">
                <div class="img-class">
                    <img class="img-prod rounded" src="`+ dataProduct[i].image +`">
                </div>                
                <div class="tittle-class text-center">                      
                    <p>`+ dataProduct[i].nameproduk +`</p>
                </div>
            </div>             
            <div class="wrapper-box-list-newdet" style="display:none;" id="iddet${i}">            
                <div class="detail-tittle text-center">
                <button type="button" class="btn btn-detail-product">Detail</button>
                </div>
            </div> 
        </div>`;                 
    }    

//select id
    for(let i=0 ; i<dataProduct.length ; i++){
        let box = document.querySelector("#id" + i); 
        let box2 = document.querySelector("#iddet" + i); 
        function overBtn(i){
            box.addEventListener("mouseover", function(){
                box2.style.display = "block";
                box2.style.backgroundColor = "rgba(89, 89, 89, 0.69)";
            })
            box2.addEventListener("mouseout", function(){
                box2.style.display = "none";
                box2.style.backgroundColor = "rgba(0,0,0,0)";
            })
            box2.addEventListener("click", function(){
                window.location.href = `
                     detaillatihan3.html?id=${dataProduct[i].idproduk}              
                `
            })
        }
        overBtn(i)
    } 


//PAGING COBA
const produkTanem = document.querySelector(".wrapper-box-new").children;
const maxShow = 6;
var indexShow=1;
var indexShowNew=1;
const pagingShow=Math.ceil(produkTanem.length/maxShow);
const ulAmbil = document.querySelector(".ulpaging");

//pasang angka paging
    for(let i=0 ; i<pagingShow ; i++){
        ulAmbil.innerHTML += `
            <li class="paging cli-${i+1}" id="idli${i+1}"><a class="aklas${i+1}" href="#">${i+1}</a></li>
        `;
    }

    function showItems() {
        for(let i=0;i<produkTanem.length; i++){        
            produkTanem[i].classList.remove("show");
            produkTanem[i].classList.add("hide");       
    
    
           if(i>=(indexShowNew*maxShow)-maxShow && i<indexShowNew*maxShow){
             console.log("ini " + indexShowNew);
             console.log(i);
             produkTanem[i].classList.remove("hide");
             produkTanem[i].classList.add("show");
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

}

function detaillatihan3 () {
    document.querySelector('#navbar').style.backgroundColor = "#6CBE5E";
    
    const urlSearchParams = new URLSearchParams(window.location.search);
    const params = Object.fromEntries(urlSearchParams.entries());

    //ambil class div
    const ambilmage = document.querySelector('.image')
    const ambilTitle = document.querySelector('.title')
    const ambilDesc = document.querySelector('.desc-detail')
    const ambilPrice = document.querySelector('.price-detail')
    const ambilQty = document.querySelector('.qty-detail') 
    const ambilBtn = document.querySelector('.buy')  
    const ambilUlas = document.querySelector('.content-ulas') 
    const ambilBg = document.querySelectorAll('.image-item') 
    // console.log(ambilBg)  

    const formatRp = (params) => {
        let reverse = params.toString().split('').reverse().join(''),
            ribuan 	= reverse.match(/\d{1,3}/g);
            ribuan	= ribuan.join('.').split('').reverse().join('');
        return ribuan;
    }

    //ambil idproduk
    for(let i=0 ; i<dataProduct.length ; i++){
        if(dataProduct[i].idproduk == params.id){
            // console.log(dataProduct[i])
            ambilmage.style.backgroundImage = 'url('+ dataProduct[i].image + ')' 
            ambilTitle.innerHTML = dataProduct[i].nameproduk
            ambilDesc.innerHTML = dataProduct[i].desc
            ambilPrice.innerHTML = 'Rp ' + formatRp(dataProduct[i].price)
            ambilQty.innerHTML = dataProduct[i].qty
            ambilBtn.addEventListener('click', function(){
                alert(`Kamu pilih id product ${dataProduct[i].idproduk} - ${dataProduct[i].nameproduk}`)
            })

            for(let m=0 ; m<ambilBg.length ; m++){
                ambilBg[m].style.backgroundImage = 'url('+ dataProduct[i].image + ')'
            }
            
            for(let j=0 ; j<(dataProduct[i].ulasan).length ; j++){
                // console.log(dataProduct[i].ulasan[j].tgl)
                //ubah rank
                let rank = (dataProduct[i].ulasan[j].rat)
                if(rank == 5){
                    newRank = `<i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i>`
                }else if(rank == 4){
                    newRank = `<i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i>`
                }else if(rank == 3){
                    newRank = `<i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i>`
                }else if(rank == 2){
                    newRank = `<i class="fas fa-star"></i><i class="fas fa-star"></i>`
                }else if(rank ==1 ){
                    newRank = `<i class="fas fa-star"></i>`
                }
                ambilUlas.innerHTML += `
                                        <div class="wrapper-ulas">
                                            <div class="row ulas-item">
                                                <div class="col-md-1 ulas-user">
                                                    <p>${dataProduct[i].ulasan[j].tgl}</p>
                                                </div>
                                                <div class="col-md-1 ulas-rat text-warning">
                                                    <p>${newRank}</p>
                                                </div>
                                                <div class="col-md-10 ulas-judul">
                                                    <p><b>${dataProduct[i].ulasan[j].user}</b></p>
                                                </div>                        
                                            </div>
                                            <div class="row ulas-isi">
                                                <div class="col-md-12 isi">
                                                    <p>${dataProduct[i].ulasan[j].isi}</p>
                                                </div>
                                            </div>
                                        </div> 
                `
            }
        }
    }    
}
