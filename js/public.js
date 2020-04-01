$(function(){
	$('.tabs-item ul li:nth-child(2) a,.tabs-item ul li:nth-child(3) a,.tabs-item ul li:nth-child(4) a').click(function(){
		var target = $(this).attr('id');
		$('.tabs-item ul li a').removeClass('active');
		$('.tab-content-layer > div').removeClass('active').css('display','none');
		$(this).addClass('active');
		$('.'+target).addClass('active').fadeIn();
	});
	$('[data-toggle="tooltip"]').tooltip();
});
