//Currently incomplete and working on. Using sample code to trouble shoot issues



var LastElement = {}
var CurrentElement = {};

function ToggleHighlight()
{
    var current = $(CurrentElement);
    var last = $(LastElement);

    

    current.removeClass("cell");
    current.addClass("highlighted");
    last.removeClass("highlighted");
    last.addClass("cell");
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
    
    $(".cell").click(function () {
        CurrentElement = this;
        ToggleHighlight();
        LastElement = this;
    })
    
});

