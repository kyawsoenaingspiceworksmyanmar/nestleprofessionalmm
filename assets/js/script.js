$(document).ready(function(){
	$(".menu_link").click(function(){
		if($("body").hasClass("opened")){
			$("body").removeClass("opened");
		}
		else{
			$("body").addClass("opened");
		}
	});
});

// Recipe Material
$(document).ready(function(){
	$(".recipe_material_sec .btn_click_detail").click(function(){
		if($(".recipe_material_sec").hasClass("show_detail")){
			$(".recipe_material_sec").removeClass("show_detail");
		}
		else{
			$(".recipe_material_sec").addClass("show_detail");
		}
	});
});