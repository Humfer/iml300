$(document).ready(function () {
    $('#aCard').click(function () {
        //           alert("triggered");
        $(this).toggleClass('smaller');
        $('#aCard').toggleClasslass('writing');

    });
    $('#bCard').click(function () {
        //           alert("triggered");
        $(this).toggleClass('bigger');
        $('.strike').toggleClass('title-show');
       $('#justice').toggleClass('hide'); 
        $('#justice-quote').toggleClass('show');
//        $('.cardName').toggleclass('writing');

    });
    $('#cCard').click(function () {
        //           alert("triggered");
        $(this).toggleClass('bigger');
        $('.strike').toggleClass('title-show');
       $('#fear').toggleClass('hide'); 
        $('#fear-quote').toggleClass('show');
    });
    $('#dCard').click(function () {
        //           alert("triggered");
        $(this).toggleClass('bigger');
        $('#man-quote').toggleClass('show');
        $('#man').toggleClass('hide');
        $('.strike').toggleClass('title-show');
    });
    $('#eCard').click(function () {
        //           alert("triggered");
        $(this).toggleClass('bigger');
        $('#freedom-quote').toggleClass('show');
        $('#freedom').toggleClass('hide');
        $('.strike').toggleClass('title-show');
    });
    $('.menu-button').click(function () {
        $(this).toggleClass('open');
        $('.menu').toggleClass('open');
        $('.menu-bg').toggleClass('cover');
    });

});


function openNav() {
    document.getElementById("myNav").style.width = "30%";
}

/* Close when someone clicks on the "x" symbol inside the overlay */
function closeNav() {
    document.getElementById("myNav").style.width = "10%";
}

function update(e){
  var x = e.clientX || e.touches[0].clientX
  var y = e.clientY || e.touches[0].clientY

  document.documentElement.style.setProperty('--cursorX', x + 'px')
  document.documentElement.style.setProperty('--cursorY', y + 'px')
}

document.addEventListener('mousemove',update)
document.addEventListener('touchmove',update)