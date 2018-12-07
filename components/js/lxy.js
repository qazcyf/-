
$("#syx").on("click",function(){
   console.log("ok");
   $("#xx").css("display","block");
   $("#tk").css("display","block");
})
$("#x1").on("click",function(){
    if($("#x1").val()=="1"){
       console.log("l")
    $("#pt").css("display","block");
    $("#x2").css("display","block");
   }
})
    //网页上所用到的点击切换
    $(".check").on("click",function(){
        console.log($(this).attr("data-index"));
        console.log($(".spte").eq(parseInt($(this).attr("data-index"))));
        console.log($(".spte"));
        if($(".spte").eq(parseInt($(this).attr("data-index"))).attr("data-wih")=="off"){
            $(".spte").eq(parseInt($(this).attr("data-index"))).attr("data-wih","ok");
            $(".spte").eq(parseInt($(this).attr("data-index"))).slideDown("show");
        }else{
            $(".spte").eq(parseInt($(this).attr("data-index"))).attr("data-wih","off");
            $(".spte").eq(parseInt($(this).attr("data-index"))).slideUp("hide");
        }
    })

