$(function()
{
     let currentIndex = 0;
     $(".imageWrap").append($(".image").first().clone(true));
     //첫 번째 이미지를 복사해서 마지막 사진으로 추가

     setInterval(()=>
     {  //3초에 한 번씩 실행
        currentIndex++; //현재 이미지를 1씩 증가시킴
        $(".imageWrap").animate({marginTop: -400 * currentIndex + "px"}, 600);

        if(currentIndex == 3)
        { //마지막 이미지일 경우
            setTimeout(()=>
            { 
                $(".imageWrap").animate({marginTop: 0 + "px"},0); //애니메이션 정지
                currentIndex = 0; //현재 이미지 초기화
            });
        }
     },3000);

     // menu

    $(".nav > ul > li").mouseover(function()
    {
        $(this).find(".submenu").stop().slideDown();
    });
    $(".nav > ul > li").mouseout(function()
    {
        $(this).find(".submenu").stop().slideUp();
    });

    //popup view

    $(".popup-btn").click(function(){
        $(".popup-view").show();
    });
    $(".popup-close").click(function(){
        $(".popup-view").hide();
    });
    
});
