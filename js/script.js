$(document).ready(function () {

    //imposto una var punteggio a 0 che aumenta se viene trovato un quadratino rosso
    var punteggioR = 0;
    var punteggioG = 0;
    var inner = document.getElementById("punteggioR");
    var inner2 = document.getElementById("punteggioG");
    
    //tramite jquery imposto la mia funzione che si attiva tramite click
    $(".grid-item").click(function () {

        //assegno ad una variabile il valore $(this) in modo tale che si azioni sul singolo quadrato
       var redOrNot =  $(this);

       //imposto la condizione SE ha classe RED allora ...
        if (redOrNot.hasClass("red")){
            redOrNot.css("background", "red");
            punteggioR++;
            inner.innerHTML = punteggioR;
        //altrimenti ...
       } else{
            redOrNot.css("background", "green ")
            punteggioG++;
            inner2.innerHTML = punteggioG;
       }

       
    });

   


    /* console.log(punteggio) */








});