$(document).ready(function () {
    $("#photo .content").click(function () {
        console.log("hii");
        $("#photo-overlay").addClass("animated fadeInLeft open").on('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function () {
            $(this).removeClass("animated fadeInLeft");
        });
        $("#photo-overlay .product-content").addClass("animated flipInY ").one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function () {
            $(this).removeClass("animated flipInY");
        });
    });
    $("#photo-overlay .close-icon").click(function () {
        $("#photo-overlay").addClass("animated flipOutY ").one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function () {
            $(this).removeClass("animated flipOutY open");
        });
    });
    $("#dev .content").click(function () {
        $("#dev-overlay").addClass("animated fadeInRight open").on('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function () {
            $(this).removeClass("animated fadeInRight");
        });
        $("#dev-overlay .product-content").addClass("animated flipInY ").one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function () {
            $(this).removeClass("animated flipInY");
        });
    });
    $("#dev-overlay .close-icon").click(function () {
        $("#dev-overlay").addClass("animated flipOutY ").one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function () {
            $(this).removeClass("animated flipOutY open");
        });
    });




    $("#test").click(function () {
        console.log("hio");
        $("#dev-single").addClass("animated fadeInLeft open").one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function () {
            $(this).removeClass("animated fadeInRight");
        });
        $("#dev-single .product-content").addClass("animated flipInY ").one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function () {
            $(this).removeClass("animated flipInY");
        });
    });
    $("#dev-single .close-icon").click(function () {
        $("#dev-single").addClass("animated flipOutY ").one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function () {
            $(this).removeClass("animated flipOutY open");
        });
    });


    $("#test2").click(function () {
        console.log("hio2");
        $("#photo-single").addClass("animated fadeInRight open").one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function () {
            $(this).removeClass("animated fadeInRight");
        });
        $("#photo-single .product-content").addClass("animated flipInY ").one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function () {
            $(this).removeClass("animated flipInY");
        });
    });
    $("#photo-single .close-icon").click(function () {
        $("#photo-single").addClass("animated flipOutY ").one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function () {
            $(this).removeClass("animated flipOutY open");
        });
    });


    $(function () {
        var selectedClass = "";
        $("p").click(function () {
            selectedClass = $(this).attr("data-rel");
            $("#portfolio").fadeTo(100, 0.1);
            $("#portfolio div").not("." + selectedClass).fadeOut();
            setTimeout(function () {
                $("." + selectedClass).fadeIn();
                $("#portfolio").fadeTo(500, 1);
            }, 500);

        });
    });
});