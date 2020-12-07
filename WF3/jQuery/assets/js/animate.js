$(document).ready(function(){

    // $('#content').animate( { width: "50%" }, 2000 );
    $('#b1').on('click', function(){
        $('#progression').animate( {width: "0%"}, 0)
        $('#progression').animate( {width: "100%"}, 3000 );
    })


});