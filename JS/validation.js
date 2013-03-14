$("ul li:first-child").click(
function()
{
$(this).show("#categories");
})
// show(var){
// 	for (var i = arr.length - 1; i >= 0; i--) {
// 		arr[i]
// 	};
// }
function validateForm()
{
var x=document.forms["myForm"]["email"].value;
var atpos=x.indexOf("@");
var dotpos=x.lastIndexOf(".");
if (atpos<1 || dotpos<atpos+2 || dotpos+2>=x.length)
  {
  alert("Not a valid e-mail address");
  return false;
  }
}
