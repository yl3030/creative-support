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

    if($(window).width()<768){
        let featureTopM = $("#feature").offset().top - $(window).height();
        let featureTopM2 = $("#feature").offset().top;
        let featureBottomM = $("#feature").offset().top + $("#feature").height();
        let featureBottomM2 = $("#feature").offset().top + $("#feature").height() - $(window).height() + 60;
        // if($(window).scrollTop()>=featureTopM && $(window).scrollTop()){

        // }
        if($(window).scrollTop()>=featureTopM && $(window).scrollTop()<featureBottomM2){
            $(".feature-bg-right").addClass("active").removeClass("abso");
        }else if($(window).scrollTop()>=featureBottomM2 && $(window).scrollTop()<featureBottomM) {
            $(".feature-bg-right").addClass("abso").addClass("active");
        }else {
            $(".feature-bg-right").removeClass("abso").removeClass("active");
        }
    
        if($(window).scrollTop()>=featureTopM2 && $(window).scrollTop()<featureBottomM2){
            $(".feature-bg-left").addClass("active").removeClass("abso");
        }else if($(window).scrollTop()>=featureBottomM2 && $(window).scrollTop()<featureBottomM) {
            $(".feature-bg-left").addClass("abso").addClass("active");
        }else {
            $(".feature-bg-left").removeClass("active");
        }
    }else {
        $(".feature-bg").removeClass("active");
    }



    let featureTop = $("#feature").offset().top - 71;
    let featureBottom = featureTop + $("#feature").height();

    let worksTop = $("#work").offset().top - 71;
    let worksBottom = worksTop + $("#work").height();

    let customerTop = $("#customer").offset().top - 71;
    let customerBottom = customerTop + $("#customer").height();

    let serviceTop = $("#service").offset().top - 71;
    let serviceBottom = serviceTop + $("#service").height();

    let flowTop = $("#flow").offset().top - 71;
    let flowBottom = flowTop + $("#flow").height();

    let qaTop = $("#qa").offset().top - 71;
    let qaBottom = qaTop + $("#qa").height();

    let contactTop = $("#contact").offset().top - 71;
    let contactBottom = contactTop + $("#contact").height();

    if($(window).scrollTop()>=featureTop && $(window).scrollTop()<featureBottom){
        $("#nav-feature").addClass("active").siblings(".gotoelement").removeClass("active");
    } else if ($(window).scrollTop()>=worksTop && $(window).scrollTop()<worksBottom) {
        $("#nav-work").addClass("active").siblings(".gotoelement").removeClass("active");
    } else if($(window).scrollTop()>=customerTop && $(window).scrollTop()<customerBottom) {
        $("#nav-customer").addClass("active").siblings(".gotoelement").removeClass("active");
    } else if($(window).scrollTop()>=serviceTop && $(window).scrollTop()<serviceBottom) {
        $("#nav-service").addClass("active").siblings(".gotoelement").removeClass("active");
    } else if ($(window).scrollTop()>=flowTop && $(window).scrollTop()<flowBottom) {
        $("#nav-flow").addClass("active").siblings(".gotoelement").removeClass("active");
    } else if($(window).scrollTop()>=qaTop && $(window).scrollTop()<qaBottom) {
        $("#nav-qa").addClass("active").siblings(".gotoelement").removeClass("active");
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

// menu
$(".header_menu").click(function(){
    if($(this).hasClass("active")){
        $(this).removeClass("active");
        $(".header_nav").removeClass("active");
        $("body").css("overflow","visible");
    }else {
        $(this).addClass("active");
        $(".header_nav").addClass("active");
        $("body").css("overflow","hidden");
    }

    if(!$("header").hasClass("active")){ 
        $("header").addClass("active");
    }
})

$(".header_nav li").click(function(){
    if($(window).width()<992){
        $(".header_menu").removeClass("active");
        $(".header_nav").removeClass("active");
        $("body").css("overflow","visible");
    }
})