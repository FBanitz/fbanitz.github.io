$(document).ready(function() {

    function afficheValeurs() {
        $('#scrollTop').text( $(window).scrollTop() ); 
        $('#windowHeight').text( $(window).height() );  
        $('#documentHeight').text( $(document).height() );
    }

    afficheValeurs(); // Pour afficher les valeurs à l'affichage de la page
    $(window).on('scroll', afficheValeurs ); // Evénement scroll : défilement
    $(window).on('resize', afficheValeurs ); // Evénement resize : redimensionnement de la fenêtre


    $(window).on('scroll', function() {
    
        // Détection du bas de page
        // Le bas de page est atteint lorsque l'ensemble du document a été scrollé 
        // c'est à dire la somme de la hauteur de la fenêtre (window) + la hauteur scrollée (scrollTop) est égale à la hauteur du document
        
        if( $(window).height() + $(window).scrollTop() == $(document).height() ) {
            alert('bottom');
        }
            
    });


});