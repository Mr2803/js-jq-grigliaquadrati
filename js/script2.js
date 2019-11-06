$(document).ready(function () {

    var punteggio = 0;
    var inner = document.getElementById("punteggio");
    $(".grid-item").click(function () {
       var red =  $(this);
       if(red.hasClass("red")){
           red.css("background", "red");
           punteggio++;
           inner.innerHTML = punteggio;
       }else{
           red.css("background", "green ")
       }

       
    });

   


    /* console.log(punteggio) */








});