AOS.init();

$(window).on("scroll resize", function(){
    if($(window).scrollTop()>0){
        $(".header").addClass("active");
    }else {
        $(".header").removeClass("active");
    }

    // let atteTop = $("#feat-atte").offset().top;
    // let beloTop = $("#feat-belo").offset().top;
    // let workTop = $("#feat-work").offset().top;
    // if($(window).scrollTop()<=atteTop){
    //     $(".feature").removeClass("bg2").addClass("bg1");
    // }else if ($(window).scrollTop()>atteTop && $(window).scrollTop()<=beloTop){
    //     $(".feature").removeClass("bg1").addClass("bg2");
    // }else if ($(window).scrollTop()>beloTop && $(window).scrollTop()<=workTop){
    //     $(".feature").removeClass("bg2").addClass("bg1");
    // }else if ($(window).scrollTop()>workTop){
    //     $(".feature").removeClass("bg1").addClass("bg2");
    // }


    let featureTop = $("#feature").offset().top - 71;
    let featureBottom = featureTop + $("#feature").height();

    let worksTop = $("#work").offset().top - 71;
    let worksBottom = worksTop + $("#work").height();

    let flowTop = $("#flow").offset().top - 71;
    let flowBottom = flowTop + $("#flow").height();

    let contactTop = $("#contact").offset().top - 71;
    let contactBottom = contactTop + $("#contact").height();

    if($(window).scrollTop()>=featureTop && $(window).scrollTop()<featureBottom){
        $("#nav-feature").addClass("active").siblings(".gotoelement").removeClass("active");
    } else if ($(window).scrollTop()>=worksTop && $(window).scrollTop()<worksBottom) {
        $("#nav-work").addClass("active").siblings(".gotoelement").removeClass("active");
    } else if ($(window).scrollTop()>=flowTop && $(window).scrollTop()<flowBottom) {
        $("#nav-flow").addClass("active").siblings(".gotoelement").removeClass("active");
    } else if ($(window).scrollTop()>=contactTop && $(window).scrollTop()<contactBottom) {
        $("#nav-contact").addClass("active").siblings(".gotoelement").removeClass("active");
    } else {
        $(".header_nav li").removeClass("active");
    }


})

$(".btn-more").click(function(){
    $(".work_item-hide").slideDown(300);
    $(this).hide();
})

// contact
$(".contact_form_input").keydown(function(){
    $(this).parents(".contact_form_item").find(".contact_form_placeholder").hide();
})
$(".contact_form_input").keyup(function(){
    let val = $(this).val();
    if(val == ""){
        $(this).parents(".contact_form_item").find(".contact_form_placeholder").show();
    }
})

// customer
var swiper = new Swiper(".customer_swiper", {
    slidesPerView: 1.2,
    spaceBetween: 20,
    loop: true,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
    speed: 800,
    observeParents:true,
    observer:true,
    breakpoints: {
        400: {
            slidesPerView: 1.5,
        },
        768: {
            slidesPerView: 2.3,
        },
        900: {
            slidesPerView: 2.8,
        },
        1350: {
            slidesPerView: 3.8,
        }
    }
})

// qa
$(".qa_question").click(function(){
    $(this).parents(".qa_item").find(".qa_answer").slideToggle(300);
    $(this).find(".qa_right").toggleClass("active");
})

// gotoelement
$(".gotoelement").click(function(){
    let target = $(this).data("target");
    let top = $(target).offset().top - 70;
    $("html, body").animate({scrollTop:top},300);
    $(this).addClass("active");
})
