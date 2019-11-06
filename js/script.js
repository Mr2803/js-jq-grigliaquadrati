$(document).ready(function () {

    var punteggio = 0;
    var inner = document.getElementById("punteggio");
$(".red").click(function (){
    $(this).css("background" , "red");
    
    punteggio ++;
    inner.innerHTML =  punteggio;
});

$(". ").click(function (){
    $(this).css("background" , " ")
});


/* console.log(punteggio) */








});