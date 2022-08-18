AOS.init();

$(window).on("scroll resize", function(){
    if($(window).scrollTop()>0){
        $(".header").addClass("active");
    }else {
        $(".header").removeClass("active");
    }

    let atteTop = $("#feat-atte").offset().top;
    let beloTop = $("#feat-belo").offset().top;
    let workTop = $("#feat-work").offset().top;
    if($(window).scrollTop()<=atteTop){
        $(".feature").removeClass("bg2").addClass("bg1");
    }else if ($(window).scrollTop()>atteTop && $(window).scrollTop()<=beloTop){
        $(".feature").removeClass("bg1").addClass("bg2");
    }else if ($(window).scrollTop()>beloTop && $(window).scrollTop()<=workTop){
        $(".feature").removeClass("bg2").addClass("bg1");
    }else if ($(window).scrollTop()>workTop){
        $(".feature").removeClass("bg1").addClass("bg2");
    }
})

$(".btn-more").click(function(){
    $(".work_item-hide").slideDown(300);
})