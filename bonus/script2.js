

$(document).ready(function () {

    //imposto una var punteggio a 0 che aumenta se viene trovato un quadratino rosso
    var punteggioR = 0;
    var punteggioG = 0;
    var inner = document.getElementById("punteggioR");
    var inner2 = document.getElementById("punteggioG");
    var classes = ["red","green"];
    

    console.log($(".grid-item"))
    //tramite jquery imposto la mia funzione che si attiva tramite click
    $(".grid-item").click(function () {
        //assegno ad una variabile il valore $(this) in modo tale che si azioni sul singolo quadrato

        var redOrNot =  $(this);
        
       //imposto la condizione per generare il colore dei quadrati random , con la condizione che
       //se il punteggio dei rossi è più alto di 14 allora non verranno più generati rossi
            if(punteggioR > 14){
                $(this).addClass("green")
            }else{
                $(this).addClass(classes[Math.floor(Math.random() * classes.length)]);
            }
                
            
   
       //imposto la condizione SE ha classe RED allora ...
        if (redOrNot.hasClass("red")){
            redOrNot.css("background", "red").fadeIn(3000).fadeOut(2000)/* .fadeOut(1000).fadeIn() */;
                redOrNot.off();
                punteggioR++;
                inner.innerHTML = punteggioR;
        //altrimenti ...
       } else{
                redOrNot.fadeIn().css("background", "green")/* fadeOut(1).fadeIn(function(){
                    $(this).html("<span>X</span>").css(
                        "background-color", "white",
                        "font-size", "100%")
                }); */
                punteggioG++;
                console.log(punteggioG)
                inner2.innerHTML = punteggioG;
                redOrNot.off();
       }

       
    });

   


    /* console.log(punteggio) */








});