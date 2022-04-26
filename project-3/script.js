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
//var coll = document.getElementsByClassName("card");
//var i;
//
//for (i = 0; i < coll.length; i++) {
//  coll[i].addEventListener("click", function() {
//    this.classList.toggle("bigger");
//    
//    var content = this.nextElementSibling;
//    if (cardContent.style.display === "block") {
//      cardContent.style.display = "none";
//    } else {
//      cardContent.style.display = "block";
//    }
//  });
//}
