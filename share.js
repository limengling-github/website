 // <script type="text/javascript">
     
    $(function(){
        $(".image").hover(function(){
            var title=$(this).attr("data-title");
            $(".tip em").text(title);
            var pos=$(this).offset().left-500;
            var dis=($(".tip").outerWidth()-$(this).outerWidth())/2;
            var f=pos-dis;
            $(".tip").css({"left":f+"px"}).animate({"top":-90,"opacity":1},300);
        },function(){
            $(".tip").animate({"top":-120,"opacity":0},300);
        })
    })

// </script>