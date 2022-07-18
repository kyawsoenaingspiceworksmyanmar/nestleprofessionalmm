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
function show_detail_box(id) {
	$(id).addClass('show_detail');
	$(id).find('.btn_click_detail').click(function() {
		if($(id).hasClass('show_detail')){
			$(id).removeClass('show_detail');
		}
		else{
			$(id).addClass('show_detail');
		}
	});
}

$('#btnClick01').click(function() {
	show_detail_box('#materialDetail01');
});

$('#btnClick02').click(function() {
	show_detail_box('#materialDetail02');
});