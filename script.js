$(document).ready(function() {
    console.log("jQuery is ready!");

    // Part 1: Selectors & CSS
    $('#text-id').text("Changed using ID selector");
    $('.text-class').html("<strong>Changed using class selector</strong>");
    $('p').css('color', 'green');

    // Part 2: Visibility Methods
    $('#hide-btn').click(() => $('#hide-show-text').hide());
    $('#show-btn').click(() => $('#hide-show-text').show());
    $('#toggle-btn').click(() => $('#hide-show-text').toggle());

    $('#fade-in-btn').click(() => $('#fade-img').fadeIn());
    $('#fade-out-btn').click(() => $('#fade-img').fadeOut());
    $('#fade-toggle-btn').click(() => $('#fade-img').fadeToggle());

    $('#slide-toggle-btn').click(() => $('#slide-panel').slideToggle());

    // Part 3: DOM Manipulation
    let itemCount = 1;
    $('#add-item-btn').click(() => {
        itemCount++;
        $('#item-list').append(`<li>Item ${itemCount}</li>`);
    });
    $('#remove-item-btn').click(() => $('#item-list li:last').remove());

    $('#change-img-btn').click(() => $('#change-img').attr('src', '/images/Sunset.jpg'));
    $('#change-link-btn').click(() => {
    $('#change-link')
        .attr('href', 'https://yandex.kz/')
        .text('Visit Yandex')
        .css('color', '#e74c3c');
});


    $('#name-input').on('input', () => $('#preview-name').text('Name: ' + $('#name-input').val()));
    $('#email-input').on('input', () => $('#preview-email').text('Email: ' + $('#email-input').val()));

    // Part 4: Animations
    $('#animate-btn').click(() => {
        $('#animate-box').animate({ width: '200px', height: '200px', left: '100px' }, 1000);
    });

    $('#animate-seq-btn').click(() => {
        $('#animate-box').animate({ left: '200px' }, 500)
                         .animate({ top: '200px' }, 500)
                         .animate({ width: '50px', height: '50px' }, 500)
                         .animate({ left: '0px', top: '0px', width: '100px', height: '100px' }, 500);
    });

    $('#animate-combined-btn').click(() => {
    $('#animate-box').stop(true, true).css({
        left: '0px',
        top: '0px',
        width: '100px',
        height: '100px',
        opacity: 1
    });

    $('#animate-box').animate({
        left: '150px',
        top: '150px',
        width: '150px',
        height: '150px',
        opacity: 0.5
    }, 1000).animate({
        left: '0px',
        top: '0px',
        width: '100px',
        height: '100px',
        opacity: 1
    }, 1000);
});


    // Part 5: Accordion
    $('.accordion-header').click(function() {
        $(this).next('.accordion-content').slideToggle();
        $('.accordion-content').not($(this).next()).slideUp();
    });
});
