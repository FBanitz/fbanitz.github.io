$(document).ready(function(){


    // $('#next').on('click', function(){
    //     $('#slider li').first().appendTo('#slider ul');
    // })
    function animeNext(){
        $('#slider ul')
        .animate( {marginLeft:-400},800, function(){
            $('#slider ul li').first().appendTo('#slider ul').parent().css({marginLeft:0});
        });
    }

    $('#next').on('click', animeNext);


    
    


    $(selecteur).on(nomEvenement, fct)

    


});