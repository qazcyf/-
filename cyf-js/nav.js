function js2() {
    var dian_suo = true; // 判断三点是否被点击
    $(".nav_left_dian").on("click", function () {
        if (dian_suo) {
            $(".nav_yin").css("display", "block");
            dian_suo = false;
        } else {
            $(".nav_yin").css("display", "none");
            dian_suo = true;
        }
    })
    $(".yangshi2_dian").on("click", function () {
        $(this).parents("li").attr("class", "yangshi1");
    })
    $(".yangshi1_dian").on("click", function () {
        $(this).parents("li").attr("class", "yangshi2");
    })
    var jia_suo = true; // 判断加号隐藏
    $(".jia_xian").on("click", function () {
        if (jia_suo) {
            $(".jia_yin").css("display", "block");
            jia_suo = false;
        } else {
            $(".jia_yin").css("display", "none");
            jia_suo = true;
        }
    })
    var ren_suo = true; // 判断人头像隐藏
    $(".ren_suos").on("click", function () {
        if (ren_suo) {
            $(".renwu_yin").css("display", "block");
            ren_suo = false;
        } else {
            $(".renwu_yin").css("display", "none");
            ren_suo = true;
        }
    })
}