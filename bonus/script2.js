

$(document).ready(function () {

    $("button").click(function (){
        $(".global").fadeIn(1500);
        $(this).parents(".preGame").fadeOut(100);
        
    })

    for(var i=0;i<64;i++){
        $(".grid-container").append("<div class=\"grid-item\"></div>")
    }

    //imposto una var punteggio a 0 che aumenta se viene trovato un quadratino rosso
    var punteggioR = 0;
    var punteggioG = 0;
    var classes = ["red","green"];
    

    console.log($(".grid-item"))
    //tramite jquery imposto la mia funzione che si attiva tramite click
    $(".grid-item").click(function () {
        //assegno ad una variabile il valore $(this) in modo tale che si azioni sul singolo quadrato

        var redOrNot =  $(this);
        
       /* imposto il primo IF dove se il punteggioR sarà maggiore o uguale a 14 allora l'unica classe che verrà aggiunta sarà la green --> */
            if(punteggioR >= 14){
                $(this).addClass("green");
                /* per vincere non basta la condizione che il punteggio dei rossi sia arrivato a 15 ma deve arrivarci PRIMA dei verdi , per cui pongo un iF punteggioG < 15 */
                if(punteggioG < 15){
                    /* se entrambe le condizioni sono state rispettate faccio partire un alert che avvisa l'utente di aver vinto e pongo una condizione su quest'ultimo dove se alert...(CHIEDI A SIMONE/NIKOLAS)  */
                    if (!alert('Complimenti hai vinto, premi OK per un\'altra partita')) { 
                        window.location.reload(); }
                }
            /* <-- altrimenti le classi vengono assegnate in maniera random */
            } else{
                $(this).addClass(classes[Math.floor(Math.random() * classes.length)]);
                    if(punteggioG >= 14){
                        if (!alert('Mi dispiace hai perso , premi OK per un\'altra partita')) { 
                            window.location.reload(); 
                            }
                        }
                    }
        /* console.log("questa è la lunghezza di classes.length" + classes.length)      */
            
   
       //imposto la condizione SE ha classe RED allora ...
            if (redOrNot.hasClass("red")){
                redOrNot.css("background", "#CD4747");
                    redOrNot.off();
                    punteggioR++;
                $('#punteggioR').fadeOut(500).text(punteggioR).fadeIn(500).css("color","#CD4747"); 
                console.log("punteggio rosso" + punteggioR)//debug

            //altrimenti ...
            } else{
                redOrNot.fadeIn().css("background", "#3DA042");
                    punteggioG++;
                    redOrNot.off();
                    
                $('#punteggioG').fadeOut(500).text(punteggioG).fadeIn(500).css("color", "#3DA042"); 
                console.log("punteggio verde" + punteggioG)//debug
                }


        });


});