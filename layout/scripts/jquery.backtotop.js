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

//Mensaje 
const btn = document.getElementById('button');

document.getElementById('form').addEventListener('submit', function(event) {
    event.preventDefault();

    btn.value = 'Enviando...';

    const name = document.getElementById('from_name').value;
    const message = document.getElementById('message').value;
    const email = document.getElementById('email').value;
    const fileInput = document.getElementById('cv');
    const file = fileInput.files.length > 0 ? fileInput.files[0] : null;

    if (!file) {
        sendEmail(null); 
    } else {
        alert("Archivo seleccionado, enviando...");
        const reader = new FileReader();
        reader.onload = function () {
            const base64File = reader.result.split(',')[1]; 
            sendEmail(base64File);
        };

        reader.onerror = function () {
            alert('Error al leer el archivo. Por favor, intenta nuevamente.');
        };

        reader.readAsDataURL(file); 
    }
});

function sendEmail(fileData) {
    const formData = {
        from_name: document.getElementById('from_name').value,
        message: document.getElementById('message').value,
        email: document.getElementById('email').value,
        cv: fileData, 
    };

    const serviceID = 'default_service';
   const templateID = 'template_rn8wqjl';
    
    emailjs.sendForm(serviceID, templateID, document.getElementById('form'))
        .then(() => {
            btn.value = 'Enviar Correo';
            alert('Correo enviado correctamente.');
            document.getElementById('form').reset(); // Limpiar formulario después de enviar
        })
        .catch((err) => {
            btn.value = 'Enviar Correo';
            alert('Hubo un error al enviar el correo. Intenta nuevamente.');
            console.error('Error:', err);
        });
    }    
