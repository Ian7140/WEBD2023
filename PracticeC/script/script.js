$(function(){

    // slider
    let currentIndex = 0;
    $(".sliderWrap").append($(".slider").first().clone(true));

    setInterval(function(){
        currentIndex++;
        $(".sliderWrap").animate({marginLeft : -800 * currentIndex + "px"},600);
        if(currentIndex == 3)
        {
            setTimeout(function()
            {
                $(".sliderWrap").animate({marginLeft : 0 + "px"},0);
                currentIndex = 0;
            },700);
        }
    },3000);
    // popup
    $(".popup-btn").click(function()
    {
        $(".popup-view").show();
    });
    $(".popup-close").click(function()
    {
        $(".popup-view").hide();
    });

    // submenu
    $(".nav > ul > li").mouseover(function()
    {
        $(this).find(".submenu").stop().slideDown();
    });
    $(".nav > ul > li").mouseout(function()
    {
        $(this).find(".submenu").stop().slideUp();
    });
});