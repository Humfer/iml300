$(document).ready(function () {
    $('#aCard').click(function () {
        //           alert("triggered");
        $(this).toggleClass('smaller');
        $('#aCard').toggleClasslass('writing');

    });
    $('#bCard').click(function () {
        //           alert("triggered");
        $(this).toggleClass('bigger');
        $('.cardName').toggleclass('writing');
    });
    $('#cCard').click(function () {
        //           alert("triggered");
        $(this).toggleClass('bigger');
        $('.cardName').toggleclass('writing');
    });
    $('#dCard').click(function () {
        //           alert("triggered");
        $(this).toggleClass('bigger');
        $('#man-quote').toggleClass('show');
         $('#man').toggleClass('hide');
    });
    $('#eCard').click(function () {
        //           alert("triggered");
        $(this).toggleClass('bigger');
        $('.cardName').toggleclass('writing');
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
