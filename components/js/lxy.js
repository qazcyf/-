$(".wrap .top_nav .top_left .text").on("click",function(){
    $("#xlcd").css("display","block");
})
$(".top_right .right .nex .s1").on("click",function(){
    console.log("ok")
    $(".top_right .right .xlcd2").css("display","block");
})
$(".center_left form .lpDivHeadD").on("click",function(){
    $(".center_left form .lpDivHeadD .mT12").css("display","none");
    $(".center_left form .lpDivHeadD .mT13").css("visibility","block");
})
$(".center_left form .lpDivHeadD").on("click",function(){
    $(".center_left form .lpDivHeadD .mT12").css("display","none");
    $(".center_left form .lpDivHeadD .mT13").css("visibility","block");
})
$("#syx").on("click",function(){
   console.log("ok");
   $("#xx").css("display","block");
   $("#tk").css("display","block");
})
$("#x1").on("click",function(){
    if($("#x1").val()!="1"){
        console.log($("#x1").val());
        console.log("ok");
    $("#pt").css("display","none");
    $("#x2").css("display","none");
   }else if($("#x1").val()=="1"){
       console.log("l")
    $("#pt").css("display","block");
    $("#x2").css("display","block");
   }
})

