/*$("#circle").click(function(){
    $("p").html("New text");
})

$("#circle").click(function(){
    ("p").html("This text was modified"); // Erro percebido: Esqueci o cifrão
});

$("#circle").click(function(){
    alert($("p").html());
}) */

$("#circle").hover(function(){
    $("p").fadeOut();
})