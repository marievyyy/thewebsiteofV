$(function () {
	var selectedClass = "";
	$(".filters ul > li").click(function () {
		$("li").removeClass("active");
		selectedClass = $(this).attr("data-rel");
		$(this).addClass("active");
		$("#portfolio").fadeTo(100, 0.1);
		$("#portfolio a").not("." + selectedClass).fadeOut().removeClass('scale-anm');
		setTimeout(function () {
			$("." + selectedClass).fadeIn().addClass('scale-anm');
			$("#portfolio").fadeTo(300, 1);
		}, 300);

	});
});