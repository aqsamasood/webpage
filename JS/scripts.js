var Site={
	init:function(){
		this.tabs();
	},

	tabs:function()
	{
		tabContents = $('.tabs > ul'),
		tabHeadings=$('#tabHeadings li');

		//litsen to headings clicks
		tabHeadings.click(function(e){
			el = $(this);
			a = el.find("> a");
			target = a.attr('href');
			tabHeadings.removeClass("selected");
			$(this).addClass("selected"); 
			tabContents.hide();
			$(target).show();
			e.preventDefault();
		});
	}
}


$(document).ready(function(){
	Site.init();
});

