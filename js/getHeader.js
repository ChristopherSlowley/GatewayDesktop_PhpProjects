


function getHeader()
{
    //document.getElementById("headerRow").innerHTML = "The text from the intro paragraph is ";// + phpResult;
    myName = "Christopher";
    $.ajax({
        type: "POST",
        url: "php/segment.header.php",
        data: "name="+myName,
        success: function(data){
            phpResult = data;
            document.getElementById("headerRow").innerHTML = "The text for the intro paragraph is " + phpResult;
         //   console
        }
    });
}

