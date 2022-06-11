$(function() {
    
    $(".sub, .submenu, .menu_cover").hide();


    // .submenu 딜레이 주기

    $("nav").mouseover(function() {
        $(".sub, .submenu,.menu_cover").stop().slideDown();
        $("nav").css("height","250px");
    });
    
    $("nav").mouseout(function() {
        $(".sub, .submenu, .menu_cover").stop().slideUp();
        $("nav").css("height","0px");
    });


    $(".mainmenu>li").mouseover(function() {
        $(".ad",this).addClass("sub_hover");
    });

    $(".mainmenu>li").mouseout(function() {
        $(".ad",this).removeClass("sub_hover");
    });




    
    //윈도우 리사이징
    var wTabTheme = $(".day_cover").width(); //테마 커버 와이드값

    function resizing() {
        $(window).resize(function() {
            ww = $(window).width();
            $(".slide_cover>div").animate({width:ww+"px"},0);
            wTabTheme = $(".day_cover").width();
        });
    };

    setInterval(resizing, 100);



    // 메인슬라이드

    var ww = $(window).width();
    
    $(".slide_cover>div").css("width",ww+"px");
    $(".slide_cover>div").not(":eq(0)").css("left",ww+"px");




    
    // 슬라이드 0-1-2-3-4-0-1-2-3-4
    
    var slideNow = 0;
    var slideNum = 3;
    
    function slide() {
        $(".slide_cover>div").not(":eq("+slideNow+")").css("left",ww+"px");
        
        slideNow = slideNow == slideNum ? 0 : slideNow+=1;
        
        $(".slide_cover>div").eq(slideNow-1).animate({left:-ww+"px"},500);
        $(".slide_cover>div").eq(slideNow).animate({left:"0px"},500, function() {
            $(".slide_cover>div").not(":eq("+slideNow+")").css("left",ww+"px");
        });
        $(".textbullet>li").removeClass("slide_click");
        $(".textbullet>li").eq(slideNow+1).addClass("slide_click");
    };
    
    var clear = setInterval(slide,3000);

    // 마우스 오버시 멈췄다 아웃시 다시시작

    $(".slide_cover").mouseover(function() {
        clearInterval(clear);
    })

    $(".slide_cover").mouseout(function() {
        clear = setInterval(slide,3000);
    });


    //키워드 클릭

    $(".textbullet>li").not(":eq(0)").click(function() {
        var bulletNum = ($(this).index())-1;

        if(slideNow==bulletNum) return;
        else {
            $(".slide_cover>div").not(":eq("+slideNow+")").css("left",ww+"px");
            $(".slide_cover>div").eq(slideNow).animate({left:-ww+"px"},500);
            $(".slide_cover>div").eq(bulletNum).animate({left:"0px"},500, function() {
                $(".slide_cover>div").not(":eq("+bulletNum+")").css("left",ww+"px");
            });
            $(".textbullet>li").removeClass("slide_click");
            $(".textbullet>li").eq(bulletNum+1).addClass("slide_click");
            // $(".textbullet>li").not(":eq("+bulletNum+")").removeClass("slide_click");

            slideNow = bulletNum
        };
    });



    // 멋과맛

    $(".placeimg>div").not(":eq(0)").hide();
    $(".place_text>li").not(":eq(0)").hide();
    $(".foods_cover>div").not(":eq(0)").hide();
    $(".foods_text>ul>li>h3").not(":eq(0)").hide();
    $(".foods_text>div>p").not(":eq(0)").hide();
    


    $(".place_prev").hide();
    
    var placeNum = 0;
    
    $(".place_next").click(function() {
        var placeImgNum = ($(".placeimg").index())-1;

        // alert(placeImgNum);
        
        if(placeNum==placeImgNum) return;
        else {
            placeNum+=1;
            $(".placeimg>div").not(":eq("+placeNum+")").fadeOut();
            $(".place_text>li").not(":eq("+placeNum+")").fadeOut();
            $(".placeimg>div").eq(placeNum).fadeIn();
            $(".place_text>li").eq(placeNum).fadeIn();
        };

        if(placeNum==placeImgNum) {
            $(".place_next").hide();
        } else {
            $(".place_next").show();
        }

        if(placeNum>=1) {
            $(".place_prev").show();
        }else {
            $(".place_prev").hide();
        }

    });

    $(".place_prev").click(function() {
        var placeImgNum = ($(".placeimg").index())-1;
        
        // alert(placeNum);
        
        if(placeNum==0) return;
        else {
            placeNum-=1;
            $(".placeimg>div").not(":eq("+placeNum+")").fadeOut();
            $(".place_text>li").not(":eq("+placeNum+")").fadeOut();
            $(".placeimg>div").eq(placeNum).fadeIn();
            $(".place_text>li").eq(placeNum).fadeIn();
        };

        if(placeNum==placeImgNum) {
            $(".place_next").hide();
        } else {
            $(".place_next").show();
        }

        if(placeNum>=1) {
            $(".place_prev").show();
        }else {
            $(".place_prev").hide();
        }

    });


    var foodNum = 0;

    $(".foods_prev").hide();
    
    $(".foods_next").click(function() {
        var foodImgNum = ($(".foods_cover>div").length)-1;

        // alert(foodImgNum);

        
        if(foodNum==foodImgNum) return;
        else {
            foodNum+=1;
            $(".foods_cover>div").not(":eq("+foodNum+")").fadeOut();
            $(".foods_text>ul>li>h3").not(":eq("+foodNum+")").hide();
            $(".foods_text>div>p").not(":eq("+foodNum+")").hide();
            $(".foods_cover>div").eq(foodNum).fadeIn();
            $(".foods_text>ul>li>h3").eq(foodNum).fadeIn();
            $(".foods_text>div>p").eq(foodNum).fadeIn();
        };

        if(foodNum==foodImgNum) {
            $(".foods_next").hide();
        } else {
            $(".foods_next").show();
        }

        if(foodNum>=1) {
            $(".foods_prev").show();
        }else {
            $(".foods_prev").hide();
        }

    });

    $(".foods_prev").click(function() {
        var foodImgNum = ($(".foods_cover>div").length)-1;
        
        if(foodNum==0) return;
        else {
            foodNum-=1;
            $(".foods_cover>div").not(":eq("+foodNum+")").fadeOut();
            $(".foods_text>ul>li>h3").not(":eq("+foodNum+")").hide();
            $(".foods_text>div>p").not(":eq("+foodNum+")").hide();
            $(".foods_cover>div").eq(foodNum).fadeIn();
            $(".foods_text>ul>li>h3").eq(foodNum).fadeIn();
            $(".foods_text>div>p").eq(foodNum).fadeIn();
        };

        if(foodNum==foodImgNum) {
            $(".foods_next").hide();
        } else {
            $(".foods_next").show();
        }

        if(foodNum>=1) {
            $(".foods_prev").show();
        }else {
            $(".foods_prev").hide();
        }

    });


    //배너롤링
    $(".banner>li").not(":eq(0)").hide();
    var bannerNum = 3;
    var bannerNow = 0;

    function banner() {

        bannerNow = bannerNow == bannerNum ? 0 : bannerNow+=1;

        $(".banner>li").eq(bannerNow-1).fadeOut();
        $(".banner>li").eq(bannerNow).fadeIn();
    }

    setInterval(banner,3000);





    var dayNow = 0;
    var whoNow = 0;

    // 데스크탑
    if(ww>=1000) {

        $(".day .theme_prev").hide();

        function dayPage() {
            
            $(".day .theme_next").click(function() {
                
                if(dayNow>=0&&dayNow<=2) {
                    dayNow+=1;
                    var dayPage = 325*dayNow;
                    $(".day_cover>ul").animate({left:-dayPage+"px"},300);
                }
                else {
                    return;
                }

                if(dayNow==3) {
                    $(".day .theme_next").hide();
                } else {
                    $(".day .theme_next").show();
                }
        
                if(dayNow>=1) {
                    $(".day .theme_prev").show();
                }else {
                    $(".day .theme_prev").hide();
                }
    
                // alert(dayNow);
            });
    
            $(".day .theme_prev").click(function() {
                
                if(dayNow>=1&&dayNow<=3) {
                    dayNow-=1;
                    var dayPage = 325*dayNow;
                    $(".day_cover>ul").animate({left:-dayPage+"px"},300);
                }
                else {
                    return;
                }

                if(dayNow==3) {
                    $(".day .theme_next").hide();
                } else {
                    $(".day .theme_next").show();
                }
        
                if(dayNow>=1) {
                    $(".day .theme_prev").show();
                }else {
                    $(".day .theme_prev").hide();
                }

            });
        }

        dayPage();


        $(".who .theme_prev").hide();

        function whoPage() {
            $(".who_cover>ul>li").css("opacity","1");
    
            $(".who .theme_next").click(function() {
                
                if(whoNow>=0&&whoNow<=2) {
                    whoNow+=1;
                    var whoPage = 325*whoNow;
                    $(".who_cover>ul").animate({left:-whoPage+"px"},300);
                }
                else {
                    return;
                }

                if(whoNow==3) {
                    $(".who .theme_next").hide();
                } else {
                    $(".who .theme_next").show();
                }
        
                if(whoNow>=1) {
                    $(".who .theme_prev").show();
                }else {
                    $(".who .theme_prev").hide();
                }

            });
    
            $(".who .theme_prev").click(function() {
                
                if(whoNow>=1&&whoNow<=3) {
                    whoNow-=1;
                    var whoPage = 325*whoNow;
                    $(".who_cover>ul").animate({left:-whoPage+"px"},300);
                }
                else {
                    return;
                }

                if(whoNow==3) {
                    $(".who .theme_next").hide();
                } else {
                    $(".who .theme_next").show();
                }
        
                if(whoNow>=1) {
                    $(".who .theme_prev").show();
                }else {
                    $(".who .theme_prev").hide();
                }

            });
        }

        whoPage();




    } else if (ww>=481 && ww<=999) {

        //태블릿 

        
        // 기간별 dayPage

        $(".day .theme_prev").hide();
    
        function dayPage() {
    
            var dayNow = 0;
    
            $(".day .theme_next").click(function() {
                
                if(dayNow>=0&&dayNow<=4) {
                    dayNow+=1;
                    var dayPage = wTabTheme*dayNow;
                    $(".day_cover>ul").animate({left:-dayPage+"px"},300);
                }
                else {
                    return;
                }

                if(dayNow==4) {
                    $(".day .theme_next").hide();
                } else {
                    $(".day .theme_next").show();
                }
        
                if(dayNow>=1) {
                    $(".day .theme_prev").show();
                }else {
                    $(".day .theme_prev").hide();
                }
    
            });
    
            $(".day .theme_prev").click(function() {
                
                if(dayNow>=1&&dayNow<=5) {
                    dayNow-=1;
                    var dayPage = wTabTheme*dayNow;
                    $(".day_cover>ul").animate({left:-dayPage+"px"},300);
                }
                else {
                    return;
                }

                if(dayNow==4) {
                    $(".day .theme_next").hide();
                } else {
                    $(".day .theme_next").show();
                }
        
                if(dayNow>=1) {
                    $(".day .theme_prev").show();
                }else {
                    $(".day .theme_prev").hide();
                }
    
            });
        };
    
        dayPage();
    
    
        // 일행별 whoPage

        $(".who .theme_prev").hide();
        
        function whoPage() {
    
            var whoNow = 0;
    
            $(".who .theme_next").click(function() {
                
                if(whoNow>=0&&whoNow<=4) {
                    whoNow+=1;
                    var whoPage = wTabTheme*whoNow;
                    $(".who_cover>ul").animate({left:-whoPage+"px"},300);
                }
                else {
                    return;
                }

                if(whoNow==4) {
                    $(".who .theme_next").hide();
                } else {
                    $(".who .theme_next").show();
                }
        
                if(whoNow>=1) {
                    $(".who .theme_prev").show();
                }else {
                    $(".who .theme_prev").hide();
                }

            });
    
            $(".who .theme_prev").click(function() {
                
                if(whoNow>=1&&whoNow<=5) {
                    whoNow-=1;
                    var whoPage = wTabTheme*whoNow;
                    $(".who_cover>ul").animate({left:-whoPage+"px"},300);
                }
                else {
                    return;
                }

                if(whoNow==4) {
                    $(".who .theme_next").hide();
                } else {
                    $(".who .theme_next").show();
                }
        
                if(whoNow>=1) {
                    $(".who .theme_prev").show();
                }else {
                    $(".who .theme_prev").hide();
                }


            });
        };
    
        whoPage();
    } else if(ww<=480) {

        //모바일

        $(".day_cover>ul>li:nth-child(n+3)").hide();
        $(".who_cover>ul>li:nth-child(n+3)").hide();

        $(".day .add_btn").click(function() {
            var allNum = $(".day_cover>ul>li").length;
            var now = $(".day_cover>ul>li:visible").length;

            now = Math.floor(now/2)*2;

            if(now+2 == allNum) {
                $(this).hide();
            }

            if(now>=allNum) {
                return;
            }
            else {
                $(".day_cover>ul>li").hide();
                $(".day_cover>ul>li:nth-child(-n"+(now+2)+")").show();
            }
            return false;
        });

        $(".who .add_btn").click(function() {
            var allNum = $(".who_cover>ul>li").length;
            var now = $(".who_cover>ul>li:visible").length;

            now = Math.floor(now/2)*2;

            if(now+2 == allNum) {
                $(this).hide();
            }

            if(now>=allNum) {
                return;
            }
            else {
                $(".who_cover>ul>li").hide();
                $(".who_cover>ul>li:nth-child(-n"+(now+2)+")").show();
            }
            return false;
            
            
        });

    }
    else return;
    
    


});