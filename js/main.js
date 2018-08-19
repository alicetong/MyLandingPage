$( document ).ready(function() {
    /*Use JavaScript to capture all anchor clicks, and `console.log()` the element which has been clicked. */
    $("a").on("click",function(){
        var clickedID = $(this).attr("id")
        console.log("The item with id='"+clickedID+"' was clicked")
    });
});