$(document).ready(function () {

    var punteggio = 0;

$(".red").click(function (){
    $(this).css("background" , "red")
    
    punteggio ++;
    document.getElementById("punteggio").innerHTML =  punteggio;
});

$(".green").click(function (){
    $(this).css("background" , "green")
});


/* console.log(punteggio) */








});