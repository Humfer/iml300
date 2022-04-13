$(document).ready(function () {
    $('.floweranim').click(function () {
        $('p').toggle();
    });
    $('.keyboard').click(function (){
        $(this).toggleClass('change');
    });
    $('.floweranim').draggable();
});
