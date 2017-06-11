window.onload=function(){
// 导航条
		var ul=document.getElementById("sign");
		var button=ul.getElementsByTagName("li");
		var slide=button[3];
		var contaner=document.getElementById("container");
		var pages=container.getElementsByTagName("div");
		for(var i=0;i<button.length-1;i++){
			button[i].index=i;
			button[i].onclick=function(e){
				// 下划线
				slide.style.left=(this.index)*100+"px";
                // 水波纹
	            var sp=document.createElement("span");
                sp.className="ripple";
				this.appendChild(sp);
                main.style.left=-(this.index)*960+"px";
				}
		}

		//表情导航
		var buttons=document.getElementById("buttons").getElementsByTagName("a");
		var moodBg=document.getElementById("mood-bg");
		for(var i=0;i<buttons.length;i++){
			buttons[i].index=i;
			buttons[i].onclick=function(){
				moodBg.style.left=this.index*(40+15)+"px";
			}
		}

		// 更换头像
function setImagePreview(){
	var docObj=document.getElementById("doc");
	var preview=document.getElementById("preview");
	if(docObj.files && docObj.files[0]){
		//火狐下直接设置img
		// preview.style.display="block";
		preview.style.width="112px";
		preview.style.height="112px";
		preview.src = window.URL.createObjectURL(docObj.files[0]);
	}
	else{
		edit.select();
		var imgSrc=document.selection.createRange().text;
		var localImg=document.getElementById("localImg");
		localImg.style.width="120px";
		localImg.style.height="170px";
		imgObjPreview.style.display = 'none';
        document.selection.empty();
	}
	return false;
}


//选择日期
var strYear=document.form1.year.outerHTML;
var strMonth=document.form1.month.outerHTML;
var strDate=document.form1.date.outerHTML;
var monthNum=[31,28,31,30,31,30,31,31,30,31,30,31];

//给年下拉框赋值
var y=new Date().getFullYear();
var yStr = strYear.substring(0, strYear.length - 9);
// console.log(str)
for(var i=(y-30);i<(y+30);i++){
	yStr+="<option value='"+i+"'>"+i+"</option>\r\n";
}
document.form1.year.outerHTML=yStr+"</select>"

//给月下拉框赋值
var mStr=strMonth.substring(0,strMonth.length-9);
for(var i=1;i<=12;i++){
    mStr+="<option value='"+i+"'>"+i+"</option>\r\n"
}
document.form1.month.outerHTML=mStr+"</select>";

document.form1.year.value = y;  
document.form1.month.value = new Date().getMonth() + 1;

// 二月闰年
var n=monthNum[new Date().getMonth()];
if(new Date().getMonth()==1&&isPinYear(y)){
	n++;
}
changeDate(n);
document.form1.date.value=new Date().getDate();


// 年发生变化时日期发生变化
function changeYear(str){
	var monthValue=document.form1.month.options[document.form1.month.selectedIndex].value;
	if(monthValue==""){
		date.outerHTML=strDate;
		return;
	}
		var n=monthNum[monthValue-1];
		if(monthValue==2&&isPinYear(str)){
			n++;
		}
		changeDate(n);
}

//月发生变化时日期联动
function changeMonth(str){
	var yearValue=document.form1.year.options[document.form1.year.selectedIndex].value;
	if(str==""){
		date.outerHTML=strDate;
		return;
	}
		var n=monthNum[str-1];
		if(n==2&&isPinYear(yearValue)){
			n++;
		}
		changeDate(n);
}

function changeDate(n){
	var dStr=strDate.substring(0,strDate.length-9);
	for(var i=1;i<(n+1);i++){
		dStr+="<option value='"+i+"'>"+i+"</option>\r\n"
	}
	document.form1.date.outerHTML=dStr+"</select>";
}

function isPinYear(year){
	return(0 == year%4 && (year%100 !=0 || year%400 == 0));
}

//添加事项
var addBtn=document.getElementById("note-title-button");
var contentNew=document.getElementById("content-new");
addBtn.onclick=function(){
	if(addBtn.innerHTML=="展开"){
		addBtn.innerHTML="收起";
		contentNew.className="content-new content-new-active";
	}
	else{
		addBtn.innerHTML="展开";
		contentNew.className="content-new";
	}
}

//添加事项
var contentAdd=document.getElementById("content-add");
contentAdd.onclick=function(){
	var selectedYear=document.form1.year.options[document.form1.year.selectedIndex].value;
    var selectedMonth=document.form1.month.options[document.form1.month.selectedIndex].value;
    var selectedDate=document.form1.date.options[document.form1.date.selectedIndex].value;
    var action=document.getElementById("action")
    var selectedAction=action.options[action.selectedIndex].value;
    var inputTitle=document.getElementById("input-title").value;
    var inputDescription=document.getElementById("input-description").value;

    var listContent='<div class="col-list-1">'+selectedAction+'</div><div class="col-list-2"><h4>'+inputTitle+'</h4><p>'+inputDescription+'</p></div><div class="col-list-3"><div id="cont_text_date">'+selectedYear+'-'+selectedMonth+'-'+selectedDate+'</div></div>';
    var li = document.createElement('li');
    li.className="list-shopping";
    li.ID="list-shopping";
    li.innerHTML=listContent;
    var ul=document.getElementById("list");
    ul.appendChild(li);
}
}
