window.onload=function(){
	
	// 导航栏
	
	var nav=document.getElementById("nav");
	var navs=nav.getElementsByTagName("li");
	var bg=document.getElementById("bg");
	for(var i=0;i<navs.length-1;i++){
		navs[i].index=i;
		navs[i].onclick=function(){
			bg.style.left=this.index*84+"px";
		}
	}

    // 回到顶部效果
	var toTop=document.getElementById("toTop");
	var isTop=true;
	var timer=null;

    window.onscroll=function(){  //在滚动条滚动时不断的触发
       if(!isTop){
       	clearInterval(timer);
       }
       isTop=false;
    }

 
    toTop.onclick=function(){
	    timer=setInterval(function(){
			var scrollTop=document.documentElement.scrollTop||document.body.scrollTop;
			var speed=Math.floor(-scrollTop/6);
			document.documentElement.scrollTop=document.body.scrollTop=scrollTop+speed;
			isTop=true;
			if(scrollTop==0){
				clearInterval(timer);
			}
	    },30)
    }
  
}





