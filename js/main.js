$(document).ready(function(){
    var list = $("#picSrc ul li")
    $("#picSrc ul").css("width","70rem");
    var len = $("#picTit ul li").length
    var index = 0
function next(){
    $(".picSrc ul li:first-child").css("margin-left","-10rem")
    setTimeout(function(){
    	var tem = $(".picSrc ul li:first-child").clone();
         $(".picSrc ul li:first-child").remove();
         tem.css("margin-left","0");
         $(".picSrc ul").append(tem);
    },1000)
    if(index < len -1){
    	index++
    }else{index = 0}
    $("#picTit ul li").eq(index).addClass("active").siblings().removeClass("active")
 }
    	

setInterval(next,2000)
  



	function newshow(){
		var index=0;
		var newT = setInterval(function(){
			var list = $("#newlist").find("li");
			list.removeClass("active");
			list.eq(index).addClass("active");
			index++;
			if (index>list.length-1) {
				index=0;
			}
		},1500)
	}	
	newshow();

	$("#topbut").tap(function(){
		GoBlack();
	})
	$(window).on("scroll",function(){
		displayB()
	});

	function GoBlack(){
		$('html,body').scrollTop(0);

	}
	function displayB(){
		console.log($(window).scrollTop())
		if($(window).scrollTop() > 350){
			// $("#topbut").css("display","none");
			$("#topbut").css("display","block");
		}else{
			$("#topbut").css("display","none");
		}

	}
	
})