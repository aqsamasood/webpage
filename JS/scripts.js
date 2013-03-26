
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
$.getJSON("https://api.twitter.com/1/statuses/user_timeline/aqsamasood.json?count=1&include_rts=1&callback=?", function(data) {
	
	
     $("#tweet1").html(data[0].text+"<br>");
     $("#tweet1").append(data[0].created_at);
     $("#tweet2").html(data[0].text);
     $("#tweet3").html(data[0].text);
});
$(document).ready(function(){
	
	Site.init();
});

