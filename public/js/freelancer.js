// Freelancer Theme JavaScript

(function($) {
    "use strict"; // Start of use strict

    // jQuery for page scrolling feature - requires jQuery Easing plugin
    $('.page-scroll a').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: ($($anchor.attr('href')).offset().top - 50)
        }, 1250, 'easeInOutExpo');
        event.preventDefault();
    });

    // Highlight the top nav as scrolling occurs
    $('body').scrollspy({
        target: '.navbar-fixed-top',
        offset: 51
    });

    // Closes the Responsive Menu on Menu Item Click
    $('.navbar-collapse ul li a').click(function(){ 
            $('.navbar-toggle:visible').click();
    });

    // Offset for Main Navigation
    $('#mainNav').affix({
        offset: {
            top: 100
        }
    })

    // Floating label headings for the contact form
    $(function() {
        $("body").on("input propertychange", ".floating-label-form-group", function(e) {
            $(this).toggleClass("floating-label-form-group-with-value", !!$(e.target).val());
        }).on("focus", ".floating-label-form-group", function() {
            $(this).addClass("floating-label-form-group-with-focus");
        }).on("blur", ".floating-label-form-group", function() {
            $(this).removeClass("floating-label-form-group-with-focus");
        });
    });

})(jQuery); // End of use strict

var verbalTime = "";
var gameMode = "";

$(function() {
    $.ajaxSetup({
        headers: { 'X-CSRF-Token' : $('meta[name=_token]').attr('content') }
    });
})

function question(elemento) {
    var id = elemento.attr("id");
    var res = id.split("-");
    gameMode = res[0];
    verbalTime = res[1];
    console.log(res[1]);
    $.ajax({
        // la URL para la petición
        url : 'question',
        data : { gameMode : res[0], verbalTime : res[1] , '_token': $('input[name=_token]').val()},
        type : 'POST',
        dataType : 'json',
        success : function(json) {
            var string = "";
            if(verbalTime=="simplePast")
                string += '<center><h2>Complete the sentence with simple past</h2></center><hr class="star-primary">';
            else
                string += '<center><h2>Complete the sentence with past progressive</h2></center><hr class="star-primary">';
            
            if(gameMode=="completation"){
                elemento.parents('.modal-body').html(
                    string+'<h3>'+json[0].firstPart+' <input type="text" id="complete"> '+json[0].secondPart+'</h3><br><center><button type="button" class="btn btn-primary answer" id="'+json[0].id+'">Submit</button></center>'
                );
            }
            else{
                if(verbalTime=="simplePast"){                    
                    var num1 = Math.floor((Math.random() * 5) + 1);
                    var num2 = 0; 
                    var num3 = 0;  
                    var num4 = 0; 
                    var num5 = 0; 
                    while((num2==num1)||(num2==0)){
                        num2 = Math.floor((Math.random() * 5) + 1);
                    }
                    while((num3==num1)||(num3==num2)||(num3==0)){
                        num3 = Math.floor((Math.random() * 5) + 1);
                    }
                    while((num4==num1)||(num4==num2)||(num4==num3)||(num4==0)){
                        num4 = Math.floor((Math.random() * 5) + 1);
                    }
                    while((num5==num1)||(num5==num2)||(num5==num3)||(num5==num4)||(num5==0)){
                        num5 = Math.floor((Math.random() * 5) + 1);
                    }
                    string += '<h3>'+json[0].firstPart+' ____________ '+json[0].secondPart+'</h3>';
                    string += '<div class="radio"><label><input type="radio" name="options" id="option1" value="';
                    if (num1==5)
                        string += json[num1].answer+'"><h3>'+json[num1].answer+'</h3></label></div>';
                    else
                        string += json[num1].posibleAnswer+'"><h3>'+json[num1].posibleAnswer+'</h3></label></div>';
                    string += '<div class="radio"><label><input type="radio" name="options" id="option1" value="';
                    if (num2==5)
                        string += json[num2].answer+'"><h3>'+json[num2].answer+'</h3></label></div>';
                    else
                        string += json[num2].posibleAnswer+'"><h3>'+json[num2].posibleAnswer+'</h3></label></div>';
                    string += '<div class="radio"><label><input type="radio" name="options" id="option1" value="';
                    if (num3==5)
                        string += json[num3].answer+'"><h3>'+json[num3].answer+'</h3></label></div>';
                    else
                        string += json[num3].posibleAnswer+'"><h3>'+json[num3].posibleAnswer+'</h3></label></div>';
                    string += '<div class="radio"><label><input type="radio" name="options" id="option1" value="';
                    if (num4==5)
                        string += json[num4].answer+'"><h3>'+json[num4].answer+'</h3></label></div>';
                    else
                        string += json[num4].posibleAnswer+'"><h3>'+json[num4].posibleAnswer+'</h3></label></div>';
                    string += '<div class="radio"><label><input type="radio" name="options" id="option1" value="';
                    if (num5==5)
                        string += json[num5].answer+'"><h3>'+json[num5].answer+'</h3></label></div>';
                    else
                        string += json[num5].posibleAnswer+'"><h3>'+json[num5].posibleAnswer+'</h3></label></div>';
                }
                else{
                    var num1 = Math.floor((Math.random() * 4) + 1);
                    var num2 = 0; 
                    var num3 = 0;  
                    var num4 = 0; 
                    while((num2==num1)||(num2==0)){
                        num2 = Math.floor((Math.random() * 4) + 1);
                    }
                    while((num3==num1)||(num3==num2)||(num3==0)){
                        num3 = Math.floor((Math.random() * 4) + 1);
                    }
                    while((num4==num1)||(num4==num2)||(num4==num3)||(num4==0)){
                        num4 = Math.floor((Math.random() * 4) + 1);
                    }
                    string += '<h3>'+json[0].firstPart+' ____________ '+json[0].secondPart+'</h3>';
                    string += '<div class="radio"><label><input type="radio" name="options" id="option1" value="';
                    if (num1==4)
                        string += json[num1].answer+'"><h3>'+json[num1].answer+'</h3></label></div>';
                    else
                        string += json[num1].posibleAnswer+'"><h3>'+json[num1].posibleAnswer+'</h3></label></div>';
                    string += '<div class="radio"><label><input type="radio" name="options" id="option1" value="';
                    if (num2==4)
                        string += json[num2].answer+'"><h3>'+json[num2].answer+'</h3></label></div>';
                    else
                        string += json[num2].posibleAnswer+'"><h3>'+json[num2].posibleAnswer+'</h3></label></div>';
                    string += '<div class="radio"><label><input type="radio" name="options" id="option1" value="';
                    if (num3==4)
                        string += json[num3].answer+'"><h3>'+json[num3].answer+'</h3></label></div>';
                    else
                        string += json[num3].posibleAnswer+'"><h3>'+json[num3].posibleAnswer+'</h3></label></div>';
                    string += '<div class="radio"><label><input type="radio" name="options" id="option1" value="';
                    if (num4==4)
                        string += json[num4].answer+'"><h3>'+json[num4].answer+'</h3></label></div>';
                    else
                        string += json[num4].posibleAnswer+'"><h3>'+json[num4].posibleAnswer+'</h3></label></div>';
                }
                
                elemento.parents('.modal-body').html(
                    string+'<br><center><button type="button" class="btn btn-primary answer" id="'+json[0].id+'">Submit</button></center>'
                );
            }
            console.log(json);
            $('button.answer').on('click',function() {
                answer($(this));
            })
        },
        error : function(jqXHR, status, error) {
            alert('Disculpe, surgió un problema de comunicación');
        },
    });    
}

function answer(elemento) {
    var answer = "";
    var questionId = elemento.attr("id");
    var input = elemento.parents('.modal-body').children('h3').children('input#complete');
    if (input.length > 0){
        var auxAnswer = input.val();
        var res = auxAnswer.split(" ");
        var cont = 0;
        res.forEach(function(string) {
            if (string!=""){
                if (cont==0)
                    answer += string;
                else
                    answer += ' '+string;
                cont++;
            }
        });
        answer = answer.toLowerCase();
    }
    else
        answer = $('input:radio[name=options]:checked').val()
    $.ajax({
        // la URL para la petición
        url : 'answer',
        data : { questionId : questionId, answer : answer , '_token': $('input[name=_token]').val()},
        type : 'POST',
        dataType : 'json',
        success : function(json) {
            console.log(json)
            if (json.length>0){
                elemento.parents('.modal-body').html(
                    '<center><h2>The answer is correct</h2></center><hr class="star-primary"><br><center><button type="button" class="btn btn-primary continue" id="'+gameMode+'-'+verbalTime+'">Next question</button></center>'
                );
                $('button.continue').on('click',function() {
                    question($(this));
                })
            }
            else
                alert('The answer is incorrect. Try again!')
        },
        error : function(jqXHR, status, error) {
            alert('Disculpe, surgió un problema de comunicación');
        },
    });  
}


$('.gameMode').on('click',function() {
    question($(this));
})

$('.close-modal').on('click',function(){
    var id = $(this).parents('.modal-content').parents('.modal').attr("id");
    $(this).parents('.modal-content').children('.container').children('.row').children('.col-lg-8').children('.modal-body').html(
        '<center><h2>Choose a game mode</h2></center><hr class="star-primary"><h2 id="selection-'+id+'" class="gameMode"><span class="glyphicon glyphicon-asterisk"></span> Selection</h2><h2 id="completation-'+id+'" class="gameMode"><span class="glyphicon glyphicon-asterisk"></span> Completation</h2>'
    );
    $('.gameMode').on('click',function() {
        var id = $(this).attr("id");
        $(this).parents('.modal-body').html('HOLA!');
    })

    $('.gameMode').off('click');
    $('.gameMode').on('click',function() {
        question($(this));
    })
})
