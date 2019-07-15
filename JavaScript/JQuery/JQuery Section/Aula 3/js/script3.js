// $("#circle").click(function(){
//     $("#circle").css("borderRadius", 0)
// })

// $("#circle").click(function(){
//     $(".square").hover(function(){
//         $(".sqr2").fadeOut();
//     })
// })

// $("div").click(function(){
//     $(this).css("display", "none");
// })

$("div").click(function(){
    if ($(this).attr("id") == "circle") {
        alert("you clicked at " + $(this).attr("id"));
    } else { alert("You're clicked at square")};
})