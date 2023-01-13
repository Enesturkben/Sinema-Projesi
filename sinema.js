const container=document.querySelector(".container");
const adet=document.querySelector("#adet");
const ücret=document.querySelector("#ücret");
const select=document.querySelector("#movie")


container.addEventListener("click",function(e){

    if(e.target.classList.contains("seat") && !e.target.classList.contains("reseverd")){

        e.target.classList.toggle("selected");


      fiyathesaplama();



    }

});

 select.addEventListener("change",function(e){
    fiyathesaplama();
 })

function fiyathesaplama(e){
    let selectedsayısı=container.querySelectorAll(".seat.selected").length;

    adet.innerText=selectedsayısı;

    let price= select.value;

    ücret.innerText= selectedsayısı*price;
}

