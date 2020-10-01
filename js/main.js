



$(".question_wrapper").each(function(index) {
	
	$(this).find("label").click(function(){
	
		$(".question").eq(index).css("background","#82B1FF")
		$(".question").eq(index).find("h3").css("color","#fff")

	})
})