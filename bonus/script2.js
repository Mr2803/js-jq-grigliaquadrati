

$(document).ready(function () {

    $("button").click(function (){
        $(".global").fadeIn(500);
        $(this).parents(".preGame").fadeOut(500);
        
    })

    //imposto una var punteggio a 0 che aumenta se viene trovato un quadratino rosso
    var punteggioR = 0;
    var punteggioG = 0;
    var classes = ["red","green"];
    

    console.log($(".grid-item"))
    //tramite jquery imposto la mia funzione che si attiva tramite click
    

    
    $(".grid-item").click(function () {
        //assegno ad una variabile il valore $(this) in modo tale che si azioni sul singolo quadrato

        var redOrNot =  $(this);
        
       //imposto la condizione per generare il colore dei quadrati random , con la condizione che
       //se il punteggio dei rossi è più alto di 14 allora non verranno più generati rossi
            if(punteggioR >= 14){
                $(this).addClass("green");
                if(punteggioG < 20){
                    if (!alert('Complimenti hai vinto, premi OK per un\'altra partita')) { 
                        window.location.reload(); }
                }
            } else{
                $(this).addClass(classes[Math.floor(Math.random() * classes.length)]);
                
                if(punteggioG >= 19){
                    if (!alert('Mi dispiace hai perso , premi OK per un\'altra partita')) { window.location.reload(); }
                }
            }
        console.log("questa è la lunghezza di classes.length" + classes.length)     
            
   
       //imposto la condizione SE ha classe RED allora ...
        if (redOrNot.hasClass("red")){
            redOrNot.css("background", "#CD4747")/* .fadeOut(1000).fadeIn() */;
                redOrNot.off();
                punteggioR++;
            $('#punteggioR').fadeOut(500).text(punteggioR).fadeIn(500).css("color","#CD4747"); 
        //altrimenti ...
       } else{
            redOrNot.fadeIn().css("background", "#3DA042")/* fadeOut(1).fadeIn(function(){
                    $(this).html("<span>X</span>").css(
                        "background-color", "white",
                        "font-size", "100%")
                }); */
                punteggioG++;
                redOrNot.off();
                
            $('#punteggioG').fadeOut(500).text(punteggioG).fadeIn(500).css("color", "#3DA042"); 
             }

       
    });




    /* console.log(punteggio) */


});