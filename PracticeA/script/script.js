$(function()
{
    /*slider*/
    let currentIndex = 0;
    $(".slider").hide().first().show();

    setInterval(function()
    {
        let nextIndex = (currentIndex + 1) % 3;

        $(".slider").eq(currentIndex).fadeOut(1200);
        $(".slider").eq(nextIndex).fadeIn(1200);

        currentIndex = nextIndex;
    } , 3000);

    /*popup*/

    $(".popup-btn").click(function(){
        $(".popup-view").show();
    }); 
    $(".popup-close").click(function(){
        $("popup-view").hide();
    });

    /*tab menu*/
    const tabBtn = $(".info-menu>a");
    const tabCont = $(".info-cont>div");

    tabCont.hide().eq(0).show();

    tabBtn.click(function(){
        const index = $(this).index();

        $(this).addClass("active").sibilings().removeClass("active");
        tabCont.eq(index).show().sibilings().hide();
    });

    /* sub menu */

    $(".nav>ul>li").mouseover(function(){
        $(this).find(".submenu").stop().slideDown(200);
    });
    $(".nav>ul>li").mouseout(function(){
        $(this).find(".submenu").stop().slideUp(200);
    });
});