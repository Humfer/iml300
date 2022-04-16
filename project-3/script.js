$(document).ready(function () {
        $('div.card').click(function(){
           alert("triggered");
        $(this).toggleClass('bigger');
        });
        
});
            function openNav() {
                document.getElementById("myNav").style.width = "30%";
            }

            /* Close when someone clicks on the "x" symbol inside the overlay */
            function closeNav() {
                document.getElementById("myNav").style.width = "10%";
            }
