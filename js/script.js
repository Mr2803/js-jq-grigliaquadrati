$(document).ready(function () {

    var punteggio = 0;

$(".red").click(function (){
    $(this).css("background" , "red")
    
    punteggio ++;
    console.log(punteggio)
});

$(".green").click(function (){
    $(this).css("background" , "green")
});


/* console.log(punteggio) */








});