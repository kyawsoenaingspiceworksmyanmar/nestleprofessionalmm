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
$('.btn_click_detail').click(function() {
	if($(this).parents(".recipe_material_sec").hasClass("show_detail")){
		$(this).parents(".recipe_material_sec").removeClass("show_detail");
	}
	else{
		$(this).parents(".recipe_material_sec").addClass("show_detail");
	}
});

