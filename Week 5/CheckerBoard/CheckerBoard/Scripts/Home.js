var Home = {}



Home.HighlightBackground = function ()
{
    /*$(".piece").click(function()
    {
        $(this).toggleClass("highlighted");
    })*/

    $(".piece").click(function()
    {
        if($(this).attr("class") == "piece")
        {
            $(this).addClass("highlighted");
            $(this).removeClass("piece");
        }
        else
        {
            $(this).addClass("piece");
            $(this).removeClass("highlighted");
        }
    })
  
}

Home.MovePiece= function()
{
    
}






$(document).ready(function ()
{
    var cells = $(".cell");
    var colorCount = 0;

    for (var i = 0; i < cells.length; i++)
    {
        var cell = $(cells[i]);
        var isDark = colorCount % 2 == 0;
        var isNextRow = (i + 1) % 8 == 0;
        colorCount += isNextRow ? 2 : 1;
        cell.css("background-color", isDark ? "navy" : "white");
    }   
    
    
    Home.HighlightBackground();

    
});

