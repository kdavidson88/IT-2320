
var Home = {}

$(document).ready(function ()
{

    $(".player-number-button").click(function(){
       
        $.ajax({
        
            url: "Home/GetPlayerInformation",

            data: { PlayerNumber : $(".player-number-textbox").val() },

            success: function (response)
            {
                $(".output").innerHTML = response;
            },

       
        })
  
    
    });
})