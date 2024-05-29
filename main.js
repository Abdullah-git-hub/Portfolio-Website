$(document).ready(function () {
    $(".serviceCard").hover(
        function () {
            $(this).addClass("activeServiceCard");
            $(".serviceCard").not(this).removeClass("activeServiceCard");
            var topValue = $(".activeServiceCard").position().top;
            $(".allServicesBack").css({
                top: topValue,
            });

            handleServicesCardCSS();
        },
        function () {
            $(this).removeClass("activeServiceCard");
            document
                .getElementsByClassName("serviceCard")[0]
                .classList.add("activeServiceCard");
            var topValue = $(".activeServiceCard").position().top;
            $(".allServicesBack").css({
                top: topValue,
            });
            handleServicesCardCSS();
        }
    );
});

handleServicesCardCSS();

$(window).on("scroll", function () {
    document.querySelectorAll(".odometer")[0].innerHTML = 7;
    document.querySelectorAll(".odometer")[1].innerHTML = 30;
    document.querySelectorAll(".odometer")[2].innerHTML = 1.2;
    document.querySelectorAll(".odometer")[3].innerHTML = 52;
});

function handleServicesCardCSS() {
    const allServiceCards = document.getElementsByClassName("serviceCard");

    for (i = 0; i < allServiceCards.length; i++) {
        if (allServiceCards[i].classList.contains("activeServiceCard")) {
            allServiceCards[i].querySelector("h2").style.color = "white";
            allServiceCards[i].querySelector("i").style.transform =
                "rotate(0deg)";
        } else {
            allServiceCards[i].querySelector("h2").style.color =
                "var(--theme-primary)";
            allServiceCards[i].querySelector("i").style.transform =
                "rotate(90deg)";
        }
    }
}

// handling catagory
$(".catagory").click(function () {
    const catagoryType = $(this).attr("data-filter");

    if (catagoryType == "all") {
        $(".work").show("1000");
    } else {
        $(".work")
            .filter("." + catagoryType)
            .show("1000");
        $(".work")
            .not("." + catagoryType)
            .hide("1000");
    }

    $(this).addClass("activeCatagory").siblings().removeClass("activeCatagory");
});

// owl carousel
$(".owl-carousel").owlCarousel({
    loop: true,
    margin: 20,
    nav: false,
    responsiveBaseElement: ".testimonialCards",
    responsiveClass: true,
    autoplay: true,
    autoplayTimeout: 2000,
    autoplayHoverPause: true,
    responsive: {
        0: {
            items: 1,
        },
        600: {
            items: 3,
        },
    },
});
