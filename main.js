//menu-button
$(document).ready(() => {
    $('.menu-button').on('click', () => {
        $('.nav-menu').show()
    })
    
    $('.menu-button').on('mouseover', () => {
        $('.nav-menu').hide();
    })
    
}); 

//smooth-scroll
$('.nav-menu a').on('click', function (e) {
    if (this.hash !== '') {
    e.preventDefault();
    
    const hash = this.hash;
    
    $('html, body')
    .animate({
    scrollTop: $(hash).offset().top
    },800);
    }
});

//animated running text
function autoType(elementClass, typingSpeed){
    var textRun = $(elementClass);
    textRun.css({
    "position": "relative",
    "display": "inline-block"
    });
    textRun.prepend('<div class="cursor" style="right: initial; left:0;"></div>');
    textRun = textRun.find(".text-js");
    var text = textRun.text().trim().split('');
    var amountOfChars = text.length;
    var newString = "";
    textRun.text("|");
    setTimeout(function(){
    textRun.css("opacity",1);
    textRun.prev().removeAttr("style");
    textRun.text("");
    for(var i = 0; i < amountOfChars; i++){
        (function(i,char){
        setTimeout(function() {        
            newString += char;
            textRun.text(newString);
        },i*typingSpeed);
        })(i+1,text[i]);
    }
    },1500);
}
$(document).ready(function(){
    autoType(".type-js",300);
});


