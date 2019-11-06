$(document).ready(function () {

    //imposto una var punteggio a 0 che aumenta se viene trovato un quadratino rosso
    var punteggioR = 0;
    var punteggioG = 0;
    var inner = document.getElementById("punteggioR");
    var inner2 = document.getElementById("punteggioG");

    function getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min)) + min; //Il max è escluso e il min è incluso
    }
    
    //tramite jquery imposto la mia funzione che si attiva tramite click
    $(".grid-item").click(function () {
        //assegno ad una variabile il valore $(this) in modo tale che si azioni sul singolo quadrato
        var redOrNot =  $(this);
       

       //imposto la condizione SE ha classe RED allora ...
        if (redOrNot.hasClass("red")){
            redOrNot.fadeIn().css("background", "red").fadeOut(1000).fadeIn();
            redOrNot.off();
            punteggioR++;
            inner.innerHTML = punteggioR;
        //altrimenti ...
       } else{
            redOrNot.fadeIn().css("background", "green").fadeOut(1000).fadeIn(function(){
                $(this).css("background", "white")
            });
            punteggioG++;
            inner2.innerHTML = punteggioG;
            redOrNot.off();
       }

       
    });

   


    /* console.log(punteggio) */








});