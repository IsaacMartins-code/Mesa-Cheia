$(document).ready(function() {
    $('#mobile_btn').on('click', function() {
       $('#mobile_menu').toggleClass('active');
       $('#mobile_btn').find('i').toggleClass('fa-x');
    })
});

$(window).on('scroll', function (){
});

ScrollReveal().reveal('#navbar', {
    origin: 'bottom',
    duration: 1600,
    distance: '20%',
});

ScrollReveal().reveal('#cta', {
    origin: 'left',
    duration: 1600,
    distance: '20%',
});

ScrollReveal().reveal('#vocesabia , #vocesabia span', {
    origin: 'left',
    duration: 1600,
    distance: '20%',
});

ScrollReveal().reveal('#p1', {
    origin: 'left',
    duration: 1600,
    distance: '20%',
});

ScrollReveal().reveal('#sobreoprojeto, #sobreoprojeto span', {
    origin: 'right',
    duration: 1600,
    distance: '20%',
});

ScrollReveal().reveal('#p2', {
    origin: 'right',
    duration: 1600,
    distance: '20%',
});

ScrollReveal().reveal('#ondedoar', {
    origin: 'left',
    duration: 1600,
    distance: '20%',
});

ScrollReveal().reveal('#local', {
    origin: 'left',
    duration: 1600,
    distance: '20%',
});