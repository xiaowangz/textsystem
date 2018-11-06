$(".right ul li").hover(function() {
	$(this).find(".under").show();
}, function() {
	$(".under").hide();
})