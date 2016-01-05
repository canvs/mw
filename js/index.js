$(function() {
    // 初始化

    //导航
    $('header li').hover(function(){
    	if ($(this).hasClass('.active')) {
    		return;
    	}else {
    		$(this).siblings('.active').removeClass('active');
    		$(this).addClass('active');
    	}
    });
    $('.to-top').toTop();//滚动条
});
