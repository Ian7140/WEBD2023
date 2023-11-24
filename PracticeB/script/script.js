$(function(){

    // imageslide
    let currentIndex = 0;
    $(".sliderWrap").append($(".slider").first().clone(true));

    setInterval(function(){
        currentIndex++;
        $(".sliderWrap").animate({marginLeft: -1200 * currentIndex + "px"},600);

        if(currentIndex == 3)
        {
            setTimeout(function(){
                $(".sliderWrap").animate({marginLeft : 0},0);
                currentIndex = 0;
            },600);
        }
    },3000);

    // popup
    $(".popup-btn").click(function(){
        $(".popup-view").show();
    });

    $(".popup-close").click(function(){
        $(".popup-view").hide();
    });

    // submenu

    $(".nav > ul > li").mouseover(function()
    {
        $(".nav > ul > li > ul").stop().fadeIn(100);
    });
    $(".nav > ul > li").mouseout(function()
    {
        $(".nav > ul > li > ul").stop().fadeOut(100);
    });

    
});