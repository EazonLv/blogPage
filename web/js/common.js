/*内容加载*/
$(".navi").html("<div class=\"header_main_page\">\n" +
    "            <div id=\"heaher\">My Blog</div>\n" +
    "            <div id=\"subheader\" class=\"subheader_main_page\"></div>\n" +
    "        </div>\n" +
    "        <a class=\"items\" href=\"./home.html\"><div>首页</div><div>Home</div></a>\n" +
    "        <a class=\"items\" href=\"./about_me.html\"><div>关于我</div><div>About Me</div></a>\n" +
    "        <a class=\"items\" href=\"./album.html\"><div>相册</div><div>Album</div></a>\n" +
    "        <a class=\"items\" href=\"./blog_and_daily.html\"><div>博客日记</div><div>Blog & Daily</div></a>\n" +
    "        <a class=\"items\" href=\"./message.html\"><div>留言</div><div>Message</div></a>\n" +
    "        <a class=\"items\" href=\"./link.html\"><div>友情链接</div><div>Link</div></a>")

$(".aside").html("<div>首页 home</div><div>关于我 about me</div><div>博客日记 blog & daily</div><div>留言 message</div><div>友情链接 link</div>")

$("#subheader").html("a small but exquisite website")

$(".copyright").text("Copyright © Eazon Lv from 2018.8")

$(".header").css("color","#fcfa")

$(".subheader").css("color","#fcfa")



/*动作*/


$(".aside div").prop("class","aside_content")

$(".aside div").hover(
    function () {
        $(this).css("border","1px solid #000000");
        $(this).css("border-radius","5px");
    },
    function () {
        $(this).css("border","none");
    }
)

$(".items").hover(
    function () {
        $(this).css("background","buttonface");
    },
    function () {
        $(this).css("background","white");
    }
)

$(".items").css("text-decoration","none")








