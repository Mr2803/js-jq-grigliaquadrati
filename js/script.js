$(document).ready(function () {

    var punteggio = 0;
    var inner = document.getElementById("punteggio");
    
    $(".grid-item").click(function () {

       var redOrNot =  $(this);

        if (redOrNot.hasClass("red")){
            redOrNot.css("background", "red");
            punteggio++;
            inner.innerHTML = punteggio;
       } else{
            redOrNot.css("background", "green ")
       }

       
    });

   


    /* console.log(punteggio) */








});