$(document).ready(function(){

    // preload
    $('.preloader').addClass('preloader--closeAnim');
    window.setTimeout(function () {
        $('.preloader').addClass('preloader--closed');
        $('.preloader').removeClass('preloader--closeAnim');
    }, 1000);
});

var inputInfo = $('.footer__form-input input[name="info"]');
var inputMail = $('.footer__form-input input[name="mail"]');
var field;



// Form input change
function inputChange(input){
    input.on('input', function(ev){
        field = $(ev.target).val();
        if(field != ''){
            console.log('filled');
            $(this).parent().children('.footer__form-label').addClass('footer__form-label--fixed');
        } else {
            $(this).parent().children('.footer__form-label').removeClass('footer__form-label--fixed');
        }
    })
}

inputChange(inputInfo);
inputChange(inputMail);

$("#form").submit(function(e){
    console.log('submit')
    e.preventDefault();
    $.ajax({
        // type: "POST",
        url: "send.php",
        data: $("#form").serialize(),
        success: function(data) {
            $(".result_form").html(data);
            $('.result_form').addClass('result_form--show')
        }
    });
});


var portfolioPadding;
var portfolioItems = $('.portfolio__item').length;

if(portfolioItems %2 == 0){
    $('.portfolio__wrap').addClass('portfolio__wrap--padding');
} else {
    $('.portfolio__wrap').removeClass('portfolio__wrap--padding');
}





