$(document).ready(function () {


    /*INDEX.HTML*/

    $("button").click(function () {
        $("#about").toggle("medium")
    })


    /*POST PRODUCTION.HTML*/

    /*Packages*/

    $("#copper").click(function () {
        $("#package-1").toggle('medium').text("Photo retouching , Illustration and Coloring")
        
    })

    $("#copper").mouseenter(function(){
        $(this).css("background-color" , "brown").mouseleave(function(){
            $(this).css("background-color" , "black")
        })
    })


    $("#silver").click(function () {
        $("#package-2").toggle('medium').text("Photo retouching , Illustration and Coloring , Photo Manipulation Editing")
    })

    $("#silver").mouseenter(function(){
        $(this).css("background-color" , "silver").mouseleave(function(){
            $(this).css("background-color" , "black")
        })
    })

    $("#gold").click(function () {
        $("#package-3").toggle('medium').text("Photo retouching , Illustration and Coloring , Photo Manipulation Editing , Artistic Effects")
    })
    
    $("#gold").mouseenter(function(){
        $(this).css("background-color" , "gold").mouseleave(function(){
            $(this).css("background-color" , "black")
        })
    })

    /*prices*/

    $("#get-price-1").click(function(){
        $("#price-1").toggle("medium").text("15£ per item")
    })

     $("#get-price-2").click(function(){
        $("#price-2").toggle("medium").text("30£ per item")
    })

     $("#get-price-3").click(function(){
        $("#price-3").toggle("medium").text("45£ per item")
    })


    /*MY JOURNEY.HTML*/

  
    


    

})