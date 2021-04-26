$(document).ready(function(){
  

    $("button").click(function(){
       $("#about").toggle("medium")
    })


    /*POST PRODUCTION*/
    

   
    $("#basic").click(function(){
        $("#price-1").toggle('medium').text("5$")
    })

     $("#silver").click(function(){
        $("#price-2").toggle('medium').text("10$")
    })

     $("#gold").click(function(){
        $("#price-3").toggle('medium').text("20$")
    })




    
    
})