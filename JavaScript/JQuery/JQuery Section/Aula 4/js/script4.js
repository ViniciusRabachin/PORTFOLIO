// $("#fadeOut").click(function(){
//     $("p").fadeOut("Slow", function(){
//         $("#circle").fadeIn();
//     });
// });

// $("span").click(function(){
//     $(this).fadeOut("slow", function(){
//         $("div").text($(this).text() + " ");
//     })
// })

// $("#toggle").click(function() {
//     if ($("p").css("display") == "none"){
//         $("p").fadeIn();
//         }else{ 
//             $("p").fadeOut();
//         }
//     });

var showingText = true;

    $("#toggle").click(function() {
        if (showingText){
            $("p").fadeOut(function() {
                showingText = false;
            });
            }else{ 
                $("p").fadeIn(function () {
                    showingText = true;
                });
            }
        });