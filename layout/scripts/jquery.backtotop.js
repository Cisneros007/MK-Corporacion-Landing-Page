/*
Template Name: Chillaid
Author: <a href="https://www.os-templates.com/">OS Templates</a>
Author URI: https://www.os-templates.com/
Copyright: OS-Templates.com
Licence: Free to use under our free template licence terms
Licence URI: https://www.os-templates.com/template-terms
File: Back to Top JS
*/

jQuery("#backtotop").click(function () {
    jQuery("body,html").animate({
        scrollTop: 0
    }, 600);
});
jQuery(window).scroll(function () {
    if (jQuery(window).scrollTop() > 150) {
        jQuery("#backtotop").addClass("visible");
    } else {
        jQuery("#backtotop").removeClass("visible");
    }

    
});
// Script para filtrar las categorías
$(document).ready(function() {
    // Filter portfolio items
    $('.filters a').click(function() {
        var filter = $(this).data('filter');
        $('.portfolio-container .col-md-6').hide();
        $('.portfolio-container .col-md-6' + filter).fadeIn();
        $('.filters a').removeClass('active');
        $(this).addClass('active');
    });

    // Show all items by default
    $('.filters a.active').click();
});

/** Mision Y VISion */
document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll('.section-content');

    window.addEventListener('scroll', () => {
        const scrollPos = window.scrollY + window.innerHeight;
        sections.forEach(section => {
            if (section.getBoundingClientRect().top + window.scrollY < scrollPos) {
                section.classList.add('visible');
            }
        });
    });

    // Hacer visibles las secciones al cargar
    sections.forEach(section => {
        section.classList.add('visible');
    });
});

