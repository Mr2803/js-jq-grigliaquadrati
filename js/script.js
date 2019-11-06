$(document).ready(function () {

    //imposto una var punteggio a 0 che aumenta se viene trovato un quadratino rosso
    var punteggio = 0;
    var inner = document.getElementById("punteggio");
    
    //tramite jquery imposto la mia funzione che si attiva tramite click
    $(".grid-item").click(function () {

        //assegno ad una variabile il valore $(this) in modo tale che si azioni sul singolo quadrato
       var redOrNot =  $(this);

       //imposto la condizione SE ha classe RED allora ...
        if (redOrNot.hasClass("red")){
            redOrNot.css("background", "red");
            punteggio++;
            inner.innerHTML = punteggio;
        //altrimenti ...
       } else{
            redOrNot.css("background", "green ")
       }

       
    });

   


    /* console.log(punteggio) */








});